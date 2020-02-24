function Bank() {
  this.balance = 0;
  this.depo = [];

};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.deposit = function(money){

  this.balance += money;
}