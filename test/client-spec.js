import 'jsdom-global/register';
import expect from 'expect';
import {
  publish
} from '../src';
describe(`@publish  > Client-side(Browser)`, () => {
  const buildClasses = (() => {
    class IamClass {
      iamPrivateMethod() {
        return a * b;
      }
      @publish
      iamPublicMethod(a, b) {
        return a + b;
      }
    }
    @publish
    class IamPublicClass {

    }
  });

  const destroyPublicFunctions = () => {
    ['IamPublicClass', 'iamPublicMethod'].forEach((fnName) => (window) ? delete window[fnName] : delete global[fnName])
  };
  beforeEach(() => buildClasses());
  afterEach(() => destroyPublicFunctions())
  it(`window is defined`, () => {
    expect(typeof window).toEqual('object');
  });

  it(`publishes a class built privately in client-side`, () => {
    expect(() => {
      new window.IamPublicClass()
    }).toNotThrow();
    expect(() => {
      new window.IamClass()
    }).toThrow();
  });

  it(`publishes a method of class built in client-side`, () => {
    expect(() => {
      window.iamPublicMethod()
    }).toNotThrow();
    expect(window.iamPublicMethod(4, 5)).toEqual(4 + 5);
  });

})
