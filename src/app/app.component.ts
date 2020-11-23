import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'PoC Primeng Styles';
  public display: boolean = false;

  public showDialog(event) {
    this.display = true;
  }

  public closeDialog(event) {
    this.display = false;
  }
}
