import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({alias: 'appAuth'});//Aalias allow us to binsd property directy to the appAuth in app.componrnt.html

  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
      } else {
        console.log('DO NOT SHOW ELEMENT');
      }
    });
  }

}
