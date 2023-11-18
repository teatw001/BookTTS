import { Component } from '@angular/core';

@Component({
  selector: 'tabs-login',
  template: `
    <nz-tabset>
      <nz-tab nzTitle="Đăng nhập"><login-user /></nz-tab>
      <nz-tab nzTitle="Đăng kí"><form-register /></nz-tab>
    </nz-tabset>
  `,
})
export class TagsLoginComponent {}
