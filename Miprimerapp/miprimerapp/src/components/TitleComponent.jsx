import React from "react";

const TitleComponent = () => {
  return <h1 style={styles.title}>Calistenia</h1>;
};

const styles = {
  title: {
    flex: "1 1 auto",
    textAlign: "center",
    margin: 0,
    color: "white",
  },
};

export default TitleComponent;