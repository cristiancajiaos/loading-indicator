import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, NgTemplateOutlet} from '@angular/common';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading-service';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';


@Component({
  selector: 'app-spinner-container',
  imports: [MatProgressSpinnerModule, AsyncPipe, NgTemplateOutlet],
  templateUrl: './spinner-container.html',
  styleUrl: './spinner-container.scss',
})
export class SpinnerContainer implements OnInit {

  loading$: Observable<boolean>;

  @Input() detectRouteTransitions: boolean = false; 

  @ContentChild("loading") customLoadingIndicator: TemplateRef<any>;

  constructor(
     private loadingService: LoadingService,
     private router: Router
  ) {
   this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    if (this.detectRouteTransitions) {
      this.router.events.pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingService.loadingOff();
          }
        })
      )
    }
  }
}
