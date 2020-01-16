import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavouritesComponent } from './edit-favourites.component';

describe('EditFavouritesComponent', () => {
  let component: EditFavouritesComponent;
  let fixture: ComponentFixture<EditFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
