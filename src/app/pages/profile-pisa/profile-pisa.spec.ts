import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePisa } from './profile-pisa';

describe('ProfilePisa', () => {
  let component: ProfilePisa;
  let fixture: ComponentFixture<ProfilePisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePisa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePisa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
