'use strict';

function Bank(){
  this.balance = 0;
  this.transactions = [];
  this.isPositive = true;
};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.transactionHistory = function(){
  return this.transactions;
}

Bank.prototype.deposit = function(money){
  this.balance += money;
  this.isPositive = true;
  this._updateStatement(money)
}

Bank.prototype.withdraw = function(money){
  this.balance -= money;
  this.isPositive = false;
  this._updateStatement(money);
}

Bank.prototype.printStatement = function(){
  var header = 'date || credit || debit || balance';
  return (header + '\n' + this.transactionHistory().reverse().join('\n'))
}

Bank.prototype._updateStatement = function(money){
    if (this.isPositive === true) {
      this.transactionHistory().push(`${this._processingDate()} || ${money.toFixed(2)} || || ${this.currentBalance().toFixed(2)}`);
  } else {
  this.transactions.push(`${this._processingDate()} || || ${money.toFixed(2)} || ${this.currentBalance().toFixed(2)}`);
  }
}

Bank.prototype._processingDate = function(){
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  return date = dd + '/' + mm + '/' + yyyy
}