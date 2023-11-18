import { Component } from '@angular/core';

@Component({
  selector: 'cart-header',
  template: `
    <button (click)="open()">
    <nz-demo-badge-link />
    </button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="Basic Drawer"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ng-container>
    </nz-drawer>
  `,
})
export class CartHeaderComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
