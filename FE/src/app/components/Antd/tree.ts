import { Component } from '@angular/core';

import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-draggable',
  template: `
    <nz-tree
      [nzData]="nodes"
      nzDraggable
      nzBlockNode
      (nzOnDrop)="nzEvent($event)"
    ></nz-tree>
  `,
})
export class NzDemoTreeDraggableComponent {
  nodes = [
    {
      title: 'Best sales (105)',
      key: '00',
      expanded: true,
      children: [
        { title: '0-0-0-0', key: '0000', isLeaf: true },
        { title: '0-0-0-1', key: '0001', isLeaf: true },
        { title: '0-0-0-2', key: '0002', isLeaf: true },
      ],
    },
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
