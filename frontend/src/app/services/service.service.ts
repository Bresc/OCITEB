import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { FacDistanciaI01 } from '../models/fac-distancia-i01';
import { FacDistanciaI02 } from '../models/FacDistanciaI02';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedFacDisI01: FacDistanciaI01;
  facDisI01Array: FacDistanciaI01[];
  facDisI02Array: FacDistanciaI02[];

  constructor(private http: HttpClient) {
    this.selectedFacDisI01 = new FacDistanciaI01();
   }

  getFacDistanciaI01(){
    return this.http.get('http://localhost:3000/facDistancia/i01'); 
  }

  getFacDistanciaI02(){
    return this.http.get('http://localhost:3000/facDistancia/i02');
  }








}
