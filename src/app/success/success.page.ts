import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage {
  suratType: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.suratType = this.route.snapshot.queryParamMap.get('type') || 'Surat';
  }

  goBack() {
    this.router.navigate(['/pengajuan']);
  }
}
