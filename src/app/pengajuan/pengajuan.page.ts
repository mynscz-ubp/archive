import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmissionService } from '../services/submission.service';
@Component({
  standalone: false,
  selector: 'app-pengajuan',
  templateUrl: './pengajuan.page.html',
  styleUrls: ['./pengajuan.page.scss'],
})
export class PengajuanPage implements OnInit {
  constructor(
    private router: Router,
    private submissionService: SubmissionService
  ) {}

  goToForm(type: string) {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

    const submission = {
      judul: this.getJudul(type),
      dept: this.getDept(type),
      ext: this.getExt(type),
      status: 'Menunggu',
      tanggal: new Date().toLocaleDateString('id-ID'),
      nama: currentUser.nama,
      company: 'PT. JayaYajaya', // atau ambil dari user
      email: currentUser.email,
      catatan: '-',
    };

    this.submissionService.addSubmission(submission);
    this.router.navigate(['/approval']);
  }

  getJudul(type: string): string {
    const map: { [key: string]: string } = {
      'surat-cuti': 'Surat Cuti',
      'surat-rekomendasi': 'Surat Rekomendasi',
      'surat-ket-kerja': 'Surat Ket-Kerja',
      'surat-keluhan': 'Surat Keluhan',
    };

    return map[type] || 'Dokumen';
  }

  getDept(type: string): string {
    return ['surat-keluhan'].includes(type) ? 'GA' : 'HRD';
  }

  getExt(type: string): string {
    return ['surat-rekomendasi', 'surat-ket-kerja'].includes(type)
      ? 'PDF'
      : 'DOCX';
  }

  ngOnInit() {}
}
