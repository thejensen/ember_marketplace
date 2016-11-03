import Ember from 'ember';

export function soldOut(params/*, hash*/) {
  var soldOut = params[0];

  if(soldOut.get('quantity') < 1) {
    return Ember.String.htmlSafe('Sold out!');
  }
}

export default Ember.Helper.helper(soldOut);
