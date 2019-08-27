
import {
  publisherIcon,
  writerIcon,
  writerPublisherIcon,
} from '../components/icons';

const data = [
  {
    title: 'Writer & Publisher',
    copy: 'ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.',
    fee: '$100',
    icon: { writerPublisherIcon },
  },
  {
    title: 'Writer',
    copy: 'A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.',
    fee: '$50',
    icon: { writerIcon },
  },
  {
    title: 'Publisher',
    copy: 'A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.',
    fee: '$50',
    icon: { publisherIcon },
  },
];

export default data;
