class Solution {
    private static readonly RECORD_SEP = ","
    private static readonly CHAR_SEP = "_"

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
    let result = ""
    for (const s of strs) {
        const codes: string[] = []
        for (let i = 0; i < s.length; i++) {
            codes.push(s.charCodeAt(i).toString(36))
        }
        result += codes.join(Solution.CHAR_SEP) + Solution.RECORD_SEP
    }
    return result
}

    /**
     * @param {string} str
     * @returns {string[]}
     */

    private decodeOne(chunk: string): string {
        if(chunk === "") return ""
        let chars: string[] = []
        for(const code of chunk.split(Solution.CHAR_SEP)){
            chars.push(String.fromCharCode(parseInt(code,36)))
        }
        return chars.join("")
    }

    decode(str: string): string[] {
        if (str === "") return [];
         const chunks = str.split(Solution.RECORD_SEP);
         chunks.pop();   
          return chunks.map(chunk => this.decodeOne(chunk));
    }
}
