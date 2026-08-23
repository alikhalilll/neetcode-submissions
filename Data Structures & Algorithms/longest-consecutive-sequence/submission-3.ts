class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums)
        if(numSet.size === 1) return 1
        let longest = 0
        for(const num of numSet){
            if(numSet.has(num - 1)) continue 
            let length = 1
            while(numSet.has(num + length)) length++
            longest = Math.max(longest,length)
        }
        return longest
    }
}
