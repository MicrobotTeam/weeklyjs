import { count, sayHi, sum } from '../src/main';

it('count is 0', () => {
    expect(count).toBe(0);
})

it('say hello', () => {
    expect(sayHi()).toBe('hello');
})

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// it('count is 0', () => {
//     expect(count.toBe(0));
// })