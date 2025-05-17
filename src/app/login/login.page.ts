import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const dummyUsers = [
      {
        email: 'budi@aventrex.com',
        password: '111',
        nama: 'Budi Santoso',
        nip: '1987654321',
        jabatan: 'Staff IT',
      },
      {
        email: 'admin@aventrex.com',
        password: 'admin',
        nama: 'Administrator',
        nip: '1234567890',
        jabatan: 'Administrator',
      },
      {
        email: 'agus@aventrex.com',
        password: '222',
        nama: 'Agus Haryanto',
        nip: '9876543210',
        jabatan: 'HRD',
      },
    ];

    // Simpan ke localStorage sebagai string non-JSON (seperti sebelumnya)
    const serializedUsers = dummyUsers
      .map((u) => `${u.email}|${u.password}|${u.nama}|${u.nip}|${u.jabatan}`)
      .join(';');

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', serializedUsers);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  doSubmit() {
    const usersData = localStorage.getItem('users') || '';
    const usersArray = usersData.split(';');

    const foundUser = usersArray.find((item) => {
      const [email, password] = item.split('|');
      return email === this.email && password === this.password;
    });

    if (foundUser) {
      const [email, password, nama, nip, jabatan] = foundUser.split('|');

      localStorage.setItem('email', email);
      localStorage.setItem('nama', nama);
      localStorage.setItem('nip', nip);
      localStorage.setItem('jabatan', jabatan);

      this.authService.setUser({ nama, nip });

      this.router.navigateByUrl('/home');
    } else {
      this.showAlert = true;
    }
  }
}
