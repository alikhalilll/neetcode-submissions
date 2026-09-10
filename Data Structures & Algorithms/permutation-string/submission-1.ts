class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Length = s1.length
        
        for(let l = 0; l < s2.length; l++){
            const substring = s2.slice(l, l + s1Length)
            const s1Map = new Map<string,number>()
            s1.split('').forEach(x=>{
                s1Map.set(x,(s1Map.get(x) ?? 0) + 1)
            })
            for(const c of substring){
                const cV =s1Map.get(c)
                if(cV){
                    s1Map.set(c, cV - 1)
                } 
                else break;
            }
            console.log({
                substring,
                isValid: Math.max(...s1Map.values()) === 0
            })
            if(Math.max(...s1Map.values()) === 0) return true
            
        }


        return false
    }
}
