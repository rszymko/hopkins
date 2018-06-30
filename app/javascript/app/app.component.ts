import { Component } from '@angular/core';
import template from "./app.component.html"

@Component({
  selector: 'app-root',
  //template: `<h1>{{title}} inline</h1>`
  template: template
})
export class AppComponent {
  title = 'Booker';
}
