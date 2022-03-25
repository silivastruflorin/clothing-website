# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Road map:
    Purpose: Learn React by creating simple clothing shop
    
## Stages:
    1. Create React App:
        - All components in one folder: !!! BAD  design!!! 
    Update: for each page (see Dashboard as example) create a folder structure: 
        - components
        - container
        - reducers
        - hooks

    2. Build the UI using `Material UI`: 
        - One home page 
        - One navigation bar
        - Two store pages: one for women and oen for men
        - One cart icon that displays a badge with the number of products in the cart
    
    Update: new page added called Dashboard. Not related to online shop but for another application. Used to test a "protected" route
    
    3. Redux:
        - create a "Store"
        - create reducers that will be holded by the "store" ( userReducer, cartReducer )
        - create actions that will be dispatched to the store ( when using connect and mapDispatchToProps / mapStateToProps )
        - Redux dev tools 

    Update: refactoring reducers to use `createSlice`
    Update: refactoring 'store' to support asynchronus reducer loading using Reducer Manager.
    
    4. Saga:
        - Refactoring the data retreiver from useEffect() to Saga
        - Middleware used to fetch data from APIs (https://fakestoreapi.com/ , firebase for authentification)
        - Implement the Watcher and the workers  

    5. Connected Router:
        - Used for navigation between pages
        - "Protected" route implemented 
    
    6. Hooks:
        - standard hooks: useState, useDispatch
        - custom hooks: useComponentSize (to get the width and height of the component even if the window is resized)

    7. Selectors:
        - use selectors to access the Store state
        - all selectors in one file:!!! To be created individual file per page

    8. 3D model added using Three.js
    


        


**Note: this is a one-way operation. Once you `eject`, you can't go back!**
