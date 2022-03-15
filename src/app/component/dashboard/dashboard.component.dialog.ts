import { Component, OnInit } from '@angular/core';
import { Truck } from 'src/app/model/truck';
import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'dashboard-component-dialog',
  templateUrl: './dashboard.component.dialog.html',
})




export class DashboardComponentDialog implements OnInit {

  truckObj : Truck = new Truck(); 
  truckArr : Truck[] = [];

  addTruckID : number = 0;
  addTruckType : string = '';
  addTruckWeight : number = 0;
  addTruckHeight : number = 0;
  addTruckWidth : number = 0;

  editTruckType : string = '';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.addTruckType = '';
    this.editTruckType = '';
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
    }, err=>{
      alert("Failed to update truck");
    })
  }

  call(etruck: Truck){
    this.truckObj = etruck;
    this.editTruckType = etruck.type;
  }
  
}


