class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hash = new Map<number,number>()
        for(const num of nums){
            hash.set(num,hash.has(num)? hash.get(num) + 1 : 1)
        }
        /**
         * i want to sort the map values 
         */
        const targetValues = Array.from(hash.values()).sort((a, b) => b - a ).splice(0,k)
        let array = []
        for(const [key,value] of hash){
            if (array.length === k) continue
            if (!targetValues.includes(value))continue
            array.push(key)
        }
        return array
    }
}
