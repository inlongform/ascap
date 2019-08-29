import React from 'react';
import {
  Card, CardHeader, CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';


const MemberCard = (props) => {
  const {
    headerData, handler, children, selectedId,
  } = props;
  const { title, id, icon } = headerData;

  const cardstyle = (selectedId === id && selectedId !== '') ? 'selected' : 'unselected';

  return (
    <Card
      className={cardstyle || ''}
      onClick={(e) => {
        e.preventDefault();
        handler(id);
      }}
      id={id}
    >
      <CardHeader className="font-medium d-flex justify-content-center">
        {icon[Object.keys(icon)]}
        <span className="ml-2">{title}</span>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

MemberCard.defaultProps = {
  selectedId: '',
};

MemberCard.propTypes = {
  headerData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    icon: PropTypes.objectOf(PropTypes.element),
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handler: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

export default MemberCard;
