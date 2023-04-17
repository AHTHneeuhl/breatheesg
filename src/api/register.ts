import breatheAPI from "./breatheAPI";

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
  password: string;
  password2: string;
}

const login = async ({
  firstName,
  lastName,
  username,
  email,
  role,
  password,
  password2,
}: IRegister) => {
  try {
    const { data } = await breatheAPI.post("register/", {
      firstName,
      lastName,
      username,
      email,
      role,
      password,
      password2,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default login;
