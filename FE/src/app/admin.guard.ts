import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const users = JSON.parse(localStorage.getItem('user')!);

    // Kiểm tra xem người dùng có tồn tại và có quyền Admin không
    if (users && users.role === 'Admin') {
      return true; // Cho phép truy cập
    } else {
      // Nếu không có quyền, chuyển hướng đến một trang khác hoặc hiển thị thông báo
      this.router.navigate(['/not-authorized']);
      return false;
    }
  }
}
