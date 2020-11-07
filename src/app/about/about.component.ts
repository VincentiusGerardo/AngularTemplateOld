import { CommonModule } from './../common/common.module';
import { logSuccess } from '../common/toast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  //styleUrls: ['./app.component.css']
})
export class AboutComponent { 
  title = this.common.router.globals.params.id;

  constructor(private common: CommonModule){
    alert('Hello World!');
  }

  refresh(){
    //common.refreshState();
    //this.common.refreshState();
    logSuccess('Udah bisa nih')
  }
}
