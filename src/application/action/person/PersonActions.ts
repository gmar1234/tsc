import { Dispatch } from "redux";
import {
  FAIL_PERSON,
  LOADING_PERSON,
  SUCCESS_PERSON,
  PersonDispatchTypes,
} from "./PersonActionType";
import PersonDataService from "../../../infrastructure/services/person/EndPoints";

export const GetPerson =
  () => async (dispatch: Dispatch<PersonDispatchTypes>) => {
    dispatch({
      type: LOADING_PERSON,
    });
    await PersonDataService.get()
      .then((response) => {
        const rsp = response.data;
        dispatch({
          type: SUCCESS_PERSON,
          payload: rsp.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAIL_PERSON,
        });
      });
  };
