import expect from 'expect';
import {
  publish
} from '../src';
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
describe(`@publish > Server-side(NodeJS)`, () => {


  const destroyPublicFunctions = () => {
    ['IamPublicClass', 'iamPublicMethod'].forEach((fnName) => delete global[fnName])
  };
  beforeEach(() =>{buildClasses()});
  afterEach(() => destroyPublicFunctions())

  it(`global is defined`, () => {
    expect(typeof global).toEqual('object');
  });
});
