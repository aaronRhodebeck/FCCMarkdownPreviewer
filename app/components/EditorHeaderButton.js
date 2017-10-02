import React from "react";

let styles = {
  backgroundColor: "rgba(0,0,0,0)",
  opacity: ".8",
  color: "#777069",
  borderWidth: 1,
  borderColor: "#777069",
  borderStyle: "solid",
  borderRadius: 11,
  float: "right",
  height: "50%",
  marginTop: 21,
  marginRight: 6
};

export class EditorHeaderButton extends React.Component {
  render() {
    return (
      <button style={styles} onClick={this.props.onClick}>
        Markup <br /> Cheatsheet
      </button>
    );
  }
}
