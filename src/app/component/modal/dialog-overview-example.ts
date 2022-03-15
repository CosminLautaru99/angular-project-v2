import {Component, Inject, Input} from '@angular/core';
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
  
  truckObj : Truck = new Truck(); 
  editTruckType : string = '';
 
  

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  call(etruck: Truck){
    this.truckObj = etruck;
    this.editTruckType = etruck.type;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  truckObj : Truck = new Truck(); 
  truckArr : Truck[] = [];

  addTruckID : number = 0;
  addTruckType : string = '';
  addTruckWeight : number = 0;
  addTruckHeight : number = 0;
  addTruckWidth : number = 0;

  editTruckID : number = 0;
  editTruckType : string = '';
  editTruckWeight : number = 0;
  editTruckHeight : number = 0;
  editTruckWidth : number = 0;
  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private crudService : CrudService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.editTruckID = 0;
    this.editTruckType = '';
    this.editTruckHeight = 0;
    this.editTruckWeight = 0;
    this.editTruckWidth = 0;
    
    this.addTruckID = 0;
    this.addTruckType = '';
    this.addTruckHeight = 0;
    this.addTruckWeight = 0;
    this.addTruckWidth = 0;

    this.truckObj = new Truck();
    this.truckArr = []
    this.getAllTrucks();
  }
  getAllTrucks() {
    this.crudService.getAllTrucks().subscribe(res =>{
      this.truckArr = res;
    }, err =>{
      alert('Unable to get the list of trucks');
    })
  }


  editTruck(){
    this.truckObj.type = this.editTruckType;
    this.crudService.editTruck(this.truckObj).subscribe(res =>{
      this.ngOnInit();
      this.onNoClick()
    }, err=>{
      alert("Failed to update truck");
    })
  }


  // call(etruck: Truck){
  //   this.truckObj = etruck;
  //   this.editTruckType = etruck.type;
  // }
}





// @Component({
//   selector: 'dashboard-component-dialog',
//   templateUrl: '../modal/dialog-overview-example-dialog.html',
// })
// export class DashBoardComponentDialog {
//   truckObj : Truck = new Truck(); 
//   truckArr : Truck[] = [];

//   addTruckID : number = 0;
//   addTruckType : string = '';
//   addTruckWeight : number = 0;
//   addTruckHeight : number = 0;
//   addTruckWidth : number = 0;

//   editTruckType : string = '';
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//     private crudService : CrudService
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

  
  
//   ngOnInit(): void {
//     this.addTruckType = '';
//     this.editTruckType = '';
//     this.truckObj = new Truck();
//     this.truckArr = []
//     this.getAllTrucks();
//   }
//   getAllTrucks() {
//     this.crudService.getAllTrucks().subscribe(res =>{
//       this.truckArr = res;
//     }, err =>{
//       alert('Unable to get the list of trucks');
//     })
//   }

  

//   addTruck() {
//     this.truckObj.id = this.addTruckID;
//     this.truckObj.type = this.addTruckType;
//     this.truckObj.weight = this.addTruckWeight;
//     this.truckObj.height = this.addTruckHeight;
//     this.truckObj.width = this.addTruckWidth;
//     this.crudService.addTruck(this.truckObj).subscribe(res =>{
//       this.ngOnInit();
//       this.addTruckID;
//       this.addTruckType= '';
//       this.addTruckWeight;
//       this.addTruckHeight;
//       this.addTruckWidth;
//     }, err =>{
//       alert(err);
//     })
//   }

//   editTruck(){
//     this.truckObj.type = this.editTruckType;
//     this.crudService.editTruck(this.truckObj).subscribe(res =>{
//       this.ngOnInit();
//     }, err=>{
//       alert("Failed to update truck");
//     })
//   }

//   deleteTruck(etruck : Truck){
//     this.crudService.deleteTruck(etruck).subscribe(res =>{
//       this.ngOnInit()
//     }, err =>{
//       alert("Failed to delete truck");
//     })
//   }

//   call(etruck: Truck){
//     this.truckObj = etruck;
//     this.editTruckType = etruck.type;
//   }
  
// }




/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */