import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  private storageKey = 'submissions';

  addSubmission(submission: any) {
    const submissions = this.getSubmissions();
    submissions.push(submission);
    localStorage.setItem(this.storageKey, JSON.stringify(submissions));
  }

  getSubmissions(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getLastSubmission(): any {
    const submissions = this.getSubmissions();
    return submissions.length ? submissions[submissions.length - 1] : null;
  }
}
