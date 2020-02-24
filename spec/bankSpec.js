describe('Bank', function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });
  
    it('Starting balance has £0', function() {
      expect(bank.currentBalance()).toEqual(0);
    });

    it('Can deposit £1000 and return the amount', function() {
     
      bank.deposit(1000)
      expect(bank.currentBalance()).toEqual(1000);
    })

});