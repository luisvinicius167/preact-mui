# preact-mui

[![npm package](https://img.shields.io/badge/npm-v0.0.8-blue.svg)](https://www.npmjs.com/package/preact-mui)

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
// Access components individually for smaller build files (RECOMMENDED)
import Appbar from 'preact-mui/lib/appbar';
import Button from 'preact-mui/lib/button';
import Container from 'preact-mui/lib/container';

// Access all components from preact-mui module
import { Appbar, Button, Container } from 'preact-mui';

// Preact-MUI also supports ES5 syntax
var preactMui = require('preact-mui');
var Appbar = preactMui.Appbar;
var Button = preactMui.Button;
var Container = preactMui.Container;
```

#### Real life example:

```javascript
import {h, Component, render} from 'preact';

import Appbar from 'preact-mui/lib/appbar';
import Button from 'preact-mui/lib/button';
import Container from 'preact-mui/lib/container';

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
import Appbar from 'preact-mui/lib/appbar';
import Button from 'preact-mui/lib/button';
import Container from 'preact-mui/lib/container';
import Modal from 'preact-mui/lib/modal'

/**
 * @class Modal
 *
 * @param { string } openedBy The element Id that when clicked, 
 * will open the modal
 *
 * @param { string } closedBy The element Id that when clicked, 
 * will close the modal
 *
 * @param { function } onClose The hanlder that will trigger, 
 * when you close the Modal
 *
 * @param { string } position The position of container modal.
 * Can be: center, centerLeft, centerRight, centerTop, centerBottom
 * If you set some of these positions, the modal will appear on this position
 */
class Example extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container fluid={true}>
          <Modal 
            openedBy="buttonModal"
            closedBy="buttonClose"
            onClose={ 
              () => { 
                console.log('Modal Closed.')
              }
            }>
            <h1>I am a children of Modal Component</h1>
            <Button id="buttonClose">Close Modal</Button>
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

