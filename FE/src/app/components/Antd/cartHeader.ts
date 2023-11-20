import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/interfaces/model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'cart-header',
  template: `
    <button (click)="open()">
      <nz-demo-badge-link />
    </button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="GIỎ HÀNG"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <div class="" *ngFor="let item of items">
          <div
            class="grid grid-cols-2 items-center mb-10 shadow-lg shadow-cyan-500/50"
          >
            <div class="bg-[#F3F3F3] w-full px-10 py-10">
              <img
                src="{{ item.image }}"
                alt=""
                class="w-[100px] text-center mx-auto "
              />
            </div>
            <div class="">
              <div class="end-0 flex justify-end">
                <button
                  type="button"
                  (click)="removeItem(item)"
                  class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  X
                </button>
              </div>
              <div class="text-center px-4  w-full text-gray-600 text-[14px]">
                <h3>{{ item.product }}</h3>
                <span>{{ item.price | currencyFormat }}</span>
                <div class="">
                  <label for="Quantity" class="sr-only">
                    {{ item.quantity }}
                  </label>

                  <div class="flex items-center gap-1 justify-center">
                    <button
                      type="button"
                      (click)="updateQuantity(item, -1)"
                      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      &minus;
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value="{{ item.quantity }}"
                      class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      (click)="updateQuantity(item, 1)"
                      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      &plus;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mb-4" />
        <div class="flex items-center mb-10 text-[16px] justify-between">
          <span>TỔNG TIỀN:</span>
          <span>{{ getTotalPrice() | currencyFormat }}</span>
        </div>
        <button
          (click)="buyButtonClicked()"
          routerLink="/checkout"
          class="hover:bg-[#EAE8E4]  hover:text-black bg-black text-[#FFFFFF] w-full text-center py-4 text-[16px]"
        >
          Mua Hàng
        </button>
      </ng-container>
    </nz-drawer>
  `,
})
export class CartHeaderComponent implements OnDestroy {
  private routerSubscription: Subscription;
  constructor(private cartservice: CartService, private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/checkout') {
          this.close();
        }
      }
    });
  }
  items = this.cartservice.getItem();
  visible = false;
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  updateQuantity(item: ICart, change: number): void {
    const index = this.items.findIndex((i) => i.idproduct === item.idproduct);

    if (index !== -1) {
      this.items[index].quantity += change;

      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1;
      }

      this.cartservice.updateCart(this.items);
    }
  }
  removeItem(item: ICart): void {
    const index = this.items.findIndex((i) => i.idproduct === item.idproduct);

    if (index !== -1) {
      this.items.splice(index, 1);

      this.cartservice.updateCart(this.items);
    }
  }
  buyButtonClicked(): void {
    this.close();
  }
  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }
}
