const expect = require('chai').expect;
const Calculator = require('./Calculator').Calculator;

describe('Calculator Class', function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });

    describe('test calc', function () {

        it('should return 0 for new instance', function () {
            expect(calculator.expenses).to.be.eql([]);
        });

        it('should return [4,2] for new instance', function () {
            calculator.add(4);
            calculator.add(2);
            expect(calculator.expenses).to.be.eql([4,2]);
        });

        it('test toString() with different data', function () {
            calculator.add(4);
            calculator.add(2);
            calculator.add(-1);
            calculator.add('A');
            calculator.add({});
            calculator.add([]);
            calculator.add(1.5);
            calculator.add(-1.5);
            calculator.add(0);
            expect(calculator.toString()).to.be.eql("4 -> 2 -> -1 -> A -> [object Object] ->  -> 1.5 -> -1.5 -> 0");
        });

        it('test toString() with different data', function () {
            expect(calculator.toString()).to.be.eql('empty array');
        });

        it('should divide by 0', function () {
            calculator.add(4);
            calculator.add(0);
            expect(calculator.divideNums()).to.be.eql('Cannot divide by zero');
        });

        it('test divide diff data', function () {
            calculator.add(4);
            calculator.add(7);
            calculator.add('1');
            calculator.add("s");
            expect(calculator.divideNums()).to.be.closeTo(0.57, 0.01);
        });

        it('test divide new instance', function () {
            expect(()=>{calculator.divideNums()}).to.throw('There are no numbers in the array!');
        });

        it('Order numbers', function () {
            calculator.add(4);
            calculator.add(7);
            calculator.add(-1);
            expect(calculator.orderBy()).to.be.eql('-1, 4, 7');
        });

        it('Order mixed data', function () {
            calculator.add(4);
            calculator.add('A');
            calculator.add(-1);
            expect(calculator.orderBy()).to.be.eql('-1, 4, A');
        });

        it('Order empty data', function () {
            expect(calculator.orderBy()).to.be.eql('empty');
        });
    })
});
