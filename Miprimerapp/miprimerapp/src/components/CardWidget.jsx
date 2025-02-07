import { useContext } from "react";
import cartContext from "../context/cardContext";
import { Link } from "react-router-dom";
function CardWidget() {
  const context = useContext(cartContext)

  return (

    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={styles.container}>
        <div style={styles.iconContainer}>
          <div style={styles.cartIcon}>🛒</div>
          {context.countItemInCart() > 0 && (
            <span style={styles.count}>{context.countItemInCart()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CardWidget;

const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    display: "inline-block",
  },
  cartIcon: {
    fontSize: "40px",
  },
  count: {
    position: "absolute",
    top: "1px",
    right: "-5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "5px",
    fontSize: "12px",
    fontWeight: "bold",
    minWidth: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};


