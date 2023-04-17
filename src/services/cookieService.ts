import Cookies from "js-cookie";

class CookieService<T> {
  cookieKey: string;

  constructor(cookie: string) {
    this.cookieKey = cookie;
  }

  private setCookieHelper = (value: T, expiry = 15) =>
    Cookies.set(this.cookieKey, JSON.stringify(value), {
      expires: expiry,
    });

  isCookiePresent: () => boolean = () => {
    const cookie = Cookies.get(this.cookieKey);
    if (cookie) return true;
    return false;
  };

  getCookie = () => {
    const cookie = Cookies.get(this.cookieKey);
    if (cookie) {
      try {
        const cookieValue = JSON.parse(cookie);
        if (cookieValue) {
          return cookieValue as T;
        }
        throw new Error();
      } catch (e) {
        return undefined;
      }
    }
    return undefined;
  };

  setCookie = (value: T, time: number = 15) => {
    this.setCookieHelper(value, time);
  };

  removeCookie = () => {
    Cookies.remove(this.cookieKey);
  };

  getAsyncCookieOrError = (errorMessage = "cookie not found!") =>
    new Promise<T>((res, rej) => {
      const data = this.getCookie();

      if (!data) rej(errorMessage);

      res(data as T);
    });
}

export default CookieService;
