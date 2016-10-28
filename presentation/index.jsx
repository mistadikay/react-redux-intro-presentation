import React from 'react';
import {
  Deck,
  Image,
  Slide,
  Spectacle
} from 'spectacle';

// image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// theme
import createTheme from 'spectacle/lib/themes/default';

// image assets
import * as images from '../assets';

// styles
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

preloader(images);

const theme = createTheme({ primary: '#ff4081' });

export default () => (
  <Spectacle theme={ theme }>
    <Deck transition={ [ 'zoom', 'slide' ] } transitionDuration={ 500 }>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        React: https://slides.com/mistadikay/time-to-react/
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        React is so popular, why such hype, old ways are fine
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Describe frontend Problems
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Describe possible solutions, but too much manual work
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        <b>React to the rescue</b>
        less DOM manipulations -> better UI performance
        event handlers attach/detach automatically -> no more memory leaks
        we do much less manually -> apps are simpler and more scalable
        declarative code -> easy to reason about
        components -> reusability, encapsulation, testability
        UI development is standardised
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        the importans of commponents as UI building blocks
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        data flow example (within the component and as a components tree)
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        component render process, example
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        functional programming and reactivity
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        JSX
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Virtual DOM and reconcilation process
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        React alternatives are awesome too, use them — the idea is important
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        examples in production
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Redux: https://slides.com/mistadikay/go-with-the-flow/
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Quickly mention flux with some history and then move to redux
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Three principles
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Describe data flow in details, but without code examples
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        Container and presentational components
        <Image src={ images.smartDumb } />
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        dev-tools with time travel, data visualization, etc.
        <Image src={ images.reduxDebug } />
      </Slide>
      <Slide bgColor="primary" transition={ [ 'zoom' ] }>
        conclusion: why react and redux
      </Slide>
    </Deck>
  </Spectacle>
);
