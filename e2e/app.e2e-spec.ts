import { Ng2WeatherPage } from './app.po';

describe('ng2-weather App', function() {
  let page: Ng2WeatherPage;

  beforeEach(() => {
    page = new Ng2WeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
