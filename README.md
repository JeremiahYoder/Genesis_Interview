# Frontend-React-Native-challenge


# Installation
- Install npm packages
  ```
  yarn install
  ```
- Install iOS dependencies
  ```
  cd ios && pod install
  ```
- Run the android
- Create  custom hook in a new file that fetch data from a url using [react-query](https://react-query-v3.tanstack.com/) 
- Use the following endpoint: `https://jsonplaceholder.typicode.com/users`
- And then use FlatList to display a List inside the App.js

# Prompt

Implement a custom pull-to-refresh component in React Native that can be added to any scrollable view. The component should display a loading spinner and release to refresh text when the user pulls down on the scroll view, and then make a callback to a provided function when the user releases the pull and the refresh action is completed. The component should also handle the case where the refresh action fails and display an error message to the user.

