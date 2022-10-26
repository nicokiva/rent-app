# The project

The project consist on a NodeJS app server and a ReactJS & TS client side.

## Installation & start

There are two apps to start:

- NodeJS server: inside `/server` do `npm i && npm start`.
- Frontend: inside `/frontend` do `npm i && npm start`.

### Technical decisions

- Create React App: it is a package which helps with the setup of React applications. CRA generates the environment so that the developer is able to work with minimal setup. As the app does not require any complex setup, CRA was chosen instead of doing everything manually.
- TypeScript: TS is a subset for JavaScript. It adds types and make the code more predictable in the way that developers know the type of each var.
- Material UI: it is a library that provides already developed & reusable components. Its inclusion is to minimize the development of new components by adding a production made library.
  Each component is wrapped inside an internal component (an internal component includes the external) so that in case of change, the component does not need to removed everywhere, only updating the internal component is enough.
- Cypress: it is a robust library used to create automated tests. It is very easy to use and provides many functionalities.

## Testing

Unit tests are only available in client side.
