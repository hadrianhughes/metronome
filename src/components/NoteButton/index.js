import React from 'react';
import PropTypes from 'prop-types';

import s from './NoteButton.scss';

import semibreve from '../../icons/Semibreve.svg';
import minim from '../../icons/Minim.svg';
import crotchet from '../../icons/Crotchet.svg';
import quaver from '../../icons/Quaver.svg';
import semiquaver from '../../icons/Semiquaver.svg';
import semibreveRest from '../../icons/Semibreve-Rest.svg';
import minimRest from '../../icons/Minim-Rest.svg';
import crotchetRest from '../../icons/Crotchet-Rest.svg';
import quaverRest from '../../icons/Quaver-Rest.svg';
import semiquaverRest from '../../icons/Semiquaver-Rest.svg';
import dottedSemibreve from '../../icons/Dotted-Semibreve.svg';
import dottedMinim from '../../icons/Dotted-Minim.svg';
import dottedCrotchet from '../../icons/Dotted-Crotchet.svg';
import dottedQuaver from '../../icons/Dotted-Quaver.svg';
import dottedSemiquaver from '../../icons/Dotted-Semiquaver.svg';
import dottedSemibreveRest from '../../icons/Dotted-Semibreve-Rest.svg';
import dottedMinimRest from '../../icons/Dotted-Minim-Rest.svg';
import dottedCrotchetRest from '../../icons/Dotted-Crotchet-Rest.svg';
import dottedQuaverRest from '../../icons/Dotted-Quaver-Rest.svg';
import dottedSemiquaverRest from '../../icons/Dotted-Semiquaver-Rest.svg';

const icons = {
  semibreve,
  minim,
  crotchet,
  quaver,
  semiquaver,
  semibreveRest,
  minimRest,
  crotchetRest,
  quaverRest,
  semiquaverRest,
  dottedSemibreve,
  dottedMinim,
  dottedCrotchet,
  dottedQuaver,
  dottedSemiquaver,
  dottedSemibreveRest,
  dottedMinimRest,
  dottedCrotchetRest,
  dottedQuaverRest,
  dottedSemiquaverRest,
};

const NoteButton = ({ note, onClick }) => (
  <button className={`${s.root}`} onClick={() => onClick(note.toLowerCase())} ariaLabel={note}>
    <img src={icons[note]} alt={note} />
  </button>
);

NoteButton.propTypes = {
  note: PropTypes.string,
  onClick: PropTypes.func,
};

export default NoteButton;
