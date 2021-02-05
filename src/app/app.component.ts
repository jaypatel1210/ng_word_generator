import { Component } from '@angular/core';
import wordArray from '../utils/words';
import countryArr from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordGenrator';

  words = '';

  limit = 10;

  tohandlenewlimit(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = wordArray.slice(0, this.limit).join();
  }

  countryGenrate() {
    this.words = countryArr.slice(0, 10).join();
  }

}
