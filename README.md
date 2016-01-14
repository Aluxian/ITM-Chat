# IT Marathon Chat

IT Marathon Chat is a project I've developed in a 12 hours competition. It's actually a desktop app, which runs on node-webkit.

## Details 

The chat server is a socket.io listener on node.js.

The client side (which runs on node-webkit) uses AngularJs, Foundation 5 and Less for css prepocessing.

The database is MongoDB.

## Run it

    $ # Install dependencies
    $ cd ./chat_server && npm install

    $ # Start the chat server
    $ node ./chat_server/app.js

    $ # Install dependencies
    $ npm install && bower install

    $ # Run the client
    $ grunt run

    $ # Package the app
    $ grunt build

## Source

The project is based on the [angular-desktop-app](https://github.com/jgrenon/angular-desktop-app) repository.
