'use strict';

function Statement(){
  this.transactions = [];
  this.header = 'date || credit || debit || balance';
  this.inCredit = true;
}

Statement.prototype.printStatement = function(){
  return (this.header + '\n' + this.transactions.reverse().join('\n'))
}

Statement.prototype._updateStatement = function(money, balance){
    if (this.inCredit) {
      this.transactions.push(`${this._processingDate()} || ${money.toFixed(2)} || || ${balance.toFixed(2)}`);
  } else {
  this.transactions.push(`${this._processingDate()} || || ${money.toFixed(2)} || ${balance.toFixed(2)}`);
  }
}

Statement.prototype._processingDate = function(){
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  return date = dd + '/' + mm + '/' + yyyy
}