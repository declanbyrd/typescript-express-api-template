import controllers from '../list.controller';
import { isFunction } from 'lodash';

describe('item controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne',
    ];

    const control = controllers as any;

    crudMethods.forEach((name: string) =>
      expect(isFunction(control[name])).toBe(true)
    );
  });
});
