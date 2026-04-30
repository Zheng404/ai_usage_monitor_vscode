import { describe, it, expect } from 'vitest';
import { MIMO_DEFAULT_ENDPOINT } from './provider';

describe('MIMO_DEFAULT_ENDPOINT', () => {
	it('is the correct production URL', () => {
		expect(MIMO_DEFAULT_ENDPOINT).toBe('https://platform.xiaomimimo.com');
	});
});
