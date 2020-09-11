import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

// Design
import {List} from './elements';
import * as Utils from './../../components/Utils';
import Header from './../../components/Header';

export const Home = ({navigation}) => {
  const listTest = [
    {
      title: 'Minutos',
      usedData: 15,
      totalData: 20,
      dataType: 'Min',
      onPress: () =>
        navigation.navigate('DataDetail', {
          type: 'Minutos',
        }),
    },
    {
      title: 'Dados Móveis',
      usedData: 1500000,
      totalData: 2000,
      dataType: 'MB',
      onPress: () =>
        navigation.navigate('DataDetail', {
          type: 'DadosMoveis',
        }),
    },
  ];
  return (
    <Utils.SafeAre>
      <Header title="Home" />
      <Utils.Container style={styles.container}>
        <List list={listTest} />
      </Utils.Container>
    </Utils.SafeAre>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
