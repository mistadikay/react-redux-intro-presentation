import React from 'react';
import {
  Appear,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  S,
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
import './global.css';
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
      transition={ [ 'fade', 'slide', 'zoom', 'spin' ] }
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
        notes={ `
          People don't want to change something that is working already
        ` }
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size="5" textColor="heading">Old ways are working fine.</Heading>
        <Image src={ images.fine } width="100%" />
      </Slide>
      <Slide
        notes={ `
          TODO: revisit these problems
          And while I can understand these people, we all cannot deny that there are (were) lots of
          problems when working on user interfaces.

          Performance: any changes to DOM, even when just reading information (getComputedStyle,
          offsetHeight) causes repaints or reflow which can be a very visible problem

          Efficiency: because we do everything manually — creating DOM, adding events, etc. — it's
          easy to lose track of node reference or something and create memory leaks

          Complexity: again, because we do everything manually we have to think about it all the
          time and the more complexity of our apps grow, the more time we need to support these big
          piles of shit.

          Scalability: when people asked to add a new feature, it can be the pain in the ass and
          estimates can be enormous and inadecvate

          Reusability: reusing UI code is not obvious, most of the people just copy-past (lazada
          ahahaha)
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size="5" textColor="heading">Problems on Frontend</Heading>
        <List>
          <Appear>
            <ListItem>
              <S type="bold">Performance</S>
               - making changes to the DOM is slow due to repaint and reflow
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Efficiency</S>
              - you can end up creating memory leaks by losing track of node
              references or by forgetting to detach event handlers
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Complexity</S>
              - hard to maintain, hard to understand
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Scalability</S>
              - hard to add new features and change design
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Reusability</S>
              - hard to reuse UI code across different websites and applications
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        notes={ `
          TODO: revisit the solutions along with problems
          Of course, solutions exist, and it's totally possible to solve those problems, but it
          either requires a lot of manual work or using huge and slow frameworks like Ember or
          Angular
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size="5" textColor="heading">Possible solutions</Heading>
        <Appear>
          <List>
            <ListItem>make only small DOM changes</ListItem>
            <ListItem>work in detached DOM and then reattach it</ListItem>
            <ListItem>manually destruct DOM references and UI entities</ListItem>
            <ListItem>manually keep track on all event handlers</ListItem>
            <ListItem>work out some kind of a code convention</ListItem>
            <ListItem>use huge and slow frameworks doing too much</ListItem>
            <ListItem>
              attempts to modularise UI pieces by using string-based template engines
            </ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide
        notes={ `
          So what is React exactly. In short: it's a view library, a layer taking data and business
          logic and transforming it into HTML (or other render targets, more about this later). It
          was deployed to production for the first time in 2011 in Facebook newsfeed and in
          Instagram in 2012. Open-sourced in 2013. The beautiful part about it and other OSS
          technologies by Facebook is that they're testing it in production first and only after the
          tool has shown to be promising, they open-source it. Compare it to, for example, Angular,
          which was not widely used by Google in production.
        ` }
        textColor="main"
        transition={ [ 'zoom' ] }
      >
        <S type="bold">Introducing</S>
        <Heading size="2" textColor="heading">React</Heading>
        <Image src={ images.react } width="45%" />
      </Slide>
      <Slide
        bgDarken="0.7"
        bgImage={ images.lego }
        notes={ `
          It's the most fundamental part of React, first-class citizen.
          It's like lego-cubes you built your interface from.
          They encapsulate DOM-structure so you don't have to know about it from outside.
          They encapsulate DOM-logic, so you just work with the state/API and components do the
          rest inside them.
          They automate and optimize all DOM interactions, so you don't have to do manual work and
          worry about memory leaks and low FPS.
          They're highly reusable and can be distributed, for example, through npm for using in
          different applications.
        ` }
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size="4" textColor="heading">Components</Heading>
        <List>
          <Appear>
            <ListItem>the most fundamental part of React</ListItem>
          </Appear>
          <Appear>
            <ListItem>building blocks of UI</ListItem>
          </Appear>
          <Appear>
            <ListItem>encapsulated DOM structure</ListItem>
          </Appear>
          <Appear>
            <ListItem>encapsulated DOM logic</ListItem>
          </Appear>
          <Appear>
            <ListItem>automated and optimized DOM interactions</ListItem>
          </Appear>
          <Appear>
            <ListItem>reusable and distributable</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        notes={ `
          The first thing you're doing when building a React app is splitting it to components.
          And it's very easy and natural: here app component which contains search and table
          components, which in turn contain smaller components, etc. It's all about composition.
          And as I mentioned some components can be published to npm to reuse them in other apps.
        ` }
        textColor="main"
        transition={ [ 'spin' ] }
      >
        <Heading size="4" textColor="heading">Thinking in components</Heading>
        <Appear><Image src={ images.componentsBefore } width="45%" /></Appear>
        { ' ' }
        <Appear><Image src={ images.componentsAfter } width="47%" /></Appear>
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
        React beyound DOM: React Native, React Blessed
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        React alternatives are awesome too, use them — the idea is important,
        also React has bigger community. React influenced Ember and Angular
      </Slide>
      <Slide textColor="main" transition={ [ 'slide' ] }>
        examples in production
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
