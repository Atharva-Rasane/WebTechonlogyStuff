import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryComponent } from './enquery.component';

describe('EnqueryComponent', () => {
  let component: EnqueryComponent;
  let fixture: ComponentFixture<EnqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnqueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
