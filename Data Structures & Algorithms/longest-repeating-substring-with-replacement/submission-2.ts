class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counts = Array(26).fill(0)
        let l = 0
        let maxFreq = 0
        for(let r = 0; r < s.length; r++){
            const c = s.charCodeAt(r) - 65
            maxFreq = Math.max(maxFreq, ++counts[c])
            if(r - l + 1 - maxFreq > k){
                counts[s.charCodeAt(l) - 65]--
                l++
            }
        }
        return s.length - l
    }
}
