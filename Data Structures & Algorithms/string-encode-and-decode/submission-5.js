class Solution {
    hashKey = null
    constructor() {
        this.hashKey = '#_' + Math.random().toString(20).substring(2, 3) + '_#'
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        strs.forEach((x, i) => {
            result = result + `${x.length}${this.hashKey}${x}`
        })

        return result
    }

    /**
     * @param {string} hashedString
     * @returns {string[]}
     */
    decode(hashedString) {
        let output = []
        const hashKeyLength = this.hashKey.length
        const lengthes = []
        const startingIndex = () => output.join('').length + lengthes.join('').length + (hashKeyLength * output.length)


        let current_index = 0

        while (current_index < hashedString.length) {
            const nextNOfWordsIsSecret = hashedString.substring(current_index, current_index + hashKeyLength) === this.hashKey

            if (nextNOfWordsIsSecret) {
                const lengthOfString = hashedString.substring(startingIndex(), current_index)
                lengthes.push(lengthOfString)

                const splitIndex = startingIndex() + hashKeyLength
                const string = hashedString.substring(splitIndex, splitIndex + +lengthOfString)
                output.push(string)

                current_index = splitIndex + +lengthOfString
            } else {
                current_index++
            }

        }

        return output
    }
}
