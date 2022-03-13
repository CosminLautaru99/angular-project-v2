import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { DashboardComponent } from './component/dashboard/dashboard.component';
// import {DialogOverviewExample, DialogOverviewExampleDialog} from './component/modal/dialog-overview-example';
import { MaterialModule } from './component/modal/module';
// import {DialogOverviewExample} from './component/modal/dialog-overview-example';
// import { DialogOverviewExampleDialog } from './component/modal/dialog-overview-example-dialog';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './component/modal/dialog-overview-example';


//material angular
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

