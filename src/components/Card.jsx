import React from 'react';

function Card(props) {
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '100%',
      maxWidth: '250px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      margin: '10px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.card}>
      <img src={props.image} alt={props.title} style={styles.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
