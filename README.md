Synopsis

This project creates a template for creating React apps. User should be able to copy this directory and jump right into writing vanilla React with CSS support, fully configured webpack and flushed out .gitignore file.

This comes with Firebase installed. If using another Database, remove Firebase from HTML script and package.json dependencies.

Steps before Use:

Change 'name' in package.json and other noted fields to match your project

Check dependencies in package.json - make sure you aren't missing any or have any extra

run npm init in project directory

run npm install in project directory


Scripts:

npm start = "node server.js"

npm run dev = "webpack -d && cp src/index.html dist/index.html && cp -R src/app/img dist/app && webpack-dev-server --content-base src/ --inline --hot"

npm run postinstall = "webpack -p && cp src/index.html dist/index.html && cp -R src/app/img dist/app"
