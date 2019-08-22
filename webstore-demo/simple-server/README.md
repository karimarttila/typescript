# Typescript/Node Simple Server  <!-- omit in toc -->

## Table of Contents  <!-- omit in toc -->
- [WORK IN PROGRESS!!!](#work-in-progress)
- [Introduction](#introduction)
- [Technical Description](#technical-description)
- [Disclaimer](#disclaimer)
- [Node Development](#node-development)
  - [Visual Studio Code](#visual-studio-code)
  - [Basic Tools - Nvm, Npm and Node](#basic-tools---nvm-npm-and-node)
  - [Npm Installations using Yarn](#npm-installations-using-yarn)
  - [Express](#express)
  - [Static Code Analysis - TSLint](#static-code-analysis---tslint)
  - [Unit Testing - Mocha](#unit-testing---mocha)
  - [Command Line](#command-line)
  - [Hot Code Reloading](#hot-code-reloading)
  - [Node REPL](#node-repl)
  - [Visual Studio Debugger](#visual-studio-debugger)
- [Documentation Generation](#documentation-generation)
- [Testing](#testing)
- [CORS](#cors)
- [Simple Frontend](#simple-frontend)
- [Session Handling](#session-handling)
- [Building for Production](#building-for-production)
- [Conclusions](#conclusions)
  - [Typescript Syntax](#typescript-syntax)
  - [Asynchronous Programming Model](#asynchronous-programming-model)
  - [Functional Paradigm](#functional-paradigm)
  - [Learning Curve](#learning-curve)
  - [Tooling](#tooling)
  - [REPL](#repl)
  - [Developer Productivity](#developer-productivity)
  - [Testing](#testing-1)
  - [Error Messages](#error-messages)
  - [Typescript as a Language](#typescript-as-a-language)
  - [Typescript / Node vs. Clojure / JVM](#typescript--node-vs-clojure--jvm)
  - [Typescript vs. Python](#typescript-vs-python)
  - [Typescript and Node - Is There a Place in My Toolbox for Them?](#typescript-and-node---is-there-a-place-in-my-toolbox-for-them)
  - [What Next?](#what-next)

## WORK IN PROGRESS!!!

TODO: I remove this chapter once this exercise is done.

## Introduction

I did this exercise because I wanted to learn Typescript/Node for implementing various services I might need to implement using Typescript/Node in my future cloud projects (and actually I just started a new assignment and the team is using Typescript). Typescript/Node is widely used and especially in projects where there are younger developers they tend to favour Javascript - so, it is beneficial to be competent also in Javascript/Node and also using typed Javascript - i.e. Typescript, so that all team members can use the same language. 

This Simple Server is implemented using Typescript and Node. The functionality of the Simple Server is basically the same as in my other Simple Server implementations (in Java, Javascript, Clojure, Python and Go at the time writing this README). Therefore, the rationale for this Javascript / Node Simple Server is to learn Javascript and Node and how to implement a REST server using those technologies. I also want to learn to use various Javascript/Typescript/Node related tooling and ecosystem.

So, the idea was to replicate the API of the previous Simple Server implemented in Clojure so that you can use the same [Clojure Simple Frontend](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-frontend) to demonstrate the Typescript / Node Simple Server (the REST API is the same - you can use either server serving the Simple Frontend). This way it is also interesting to compare the various Simple Servers I have implemented previously in different languages.

I also try to replicate the Clojure namespace structure to the equivalent Node structures so that it is easy to compare various parts of the application (e.g. Node: [server.ts](src/webserver/server.ts) vs. Clojure: [server.clj](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/webserver/server.clj) ).

I also wrote a bit more concise summary in my [Medium blog](https://medium.com/@kari.marttila/TODO) compared to the longer text you can find here in this readme.md.

## Technical Description

Simple Server is implemented using [Typescript](https://www.typescriptlang.org/) and [Node](https://nodejs.org/en/).

The web framework used to implement the Simple Server is [express](https://expressjs.com/). I use Express with Typescript types.


## Disclaimer

This is not a top-class example how to implement a REST server using Typescript / Node. This server is my first real Typescript / Node project and I implemented it just for learning purposes. Therefore a seasoned Typescript / Node developer surely finds a lot of issues in the code that could have been implemented in a more efficient way. I'm going to learn more Typescript/Node in my future projects and be more efficient in the future. However, I'm pretty seasoned backend developer and the Typescript/Node web server follows certain backend good practices (extensive logging, good unit tests etc.).


## Node Development

### Visual Studio Code

While learning Javascript and Node I decided to use [Visual Studio Code](https://code.visualstudio.com/) as my editor when implementing this REST server. 

These are Visual Studio Code extensions that I found useful while working with this project:

- Emacs Friendly Keymap - Yes, I use emacs keymap in all of my editors.
- ESLint - A Javascript linter.
- Markdown All in One - An excellent extension while working with md files (like this one).
- Rainbow CSV - An extension to see CSV files in a columnar fashion.
- TSLint - A Typescript linter.


### Basic Tools - Nvm, Npm and Node

I understood that [Node Version Manager - nvm](https://github.com/creationix/nvm) is the way to go for managing different Node versions in your developer workstation. Nvm installs the Node versions you are going to need and also compatible npm versions. I don't want to install extra stuff in my Ubuntu home directory so I followed [How to Install nvm outside the User Directory](http://octopusinvitro.tk/blog/code-and-tech/how-to-install-nvm-outside-user-directory/) instructions. 

So, after installing nvm you can install the [Node](https://nodejs.org/en/) (and [npm](https://www.npmjs.com/)) versions you need. 


### Npm Installations using Yarn

I use [Yarn](https://yarnpkg.com/lang/en/) package manager instead of [npm](https://www.npmjs.com/). The reason for that is not that I favor Yarn over Npm but just because my current team is using Yarn and I wanted to have it in this personal project also for learning purposes.

This is a one time task and the local npm packages can be read in the [package.json](package.json) file (and the actual packages are in the node_modules directory, of course, not in the Git repo, you need to install them yourself, see later). So, you don't have to do this part, I just documented these steps for myself. First create package.json using command "yarn init".

Then install the following packages (using command ```yarn add <package>```):

- debug
- morgan
- express
- ...

Install also the dev tools I used (using command ```yarn add -D <package>```):
- nodemon
- eslint
- ...

See [yarn docs](https://yarnpkg.com/lang/en/docs/) for more information how to use Yarn.

If you have cloned this repository you can install all these packages using command "yarn" (which reads the [package.json](package.json) file and installs everything there).

TODO - JATKA TÄÄLTÄ...

### Express

The web framework used to implement the Simple Server is [express](https://expressjs.com/). I was pretty amazed how easy express was to use. Most of the things just worked out of the box, e.g. CORS which wasn't that easy in the Clojure side. Creating the routes was really easy. Also parsing the http request headers, parameters and body was really easy. Creating the http response body was also just a matter of setting http status code and returning the json structure that was created by the domain layer.

See more in [server.ts](src/webserver/server.ts).


### Static Code Analysis - TSLint

I used [TSLint](https://www.npmjs.com/package/tslint) TODO.

I also used the [TSLint extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) in Visual Studio Code. 



### Unit Testing - Mocha

I googled which frameworks are the most popular unit testing frameworks to be used with Node and [Mocha](https://mochajs.org/) seemed to be the one. 

See unit tests that I implemented as an exercise in the [test](./test) directory.

Run unit tests with command: "yarn test". Some examples:

```bash
SS_LOG_LEVEL=error yarn test => Run all tests with error level logging (switch to "trace" and you see all logging).
SS_LOG_LEVEL=trace ./node_modules/.bin/mocha --grep "GET /product-groups" test/webserver/server.ts  => Run one test with trace logging level.
```

Mocha was a real suprise to be used with Typescript/Node - must be one of the easiest and intuitive unit testing frameworks I have ever used in any language.


### Command Line

Start server in command line: 

```bash
SS_PORT=4045 SS_LOG_LEVEL=trace node src/core.ts  => Starts the server with trace logging level and listening port 6666.
```

### Hot Code Reloading

You can use [nodemon](https://github.com/remy/nodemon) to watch any changes in your code base and automatically restart your node server - excellent during development.

```bash
SS_PORT=4045 SS_LOG_LEVEL=trace yarn start
```


### Node REPL

Node REPL is pretty good, a bit like Python REPL, but not anything like a real Lisp REPL, of course. You can also use excellent [ts-node](https://www.npmjs.com/package/ts-node) and [ts-node-dev](https://www.npmjs.com/package/ts-node-dev).

TODO: Examples here.

When comparing Node and Clojure REPLs, Clojure wins this round hands down. The Lisp REPL is a real REPL compared to code snippet REPLs of Javascript and Python. See e.g. integrated [Cursive REPL](https://cursive-ide.com/userguide/repl.html) in IDEA (my favorite). If you have never used a real Lisp REPL you just don't understand how enormously productive it can be to interact with the program you are developing.

But since we have to use the Node REPL when implementing Node application I really would like to learn how to use the Node REPL in a more efficient way. E.g. to reload modules etc. It would be also great to learn how to use Visual Studio Code efficiently with Node REPL like I use Clojure REPL in Cursive (e.g. in editor sending functions for evaluation to REPL).


### Visual Studio Debugger

TODO: check this.

Visual Studio Debugger is pretty nice. I experimented that you can easily debug a module by adding the function you want to debug at the end of the module and start the module in debugger. Breakpoints etc. work as in other languages / IDEs. But afterall a poor substitute for a live Lisp REPL.

I also managed to configure my [launch.json](.vscode/launch.json) after some googling so that I can debug my Mocha unit tests in Visual Studio Code debugger. The debugger worked nicely with breakpoints and all usual debugger stuff. Start VSCode debugging session like this:

- Create [launch.json](.vscode/launch.json) configuration.
- Start VSCode. Click debugger (bug) icon.
- You see the debugger launch configurations in the upper left corner. Choose one and start (green triangle icon). 
- Add breakpoints and see what happens.

Overall feeling of the Visual Studio Debugger is that it is just as good as e.g. IntelliJ PyCharm (Python) debugger.

## Documentation Generation

TODO: Check this.

You can easily generate the documentation with command: 

```bash
./node_modules/jsdoc/jsdoc.js -r src -d jsdoc-gen
```


## Testing

TODO: Re-write for Typescript.


## CORS

TODO.



## Simple Frontend

For demonstration purposes you can use the [Simple Frontend](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-frontend) I implemented earlier using [ClojureScript](https://clojurescript.org/). 

If you are not able to build the ClojureScript application you can just untar the [public-demo.tar.gz](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-frontend/public-demo.tar.gz) file I provided which comprises a full working Simple Frontend application. See Simple Frontend [README.md](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-frontend) for further instructions.

You can use e.g. Python2 to start the Simple Frontend:

```bash
cd <to this public-demo directory>
python -m SimpleHTTPServer
```


## Session Handling

Session handling is pretty straightforward, basically I just copied the idea from my previous Clojure version of the Simple Server.

See [session.ts](src/webserver/session.ts) which has two public functions: createJsonWebtoken and validateJsonWebToken. The session validation between Simple Server and Simple Frontend is handled using [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token). In this Javascript/Node Simple Server version I used the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) library.


## Building for Production

Since this was an exercise I didn't have now time to check how the application should be build for production. I googled this a little bit and there seems to be certain tools that you can use in production environment with Node applications, e.g. [PM2](http://pm2.keymetrics.io/). 


## Conclusions


### Typescript Syntax

TODO.

### Asynchronous Programming Model

TODO.

### Functional Paradigm

I tried to use [Ramda](https://www.npmjs.com/package/ramda) functional immutable library as much as I could to learn to use it since my team is currently using it and I wanted to learn to use it fast.

TODO.


### Learning Curve

TODO.


### Tooling

TODO.


### REPL

TODO.



### Developer Productivity

TODO.

### Testing

TODO.


### Error Messages

TODO.



### Typescript as a Language



### Typescript / Node vs. Clojure / JVM

TODO.

### Typescript vs. Python

TODO.



### Typescript and Node - Is There a Place in My Toolbox for Them?

**Backend.** TODO.

**Frontend.** TODO.


### What Next?

TODO.
