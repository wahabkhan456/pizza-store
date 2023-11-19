# Pizza Store Inc.

Ever felt the need for pizza 2 or 3 am in the morning,  when the world is sleeping? We understand your needs, we feel 'em too!

You have our word, anytime, anywhere!

# Requirements

1. node
2. yarn or npm

# Execution

1. yarn or npm i (For installation of node_modules)
2. yarn start/ npm start (For running the web app).

# Phase 2 

This section includes the enhancements and optimizations that are ideal for me (and even more optimization can be done, which I'm sure about since there will always be room for performance improvement), but due to unfavourable circumstances, was not able to execute to the fullest (though I have managed to cover most of them).

1. At the architectural level, as we have moved towards the microservice architecture moving away from the monolithic architecture, it is better (for smaller projects) to follow the same. Microservices tend to be loosely coupled and a plug and play mechanism to run websites, also if one is down, the other has a chance of still being up.

2. Uding functions instead of classes, as functions execute faster than the latter. As the world is moving more towards functional programming, I feel taking advantage of the same via hooks gives a long term boost to the app.

3. Using a global state architecture (only for complex projects) to manage the states effeciently as well as use redux-saga over other similar libraries such as redux-thunk or redux-promise-middleware, 

Since saga has additional features for example Javascript's throttle and debounce (Example, suppose we have a button and the user clicks the button but isnt sure if he has pressed it, or if there is no loader to show him the same, or if the api isnt returning the response and there is no error handling, he would suppose end up clicking it 8 times continuously. In order to save the crashing and the unnecessary load on the api server, the throttle and debounce mechanism would pick this up and execute the click only once. Helpful feature! )

4. Optimizing the webpack.config.js file if using a custom or an ejected project, to be able to manage features like splitting data into chunks, etc.

5. Using latest react features like React.Suspense and React.Lazy which makes sure data only loads and is requested from the server only when there is a need to show it.

6. Using useMemo with hooks and PureComponents with classes, to have React only render the component when there is a prop or state change within the component and thus save unnecessary rendering and lag.

7. To have components as reusable and little in code as possible, to have readability, modularity and optimization as a result of the first two benefits.

8. To have proper folder structures (which again improves modularity and readability).

9. To not mutate data while updating the store, since it takes a toll on the performance. Use ES6 features like a spread operator for shalllow copying or libs like Immer if you have cumbersome and nested state objects and want to mutate data immutably.

10. Lastly, to create production builds, would recommend creating a dist/build folder using npm run build (provided by default for create-react-app projects) rather than the pm2 tool on linux servers.

## Great, thanks!

## Enjoy!