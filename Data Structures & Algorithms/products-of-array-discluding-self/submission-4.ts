class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * [2,3,4] -> [1,2,6], [12,4,1] - > [12,8,6]
     */
    
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length
        const result = Array(n).fill(1)

        let lastValue = 1 // 1 => 1 , ,
        for(let i = 0; i < n; i++){
            result[i] = lastValue
            lastValue *= nums[i] 
        }
        console.log(result)

        let suffix = 1
        for(let i = n -1; i >= 0; i--){
            result[i] = result[i] * suffix
            suffix *= nums[i]
        }
       return result
    }
}
