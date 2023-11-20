import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IOrder, IUser } from 'src/app/interfaces/model';
import { OrderService } from 'src/app/service/order.service';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'nz-demo-table-edit-cell',
  template: `
    <br />
    <br />
    <nz-table #editRowTable nzBordered [nzData]="orders">
      <thead>
        <tr>
          <th nzWidth="30%">Sản phẩm</th>
          <th>Người mua</th>
          <th>Địa chỉ</th>
          <th>Giá tiền</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of orders" class="editable-row">
          <td>
            <div class="editable-cell">
              <div *ngFor="let product of data.products" class="mb-10">
                {{ product.product.name }}
                <p>Số lượng: {{ product.quantity }}</p>
                <p>Giá tiền: {{ product.product.price | currencyFormat }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="editable-cell">
              {{ data.user.name }}
            </div>
          </td>
          <td>
            <div class="editable-cell">
              {{ data.user.address }}
            </div>
          </td>
          <td>
            <div class="editable-cell">
              {{ data.totalPrice | currencyFormat }}
            </div>
          </td>
          <td>
            <div class="editable-cell">
              <Select>
                <Option value="Đang chờ xử lý">Đang chờ xử lý</Option>
                <Option value="Đang xử lý">Đang xử lý</Option>
                <Option value="Đang giao hàng">Đang giao hàng</Option>
                <Option value="Đã giao hàng">Đã giao hàng</Option>
                <Option value="Đã hủy">Đã hủy</Option>
                <Option value="Đã hoàn tiền">Đã hoàn tiền</Option>
                <Option value="Đã hoàn thành">Đã hoàn thành</Option>
              </Select>
            </div>
          </td>
          <td>
            <div class="editable-cell">Sửa</div>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `,
  ],
})
export class OrderComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(
    private orderService: OrderService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
