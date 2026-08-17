class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isCharAnagram(map:Map<any, any>,str:string):boolean{
        const _map = new Map(map)
        for(const char of str){
            if(!_map.has(char))return false
            _map.set(char,_map.get(char) - 1)
        }

        return [..._map.values()].every(x=>x===0)
    }
    isAnagram(str:string,strs:string[]){
        const map = new Map()
        let arr= []

        for(const char of str){
            map.set(char,map.has(char) ? map.get(char) + 1 : 1)
        }
        for(const char of strs){
            if(this.isCharAnagram(map,char)){
                arr.push(char)
            }
        }

        return arr.length ? arr : [str]
    }
    groupAnagrams(strs: string[]): string[][] {
        /**
         * loop over char and get the same length
         * check whither it anagram by Map
         *
         */
        const res= {}
        for(const s of strs){
            const sortedS = s.split('').sort().join('')
            if(!res[sortedS]){
                res[sortedS] = []
            }
            res[sortedS].push(s)
        }

        return Object.values(res)
        let strsToDelete = []
        let arr = []
        for(const index in strs){
            const activeChar = strs[index]
            if(strsToDelete.includes(activeChar)) continue
            const newArray = strs.filter(x=>!strsToDelete.includes(x))

            const arrayToAdd = this.isAnagram(strs[index],newArray)
            arr.push(arrayToAdd)
            strsToDelete.push(...arrayToAdd)
        }
 
        return arr

    }
}
