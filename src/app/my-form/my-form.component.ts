import { Component, OnInit } from '@angular/core';
import { Order } from '../app.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})


export class MyFormComponent{

  model: Order = new Order();

  constructor(){}

  //Action après avoir cliqué sur submit
  onSubmit(){
    console.log(this.model);
  }

}
