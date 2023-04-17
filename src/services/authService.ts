import { constants } from "../config";
import CookieService from "./cookieService";

export type TBreatheAccessCookie = string;
export type TBreatheRefreshCookie = string;

class AuthService {
  private access: CookieService<TBreatheAccessCookie> = new CookieService(
    constants.BREATHE_ACCESS_COOKIE
  );
  private refresh: CookieService<TBreatheRefreshCookie> = new CookieService(
    constants.BREATHE_REFRESH_COOKIE
  );

  setCookies = (
    access: TBreatheAccessCookie,
    refresh: TBreatheRefreshCookie
  ) => {
    this.access.setCookie(access, constants.BREATHE_ACCESS_COOKIE_EXPIRY);
    this.refresh.setCookie(refresh, constants.BREATHE_REFRESH_COOKIE_EXPIRY);
  };

  setAccessCookie = (access: string) => {
    this.access.setCookie(access, constants.BREATHE_ACCESS_COOKIE_EXPIRY);
  };

  getAccessCookie = () => {
    return this.access.getCookie();
  };

  getRefreshCookie = () => {
    return this.refresh.getCookie();
  };

  getAsyncCookies = async () => {
    const access = await this.access.getAsyncCookieOrError();
    const refresh = await this.refresh.getAsyncCookieOrError();
    if (typeof access === "string" && typeof refresh === "string")
      return {
        access,
        refresh,
      };
    return undefined;
  };

  removeRefreshCookie = () => {
    this.refresh.removeCookie();
  };

  isAuthenticated = () => {
    return this.refresh.isCookiePresent();
  };

  clearData = () => {
    this.access.removeCookie();
    this.refresh.removeCookie();
  };
}

export default AuthService;
