import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {StyleSheet} from 'react-native';

// Service
import {fetchMobileDataPlan} from './../../services/fluke';

// Design
import {List} from './elements';
import * as Utils from './../../components/Utils';
import Header from './../../components/Header';
import ErrorText from './../../components/ErrorText';

// Utils
import Colors from './../../utils/Style/Colors';

const voiceData = {
  title: 'Minutos',
  usedData: 35,
  totalData: 60,
  available: 25,
  dataType: 'Min',
  onPress: () => () => {},
  disabled: true,
};

export const Home = ({navigation}) => {
  const [dataMobile, setDataMobile] = useState({});
  const [fetchData, setFetchData] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchMobileData();
  }, []);

  const fetchMobileData = useCallback(async (isRefreshControl = false) => {
    try {
      const response = await fetchMobileDataPlan();

      const onPressMobileDataCard = () =>
        navigation.navigate('DataDetail', {
          type: 'DadosMoveis',
          data: response,
        });
      const formatedObj = {...response, onPress: onPressMobileDataCard};

      setDataMobile({...dataMobile, ...formatedObj});
    } catch (error) {
      setFetchError(true);
    } finally {
      if (isRefreshControl) {
        setRefreshing(false);
      } else {
        setFetchData(false);
      }
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMobileData(true);
  }, []);

  return (
    <Utils.SafeAre>
      <Header title="Home" />
      <ScrollView
        refreshControl={
          <Utils.RefreshControlStyled
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <Utils.Container style={styles.container}>
          <Utils.View paddingBottom={16}>
            <List list={[voiceData, dataMobile]} />
          </Utils.View>
          {fetchData && <Utils.LoadingIndicator />}
          {!fetchData && fetchError && <ErrorText />}
        </Utils.Container>
      </ScrollView>
    </Utils.SafeAre>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
