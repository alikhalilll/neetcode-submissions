class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        for (let index = 0; index < nums.length; index++) {
            const clonedArray = [...nums]
            const afterActive = clonedArray.splice(index + 1)
            const beforeActive = clonedArray.slice(0, index)

            const arrayToSum = [...afterActive, ...beforeActive]
            let res = null
            arrayToSum.forEach((num, index) => {
                if (res === null) {
                    res = num
                } else {
                    res = res * num
                }

            })
            result.push(res)
        }
        return result
    }
}
