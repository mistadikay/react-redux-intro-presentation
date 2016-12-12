import React from 'react';
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  S,
  Slide,
  Spectacle
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// theme
import createTheme from 'spectacle/lib/themes/default';

// assets
import * as images from '../assets';
import Example from '../assets/example.jsx';
import ExampleSourceCode from '../assets/component.example';
import ComponentCounterSourceCode from '../assets/component-counter.example';
import jsxSourceCode from '../assets/jsx.example';
import jsxTransformSourceCode from '../assets/jsx-transform.example';

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
        notes={ `
          Let's start with some typical pain points you meet when building web-interafaces:
          - Performance: any changes to DOM, even when just reading information (getComputedStyle,
          offsetHeight) causes repaints or reflow which can be a very visible problem
          - Efficiency: because we do everything manually — creating DOM, adding events, etc. — it's
          easy to lose track of node reference or something and create memory leaks
          - Complexity: again, because we do everything manually we have to think about it all the
          time and the more complexity of our apps grow, the more time we need to support these big
          piles of shit.
          - Scalability: when people asked to add a new feature, it can be the pain in the ass and
          estimates can be enormous and inadecvate
          - Reusability: reusing UI code is not obvious, most of the people just copy-past
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 5 } textColor="heading">Problems on Frontend</Heading>
        <List>
          <Appear>
            <ListItem>
              <S type="bold">Performance</S> - DOM is slow
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Efficiency</S> - memory leaks
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Complexity</S> - hard to maintain, hard to understand
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Scalability</S> - hard to add new features and change design
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Reusability</S> - hard to reuse UI code
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Testability</S> - not trivial
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        notes={ `
          Of course, solutions exist, and it's totally possible to solve those problems, but it
          either requires a lot of manual work or using huge and slow frameworks like Ember or
          Angular
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 5 } textColor="heading">Possible solutions</Heading>
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
        <Heading size={ 2 } textColor="heading">React</Heading>
        <Image src={ images.react } width="45%" />
      </Slide>
      <Slide
        bgDarken="0.7"
        bgImage={ images.lego }
        notes={ `
          So whate does React bring to us? First of all: components, the most fundamental part of
          React, first-class citizen. It's like lego-cubes you built your interface from.
          They encapsulate DOM-structure and styles, just like templates do
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
        <Heading size={ 4 } textColor="heading">React</Heading>
        <List>
          <Appear>
            <ListItem>build UI with components like with Lego cubes</ListItem>
          </Appear>
          <Appear>
            <ListItem>encapsulated DOM structure and styles</ListItem>
          </Appear>
          <Appear>
            <ListItem>encapsulated DOM logic</ListItem>
          </Appear>
          <Appear>
            <ListItem>automated and optimized DOM interactions</ListItem>
          </Appear>
          <Appear>
            <ListItem>reusable, distributable, testable</ListItem>
          </Appear>
          <Appear>
            <ListItem>can be prerendered on the server!</ListItem>
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
        <Heading size={ 4 } textColor="heading">Thinking in components</Heading>
        <Appear><Image src={ images.componentsBefore } width="45%" /></Appear>
        { ' ' }
        <Appear><Image src={ images.componentsAfter } width="47%" /></Appear>
      </Slide>
      <Slide
        notes={ `
          Let's look at an example of React component: it has a number, an input and a button.
          If we put some color code into the input, the number will change the color.
          If we press the button, the number increases.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Component example</Heading><br />
        <Example />
      </Slide>
      <CodeSlide
        code={ ExampleSourceCode }
        lang="jsx"
        notes={ `
          Let's discover code of this component line by line.
          ...
          As you can see there are no conditions or imperative calls here — you just describe how
          your UI depends on the data and let React do the rest, also you don't have to think about
          your event handlers, React manages it for you — and this is the part where React
          leverages the power of reactive programming and it's a very powerful approach, because you
          need to think about data and your business logic, not about how you UI should be updated.
        ` }
        ranges={ [
          { loc: [ 0, 31 ], title: 'Component example: code' },
          { loc: [ 0, 1 ], note: 'We need React (duh)' },
          { loc: [ 2, 3 ], note: 'Declare component' },
          { loc: [ 6, 10 ], note: 'Initial state' },
          { loc: [ 12, 17 ], note: 'Color handler' },
          { loc: [ 18, 23 ], note: 'Number handler' },
          { loc: [ 24, 39 ] },
          { loc: [ 32, 33 ], note: 'Change input value' },
          { loc: [ 13, 16 ], note: 'Set new color state' },
          { loc: [ 24, 39 ], note: 'Rerender!' },
          { loc: [ 33, 34 ], note: 'Click the button' },
          { loc: [ 19, 22 ], note: 'Set new value state' },
          { loc: [ 24, 39 ], note: 'Rerender!' }
        ] }
        transition={ [ ] }
      />
      <Slide
        notes={ `
          So, you probably noticed that we used this weird syntax in render — what's that? XML?
          HTML? Well, that's JSX and I guess it's one of the first things that people notice and it
          grosses everybody out.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 5 } textColor="heading">JSX</Heading>
        <CodePane
          lang="jsx"
          source={ jsxSourceCode }
          style={{ fontSize: '24px' }}
        />
        <Image src={ images.ew } width="25%" />
      </Slide>
      <CodeSlide
        code={ jsxTransformSourceCode }
        lang="jsx"
        notes={ `
          But in fact JSX is just a syntactic sugar for calling React.createElement. If you don't
          like it noone forces you to use it — there are alternatives on github and you can write
          your own.
        ` }
        ranges={ [
          { loc: [ 0, 3 ], title: 'Just syntactic sugar' },
          { loc: [ 6, 11 ] }
        ] }
        transition={ [ ] }
      />
      <CodeSlide
        code={ ComponentCounterSourceCode }
        lang="jsx"
        notes={ `
          So basically there are two things that can make the component rerender. First one —
          changing the state — I shown you in this example, but state can also be external and come
          to the component through props — which is basically just like arguments in functions.
          So if we take this span from the example before, we can transform it into its own
          component, but the difference now is that it doesn't have its own state, but instead
          receives everything from the parent component through props. By the way if you don't need
          to store the state inside component, you can use function instead of class.
        ` }
        ranges={ [
          { loc: [ 0, 3 ], title: 'Nested components and props' },
          { loc: [ 6, 9 ] },
          { loc: [ 12, 19 ] }
        ] }
        transition={ [ ] }
      />
      <Slide
        notes={ `
          To illustrate how exactly this React's tree works, let's take a look at this picture.
          So you see we have the root component here that holds the state and whenever that state
          updates we can push it through props to child components and they will update as well.
          But if we have other components with state down the tree, for example, this one, only its
          children will be updated, not someone above. So because of this simplicity of one-way
          data flow and using pure functions to describe UI, it becomes much easier to reason about
          your application, easier to test it and debug.
        ` }
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size={ 5 } textColor="heading">One-way data flow</Heading>
        <Image src={ images.propsFlow } width="80%" />
      </Slide>
      <Slide
        notes={ `
          Okay, we're done with the components, their state and props and found out that jsx
          is not that scary, but what exactly happens next?
          When React component attached to the DOM, it renders for the first time and then on
          every rerender it changes only parts of the DOM that need to be changed.
          For example, if we change the color of the span it does not rerender the whole span,
          it just updates style attribute.
        ` }
        textColor="main"
        transition={ [ 'fade' ] }
      >
        <Heading size={ 4 } textColor="heading">Rerendering</Heading><br />
        <Example />
      </Slide>
      <Slide
        notes={ `
          It's possible because of this layer between our components and DOM, and it's called
          virtual DOM. It mirrors DOM to its own data structure and when rerender happens, it
          compares new render result with the old one and decides which parts of the DOM should be
          updated if any. This “diffing” called reconcilation process and it what makes React fast
          and efficient
        ` }
        textColor="main"
        transition={ [ 'zoom' ] }
      >
        <Heading size={ 5 } textColor="heading">Virtual DOM</Heading>
        <Appear><Image src={ images.vdom } width="75%" /></Appear>
      </Slide>
      <Slide
        notes={ `
          Now, I mentioned that React takes care of UI layer and while it's possible to create small
          apps purely in React, soon you might bump to the problems when trying to scale to a bigger
          app and add more feautures — something should've manage app internal state and glue all
          things together.

          So you might need a solution for state management. And there are a few reasons for that.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Application store</Heading>
        <List>
          <Appear>
            <ListItem>separate business logic from presentation</ListItem>
          </Appear>
          <Appear>
            <ListItem>optimistic updates</ListItem>
          </Appear>
          <Appear>
            <ListItem>complex client logic</ListItem>
          </Appear>
          <Appear>
            <ListItem>data persistency/cache</ListItem>
          </Appear>
          <Appear>
            <ListItem>decoupling and testability</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        notes={ `
          In React ecosystem from the very beginning there was this state management solution called
          Flux which is more of a concept than the actual library. So as always in js-ecosystem
          lots of libraries emerged until one of them appeared and basically became a standard for
          state management in React applications.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading textColor="heading">Flux</Heading>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <List>
              <ListItem>Flummox</ListItem>
              <ListItem>Alt</ListItem>
              <ListItem>Fluxxor</ListItem>
              <ListItem>MartyJS</ListItem>
              <ListItem>Fluxible</ListItem>
              <ListItem>McFly</ListItem>
              <ListItem>Delorean</ListItem>
            </List>
            <List>
              <ListItem>Delorean</ListItem>
              <ListItem>Lux</ListItem>
              <ListItem>Reflux</ListItem>
              <ListItem>OmniscientJS</ListItem>
              <ListItem>Fluxy</ListItem>
              <ListItem>Material Flux</ListItem>
            </List>
          </div>
        </div>
      </Slide>
      <Slide
        notes={ `
          This library is called Redux. It was made by a talented developer from St. Petersburg who
          is now working at Facebook in London.
        ` }
        textColor="main"
        transition={ [ 'zoom' ] }
      >
        <Heading textColor="heading">Redux</Heading>
      </Slide>
      <Slide
        notes={ `
          There are three main principles of Redux and if you understand these principles — you
          understand Redux. The rest is implementation details.
          First: you have only one store where the whole internal state of the app is held. It makes
          everything much simpler because you have only one source of truth and it becomes really
          easy to find the data you need.
          The second one is that state in that single store is read-only. You can not change it
          directly. You can change your data only through special events called actions.
          And finally all the changes are made with pure functions. They called reducers which is
          just a fancy word for functions changing data and then returning changed data back.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading textColor="heading">Three principles</Heading>
        <List>
          <Appear>
            <ListItem>
              <S type="bold">Single source of truth</S>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">State is read-only (immutable)</S>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">Changes are made with pure-functions</S>
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        notes={ `
          So data flow is essentially simple:
          UI creates actions which are being sent to reducers.
          Along the line side effects can be involved like calling an API or interacting with
          a router or a browser.
          When reducers receives an action, they transform data in the store and then that updated
          data is being sent back to UI.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Data flow</Heading>
        <Image src={ images.reduxDataFlow } style={{ backgroundColor: '#fff' }} width="65%" />
      </Slide>
      <Slide
        notes={ `
          Because of this simplicity it's easy to do awesome things like time-travel debugging and
          more. The community behind Redux is huge with helpers and middlewares — and it's actually
          possible to use Redux outside of React ecosystem since it's not bound to React in any way.
          And should I mention: the same idea applied as in React: it's all about composing small
          understandable and testable pieces.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Image src={ images.reduxDebug } width="75%" />
      </Slide>
      <Slide
        notes={ `
          It's worth mentioning that we are not talking only about browsers here. For example,
          React Blessed is a React renderer for a terminal.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Beyound DOM: React Blessed</Heading>
        <Image src={ images.reactBlessed } width="100%" />
      </Slide>
      <Slide
        notes={ `
          Another great example is React Native — it introduced React ecosystem into native mobile
          apps. It doesn't use DOM for rendering — instead it renders with native UI views, not slow
          webviews how it usually done when using web-technologies in mobile development. So you get
          all the advantages of React ecosystem, lower entry barrier, faster feature delivery and
          great developer experience with things like live-reloading and code-sharing between
          platforms — and all that with close to native performance. There is also a
          react-native-macos using React Native and Cocoa to build macOS apps. This list can be
          continued — the point is React is not about web only, it's a about this new approach of
          functional and reactive programming principles for building interfaces.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Beyound DOM: React Native</Heading>
        <Image src={ images.reactNative } width="75%" />
      </Slide>
      <Slide
        notes={ `
          There are plenty of React alternatives some of them are quite awesome too: from cycle.js
          and Preact to a whole new programming langugages like Elm. The idea is the most important
          here, though React has much better community and backed by a big company. Also: React
          hugely influenced new versions of Angular and Ember, so they're bringing some similar
          ideas like virtual dom and one-way data flow.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">React alternatives</Heading>
        <List>
          <ListItem>Cycle.js</ListItem>
          <ListItem>Preact</ListItem>
          <ListItem>Vue.js</ListItem>
          <ListItem>Om, Rum, Reagent in ClojureScript</ListItem>
          <ListItem>html and virtual-dom in Elm</ListItem>
        </List>
      </Slide>
      <Slide
        notes={ `
          The important thing to mention: adoption rate. And it's been huge for React.
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Adoption is HUGE</Heading>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <List>
              <ListItem>Facebook</ListItem>
              <ListItem>Netflix</ListItem>
              <ListItem>Airbnb</ListItem>
              <ListItem>Atlassian</ListItem>
              <ListItem>BBC</ListItem>
              <ListItem>Pinterest</ListItem>
              <ListItem>Postman</ListItem>
            </List>
            <List>
              <ListItem>Reddit</ListItem>
              <ListItem>Tesla Motors</ListItem>
              <ListItem>Uber</ListItem>
              <ListItem>Wired</ListItem>
              <ListItem>WhatsApp</ListItem>
              <ListItem>Codeacademy</ListItem>
              <ListItem>Coursera</ListItem>
            </List>
          </div>
        </div>
      </Slide>
      <Slide
        notes={ `
          As a conclusion: why react and redux:
          - automation of manual work, less chance of mistakes
          - optimising DOM interactions -> great UI performance
          - flexible, not opinionated like frameworks
          - simplifies data-flow and makes it predictable
          - declarative UI code is readable and maintainable
          - componentization is the future of web development
          - works great for teams, enforcing to follow good patterns
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Conclusion: why React and Redux</Heading>
        <List>
          <ListItem>Automation</ListItem>
          <ListItem>Performance</ListItem>
          <ListItem>Flexibility</ListItem>
          <ListItem>Predictability</ListItem>
          <ListItem>Declarativity</ListItem>
          <ListItem>Componentization</ListItem>
          <ListItem>Great for teams</ListItem>
        </List>
      </Slide>
      <Slide
        notes={ `
          Thanks!
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Links</Heading>
        <List>
          <ListItem><a href="https://github.com/facebook/react/wiki/Sites-Using-React">Sites using React</a><br /><br /></ListItem>
          <ListItem><a href="https://github.com/enaqx/awesome-react">Collection of resources about React</a><br /><br /></ListItem>
          <ListItem><a href="https://github.com/xgrommx/awesome-redux">Collection of resources about Redux</a></ListItem>
        </List>
      </Slide>
      <Slide
        notes={ `
          Thanks!
        ` }
        textColor="main"
        transition={ [ 'slide' ] }
      >
        <Heading size={ 4 } textColor="heading">Thanks!</Heading>
        <br />
        Slides:
        <br />
        <Heading size={ 4 } textColor="heading">0x-react.surge.sh</Heading>
      </Slide>
    </Deck>
  </Spectacle>
);
