class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        /**
         * loop over char and get the same length
         * check whither it anagram by Map
         * alfabet numbers count is 26
         * charCodeAt is the stable value and it is as same as it across all chars 
         */
        const A = 'a'.charCodeAt(0)
        const res= {}

        for (const char of strs){
            const count = new Array(26).fill(0)
            for(const s of char){
                count[s.charCodeAt(0) - A] += 1 // generates the key of the char
            }
            const key = count.join(',')
            if(!res[key]){
                res[key] = []
            }
            res[key].push(char)
        }
          return Object.values(res)
        // for(const s of strs){
        //     const sortedS = s.split('').sort().join('')
        //     if(!res[sortedS]){
        //         res[sortedS] = []
        //     }

        //     console.log(res)
        //     res[sortedS].push(s)
        // }

        // return Object.values(res)
    }
}
