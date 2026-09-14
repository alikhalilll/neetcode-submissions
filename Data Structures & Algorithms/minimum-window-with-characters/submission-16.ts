class Solution {
    minWindow(s: string, t: string): string {
        if (s.length < t.length) return ''

        // how many of each char we still need
        const need = new Map<string, number>()
        for (const c of t) need.set(c, (need.get(c) ?? 0) + 1)

        let matches = 0            // chars in window that satisfy a need
        let bestStart = 0
        let bestLen = Infinity
        let left = 0

        for (let r = 0; r < s.length; r++) {
            // expand: take s[r] into the window
            const cr = s[r]
            const nr = need.get(cr)
            if (nr !== undefined) {
                if (nr > 0) matches++
                need.set(cr, nr - 1)
            }

            // shrink while the window is still valid
            while (matches === t.length) {
                if (r - left + 1 < bestLen) {
                    bestLen = r - left + 1
                    bestStart = left
                }

                const cl = s[left]
                const nl = need.get(cl)
                if (nl !== undefined) {
                    need.set(cl, nl + 1)
                    if (nl + 1 > 0) matches--   // we just lost a needed char
                }
                left++
            }
        }

        return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen)
    }
}