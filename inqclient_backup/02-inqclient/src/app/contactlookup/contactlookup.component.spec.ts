import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlookupComponent } from './contactlookup.component';

describe('ContactlookupComponent', () => {
  let component: ContactlookupComponent;
  let fixture: ComponentFixture<ContactlookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
