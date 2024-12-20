  import { Component } from '@angular/core';
  import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';
  import { DemoNgZorroAntdModule } from '../../../DemoNgZorroModules';
  import { NzIconModule,NzIconService } from 'ng-zorro-antd/icon';
  import { UserOutline, LoginOutline } from '@ant-design/icons-angular/icons';
  import { AuthService } from '../../services/auth/auth.service';
  import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule,DemoNgZorroAntdModule,NzIconModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })
  export class RegisterComponent {

    registerForm!: FormGroup;

    constructor(private fb:FormBuilder,
              private iconService: NzIconService,
              private authService: AuthService,
              private message: NzMessageService,
              private router: Router){}

    
    ngOnInit() {
      this.registerForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        password: [null, Validators.required],
        name: [null, Validators.required]
      });
      this.iconService.addIcon(UserOutline, LoginOutline);
    }

    submitForm() {
      this.authService.register(this.registerForm.value).subscribe(res=>{
        if(res.id != null){
          this.message.success("Signup successful",{nzDuration: 5000});
          this.router.navigateByUrl("/");
        } else {
          this.message.error(`${res.message}`, {nzDuration: 5000}) 
        }
      })
    }
  }
