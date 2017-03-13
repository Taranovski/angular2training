import { Angular2TrainingProjectPage } from './app.po';

describe('angular2-training-project App', () => {
  let page: Angular2TrainingProjectPage;

  beforeEach(() => {
    page = new Angular2TrainingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
