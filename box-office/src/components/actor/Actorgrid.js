import React from 'react';
import Actorcard from './Actorcard';
import IMAGE_NULL from '../../img/not-found.png';

const Actorgrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <Actorcard
          key={person.id}
          mame={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NULL}
        />
      ))}
    </div>
  );
};

export default Actorgrid;
