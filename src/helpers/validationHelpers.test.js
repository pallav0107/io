import {
  required,
  number,
  maxLength,
  minLength,
  minValue,
  email,
} from './validationHelpers';
import "../setupTests"

describe('form validation helpers', () => {
  describe('required', () => {
    it('should return undefined if value exists', () => {
      expect(required('test')).toBeUndefined();
    });

    it('should return an error message if value is undefined', () => {
      expect(required()).toEqual('Required');
    });
  });

  describe('number', () => {
    it('should return undefined if value is a number', () => {
      expect(number(123)).toBeUndefined();
    });

    it('should return an error message if value is not a number', () => {
      expect(number('test')).toEqual('Must be a number');
    });
  });

  describe('maxLength', () => {
    const maxLength2 = maxLength(2);
    it('should return undefined if value less than maxLength', () => {
      expect(maxLength2('1')).toBeUndefined();
    });

    it('should return an error message if value is greater than maxLength', () => {
      expect(maxLength2('123')).toEqual('Must be 2 characters or less');
    });
  });

  describe('minLength', () => {
    const minLength2 = minLength(2);
    it('should return undefined if value less than minLength', () => {
      expect(minLength2('123')).toBeUndefined();
    });

    it('should return an error message if value is less than minLength', () => {
      expect(minLength2('1')).toEqual('Must be 2 characters or more');
    });
  });

  describe('minValue', () => {
    const minValue2 = minValue(2);
    it('should return undefined if value greater than minValue', () => {
      expect(minValue2(3)).toBeUndefined();
    });

    it('should return an error message if value is less than minValue', () => {
      expect(minValue2(1)).toEqual('Must be at least 2');
    });
  });

  describe('email', () => {
    it('should return undefined if a valid email address structure', () => {
      expect(email('jeremy@westpac.com.au')).toBeUndefined();
    });

    it('should return an error message if is an invalid email address structure', () => {
      expect(email('jeremy')).toEqual('Invalid email address');
    });
  });
});
