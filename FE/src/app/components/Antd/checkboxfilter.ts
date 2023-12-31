import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-checkbox-group',
  template: `
    <nz-checkbox-group
      [(ngModel)]="checkOptionsOne"
      (ngModelChange)="log(checkOptionsOne)"
    ></nz-checkbox-group>
    <br />
    <br />
    <nz-checkbox-group
      [(ngModel)]="checkOptionsTwo"
      (ngModelChange)="log(checkOptionsTwo)"
    ></nz-checkbox-group>
    <br />
    <br />
    <nz-checkbox-group
      [(ngModel)]="checkOptionsThree"
      (ngModelChange)="log(checkOptionsThree)"
    ></nz-checkbox-group>
  `,
})
export class NzDemoCheckboxGroupComponent {
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
  ];
  checkOptionsTwo = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear', checked: true },
  ];
  checkOptionsThree = [
    { label: 'Apple', value: 'Apple', disabled: true, checked: true },
    { label: 'Pear', value: 'Pear', disabled: true },
  ];

  log(value: object[]): void {
    console.log(value);
  }
}
