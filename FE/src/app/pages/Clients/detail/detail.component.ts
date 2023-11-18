import { Component } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  form!: FormGroup;

  product!: IProduct;
  constructor(
    private ps: BooksService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.ps.getProduct(id).subscribe((data) => {
        this.product = data;
      });
    });
  }
  displayedWords = 80; // Số từ được hiển thị ban đầu
  additionalWords = 30; // Số từ thêm mỗi lần khi ấn "Xem thêm"

  showMore(): void {
    this.displayedWords += this.additionalWords;
  }
}
