import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then((m) => m.TemplatePageModule),
  },
  {
    path: 'approval',
    loadChildren: () =>
      import('./approval/approval.module').then((m) => m.ApprovalPageModule),
  },
  {
    path: 'riwayat',
    loadChildren: () =>
      import('./riwayat/riwayat.module').then((m) => m.RiwayatPageModule),
  },
  {
    path: 'pengajuan',
    loadChildren: () =>
      import('./pengajuan/pengajuan.module').then((m) => m.PengajuanPageModule),
  },
  {
    path: 'ajukan/:type',
    loadChildren: () =>
      import('./ajukan/ajukan.module').then((m) => m.AjukanPageModule),
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'komentar',
    loadChildren: () => import('./komentar/komentar.module').then( m => m.KomentarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
