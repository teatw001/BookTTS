import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/Clients/homepage/homepage.component';
import { PageNotFoundComponent } from './components/Clients/page-not-found/page-not-found.component';
import { LayoutUserComponent } from './Layout/Clients/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/Clients/layout-admin/layout-admin.component';
import { DetailComponent } from './pages/Clients/detail/detail.component';
import { BooksComponent } from './pages/Clients/books/books.component';
import { ListProductComponent } from './components/Admin/listproduct';
import { ProductAddComponent } from './components/Admin/addproduct';
import { EditProductComponent } from './components/Admin/editproduct';
import { ListCateComponent } from './pages/Admin/Category/listCate';
import { UserComponent } from './pages/Admin/User/listUser';

const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'books', component: BooksComponent },
      { path: 'books-detail/:id', component: DetailComponent },
    ],
  },

  // { path: 'signup', component: SignupComponent },
  // { path: 'signin', component: SigninComponent },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product-update/:id', component: EditProductComponent },
      { path: 'cate', component: ListCateComponent },
      { path: 'user', component: UserComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
