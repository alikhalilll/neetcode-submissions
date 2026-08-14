class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
       const countS = {}
       const countT = {}
       for(let i = 0; i< s.length;i++){
        countS[s[i]] = 1 + (countS[s[i]] || 0)
        countT[t[i]] = 1 + (countT[t[i]] || 0)
       }
       const isValid = Object.keys(countS).map((x)=>countS[x] === countT[x])
       return  !isValid.includes(false)
    }
}
