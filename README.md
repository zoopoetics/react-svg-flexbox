## What is this?

A React-based [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) layout container for SVG elements.

## What problem does it solve?

SVG lacks the convenient layout features of CSS; all elements must be positioned absolutely. There are ways around this (with [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) for instance), but there are cases where you just end up having to write cumbersome layout calculations for absolute positions. This component attempts to free us from having to do that.

[Swizec Teller](https://twitter.com/Swizec) did a nice write-up that explains why he likes it and provides numerous examples: [Build responsive SVG layouts with react-svg-flexbox](https://swizec.com/blog/build-easier-responsive-svg-layout-react-svg-flexbox/swizec/8577).

## Does it work just like Flexbox in HTML?

No. It computes positions using Facebook's [css-layout](https://www.npmjs.com/package/css-layout), which implements a subset of the Flexbox algorithm. [This table](https://www.npmjs.com/package/css-layout#supported-attributes) shows what is supported. These settings are not supported:

**On the container:**

- `align-content: space-between`
- `align-items: baseline`
- `align-items: stretch`
- `flex-wrap: wrap-reverse`
- `justify-content: space-evenly`

**On the children:**

- `align-self`
- `flex-basis`
- `flex-grow`
- `flex-shrink`
- `order`

Despite these omissions, [css-layout](https://www.npmjs.com/package/css-layout) implements enough of Flexbox to be useful.

## Demo and examples

Live demo: [zoopoetics.github.io/react-svg-flexbox](http://zoopoetics.github.io/react-svg-flexbox/)

Here is the [source](https://github.com/zoopoetics/react-svg-flexbox/blob/master/src/index.story.js) for the examples. To run them locally: `yarn install && yarn start`.

## Installation

react-svg-flexbox is intended to be installed from npm and bundled into your React app.

```
yarn add react-svg-flexbox
```

## Usage

Add an instance of the `Flexbox` component to your app, and style it to taste. CSS-Tricks has a [great overview of Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox) if you need help on that score.

```js
import React from 'react';
import Flexbox from 'react-svg-flexbox';

export default class App extends React.Component {
  render() {
    return (
      <svg height={600} width={800}>
        <Flexbox
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <rect fill={'#f0c'} height={10} width={10} />
          <rect fill={'#f0c'} height={10} width={20} />
        </Flexbox>
      </svg>
    );
  }
}
```

For how to achieve specific layouts using this component, see the [examples](https://github.com/zoopoetics/react-svg-flexbox/blob/master/src/index.story.js).

## Props

#### className : String

Arbitrary string to set as `className` on the root element of the `Flexbox` instance. By default, the component has no class name.

#### onLayout : Function

Callback that will receive the entire computed layout when the layout updates. This is useful if you need to inspect layout values from a `Flexbox` instance in order to make decisions elsewhere in your application.

#### style : Object

Object containing Flexbox settings, as well as optional width and/or height. You have to pass something in order for layout to occur.

#### x : Number

The horizontal position, in pixels, at which the `Flexbox` instance should appear within its parent element.

#### y : Number

The vertical position, in pixels, at which the `Flexbox` instance should appear within its parent element.

## Subtleties

#### React components

When the `Flexbox` component lays out a native SVG element, it looks at the element's type and sets its positional attributes accordingly. When `Flexbox` encounters a React component, however, it has no element type. As such, `Flexbox` passes `x` and `y` props to the React component instance and expects it to know how to deal with them. Take this usage:

```js
import React from 'react';
import Flexbox from 'react-svg-flexbox';
import CustomComponent from 'my-app/components';

export default class App extends React.Component {
  render() {
    return (
      <svg height={600} width={800}>
        <Flexbox>
          <CustomComponent />
        </Flexbox>
      </svg>
    );
  }
}
```

In this case, `CustomComponent` must expect `x` and `y` props and use them to position its sub-elements, like so:

```js
import React from 'react';
import PropTypes from 'prop-types';

export default class CustomComponent extends React.Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
  };

  render() {
    return (
      <g
        className={'CustomComponent'}
        transform={`translate(${this.props.x} ${this.props.y})`}>
        {/* stuff */}
      </g>
    );
  }
}
```

If you don't do this, your layout values will disappear meaninglessly into the void.

#### Text

You might have to fiddle with [baseline style](http://bl.ocks.org/eweitnauer/7325338) in order to get text elements into the correct vertical alignment.
