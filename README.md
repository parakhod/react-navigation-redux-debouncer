# React-Navigation Redux debouncer

This middleware resolves the common problem with React-Navigation - navigation action is called twice if you click fast enough the button that calls the navigation action.
Just add this middleware and it will block all the Navigation actions during the predefined interval after some Navigation action already called.

## Installation

__npm install -s react-navigation-redux-debouncer__

## Usage

```
import navigationDebouncer from 'react-navigation-redux-debouncer';

const store = applyMiddleware( 
  navigationDebouncer( 600 ) // debounce time in ms, 600 by default if empty
)(createStore)(reducer); 
```