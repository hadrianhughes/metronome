import React from 'react';

import s from './EditPanel.scss';

import IconButton from '../IconButton';

const EditPanel = () => (
  <div className={s.root}>
    <div className={s.wrapper}>
      <div className={s.pane}>
        <div className={s.row}>
          <IconButton icon="semibreve" onClick={note => console.log(note)} />
          <IconButton icon="minim" onClick={note => console.log(note)} />
          <IconButton icon="crotchet" onClick={note => console.log(note)} />
          <IconButton icon="quaver" onClick={note => console.log(note)} />
          <IconButton icon="semiquaver" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <IconButton icon="dottedSemibreve" onClick={note => console.log(note)} />
          <IconButton icon="dottedMinim" onClick={note => console.log(note)} />
          <IconButton icon="dottedCrotchet" onClick={note => console.log(note)} />
          <IconButton icon="dottedQuaver" onClick={note => console.log(note)} />
          <IconButton icon="dottedSemiquaver" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <IconButton icon="semibreveRest" onClick={note => console.log(note)} />
          <IconButton icon="minimRest" onClick={note => console.log(note)} />
          <IconButton icon="crotchetRest" onClick={note => console.log(note)} />
          <IconButton icon="quaverRest" onClick={note => console.log(note)} />
          <IconButton icon="semiquaverRest" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <IconButton icon="dottedSemibreveRest" onClick={note => console.log(note)} />
          <IconButton icon="dottedMinimRest" onClick={note => console.log(note)} />
          <IconButton icon="dottedCrotchetRest" onClick={note => console.log(note)} />
          <IconButton icon="dottedQuaverRest" onClick={note => console.log(note)} />
          <IconButton icon="dottedSemiquaverRest" onClick={note => console.log(note)} />
        </div>
      </div>
      <div className={s.pane}>
        <IconButton icon="backspace" onClick={note => console.log(note)} />
      </div>
    </div>
  </div>
);

export default EditPanel;
