import breathePublicAPI from "./breathePublicAPI";
import { AuthService } from "../services";

export interface ILogin {
  username: string;
  password: string;
}

const authService = new AuthService();

const login = async ({ username, password }: ILogin) => {
  try {
    const { data: credentials } = await breathePublicAPI.post("login/", {
      username,
      password,
    });

    if (!("token" in credentials)) {
      throw new Error();
    }

    const { access, refresh } = credentials.token;

    authService.setCookies(access, refresh);

    return credentials;
  } catch (e) {
    console.log(e);
  }
};

export default login;
