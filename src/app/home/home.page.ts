import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../services/submission.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  outputtext: any;
  submissions: any[] = [];

  constructor(private submissionService: SubmissionService) {}

  ngOnInit() {
    this.outputtext = localStorage.getItem('nama');
    this.submissions = this.submissionService.getSubmissions();
    console.log('Ini Hasil dari Data LocalStorage ==>' + this.outputtext);
  }

  getCountByStatus(status: string): number {
    if (status === 'Diajukan') {
      return this.submissions.filter(
        (s) => s.status === 'Menunggu' || s.status === 'Diproses'
      ).length;
    }
    return this.submissions.filter((s) => s.status === status).length;
  }
}
