import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //Contexto de usuario (Dados, informações, Senhas, cpf, e-mail...)
  public nomeUsuario: string = "David Levi";//variavel que manda o nome pro html
  public nomeUsuario1: string = "Rogerio";//variavel que manda o nome pro html
  public nomeUsuario2: string = "Klayver";//variavel que manda o nome pro html
  public nomeUsuario3: string = "Mario";//variavel que manda o nome pro html

  //Para criar Funções
  public somaTeste(): void
  {
    alert("Minha função");
    //alert(5+10);
    //Caso for execultar a função assim q a pagina for carregar dentro de ionViewDuLoad
    //this.somaTeste();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
