class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    key(s:string){
        return s.charCodeAt(0) - 65
    }
    characterReplacement(s: string, k: number): number {
        const counts = Array<number>(26).fill(0)
        const n = s.length
        let l = 0
        let m = 0
        for(let r = 0; r < n; r++){
            m = Math.max(m, ++counts[this.key(s[r])])
            if((r - l + 1) - m > k){
                counts[this.key(s[l])]--
                l++
            }
        }
        return n - l
    }
}
