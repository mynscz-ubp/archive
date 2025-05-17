import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SubmissionService } from '../services/submission.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage {
  submissions: any[] = [];
  filteredSubmissions: any[] = [];
  filterStatus: string = '';

  constructor(
    private navCtrl: NavController,
    private submissionService: SubmissionService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.submissions = this.submissionService.getSubmissions();

    // Ambil query parameter filter
    this.route.queryParams.subscribe((params) => {
      this.filterStatus = params['filter'] || '';
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.filterStatus) {
      this.filteredSubmissions = this.submissions.filter(
        (s) => s.status.toLowerCase() === this.filterStatus.toLowerCase()
      );
    } else {
      this.filteredSubmissions = this.submissions;
    }
  }

  getPendingCount() {
    return this.submissions.filter((s) => s.status === 'Menunggu').length;
  }

  getColor(status: string) {
    if (status === 'Disetujui') return 'success';
    if (status === 'Ditolak') return 'danger';
    return 'medium';
  }

  getCountByStatus(status: string): number {
    if (status === 'Diajukan') {
      return this.submissions.filter(
        (s) => s.status === 'Menunggu' || s.status === 'Diproses'
      ).length;
    }
    return this.submissions.filter((s) => s.status === status).length;
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
