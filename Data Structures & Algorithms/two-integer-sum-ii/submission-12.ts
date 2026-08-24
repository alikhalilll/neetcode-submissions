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
        // const seen = new Map<number,number>()
        // for(let i = 0; i < nums.length; i++){
        //     const complement = target - nums[i]
        //     console.log({complement})
        //     if(seen.has(complement)){
        //         return [seen.get(complement) + 1, i + 1]
        //     }
        //     seen.set(nums[i],i)
        // }
        // return [-1,-1] // O(n) solution
        let left = 0
        let right = nums.length - 1
        while (left < right){
            const sum = nums[left] + nums[right]
            if(sum === target) return [left + 1, right + 1]
            if(sum > target) right--
            else left++
        }
        return [-1,-1] // O(1) solution

    }
}
