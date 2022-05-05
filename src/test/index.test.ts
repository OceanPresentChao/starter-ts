import { sum } from '../index';
describe("test", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(5, 52)).toMatchSnapshot(`test`)
    });
})