import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Gabriel" />
      <div>
        <strong>Gabriel</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
      <br/><br/>
      diam orci, vitae tempor dui sollicitudin vitae. Quisque pretium aliquam
      massa vitae accumsan. Vivamus mi libero, blandit in pretium et, interdum
      ac dolor. Ut lorem orci, dapibus interdum ullamcorper ut, fringilla non
      metus. Integer commodo, dolor id dictum pharetra, justo t
    </p>

    <footer>
      <p>Preço/hora <strong>R$ 80,00</strong></p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;