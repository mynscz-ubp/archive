import { Component } from '@angular/core';
import { SubmissionService } from '../services/submission.service';

@Component({
  standalone: false,
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage {
  detail: any = null;

  constructor(private submissionService: SubmissionService) {}

  ionViewWillEnter() {
    this.detail = this.submissionService.getLastSubmission();
    console.log('Data detail:', this.detail);
  }
}
