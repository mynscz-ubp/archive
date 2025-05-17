import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SubmissionService } from '../services/submission.service';
import { NavigationExtras } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage {
  submissions: any[] = [];

  constructor(
    private navCtrl: NavController,
    private submissionService: SubmissionService
  ) {}

  ionViewWillEnter() {
    // Ambil data dari service saat halaman akan ditampilkan
    this.submissions = this.submissionService.getSubmissions();
  }

  getPendingCount() {
    return this.submissions.filter((s) => s.status === 'Menunggu').length;
  }

  getColor(status: string) {
    if (status === 'Disetujui') return 'success';
    if (status === 'Ditolak') return 'danger';
    return 'medium';
  }

  goToRiwayatDetail(item: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        detail: item,
      },
    };
    this.navCtrl.navigateForward('/riwayat', navigationExtras);
  }
}
