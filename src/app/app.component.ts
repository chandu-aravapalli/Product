import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header>
        <h1>Product Store</h1>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      text-align: center;
      margin-bottom: 30px;
    }

    h1 {
      color: #2c3e50;
      font-size: 2.5em;
    }
  `],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {}