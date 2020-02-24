describe('Bank', function() {

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });
  
    it('Starting balance has £0', function(){
      expect(bank.currentBalance()).toEqual(0);
    });

    it('Can deposit £1000', function(){
      bank.deposit(1000);
      expect(bank.currentBalance()).toEqual(1000);
    })

    it('Can withdraw £500', function(){
      bank.withdraw(500);
      expect(bank.currentBalance()).toEqual(-500);
    })

    it('Can calculate and keep track of deposit and withdrawals', function(){
      bank.deposit(1000);
      bank.withdraw(500);
      expect(bank.currentBalance()).toEqual(500);
    })

    it('Can print the header of the statement', function(){
      expect(bank.printStatement()).toBe('date || credit || debit || balance' + '\n');
    })

    it('Can print put a deposit transaction', function(){
      bank.deposit(1000)
      expect(bank.printStatement()).toBe('date || credit || debit || balance' + '\n' + '10/01/2014 || 1000.00|| || 1000.00')
    })

});