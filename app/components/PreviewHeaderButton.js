import React from "react";

export class PreviewHeaderButton extends React.Component {
  setStyles(position) {
    let styles = {
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#696977",
      borderWidth: 1,
      borderRadius: 11,
      color: "#696977",
      float: position,
      width: 75,
      height: "60%",
      marginTop: 21
    };

    if (position === "left") {
      styles.marginRight = 25;
      console.log("called");
    }
    return styles;
  }

  render() {
    return (
      <button style={this.setStyles(this.props.position)}>
        {this.props.text}
      </button>
    );
  }
}
