# Clean Spoon

Have you ever thrown out groceries because you didn't know what to make? 

Clean Spoon lets you track what's in your fridge, find thousands of recipes based on the food you have, and add ingredients you need to your shopping list. 

You can also reference the recipes you like with our saved recipes feature, or send your shopping list to your phone via SMS.

### Contributors

This was a group project for the Lighthouse Labs web development full-time bootcamp. Contributions by 
[Rachel Gould](https://github.com/rachelgould), [Patrick O'Connor](https://github.com/padraigoc), and [Tristan Berezowski](https://github.com/tristanberezowski).

## Development

Our basic tech stack is **Ruby on Rails** on the back-end, and **React** on the front-end. It uses external APIs from Qwant (for supplying ingredient images), Twilio (for SMS notification with shopping list), and Yummly (for searching and retrieving recipes).

## Demos

Coming soon...

## Setup

1. Fork and Clone
2. Follow below instructions to install dependencies.

In the command line:
```
bundle
cd client
npm i
cd ..
```
3. Create `config/database.yml` by copying `config/database.example.yml`
4. Create `config/secrets.yml` by copying `config/secrets.example.yml` 
5. Create `.env` by copying `.env.example`
6. Run `bin/rake db:reset` to create, load and seed db
7. Start with `rake start`

## Overview

`create-react-app` configures a Webpack development server to run on `localhost:3000`. This development server will bundle all static assets located under `client/src/`. All requests to `localhost:3000` will serve `client/index.html` which will include Webpack's `bundle.js`.

In this example, the React component `App` makes a request to an API server (`server.js`). The user's browser visits the Webpack dev server at `localhost:3000`. Then the React client communicates with the API server when needed at `localhost:3001`:

This setup uses [foreman](https://github.com/ddollar/foreman) for process management. Executing `foreman start` instructs Foreman to boot both the Webpack dev server and the API server.

## Dependencies

#### Back End:

```
* Rails
* jbuilder
* sdoc
* foreman
* postgres
* twilio-ruby
* rest-client
* dotenv-rails
* combination_generator
* combinatorics
```

#### Front End:

```
* axios
* babel
* bootstrap
* http-proxy-middleware
* react
* react-bootstrap-table
* react-cookie
* react-datepicker
* react-dom
* react-router-dom
* reactstrap
```

## Acknowledgements

Initial scaffold based on [create react app with rails API tutorial](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/) by Anthony Accomazzo.