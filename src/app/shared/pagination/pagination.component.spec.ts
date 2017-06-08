import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import {Component, EventEmitter} from '@angular/core';
import {By} from '@angular/platform-browser';
import {IOnChangeCurrentPage} from '../models/on-change-current-page.interface';

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
  const getFirstPageButton = getElementBySelector('.ap-pagination__first-page');
  const getLastPageButton = getElementBySelector('.ap-pagination__last-page');

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

  describe('inputs tests', () => {

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

  describe('outputs tests', () => {

    describe('when component changeCurrentPage method has been called and page isn\'t equal currentPage', () => {
      it('should be call onChangeCurrentPage output', () => {
        testHostComponent.totalPages = 5;
        testHostComponent.currentPage = 2;
        fixture.detectChanges();

        mockChangeCurrentPage.calls.reset();
        component.changeCurrentPage(new Event('click'), 3);
        expect(mockChangeCurrentPage).toHaveBeenCalledWith(<IOnChangeCurrentPage>{ currentPage: 3, previousPage: 2});
      });
    });

    describe('when component changeCurrentPage method has been called and page is equal currentPage', () => {
      it('should be call onChangeCurrentPage output', () => {
        testHostComponent.totalPages = 5;
        testHostComponent.currentPage = 2;
        fixture.detectChanges();

        mockChangeCurrentPage.calls.reset();
        component.changeCurrentPage(new Event('click'), 2);
        expect(mockChangeCurrentPage).not.toHaveBeenCalledWith();
      });
    });

  });

  describe('template tests', () => {

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

    describe('when showFirstPage is true', () => {
      it('should show first page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 1;
        testHostComponent.limitPages = 5;
        testHostComponent.showFirstPage = true;
        testHostComponent.dynamicVisibilityFirstPage = false;
        fixture.detectChanges();

        expect(getFirstPageButton(fixture)).toBeDefined();
      });

      it('should show first page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 5;
        testHostComponent.limitPages = 5;
        testHostComponent.showFirstPage = true;
        testHostComponent.dynamicVisibilityFirstPage = true;
        fixture.detectChanges();

        expect(getFirstPageButton(fixture)).toBeDefined();
      });
    });

    describe('when showFirstPage is false', () => {
      it('should show first page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 1;
        testHostComponent.limitPages = 5;
        testHostComponent.showFirstPage = false;
        testHostComponent.dynamicVisibilityFirstPage = false;
        fixture.detectChanges();

        expect(getFirstPageButton(fixture)).toBeNull();
      });
    });

    describe('when showLastPage is true', () => {
      it('should show last page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 19;
        testHostComponent.limitPages = 5;
        testHostComponent.showLastPage = true;
        testHostComponent.dynamicVisibilityLastPage = false;
        fixture.detectChanges();

        expect(getLastPageButton(fixture)).toBeDefined();
      });

      it('should show last page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 10;
        testHostComponent.limitPages = 5;
        testHostComponent.showLastPage = true;
        testHostComponent.dynamicVisibilityLastPage = true;
        fixture.detectChanges();

        expect(getLastPageButton(fixture)).toBeDefined();
      });
    });

    describe('when showLastPage is false', () => {
      it('should show last page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 20;
        testHostComponent.limitPages = 5;
        testHostComponent.showLastPage = false;
        testHostComponent.dynamicVisibilityLastPage = false;
        fixture.detectChanges();

        expect(getLastPageButton(fixture)).toBeNull();
      });
    });

    describe('when dynamicVisibilityPreviousPage is true', () => {
      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 2;
        testHostComponent.dynamicVisibilityPreviousPage = true;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });

      it('shouldn\'t show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 1;
        testHostComponent.dynamicVisibilityPreviousPage = true;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeNull();
      });
    });

    describe('when dynamicVisibilityPreviousPage is false', () => {
      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 1;
        testHostComponent.dynamicVisibilityPreviousPage = false;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });

      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 2;
        testHostComponent.dynamicVisibilityPreviousPage = false;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });
    });

    describe('when dynamicVisibilityNextPage is true', () => {
      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 19;
        testHostComponent.dynamicVisibilityNextPage = true;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });

      it('shouldn\'t show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 20;
        testHostComponent.dynamicVisibilityNextPage = true;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeNull();
      });
    });

    describe('when dynamicVisibilityNextPage is false', () => {
      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 20;
        testHostComponent.dynamicVisibilityNextPage = false;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });

      it('should show prev page button', () => {
        testHostComponent.totalPages = 20;
        testHostComponent.currentPage = 19;
        testHostComponent.dynamicVisibilityNextPage = false;
        fixture.detectChanges();

        expect(getPrevPageButton(fixture)).toBeDefined();
      });
    });

  });

  describe('methods tests', () => {

    it('should return < from prevPageText', () => {
      expect(component.prevPageText).toEqual('<');
    });

    it('should return > from prevPageText', () => {
      expect(component.nextPageText).toEqual('>');
    });

    it('should onChangeCurrentPage instance of EventEmitter', () => {
      expect(component.onChangeCurrentPage instanceof EventEmitter).toBeTruthy();
    });

    describe('when totalPages is 10 and currentPage is 1', () => {
      it('should return 1 from prevPage method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 1;
        fixture.detectChanges();

        expect(component.prevPage).toEqual(component.currentPage);
      });
    });

    describe('when totalPages is 10 and currentPage is 2', () => {
      it('should return 2 from prevPage method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 3;
        fixture.detectChanges();

        expect(component.prevPage).toEqual(component.currentPage - 1);
      });
    });

    describe('when totalPages is 10 and currentPage is 10', () => {
      it('should return 10 from nextPage method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 10;
        fixture.detectChanges();

        expect(component.nextPage).toEqual(component.currentPage);
      });
    });

    describe('when totalPages is 10 and currentPage is 2', () => {
      it('should return 10 from nextPage method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 9;
        fixture.detectChanges();

        expect(component.nextPage).toEqual(component.currentPage + 1);
      });
    });

    describe('when totalPages is 10 and currentPage is 2', () => {
      it('should return 10 from nextPage method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 9;
        fixture.detectChanges();

        expect(component.nextPage).toEqual(component.currentPage + 1);
      });
    });

    describe('when firstAndLastPageType is icon', () => {
      it('should return << from firstPageText method', () => {
        testHostComponent.firstAndLastPageType = 'icon';
        fixture.detectChanges();

        expect(component.firstPageText).toEqual('<<');
        expect(component.lastPageText).toEqual('>>');
      });
    });

    describe('when firstAndLastPageType is number', () => {
      it('should return first page from firstPageText method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.firstAndLastPageType = 'number';
        fixture.detectChanges();

        expect(component.firstPageText).toEqual('1');
        expect(component.lastPageText).toEqual('10');
      });
    });

    describe('when overrideLocalCurrentPage is false and changeCurrentPage has been call', () => {
      it('shouldn\'t change the currentPage', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 5;
        testHostComponent.overrideLocalCurrentPage = false;
        fixture.detectChanges();

        component.changeCurrentPage(new Event('click'), 4);

        expect(component.currentPage).toEqual(5);
      });
    });

    describe('when overrideLocalCurrentPage is false and changeCurrentPage has been call', () => {
      it('should change the currentPage', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 5;
        testHostComponent.overrideLocalCurrentPage = true;
        fixture.detectChanges();

        component.changeCurrentPage(new Event('click'), 4);

        expect(component.currentPage).toEqual(4);
      });
    });

    describe('when showPrevPage and dynamicVisibilityPreviousPage is true, and currentPage != firstPage', () => {
      it('should return true from isPrevPageVisible method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 5;
        testHostComponent.showPrevPage = true;
        testHostComponent.dynamicVisibilityPreviousPage = true;
        fixture.detectChanges();

        expect(component.isPrevPageVisible).toBeTruthy();
      });
    });

    describe('when showPrevPage and dynamicVisibilityNextPage is true, and currentPage != firstPage', () => {
      it('should return true from isNextPageVisible method', () => {
        testHostComponent.totalPages = 10;
        testHostComponent.currentPage = 5;
        testHostComponent.showNextPage = true;
        testHostComponent.dynamicVisibilityNextPage = true;
        fixture.detectChanges();

        expect(component.isNextPageVisible).toBeTruthy();
      });
    });

  });

});
