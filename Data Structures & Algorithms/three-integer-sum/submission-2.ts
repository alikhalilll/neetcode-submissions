class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        /**
         * every array should not have the all the same elements
         * the sum of all of the element in all array are equal 0
         */
        const result: number[][] = []
        nums.sort((a,b)=> a - b)
        const n = nums.length 
        for(let i = 0; i < n; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue 

            let left = i + 1
            let right = n - 1
            while(left< right){
                const sum = nums[i] + nums[left] + nums[right]
                if(sum > 0) right--
                else if (sum < 0) left++
                else{
                    result.push([nums[i],nums[left],nums[right]])
                    left++
                    while(nums[left] === nums[left - 1] && left < right) left++
                    // while(left < right && nums[right] === nums[right + 1]) right--
                }
            }
        }
        return result
    }
}
