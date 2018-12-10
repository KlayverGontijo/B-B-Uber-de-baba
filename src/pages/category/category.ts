import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstagiariasPage } from '../estagiarias/estagiarias';
import { BabasPage } from '../babas/babas';
import { EnfermeiraPage } from '../enfermeira/enfermeira';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToFarmaceuticaPage()  //Carregar pag
  {
    this.navCtrl.push(EnfermeiraPage)
  }

  goToBabysitterPage()  //Carregar pag
  {
    this.navCtrl.push(BabasPage)
  }

  goToEstagiariasPage()  //Carregar pag
  {
    this.navCtrl.push(EstagiariasPage)
  }

}
