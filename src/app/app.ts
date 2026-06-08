import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingIndicator } from './components/loading-indicator/loading-indicator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingIndicator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loading-indicator');
}
