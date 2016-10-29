import React from 'react';
import {
  Deck,
  Heading,
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

const theme = createTheme(
  {
    primary: '#2d2d2d',
    main: '#fff',
    heading: '#61dafb'
  },
  { primary: 'Open Sans Condensed' }
);

export default () => (
  <Spectacle theme={ theme }>
    <Deck
      bgColor="primary"
      progress="bar"
      textColor="main"
      transition={ [ 'fade', 'slide', 'zoom' ] }
      transitionDuration={ 500 }
    >
      <Slide
        notes={ `
          Okay, thanks for coming. So I think you guys already heard about React.
          There are lots of articles and talks introducing React, so I guess what I'll try to do
          here with my talk is summarise it and add some of the thoughts I have.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading fit={ true } textColor="heading">Time To React</Heading>
        <Heading fit={ true } textColor="heading">
          Introduction to React and Redux ecosystem
        </Heading>
      </Slide>
      <Slide
        notes="So yeah. React. It's really everywhere and it's growing fast."
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size="5" textColor="heading">Internet nowadays</Heading>
        <Image src={ images.reactEverywhere } width="80%" />
      </Slide>
      <Slide
        notes={ `
          Some people are sceptic and they don't understand why the heck they need to change their
          habits and learn yet another javascript bloody library.
        ` }
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size="5" textColor="heading">Holy shit, another Javascript library.</Heading>
        <div>
          <Image src={ images.unamused } width="37%" />
        </div>
        <div>
          <Image src={ images.zeroDays } width="37%" />
        </div>
      </Slide>
      <Slide
        notes="People don't want to change something that is working already"
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size="5" textColor="heading">Old ways are working fine.</Heading>
        <Image src={ images.fine } width="100%" />
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Describe frontend Problems
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Describe possible solutions, but too much manual work or huge frameworks
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        <Heading fir="true" textColor="heading">React to the rescue</Heading>
        less DOM manipulations -> better UI performance
        event handlers attach/detach automatically -> no more memory leaks
        we do much less manually -> apps are simpler and more scalable
        declarative code -> easy to reason about
        components -> reusability, encapsulation, testability
        it's just a library, not opinionated framework
        UI development is standardised
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        the importans of commponents as UI building blocks
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        components tree
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        component render process and data flow, example, show JSX vs other options
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Virtual DOM and reconcilation process (mention Fiber)
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        functional programming: UI is a pure function
        reactivity: reactive/declarative render
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        React beyound DOM: React Native, React Blessed
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        React alternatives are awesome too, use them — the idea is important,
        also React has bigger community
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        examples in production
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        <Heading>Redux</Heading>
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Quickly mention flux with some history and then move to redux
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Three principles
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Describe data flow in details, but without code examples
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        Container and presentational components
        <Image src={ images.smartDumb } />
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        dev-tools with time travel, data visualization, etc.
        <Image src={ images.reduxDebug } />
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        conclusion: why react and redux
        - automation of manual work, less chance of mistakes
        - optimising DOM interactions -> great UI performance
        - flexible, not opinionated like frameworks
        - simplifies data-flow and makes it predictable
        - works great for teams, enforcing to follow good patterns
        - declarative UI code is readable and maintainable
        - componentization is the future of web development
      </Slide>
    </Deck>
  </Spectacle>
);
