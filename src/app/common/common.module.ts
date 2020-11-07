import { HttpClientModule } from '@angular/common/http';
import { config } from './../config';
import { UIRouter } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule as CommonAngular } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonAngular,
    HttpClientModule
  ]
})
export class CommonModule {
  constructor(public router: UIRouter, private http: HttpClientModule) { }
  
  // refresh the page
  refreshState() {
    this.router.stateService.reload();
  }

  // GET data from API
  async get(url: string) {
    return fetch(config.webApiHost + url)
    .then(response => response.json())
    .catch(e => alert(e));
  }

  // POST data to API
  async post(url: string, params) {
    return fetch(config.webApiHost + url,  {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
  })
    .then(response => response.json())
    .catch(e => alert(e));
  }

  // download file from server
  downloadFile(filepath: string){
    window.open(filepath, '_self');
  }

  // Generate random string
  generateArg(){
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for(var i = 0; i < 50; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  //Convert name to capital letters in a string
  convertName(name: string){
    return name.replace(/\b\w/g, l => l.toUpperCase());
  }
}