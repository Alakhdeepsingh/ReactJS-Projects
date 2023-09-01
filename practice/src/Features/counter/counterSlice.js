// Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.
// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0,
  name: "systum",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// In Redux, creating a slice using createSlice from @reduxjs/toolkit is a convenient way to define the structure of your Redux store, including its initial state, reducers, and action creators. It simplifies many aspects of traditional Redux setup by providing a standardized way to manage your state, reducing boilerplate code, and offering immutability through the use of the Immer library. Here are the benefits of creating a slice using createSlice:
// Reduced Boilerplate Code: With createSlice, you don't need to write separate action type constants, action creators, and switch case statements for each reducer. It automatically generates action types and action creators based on the names of your reducer functions.
// Immutability Made Easy: createSlice utilizes the Immer library, which allows you to write code that looks like you're directly modifying the state, but under the hood, it produces a new immutable state. This makes it much easier to work with your state without the complexities of manual immutability management.
// Structured and Predictable: createSlice enforces a clear structure for your reducers and state. By following the guidelines set by createSlice, your codebase becomes more organized and predictable.
// Automated Action Type Generation: You don't need to manually generate action type strings for each action. createSlice generates them based on the reducer function names and slice name.
// Action Creator Generation: createSlice automatically generates action creator functions for each reducer, making it simple to dispatch actions.
// Encourages Best Practices: createSlice encourages the use of the "reducer-first" approach, which focuses on the logic inside the reducer functions rather than having logic scattered across different parts of your application.
// Easy Integration: Since createSlice is part of the Redux Toolkit, it integrates seamlessly with other Redux Toolkit features like the configureStore function, which sets up your Redux store with sensible defaults.
// Type Safety: TypeScript support is built into Redux Toolkit, so you get automatic type inference for your actions and state.
// In your example, the counterSlice you've provided is a simple counter slice with increment, decrement, and increment by amount actions. These actions are automatically generated, and you can dispatch them to modify the state. The code is concise, and it encapsulates all the necessary parts of managing this slice of the Redux state.
// By using createSlice, you're leveraging Redux Toolkit's capabilities to make your Redux codebase more maintainable, readable, and efficient. It's especially beneficial for larger and more complex applications, where manual setup and management of actions and reducers can become cumbersome.
