import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MAT_MODULES from './material';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MAT_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodie-delight';
}
