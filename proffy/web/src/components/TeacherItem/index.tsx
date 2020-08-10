import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface ClassProps {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  data: ClassProps;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: data.user_id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={data.avatar} alt={data.name} />
        <div>
          <strong>{data.name}</strong>
          <span>{data.subject}</span>
        </div>
      </header>

      <p>{data.bio}</p>

      <footer>
        <p>Preço/hora <strong>R$ {data.cost}</strong></p>
        <a onClick={createNewConnection} href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;