import { Component } from '@angular/core';

import { MesPage } from '../mes/mes';
import { UltimoPage } from '../ultimo/ultimo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UltimoPage;
  tab2Root = MesPage;

  constructor() {

  }
}
