import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

// Service
import {fetchHistoryData} from './../../../services/fluke';

// Design
import * as Utils from './../../../components/Utils';
import {DateSelector, HistoryItem} from './elements';
import ErrorText from './../../../components/ErrorText';

// Utils
import {MIN_DATE, MAX_DATE, MIN_DATE_TO_USE} from './../../../utils/constants';
import {formatDate} from './../../../utils/numberUtils';

export const SecondRoute = () => {
  const [dateStart, setDateStart] = useState(MIN_DATE_TO_USE);
  // eslint-disable-next-line prettier/prettier
  const [formatedDateStart, setFormatedDateStart] = useState(formatDate(MIN_DATE_TO_USE));
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
        const historyList = await fetchHistoryData(
          formatedDateStart,
          formatedDateEnd,
        );

        const sortedList = historyList.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });

        setHistoryData(sortedList);
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
    <Utils.Container flex={1}>
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
          renderItem={HistoryItem}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.8}
          refreshControl={
            <Utils.RefreshControlStyled
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </Utils.View>
      {fetchData && <Utils.LoadingIndicator />}
      {!fetchData && fetchError && <ErrorText />}
    </Utils.Container>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  listWrapper: {flex: 1},
});

export default SecondRoute;
