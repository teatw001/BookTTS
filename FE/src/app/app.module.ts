import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { HeaderComponent } from './components/Clients/header/header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BellOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDemoCarouselLoopComponent } from './components/Antd/nz-carousel/nz-carousel.component';

import { SliderComponent } from './components/Antd/slider/slider.component';
import { FooterComponent } from './components/Clients/footer/footer.component';
import { HomepageComponent } from './pages/Clients/homepage/homepage.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDemoBreadcrumbWithIconComponent } from './components/Antd/nz-demo-breadcrumb.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { BreadcrumbComponent } from './components/Antd/breadcrumb/breadcrumb.component';
import { DrawerModuleComponent } from './components/Antd/drawer-module/drawer-module.component';
import { NzDemoDrawerBasicRightComponent } from './components/Antd/drawer-module-right';
import { NzDemoBadgeLinkComponent } from './components/Antd/badge';
import { CartHeaderComponent } from './components/Antd/cartHeader';
import { PageNotFoundComponent } from './components/Clients/page-not-found/page-not-found.component';
import { LayoutUserComponent } from './Layout/Clients/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/Clients/layout-admin/layout-admin.component';
import { ProductComponent } from './components/product/product.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { FlashSaleComponent } from './components/Clients/flash-sale/flash-sale.component';
import { ToppicblockComponent } from './components/Clients/toppicblock/toppicblock.component';
import { SpecialOfferComponent } from './components/Clients/special-offer/special-offer.component';
import { NzDemoStatisticCountdownComponent } from './components/Antd/Statistic';
import { BookOnsaleComponent } from './components/Clients/book-onsale/book-onsale.component';
import { SearchComponent } from './components/Clients/search/search.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { MenuComponent } from './components/Clients/search/menu/menu.component';
import { NzDemoDropdownEventComponent } from './components/Antd/dropdown';
import { LimitWordsPipe } from './components/Clients/pipesplice';
import { CurrencyFormatPipe } from './components/Clients/pipeformatprice';
import { DetailComponent } from './pages/Clients/detail/detail.component';
import { BooksComponent } from './pages/Clients/books/books.component';
// Import PrimeNG modules
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AccordionBasicComponent } from './components/PrimeNg/accordion-basic/accordion-basic.component';
import { NzDemoCollapseBasicComponent } from './components/Antd/nz-demo-collapse-basic';
import { NzDemoTreeDraggableComponent } from './components/Antd/tree';
import { NzDemoCheckboxGroupComponent } from './components/Antd/checkboxfilter';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { TruncatePipe } from './components/pipesplicetext';
import { NzDemoTabsBasicComponent } from './components/Antd/tabs';
import { NzDemoLayoutSideComponent } from './components/Antd/layoutAdmin';
import { ListProductComponent } from './components/Admin/listproduct';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ProductAddComponent } from './components/Admin/addproduct';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { EditProductComponent } from './components/Admin/editproduct';
import { ListCateComponent } from './pages/Admin/Category/listCate';
import { UserComponent } from './pages/Admin/User/listUser';
import { LoginComponent } from './components/Clients/header/component-child/login';
import { TagsLoginComponent } from './components/Clients/header/component-child/tabsLogin';
import { LoginUserComponent } from './pages/Clients/login-user/login-user.component';
import { FormRegisterComponent } from './pages/Clients/register/register.component';



const icons = [BellOutline, UserOutline];

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const iconss: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NzDemoCollapseBasicComponent,
    NzDemoCarouselLoopComponent,
    SliderComponent,
    FooterComponent,
    HomepageComponent,
    NzDemoBreadcrumbWithIconComponent,
    BreadcrumbComponent,
    LoginUserComponent,
    DrawerModuleComponent,
    NzDemoDrawerBasicRightComponent,
    NzDemoBadgeLinkComponent,
    CartHeaderComponent,
    PageNotFoundComponent,
    LayoutUserComponent,
    TruncatePipe,
    TagsLoginComponent,
    LayoutAdminComponent,
    NzDemoLayoutSideComponent,
    ProductComponent,
    FlashSaleComponent,
    ToppicblockComponent,
    LoginComponent,
    FormRegisterComponent,
    SpecialOfferComponent,
    NzDemoStatisticCountdownComponent,
    BookOnsaleComponent,
    CurrencyFormatPipe,
    NzDemoTabsBasicComponent,
    SearchComponent,
    ListCateComponent,
    MenuComponent,
    UserComponent,
    
    LimitWordsPipe,
   
    NzDemoDropdownEventComponent,
    DetailComponent,
    ProductAddComponent,
    BooksComponent,
    AccordionBasicComponent,
    NzDemoTreeDraggableComponent,
    NzDemoCheckboxGroupComponent,
    ListProductComponent,
    EditProductComponent,
  ],

  imports: [
    NzDropDownModule,
    NzPaginationModule,
    NzLayoutModule,
    NzTreeModule,
    AvatarModule,
    AvatarGroupModule,
    BrowserModule,
    NzCheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    NzTableModule,
    AutoCompleteModule,
    DemoNgZorroAntdModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    NzFormModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    NzImageModule,
    DockModule,
    NzPopconfirmModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ImageModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    NzCollapseModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    AnimateModule,
    CardModule,
    NzBadgeModule,
    NzDrawerModule,
    BrowserModule,
    NzStatisticModule,
    NzBreadCrumbModule,
    NzFormModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzCarouselModule,
    NzButtonModule,
    NzInputModule,

    NzIconModule.forRoot(icons),
  ],
  providers: [
    { provide: NZ_ICONS, useValue: iconss },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
