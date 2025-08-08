import { sayHello } from "../src/1-say-hello";

describe('sayHello', function ():void {
  it('Should should return Hello Jian', function ():void {
    expect(sayHello('Jian')).toBe('Hello Jian');
  });
});