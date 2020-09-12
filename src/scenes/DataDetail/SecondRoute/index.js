import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import RNDateTimePicker from '@react-native-community/datetimepicker';

// Design
import * as Utils from './../../../components/Utils';
import {DateSelector} from './elements';

// Utils
import {MIN_DATE, MAX_DATE} from './../../../utils/constants';
import Colors from './../../../utils/Style/Colors';
import {formatDate} from './../../../utils/numberUtils';

const testSecondRout = [
  {voice: 600, data: 2048, date: '2020-08-01'},
  {voice: 120, data: 1048, date: '2020-08-02'},
  {voice: 360, data: 256, date: '2020-08-03'},
  ,
];

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
          label="De:"
          onPress={() => setShowStart(true)}
          dateObj={formatedDateStart}
        />
        <DateSelector
          label="Até:"
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

export default SecondRoute;
