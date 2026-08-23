class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    private boxKey(r:number, c:number): string {
        return `(${Math.floor(r / 3)}, ${Math.floor(c / 3)})`
    }
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map()
        const cols = new Map()
        const square = new Map()
        for(let ir = 0; ir < 9; ir++){
            for(let ic = 0; ic < 9;ic++){
                const activeNum = board[ir][ic]

                if (activeNum === '.') continue

                const bk = this.boxKey(ir,ic)

                if(!rows.has(ir)) rows.set(ir,new Set())
                if(!cols.has(ic)) cols.set(ic,new Set())
                if(!square.has(bk)) square.set(bk,new Set())

                const row = rows.get(ir)!
                const col = cols.get(ic)!
                const box = square.get(bk)!

                if(row.has(activeNum) || col.has(activeNum) || box.has(activeNum)) {
                    return false
                }
                
                row.add(activeNum)
                col.add(activeNum)
                box.add(activeNum)
            }
        }
 console.log({rows,cols,square})
        return true
    }
}
