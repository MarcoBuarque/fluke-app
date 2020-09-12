import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

// Design
import * as Utils from './../../components/Utils';
import Header from './../../components/Header';

export const DataDetail = ({route, navigation}) => {
  const {type} = route.params;
  return (
    <Utils.SafeAre>
      <Header
        title={`Detalhes dos ${type}`}
        onGoBack={() => navigation.goBack()}
      />
      <Utils.Container>
        <Utils.Text>INITTT</Utils.Text>
      </Utils.Container>
    </Utils.SafeAre>
  );
};

export default DataDetail;
