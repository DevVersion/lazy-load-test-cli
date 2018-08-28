import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Lazy-loaded module bug
    </h1>

    <button routerLink="/example">Go to example (lazy)</button>

    <br/>

    <router-outlet></router-outlet>`,
})
export class AppComponent {}
