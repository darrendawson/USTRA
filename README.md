# USTRA
## Universal Source of Truth for React Apps

Ustra is a method for standardizing/consolidating how a React app updates data that needs to be available across multiple components.
For data that needs to be widely available (and modifiable) across your React project, you want to keep it in App.state and pass it to other components through props.
Unfortunately, that means that you'll also need to create custom functions to update different parts in your App.state.

Ustra is designed to consolidate all those custom update functions into one function in App.js.
Any component in your project - no matter how nested - will be able to call your update function in the same way. This adds simplicity and portability to cross-component interactions.


## How to Use:

1. Declare the structure of what your App.state will look like  
  - A path tag is a unique ID for a parameter in App.state

2. Pass that data skeleton in to Ustra.
  - Ustra will create a lookup table so it can efficiently find nested parameters using only a path tag.

3. Add object from Ustra to App.state
4. Pass Ustra values, their path tags, and App.update() to components in your app.
  - When a component needs to update a value, call props.update(new_value, path_tag)
    Ustra will handle updating that value in App.state, and React will permeate that change throughout the app.


## Trade Offs
For Ustra to work, every key in App.state has to be unique and known in advance.
Ustra doesn't support dynamically adding in new parameters into your App.state.

Additionally, App.js will have significant overhead related to Ustra.
 - Path Tag declarations
 - Data Skeleton

For projects with a lot of distinct values, this can add an extra hundred lines of code to App.js.
