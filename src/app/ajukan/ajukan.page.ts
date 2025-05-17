import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../services/submission.service';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-ajukan',
  templateUrl: './ajukan.page.html',
  styleUrls: ['./ajukan.page.scss'],
})
export class AjukanPage implements OnInit {
  nama: string = '';
  nip: string = '';
  suratType: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private submissionService: SubmissionService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('type');
    if (param) {
      this.suratType = this.formatJudul(param);
    }

    const user = this.authService.getUser();
    this.nama = user?.nama || '';
    this.nip = user?.nip || '';
  }

  formatJudul(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  submitForm() {
    const user = this.authService.getUser();

    this.submissionService.addSubmission({
      judul: this.suratType,
      dept: ['Keluhan'].includes(this.suratType) ? 'GA' : 'HRD',
      ext: ['Rekomendasi', 'Ket-Kerja'].includes(this.suratType)
        ? 'PDF'
        : 'DOCX',
      status: 'Menunggu',
      tanggal: new Date().toLocaleDateString(),
      nama: user?.nama || 'Tidak diketahui',
      nip: user?.nip || '-',
      company: 'Aventrex',
      catatan: 'Pengajuan dokumen ' + this.suratType,
    });

    this.router.navigate(['/success'], {
      queryParams: { type: this.suratType },
    });
  }
}
