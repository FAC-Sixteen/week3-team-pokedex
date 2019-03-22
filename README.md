# week3-team-pokedex

# PROJECT WEEK 3

![gif of roomba shark](https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif)

### The Project

Our task was to create a single page website that accessed two different api's, and used them to render information on the page utilising the DOM.

The Api's we decided to use were the [pokeApi](https://pokeapi.co/) and a [horoscope api](http://sandipbgt.com/theastrologer-api/index.html).

![rough sketch of project structure](./Planning.jpg)

We collected inspiration for the website design with the aide of 
[Figma](https://www.figma.com/file/IwGkeKIsYCeCMWVywU5epoIY/Pokemon-API?node-id=0%3A1).Our design centred around the pokemon pokedex. 

We had to look at a few api's to do the horoscrope, and we ended up having to abandon the [one](http://zodiacal.herokuapp.com/) we were originally going to use becuase it wasn't working.

---

### How to set up our project

1. git clone `https://github.com/FAC-Sixteen/week3-team-pokedex.git`
2. cd into the file
3. `npm i` to install dependencies
4. you can run tests with `npm test`

One of our api's used http while github pages uses https, this means that the browser will automatically block the api. Disable this by clicking the litle i on the far left of the browser bar and disabling the protection.

---

### What did we struggle with?

![slap](https://media.giphy.com/media/w5FSoU86sXRFm/giphy.gif)

-problems with respect to scope re eventListener function
    - JSON object only "existed" in the GET request
    - so we concluded that we needed to do all our DOM functionality within the scope of said request

![meme about require](https://i.imgur.com/C94GoCY.png)

---

### What did we learn?

![detective pikachu](https://media.giphy.com/media/NS7gPxeumewkWDOIxi/giphy.gif)

- Query Selector is superior most of the time
    - but, re elems we created we ended up needed a *live* node list. 
- callbacks within callbacks
- testing with api's is not a thing
- callbacks, writing functions with callbacks
- getting better at writing more modular code + writing handler functions

---

### Stretch goals

- allowing the user to enter their date of birth
- allowing users to select the generation of the pokemon they are given
- showing both type and subtype of the pokemon
- assigning multiple types to certain star signs so that all pokemon types can be gotten :heavy_check_mark: 

---

![all done](https://i.imgur.com/i1IwkRL.gif)
