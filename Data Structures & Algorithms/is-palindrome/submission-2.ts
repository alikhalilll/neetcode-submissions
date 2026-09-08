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
        while(left < right){
            while(left < right && !this.isAlphaChar(str[left])) left++
            while(left < right && !this.isAlphaChar(str[right])) right--
            if(str[left].toLowerCase() !== str[right].toLowerCase()) return false
            left++;
            right--;
        }
        return true
    }
}
