class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hash = new Map<number,number>()
        for(const num of nums){
            hash.set(num,(hash.get(num) ?? 0) + 1)
        }
       return Array.from(hash.entries()).sort((a,b) => b[1] - a[1]).splice(0,k).map(x=>x[0])
        // /**
        //  * i want to sort the map values 
        //  */
        // const targetValues = Array.from(hash.values()).sort((a, b) => b - a ).splice(0,k)
        // let array = []
        // for(const [key,value] of hash){
        //     if (array.length === k) break
        //     if (!targetValues.includes(value))continue
        //     array.push(key)
        // }
        // return array
    }
}
