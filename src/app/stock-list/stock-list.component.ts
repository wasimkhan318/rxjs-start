import { Component, OnInit } from '@angular/core'
import { StockService } from '../services/stock'
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public data: any
  public test: any
  constructor(private stockList: StockService) {}

  ngOnInit(): void {
    this.data = this.stockList
    this.stockList.getConcatAll().subscribe((result) => {
      this.test = result[0].d
      console.log(result)
    })
    this.stockList.getConcatMap().subscribe((result) => {
      console.log(result)
    })
  }
}
