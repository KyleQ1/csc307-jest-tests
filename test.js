import port from './portfolio.js'; // MUT = Module Under Test
let p;
beforeAll(() => {
    p = new port.portfolio();
  });
  
test('stock ticker tests', () => {
    expect(p.stocks).toEqual([]);
    });

test('contain 0 stocks', () => {
    expect(p.getStocks()).toEqual(0);
    });

test('contain 2 stock', () => { 
    p.buyStock('GME', 5);
    p.buyStock('RBLX', 10);
    expect(p.getStocks()).toEqual(2);
    });
test('buy 1 stock', () => { 
    p.buyStock('ABC', 5);
    expect(p.getStocks()).toEqual(3);
    });
test('sell 1 stock', () => {
    p.sellStock('ABC', 4);
    expect(p.getStocks()).toEqual(3);
    });
test('get stock amount', () => {
    expect(p.getStockAmount('GME')).toEqual(5);
    expect(p.getStockAmount('ABC')).toEqual(1);
    });
test('sell a stock completely', () => {
    p.sellStock('ABC', 1);
    expect(p.getStocks()).toEqual(2);
    expect(p.getStockAmount('ABC')).toEqual(0);
    });
test('try to sell unowned shares', () => {
    expect(() => {
        p.sellStock('GME', 6);
    }).toThrow('ShareSaleException');
    });
