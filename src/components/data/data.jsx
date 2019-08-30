import React from 'react';

import {
  publisherIcon,
  writerIcon,
  writerPublisherIcon,
} from '../icons';
import Requirements from './Requirements';
import age from './Age';
import tincheck from './Tincheck';

const reqItems = [
  'Legal Name',
  'Mailing Address',
  'Valid Email Address',
  'SSN/ITIN or EIN',
  'Must be 18 or older*',
];

const requirements = (<Requirements data={reqItems} />);


const data = {
  membership: {
    cards: [
      {
        header: {
          title: 'Writer & Publisher',
          id: 'writer-publisher',
          icon: { writerPublisherIcon },
        },
        copy: 'ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.',
        fee: '$100',
        requirements,
        showSelect: true,
      },
      {
        header: {
          title: 'Writer',
          id: 'writer',
          icon: { writerIcon },
        },
        copy: 'A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.',
        fee: '$50',
        requirements,
        showSelect: false,
      },
      {
        header: {
          title: 'Publisher',
          id: 'publisher',
          icon: { publisherIcon },
        },
        copy: 'A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.',
        fee: '$50',
        requirements,
        showSelect: true,
      },
    ],
    age,
    tincheck,
    publisherOptions: [
      'Individual /​ Sole proprietor or Single-member LLC',
      'C Corporation',
      'S Corporation',
      'LLC - C Corporation',
      'LLC - S Corporation',
      'LLC - Partnership',
      'Partnership',
      'Trust /​ Estate',
      'OTHER',
    ],
  },
};

export default data;
