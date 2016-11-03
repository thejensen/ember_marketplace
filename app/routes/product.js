import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('store', params.store_id);
  },
  actions: {
    delete(product){
      product.destroyRecord();
      this.transitionTo('cart');
    }
  }
});
