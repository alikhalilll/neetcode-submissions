class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0]
        let bestPrice = 0
        for(const price of prices){
            bestPrice = Math.max(bestPrice, price - minPrice)
            minPrice = Math.min(minPrice, price)
        }

        // let l = 0
        // let r = l + 1
        // let best = 0
        // while(r < prices.length){
        //     if(prices[l] < prices[r]){
        //         best = Math.max(best, prices[r] - prices[l])
        //         r++
        //     }
        //     else {l = r;r = l + 1}
        
        // }
        return bestPrice
    }
}
