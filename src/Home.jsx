import React from 'react';

const Home = ({ name, id }) => {
  return (
    <div>
      <h1>Child Componet Data</h1>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default Home;
