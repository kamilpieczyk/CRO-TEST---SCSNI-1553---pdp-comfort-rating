import render from './render'
import isSofa from './helpers/isSofa'
import App from './app'
import AppMobile from './app-mobile';

if (isSofa) {
  render({
    method: 'end',
    selector: '.product-primary-carousel',
    id: 'dy-pdp-comfort-rating',
    App
  });

  render({
    method: 'end',
    selector: '.product-options-wrapper',
    id: 'dy-pdp-comfort-rating-mobile',
    App: AppMobile
  });
}