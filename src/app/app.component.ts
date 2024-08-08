import {Component, signal} from '@angular/core';
import {delay, of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSavedText = signal(false);

  save() {
    of(undefined)
      // if we don't include the delay here, all tests pass
      .pipe(delay(10))
      .subscribe(() => this.showSavedText.set(true));
  }
}
