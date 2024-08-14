
export default  class PurchaseDTO {
    constructor(code, amount, purchaser,market,marketAddress) {
      this.code = code;
      this.amount = amount;
      this.purchaser = purchaser;
      this.purchaserMarket= market;
      this.purchaserMarketAddress=marketAddress;
    }
  }