import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ePocCM-root',
  template: `
    <router-outlet></router-outlet>
    <ePocCM-dashboard></ePocCM-dashboard>`,
  styles: []
})
export class AppComponent {
  title = 'editorPOCCodeMirror';
  constructor(matIconRegistry: MatIconRegistry) { matIconRegistry.registerFontClassAlias('fontawesome', 'fa'); }
}
