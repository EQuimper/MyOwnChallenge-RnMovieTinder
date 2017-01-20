import { TOGGLE_MODAL_INFO } from './actions';

const INITIAL_STATE = {
  modalInfoShow: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_INFO:
      return { ...state,
        modalInfoShow: !state.modalInfoShow
      };
    default:
      return state;
  }
};
