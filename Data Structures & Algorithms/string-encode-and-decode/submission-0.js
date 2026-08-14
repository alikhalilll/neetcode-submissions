class Solution {
    hash
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        strs.forEach((x, i) => {
            result = result + `${x.length}#${x}`
        })

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        console.log(str)
        while (i < str.length) { // 10
            let j = i
            while (str[j] !== '#') {
                j++
            }
            let length = parseInt(str.substring(i, j), 10);
            console.log(length,i,j)

            i = j + 1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;


        }
        return result
    }

    createHash() {
        this.hash = '__##__##__##__'
    }
}
