import React from 'react';
import PropTypes from 'prop-types';

// Design
import * as Utils from './../../../components/Utils';

export const ChartItem = ({item}) => {
  const {
    name,
    section: {color, percentage},
  } = item;
  return (
    <Utils.Row padding={10} borderRadius={6}>
      <Utils.View width={20} height={20} background={color} marginRight={10} />
      <Utils.Text>
        {percentage}% - {name}
      </Utils.Text>
    </Utils.Row>
  );
};

ChartItem.prototype = {
  item: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
