class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false
         const pairs: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        const stack: string[] = []

        for(const c of s){
            if(Object.hasOwn(pairs, c)){
                if(stack.length && stack[stack.length - 1] === pairs[c]){
                    stack.pop()
                }
                else return false
                continue
            }
            // add only openings
            stack.push(c)
        }
        return !(!!stack.length)
    }
}
