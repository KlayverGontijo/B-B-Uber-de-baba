import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//criadas David Levi
import { FeedPageModule } from '../pages/feed/feed.module';
import { CategoryPageModule } from '../pages/category/category.module';
import { MapPageModule } from '../pages/map/map.module';
import { SystemPageModule } from '../pages/system/system.module';
import { LoginPageModule } from '../pages/login/login.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { RegisterPageModule } from '../pages/register/register.module';


//http
import {HttpModule} from  '@angular/http';
import { MoovieProvider } from '../providers/moovie/moovie';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { EnfermeiraPageModule } from '../pages/enfermeira/enfermeira.module';
import { BabasPageModule } from '../pages/babas/babas.module';
import { EstagiariasPageModule } from '../pages/estagiarias/estagiarias.module';

//Camera
import { Camera } from '@ionic-native/camera';
import { RedefinePasswordPageModule } from '../pages/redefine-password/redefine-password.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //Intro app
    IntroPageModule,

    //Login
    LoginPageModule,
    RegisterPageModule,
    RedefinePasswordPageModule,
    //Tabs
    FeedPageModule, //David Levi (Importante para colocar no tabs)
    CategoryPageModule,
    MapPageModule,
    SystemPageModule,

    //Paginas secundarias
    EnfermeiraPageModule,
    BabasPageModule,
    EstagiariasPageModule,

    //http
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    AuthProvider,
    EventProvider,
    ProfileProvider,
    //Camera
    Camera
  ]
})
export class AppModule {}
