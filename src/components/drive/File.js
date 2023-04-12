const { faFile } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const React = require("react");

function File(props) {
  const { file } = props;
  return (
    React.createElement("div", null,
      React.createElement("a", {
        href: file.url,
        className: "btn btn-outline-info text-truncate w-100"
      },
        React.createElement(FontAwesomeIcon, {
          icon: faFile,
          className: "mr-2"
        }),
        file.name
      )
    )
  );
}

module.exports = File;
