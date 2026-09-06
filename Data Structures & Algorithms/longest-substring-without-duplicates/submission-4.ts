class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Map<string,number>()
        let max = 0
        let l = 0
        for(let r = 0;r < s.length; r++){
            const c = s[r]
            const prev = seen.get(c) // right index
            if(prev !== undefined && prev >= l){
                l = prev + 1
            }
            seen.set(c,r)
            max = Math.max(max, (r - l + 1))
        }

        return max
    }
}
