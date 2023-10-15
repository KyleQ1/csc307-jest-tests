import port from './portfolio.js'; // MUT = Module Under Test

test('stock ticker tests', () => {

        const price = stock.getPrice('AAPL');
        expect(price).toBe(100);
    });
    });