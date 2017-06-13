import { Ng4GlitterPage } from './app.po';

describe('ng4-glitter App', function() {
  let page: Ng4GlitterPage;

  beforeEach(() => {
    page = new Ng4GlitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
