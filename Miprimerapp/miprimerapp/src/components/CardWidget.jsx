import React from 'react'

function CardWidget() {
  return (
    <div  >
    <img style={styles.carrito} src="data:image/png;base64,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" alt="" />
    </div>
  )
}

export default CardWidget

const styles = {
    carrito: {
      flex: "0 0 auto",
      height: "32px",
      
    },
    logo: {
      height: "50px",
      padding: "10px",
    },
  };