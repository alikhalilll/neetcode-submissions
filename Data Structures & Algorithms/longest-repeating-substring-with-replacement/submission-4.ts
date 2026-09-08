class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counts = Array<number>(26).fill(0)
        const n = s.length
        let l = 0
        let m = 0
        for(let r = 0; r < n; r++){
            const c = s.charCodeAt(r) - 65
            m = Math.max(m, ++counts[c])
            if(r - l + 1 - m > k){
                counts[s.charCodeAt(l) - 65]--
                l++
            }
        }
        return n - l
    }
}
