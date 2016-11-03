import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      // in order to access the service actions, we need to use the .get function, then chain the service action to the get request. We access our service's actions in the product tile because components can access service, not routes, because you can only inject a service as a property of the component object.
      this.get('shoppingCart').add(product);
      this.get('shoppingCart').addTotal(product);
    },
  }
});
