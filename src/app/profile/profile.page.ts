import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nama: string = '';
  nip: string = '';
  jabatan: string = '';
  email: string = '';

  ngOnInit() {
    this.nama = localStorage.getItem('nama') || '';
    this.nip = localStorage.getItem('nip') || '';
    this.jabatan = localStorage.getItem('jabatan') || '';
    this.email = localStorage.getItem('email') || '';
  }
}
