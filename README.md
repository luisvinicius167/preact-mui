# preact-mui

[![npm package](https://img.shields.io/badge/npm-v0.0.3-blue.svg)](https://www.npmjs.com/package/preact-mui)

>The MUI CSS Preact library is designed from the ground up to be fast, small and developer-friendly. Using the MUI Preact library you can add MUI components to your Preact apps and switch seamlessly between MUI CSS/JS and MUI Preact even within the same app.

---

### Components Example

[**Preact MUI CSS Components **](http://preact-mui.surge.sh/)


### Get Started

To use MUI Preact you must include the MUI CSS and JS file in your HTML payload:
```html
<link href="//cdn.muicss.com/mui-0.9.6/css/mui.min.css" rel="stylesheet" 
type="text/css" media="screen" />
<script src="//cdn.muicss.com/mui-0.9.6/js/mui.min.js"></script>
```

#### Install

`npm install preact-mui`


#### Using Components 
```javascript
// ES6 syntax
import { Appbar, Button, Container } from 'preact-mui';

// Preact-MUI also supports ES5 syntax
var muicss = require('preact-mui');
var Appbar = muicss.Appbar;
var Button = muicss.Button;
var Container = muicss.Container;
```

#### Real life example:

```javascript
import {h, Component, render} from 'preact';
import { Appbar, Button, Container } from 'preact-mui';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container fluid={true}>
          <Button color="primary">button</Button>
        </Container>
      </div>
    );
  }
}

render(<Example />, document.getElementById('example'));
```

### API
Preact-MUI has the same API with React MUI, then you can check tre React API and use the same with Preact-MUI.

<a href="https://www.muicss.com/docs/v1/react/introduction">MUI CSS React API</a>

---

### Extra Components
> Extra components that it's created on MUI Preact.js Library.

#### Modal

```javascript
import {h, Component, render} from 'preact';
import { Appbar, Button, Container, Modal } from 'preact-mui';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container fluid={true}>
          <Modal 
            openedBy="buttonModal"
            onClose={ 
              () => { 
                console.log('')
              }
            }>
            <h1>I am a children of Modal Component</h1>
          </Modal>
          <Button color="primary" id="buttonModal">Open Modal</Button>
        </Container>
      </div>
    );
  }
}

render(<Example />, document.getElementById('example'));
```
### License

[MIT]


[Preact]: https://github.com/developit/preact
[MUICSS]: https://facebook.github.io/react/docs/context.html
[MIT]: http://choosealicense.com/licenses/mit/

