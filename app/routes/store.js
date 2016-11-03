import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // the datastore is a local copy of data from the database.
    return this.store.findAll('store');
  },
  
});
