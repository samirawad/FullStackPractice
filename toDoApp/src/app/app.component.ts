import { Component } from '@angular/core';
import{ Constants } from './config/constants'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = Constants.TitleOfSite;
}
