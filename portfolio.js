class stocks{
    constructor(ticker, amount) {
        this.ticker = ticker;
        this.amount = amount;
    }
}

class portfolio { 
    constructor() {
        this.stocks = [];
    }
    getStocks() {
        return this.stocks.length;
    }
    buyStock(ticker, amount) {
        // Check if stock already exists
        let stockExists = false;
        this.stocks.find((stock) => {
            if (stock.ticker === ticker) {
                stockExists = true;
                stock.amount += amount;
            }
        });
        if (!stockExists) {
            this.stocks.push(new stocks(ticker, amount));
        }
    }
    sellStock(ticker, amount) {
        this.stocks.find((stock) => {
            if (stock.ticker === ticker) {
                if (stock.amount < amount) {
                    throw new Error('ShareSaleException');
                }
                stock.amount -= amount;  
            }
        });
        this.stocks = this.stocks.filter((stock) => {
            return stock.amount > 0;
        });
    }
    getStockAmount(ticker) {
        let amount = 0;
        this.stocks.find((stock) => {
            if (stock.ticker === ticker) {
                amount = stock.amount;
            }
        });
        return amount;
    }
}

export default {stocks, portfolio};