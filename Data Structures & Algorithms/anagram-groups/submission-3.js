 class Solution {
            /**
             * @param {string[]} strs
             * @return {string[][]}
             */
            groupAnagrams(strs) {
 const ans = {};

                for (const s of strs) {
                    const count = Array(26).fill(0); // to create an array of 26 elements with 0 as defualt value to use it as a counter and unique key for each word

                    for (const c of s) {
                        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                        console.log(index, c)
                        count[index] = count[index] + 1;

                    }

                    const key = count.join('#');
                    if (!ans[key]) {
                        ans[key] = [];
                    }
                    console.log(key, count)
                    ans[key].push(s);
                }
                console.log(ans)
                return Object.values(ans);
            }

        
        }