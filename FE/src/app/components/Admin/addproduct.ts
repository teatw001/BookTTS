import { ICategory } from './../../interfaces/model';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';
import { CateService } from 'src/app/service/cate.service';

@Component({
  selector: 'nz-demo-form-dynamic-rule',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="onHandleSubmit()">
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="name">Name</nz-form-label>
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your name">
          <input
            type="text"
            nz-input
            formControlName="name"
            placeholder="Please input your name"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="price"
          >Price</nz-form-label
        >
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your price">
          <input
            type="number"
            nz-input
            formControlName="price"
            placeholder="Please input your price"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="original_price"
          >Original_price</nz-form-label
        >
        <nz-form-control
          [nzSpan]="8"
          nzErrorTip="Please input your original_price"
        >
          <input
            type="number"
            nz-input
            formControlName="original_price"
            placeholder="Please input your original_price"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="short_description"
          >short_description</nz-form-label
        >
        <nz-form-control
          [nzSpan]="8"
          nzErrorTip="Please input your short_description"
        >
          <input
            type="text"
            nz-input
            formControlName="short_description"
            placeholder="Please input your short_description"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="authors"
          >authors</nz-form-label
        >
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your authors">
          <input
            type="text"
            nz-input
            formControlName="authors"
            placeholder="Please input your authors"
          />
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="brand"
          >Brand</nz-form-label
        >
        <nz-form-control [nzSpan]="8" nzErrorTip="Please select a brand">
          <nz-select formControlName="brand" nzPlaceHolder="Select a brand">
            <nz-option
              *ngFor="let option of category"
              [nzLabel]="option.name"
              [nzValue]="option._id"
            ></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="description"
          >description</nz-form-label
        >
        <nz-form-control
          [nzSpan]="8"
          nzErrorTip="Please input your description"
        >
          <input
            type="text"
            nz-input
            formControlName="description"
            placeholder="Please input your description"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="quantity_sold"
          >quantity_sold</nz-form-label
        >
        <nz-form-control
          [nzSpan]="8"
          nzErrorTip="Please input your quantity_sold"
        >
          <input
            type="text"
            nz-input
            formControlName="quantity_sold"
            placeholder="Please input your quantity_sold"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="rating_average"
          >rating_average</nz-form-label
        >
        <nz-form-control
          [nzSpan]="8"
          nzErrorTip="Please input your rating_average"
        >
          <input
            type="text"
            nz-input
            formControlName="rating_average"
            placeholder="Please input your rating_average"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="4" [nzXs]="8" nzFor="images" nzRequired>
          Ảnh
        </nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please add images">
          <nz-form-list formArrayName="images">
            <div *ngFor="let control of images.controls; let i = index">
              <div [formGroupName]="i" class="flex items-center">
                <input
                  class=""
                  nz-input
                  formControlName="base_url"
                  placeholder="Nhập link base url"
                />
                <input
                  type="text"
                  nz-input
                  class="block"
                  formControlName="poster"
                  placeholder="Please input your poster"
                />
                <button nz-button nzType="dashed" (click)="removeImage(i)">
                  Xóa
                </button>
              </div>
            </div>
            <button nz-button nzType="dashed" (click)="addImage()">
              <i nz-icon nzType="plus"></i> Thêm ảnh
            </button>
          </nz-form-list>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="8" [nzOffset]="4">
          <button nz-button nzType="primary">Thêm sản phẩm</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
})
export class ProductAddComponent implements OnInit {
  category: ICategory[] = [];
  validateForm: FormGroup<{
    name: FormControl<string>;
    price: FormControl<number>;
    original_price: FormControl<number>;
    short_description: FormControl<string>;
    description: FormControl<string>;
    quantity_sold: FormControl<number>;
    rating_average: FormControl<number>;
    authors: FormControl<string>;
    isInFlashSale: FormControl<boolean>;
    images: FormArray;
    brand: FormControl<string>;
    specifications: FormArray;
  }> = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    original_price: [0, [Validators.required, Validators.min(0)]],
    short_description: ['', [Validators.required, Validators.maxLength(255)]],
    description: ['', [Validators.required]],
    quantity_sold: [0, [Validators.required, Validators.min(0)]],
    rating_average: [
      0,
      [Validators.required, Validators.min(0), Validators.max(5)],
    ],
    authors: ['', [Validators.required]],
    isInFlashSale: [false, [Validators.required]],
    images: this.fb.array([]),
    brand: ['', [Validators.required]],
    specifications: this.fb.array([]),
  });

  get images(): FormArray {
    return this.validateForm.get('images') as FormArray;
  }

  // Add the addImage method
  addImage() {
    this.images.push(this.fb.group({ base_url: '', poster: '' }));
  }

  // Add the removeImage method
  removeImage(index: number) {
    this.images.removeAt(index);
  }
  brandOptions: { value: string; label: string }[] = [];
  onHandleSubmit = () => {
    if (this.validateForm.valid) {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      if (token) {
      

        const product = this.validateForm.value;

        // Make the request with the headers
        this.productService.addProduct(product, token).subscribe(
          (product) => {
            this.message.success(`Thêm sản phẩm thành công`);
          },
          (error) => {
            console.error('Error adding product:', error);
          }
        );
      } else {
        // Handle the case where the token is not found in localStorage
        this.message.error('Token not found. Please log in.');
      }
    } else {
      this.message.error('Vui lòng không bỏ trống các trường dữ liệu');
    }
  };

  ngOnInit(): void {
    this.cateService.getCategorys().subscribe((data) => {
      this.category = data;
    });
  }
  constructor(
    private fb: NonNullableFormBuilder,
    private productService: BooksService,
    private cateService: CateService,
    private message: NzMessageService
  ) {}
}
