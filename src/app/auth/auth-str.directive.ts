import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuthStr]',
  standalone: true
})
export class AuthStrDirective {

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  userType = input.required<Permission>({alias: 'appAuthStr'});

  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); //render the content of the templete in the DOM
      } else {
       this.viewContainerRef.clear();
      }
    });
  }

}
