import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-not-found',
  imports: [RouterLink],
  templateUrl: './app-not-found.component.html',
  styleUrl: './app-not-found.component.less',
})
export class AppNotFoundComponent {
  as = 'sdsd';
}
