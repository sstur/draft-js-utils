// @flow
const {describe, it} = global;
import * as fs from 'fs';
import expect from 'expect';
import parseHTML from '../parseHTML';

describe('parseHTML', () => {
  it('should parse basic elements', () => {
    let html = '<p>Hello World</p>';
    let element = parseHTML(html);
    it('should return a element of some kind', () => {
      expect(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', () => {
      expect(element.childNodes.length).toBe(1);
      // These null checks are to make Flow happy.
      expect(element.firstChild && element.firstChild.nodeName).toBe('P');
      expect(
        element.firstChild &&
          element.firstChild.firstChild &&
          element.firstChild.firstChild.nodeValue,
      ).toBe('Hello World');
    });
  });

  it('should parse incomplete html', () => {
    let html = '<p><strong>Hello<div>World';
    let element = parseHTML(html);
    it('should return a element of some kind', () => {
      expect(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', () => {
      // These null checks are to make Flow happy.
      expect(element.childNodes && element.childNodes.length).toBe(2);
      expect(element.firstChild && element.firstChild.nodeName).toBe('P');
      expect(element.lastChild && element.lastChild.nodeName).toBe('DIV');
      expect(
        element.firstChild &&
          element.firstChild.firstChild &&
          element.firstChild.firstChild.nodeName,
      ).toBe('STRONG');
    });
  });

  describe('Large HTML structure with multiple paragraphs', () => {
    it('should be parsed in a reasonable amount of time', () => {
      let html = fs.readFileSync(__dirname + '/fixtures/large-multiple-paragraphs.html')
      let element = parseHTML(html);

      it('should return a element of some kind', () => {
        expect(element.nodeType).toBe(1);
      });
    });
  });

  describe('Large HTML structure with single paragraphs', () => {
    it('should be parsed in a reasonable amount of time', () => {
      let html = fs.readFileSync(__dirname + '/fixtures/large-single-paragraph.html')
      let element = parseHTML(html);

      it('should return a element of some kind', () => {
        expect(element.nodeType).toBe(1);
      });
    })
  })
});
