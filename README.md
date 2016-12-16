# preact-mui

[![npm package](https://img.shields.io/badge/npm-v0.1.0-blue.svg)](https://www.npmjs.com/package/preact-mui)

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

## API Documentation

### Preact Library

All of the MUI React components can be accessed as top-level attributes of the `preact-mui` package. In addition, they can be accessed individually at `preact/lib/{component}`.

#### Appbar

```jsx
import Appbar from 'preact-mui/lib/appbar';

<Appbar />
```

Read more: https://www.muicss.com/docs/v1/react/appbar

#### Button

```jsx
import Button from 'preact-mui/lib/button';

<Button />
  * {String} color=default|primary|danger|accent
  * {String} size=default|small|large
  * {String} type=submit|button
  * {String} variant=default|flat|raised|fab
  * {Boolean} disabled=false|true
```

Read more: https://www.muicss.com/docs/v1/react/buttons

#### Checkbox

```jsx
import Checkbox from 'preact-mui/lib/checkbox';

<Checkbox />
  * {String} label
  * {String} value
  * {Boolean} checked
  * {Boolean} defaultChecked
  * {Boolean} disabled=false|true
```

Read more: https://www.muicss.com/docs/v1/react/forms

#### Container

```jsx
import Container from 'preact-mui/lib/container';

<Container />
  * {Boolean} fluid=false|true
```

Read more: https://www.muicss.com/docs/v1/react/container

#### Divider

```jsx
import Divider from 'preact-mui/lib/divider';

<Divider />
```

Read more: https://www.muicss.com/docs/v1/react/dividers

#### Dropdown Component

##### Dropdown

```jsx
import Dropdown from 'preact-mui/lib/dropdown';

<Dropdown />
  * {String} label
  * {String} alignMenu=left|right
  * {String} color=default|primary|danger|accent
  * {String} size=default|small|large
  * {String} variant=default|flat|raised|fab
  * {Boolean} disabled

```

Read more: https://www.muicss.com/docs/v1/react/dropdowns

##### DropdownItem

```jsx
import DropdownItem 'preact-mui/lib/dropdown-item';

<DropdownItem />
  * {String} link
```

Read more: https://www.muicss.com/docs/v1/react/dropdowns

#### Form

```jsx
import Form from 'preact-mui/lib/form';

<Form />
  * {Boolean} inline=false|true
  * {Boolean} legend=false|true
```

Read more: https://www.muicss.com/docs/v1/react/forms

#### Grid Elements

##### Row

```jsx
import Row from 'preact-mui/lib/row';

<Row />
```

Read more: https://www.muicss.com/docs/v1/react/grid

##### Col

```jsx
import Col from 'preact-mui/lib/col';

<Col />
  * {Integer} xs
  * {Integer} xs-offset
  * {Integer} sm
  * {Integer} sm-offset
  * {Integer} md
  * {Integer} md-offset
  * {Integer} lg
  * {Integer} lg-offset
  * {Integer} xl
  * {Integer} xl-offset
```

Read more: https://www.muicss.com/docs/v1/react/grid

#### Input

```jsx
import Input from 'preact-mui/lib/input';

<Input />
  * {String} defaultValue
  * {String} hint
  * {String} value
  * {Boolean} floatingLabel
  * {String|Object} style
  * {String} type=text|email|url|tel|password
```

Read more: https://www.muicss.com/docs/v1/react/forms

#### Panel

```jsx
import Panel from 'preact-mui/lib/panel';

<Panel />
```

Read more: https://www.muicss.com/docs/v1/react/panels

#### Radio

```jsx
import Radio from 'preact-mui/lib/panel';

<Radio />
  * {String} name
  * {String} value
  * {String} label
  * {Boolean} checked
  * {Boolean} defaultChecked
  * {Boolean} disabled=false|true
```

Read more: https://www.muicss.com/docs/v1/react/forms

#### Select Component

##### Select

```jsx
import Select from 'preact-mui/lib/select';

<Select />
  * {String} defaultValue
  * {String} label
  * {String|Object} style
  * {Boolean} disabled=false|true
```

Read more: https://www.muicss.com/docs/v1/react/forms

##### Option

```jsx
import Option from 'preact-mui/lib/option';

<Option />
  * {String} value
  * {String} label
```

Read more: https://www.muicss.com/docs/v1/react/forms

#### Tabs Component

##### Tabs

```jsx
import Tabs from 'preact-mui/lib/tabs';

<Tabs />
  * {Boolean} justified=false|true
```

Read more: https://www.muicss.com/docs/v1/react/tabs

##### Tab

```jsx
import Tab from 'preact-mui/lib/tab';

<Tab />
  * {Boolean} selected
  * {String} label
  * {String} value
```

Read more: https://www.muicss.com/docs/v1/react/tabs

#### Textarea

```jsx
import Textarea from 'preact-mui/lib/textarea';

<Textarea />
  * {String} defaultValue
  * {String} hint
  * {String} value
  * {Boolean} floatingLabel
  * {String} label
  * {String|Object} style
```

Read more: https://www.muicss.com/docs/v1/react/forms


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

## CSS Helpers

```html
<!-- animation -->
<div class="mui--no-transition"></div>

<!-- alignment -->
<div class="mui--text-left"></div>
<div class="mui--text-right"></div>
<div class="mui--text-center"></div>
<div class="mui--text-justify"></div>
<div class="mui--text-nowrap"></div>
<div class="mui--align-baseline"></div>
<div class="mui--align-top"></div>
<div class="mui--align-middle"></div>
<div class="mui--align-bottom"></div>

<!-- depth helpers -->
<div class="mui--z1"></div>
<div class="mui--z2"></div>
<div class="mui--z3"></div>
<div class="mui--z4"></div>
<div class="mui--z5"></div>

<!-- float helpers -->
<div class="mui--clearfix"></div>
<div class="mui--pull-right"></div>
<div class="mui--pull-left"></div>

<!-- toggle helpers -->
<div class="mui--hide"></div>
<div class="mui--show"></div>
<div class="mui--invisible"></div>
<div class="mui--overflow-hidden"></div>

<!-- responsive utilities -->
<div class="mui--visible-xs-block"></div>
<div class="mui--visible-xs-inline"></div>
<div class="mui--visible-xs-inline-block"></div>
<div class="mui--visible-sm-block"></div>
<div class="mui--visible-sm-inline"></div>
<div class="mui--visible-sm-inline-block"></div>
<div class="mui--visible-md-block"></div>
<div class="mui--visible-md-inline"></div>
<div class="mui--visible-md-inline-block"></div>
<div class="mui--visible-lg-block"></div>
<div class="mui--visible-lg-inline"></div>
<div class="mui--visible-lg-inline-block"></div>
<div class="mui--hidden-xs"></div>
<div class="mui--hidden-sm"></div>
<div class="mui--hidden-md"></div>
<div class="mui--hidden-lg"></div>

<!-- typograpy -->
<div class="mui--text-display4"></div>
<div class="mui--text-display3"></div>
<div class="mui--text-display2"></div>
<div class="mui--text-display1"></div>
<div class="mui--text-headline"></div>
<div class="mui--text-title"></div>
<div class="mui--text-subhead"></div>
<div class="mui--text-body2">Body2</div>
<div class="mui--text-body1">Body1</div>
<div class="mui--text-caption">Caption</div>
<div class="mui--text-menu">Menu</div>
<div class="mui--text-button">Button</div>

<!-- text color -->
<div class="mui--text-dark"></div>
<div class="mui--text-dark-secondary"></div>
<div class="mui--text-dark-hint"></div>
<div class="mui--text-light"></div>
<div class="mui--text-light-secondary"></div>
<div class="mui--text-light-hint"></div>
<div class="mui--text-accent"></div>
<div class="mui--text-accent-secondary"></div>
<div class="mui--text-accent-hint"></div>
<div class="mui--text-danger"></div>
<div class="mui--text-black"></div>
<div class="mui--text-white"></div>

<!-- background color -->
<div class="mui--bg-primary"></div>
<div class="mui--bg-primary-dark"></div>
<div class="mui--bg-primary-light"></div>
<div class="mui--bg-accent"></div>
<div class="mui--bg-accent-dark"></div>
<div class="mui--bg-accent-light"></div>
<div class="mui--bg-danger"></div>

<!-- user select -->
<div class="mui--no-user-select"></div>

<!-- appbar dimension helpers -->
<div class="mui--appbar-height"></div>
<div class="mui--appbar-min-height"></div>
<div class="mui--appbar-line-height"></div>

<!-- list helpers -->
<ul class="mui-list--unstyled"></ul>
<ul class="mui-list--inline"></ul>
```

### License

[MIT]


[Preact]: https://github.com/developit/preact
[MUICSS]: https://facebook.github.io/react/docs/context.html
[MIT]: http://choosealicense.com/licenses/mit/

