  import { Component } from '@angular/core';
  import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';
  import { DemoNgZorroAntdModule } from '../../../DemoNgZorroModules';
  import { NzIconModule,NzIconService } from 'ng-zorro-antd/icon';
  import { UserOutline, LoginOutline } from '@ant-design/icons-angular/icons';


  @Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule,DemoNgZorroAntdModule,NzIconModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })
  export class RegisterComponent {

    registerForm!: FormGroup;

    constructor(private fb:FormBuilder,private iconService: NzIconService){}

    
    ngOnInit() {
      this.registerForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        password: [null, Validators.required],
        name: [null, Validators.required]
      });
      this.iconService.addIcon(UserOutline, LoginOutline);
    }
  }
