export const OPEN_MODAL_INFO = 'OPEN_MODAL_INFO';
export const CLOSE_MODAL_INFO = 'CLOSE_MODAL_INFO';

export const openModalInfo = movie => ({ type: OPEN_MODAL_INFO, movie });
export const closeModalInfo = () => ({ type: CLOSE_MODAL_INFO });
