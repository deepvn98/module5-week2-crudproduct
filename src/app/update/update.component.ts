import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductserviceService} from "../service/productservice.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // get products(): Product[] {
  //   return this._products;
  // }
  //
  // set products(value: Product[]) {
  //   this._products = value;
  // }
  // get product(): Product {
  //   return this._product;
  // }
  //
  // set product(value: Product) {
  //   this._product = value;
  // }

  private _products:Product[] = [];
id:any;
name?:String;
price?:number;
description?:String;
private _product:Product={
  id:0,
  name:'',
  price:0,
  description:''
}

subscription : Subscription
  constructor(private component:ProductserviceService,private active:ActivatedRoute,private router:Router) {
    this._products = this.component.listproduct;
    this.subscription =this.active.paramMap.subscribe((param:ParamMap)=>{
      this.id = param.get('id')
    });
  }

  ngOnInit(): void {
  this.checkId();
  }

  checkId() {
    for (let i = 0; i < this._products.length; i++) {
      if (this._products[i].id == this.id) {
        this._product = this._products[i];
      }
    }
  }

  update() {
  this._product.id = this.id;
  this._product.name=this.name;
  this._product.price=this.price;
  this._product.description=this.description;
  for (let i =0; i< this._products.length;i++){
    if (this._products[i].id==this.id){
      this._products[i]= this._product;
    }
  }

  }

}
