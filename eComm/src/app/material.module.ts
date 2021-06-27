import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'

@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  imports: [
   
    MatDialogModule,   
    MatIconModule,
    MatInputModule,    
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }