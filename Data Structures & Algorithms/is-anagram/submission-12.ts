class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        const map = new Map()
        for(const char of s){
            map.set(char,map.has(char)? map.get(char)+ 1 : 1)
        }
        for(const char of t){
            map.set(char,map.get(char) - 1)
        }
     return   [...map.values()].every((x) => x == 0)
    }
}
