

const LogoComponent = () => {

  return (
    <div style={styles.logoContainer}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXpB-Bb9vYniwhfTuQSU2Ali3QIhmDOV9tA&s"
        alt="Logo"
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  logoContainer: {
    flex: "0 0 auto",
  },
  logo: {
    height: "80px",
    padding: "10px",
  },
};

export default LogoComponent;