import { Component,Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction,AngularFireList } from 'angularfire2/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import {ImgEnviada} from '../../models/img-enviada';
@Injectable({
  providedIn: 'root'
})
export class ImgStorageService {
  public valor:any[];
  private ImageList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {}
  getProduct(){
    this.firebase.list('/product').valueChanges().subscribe(valor=>{this.valor=valor});
    this.ImageList=this.firebase.list('product');
    this.ImageList.query.orderByChild('estado').equalTo("pendiente").on("value", function(snapshot) {

  
     
  });
    console.log( this.valor);
  };
  insertProduct(nueva:ImgEnviada)
  { let enviada:ImgEnviada;

    this.ImageList=this.firebase.list('product')
    this.ImageList.push(nueva);
  }
  updateProduct(enviada:ImgEnviada)
  {

  }
}