import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private loggingIn_: boolean = false;

  public set loggingIn(value: boolean){
    this.loggingIn_ = value;
  }

  public get loggingIn(): boolean{
    return this.loggingIn_;
  }
}
