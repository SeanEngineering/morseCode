import { convertToEng, convertToMorse } from './conversionFunctions.js';
////////////////////////////////////////////////////////////////
describe('Converts to Morse', () => {
  const testA = [
    ['hello world', '.... . .-.. .-.. --- | .-- --- .-. .-.. -..'],
    ['HELLO WORLD', '.... . .-.. .-.. --- | .-- --- .-. .-.. -..'],
    [
      'The number is 12345',
      '- .... . | -. ..- -- -... . .-. | .. ... | .---- ..--- ...-- ....- .....',
    ],
  ];

  it('handles lower case', () => {
    expect(convertToMorse(testA[0][0])).toBe(testA[0][1]);
  });
  it('handles upper case', () => {
    expect(convertToMorse(testA[1][0])).toBe(testA[1][1]);
  });
  it('Accounts for numbers', () => {
    expect(convertToMorse(testA[2][0])).toBe(testA[2][1]);
  });
});
////////////////////////////////////////////////////////////////
describe('Converts to English', () => {
  const testB = [
    ['.... . .-.. .-.. --- | .-- --- .-. .-.. -..', 'hello world'],
    ['.... . .-.. .-.. --- / .-- --- .-. .-.. -..', 'hello world'],
    [
      '- .... . | -. ..- -- -... . .-. | .. ... | .---- ..--- ...-- ....- .....',
      'the number is 12345',
    ],
  ];

  it('converts hello world', () => {
    expect(convertToEng(testB[0][0])).toBe(testB[0][1]);
  });
  it('handles slash notation', () => {
    expect(convertToEng(testB[1][0])).toBe(testB[1][1]);
  });
  it('Accounts for numbers', () => {
    expect(convertToEng(testB[2][0])).toBe(testB[2][1]);
  });
});
////////////////////////////////////////////////////////////////
describe('Handles unexpected chars', () => {
  const testC = [
    ['hello `world', '(hello is not defined in this morse library)'],
    ['*', '(* is not defined in this library)'],
  ];

  it("returns the first component that's not in the library to eng", () => {
    expect(convertToEng(testC[0][0])).toBe(testC[0][1]);
  });
  it("returns the first component that's not in the library", () => {
    expect(convertToMorse(testC[1][0])).toBe(testC[1][1]);
  });
});
////////////////////////////////////////////////////////////////
describe('Handles new lines', () => {
  const testD = [
    ['.... . .-.. .-.. ---\n.-- --- .-. .-.. -..', 'hello world'],
    ['.... . .-.. .-.. ---\n\n\n\n.-- --- .-. .-.. -..', 'hello    world'],
  ];
  it('handles a new line', () => {
    expect(convertToEng(testD[0][0])).toBe(testD[0][1]);
  });
  it('converts multiple new lines to spaces', () => {
    expect(convertToEng(testD[1][0])).toBe(testD[1][1]);
  });
});
