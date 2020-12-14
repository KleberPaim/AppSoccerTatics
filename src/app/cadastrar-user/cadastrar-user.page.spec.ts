import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrarUserPage } from './cadastrar-user.page';

describe('CadastrarUserPage', () => {
  let component: CadastrarUserPage;
  let fixture: ComponentFixture<CadastrarUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
