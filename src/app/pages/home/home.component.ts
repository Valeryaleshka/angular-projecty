import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  route = inject(ActivatedRoute);

  title = this.route.snapshot.data['title'];
}
