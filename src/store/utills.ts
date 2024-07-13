//for cookieModalSlice.ts
export function setSessionItem(name: string, value: string) {
  sessionStorage.setItem(name, value);
}

export function getSessionItem(name: string): string | null {
  return sessionStorage.getItem(name);
}

export function removeSessionItem(name: string) {
  sessionStorage.removeItem(name);
}