import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignrecogComponent } from './signrecog.component';

describe('SignrecogComponent', () => {
  let component: SignrecogComponent;
  let fixture: ComponentFixture<SignrecogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignrecogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignrecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
