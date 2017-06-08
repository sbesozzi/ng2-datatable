import { Ng2DatatablePage } from './app.po';

describe('ng2-datatable App', () => {
  let page: Ng2DatatablePage;

  beforeEach(() => {
    page = new Ng2DatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
