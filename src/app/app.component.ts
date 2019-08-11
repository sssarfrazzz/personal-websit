import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sarfraz A R Shaikh';
  tabNavBackground="red";
  navLinks=[{path:'home',label:'Home'},
  {path:'blog',label:'Blog'}];
}
