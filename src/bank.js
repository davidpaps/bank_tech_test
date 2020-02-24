function Bank() {
  this.balance = 0;

};

Bank.prototype.currentBalance = function(){
  return this.balance;
}