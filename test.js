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
    p.buyStock('GME', 5);
    expect(p.getStocks()).toEqual(2);
    });
test('sell 1 stock', () => {
    p.sellStock('GME', 9);
    expect(p.getStocks()).toEqual(2);
    });
test('get stock amount', () => {
    expect(p.getStockAmount('GME')).toEqual(1);
    expect(p.getStockAmount('RBLX')).toEqual(10);
    });
test('sell a stock completely', () => {
    p.sellStock('GME', 1);
    expect(p.getStocks()).toEqual(1);
    expect(p.getStockAmount('GME')).toEqual(0);
    });
test('try to sell unowned shares', () => {
    expect(() => {
        p.sellStock('RBLX', 11);
    }).toThrow('ShareSaleException');
    });
