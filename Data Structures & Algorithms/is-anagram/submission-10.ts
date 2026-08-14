class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        const countS = {}
        const countT = {}

        for(let i = 0; i< s.length; i++){
            countS[s[i]] = 1 + (countS[s[i]] || 0)
            countT[t[i]] = 1 + (countT[t[i]] || 0)
        }
       return Object.keys(countS).every(x => countS[x] === countT[x])
    }
}
