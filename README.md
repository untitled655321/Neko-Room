# Neko Room 24 mmo web browsere game server

Neko Room 24 mmo web browsere game server

---

**UPDATE:**
---

## Requirements
- NodeJS / NPM
- Socket.IO
- ExpressJS

## Getting started
- Clone the source code from Github
- Run `npm install` to install needed packages
- Writing your code in `server/server.js` and `client/js/game.js`
- Run your game server with `npm start` command

## Server side
You can write all the server side code in `server/server.js`

```
io.on('connection', function (socket) {
  console.log("Somebody connected!");
  // Write your code here
});
```

## Client side
For writing client side code, find `client/js/game.js`

There are 3 method to process your client logic: `handleNetwork`, `handleLogic` and `handleGraphics`

`handleNetwork` is where you receive and process all messages sent from Server:

```
Game.prototype.handleNetwork = function(socket) {
  console.log('Game connection process here');
  console.log(socket);
  // This is where you receive all socket messages
}
```

The `socket` is the connection object of your game client, use this to communicate with the server.


`handleLogic` is where you update your game logic (handling input, update game information,...)

```
Game.prototype.handleLogic = function() {
  console.log('Game is running');
  // This is where you update your game logic
}
```

`handleGraphics` is where you draw your game:

```
Game.prototype.handleGraphics = function(gfx) {
  // This is where you draw everything
}
```

## License

This project is licensed under the terms of the MIT license. You can read the full license in `LICENSE.md`
"# Neko-Room-24" 
"# Neko-Room-24" 
"# Neko-Room" 
