import { Component } from '@angular/core';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home',
  imports: [NzAlertComponent, NzButtonComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  azz = 44;

  close() {
    console.log('close home');
    console.log(this.azz);
  }
}
