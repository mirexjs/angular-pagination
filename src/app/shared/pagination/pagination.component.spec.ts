import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {IOnChangeCurrentPage} from "../models/on-change-current-page.interface";

@Component({
  template: `<ap-pagination 
    [totalPages]='totalPages' 
    [currentPage]='currentPage' 
    [limitPages]='limitPages'
    [firstAndLastPageType]='firstAndLastPageType'
    [showFirstPage]='showFirstPage'
    [showLastPage]='showLastPage'
    [showNextPage]='showNextPage'
    [showPrevPage]='showPrevPage'
    [dynamicVisibilityFirstPage]='dynamicVisibilityFirstPage'
    [dynamicVisibilityLastPage]='dynamicVisibilityLastPage'
    [dynamicVisibilityPreviousPage]='dynamicVisibilityPreviousPage'
    [dynamicVisibilityNextPage]='dynamicVisibilityNextPage'
    [overrideLocalCurrentPage]='overrideLocalCurrentPage'
    (onChangeCurrentPage)='changeCurrentPage($event)'
  ></ap-pagination>`
})
class TestHostComponent {
  totalPages: number;
  currentPage: number;
  limitPages: number;
  firstAndLastPageType: string;
  showFirstPage: boolean;
  showLastPage: boolean;
  showNextPage: boolean;
  showPrevPage: boolean;
  dynamicVisibilityFirstPage: boolean;
  dynamicVisibilityLastPage: boolean;
  dynamicVisibilityPreviousPage: boolean;
  dynamicVisibilityNextPage: boolean;
  overrideLocalCurrentPage: boolean;
  public changeCurrentPage(page: IOnChangeCurrentPage) {}
}

function getElementsBySelector(selector: string) {
  return (fixture: ComponentFixture<TestHostComponent>) =>
    fixture.debugElement.queryAll(By.css(selector));
}

function getElementBySelector(selector: string) {
  return (fixture: ComponentFixture<TestHostComponent>) =>
    fixture.debugElement.query(By.css(selector));
}

describe('PaginationComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: PaginationComponent;
  let mockChangeCurrentPage;

  const getNumberButtons = getElementsBySelector('.ap-pagination__button--number');
  const getCurrentNumberButton = getElementBySelector('.ap-pagination__button--active');
  const getPrevPageButton = getElementBySelector('.ap-pagination__prev-page');
  const getNextPageButton = getElementBySelector('.ap-pagination__next-page');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('ap-pagination')).componentInstance;
    mockChangeCurrentPage = spyOn(testHostComponent, 'changeCurrentPage');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  describe('when component has totalPages input', () => {

    it('should totalPages return value', () => {
      testHostComponent.totalPages = 10;
      fixture.detectChanges();

      expect(component.totalPages).toEqual(testHostComponent.totalPages);
    });

  });

  describe('when component has currentPage input', () => {

    it('should currentPage return value', () => {
      testHostComponent.currentPage = 10;
      fixture.detectChanges();

      expect(component.currentPage).toEqual(testHostComponent.currentPage);
    });

  });

  describe('when component has limitPages input', () => {

    it('should limitPages return value', () => {
      testHostComponent.limitPages = 10;
      fixture.detectChanges();

      expect(component.limitPages).toEqual(testHostComponent.limitPages);
    });

  });

  describe('when component has firstAndLastPageType input', () => {

    it('should firstAndLastPageType return value', () => {
      testHostComponent.firstAndLastPageType = 'icon';
      fixture.detectChanges();

      expect(component.firstAndLastPageType).toEqual(testHostComponent.firstAndLastPageType);
    });

  });

  describe('when component has showFirstPage input', () => {

    it('should showFirstPage return value', () => {
      testHostComponent.showFirstPage = true;
      fixture.detectChanges();

      expect(component.showFirstPage).toEqual(testHostComponent.showFirstPage);
    });

  });

  describe('when component has showLastPage input', () => {

    it('should showLastPage return value', () => {
      testHostComponent.showLastPage = true;
      fixture.detectChanges();

      expect(component.showLastPage).toEqual(testHostComponent.showLastPage);
    });

  });

  describe('when component has showNextPage input', () => {

    it('should showNextPage return value', () => {
      testHostComponent.showNextPage = true;
      fixture.detectChanges();

      expect(component.showNextPage).toEqual(testHostComponent.showNextPage);
    });

  });

  describe('when component has showPrevPage input', () => {

    it('should showPrevPage return value', () => {
      testHostComponent.showPrevPage = true;
      fixture.detectChanges();

      expect(component.showPrevPage).toEqual(testHostComponent.showPrevPage);
    });

  });

  describe('when component has dynamicVisibilityFirstPage input', () => {

    it('should dynamicVisibilityFirstPage return value', () => {
      testHostComponent.dynamicVisibilityFirstPage = false;
      fixture.detectChanges();

      expect(component.dynamicVisibilityFirstPage).toEqual(testHostComponent.dynamicVisibilityFirstPage);
    });

  });

  describe('when component has dynamicVisibilityLastPage input', () => {

    it('should dynamicVisibilityLastPage return value', () => {
      testHostComponent.dynamicVisibilityLastPage = false;
      fixture.detectChanges();

      expect(component.dynamicVisibilityLastPage).toEqual(testHostComponent.dynamicVisibilityLastPage);
    });

  });

  describe('when component has dynamicVisibilityPreviousPage input', () => {

    it('should dynamicVisibilityPreviousPage return value', () => {
      testHostComponent.dynamicVisibilityPreviousPage = false;
      fixture.detectChanges();

      expect(component.dynamicVisibilityPreviousPage).toEqual(testHostComponent.dynamicVisibilityPreviousPage);
    });

  });

  describe('when component has dynamicVisibilityNextPage input', () => {

    it('should dynamicVisibilityNextPage return value', () => {
      testHostComponent.dynamicVisibilityNextPage = false;
      fixture.detectChanges();

      expect(component.dynamicVisibilityNextPage).toEqual(testHostComponent.dynamicVisibilityNextPage);
    });

  });

  describe('when component has overrideLocalCurrentPage input', () => {

    it('should overrideLocalCurrentPage return value', () => {
      testHostComponent.overrideLocalCurrentPage = false;
      fixture.detectChanges();

      expect(component.overrideLocalCurrentPage).toEqual(testHostComponent.overrideLocalCurrentPage);
    });

  });

  describe('when component changeCurrentPage method has been called', () => {
    it('should be call onChangeCurrentPage output', () => {
      testHostComponent.totalPages = 5;
      testHostComponent.currentPage = 2;
      fixture.detectChanges();

      component.changeCurrentPage(new Event('click'), 3);
      expect(mockChangeCurrentPage).toHaveBeenCalledWith(<IOnChangeCurrentPage>{ currentPage: 3, previousPage: 2});
    });
  });

  describe('when component has totalPages 100 value', () => {
    it('should generate 100 number buttons', () => {
      testHostComponent.totalPages = 100;
      fixture.detectChanges();

      expect(getNumberButtons(fixture).length).toEqual(100);
    });
  });

  describe('when component has totalPages 100 value and currentPage is 5', () => {
    it('should add class for activate button', () => {
      testHostComponent.totalPages = 100;
      testHostComponent.currentPage = 5;
      fixture.detectChanges();

      expect(getCurrentNumberButton(fixture).nativeElement.text).toContain(5);
    });
  });

  describe('when component has totalPages 100 value and limitPages is 5', () => {
    it('should add class for activate button', () => {
      testHostComponent.totalPages = 100;
      testHostComponent.currentPage = 1;
      testHostComponent.limitPages = 5;
      fixture.detectChanges();

      expect(getNumberButtons(fixture).length).toEqual(5);
    });
  });

  describe('when component has totalPages 100 value and limitPages is 5', () => {
    it('should add class for activate button', () => {
      testHostComponent.totalPages = 5;
      testHostComponent.currentPage = 1;
      testHostComponent.limitPages = 10;
      fixture.detectChanges();

      expect(getNumberButtons(fixture).length).toEqual(5);
    });
  });

  describe('when component has showPrevPage true value', () => {
    it('should show prev page button', () => {
      testHostComponent.totalPages = 100;
      testHostComponent.currentPage = 1;
      testHostComponent.limitPages = 5;
      fixture.detectChanges();

      expect(getPrevPageButton(fixture)).toBeDefined();
    });
  });

  describe('when component has showNextPage true value', () => {
    it('should show next page button', () => {
      testHostComponent.totalPages = 100;
      testHostComponent.currentPage = 1;
      testHostComponent.limitPages = 5;
      fixture.detectChanges();

      expect(getNextPageButton(fixture)).toBeDefined();
    });
  });

});
