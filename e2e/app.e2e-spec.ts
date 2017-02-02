import { FightCode1Page } from './app.po';

describe('fight-code1 App', function() {
  let page: FightCode1Page;

  beforeEach(() => {
    page = new FightCode1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
