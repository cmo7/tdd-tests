import { expect } from "vitest";
import { test } from "vitest";
import { describe } from "vitest";
import { text2morse, morse2text } from "../lib/morse";

describe('La función text2morse', () => {
    test('Letras sueltas se convierten correctamente', () => {
        expect(text2morse('e')).toBe('.');
        expect(text2morse('m')).toBe('--');
        expect(text2morse('i')).toBe('..');
        expect(text2morse('s')).toBe('...');
        expect(text2morse('o')).toBe('---');
        expect(text2morse('z')).toBe('--..');
        expect(text2morse('k')).toBe('-.-');
    })
    test('Las palabras se convierten correctamente en secuencias separadas por un espacio', () => {
        expect(text2morse('hola')).toBe('.... --- .-.. .-');
        expect(text2morse('aguacate')).toBe('.- --. ..- .- -.-. .- - .');
        expect(text2morse('cantimplora')).toBe('-.-. .- -. - .. -- .--. .-.. --- .-. .-');
    })

    test('varias palabras se convierten en grupos separados por triples espacios', () => {
        expect(text2morse('a b')).toBe('.-   -...');
        expect(text2morse('el veloz murcielago hindu comia feliz cardillo y kiwi')).toBe('. .-..   ...- . .-.. --- --..   -- ..- .-. -.-. .. . .-.. .- --. ---   .... .. -. -.. ..-   -.-. --- -- .. .-   ..-. . .-.. .. --..   -.-. .- .-. -.. .. .-.. .-.. ---   -.--   -.- .. .-- ..');
    })
})

describe('La función morse2text', () => {
    test('Grupos contínuos de . y - se tratan como el código de una letra', () => {
        expect(morse2text('.')).toBe('e');
        expect(morse2text('...')).toBe('s');
        expect(morse2text('---')).toBe('o');
    })
    test('Grupos contínuos de . y - separados por un espacio se tratan como letras de una palabra', () => {
        expect(morse2text('... --- ...')).toBe('sos');
        expect(morse2text('.... --- .-.. .-')).toBe('hola');
    })
    test('Grupos separados por triple espacio simbolizan disntintas palabras de una frase', () => {
        expect(morse2text('... --- ...   ... --- ...')).toBe('sos sos');
    })
})

describe('Las funciones morse2text y text2morse', () => {
    test('Son reversibles, si pasamos la salida de una por la entrada de la otra, recibimos la entrada inicial', () => {
        expect(morse2text(text2morse('septiembre'))).toBe('septiembre');
        expect(text2morse(morse2text('.- --. ..- .- -.-. .- - .'))).toBe('.- --. ..- .- -.-. .- - .');
    })
})