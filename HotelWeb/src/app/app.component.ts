import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoNgZorroAntdModule } from './DemoNgZorroModules';
import { NzIconService } from 'ng-zorro-antd/icon';
import { UserOutline, LoginOutline } from '@ant-design/icons-angular/icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,DemoNgZorroAntdModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HotelWeb';
  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(UserOutline, LoginOutline);
  }
}
