import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    if (item.data.quantity >= 1) {
      this.get('items').pushObject(item);
    }
    item.set('quantity', item.get('quantity') - 1);
  },
  addTotal(item) {
    // .data is a jquery method that retrieves the value of the object's (item) property (cost) in the datastore.
    // variable total uses .get function to retrieve the value of the total property of this service object.
    var total = this.get('total');
    // total assigns the value of the item's cost to the total, iterating and adding each item's total in the cart.
    total += item.data.cost;
    // this.set sets a property, and takes two arguments. The first argument is 'total', which represents the property named total in this object, and total which is the variable that has been assigned the value of the item's costs above.
    this.set('total', total);
  },
  destroyCartItem(item) {
  if(item.get('quantity') >= 0){
    var total = this.get('total');
    this.get('items').removeObject(item);
    total -= item.data.cost;
    this.set('total', total);
    }
  },
});
