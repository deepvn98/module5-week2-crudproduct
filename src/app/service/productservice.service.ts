import { Injectable } from '@angular/core';
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

 listproduct:Product[]=[];
  constructor() {
    this.listproduct;
  }

}
