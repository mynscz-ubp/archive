import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  outputtext: any;

  constructor() {}

  ngOnInit() {
    this.outputtext = localStorage.getItem('email');
    console.log('Ini Hasil dari Data LocalStorage ==>' + this.outputtext);
  }
}
