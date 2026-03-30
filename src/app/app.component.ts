import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputMatch = false;
  magicWord = '';
  timeOfDay!: string;

  ngOnInit() {
    this.setThemeDependingOnTime();
  }

  checkInput(value: string) {
    this.magicWord = value;
    this.inputMatch = value.trim().toLowerCase() === 'hallo';
  }

  checkTime(): string {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return this.timeOfDay = 'morning';
    if (hour >= 12 && hour < 18) return this.timeOfDay = 'noon';
    if (hour >= 18 && hour < 21) return this.timeOfDay = 'evening';
    return this.timeOfDay = 'night';
  }

  setThemeDependingOnTime() {
    document.documentElement.setAttribute('data-theme', this.checkTime());
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}


