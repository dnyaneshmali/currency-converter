import {Component, OnInit} from '@angular/core';
import {AppServices} from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppServices]
})
export class AppComponent {
  constructor() {
  }
}
