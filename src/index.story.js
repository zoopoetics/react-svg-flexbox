import React from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import Flexbox from './';

const fill = '#cd6a51';
const height = 600;
const margin = 20;
const padding = 20;
const rectSize = 140;
const textStyle = {
  dominantBaseline: 'central',
  fill: '#fff',
  fontFamily: 'arial',
  textAnchor: 'middle',
};
const width = 800;

const getStory = (flexProps, children) => (
  <svg
    height={height}
    width={width}>

    <rect
      className={'BackgroundFill'}
      fill={'#ccc'}
      height={'100%'}
      width={'100%'} />

    <Flexbox
      style={{
        height,
        padding,
        width,
        ...flexProps,
      }}>
      {children}
    </Flexbox>

  </svg>
);

storiesOf('Flexbox', module)

  .add('flex-direction: row', () => {
    const flexProps = {
      flexDirection: 'row',
    };
    const children = [rectSize, rectSize, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('flex-direction: row-reverse', () => {
    const flexProps = {
      flexDirection: 'row-reverse',
    };
    const children = [rectSize, rectSize, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginLeft: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('flex-direction: column', () => {
    const flexProps = {
      flexDirection: 'column',
    };
    const children = [rectSize, rectSize, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginBottom: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('flex-direction: column-reverse', () => {
    const flexProps = {
      flexDirection: 'column-reverse',
    };
    const children = [rectSize, rectSize, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginTop: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('flex-wrap: no-wrap', () => {
    const flexProps = {
      flexDirection: 'row',
      flexWrap: 'no-wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('flex-wrap: wrap', () => {
    const flexProps = {
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginBottom: margin,
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('justify-content: flex-start', () => {
    const flexProps = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
    const children = [rectSize, rectSize / 2, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('justify-content: flex-end', () => {
    const flexProps = {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    };
    const children = [rectSize, rectSize / 2, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginLeft: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('justify-content: center', () => {
    const flexProps = {
      flexDirection: 'row',
      justifyContent: 'center',
    };
    const children = [rectSize, rectSize / 2, rectSize * 2].map((width, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('justify-content: space-between', () => {
    const flexProps = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
    const children = [rectSize, rectSize / 2, rectSize * 2].map((width, index) => (
      <g key={index}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('justify-content: space-around', () => {
    const flexProps = {
      flexDirection: 'row',
      justifyContent: 'space-around',
    };
    const children = [rectSize, rectSize / 2, rectSize * 2].map((width, index) => (
      <g key={index}>
        <rect
          fill={fill}
          height={rectSize}
          width={width} />
        <text
          style={textStyle}
          x={width / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-items: flex-start', () => {
    const flexProps = {
      alignItems: 'flex-start',
      flexDirection: 'row',
    };
    const children = [rectSize, rectSize * 2, rectSize / 2, rectSize].map((height, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={height}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={height / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-items: flex-end', () => {
    const flexProps = {
      alignItems: 'flex-end',
      flexDirection: 'row',
    };
    const children = [rectSize, rectSize * 2, rectSize / 2, rectSize].map((height, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={height}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={height / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-items: center', () => {
    const flexProps = {
      alignItems: 'center',
      flexDirection: 'row',
    };
    const children = [rectSize, rectSize * 2, rectSize / 2, rectSize].map((height, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={height}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={height / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-content: flex-start', () => {
    const flexProps = {
      alignContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginBottom: margin,
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-content: flex-end', () => {
    const flexProps = {
      alignContent: 'flex-end',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
          marginTop: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-content: center', () => {
    const flexProps = {
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginBottom: margin,
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('align-content: stretch', () => {
    const flexProps = {
      alignContent: 'stretch',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const children = Array.from({length: 6}).map((datum, index) => (
      <g
        key={index}
        style={{
          marginRight: margin,
        }}>
        <rect
          fill={fill}
          height={rectSize}
          width={rectSize} />
        <text
          style={textStyle}
          x={rectSize / 2}
          y={rectSize / 2}>
          {`Item ${index + 1}`}
        </text>
      </g>
    ));
    return getStory(flexProps, children);
  })

  .add('common element types', () => {
    const flexProps = {
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };

    class CustomComponent extends React.Component {

      static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
      };

      static defaultProps = {
        x: 0,
        y: 0,
      };

      render() {
        return (
          <g
            className={'CustomComponent'}
            transform={`translate(${this.props.x} ${this.props.y})`}>
            <rect
              fill={'blue'}
              height={100}
              width={400} />
            <text
              fill={'white'}
              fontFamily={'Arial,Helvetica'}
              x={20}
              y={20}>
              {'react-svg-flexbox'}
            </text>
          </g>
        );
      }
    }

    const children = [
      (
        <circle
          fill={'black'}
          r={50} />
      ),
      (
        <ellipse
          fill={'white'}
          rx={50}
          ry={30} />
      ),
      (
        <path
          d={'M 0 0 L 100 0 L 50 100 z'}
          fill={'orange'} />
      ),
      (
        <polygon
          fill={'cyan'}
          points={'0,100 50,0 100,100'} />
      ),
      (
        <text
          fill={'green'}
          fontFamily={'Arial,Helvetica'}
          style={{
            dominantBaseline: 'text-before-edge',
          }}>
          {'wow such flexbox'}
        </text>
      ),
      (
        <polyline
          fill={'none'}
          points={'0,100 50,0 100,100'}
          stroke={'yellow'}
          strokeWidth={3} />
      ),
      (
        <rect
          fill={'red'}
          height={100}
          width={100} />
      ),
      (
        <image
          height={100}
          href={'https://media.giphy.com/media/RKCAeG662WQSc/giphy.gif'}
          width={80} />
      ),
      (
        <CustomComponent />
      ),
    ].map((child, index) => React.cloneElement(child, {
      ...child.props,
      key: `child${index}`,
      style: {
        ...child.props.style,
        marginBottom: 20,
        marginRight: 20,
      },
    }));

    return getStory(flexProps, children);
  })

  .add('nested', () => {
    const flexProps = {
      flexDirection: 'row',
    };

    class TextComponent extends React.Component {
      static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
      };
      render() {
        return (
          <g
            transform={`translate(${this.props.x || 0} ${this.props.y || 0})`}>
            <text style={{
              dominantBaseline: 'text-before-edge',
              fill: 'white',
              fontFamily: 'Arial,Helvetica',
            }}>
              {'flexy flex flex'}
            </text>
          </g>
        );
      }
    }

    const barHeight = 60;
    return (
      <svg
        height={barHeight}
        width={width}>

        <rect
          className={'BackgroundFill'}
          fill={'#ccc'}
          height={barHeight}
          width={width} />

        <Flexbox
          className={'contents'}
          style={{
            alignContent: 'stretch',
            flexDirection: 'column',
            height: barHeight,
            padding: 12,
            width,
          }}>

          <Flexbox
            className={'row1'}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextComponent style={{marginRight: 12}} />
            <TextComponent />
            {null}
            {'raw string'}
          </Flexbox>

          <Flexbox
            className={'row2'}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextComponent />
            <TextComponent style={{marginLeft: 28}} />
            <rect
              fill={'#f0c'}
              height={10}
              style={{marginLeft: 28}}
              width={10} />
          </Flexbox>
        </Flexbox>
      </svg>
    );
  });
