import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let dataservice: DataService;
  
  let fixture: ComponentFixture<ListProductsComponent>;
  class MockDataService {
    getProducts(): Observable<Product[]> {
      return of([
        {
          "productId": 1,
          "name": "Cake",
          "price": 30,
          "type": "Food",
          "isActive": true
        } as Product,
        {
          "productId": 2,
          "name": "Introduction to C",
          "price": 15,
          "type": "Books",
          "isActive": true
        } as Product

      ]);
    }
  }
   class MatDialogMockService {
    // When the component calls this.dialog.open(...) we'll return an object
    // with an afterClosed method that allows to subscribe to the dialog result observable.
    openDialog(postAction,modalComponent,dialogData) {
      return {
        afterClosed: () => of({action: true})
      };
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      imports: [RouterTestingModule,MatSortModule],
      providers: [{ provide: DataService, useValue: new MockDataService() },
      {provide: DialogService, useValue: new MatDialogMockService()}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    dataservice = TestBed.inject(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('should call getProducts and load product list',(done)=>{
  //   const mySpy = spyOn(dataservice , 'getProducts') ;

  //   component.myLoadingFunction();

  //   expect(mySpy).toHaveBeenCalledTimes(1);
  //   //fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();

  //     let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //     expect(tableRows.length).toBe(2);

  //     // Header row
  //     let headerRow = tableRows[0];
  //     expect(headerRow.cells[0].innerHTML).toBe('Name');
  //     expect(headerRow.cells[1].innerHTML).toBe('Price');
  //     expect(headerRow.cells[2].innerHTML).toBe('Type');
  //     expect(headerRow.cells[3].innerHTML).toBe('Active');

  //     // Data rows
  //     let row1 = tableRows[1];
  //     expect(row1.cells[0].innerHTML).toBe('Cake');
  //     expect(row1.cells[1].innerHTML).toBe('30');
  //     expect(row1.cells[2].innerHTML).toBe('Food');
  //     expect(row1.cells[3].innerHTML).toBe('true');

  //     let row2 = tableRows[2];
  //     expect(row2.cells[0].innerHTML).toBe('Introduction to C');
  //     expect(row2.cells[1].innerHTML).toBe('15');
  //     expect(row2.cells[2].innerHTML).toBe('Books');
  //     expect(row1.cells[3].innerHTML).toBe('true');


  //     done();
  //   });
  // })
});
