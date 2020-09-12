import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['post']
}

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);