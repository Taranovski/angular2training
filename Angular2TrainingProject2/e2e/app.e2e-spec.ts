import { Angular2TrainingProject2Page } from './app.po';

describe('angular2-training-project2 App', () => {
  let page: Angular2TrainingProject2Page;

  beforeEach(() => {
    page = new Angular2TrainingProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
