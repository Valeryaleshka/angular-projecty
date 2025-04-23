import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-not-found',
  imports: [RouterLink],
  templateUrl: './app-not-found.component.html',
  styleUrl: './app-not-found.component.less',
})
export class AppNotFoundComponent implements OnInit {
  private router = inject(Router);
  ngOnInit() {
    console.log(this.router.url);
  }
}
