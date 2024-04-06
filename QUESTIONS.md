1. What is the difference between Component and PureComponent?
   Give an example where it might break my app.

- The difference is that PureComponent performs better the `shouldComponentUpdate()` method avoiding unecessary or unitentional re-renders on state or props changes.
- I think an example of breaking the app, is when we have some child components built with Component class and making a lot of unecessary re-renders or even causing a infinite loop or memory leak.

2. Context + ShouldComponentUpdate might be dangerous. Why is
   that?

- I think it's because ShouldComponentUpdate compare state and props to check if should re-render and the Context doesn't pass data exactly as props as a convencional props of a component, so that combination it's not a good practice.

3. Describe 3 ways to pass information from a component to its
   PARENT.

   - Through a callback function
   - Through ContextApi / global state
   - Through event/socket or something like that

4. Give 2 ways to prevent components from re-rendering.

   - Memoaize data calculation or complex functions properly with their dependencies correctly
   - Avoid create/change unecessary states

5. What is a fragment and why do we need it? Give an example where it might break my app.

   - It's a way to enable create a block of JSX/"HTML" code without need to add an extra element.

6. Give 3 examples of the HOC pattern.

   - AuthenticationProvider which would help to check if should show the child pages or components or something unauthorized.
   - A Container/Context component which uses other reusable components
   - A ToastProvider which enables to use the hook `useToast()` on any child component

7. What's the difference in handling exceptions in promises,
   callbacks and async…await?

   - The difference it's with `async…await`we need to implement a try/catch to handle errors, and promises we have the methods `then()` and `catch()` from the promises itself to deal with success or errors.

8. How many arguments does setState take and why is it async.

   - setState takes two arguments: value and callback func(optional)
   - And it's async because React use a way to batching all the setState calls to ensure that is calling only one setState behind the scenes and avoid unecessary re-renders.

9. List the steps needed to migrate a Class to Function
   Component.

   - I think there's not a specific way to do that, it will depend of each component. But a example would be: A component that perform a api call on component mount life cycle method, and thinking on migrate to functional would necessary use useEffect to perform that call at the same way when component get rendered.

10. List a few ways styles can be used with components.

    - Styled component (CSS-in-JS)
    - Pre-processors (SASS, LESS) with classNames
    - Pure CSS files with classNames
    - Inline styles on HTML tags

11. How to render an HTML string coming from the server.

    - We should call this api request before the component render, store the result and then render on component return embraced by any html tag.
