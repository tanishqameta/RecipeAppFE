import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootLayoutRoutingModule } from './root-layout-routing.module';
import { RootLayoutComponent } from './root-layout.component';
import { HeaderComponent } from "../../shared/components/header/header.component";


@NgModule({
  declarations: [
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
    RootLayoutRoutingModule,
    HeaderComponent
],
  exports: [
    RootLayoutComponent
  ]
})
export class RootLayoutModule { }
