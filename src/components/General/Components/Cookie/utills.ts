export const cookieFunction = () => {
  function setCookie<T>(name: string, value: T, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function clearAllCookies() {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
  }

  function setTheme(theme: string) {
    document.body.className = theme + "-theme";
    setCookie('theme', theme, 7);
  }

  function setCookieModal(cookieModal: string) {
    document.body.className = cookieModal + "-cookieModal";
    setCookie('cookieModal', cookieModal, 7);
  }

  function setAcceptCookie(acceptCookie: string) {
    document.body.className = acceptCookie + "-acceptCookie";
    setCookie('acceptCookie', acceptCookie, 7);
  }

  window.onload = function () {
    const theme = getCookie('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setTheme('true');
    }

    const cookieModal = getCookie('cookieModal');
    if (cookieModal) {
      setCookieModal(cookieModal);
    } else {
      setCookieModal('true');
    }

    const acceptCookie = getCookie('acceptCookie');
    if (acceptCookie) {
      setAcceptCookie(acceptCookie);
    } else {
      setAcceptCookie('false');
    }
  }

  return { setCookie, getCookie, clearAllCookies, setTheme, setCookieModal, setAcceptCookie }
}
