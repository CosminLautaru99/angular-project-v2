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

  editTruckID : number = 0;
  editTruckType : string = '';
  editTruckWeight : number = 0;
  editTruckHeight : number = 0;
  editTruckWidth : number = 0;

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    
    this.truckObj = new Truck();
    this.truckArr = []

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
      alert('Chose a different ID');
    })
  }

  editTruck(){
    this.truckObj.id = this.editTruckID;
    this.truckObj.type = this.editTruckType;
    this.truckObj.weight = this.editTruckWeight;
    this.truckObj.height = this.editTruckHeight;
    this.truckObj.width = this.editTruckWidth;
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
    this.editTruckID = etruck.id;
    this.editTruckType = etruck.type;
    this.editTruckWeight = etruck.weight;
    this.editTruckHeight = etruck.height;
    this.editTruckWidth = etruck.width;
  }
  
}


