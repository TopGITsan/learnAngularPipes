import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn Pipes';

  private actualAmountInEUR = 101.25;

  eur = true;
  currency = 'USD';
  rateUsdEur = 1.12;

  testNgIf = false;

  data = [
    {
      lang: "JavaScript",
      usedOn: 'web development'
    },
    {
      lang: "Swift",
      usedOn: "IOS"
    }
  ];

  constructor(){
    setInterval(()=>{
      this.testNgIf = !this.testNgIf;
    },10000)
  }

  get amount(){
    return this.eur ? this.actualAmountInEUR : this.actualAmountInEUR*this.rateUsdEur
  }

  get format(){
    return this.eur ? 'EUR' : 'USD';
  }

  toggleCurrency(){
    this.eur = !this.eur;
    this.currency = this.eur ? 'USD' : 'EUR';
  }

}
