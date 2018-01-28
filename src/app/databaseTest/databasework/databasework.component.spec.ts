import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseworkComponent } from './databasework.component';

describe('DatabaseworkComponent', () => {
  let component: DatabaseworkComponent;
  let fixture: ComponentFixture<DatabaseworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
