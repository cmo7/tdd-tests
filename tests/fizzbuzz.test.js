import { fizzbuzzRange, fizzbuzzNumber } from "../lib/fizzbuzz";
import { describe, test, expect } from "vitest";

describe('El generador de números FizzBuzz', () => {
    test('Dado un número múltiplo de 3 (y no de 5), retorna Fizz', () => {
        expect(fizzbuzzNumber(3)).toBe('Fizz');
        expect(fizzbuzzNumber(6)).toBe('Fizz');
        expect(fizzbuzzNumber(9)).toBe('Fizz');
        expect(fizzbuzzNumber(12)).toBe('Fizz');
        expect(fizzbuzzNumber(99)).toBe('Fizz');
    })

    test('Dado un número múltiplo de 5 (y no de 3), retorna Buzz', () => {
        expect(fizzbuzzNumber(5)).toBe('Buzz');
        expect(fizzbuzzNumber(10)).toBe('Buzz');
        expect(fizzbuzzNumber(20)).toBe('Buzz');
        expect(fizzbuzzNumber(50)).toBe('Buzz');
        expect(fizzbuzzNumber(100)).toBe('Buzz');
    })

    test('Dado un número múltiplo de 3 y de 5, retorna FizzBuzz', () => {
        expect(fizzbuzzNumber(15)).toBe('FizzBuzz');
        expect(fizzbuzzNumber(30)).toBe('FizzBuzz');
        expect(fizzbuzzNumber(150)).toBe('FizzBuzz');
    })

    test('Dado otro numero, no multiplo de 3 o de 5, retorna dicho número', () => {
        expect(fizzbuzzNumber(7)).toBe(7);
        expect(fizzbuzzNumber(4)).toBe(4);
        expect(fizzbuzzNumber(71)).toBe(71);
        expect(fizzbuzzNumber(13)).toBe(13);
    })
})

describe('El Generador de FizzBuzz', () => {
    test('Debe retornar un array', () => {
        expect(fizzbuzzRange(1, 100)).toHaveProperty('length', 99);
    })
    test('Dado un rango, debe devolver un array con una longitud del tamaño del rango', () => {
        const fb = fizzbuzzRange(1, 100);
        expect(fb.length).toBe(99);
    })
    test('Cuando el final del rango es menor que el comienzo debe retornar un array vacio', () => {
        const fb = fizzbuzzRange(1000, 100);
        expect(fb.length).toBe(0);
    })
});

describe('El generador de FizzBuzz...', () => {
    test('Debe aplicar la función fizzbuzz a cada elemento', () => {
        expect(fizzbuzzRange(1,10)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz']);
    })
})