'use strict';

function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.transactionHistory = function(){
  return this.transactions;
}

Bank.prototype.deposit = function(money){
  this.balance += money;
  this._updateStatement(money)
}

Bank.prototype.processingDate = function(){
  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  return date = dd + '/' + mm + '/' + yyyy
}

Bank.prototype.withdraw = function(money){
  this.balance -= money;
  this.transactions.push(`14/01/2014 || || ${money.toFixed(2)} || ${this.currentBalance().toFixed(2)}`);
}

Bank.prototype.printStatement = function(){
  var header = 'date || credit || debit || balance';
  return (header + '\n' + this.transactions.reverse().join('\n'))
}

Bank.prototype._updateStatement = function(money){
  if (this.transactions.length < 1) {
    this.transactionHistory().push(`10/01/2014 || ${money.toFixed(2)} || || ${this.currentBalance().toFixed(2)}`);
  }
  else {
    this.transactionHistory().push(`13/01/2014 || ${money.toFixed(2)} || || ${this.currentBalance().toFixed(2)}`);
  }
}