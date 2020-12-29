import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ProductSaleAppSharedModule } from 'app/shared/shared.module';
import { ProductSaleAppCoreModule } from 'app/core/core.module';
import { ProductSaleAppAppRoutingModule } from './app-routing.module';
import { ProductSaleAppHomeModule } from './home/home.module';
import { ProductSaleAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ProductSaleAppSharedModule,
    ProductSaleAppCoreModule,
    ProductSaleAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ProductSaleAppEntityModule,
    ProductSaleAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ProductSaleAppAppModule {}
