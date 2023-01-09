import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teste01',
  templateUrl: './teste01.component.html',
  styleUrls: ['./teste01.component.css']
})
export class Teste01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  darkmode = false;

  modetoggle(){
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('data-theme',this.darkmode ? "dark" : "light");
  }
  
}
