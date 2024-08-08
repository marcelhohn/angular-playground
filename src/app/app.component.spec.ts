import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message after saving', fakeAsync(() => {
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    tick(10);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  }));
});
