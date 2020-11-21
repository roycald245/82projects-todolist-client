import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from '../../api/todosAPI';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    error: null,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    appendItems: (state, action) => {
      state.items += action.payload;
    },
    updateField: (state, action) => {
      state.flags.field = action.payload;
    },
    toggleAggs: (state) => {
      state.flags.aggregated = !state.flags.aggregated;
    },
    toggleRaw: (state) => {
      state.flags.raw = !state.flags.raw;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTodos,
  updateField,
  toggleAggs,
  toggleRaw,
  appendItems,
  setError,
} = todoSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch();
//   }, 1000);
// };

export const fetchTodos = () => async dispatch => {
  try {
    const todos = await getTodos();
    dispatch(setTodos(todos));
  } catch (err) {
    dispatch(setError(err));
  }
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectItems = (state) => state.todo.items;
export const selectFlags = (state) => state.todo.flags;
export const selectColumns = (state) => state.todo.columns;
export const selectField = (state) => state.todo.flags.field;
export default todoSlice.reducer;
