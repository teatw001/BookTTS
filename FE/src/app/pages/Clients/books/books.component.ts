import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/model';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  products: IProduct[] = [];
  currentIndex: number = 0;
  responsiveOptions: any[] | undefined;
  constructor(private productService: BooksService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error)
    );
}
}
