A simple adventure game by Reese Garcia based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Demo1, Demo2, Demo3, Demo4.
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Added a method that plays a fading tween when an item is acquired.
    - Enhancement 2: Added a method that plays a shaking tween when player tries to click inaccessible item.
    - Enchancement 3: Added a method that plays a pulsing tween to easily spot clickable items

Experience requirements:
- **4+ locations in the game world**: Shore, Forest, Cove, Peak.
- **2+ interactive objects in most scenes**: On the Intro and Outro scenes, there is a word that must be
clicked to move to the next scene. In the game itself, there are items scattered around that the player
can collect. There are also special objexts that the player can interact with multiple times.
- **Many objects have `pointerover` messages**: Each object in the game will provide a bried description
of that object to the player. This will either let them know a certain objective or provide a hint for
how to use an item.
- **Many objects have `pointerdown` effects**: When items are clicked, they will be transfered to an inventory.
Other objects can be interacted with to exchange items or solve certain puzzles.
- **Some objects are themselves animated**: Most objects have a stationary puslsing animation to inform the
player they can be interacted with. Another type of animation will play when a player clicks on items that
they can acquire.

Asset sources:
- Most assets were created by me using [Piskel](https://www.piskelapp.com/.)
- The backgrounds for each scene were created by me using [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
- The icon for the monkey was used from [flaticon](https://www.flaticon.com/free-icon/monkey_3195966?term=monkey&related_id=3195966) and modified using [Pixlr](https://pixlr.com/e/)
- The icon for the toolbox was used from [flaticon](https://www.flaticon.com/free-icon/tool-box_2276313?term=toolbox&page=1&position=1&origin=search&related_id=2276313) and modified using [Pixlr](https://pixlr.com/e/)

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.