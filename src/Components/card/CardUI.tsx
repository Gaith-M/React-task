import React from "react";
import "./styles.css";
import { CardUIProps } from "../../interface";
import { Button } from "antd";
import {
  CloseCircleFilled,
  EditFilled,
  CheckCircleFilled,
  RightCircleFilled,
} from "@ant-design/icons";
import ListItem from "./ListItem";

const CardUI = ({
  user,
  currentName,
  setCurrentName,
  currentUsername,
  setCurrentUsername,
  currentEmail,
  setCurrentEmail,
  currentPhone,
  setCurrentPhone,
  editMode,
  toggleEditMode,
  handleUpdate,
  deleteUser,
  updateUser,
}: CardUIProps) => {
  const { name, username, phone, email, id } = user;
  return (
    <div className="card">
      <div className="buttons_container">
        {editMode ? (
          <>
            <Button
              type="primary"
              shape="circle"
              className="button confirm"
              onClick={() => {
                updateUser(
                  currentName,
                  currentUsername,
                  currentEmail,
                  currentPhone,
                  id
                );
                toggleEditMode(!editMode);
              }}
            >
              <CheckCircleFilled />
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="button cancel"
              onClick={() => {
                setCurrentName(name);
                setCurrentUsername(username);
                setCurrentPhone(phone);
                setCurrentEmail(email);
                toggleEditMode(!editMode);
              }}
            >
              <RightCircleFilled />
            </Button>
          </>
        ) : (
          <Button
            type="primary"
            shape="circle"
            className="edit button"
            onClick={() => {
              toggleEditMode(!editMode);
            }}
          >
            <EditFilled />
          </Button>
        )}
        {editMode ? null : (
          <Button
            type="primary"
            shape="circle"
            className="delete button"
            onClick={() => {
              deleteUser(id);
            }}
          >
            <CloseCircleFilled />
          </Button>
        )}
      </div>
      <ul>
        <ListItem
          tagName={"name"}
          liName="currentName"
          value={currentName}
          editMode={editMode}
          handleUpdate={handleUpdate}
        />

        <ListItem
          tagName={"username"}
          liName="currentUsername"
          value={currentUsername}
          editMode={editMode}
          handleUpdate={handleUpdate}
        />

        <ListItem
          tagName="email"
          liName="currentEmail"
          value={currentEmail}
          editMode={editMode}
          handleUpdate={handleUpdate}
        />

        <ListItem
          tagName="phone"
          liName="currentPhone"
          value={currentPhone}
          editMode={editMode}
          handleUpdate={handleUpdate}
        />
      </ul>
    </div>
  );
};

export default CardUI;
