import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import RNDateTimePicker from '@react-native-community/datetimepicker';

// Service
import {fetchHistoryData} from './../../../services/fluke';

// Design
import * as Utils from './../../../components/Utils';
import {DateSelector, HistoricItem} from './elements';
import ErrorText from './../../../components/ErrorText';

// Utils
import {MIN_DATE, MAX_DATE} from './../../../utils/constants';
import {formatDate} from './../../../utils/numberUtils';

const testSecondRout = [
  {voice: 600, data: 2048, date: '2020-08-01'},
  {voice: 120, data: 1048, date: '2020-08-02'},
  {voice: 360, data: 256, date: '2020-08-03'},
];

export const SecondRoute = () => {
  const [dateStart, setDateStart] = useState(MIN_DATE);
  // eslint-disable-next-line prettier/prettier
  const [formatedDateStart, setFormatedDateStart] = useState(formatDate(MIN_DATE),);
  const [showStart, setShowStart] = useState(false);
  const [dateEnd, setDateEnd] = useState(MAX_DATE);
  const [formatedDateEnd, setFormatedDateEnd] = useState(formatDate(MAX_DATE));
  const [showEnd, setShowEnd] = useState(false);

  const [historyData, setHistoryData] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFetchData(true);
    fetchHistory();
  }, [formatedDateStart, formatedDateEnd, fetchHistory]);

  const fetchHistory = useCallback(
    async (isRefreshControl = false) => {
      try {
        const response = await fetchHistoryData(
          formatedDateStart,
          formatedDateEnd,
        );
        setHistoryData(response);
      } catch (error) {
        setFetchError(true);
      } finally {
        if (isRefreshControl) {
          setRefreshing(false);
        } else {
          setFetchData(false);
        }
      }
    },
    [formatedDateStart, formatedDateEnd],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchHistory(true);
  }, []);

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
    <ScrollView
      style={styles.container}
      refreshControl={
        <Utils.RefreshControlStyled
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
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
      <Utils.View style={styles.listWrapper}>
        <FlatList
          keyExtractor={(item, index) => `${index}-${item.date}`}
          data={historyData}
          renderItem={HistoricItem}
          showsVerticalScrollIndicator={false}
        />
      </Utils.View>
      {fetchData && <Utils.LoadingIndicator />}
      {!fetchData && fetchError && <ErrorText />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  listWrapper: {flex: 1, paddingTop: 10},
});

export default SecondRoute;
