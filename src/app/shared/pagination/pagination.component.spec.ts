import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

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
}

describe('PaginationComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: PaginationComponent;

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

});
