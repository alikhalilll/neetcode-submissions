class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return clean === [...clean].reverse().join('')
    }
}
