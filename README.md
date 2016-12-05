[![Build Status](https://travis-ci.org/abdennour/publish-decorator.svg?branch=master)](https://travis-ci.org/abdennour/publish-decorator)
[![Coverage Status](https://coveralls.io/repos/github/abdennour/publish-decorator/badge.svg?branch=master)](https://coveralls.io/github/abdennour/publish-decorator?branch=master)

# Overview :
  Make classes or methods accessible globally . It is useful for debugging in the client-side (browser) and it is valuable also  in server-side (Node.js).

# Install

```bash
npm install publish-decorator --save;
```

# Example :

```js
import {publish} from 'publish-decorator';

@publish
class MyClass {
  method1() {

  }

  @publish
  method2(){

  }
}

```
