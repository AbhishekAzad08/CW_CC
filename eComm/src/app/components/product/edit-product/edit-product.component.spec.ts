import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

import { EditProductComponent } from './edit-product.component';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  class MockDataService {
    getProductsById(id:number): Observable<Product> {
      return of(
        {
          productId: 1,
          name: "Cake",
          price: 30,
          type: "Food",
          isActive: true
        }   ) 
    };
    updateProductById(id:number,product:Product) {
      return 1;
    };
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
      declarations: [ EditProductComponent ],
      imports:[RouterTestingModule,MatButtonToggleModule],
      providers: [{ provide: DataService, useValue: new MockDataService() },
        {provide: DialogService, useValue: new MatDialogMockService()}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
