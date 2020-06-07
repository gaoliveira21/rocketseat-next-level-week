import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Success = () => {
  return (
    <div className="container">
      <div className="content">
        <FiCheckCircle color="#34CB79" size={44}/>
        <p className="alert">Cadastro concluído!</p>
      </div>
    </div>
  );
};

export default Success;
