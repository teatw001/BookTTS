import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'form-register',
  template: `
    <h1
      class="text-xl font-bold  leading-tight tracking-tight text-gray-900 md:text-2xl  flex justify-center items-center"
    >
      Đăng kí
    </h1>
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item class="block">
        <nz-form-label
          class="block"
          [nzSm]="7"
          nzFor="name"
          nzRequired
          nzTooltipTitle="What do you want other to call you"
        >
          <span>Name</span>
        </nz-form-label>
        <nz-form-control nzErrorTip="Please input your name!">
          <input nz-input id="name" formControlName="name" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item class="block">
        <nz-form-label [nzSm]="6" nzRequired nzFor="email" class="block"
          >E-mail</nz-form-label
        >
        <nz-form-control nzErrorTip="The input is not valid E-mail!">
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item class="block">
        <nz-form-label [nzSm]="7" nzFor="password" nzRequired class="block"
          >Password</nz-form-label
        >
        <nz-form-control nzErrorTip="Please input your password!">
          <input
            nz-input
            type="password"
            id="password"
            formControlName="password"
            (ngModelChange)="updateConfirmValidator()"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item class="block">
        <nz-form-label
          [nzSm]="10"
          nzFor="confirmPassword"
          nzRequired
          class="block"
          >Confirm Password</nz-form-label
        >
        <nz-form-control [nzErrorTip]="errorTpl">
          <input
            nz-input
            type="password"
            formControlName="confirmPassword"
            id="confirmPassword"
          />
          <ng-template #errorTpl let-control>
            <ng-container *ngIf="control.hasError('required')"
              >Please confirm your password!</ng-container
            >
            <ng-container *ngIf="control.hasError('confirm')">
              Two passwords that you enter is inconsistent!
            </ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item class="block">
        <nz-form-label [nzSm]="10" nzFor="phone" nzRequired class="block"
          >Phone Number</nz-form-label
        >
        <nz-form-control nzErrorTip="Please input your phone number!">
          <input formControlName="phone" id="'phone'" nz-input />
        </nz-form-control>
      </nz-form-item>

      <nz-form-item class="block">
        <nz-form-label
          class="block"
          [nzSm]="7"
          nzFor="address"
          nzRequired
          nzTooltipTitle="What do you want other to call you"
        >
          <span>Address</span>
        </nz-form-label>
        <nz-form-control nzErrorTip="Please input your address!">
          <input nz-input id="address" formControlName="address" />
        </nz-form-control>
      </nz-form-item>

      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <button nz-button nzType="primary" (click)="onHandleSubmit()">
            Register
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,

  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }

      .phone-select {
        width: 70px;
      }

      .register-are {
        margin-bottom: 8px;
      }
    `,
  ],
})
export class FormRegisterComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    name: FormControl<string>;

    phone: FormControl<string>;
    address: FormControl<string>;
  }>;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private auth: AuthService,
    private message: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmationValidator]],
      name: ['', [Validators.required]],

      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }
  onHandleSubmit(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;
      this.auth.register(formData).subscribe(
        (data) => {
          this.message.success(`Đăng kí thành công`);
        },
        (error) => {
          console.error('Registration failed:', error);
          this.message.error(`Đăng kí thất bại`);
        }
      );
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
