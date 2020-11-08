import { config } from './../config';
import { Component } from '@angular/core';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  //styleUrls: ['./app.component.css']
})
export class TopnavComponent { 
  title=config.appName;
}
