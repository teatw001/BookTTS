import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart, IProduct } from '../interfaces/model';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: ICart[] = JSON.parse(sessionStorage.getItem('cart') ?? '[]');
  cartSubject = new BehaviorSubject<ICart[]>(this.items);
  cart$: Observable<ICart[]> = this.cartSubject.asObservable();
  addtoCart(books: IProduct) {
    var index = this.items.findIndex((item) => item.idproduct == books._id);
    if (index >= 0) {
      this.items[index].quantity++;
    } else {
      var c: ICart;
      c = {
        idproduct: books._id,
        product: books.name,
        price: books.price,
        image: books.images[0].base_url,
        quantity: 1,
      };
      this.items.push(c);
    }
    this.updateCart2();
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
  updateCart2(): void {
    this.cartSubject.next(this.items);
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
  getItem() {
    this.updateCart2();
    return this.items;
  }
  updateCart(cart: ICart[]): void {
    this.items = cart;
    this.updateCart2();
    // Update sessionStorage when the cart is updated
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    sessionStorage.removeItem('cart');
    this.updateCart2();
    return this.items;
  }
}
