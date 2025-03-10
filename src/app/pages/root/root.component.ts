import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.less',
})
export class RootComponent implements OnInit {
  private router = inject(Router);
  ngOnInit() {
    console.log(this.router.url);
  }
}
