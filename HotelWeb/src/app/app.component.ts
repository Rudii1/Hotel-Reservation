import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgZorroModules } from './ngzorromodules'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzLayoutModule,ReactiveFormsModule,NzButtonModule,NzInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HotelWeb';
}
