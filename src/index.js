import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import computeLayout from 'css-layout';

export default class Flexbox extends React.Component {

  static propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    onLayout: PropTypes.func,
    style: PropTypes.object,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  static defaultProps = {
    children: [],
    className: null,
    onLayout: () => {},
    style: {},
    x: 0,
    y: 0,
  };

  constructor() {
    super();
    this._shouldUpdateAgain = false;
    this.state = {
      layout: {
        children: [],
      },
    };
  }

  componentDidMount() {
    // Force update for initial layout.
    this.forceUpdate();
  }

  componentDidUpdate() {
    /*
    SVG elements must be added to the DOM before they
    can be measured. This means that each update
    requires two render passes: one to add elements
    to the DOM, another to measure them and do layout.
    SVG elements cannot be measured before they've
    been added to the DOM. To this end, we use a simple
    on/off switch to determine whether or not we should
    set layout on state again.
    */
    this._shouldUpdateAgain = !this._shouldUpdateAgain;

    if (this._shouldUpdateAgain) {
      // Measure child elements.
      const childrenMeasured = this.getChildrenMeasured(
        this._childRefs,
      );

      // Merge measurements with passed styles.
      const children = this.getChildren(
        this.props.children,
      );
      const childrenAsMergedStyles = this.getChildrenAsMergedStyles(
        children,
        childrenMeasured,
      );

      // Compute layout.
      const layout = this.getComputedLayout(
        childrenAsMergedStyles,
        this.props.style,
      );

      // Pass layout to any concerned parent.
      this.props.onLayout(layout);

      // Trigger an update with the new layout.
      this.setState({layout});
    }
  }

  /*
  Returns children flattened into a single array.

  If this component is asked to lay out a combination
  of individually declared components/elements, and
  an array of the same returned from a map operation,
  React will throw an error. This can be prevented
  by flattening children out into a single array.
  */
  getChildren(children) {
    return children
      // Filter out null indexes:
      .filter((child) => child)
      // Filter out string literals:
      .filter((child) => typeof child !== 'string')
      // Ensure that all children are arrays:
      .map((child) => Array.isArray(child) ? child : [child])
      // Flatten into a single array:
      .reduce((previous, current) => previous.concat(current), []);
  }

  /*
  Returns child props merged with child measurements.

  If the child has explicit styles for width and height,
  those will be used. If those styles are not present,
  we will use measured widths and heights.
  */
  getChildrenAsMergedStyles(children, childrenMeasured) {
    return childrenMeasured.map((childMeasured, index) => {
      const child = children[index] || {};
      const style = child && child.props ? child.props.style : {};
      return {
        style: {
          ...style,
          height: childMeasured.height || style.height,
          width: childMeasured.width || style.width,
        },
      };
    });
  }

  /*
  Returns width and height measurements for children.

  You can pass explicit width and height styles for child elements,
  but usually it's most convenient to let this component measure
  them for you and use those numbers for layout.
  */
  getChildrenMeasured(childRefs) {
    return (childRefs && childRefs.length) ? childRefs.map((childRef) =>
      childRef.getBBox ? childRef.getBBox() : findDOMNode(childRef).getBBox()
    ) : [];
  }

  /*
  Returns values computed by css-layout.
  */
  getComputedLayout(childrenWithMergedStyles, style) {
    const layout = {
      children: [...childrenWithMergedStyles || []],
      style: {...style},
    };
    computeLayout(layout);
    return layout;
  }

  /*
  Digs into a layout object and returns the array of children.
  */
  getLayoutChildren(layout) {
    if (layout &&
        layout.children &&
        layout.children.length) {
      return layout.children;
    }
    return [];
  }

  /*
  Returns an object containing layout properties for a child element.
  Different types of SVG elements require different types of layout.
  */
  getLayoutAttributesForChild(child, layoutChild) {
    if (layoutChild && layoutChild.layout) {
      const {left, top} = layoutChild.layout;
      switch (child.type) {
        case 'circle':
          /*
          Offset is used to position the circle from
          its top left corner, not its center.
          */
          const offset = child.props.r || 0;
          return {
            cx: left + offset,
            cy: top + offset,
          };
        case 'ellipse':
          /*
          Offset is used to position the ellipse from
          its top left corner, not its center.
          */
          const offsetX = child.props.rx || 0;
          const offsetY = child.props.ry || 0;
          return {
            cx: left + offsetX,
            cy: top + offsetY,
          };
        case 'g':
        case 'path':
        case 'polygon':
        case 'polyline':
          return {
            transform: `translate(${left} ${top})`,
          };
        default:
          return {
            x: left,
            y: top,
          };
      }
    }
    return {};
  }

  render() {
    /*
    Re-create an array of refs on each render.

    We will store references to child components,
    in case they need to be measured on the next update.

    After consulting the relevant documentation -
    https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components
    - this seemed to be the best available approach.
    */
    this._childRefs = [];

    const children = this.getChildren(
      this.props.children,
    );
    const layoutChildren = this.getLayoutChildren(
      this.state.layout,
    );

    return (
      <g
        className={this.props.className}
        transform={`translate(${this.props.x} ${this.props.y})`}>
        {children.map((child, index) => React.cloneElement(child, {
          ...child.props,
          ...this.getLayoutAttributesForChild(
            child,
            layoutChildren[index],
          ),
          key: `flexboxChild${index}`,
          ref: (node) => node ? this._childRefs.push(node) : null,
        }))}
      </g>
    );
  }

}
