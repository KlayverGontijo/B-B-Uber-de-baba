import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnfermeiraPage } from './enfermeira';

@NgModule({
  declarations: [
    EnfermeiraPage,
  ],
  imports: [
    IonicPageModule.forChild(EnfermeiraPage),
  ],
})
export class EnfermeiraPageModule {}
