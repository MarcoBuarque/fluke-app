import React from 'react';

// Design
import * as Utils from './../../components/Utils';
import Header from './../../components/Header';
import TabView from './../../components/TabView';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';

const firstRoute = {
  name: 'Gráfico',
  component: FirstRoute,
};

const secondRoute = {
  name: 'Histórico',
  component: SecondRoute,
};

export const DataDetail = ({route, navigation}) => {
  const {type} = route.params;
  return (
    <Utils.SafeAre>
      <Header
        title={`Detalhes dos ${type}`}
        onGoBack={() => navigation.goBack()}
      />
      {/* <Utils.Container> */}
      <TabView firstRoute={firstRoute} secondRoute={secondRoute} />
      {/* </Utils.Container> */}
    </Utils.SafeAre>
  );
};

export default DataDetail;
