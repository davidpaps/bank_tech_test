describe('Bank', function() {

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });
  
    it('Starting balance has £0', function(){
      expect(bank.currentBalance()).toEqual(0);
    });

    it('Can deposit £1000', function(){
      bank.deposit(1000)
      expect(bank.currentBalance()).toEqual(1000);
    })

    it('Can withdraw £500', function(){
      bank.deposit(1000)
      bank.withdraw(500)
      expect(bank.currentBalance()).toEqual(500);
    })

});