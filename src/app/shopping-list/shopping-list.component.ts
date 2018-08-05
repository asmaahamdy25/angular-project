import { Component, OnInit } from '@angular/core';
import { Ingration } from '../shared/ingration.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 Ingeratiens : Ingration[] =[
   new Ingration ('apples', 5),
   new Ingration ('Tomatoms', 9),
 ]
  constructor() { }

  ngOnInit() {
  }

}
