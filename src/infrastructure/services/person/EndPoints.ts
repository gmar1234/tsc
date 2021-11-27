import HttpClient from "../HttpClient";
import IPersonData from "../../types/person.types"

class PersonDataService {
  get() {
    return HttpClient.get<IPersonData>(`/obtenerdatospersona`);
  }
}

export default new PersonDataService();