import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudService } from 'src/app/service/crud.service';
import { Truck } from '../../model/truck';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExample {
  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DashBoardComponentDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dashboard-component-dialog',
  templateUrl: '../dashboard/dashboard.component.dialog.html',
})
export class DashBoardComponentDialog {
  truckObj : Truck = new Truck(); 
  truckArr : Truck[] = [];

  addTruckID : number = 0;
  addTruckType : string = '';
  addTruckWeight : number = 0;
  addTruckHeight : number = 0;
  addTruckWidth : number = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private crudService : CrudService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
  
  ngOnInit(): void {
    this.truckObj = new Truck();
    this.getAllTrucks();
  }
  getAllTrucks() {
    this.crudService.getAllTrucks().subscribe(res =>{
      this.truckArr = res;
    }, err =>{
      alert('Unable to get the list of trucks');
    })
  }

  

  addTruck() {
    this.truckObj.id = this.addTruckID;
    this.truckObj.type = this.addTruckType;
    this.truckObj.weight = this.addTruckWeight;
    this.truckObj.height = this.addTruckHeight;
    this.truckObj.width = this.addTruckWidth;
    this.crudService.addTruck(this.truckObj).subscribe(res =>{
      this.ngOnInit();
      this.addTruckID;
      this.addTruckType= '';
      this.addTruckWeight;
      this.addTruckHeight;
      this.addTruckWidth;
    }, err =>{
      alert(err);
    })
  }

  editTruck(){
    this.crudService.editTruck(this.truckObj).subscribe(res =>{
      this.ngOnInit();
    }, err=>{
      alert("Failed to update truck");
    })
  }

  deleteTruck(etruck : Truck){
    this.crudService.deleteTruck(etruck).subscribe(res =>{
      this.ngOnInit()
    }, err =>{
      alert("Failed to delete truck");
    })
  }
  
}




/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */