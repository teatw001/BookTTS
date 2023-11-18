import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzDemoTreeDraggableComponent } from './tree';
import { NzDemoBreadcrumbWithIconComponent } from './nz-demo-breadcrumb.component';
import { NzDemoDropdownEventComponent } from './dropdown';
import { NzDemoCheckboxGroupComponent } from './checkboxfilter';

@Component({
  selector: 'nz-demo-collapse-basic',
  template: `
    <nz-collapse nzAccordion nzExpandIconPosition="right">
      <nz-collapse-panel
        class="rounded-2xl bg-white tex"
        *ngFor="let panel of panels; let i = index"
        [nzHeader]="panel.name"
        [nzActive]="panel.active"
      >
        <ng-container *ngIf="panel.component">
          <ng-container #dynamicComponentHost></ng-container>
        </ng-container>
      </nz-collapse-panel>
    </nz-collapse>
  `,
})
export class NzDemoCollapseBasicComponent implements AfterViewInit {
  private componentRefs: ComponentRef<any>[] = [];

  @ViewChildren('dynamicComponentHost', { read: ViewContainerRef })
  dynamicComponentHosts!: QueryList<ViewContainerRef>;

  panels = [
    {
      active: true,
      name: 'Editor Picks',
      component: NzDemoTreeDraggableComponent,
    },
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.panels.forEach((panel, index) => {
      this.loadComponent(panel, index);
    });
  }

  private loadComponent(panel: { component: any }, index: number) {
    try {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        panel.component
      );

      // Get the ViewContainerRef from the QueryList
      const viewContainerRef: ViewContainerRef =
        this.dynamicComponentHosts.toArray()[index];

      const componentRef = viewContainerRef.createComponent(factory);
      this.componentRefs[index] = componentRef; // Save the component reference

      // You can pass data to the dynamic component if needed
      // componentRef.instance.data = someData;
    } catch (error) {
      console.error('Error creating dynamic component:', error);
    }
  }
}
