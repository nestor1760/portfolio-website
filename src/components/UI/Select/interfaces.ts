import { ChangeEvent } from "react";

type TypeLanguage = {
  value: string,
}

export interface ISelect {
  options: TypeLanguage[],
  value: string,
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
}