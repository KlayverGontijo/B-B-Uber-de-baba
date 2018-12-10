import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//intro
import { IntroPage } from '../pages/intro/intro';

//firebase
import firebase from 'firebase/app';
import { firebaseConfig } from './credentials';
import 'firebase/auth';
import { FeedPage } from '../pages/feed/feed';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = IntroPage;
  rootPage: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //FireBase
      firebase.initializeApp(firebaseConfig);
    
      //Decisão de login somente uma unica vez
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        } else {
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });
    });
  }
    
}
