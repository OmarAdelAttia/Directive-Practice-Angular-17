import { Component, computed, inject } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, LogDirective],
  hostDirectives: [LogDirective]
})
export class AppComponent {

  private authSrv = inject(AuthService);

  isAdmin = computed(() => this.authSrv.activePermission() === 'admin');

}
