import { AuthenticationService } from './../service/authentication.service';
import { CommonModule } from './../common/common.module';
import { logSuccess } from '../common/toast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  //styleUrls: ['./app.component.css']
})
export class AboutComponent { 
  //title = this.common.router.globals.params.id;
  username = "";

  constructor(private common: CommonModule, private authService: AuthenticationService){
    authService.getUser().then(resp => {
      //console.log(resp[0]);
      this.username = resp[0].username;
    })
  }

  refresh(){
    //common.refreshState();
    //this.common.refreshState();
    console.log(document.cookie);
    //logSuccess('Udah bisa nih')
  }
}
