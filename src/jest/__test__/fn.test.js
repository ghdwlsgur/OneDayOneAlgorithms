import { fn } from '../fn';

test('', () => {
    return fn.getAge().then(age => {
        expect(age).toBe(30);    
    });
});
