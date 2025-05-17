import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  private submissions: any[] = [];

  addSubmission(submission: any) {
    this.submissions.push(submission);
  }

  getSubmissions() {
    return this.submissions;
  }
}
