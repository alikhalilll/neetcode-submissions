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
            if (t in operators) {
                const right = stack.pop()!;
                const left = stack.pop()!;
                stack.push(operators[t](left, right));
            } else {
                stack.push(Number(t));
            }
        }

        return stack[0];
    }
}