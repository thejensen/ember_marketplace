import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  listItem: Ember.computed('item.title', 'item.cost', function() {
    return this.get('item.title') + '  $' + this.get('item.cost');
  }),

  actions: {
    destroyCartItem(item) {
      if (confirm("You really don't want this fruit?")) {
        this.get('shoppingCart').destroyCartItem(item);
      }
    }
  }
});
