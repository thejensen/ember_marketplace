import Ember from 'ember';

export function productCost(params/*, hash*/) {
  var productPrice = params[0].get('cost');

  if (productPrice >= 40) {
    return '$$$$';
  } else if (productPrice >= 30) {
    return '$$$';
  } else if (productPrice >= 20) {
    return '$$';
  } else if (productPrice >= 10) {
    return '$';
  }
}

export default Ember.Helper.helper(productCost);
