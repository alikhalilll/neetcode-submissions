class Solution {
    evalRPN(tokens: string[]): number {
        const operators: Record<string, (a: number, b: number) => number> = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),
        };

        const stack: number[] = [];

        for (const t of tokens) {
            if(!(t in operators)) {
                stack.push(Number(t));
                continue
            }
            const right = stack.pop()!;
            const left = stack.pop()!;
            stack.push(operators[t](left, right));
        }

        return stack[0];
    }
}