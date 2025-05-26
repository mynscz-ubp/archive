import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface User {
  email: string;
  password: string;
  nama: string;
  nip: string;
  jabatan: string;
  sisaCuti: {
    tahunan: number;
    istimewa: number;
  };
}

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  showAlert: boolean = false;
  isSplashVisible = true;

  dummyUsers: User[] = [
    {
      email: 'budi@aventrex.com',
      password: '111',
      nama: 'Budi Santoso',
      nip: '1987654321',
      jabatan: 'Staff IT',
      sisaCuti: {
        tahunan: 4,
        istimewa: 2,
      },
    },
    {
      email: 'admin@aventrex.com',
      password: 'admin',
      nama: 'Administrator',
      nip: '1234567890',
      jabatan: 'Administrator',
      sisaCuti: {
        tahunan: 10,
        istimewa: 5,
      },
    },
    {
      email: 'agus@aventrex.com',
      password: '222',
      nama: 'Agus Haryanto',
      nip: '9876543210',
      jabatan: 'HRD',
      sisaCuti: {
        tahunan: 8,
        istimewa: 3,
      },
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const serializedUsers = this.dummyUsers
      .map((u) => `${u.email}|${u.password}|${u.nama}|${u.nip}|${u.jabatan}`)
      .join(';');

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', serializedUsers);
    }
    setTimeout(() => {
      this.isSplashVisible = false;
    }, 2500);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  doSubmit() {
    const foundUser = this.dummyUsers.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (foundUser) {
      localStorage.setItem('email', foundUser.email);
      localStorage.setItem('nama', foundUser.nama);
      localStorage.setItem('nip', foundUser.nip);
      localStorage.setItem('jabatan', foundUser.jabatan);
      localStorage.setItem(
        'sisaCutiTahunan',
        foundUser.sisaCuti.tahunan.toString()
      );
      localStorage.setItem(
        'sisaCutiIstimewa',
        foundUser.sisaCuti.istimewa.toString()
      );

      this.authService.setUser({
        nama: foundUser.nama,
        nip: foundUser.nip,
        sisaCuti: foundUser.sisaCuti,
      });

      this.router.navigateByUrl('/home');
    } else {
      this.showAlert = true;
    }
  }
}
