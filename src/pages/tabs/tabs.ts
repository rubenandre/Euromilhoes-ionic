import { Component } from '@angular/core';

import { MesPage } from '../mes/mes';
import { UltimoPage } from '../ultimo/ultimo';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UltimoPage;
  tab2Root = MesPage;
  tab3Root = SobrePage

  constructor() {

  }
}
