import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StockService } from './services/stock'
import { HttpClientModule } from '@angular/common/http'
import { StockListComponent } from './stock-list/stock-list.component'
@NgModule({
  declarations: [AppComponent, StockListComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [StockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
