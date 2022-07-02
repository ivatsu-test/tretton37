import { ActionTypeKeys, TSetEmployeesAction } from '../actionTypes';

const initialState = {};

type TAction = TSetEmployeesAction;

// eslint-disable-next-line default-param-last
const employeesReducer = (state = initialState, action: TAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypeKeys.SET_EMPLOYEES: {
      return {
        ...state,
        employees: payload,
      };
    }
    default:
      return state;
  }
};

export default employeesReducer;
