class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0]
        let bestPrice = 0
        for(const price of prices){
            bestPrice = Math.max(bestPrice,price -  minPrice)
            minPrice = Math.min(minPrice,price)
        }
        return bestPrice
    }
}
