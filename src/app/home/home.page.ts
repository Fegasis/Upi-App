import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.hidden = !section.hidden;
    }
  }
}
