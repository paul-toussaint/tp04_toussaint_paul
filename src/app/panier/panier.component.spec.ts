import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierComponent } from './panier.component';

describe('CartComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierComponent]
    });
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
