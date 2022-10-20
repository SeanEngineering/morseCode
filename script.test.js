import {
  morseLibrary,
  convertToEng,
  convertToMorse,
} from './conversionFunctions.js';

describe('Converts to Morse', () => {
  it('converts hello world', () => {
    expect(convertToMorse('hello world')).toBe(
      '.... . .-.. .-.. --- | .-- --- .-. .-.. -..'
    );
  });
  it('converts HELLO WORLD', () => {
    expect(convertToMorse('HELLO WORLD')).toBe(
      '.... . .-.. .-.. --- | .-- --- .-. .-.. -..'
    );
  });
  it('Accounts for numbers', () => {
    expect(convertToMorse('The number is 12345')).toBe(
      '- .... . | -. ..- -- -... . .-. | .. ... | .---- ..--- ...-- ....- .....'
    );
  });
});
describe('Converts to English', () => {
  it('converts hello world', () => {
    expect(convertToEng('.... . .-.. .-.. --- | .-- --- .-. .-.. -..')).toBe(
      'hello world'
    );
  });
  it('Accounts for numbers', () => {
    expect(
      convertToEng(
        '- .... . | -. ..- -- -... . .-. | .. ... | .---- ..--- ...-- ....- .....'
      )
    ).toBe('the number is 12345');
  });
});

describe('Handles unexpected chars', () => {
  it("returns the character that's not in the library to eng", () => {
    expect(convertToMorse('hello `world')).toBe(
      '(` is not defined in this library)'
    );
  });
  it('converts HELLO WORLD', () => {
    expect(convertToMorse('*')).toBe('(* is not defined in this library)');
  });
});

describe('Handles new lines', () => {
  it('handles a new line', () => {
    expect(convertToMorse('hello \n world')).toBe('hello world');
  });
  it('converts HELLO WORLD', () => {
    expect(convertToMorse('*')).toBe('(* is not defined in this library)');
  });
});
