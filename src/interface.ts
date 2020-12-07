export interface AppContextInterface {
  users: [];
  deleteUser: (id: number) => void;
  updateUser: (
    currentName: string,
    currentUsername: string,
    currentEmail: string,
    currentPhone: string,
    id: number
  ) => void;
  start_task: (data: []) => void;
}

// =======================
// Card interfaces
// =======================
export interface CardProps {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
    id: number;
  };
  deleteUser: (id: number) => void;
  updateUser: (
    name: string,
    username: string,
    email: string,
    phone: string,
    id: number
  ) => void;
}

export interface CardUIProps {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
    id: number;
  };
  currentName: string;
  setCurrentName: React.Dispatch<string>;
  currentUsername: string;
  setCurrentUsername: React.Dispatch<string>;
  currentEmail: string;
  setCurrentEmail: React.Dispatch<string>;
  currentPhone: string;
  setCurrentPhone: React.Dispatch<string>;
  editMode: boolean;
  toggleEditMode: React.Dispatch<boolean>;
  handleUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteUser: (id: number) => void;
  updateUser: (
    name: string,
    username: string,
    email: string,
    phone: string,
    id: number
  ) => void;
}

export interface ListItemProps {
  tagName: string;
  liName: string;
  value: string | number;
  editMode: boolean;
  handleUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
