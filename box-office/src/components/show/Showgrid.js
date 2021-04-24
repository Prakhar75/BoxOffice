import React from 'react';
import Showcard from './Showcard';
import IMAGE_NULL from '../../img/not-found.png';
import { FlexGrid } from '../styled';

const Showgrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NULL}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default Showgrid;
