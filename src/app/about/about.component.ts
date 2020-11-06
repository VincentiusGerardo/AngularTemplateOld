import { CommonModule } from './../common/common.module';
import { UIRouter, Transition } from '@uirouter/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  //styleUrls: ['./app.component.css']
})
export class AboutComponent { 
  title = this.uiRouter.globals.params.id;

  constructor(private uiRouter: UIRouter, private common: CommonModule){
    alert('Hello World!');
  }

  refresh(){
    //common.refreshState();
    this.common.refreshState();
  }
}
