import { Component, EventEmitter, Input, Output } from '@angular/core';
import {IOnChangeCurrentPage} from '../models/on-change-current-page.interface';

@Component({
  selector: 'ap-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() public totalPages = 0;

  @Input() public currentPage = 1;

  @Input() public limitPages = 0;

  @Input() public firstAndLastPageType: 'icon' | 'number' = 'number';

  @Input() public showFirstPage = false;

  @Input() public showLastPage = false;

  @Input() public showNextPage = false;

  @Input() public showPrevPage = false;

  @Input() public dynamicVisibilityFirstPage = true;

  @Input() public dynamicVisibilityLastPage = true;

  @Input() public dynamicVisibilityPreviousPage = true;

  @Input() public dynamicVisibilityNextPage = true;

  @Input() public overrideLocalCurrentPage = true;

  @Output() public onChangeCurrentPage: EventEmitter<IOnChangeCurrentPage> = new EventEmitter();

  public get lastPage(): number {
    return this.totalPages;
  }

  public get firstPage(): number {
    return 1;
  }

  public get prevPage(): number {
    return this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
  }

  public get nextPage(): number {
    return this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
  }

  public get isFirstPageVisible(): boolean {
    const isVisible = this.showFirstPage;
    const isDynamic = this.dynamicVisibilityFirstPage;
    const isLimited = this.isLimitedPage;

    return isVisible && isDynamic && this.pages[0] !== this.firstPage && isLimited
        || isVisible && isDynamic === false;
  }

  public get isLastPageVisible(): boolean {
    const isVisible = this.showLastPage;
    const isDynamic = this.dynamicVisibilityLastPage;
    const isLimited = this.isLimitedPage;

    return isVisible && isDynamic && this.pages.slice(-1)[0] !== this.lastPage && isLimited
        || isVisible && isDynamic === false;
  }

  public get isPrevPageVisible(): boolean {
    return this.showPrevPage && this.dynamicVisibilityPreviousPage && this.currentPage !== this.firstPage
        || this.showPrevPage && this.dynamicVisibilityPreviousPage === false;
  }

  public get isNextPageVisible(): boolean {
    return this.showNextPage && this.dynamicVisibilityNextPage && this.currentPage !== this.lastPage
        || this.showPrevPage && this.dynamicVisibilityNextPage === false;
  }

  public get isLimitedPage(): boolean {
    return this.limitPages > 0;
  }

  public get firstPageText(): string {
    return this.firstAndLastPageType === 'icon' ? '<<' : '1';
  }

  public get lastPageText(): string {
    return this.firstAndLastPageType === 'icon' ? '>>' : String(this.totalPages);
  }

  public get prevPageText(): string {
    return '<';
  }

  public get nextPageText(): string {
    return '>';
  }

  public get pages(): Array<number> {
    return this.generatePages();
  }

  constructor() {
  }

  public changeCurrentPage(event: Event, page: number): void {
    event.preventDefault();

    const data: IOnChangeCurrentPage = {
      previousPage: this.currentPage,
      currentPage: page,
    };

    if (this.overrideLocalCurrentPage) {
      this.currentPage = page;
    }

    if (data.previousPage !== data.currentPage) {
      this.onChangeCurrentPage.emit(data);
    }
  }

  private generatePages(): Array<number> {
    const isEven: boolean = this.limitPages === 0 || !(this.limitPages % 2);
    let start;
    let end;

    if (this.totalPages <= this.limitPages || !this.isLimitedPage) {
      start = this.firstPage;
      end = this.totalPages;
    } else if (this.limitPages > 0) {
      if (this.currentPage <= Math.ceil(this.limitPages / 2)) {
        start = this.firstPage;
        end = this.limitPages;
      } else if (this.currentPage >= this.totalPages - Math.floor(this.limitPages / 2)) {
        start = this.totalPages - this.limitPages;
        end = this.totalPages;
      } else {
        start = this.currentPage - Math.ceil(this.limitPages / 2) + (isEven ? 0 : 1);
        end = this.currentPage + Math.floor(this.limitPages / 2) - (isEven ? 1 : 0);
      }
    }

    return Array.from({ length: 1 + end - start }).map((v, k) => k + start);
  }

}
