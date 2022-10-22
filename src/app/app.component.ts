import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MyserviceService]
})
export class AppComponent {
  title = 'AngularExample';
/*
  value:String=" ";
  productList: Array<any>=[];

  constructor(private _MyService:MyserviceService){ }

  ngOnInit(): void { 
    this.value = this._MyService.getApp();
    this.productList=this._MyService.getProducts(); 
  } */

}
