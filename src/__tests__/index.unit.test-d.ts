import { describe, it } from 'vitest';

describe('Index', () => {
    it('should do a simple test', () => {
        expectTypeOf<"sample">().toBeString();
    })
})