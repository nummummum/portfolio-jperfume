import { createActions, handleActions } from 'redux-actions';
import { MenuState } from '../../types';

const initialState: MenuState = {
  state: false,
};

const prefix = 'jes-perfume/openMenu';
export const { change } = createActions('CHANGE', { prefix });

const reducer = handleActions<MenuState, boolean>(
  {
    CHANGE: (state, action) => ({
      state: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;
