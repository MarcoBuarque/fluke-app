import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Pie from 'react-native-pie';

// Design
import * as Utils from './../../../components/Utils';
import {ChartItem} from './elements';

const test = [
  {
    name: 'subscription',
    dataValue: 5000,
    available: 700,
    dataType: 'MB',
    color: '#7CFC00',
    percentage: '30',
  },
  {
    name: 'topup',
    dataValue: 4000,
    dataType: 'MB',
    available: 800,
    color: '#EBD22F',
    percentage: '03',
  },
  {
    name: 'bonus',
    dataValue: 3000,
    dataType: 'MB',
    color: '#404FCD',
    available: 500,
    percentage: '05',
  },
  {
    name: 'gasto',
    dataValue: 3000,
    dataType: 'MB',
    color: '#f00',
    available: 500,
    percentage: '80',
  },
];

export const FirstRoute = ({data}) => {
  const sortedData = test.sort((a, b) => b.percentage - a.percentage);
  return (
    <Utils.Container>
      <Utils.View align="center" paddingTop={30}>
        <Pie
          radius={80}
          innerRadius={75}
          sections={[
            {
              percentage: 80,
              color: '#f00',
            },
            {
              percentage: 30,
              color: '#EBD22F',
            },
            {
              percentage: 15,
              color: '#404FCD',
            },
            {
              percentage: 5,
              color: '#7CFC00',
            },
          ]}
          backgroundColor="#ddd"
        />
      </Utils.View>
      <FlatList
        keyExtractor={(item, index) => `${item.name}-${index}`}
        data={sortedData}
        renderItem={ChartItem}
      />
      <Utils.View padding={10}>
        <Utils.Text size={14}>TOTAL: MB</Utils.Text>
        <Utils.Text size={14}>DISPONÍVEL: MB</Utils.Text>
      </Utils.View>
    </Utils.Container>
  );
};

FirstRoute.prototype = {
  data: PropTypes.object,
};

export default FirstRoute;
