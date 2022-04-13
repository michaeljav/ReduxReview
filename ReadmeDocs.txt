Usaremos webpack 
nota:debo tener node.js
1. npm init  -y :Inicializar proyecto  de npm
2. npm i @babel/core @babel/preset-env babel-loader webpack webpack-cli webpack-dev-server :dependencias de webpack, para tener rapidamente un ambiente de desarrollo
3.crear carpeta src: crear carpeta src, porque webpack por defecto la usa


Redux: Redux allows you to manage your app’s state in a single place and keep changes in your app more predictable and traceable.

PRINCIPLES
1.SINGLE SOURCE OF TRUTH
2.STATE IS READ-ONLY
3.CHANGES ARE MADE WITH PURE FUNCTIONS

components of redux
1.Store: The store holds the application state. It is highly recommended to keep only one store in any Redux application. You can access the state stored, update the state, and register or unregister listeners via helper methods.
const store = createStore(LoginComponent);
2.Reducers:Reducers are pure functions that take the current state of an application, perform an action, and return a new state. These states are stored as objects, and they specify how the state of an application changes in response to an action sent to the store.

3.Actions: Simply put, actions are events. They are the only way you can send data from your application to your Redux store. The data can be from user interactions, API calls, or even form submissions.
store.dispatch();

4.Middleware :Redux allows developers to intercept all actions dispatched from components before they are passed to the reducer function.
