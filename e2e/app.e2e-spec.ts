import { AngularPaginationPage } from './app.po';

describe('angular-pagination App', () => {
  let page: AngularPaginationPage;

  beforeEach(() => {
    page = new AngularPaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
