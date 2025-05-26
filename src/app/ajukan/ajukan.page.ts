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
  tanggal: string = '';
  tipeCuti: string = '';
  sisaCuti: number = 0;
  alasan: string = '';

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
  onTipeCutiChange() {
    const user = this.authService.getUser();
    if (this.tipeCuti === 'tahunan') {
      this.sisaCuti = user?.sisaCuti?.tahunan || 0;
    } else if (this.tipeCuti === 'istimewa') {
      this.sisaCuti = user?.sisaCuti?.istimewa || 0;
    } else {
      this.sisaCuti = 0;
    }
  }

  formatJudul(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  submitForm() {
    const user = this.authService.getUser();

    // Ambil tanggal dari inputan pengguna
    const inputTanggal = (
      document.querySelector('ion-input[type="date"]') as HTMLInputElement
    )?.value;

    this.submissionService.addSubmission({
      judul: this.suratType,
      dept: ['Keluhan'].includes(this.suratType) ? 'GA' : 'HRD',
      ext: ['Rekomendasi', 'Ket-Kerja'].includes(this.suratType)
        ? 'PDF'
        : 'DOCX',
      status: 'Menunggu',
      tanggal: inputTanggal || new Date().toLocaleDateString(), // Ambil dari input atau gunakan tanggal saat ini
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
