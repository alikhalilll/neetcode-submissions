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
            result  = Math.max(Math.min(heights[left], heights[right]) * (right - left), result)
            if(heights[left] < heights[right]) left++
            else right--
        }
        return result
    }
}
