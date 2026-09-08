class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counts = new Map<string,number>()
        let res = 0
        let l = 0
        let maxFreq = 0
        for(let r = 0; r < s.length; r++){
            counts.set(s[r], ((counts.get(s[r]) ?? 0 )+ 1) )
            maxFreq = Math.max(maxFreq, counts.get(s[r]))
            if(r - l + 1 - maxFreq > k){
                 counts.set(s[l], ((counts.get(s[l]) ?? 0 ) - 1) )
                 l += 1
            }

            res = Math.max(res, r - l + 1)

        }
        return res
    }
}
