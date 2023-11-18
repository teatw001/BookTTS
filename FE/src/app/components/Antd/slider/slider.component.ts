import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @ViewChild('slide') slideElement!: ElementRef;
  @ViewChild('next') nextButton!: ElementRef;
  @ViewChild('prev') prevButton!: ElementRef;

  constructor(private renderer: Renderer2) {}

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
