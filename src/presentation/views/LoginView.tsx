import { LoginDataComponent } from "../components/login/LoginDataComponent";
import { LeftContainerComponent } from "../components/container/LeftContainerComponent";

export const LoginView = () => {
  return (
    <div className="gm-container gm-container--two login">
      <LeftContainerComponent />

      <div className="gm-container__rigth login__data">
        <LoginDataComponent />
      </div>
    </div>
  );
};
 