import { createContext, useContext } from "react";

export const AppLanguageContext = createContext();

export function useAppLanguageContext() {
  return useContext(AppLanguageContext);
}
