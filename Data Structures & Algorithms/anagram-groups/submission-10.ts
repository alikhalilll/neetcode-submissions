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
        if(strs.length < 2) return [strs]
        let map  = new Map<string,string[]>()
        for(const char of strs){
            const key = char.split("").sort().join("")
            if(map.has(key)){
                map.set(key,[...map.get(key),char])
                continue
            }
            map.set(key,[char])
        }

        return Array.from(map.values())
        // const A = 'a'.charCodeAt(0)
        // const res = new Map()

        // for (const char of strs){
        //     const count = new Array(26).fill(0)
        //     for(const s of char){
        //         count[s.charCodeAt(0) - A] += 1 // generates the key of the char
        //     }
        //     const key = count.join(',')
        //     if(!res.has(key)){
        //         res.set(key, [])
        //     }
        //     res.set(key,[...res.get(key),char])
        // }
        //   return Array.from(res.values())
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
