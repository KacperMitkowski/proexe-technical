export interface ICommonState {
  isDeleteUsersModalOpen: boolean;
  deletedUserId: number;
  isNewUserModalOpen: boolean;
  isNotificationModalOpen: boolean;
}

export const initialState: ICommonState = {
  isDeleteUsersModalOpen: false,
  deletedUserId: null,
  isNewUserModalOpen: false,
  isNotificationModalOpen: false,
};

export const COMMON_ACTIONS = {
  OPEN_DELETE_USERS_MODAL_ACTION: "OPEN_DELETE_USERS_MODAL_ACTION",
  CLOSE_DELETE_USERS_MODAL_ACTION: "CLOSE_DELETE_USERS_MODAL_ACTION",
  OPEN_NEW_USER_MODAL_ACTION: "OPEN_NEW_USER_MODAL_ACTION",
  CLOSE_NEW_USER_MODAL_ACTION: "CLOSE_NEW_USER_MODAL_ACTION",
  OPEN_NOTIFICATION_MODAL_ACTION: "OPEN_NOTIFICATION_MODAL_ACTION",
  CLOSE_NOTIFICATION_MODAL_ACTION: "CLOSE_NOTIFICATION_MODAL_ACTION",
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
    case COMMON_ACTIONS.OPEN_NEW_USER_MODAL_ACTION:
      return {
        ...state,
        isNewUserModalOpen: true,
      };
    case COMMON_ACTIONS.CLOSE_NEW_USER_MODAL_ACTION:
      return {
        ...state,
        isNewUserModalOpen: false,
      };
    case COMMON_ACTIONS.OPEN_NOTIFICATION_MODAL_ACTION:
      return {
        ...state,
        isNotificationModalOpen: true,
      };
    case COMMON_ACTIONS.CLOSE_NOTIFICATION_MODAL_ACTION:
      return {
        ...state,
        isNotificationModalOpen: false,
      };
    default:
      return state;
  }
};
