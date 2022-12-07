import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNovelTextComponent } from './get-novel-text.component';

describe('GetNovelTextComponent', () => {
  let component: GetNovelTextComponent;
  let fixture: ComponentFixture<GetNovelTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNovelTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNovelTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
