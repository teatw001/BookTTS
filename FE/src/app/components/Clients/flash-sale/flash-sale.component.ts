import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/model';
import { BooksService } from 'src/app/service/books.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.css'],
})
export class FlashSaleComponent {
  products: IProduct[] = [];
  currentIndex: number = 0;
  responsiveOptions: any[] | undefined;
  constructor(private productService: BooksService,private cartservice: CartService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error)
    );
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  addToCart(product: IProduct) {
    this.cartservice.addtoCart(product);
    console.log(this.cartservice.getItem());
    alert('Thêm giỏ hàng thành công');
  }
  // showNext() {
  //   if (this.currentIndex < this.products.length - 4) {
  //     this.currentIndex++;
  //   }
  // }

  // showPrev() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }
}
