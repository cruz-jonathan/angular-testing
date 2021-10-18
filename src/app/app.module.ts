import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { IndexPageComponent } from './components/index-page/index-page.component';
import { FundsTableComponent } from './components/funds-table/funds-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundsTableRowComponent } from './components/funds-table-row/funds-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    FundsTableComponent,
    FundsTableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
