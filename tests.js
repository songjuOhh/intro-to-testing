// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function (){
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when called', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called.', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when called.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called.', function () {
        expect(sayHello("World")).toBe("Hello, World!");
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function (){
    it('should be a defined function.', function() {
        expect(typeof isFive).toBe('function');
    });
    it('isFive should return true if input passes 5. If not, return false.,', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive(6)).toBe(true);
        expect(isFive(4)).toBe(false);
        expect(isFive("string")).toBe(false);
        // expect(sayHello(true)).toBe("Hello, World!");
        // expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe("isEven",function (){
    it('should return true if input is even. Else return false.', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven("banana")).toBe(false);
        expect(isEven(8)).toBe(true);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(true);
    });
});
