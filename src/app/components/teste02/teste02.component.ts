import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-teste02',
  templateUrl: './teste02.component.html',
  styleUrls: ['./teste02.component.css']
})
export class Teste02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  darkmode = false;

  modetoggle(){
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('data-theme',this.darkmode ? "dark" : "light");
  }
}
