import { Component } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/model';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  form!: FormGroup;
  products: IProduct[] = [];
  productbyID!: IProduct;
  productSameType: IProduct[] = [];
  constructor(
    private ps: BooksService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: BooksService,
    private cartservice: CartService
  ) {
    this.route.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.ps.getProduct(id).subscribe((data) => {
        this.productbyID = data;
      });
    });
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.productSameType = this.products.filter(
          (product) => product.brand._id === this.productbyID.brand._id
        );
      },
      (error) => console.log(error)
    );
  }

  displayedWords = 80; // Số từ được hiển thị ban đầu
  additionalWords = 30; // Số từ thêm mỗi lần khi ấn "Xem thêm"
  addToCart(product: IProduct) {
    this.cartservice.addtoCart(product);
    console.log(this.cartservice.getItem());
    alert('Thêm giỏ hàng thành công');
  }
  showMore(): void {
    this.displayedWords += this.additionalWords;
  }
}
