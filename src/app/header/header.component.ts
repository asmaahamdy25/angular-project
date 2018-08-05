import { Component, OnInit, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelecte = new EventEmitter<string> ();
  onSelect(feature: string){
 this.featureSelecte.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
