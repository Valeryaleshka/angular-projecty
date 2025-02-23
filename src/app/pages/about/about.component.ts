import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
})
export class AboutComponent {
  route = inject(ActivatedRoute);

  title = this.route.snapshot.data['title'];
}
