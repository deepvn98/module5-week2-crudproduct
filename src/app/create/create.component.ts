import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductserviceService} from "../service/productservice.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  products:Product[]=[];
  id:number=0;
  name:String='';
  price:number=0;
  description:String='';

  constructor(private component:ProductserviceService) {
    this.products = component.listproduct;
  }

  ngOnInit(): void {
  }

  create(){
   let product:Product={
     id:this.id,
     name:this.name,
     price:this.price,
     description:this.description
    }
    this.component.listproduct.push(product);
    this.products = this.component.listproduct;
    console.log(this.products)
  }

}
