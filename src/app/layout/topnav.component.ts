import { config } from './../config';
import { Component } from '@angular/core';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent { 
  title=config.appName;
  initial = config.appName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
  
  public isMenuCollapsed = true;
}
