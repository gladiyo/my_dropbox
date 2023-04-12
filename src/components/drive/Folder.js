import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Folder = ({ folder }) => (
  <Button
    as={Link}
    to={{ pathname: `/folder/${folder.id}`, state: { folder } }}
    variant="primary"
    className="text-truncate w-100"
  >
    <FontAwesomeIcon icon={faFolder} className="mr-2" />
    {folder.name}
  </Button>
);

export default Folder;
