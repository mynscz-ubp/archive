import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KomentarPageRoutingModule } from './komentar-routing.module';

import { KomentarPage } from './komentar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KomentarPageRoutingModule
  ],
  declarations: [KomentarPage]
})
export class KomentarPageModule {}
