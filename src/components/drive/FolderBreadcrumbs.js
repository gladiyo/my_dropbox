import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../hooks/useFolder";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    path = [...path, ...currentFolder.path];
  }

  return (
    <Breadcrumb className="flex-grow-1" listProps={{ className: "bg-white pl-0 m-0" }}>
      {path.map((folder, index) => {
        const isLastFolder = index === path.length - 1;
        const folderLink = folder.id ? `/folder/${folder.id}` : "/";
        const folderState = {
          folder: { ...folder, path: path.slice(1, index) },
        };

        return (
          <Breadcrumb.Item
            key={folder.id}
            linkAs={Link}
            linkProps={{
              to: {
                pathname: folderLink,
                state: isLastFolder ? null : folderState,
              },
            }}
            className="text-truncate d-inline-block"
            style={{ maxWidth: "150px" }}
            active={isLastFolder}
          >
            {folder.name}
          </Breadcrumb.Item>
        );
      })}
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
