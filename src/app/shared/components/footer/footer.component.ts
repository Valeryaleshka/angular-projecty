import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GlobalStateService } from '../../../store/global/global.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { themes } from '../../common/constants/application.constants';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [
    AsyncPipe,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIcon,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
})
export class FooterComponent {
  private globalState = inject(GlobalStateService);

  currentTheme$ = this.globalState.currentTheme;

  changeTheme() {
    this.globalState.switchTheme();
  }

  protected readonly themes = themes;
}
