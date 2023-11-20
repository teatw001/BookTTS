# Dự án Sách : Thực tập 
- TênSV: Đỗ Hữu Duy-PH26793
- FE: Angular
- BE: NodeJs

<!-- --------------------BE-------------------- -->

- Auth

  - getAll: Lấy tất cả người dùng ( admin )
  - getOne: Lấy mọt người dùng ( admin )
    Phân Quyền Admin-User
  - logIn: Đăng nhập tài khoản
  - getUserByToken: Lấy thông tin người dùng khi đăng nhập ( login )
- Change Password
    <!-- Quên mật khẩu -->

  - getSecurityCode: Lấy mã bảo mật
  - resetPassword: Đổi mật khẩu

    <!-- Đổi mật khẩu -->

  - getCode: Lấy code ( login )
  - checkCode: Kiểm tra code ( login )
  - changePassword: đổi mật khẩu ( login )
- Comment

  - getAll: Lấy tất cả bình luận
  - getOne: Lấy một bình luận
  - create: Thêm mới bình luận ( login )
  - update: Cập nhật bình luận ( login )
  - del: Xóa bình luận ( login )

- Category

  - getAll: Lấy tất cả danh mục
  - getOne: Lấy một danh mục
  - Create: Thêm mới danh mục ( admin )
  - Edit: Chỉnh sửa danh mục ( admin )
  - Delete: Xóa danh mục ( admin )

- Product

  - getAll: Lấy tất cả sản phẩm
  - getOne: Lấy một sản phẩm
  - create: Thêm mới sản phẩm ( admin )
  - remove: Xóa sản phẩm ( admin )
  - update: Cập nhật sản phẩm ( admin )

- Order
  - getAll: Lấy tất cả danh sách người dùng đặt hàng
  - Edit: Sửa trạng thái của đơn hàng
  
  <!-- --------------------BE Success-------------------- -->

- Order
- Payment


<!-- --------------------FE - Angular-------------------- -->
- sản phẩm, chi tiết sản phẩm
- đăng nhập, đăng ký, phân quyền
- giỏ hàng, xóa sản phẩm trong giỏ
- Lọc sản phẩm cùng loại 
- Lọc sản phẩm sale
- tìm kiếm, phân trang
- Đặt hàng
<!-- Admin -->

- private router đến trang admin
- thêm, sửa, xóa sản phẩm
- thêm, sửa, xóa danh mục
- sửa trạng thái đơn hàng
- Xem thông tin người dùng
- Xem thông tin đơn hàng
- phân trang