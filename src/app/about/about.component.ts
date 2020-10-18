
import { UIRouter, Transition } from '@uirouter/angular';
import { Component } from '@angular/core';
import { common } from '../common/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  //styleUrls: ['./app.component.css']
})
export class AboutComponent { 
  title = this.uiRouter.globals.params.id;

  constructor(private uiRouter: UIRouter){
    alert('Hello World!');
  }

  refresh(){
    //common.refreshState();
    this.uiRouter.stateService.reload();
  }
}
