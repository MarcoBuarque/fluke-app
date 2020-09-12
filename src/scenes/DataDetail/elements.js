import React, {useState} from 'react';
import {StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Pie from 'react-native-pie';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

// Design
import * as Utils from './../../components/Utils';

// Utils
import {MIN_DATE, MAX_DATE} from './../../utils/constants';
import Colors from './../../utils/Style/Colors';
import {formatDate} from './../../utils/numberUtils';

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
        renderItem={renderFirstRouteItem}
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

export const renderFirstRouteItem = ({item}) => {
  const {name, color, percentage} = item;
  return (
    <Utils.Row padding={10} borderRadius={6}>
      <Utils.View width={20} height={20} background={color} marginRight={10} />
      <Utils.Text>
        {percentage}% - {name}
      </Utils.Text>
    </Utils.Row>
  );
};

renderFirstRouteItem.prototype = {
  name: PropTypes.string,
  color: PropTypes.string,
  percentage: PropTypes.number,
};

export const SecondRoute = () => {
  const [dateStart, setDateStart] = useState(MIN_DATE);
  // eslint-disable-next-line prettier/prettier
  const [formatedDateStart, setFormatedDateStart] = useState(formatDate(MIN_DATE),);
  const [showStart, setShowStart] = useState(false);
  const [dateEnd, setDateEnd] = useState(MAX_DATE);
  const [formatedDateEnd, setFormatedDateEnd] = useState(formatDate(MAX_DATE));
  const [showEnd, setShowEnd] = useState(false);

  const choiceStartDate = (event) => {
    const {
      nativeEvent: {timestamp},
      type,
    } = event;
    const date = new Date(timestamp);

    setShowStart(false);
    if (type === 'set') {
      setDateStart(date);
      setFormatedDateStart(formatDate(date));

      console.log(timestamp > dateEnd.getTime());
      if (timestamp > dateEnd.getTime()) {
        setDateEnd(date);
        setFormatedDateEnd(formatDate(date));
      }
    }
  };

  const choiceEndDate = (event) => {
    const {
      nativeEvent: {timestamp},
      type,
    } = event;
    const date = new Date(timestamp);

    setShowEnd(false);
    if (type === 'set') {
      setDateEnd(date);
      setFormatedDateEnd(formatDate(date));
    }
  };

  return (
    <Utils.Container>
      <Utils.Row justify="space-around">
        <DateSelector
          label="De"
          onPress={() => setShowStart(true)}
          dateObj={formatedDateStart}
        />
        <DateSelector
          label="Até"
          onPress={() => setShowEnd(true)}
          dateObj={formatedDateEnd}
        />
      </Utils.Row>
      {showStart && (
        <RNDateTimePicker
          mode="date"
          onChange={choiceStartDate}
          display="default"
          value={dateStart}
          maximumDate={MAX_DATE}
          minimumDate={MIN_DATE}
        />
      )}
      {showEnd && (
        <RNDateTimePicker
          mode="date"
          onChange={choiceEndDate}
          display="default"
          value={dateEnd}
          maximumDate={MAX_DATE}
          minimumDate={dateStart}
        />
      )}
      {/* <FlatList

    /> */}
    </Utils.Container>
  );
};

const DateSelector = ({label, onPress, dateObj}) => (
  <Utils.Row align="center" background="black" padding={6} borderRadius={6}>
    <Utils.Text secondary size={14}>
      {label}
    </Utils.Text>
    <TouchableOpacity onPress={onPress}>
      <Utils.Row paddingLeft={6}>
        <Utils.Text color={Colors.white} size={14}>
          {`${dateObj.day}/${dateObj.month}/${dateObj.year}`}
        </Utils.Text>
        <Utils.View paddingLeft={6}>
          <Icon
            name="chevron-down-outline"
            color={Colors.secondaryText}
            size={16}
          />
        </Utils.View>
      </Utils.Row>
    </TouchableOpacity>
  </Utils.Row>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
