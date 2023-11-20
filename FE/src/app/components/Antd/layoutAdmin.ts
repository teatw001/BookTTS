import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-side',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible nzWidth="200px">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-submenu nzTitle="Books" nzIcon="book">
            <ul>
              <li nz-menu-item routerLink="/admin/product">List</li>
              <li nz-menu-item routerLink="/admin/product/add">Add</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Danh mục" nzIcon="tags">
            <ul>
              <li nz-menu-item routerLink="/admin/cate">List</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="User" nzIcon="user">
            <ul>
              <li nz-menu-item routerLink="/admin/user">List</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Order" nzIcon="inbox">
            <ul>
              <li nz-menu-item routerLink="/admin/order">List</li>
            </ul>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header></nz-header>
        <nz-content>
          <nz-breadcrumb>
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <div class="inner-content h-full">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 360px;
      }

      nz-footer {
        text-align: center;
      }
    `,
  ],
})
export class NzDemoLayoutSideComponent {}
