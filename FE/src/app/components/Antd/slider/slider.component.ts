import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { IProduct } from 'src/app/interfaces/model';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @ViewChild('slide') slideElement!: ElementRef;
  @ViewChild('next') nextButton!: ElementRef;
  @ViewChild('prev') prevButton!: ElementRef;
  displayedWords = 10; // Số từ được hiển thị ban đầu
  additionalWords = 10;
  products: IProduct[] = [];
  constructor(
    private renderer: Renderer2,
    private productService: BooksService
  ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error)
    );
  }

  ngAfterViewInit() {
    this.renderer.listen(this.nextButton.nativeElement, 'click', () => {
      const lists = this.slideElement.nativeElement.querySelectorAll('.item');
      this.renderer.appendChild(this.slideElement.nativeElement, lists[0]);
    });

    this.renderer.listen(this.prevButton.nativeElement, 'click', () => {
      const lists = this.slideElement.nativeElement.querySelectorAll('.item');
      this.renderer.insertBefore(
        this.slideElement.nativeElement,
        lists[lists.length - 1],
        lists[0]
      );
    });
  }
}
