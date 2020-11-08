import { CommonModule } from './../common/common.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private common: CommonModule) { }

  getUser(){
    return this.common.get('user/getAll?args=' + this.common.generateArg());
  }
}
