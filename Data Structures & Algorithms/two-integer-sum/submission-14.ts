class Solution {
    key = ','
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    genKey(num:number,index:number){
        return num + this.key + index
    }
    getValue(str:string,index:boolean = false){
        return +str.split(this.key)[index ? 1 : 0]
    }
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number,number>()
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i]
            if(seen.has(complement)){
                return [seen.get(complement),i]
            }
            seen.set(nums[i],i)
        }
        return [-1,-1]
    }
}
