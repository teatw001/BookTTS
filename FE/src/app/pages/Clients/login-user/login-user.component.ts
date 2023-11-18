import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login-user',
  template: `
    <h1
      class="text-xl font-bold mb-4 leading-tight tracking-tight text-gray-900 md:text-2xl  flex justify-center items-center"
    >
      Đăng nhập
    </h1>
    <form
      nz-form
      [formGroup]="validateForm"
      class="login-form"
      (ngSubmit)="submitForm()"
    >
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your email!">
          <nz-input-group nzPrefixIcon="user" class="rounded-md">
            <input
              type="email"
              nz-input
              formControlName="email"
              placeholder="Email"
            />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock" class="rounded-md">
            <input
              type="password"
              nz-input
              formControlName="password"
              placeholder="Password"
            />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <div nz-row class="login-form-margin">
        <div nz-col [nzSpan]="12">
          <label nz-checkbox>
            <span>Remember me</span>
          </label>
        </div>
        <div nz-col [nzSpan]="12">
          <a class="login-form-forgot">Forgot password</a>
        </div>
      </div>
      <button
        nz-button
        class="login-form-button login-form-margin"
        [nzType]="'primary'"
      >
        Đăng nhập
      </button>

      <span className="flex justify-center mt-5">
        Bạn chưa có tài khoản?<a
          className="ml-1 font-normal text-blue-600 hover:text-red-500"
          routerLink="/register"
          >Đăng ký ngay!</a
        >
      </span>
    </form>
  `,
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `,
  ],
})
export class LoginUserComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      const { email, password } = this.validateForm.value;

      // Kiểm tra nếu cả email và password có giá trị
      if (email && password) {
        this.authService.login(email, password).subscribe(
          (data) => {
            localStorage.setItem('token', data.accessToken);
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
      } else {
        console.error('Email or password is undefined');
      }
    } else {
      // Xử lý khi form không hợp lệ
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
