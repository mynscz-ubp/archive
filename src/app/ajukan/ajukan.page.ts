import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../services/submission.service';

@Component({
  standalone: false,
  selector: 'app-ajukan',
  templateUrl: './ajukan.page.html',
  styleUrls: ['./ajukan.page.scss'],
})
export class AjukanPage implements OnInit {
  suratType: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private submissionService: SubmissionService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('type');
    if (param) {
      this.suratType = this.formatJudul(param);
    }
  }
  formatJudul(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  submitForm() {
    this.submissionService.addSubmission({
      judul: this.suratType,
      dept: ['Keluhan'].includes(this.suratType) ? 'GA' : 'HRD',
      ext: ['Rekomendasi', 'Ket-Kerja'].includes(this.suratType)
        ? 'PDF'
        : 'DOCX',
      status: 'Menunggu',
    });

    this.router.navigate(['/success'], {
      queryParams: { type: this.suratType },
    });
  }
}
