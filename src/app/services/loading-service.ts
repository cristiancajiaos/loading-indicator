import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private loadingService: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingService.asObservable();

  public loadingOn(): void {
    this.loadingService.next(true);
  }

  public loadingOff(): void {
    this.loadingService.next(false);
  }
}
