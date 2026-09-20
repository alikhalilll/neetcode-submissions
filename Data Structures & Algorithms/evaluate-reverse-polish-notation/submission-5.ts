class Solution {
    evalRPN(tokens: string[]): number {
        // Same array, viewed as number slots for the part we've already consumed
        const slots = tokens as unknown as number[];
        let top = 0; // how many values are currently on the "stack"

        for (let i = 0; i < tokens.length; i++) {
            const t = tokens[i]; // read before this slot can be overwritten

            if (t === '+' || t === '-' || t === '*' || t === '/') {
                const right = slots[--top];
                const left = slots[top - 1];

                let result: number;
                switch (t) {
                    case '+': result = left + right; break;
                    case '-': result = left - right; break;
                    case '*': result = left * right; break;
                    default:  result = Math.trunc(left / right);
                }
                slots[top - 1] = result;
            } else {
                slots[top++] = Number(t);
            }
        }

        return slots[0];
    }
}