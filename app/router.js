import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('store');
  this.route('cart');
  this.route('product', {path: '/product/:store_id'});
});

export default Router;
