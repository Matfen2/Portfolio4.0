import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjetComponent } from './show-projet.component';

describe('ShowProjetComponent', () => {
  let component: ShowProjetComponent;
  let fixture: ComponentFixture<ShowProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProjetComponent]
    });
    fixture = TestBed.createComponent(ShowProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
