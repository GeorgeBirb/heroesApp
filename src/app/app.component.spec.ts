// https://stackoverflow.com/questions/37502809/what-are-the-spec-ts-files-generated-by-angular-cli-for
//   Unit testing is a software development process in which the smallest testable parts of an application,
// called units, are individually and independently scrutinized for proper operation.
// This testing methodology is done during the development process by the software developers and
// sometimes QA staff.
//   Angular Unit testing is the process of testing small and isolated pieces of code in your Angular application.
// This provides an added advantage to the users in the sense that they can add any new features
// without breaking any other part of their application.
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('heroes app is running!');
  });
});
