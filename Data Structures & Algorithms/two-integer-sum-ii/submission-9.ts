class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
         /**
         * target first number is less than target 
         */
        const n = nums.length
        let left = 0
        let right = n - 1
       
        while(left < right){
            const sum  = nums[left] + nums[right]
            if(sum === target) return [left + 1, right + 1]
            if(sum > target) right--
            else left++
        }
        return [-1,-1]

    }
}
