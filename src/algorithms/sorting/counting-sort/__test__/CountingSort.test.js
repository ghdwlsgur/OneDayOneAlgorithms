import CountingSort from '../CountingSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants
const SORTED_ARRAY_VISITING_COUNT = 60;
const NOT_SORTED_ARRAY_VISITING_COUNT = 60;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 60;
const EQUAL_ARRAY_VISITING_COUNT = 60;

describe('CountingSort', () => {
  it('should sort array', () => {
    SortTester.testSort(CountingSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(CountingSort);
  });

  it('should allow to use specify max/min integer value in array to make sorting faster', () => {
    const visitingCallback = jest.fn();
    const sorter = new CountingSort({ visitingCallback });

    // Detect biggest number in array in prior
    const biggestElement = Math.max(...notSortedArr);
    // Detect smallest number in array in prior
    const smallestElement = Math.min(...notSortedArr);

    // eslint-disable-next-line prettier/prettier
    const sortedArray = sorter.sort(notSortedArr, smallestElement, biggestElement);
    // eslint-disable-next-line prettier/prettier
    
    expect(sortedArray).toEqual(sortedArr);
    expect(visitingCallback).toHaveBeenCalledTimes(40);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      CountingSort,
      equalArr,
      // eslint-disable-next-line prettier/prettier
      EQUAL_ARRAY_VISITING_COUNT
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      CountingSort,
      sortedArr,
      // eslint-disable-next-line prettier/prettier
      SORTED_ARRAY_VISITING_COUNT
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      CountingSort,
      notSortedArr,
      // eslint-disable-next-line prettier/prettier
      NOT_SORTED_ARRAY_VISITING_COUNT
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      CountingSort,
      reverseArr,
      // eslint-disable-next-line prettier/prettier
      REVERSE_SORTED_ARRAY_VISITING_COUNT
    );
  });
});