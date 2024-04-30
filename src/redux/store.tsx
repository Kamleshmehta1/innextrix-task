import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat();
  },
});

store.subscribe(() => {
  // console.log(JSON.parse(JSON.stringify(store.getState())));
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
