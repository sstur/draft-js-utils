// @flow
import isAllowedHref from '../isAllowedHref';

it('should allow valid URIs', () => {
  expect(isAllowedHref('/')).toBe(true);
  expect(isAllowedHref('/a')).toBe(true);
  expect(isAllowedHref('/a.b')).toBe(true);
  expect(isAllowedHref('#')).toBe(true);
  expect(isAllowedHref('#a=1&b=2')).toBe(true);
  expect(isAllowedHref('http://foo')).toBe(true);
  expect(isAllowedHref('https://foo')).toBe(true);
  expect(isAllowedHref('x://y')).toBe(true);
  expect(isAllowedHref('x:y')).toBe(true);
});

it('should not allow empty values', () => {
  expect(isAllowedHref(null)).toBe(false);
  expect(isAllowedHref(undefined)).toBe(false);
});

it('should not allow data URIs', () => {
  expect(isAllowedHref('data:text/html;base64,YWJj')).toBe(false);
  expect(isAllowedHref('data:x')).toBe(false);
});
