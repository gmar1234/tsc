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
        console.log("DENBTRO DEL DISPACHT");
        console.log(rsp);
        dispatch({
          type: SUCCESS_PERSON,
          payload: rsp,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAIL_PERSON,
        });
      });

    //   try {
    //     dispatch({
    //       type: LOADING_PERSON
    //     })

    //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    //     dispatch({
    //       type: SUCCESS_PERSON,
    //       payload: res.data.data
    //     })

    //   } catch(e) {
    //     dispatch({
    //       type: FAIL_PERSON
    //     })
    //   }
  };
