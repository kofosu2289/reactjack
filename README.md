# ReactJack

This is a blackjack app built using ES6 classes as and few helper functions for game logic which are then passed to [React](https://facebook.github.io/react/) as a view layer. The build tool used is [Webpack](https://webpack.github.io/).

<p align="center">
    <img src="https://media.giphy.com/media/3ohzdQUcLBMpfxdAe4/giphy.gif" alt="ReactJack GIF">
</p>

### Details 
- Dealer must hit on soft 17
- Single Deck, The deck is shuffled every 6 rounds
- Player is not allowed to split cards
- Keep track of win percentage

### Getting Started
**Step 1**. Make sure that you have [Node.js](https://nodesjs.org) v6 or newer and ideally [Yarn](https://yarnpkg.com) installed on your machine (npm is fine too).

**Step 2**. Clone this project: <br />
 `git clone https://github.com/kofosu2289/reactjack.git`

**Step 3**. Install project dependencies listed in `package.json` by running `yarn install` or `npm install`

**Step 4**. Compile and launch the app by running: <br />
`yarn start` or `npm start`

**Step 5**. Open the app at [http://localhost:8080](http://localhost:8080)

### Tests
To run tests, run `yarn test:watch` or `npm test:watch`, `:watch` being an option.

### Documentation
To see documentation run `yarn docs` or `npm run docs`.

### Demo
Will be filled in later

### Sources
Aside from third-party code listed in `package.json`, this third-party material/tools is used:

- [Noise Texture Generator](http://www.noisetexturegenerator.com/) for background
- [CSS3 Patterns Gallery](http://lea.verou.me/css3patterns/#argyl) as the face down card background pattern
- [Fontello](fontello.com) for icon font generation
- [Texture from DeviantArt](http://nortago.deviantart.com/art/Bg-Texture-wood-38841113) for table edge background

### To-do
- [ ] Write more tests
- [ ] Potentially further encapsulate game logic in the Game class
- [x] Optimize for mobile / small screen
- [x] Implement main layout based on Flexbox
- [ ] Implement better production build (image optimization, index.html,...)
- [ ] Animate dealer's second card flip
- [x] Animate game outcome; deck score
- [ ] Implement nicer card design (inspired by [http://helveticards.ryanmyers.me/](http://helveticards.ryanmyers.me/))