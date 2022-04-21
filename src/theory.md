https://github.com/sudheerj/reactjs-interview-questions#what-is-react
1. What is React?
React is a Javascript library used for building user interfaces especially for single page application.
2. What are the major features of React?
    - it uses Virtual DOM instead of Real DOM beacuse updating the entire Real DOM is expensive
    - supports server-side rendering
    - follows Unidirectional data flow or data binding
    - uses reusable/composable UI components to develop the view


3. What is JSX?
    JSX stands for Javascript XML. We can mix HTML and Javascript.

4. What is the difference between Element and Component?
    An element is just a plain object decribing what you want to appear on the screen in terms of DOM nodes or other components.Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

    Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output

5. How to create components in React?
There are 2 possible ways to create components in React:
    - functional components  Those are pure JavaScript functions that accept props object as the first parameter and return React elements
    - class components: You can also use ES6 class to define a component. 

6. When to use a Class Component over a Function Component?
If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *

7. What are Pure Components? 
React.PureComponent is exactly the same as React.Component that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent
will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box.Thus, the component will re-render by default whenever shouldComponentUpdate is called.

8. What is state in React?
    State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

9. What are props in React? 
    Props are inputs to components. They are ssingle values or objects containing a set of values thata are passed to components on creation using a naming convention similar to HTML tag atributes. They have data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality
        - pass custom data to your component
        - trigger state changes
        - Use via this.props.reactProp inside component's render() method.

10. What is the difference between state and props?
Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

11. Why should we not update the state directly?
    If you try to update the state directly then it won't re-render the component.

    Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

12. What is the purpose of callback function as an argument of setState()?
The callback function is invoked when setState finished and the component gets rendered.Since setState() is asynchronous the callback function is used for any post action.

13. What is the difference between HTML and React event handling?
    Below are some of the main differences between HTML and React event handling,

    - In HTML, the event name usually represents in lowercase as a convention:
    <button onclick='activateLasers()'>
    Whereas in React it follows camelCase convention: <button onClick={activateLasers}>

    - In HTML, you can return false to prevent default behavior:
    <a href='#' onclick='console.log("The link was clicked."); return false;' />

    Whereas in React you must call preventDefault() explicitly:
    event.preventDefault()

    - In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. (refer "activateLasers" function in the first point for example)

 14. How to bind methods or event handlers in JSX callbacks?
There are 3 possible ways to achieve this:
    - Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.
    - Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.
    - Arrow functions in callbacks: You can use arrow functions directly in the callbacks.
    Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

15. How to pass a parameter to an event handler or callback?
    You can use an arrow function to wrap around an event handler and pass parameters

16. What are synthetic events in React?
    SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

17. What are inline conditional expressions?
    You can use either if statements or ternary expressions which are available from JS to conditionaly render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.

18. What is "key" prop and what is the benefit of using it in arrays of elements?
    A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

19. What is the use of refs?
    The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

20. How to create refs?
    There are two approaches:
    -   This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.
    - You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,

    You can also use refs in function components using closures. Note: You can also use inline ref callbacks even though it is not a recommended approach.

21. What are forward refs?
    Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

22. Which is preferred option with in callback refs and findDOMNode()?
    It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

23. Why are String Refs legacy?
    If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like ref={'textInput'}, and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, and are considered legacy. String refs were removed in React v16.

24. What is Virtual DOM?
    Virtual DOM is an in-memory representation of the Real DOM. The representation of a UI is kept in memory and synced with the 'real' DOM. It's a step that happens between render function is called and the displaying of elements on the screen. This entire process is called reconciliation.

25. How Virtual DOM works?
    The Virtual DOM works in three simple steps.
    - Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
    - Then the difference between the previous DOM representation and the new one is calculated.
    - Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

26. What is the difference between Shadow DOM and Virtual DOM?
    The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

27. What is React Fiber?
    Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

28. What is the main goal of React Fiber?
    The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

    Its main goals are:

    - Ability to split interruptible work in chunks.
    - Ability to prioritize, rebase and reuse work in progress.
    - Ability to yield back and forth between parents and children to support layout in React.
    -  Ability to return multiple elements from render().
    -  Better support for error boundaries.

29. What are controlled components?
A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

For example, to write all the names in uppercase letters, we use handleChange as below,
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}