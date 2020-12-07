import React from "react";
import { ListItemProps } from "../../interface";

function ListItem({
  tagName,
  liName,
  value,
  editMode,
  handleUpdate,
}: ListItemProps) {
  return (
    <li>
      <strong>{tagName}:</strong>
      <input
        name={liName}
        value={value}
        readOnly={!editMode}
        onChange={handleUpdate}
      />
    </li>
  );
}

export default ListItem;
