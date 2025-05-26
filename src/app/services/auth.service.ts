// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    if (this.user) return this.user;

    const nama = localStorage.getItem('nama');
    const nip = localStorage.getItem('nip');
    const sisaCutiTahunan = parseInt(
      localStorage.getItem('sisaCutiTahunan') || '0',
      10
    );
    const sisaCutiIstimewa = parseInt(
      localStorage.getItem('sisaCutiIstimewa') || '0',
      10
    );

    if (nama && nip) {
      this.user = {
        nama,
        nip,
        sisaCuti: {
          tahunan: sisaCutiTahunan,
          istimewa: sisaCutiIstimewa,
        },
      };
      return this.user;
    }

    return null;
  }
}
