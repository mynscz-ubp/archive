import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KomentarPage } from './komentar.page';

describe('KomentarPage', () => {
  let component: KomentarPage;
  let fixture: ComponentFixture<KomentarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
