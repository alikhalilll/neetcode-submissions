class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

     
        for (let index = 0; index < nums.length; index++){
            
            const num = nums[index] // 5; i=0
            const complement = target - num // 5
            
            const exists = map.has(complement)
            if(exists){
            const writeIndex= map.get(complement)

                return [index,writeIndex]
            }
            map.set(num,index)
        }
        return [-1,-1]


    }
}
