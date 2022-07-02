import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMoviesItemComponent } from './favorite-movies-item.component';

describe('FavoriteMoviesItemComponent', () => {
  let component: FavoriteMoviesItemComponent;
  let fixture: ComponentFixture<FavoriteMoviesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMoviesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMoviesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
