import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({ alias: 'appAuth' });
  private authSrv = inject(AuthService);

  // we need these two to tell angular where to render what
  private templateRef = inject(TemplateRef); // give you access to the content of the template
  private viewContainerRef = inject(ViewContainerRef); // gives you access to the place in the DOM where this directive is being used

  constructor() {
    effect(() => {
      if (this.authSrv.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); // it create the element that is needed to be entered in the DOM which is this.templateRef
      } else {
        this.viewContainerRef.clear();
      }
    })
  }

}
