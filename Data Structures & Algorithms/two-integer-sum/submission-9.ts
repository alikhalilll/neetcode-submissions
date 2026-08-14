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
        const _nums = nums.map((x,i)=>this.genKey(x,i))
        let indices  = new Array(2)
        const map = new Map()
        for(const index in _nums){
            const intIndex= +index
            const nextTarget = target - nums[intIndex]
            const nextIndex = intIndex + 1 < nums.length ? intIndex + 1 : intIndex
            map.set(_nums[index], this.genKey(nextTarget,nextIndex))
        }
        console.log(map)

        for(const [key,value] of map){
            if(map.has(value)) {
                return [this.getValue(key,true),this.getValue(value,true)]
            }
            const currentIndex = this.getValue(key,true)
            const currentValue = this.getValue(key)
            const goal = target - currentValue
            const newSlicedArray = nums.slice(currentIndex + 1)
            const goalIndex = newSlicedArray.indexOf(goal)
            if(goalIndex >= 0) {
            console.log({
                currentIndex,
                currentValue,
                goal,
                goalIndex,
                newSlicedArray
                })

                // console.log({r:this.genKey(goal,goalIndex + currentIndex)})

                return [currentIndex,goalIndex + (currentIndex + 1)]
            } 
            

        }

        for(const activeIndex in nums){
            if(indices[0] && indices[1]) return indices
            const next = target  - nums[activeIndex]
            if(!indices[0]) indices[0] = +activeIndex
            const nextIndex = nums.slice(+activeIndex).indexOf(next)
            if(nextIndex >= 0){
                indices[1] = nextIndex 
                 return indices
            }
        
            
            console.log(next,activeIndex,indices,nextIndex)
        }
        return [1,2]
    }
}
