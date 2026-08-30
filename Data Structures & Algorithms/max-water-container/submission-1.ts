class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length
        let left = 0
        let right = n - 1
        let result = 0
        while(left < right){
            const space = right - left
            const minHeightToHandleWater = Math.min(heights[left], heights[right])
            result  = Math.max(minHeightToHandleWater * space, result)
            if(heights[left] < heights[right]) left++
            else right--
        }
        return result
    }
}
