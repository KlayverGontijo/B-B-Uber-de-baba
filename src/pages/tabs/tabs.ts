import { Component } from '@angular/core';

//importação David Levi
import { FeedPage } from '../feed/feed';
import { CategoryPage } from '../category/category';
import { MapPage } from '../map/map';
import { SystemPage } from '../system/system';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage; //David Levi acrescentando no tabs o comando para o click
  tab2Root = CategoryPage;
  tab3Root = MapPage;
  tab4Root = SystemPage;

  constructor() {

  }
}
