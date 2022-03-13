import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Truck} from "../model/truck"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL : string = "" ;

  constructor(private http : HttpClient ) {
    this.serviceURL = "http://localhost:3000/trucks"
   }

   addTruck(truck : Truck) : Observable<Truck> {
     return this.http.post<Truck>(this.serviceURL, truck);
   }
   getAllTrucks() : Observable<Truck[]> {
     return this.http.get<Truck[]>(this.serviceURL);
   }
   deleteTruck(truck : Truck) : Observable<Truck> {
     return this.http.delete<Truck>(this.serviceURL+'/'+truck.id);
   }
   editTruck(truck : Truck) : Observable<Truck> {
     return this.http.put<Truck>(this.serviceURL+'/'+truck.id, truck);
   }
  
}
