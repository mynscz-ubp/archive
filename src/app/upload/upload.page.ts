import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  uploadedFile: File | null = null;

  constructor() {}

  ngOnInit() {}

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Supaya bisa drop
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadedFile = event.dataTransfer.files[0];
      console.log('Dropped file:', this.uploadedFile);
    }
  }
}
