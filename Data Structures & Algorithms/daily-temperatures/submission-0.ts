class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps: number[]): number[] {
        const result: Array<number> = Array(temps.length).fill(0)
        const stack: Array<number> = []
        for(let i = 0; i < temps.length; i++){
            while(stack.length && temps[stack.at(-1)] < temps[i]){
                const removed = stack.pop()
                result[removed] =  i - removed
            }
            stack.push(i)
        }

        return result
    }
}
