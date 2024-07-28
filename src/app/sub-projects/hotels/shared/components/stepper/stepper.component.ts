import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() steppers: string[] = []
  @Input() activeStepIndex: number = 0
  activeStep: string = ''

  constructor() { }

  ngOnInit(): void {
    console.log("step are",this.steppers)
  }

  next() {
    this.activeStepIndex++
    this.activeStep = this.steppers.length > 0 ? this.steppers[this.activeStepIndex] : ''
  }

  previous() {
    this.activeStepIndex--
    this.activeStep = this.steppers.length > 0 ? this.steppers[this.activeStepIndex] : ''
  }

}
