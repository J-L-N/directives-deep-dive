import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirectiveis active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('do you want to leave the app?');

    if(wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
