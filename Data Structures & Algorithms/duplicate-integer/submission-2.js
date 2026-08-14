class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log(nums)
        const uniqueNumber = new Set(nums)
        return Array.from(uniqueNumber).length !== nums.length
    }
}
