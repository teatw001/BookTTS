import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/model';
import { BooksService } from 'src/app/service/books.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  products: IProduct[] = [];
  currentIndex: number = 0;
  productOnSale: IProduct[] = []
  responsiveOptions: any[] | undefined;
  constructor(
    private productService: BooksService,
    private cartservice: CartService
  ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.productOnSale = this.products.filter((product) => product.isInFlashSale === true);
      },
      (error) => console.log(error)
    );
  }
 
  addToCart(product: IProduct) {
    this.cartservice.addtoCart(product);
    console.log(this.cartservice.getItem());
    alert('Thêm giỏ hàng thành công');
  }
}
