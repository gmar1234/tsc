import HttpClient from "../HttpClient";
import IPersonData from "../../types/person.types";

class PersonDataService {
  get() {
    return HttpClient.post<IPersonData>(`/obtenerdatospersona`);
  }
}

export default new PersonDataService();
