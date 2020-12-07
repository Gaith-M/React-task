import { createContext } from "react";
import { AppContextInterface } from "../interface";

const AppContext = createContext<AppContextInterface>({
  users: [],
  deleteUser: (id: number) => {},
  updateUser: (
    currentName: string,
    currentUsername: string,
    currentEmail: string,
    currentPhone: string,
    id: number
  ) => {},
  start_task: (data: []) => {},
});

export default AppContext;
