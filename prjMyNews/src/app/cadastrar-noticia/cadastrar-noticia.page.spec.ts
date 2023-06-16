import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarNoticiaPage } from './cadastrar-noticia.page';

describe('CadastrarNoticiaPage', () => {
  let component: CadastrarNoticiaPage;
  let fixture: ComponentFixture<CadastrarNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
