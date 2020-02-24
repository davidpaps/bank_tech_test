describe('Bank', function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });
  
    it('Starting balance has £0', function() {
      expect(bank.currentBalance()).toEqual(0);
    });


});