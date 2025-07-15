  import { describe, it, expect } from 'vitest';
import { formCommentTree } from '@api/comments/mapper';
import { mockFlatComments, expectedCommentTree } from '@src/tests/mockData';

describe('formCommentTree', () => {
  it('should return empty array for empty input', () => {
    const result = formCommentTree([]);
    expect(result).toEqual([]);
  });

  it('should create a tree from flat comments', () => {
    const result = formCommentTree(mockFlatComments);
    expect(result).toEqual(expectedCommentTree);
  });

 
});
