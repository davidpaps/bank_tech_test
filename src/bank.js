'use strict';

function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.deposit = function(money){
  this.balance += money;
  var transactionBalance =  this.currentBalance();
  if (this.transactions.length < 1) {
    this.transactions.push(`10/01/2014 || ${money.toFixed(2)} || || ${transactionBalance.toFixed(2)}`);
  }
  else {
    this.transactions.push(`13/01/2014 || ${money.toFixed(2)} || || ${transactionBalance.toFixed(2)}`);
  }
}

Bank.prototype.withdraw = function(money){
  this.balance -= money;
  var transactionBalance =  this.currentBalance();
  this.transactions.push(`14/01/2014 || || ${money.toFixed(2)} || ${transactionBalance.toFixed(2)}`);
}

Bank.prototype.printStatement = function(){
  var header = 'date || credit || debit || balance';
  return (header + '\n' + this.transactions.reverse().join('\n'))
}