class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const nSet = new Set(nums)
        let longest = 0

        for(const n of nSet){
            if(nSet.has(n - 1)) continue
            let length = 1
            while(nSet.has(length + n)) length++
            longest = Math.max(longest,length)
        }
        return longest
    }
}
