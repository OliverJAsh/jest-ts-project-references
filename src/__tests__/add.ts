import { add } from '../add';

// This should error because `tsconfig-tests.json` specifies `compilerOptions` `noUnusedLocals` and
// `noUnusedParameters`.
const foo = 1;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
