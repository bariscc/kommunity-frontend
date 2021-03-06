import * as React from 'react';

const styles = {
  middle: {
    width: '100%',
    boxSizing: 'border-box',
    border: 'red solid',
    height: '300px',
    borderRadius: '30px',
  },
  img: {
    width: '100%',
    borderRadius: '30px',
    border: 'red solid 0.5px',
    height: '100px',
    textAlign: 'center',
  },
  lists: {
    fontSize: '20px',
  },
  container: {
    padding: '4px',
    width: '48%',
  },
};

const CommuniyCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.middle}>
        <div style={styles.img}>img</div>
        <ul style={styles.list}>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
        </ul>
      </div>
    </div>
  );
};

export default CommuniyCard;
