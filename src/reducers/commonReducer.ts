import { User } from "../types";

export interface ICommonState {
  isDeleteUsersModalOpen: boolean;
  deletedUserId: number;
  editedUser: User;
  isNewUserModalOpen: boolean;
  isNotificationModalOpen: boolean;
  isEditUserModalOpen: boolean;
}

export const initialState: ICommonState = {
  isDeleteUsersModalOpen: false,
  deletedUserId: null,
  editedUser: null,
  isNewUserModalOpen: false,
  isNotificationModalOpen: false,
  isEditUserModalOpen: false,
};

export const COMMON_ACTIONS = {
  OPEN_DELETE_USERS_MODAL_ACTION: "OPEN_DELETE_USERS_MODAL_ACTION",
  RESET_DELETED_USER_ID_ACTION: "RESET_DELETED_USER_ID_ACTION",
  OPEN_NEW_USER_MODAL_ACTION: "OPEN_NEW_USER_MODAL_ACTION",
  OPEN_EDIT_USER_MODAL_ACTION: "OPEN_EDIT_USER_MODAL_ACTION",
  RESET_EDITED_USER_MODAL_ACTION: "RESET_EDITED_USER_MODAL_ACTION",
  SET_EDITED_USER_ACTION: "SET_EDITED_USER_ACTION",
  OPEN_NOTIFICATION_MODAL_ACTION: "OPEN_NOTIFICATION_MODAL_ACTION",
  CLOSE_NOTIFICATION_MODAL_ACTION: "CLOSE_NOTIFICATION_MODAL_ACTION",
  CLOSE_ALL_MODALS_ACTION: "CLOSE_ALL_MODALS_ACTION",
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
    case COMMON_ACTIONS.RESET_DELETED_USER_ID_ACTION:
      return {
        ...state,
        deletedUserId: null,
      };
    case COMMON_ACTIONS.OPEN_NEW_USER_MODAL_ACTION:
      return {
        ...state,
        isNewUserModalOpen: true,
      };
    case COMMON_ACTIONS.OPEN_EDIT_USER_MODAL_ACTION:
      return {
        ...state,
        isEditUserModalOpen: true,
        editedUser: action.payload.user,
      };
    case COMMON_ACTIONS.RESET_EDITED_USER_MODAL_ACTION:
      return {
        ...state,
        editedUser: null,
      };
    case COMMON_ACTIONS.SET_EDITED_USER_ACTION:
      return {
        ...state,
        editedUser: action.payload,
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
    case COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION:
      return {
        ...state,
        isNewUserModalOpen: false,
        isEditUserModalOpen: false,
        isDeleteUsersModalOpen: false,
        isNotificationModalOpen: false,
      };

    default:
      return state;
  }
};
