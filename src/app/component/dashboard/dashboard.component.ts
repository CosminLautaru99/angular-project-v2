import { Component, OnInit } from '@angular/core';
import { Truck } from 'src/app/model/truck';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

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
    this.editTruckType = '';
    this.addTruckType = '';
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
  call(etruck: Truck){
    console.log('truck');
    this.truckObj = etruck;
    this.editTruckType = etruck.type;
  }
  
}


