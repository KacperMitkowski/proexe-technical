export interface ICommonState {
  isDeleteUsersModalOpen: boolean;
  deletedUserId: number;
}

export const initialState: ICommonState = {
  isDeleteUsersModalOpen: false,
  deletedUserId: null,
};

export const COMMON_ACTIONS = {
  OPEN_DELETE_USERS_MODAL_ACTION: "OPEN_DELETE_USERS_MODAL_ACTION",
  CLOSE_DELETE_USERS_MODAL_ACTION: "CLOSE_DELETE_USERS_MODAL_ACTION",
};

export interface IAction {
  type: string;
  payload: any;
}

export const commonReducer = (
  state: ICommonState,
  action: IAction
): ICommonState => {
  switch (action.type) {
    case COMMON_ACTIONS.OPEN_DELETE_USERS_MODAL_ACTION:
      return {
        ...state,
        isDeleteUsersModalOpen: true,
        deletedUserId: action.payload.userId,
      };
    case COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION:
      return {
        ...state,
        isDeleteUsersModalOpen: false,
        deletedUserId: null,
      };
    default:
      return state;
  }
};
