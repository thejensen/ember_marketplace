export function initialize(application) {
 application.inject('route', 'shop', 'service:shopping-cart');
}

export default {

  name: 'shopping-cart',
  initialize: initialize
};
