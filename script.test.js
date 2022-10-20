import {
  morseLibrary,
  convertToEng,
  convertToMorse,
} from './conversionFunctions.js';

describe('Converts to Morse', () => {
  it('handles lower case', () => {
    expect(convertToMorse('hello world')).toBe(
      '.... . .-.. .-.. --- | .-- --- .-. .-.. -..'
    );
  });
  it('handles upper case', () => {
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
  it('handles slash notation', () => {
    expect(convertToEng('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe(
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
  it("returns the first component that's not in the library to eng", () => {
    expect(convertToEng('hello `world')).toBe(
      '(hello is not defined in this morse library)'
    );
  });
  it("returns the first component that's not in the library", () => {
    expect(convertToMorse('*')).toBe('(* is not defined in this library)');
  });
});

describe('Handles new lines', () => {
  it('handles a new line', () => {
    expect(convertToEng('.... . .-.. .-.. ---\n.-- --- .-. .-.. -..')).toBe(
      'hello world'
    );
  });
  it('converts multiple new lines to spaces', () => {
    expect(
      convertToEng('.... . .-.. .-.. ---\n\n\n\n.-- --- .-. .-.. -..')
    ).toBe('hello    world');
  });
});
