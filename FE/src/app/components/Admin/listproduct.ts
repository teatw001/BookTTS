import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IProduct } from 'src/app/interfaces/model';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'nz-demo-table-fixed-header',
  template: `
    <nz-table
      #headerTable
      [nzData]="products"
      [nzPageSize]="3"
      [nzScroll]="{ y: '400px' }"
    >
      <thead>
        <tr class="text-center">
          <th>Tên</th>
          <th>Giá</th>
          <th>Tác giả</th>
          <th>Thể loại</th>
          <th>Hình ảnh</th>
          <th>Mô tả</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr *ngFor="let data of headerTable.data">
          <td>{{ data.name }}</td>
          <!-- Add your other table cells here -->
          <td>{{ data.price | currencyFormat }}</td>
          <td>{{ data.authors }}</td>
          <td>{{ data.brand.name }}</td>
          <td>
            <img
              src="{{ data.images[0].base_url }}"
              class="w-[80px] h-[100px]"
              alt=""
            />
          </td>
          <td>{{ data.short_description | truncate : 8 : 10 }}</td>
          <td nzCellControl="action">
            <a
              class="btn btn-primary"
              [routerLink]="'/admin/product-update/' + data._id"
              >Sửa</a
            >
            <nz-divider nzType="vertical"></nz-divider>
            <a
              nz-popconfirm
              nzPopconfirmTitle="Sure to delete?"
              (nzOnConfirm)="delete(data._id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
})
export class ListProductComponent implements OnInit {
  constructor(
    private productService: BooksService,
    private message: NzMessageService
  ) {}
  products: IProduct[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  delete(id: string) {
    const token: string = localStorage.getItem('token') || '';
    this.productService.deleteProduct(id,token).subscribe((product) => {
      this.products = this.products.filter((product) => product._id !== id);
      this.message.success(`Xóa sản phẩm thành công`);
    });
  }
}
