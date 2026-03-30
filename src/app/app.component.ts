import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputMatch: boolean = false;
  timeOfDay!: string;
  magicSubmission!: FormGroup;
  currentDate = new Date();
  currentHour = this.currentDate.getHours();  // Gibt die Stunde im 24-Stunden-Format zurück

  constructor(private formBuilder: FormBuilder) {
    this.magicSubmission = this.formBuilder.group({
      magicWord: ['']
    });
    // Beobachte Änderungen an 'magicWord' und prüfe die Eingabe

  }

  ngOnInit() {
    console.log("init");
    this.setThemeDependingOnTime();
  }

  ngOnChange(changes: SimpleChanges): void {
    if (changes['magicWord']) {
      const magicWord = changes['magicWord'].currentValue;
      console.log(magicWord)
    } else {
      return;
    }
  }

  // Methode zum Überprüfen des Inputs
  checkInput(value: string) {
    if (value.trim().toLowerCase() === 'hallo') {
      return this.inputMatch = true;
    } else {
      return this.inputMatch = false;
    }
  }

  checkTime() {
    if (this.currentHour >= 6 && this.currentHour < 12) {
      return this.timeOfDay = 'morning';
    } else if (this.currentHour >= 12 && this.currentHour < 18) {
      return this.timeOfDay = 'noon';
    } else if (this.currentHour >= 18 && this.currentHour < 21) {
      return this.timeOfDay = 'evening';
    } else {
      return this.timeOfDay = 'night';
    }
  }

  setThemeDependingOnTime() {
    return document.documentElement.setAttribute('data-theme', this.checkTime())
  }

  setMechuThemeDark() {
    return document.documentElement.setAttribute('data-theme', 'nacht')
  }

}


