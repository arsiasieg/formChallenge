import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
}

//Création d'un modèle pour le formulaire. Le undefined fait chier... mais on l'accepte pour l'exo
export class Order {
    title: string = "";
    quantity: number = 0;
    date: undefined;
    contact: string= "";
}

export class User {
  firstname:string ="";
  lastname: string = "";
  password : undefined; 
  mail: string = "";
}
