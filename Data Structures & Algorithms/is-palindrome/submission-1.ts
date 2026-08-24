class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    private isAlphaChar(c:string):boolean{
        if (!c) return false
        const charCode = c.charCodeAt(0)
        const isFrom_a_z = 'a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0)
        const isFrom_A_Z = 'A'.charCodeAt(0) <= charCode && charCode <= 'Z'.charCodeAt(0)
        const isFrom_0_9 = '0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0)
        
        return  isFrom_a_z || isFrom_A_Z || isFrom_0_9
    }
    isPalindrome(str: string): boolean {
        const s = str.length
        let left = 0
        let right = s - 1
        // while(left < right){
        //     while(left < right && !this.isAlphaChar(str[left])) left--
        //     while(left < right && !this.isAlphaChar(str[right])) right--
        //     console.log(str[left],str[right])

        // }
        for(let i = 0; i < s; i++){
            if(!this.isAlphaChar(str.charAt(i))) continue
            while(i < right && !this.isAlphaChar(str.charAt(right))) right--
            
            if(right < i) break
            
            if(str.charAt(i).toLowerCase() !== str.charAt(right).toLowerCase()) return false

            right--

            // console.log({
            //     c_one:str.charAt(i),
            //      c_two:str.charAt(right),
            //     valid_two:str.charAt(i).toLowerCase() === str.charAt(rightPointer).toLowerCase()
            //     })

        }
        return true 
    }
}
