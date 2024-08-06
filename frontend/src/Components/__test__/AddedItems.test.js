import { calculateTotal } from '../AddedItems/AddedItems';
const cartBooks = [
  { newPrice: 10 },
  { newPrice: 20 },
];

describe('calculateTotal', () => {
  it('should return 0 if cartBooks is not an array', () => {
    expect(calculateTotal(null, [1])).toBe(0);
  });

  it('should return NaN if quantities array is empty', () => {
    expect(calculateTotal(cartBooks, [])).toBe(NaN);
  });

  it('should return 0 if cartBooks is an empty array', () => {
    expect(calculateTotal([], [])).toBe(0);
  });   

  it('should return 0 if quantities array contains all zeroes', () => {
    const quantities = [0, 0];
    expect(calculateTotal(cartBooks, quantities)).toBe(0);
  });

  it('should calculate the total price correctly', () => {
    const quantities = [2, 1];
    expect(calculateTotal(cartBooks, quantities)).toBe(40);
  });
});