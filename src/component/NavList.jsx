import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

const NavList = () => {
  const navArray = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: "/" },
    {
      id: 2,
      name: "Archive",
      icon: <ArchiveOutlinedIcon />,
      route: "/Archive",
    },
    {
      id: 3,
      name: "Trash",
      icon: <DeleteOutlineOutlinedIcon />,
      route: "/Delete",
    },
  ];
  return (
    <>
      <List>
        {navArray.map((list) => (
          <ListItem key={list.id}>
            <Link
              to={list.route}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
                alignItems: "center",
              }}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavList;
