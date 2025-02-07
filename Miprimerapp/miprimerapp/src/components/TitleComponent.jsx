import React from "react";

const TitleComponent = () => {
  return <h1 style={styles.title}>Calistenia</h1>;
};

const styles = {
  title: {
    display: "inline-block", 
    textAlign: "center",
    margin: 0,
    padding: "5px 10px", 
    color: "white",
    fontSize: "4rem", 
    fontWeight: "bold",
  },
};


export default TitleComponent;