import { StockService } from './stock'
import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
describe('StockService', () => {
  let mockStockService: StockService
  let mockHttpClient: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StockService],
    })
    mockStockService = TestBed.inject(StockService)
    mockHttpClient = TestBed.inject(HttpTestingController)
  })
  it('should be created', () => {
    expect(mockStockService).toBeTruthy()
  })
  it('should return data', () => {
    const mockData = {
      heroesUrl: 'api/heroes',
      textfile: 'assets/textfile.txt',
    }

    mockStockService.get().subscribe((data) => {
      expect(data).toEqual(mockData)
    })

    const req = mockHttpClient.expectOne(
      'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',
    )
    expect(req.request.method).toBe('GET')
    req.flush(mockData)
  })
})
