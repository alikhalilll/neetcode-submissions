class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        for (let index = 0; index < nums.length; index++) {
            const clonedArray = [...nums]
            const postfix = clonedArray.splice(index + 1).reduce((t, a) => t * a, 1)
            const prefix = clonedArray.slice(0, index).reduce((t, a) => t * a, 1)
            result.push(postfix * prefix)
        }
        return result
    }
}
