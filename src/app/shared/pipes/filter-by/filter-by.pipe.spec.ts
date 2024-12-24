import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('should return the entire array when values is empty', () => {
    const inputArray = [{ name: 'Apple' }, { name: 'Banana' }];
    expect(pipe.transform(inputArray, 'name', [])).toEqual(inputArray);
  });

  it('should filter by a field', () => {
    const inputArray = [
      { name: 'Apple', type: 'fruit' },
      { name: 'Carrot', type: 'vegetable' },
    ];
    expect(pipe.transform(inputArray, 'type', ['fruit'])).toEqual([{ name: 'Apple', type: 'fruit' }]);
  });

  it('should return an empty array when no matches are found', () => {
    const inputArray = [{ name: 'Apple' }];
    expect(pipe.transform(inputArray, 'name', ['Banana'])).toEqual([]);
  });
});
