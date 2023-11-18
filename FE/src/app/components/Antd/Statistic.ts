import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-statistic-countdown',
  template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="24" style="margin-top: 10px ;">
        <nz-countdown
          [nzValue]="deadline"
          [nzFormat]="'0D Ngày H Giờ m Phút s Giây'"
        ></nz-countdown>
      </nz-col>
    </nz-row>
  `,
})
export class NzDemoStatisticCountdownComponent {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
