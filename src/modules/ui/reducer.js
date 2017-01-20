import { OPEN_MODAL_INFO, CLOSE_MODAL_INFO } from './actions';

const INITIAL_STATE = {
  modalInfoShow: false,
  modalInfoMovie: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL_INFO:
      return {
        modalInfoShow: !state.modalInfoShow,
        modalInfoMovie: action.movie
      };
    case CLOSE_MODAL_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
};
