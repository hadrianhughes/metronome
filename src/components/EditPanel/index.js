import React from 'react';

import s from './EditPanel.scss';

import backspace from '../../icons/Backspace.svg';

import NoteButton from '../NoteButton';

const EditPanel = () => (
  <div className={s.root}>
    <div className={s.wrapper}>
      <div className={s.pane}>
        <div className={s.row}>
          <NoteButton note="semibreve" onClick={note => console.log(note)} />
          <NoteButton note="minim" onClick={note => console.log(note)} />
          <NoteButton note="crotchet" onClick={note => console.log(note)} />
          <NoteButton note="quaver" onClick={note => console.log(note)} />
          <NoteButton note="semiquaver" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <NoteButton note="dottedSemibreve" onClick={note => console.log(note)} />
          <NoteButton note="dottedMinim" onClick={note => console.log(note)} />
          <NoteButton note="dottedCrotchet" onClick={note => console.log(note)} />
          <NoteButton note="dottedQuaver" onClick={note => console.log(note)} />
          <NoteButton note="dottedSemiquaver" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <NoteButton note="semibreveRest" onClick={note => console.log(note)} />
          <NoteButton note="minimRest" onClick={note => console.log(note)} />
          <NoteButton note="crotchetRest" onClick={note => console.log(note)} />
          <NoteButton note="quaverRest" onClick={note => console.log(note)} />
          <NoteButton note="semiquaverRest" onClick={note => console.log(note)} />
        </div>
        <div className={s.row}>
          <NoteButton note="dottedSemibreveRest" onClick={note => console.log(note)} />
          <NoteButton note="dottedMinimRest" onClick={note => console.log(note)} />
          <NoteButton note="dottedCrotchetRest" onClick={note => console.log(note)} />
          <NoteButton note="dottedQuaverRest" onClick={note => console.log(note)} />
          <NoteButton note="dottedSemiquaverRest" onClick={note => console.log(note)} />
        </div>
      </div>
      <div className={s.pane}>
        <NoteButton note="backspace" onClick={note => console.log(note)} />
      </div>
    </div>
  </div>
);

export default EditPanel;
