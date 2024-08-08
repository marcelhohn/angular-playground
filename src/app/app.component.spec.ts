import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

describe('AppComponent - with compile components', () => {
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
    // This test fails when using Jest instead of Jasmine and Karma.
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    tick(10);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  }));


  it('should show message after saving - no DOM interaction', fakeAsync(() => {
    // However, it passes when we call the "save" method directly.
    component.save();

    tick(10);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  }));
});

describe('AppComponent - initialize inside fakeAsync', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    })
      .compileComponents();
  });

  function initialize() {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }

  it('should show message after saving', fakeAsync(() => {
    // The test passes if we call "createComponent" inside fakeAsync.
    initialize();
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    tick(10);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  }));
});

describe('AppComponent - without compile components', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should show message after saving', fakeAsync(() => {
    // The test passes if we don't call "compileComponents".
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    tick(10);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  }));
});
