import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICategory } from 'src/app/interfaces/model';
import { CateService } from 'src/app/service/cate.service';

@Component({
  selector: 'nz-demo-table-edit-cell',
  template: `
    <button nz-button (click)="addRow()" nzType="primary">Add</button>
    <br />
    <br />
    <nz-table #editRowTable nzBordered [nzData]="category">
      <thead>
        <tr>
          <th nzWidth="30%">Name</th>
          <th>Slug</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of category" class="editable-row">
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data._id"
              (click)="startEdit(data)"
            >
              {{ data.name }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.name"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data._id"
              (click)="startEdit(data)"
            >
              {{ data.slug }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.slug"
              (blur)="stopEdit()"
            />
          </td>
          <td nzCellControl="action">
            <a
              nz-popconfirm
              nzPopconfirmTitle="Sure to delete?"
              (nzOnConfirm)="deleteRow(data._id)"
              >Delete</a
            >
            <nz-divider nzType="vertical"></nz-divider>
            <a
              nz-popconfirm
              nzPopconfirmTitle="Sure to save?"
              (nzOnConfirm)="saveRow(data)"
              >Sửa</a
            >
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
export class ListCateComponent implements OnInit {
  category: ICategory[] = [];
  editId: string | null = null;
  editData: ICategory | null = null;

  i = 0;

  constructor(
    private cateService: CateService,
    private message: NzMessageService,
    private router: Router
  ) {}

  startEdit(data: ICategory): void {
    console.log('Dữ liệu trong startEdit:', data);
    this.editId = data._id;
    this.editData = { ...data };
  }

  stopEdit(): void {
    this.editId = null;
    this.editData = null;
  }

  saveRow(data: ICategory): void {
    if (data && data._id) {
      console.log('Dữ liệu đã chỉnh sửa:', data);
      const token: string = localStorage.getItem('token') || '';
      this.cateService.updateCategory(data,token).subscribe({
        next: (cate) => {
          this.message.success(`Cập nhật sản phẩm thành công`);
          this.stopEdit();
        },
        error: (error) => {
          this.message.error(`Cập nhật sản phẩm thất bại: ${error.message}`);
        },
      });
    } else {
      console.error('Giá trị _id không hợp lệ:', data);
    }
  }

  addRow(): void {
    const newRow: any = {
      name: `New Row ${this.i}`,
      slug: `new-slug-${this.i}`,
    };
    const token: string = localStorage.getItem('token') || '';
    this.cateService.addCategory(newRow,token).subscribe(() => {
      this.message.success(`Thêm sản phẩm thành công`);
      this.reloadCategory();
    });

    this.i++;
  }

  deleteRow(id: string): void {
    const token: string = localStorage.getItem('token') || '';
    this.cateService.deleteCategory(id,token).subscribe(() => {
      this.message.success(`Xóa sản phẩm thành công`);
      this.reloadCategory();
    });
  }

  reloadCategory(): void {
    this.cateService.getCategorys().subscribe((data) => {
      this.category = data;
    });
  }

  ngOnInit(): void {
    this.reloadCategory();
  }
}
