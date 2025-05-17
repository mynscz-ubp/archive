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

    // fallback dari localStorage (kalau page reload dan this.user hilang)
    const nama = localStorage.getItem('nama');
    const nip = localStorage.getItem('nip');

    if (nama && nip) {
      this.user = { nama, nip };
      return this.user;
    }

    return null;
  }
}
