import { Component } from "@angular/core";
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salaryCalculator.component.html',
  styleUrls: ['./salaryCalculator.component.css'],
  providers: [ SalaryCalculatorModel] /* This will inject a dedicated instance for this component */
})
export class SalaryCalculatorComponent {
  showResult: boolean = false;

  //The following is violation of Dependency Inversion Principle (DIP)
  //model: SalaryCalculatorModel = new SalaryCalculatorModel();

  /* 
  private model : SalaryCalculatorModel = null;

  constructor(model : SalaryCalculatorModel){
    this.model = model;
  } 
  */

  // a simplified version of the above is :
  constructor(public model: SalaryCalculatorModel) {
    
  }

  /* onBasicChange(value){
        this.model.basic = value;
    } */
}