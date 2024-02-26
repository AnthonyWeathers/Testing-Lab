const {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('should get 2', () => expect(returnTwo()).toBe(2))

describe('greeting', () => {
    test('should return Hello, James', () => expect(greeting('James')).toBe('Hello, James.'))
  
    test('should return Hello, Jill', () => expect(greeting('Jill')).toBe('Hello, Jill.'))
})

describe('Math functions', () => {
    test('should return 3', () => expect(add(1, 2)).toBe(3))
  
    test('should return 14', () => expect(add(5, 9)).toBe(14))

    test('should return 15', () => expect(multiply(3, 5)).toBe(15))
  
    test('should return 98', () => expect(multiply(7, 14)).toBe(98))

    test('should return 17', () => expect(divide(51, 3)).toBe(17))
  
    test('should return 8', () => expect(divide(48, 6)).toBe(8))

    test('should return 9', () => expect(subtract(21, 12)).toBe(9))
  
    test('should return 11', () => expect(subtract(35, 24)).toBe(11))
})