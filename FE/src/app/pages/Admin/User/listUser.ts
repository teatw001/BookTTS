import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IUser } from 'src/app/interfaces/model';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'nz-demo-table-edit-cell',
  template: `
    <br />
    <br />
    <nz-table #editRowTable nzBordered [nzData]="users">
      <thead>
        <tr>
          <th nzWidth="30%">Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of users" class="editable-row">
          <td>
            <div class="editable-cell" [hidden]="editId === data._id">
              {{ data.name }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.name"
            />
          </td>
          <td>
            <div class="editable-cell" [hidden]="editId === data._id">
              {{ data.email }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.email"
            />
          </td>
          <td>
            <div class="editable-cell" [hidden]="editId === data._id">
              {{ data.phone }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.phone"
            />
          </td>
          <td>
            <div class="editable-cell" [hidden]="editId === data._id">
              {{ data.address }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.address"
            />
          </td>
          <td>
            <div class="editable-cell" [hidden]="editId === data._id">
              {{ data.role }}
            </div>
            <input
              [hidden]="editId !== data._id"
              type="text"
              nz-input
              [(ngModel)]="data.role"
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
            <a nz-popconfirm nzPopconfirmTitle="Sure to save?">Sửa</a>
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
export class UserComponent implements OnInit {
  users: IUser[] = [];
  editId: string | null = null;
  editData: IUser | null = null;

  i = 0;

  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {}

  deleteRow(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.message.success(`Xóa sản phẩm thành công`);
      this.reloaduser();
    });
  }

  reloaduser(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.reloaduser();
  }
}
