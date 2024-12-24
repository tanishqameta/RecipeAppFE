import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should return the same array if it has one or no elements', () => {
    const inputArray = [{ name: 'Apple' }];
    expect(pipe.transform(inputArray, 'name')).toEqual(inputArray);
  });

  it('should sort by a field in ascending order', () => {
    const inputArray = [
      { name: 'Banana' },
      { name: 'Apple' },
      { name: 'Carrot' },
    ];
    expect(pipe.transform(inputArray, 'name', true)).toEqual([
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Carrot' },
    ]);
  });

  it('should sort by a field in descending order', () => {
    const inputArray = [
      { name: 'Banana' },
      { name: 'Apple' },
      { name: 'Carrot' },
    ];
    expect(pipe.transform(inputArray, 'name', false)).toEqual([
      { name: 'Carrot' },
      { name: 'Banana' },
      { name: 'Apple' },
    ]);
  });

  it('should return the same array if no field is provided', () => {
    const inputArray = [{ name: 'Apple' }];
    expect(pipe.transform(inputArray, '')).toEqual(inputArray);
  });

  it('should handle undefined or null values in the array', () => {
    const inputArray = [
      { name: 'Banana' },
      { name: null },
      { name: 'Apple' },
    ];
    expect(pipe.transform(inputArray, 'name', true)).toEqual([
      { name: 'Apple' },
      { name: 'Banana' },
      { name: null },
    ]);
  });
});
