import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengajuanPageRoutingModule } from './pengajuan-routing.module';

import { PengajuanPage } from './pengajuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengajuanPageRoutingModule
  ],
  declarations: [PengajuanPage]
})
export class PengajuanPageModule {}
