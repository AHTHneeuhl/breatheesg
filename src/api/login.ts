import breatheAPI from "./breatheAPI";

export interface ILogin {
  username: string;
  password: string;
}

const login = async ({ username, password }: ILogin) => {
  try {
    const { data } = await breatheAPI.post("login/", {
      username,
      password,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default login;
