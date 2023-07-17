import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieContentComponent } from './categorie-content.component';

describe('CategorieContentComponent', () => {
  let component: CategorieContentComponent;
  let fixture: ComponentFixture<CategorieContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
