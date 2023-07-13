import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlifStoryComponent } from './alif-story.component';

describe('AlifStoryComponent', () => {
  let component: AlifStoryComponent;
  let fixture: ComponentFixture<AlifStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlifStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlifStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
