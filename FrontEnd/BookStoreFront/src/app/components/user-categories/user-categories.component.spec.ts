import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCatergoriesComponent } from './user-categories.component';

describe('UserCatergoriesComponent', () => {
  let component: UserCatergoriesComponent;
  let fixture: ComponentFixture<UserCatergoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCatergoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCatergoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
