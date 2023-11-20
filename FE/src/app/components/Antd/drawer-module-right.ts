import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-drawer-basic-right',
  template: `
    <button (click)="open()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="left"
      nzTitle="Sản phẩm"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <button routerLink="/books">Books</button>
      </ng-container>
    </nz-drawer>
  `,
})
export class NzDemoDrawerBasicRightComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
