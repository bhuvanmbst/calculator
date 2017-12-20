import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // nextpage:any=CalculatorPage;

  constructor(public navCtrl: NavController) {

  }
  nextpage() {
    this.navCtrl.push(CalculatorPage);
  }
}
