import {
  FAIL_PERSON,
  LOADING_PERSON,
  SUCCESS_PERSON,
  PersonDispatchTypes,
  PersonType,
} from "../action/person/PersonActionType";

interface DefaultStateI {
  loading: boolean;
  pokemon?: PersonType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const personReducer = (
  state: DefaultStateI = defaultState,
  action: PersonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case FAIL_PERSON:
      return {
        loading: false,
      };
    case LOADING_PERSON:
      return {
        loading: true,
      };
    case SUCCESS_PERSON:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default personReducer;
