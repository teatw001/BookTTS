import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICart, IOrder, IOrderProduct, IUser } from 'src/app/interfaces/model';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  constructor(
    private cartservice: CartService,
    private message: NzMessageService,
    private orderService: OrderService,
    private router: Router
  ) {}
  items = this.cartservice.getItem();
  user = JSON.parse(localStorage.getItem('user') || '{}');
  selectedPaymentMethod: string = '';
  getShippingFee(): number {
    return this.selectedPaymentMethod === 'Tiền mặt' ? 30000 : 0;
  }
  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }

  getTotalPayment(): number {
    return this.getTotalPrice() + this.getShippingFee();
  }
  submitOrder() {
    if (!this.selectedPaymentMethod) {
      this.message.create('warning', 'Vui lòng chọn phương thức thanh toán.');
      return;
    } else {
      const orderProducts: any[] = this.items.map((item) => {
        return {
          product: item.idproduct,
          name: item.product,
          quantity: item.quantity,
          price: item.price,
        };
      });

      const order: any = {
        user: this.user._id as IUser,
        products: orderProducts,
        totalPrice: this.getTotalPayment(),
      };

      this.orderService.addOrder(order).subscribe(
        (result) => {
          this.message.create('success', 'Đơn hàng đã được đặt thành công.');
          sessionStorage.removeItem('cart');
          this.router.navigate(['/']);
        },
        (error) => {
          this.message.create('error', 'Đã xảy ra lỗi khi đặt hàng.');
          console.error(error);
        }
      );
    }
  }
}
