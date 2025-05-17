import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengajuanPage } from './pengajuan.page';

const routes: Routes = [
  {
    path: '',
    component: PengajuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengajuanPageRoutingModule {}
