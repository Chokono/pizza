import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('kitchen');
  this.route('index', { path: '/' });
  this.route('ingredients', function() {
    this.route('category', { path: '/:category_name' }, function() {
      this.route('product', { path: '/:product_name' });
    });
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
