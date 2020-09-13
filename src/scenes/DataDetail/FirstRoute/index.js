import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Pie from 'react-native-pie';

// Design
import * as Utils from './../../../components/Utils';
import {ChartItem} from './elements';

// Utils
import {numberToPercentage} from './../../../utils/numberUtils';
import Colors from './../../../utils/Style/Colors';

const formatSectionsData = (data) => {
  const {
    subscription, // Contratados
    topUp, // Extra Contratados
    bonus, // Bonus
    available, // Disponivel
    totalData,
    usedData,
  } = data;
  let usedPercentage = usedData / totalData;
  let av = available;
  let bonusPercentage = 0;
  let topUpPercentage = 0;
  let subscriptionPercentage = 0;
  // eslint-disable-next-line prettier/prettier
  if (topUp && av > 0) {
    topUpPercentage = topUp >= av ? av / totalData : topUp / totalData;
    av = topUp >= av ? 0 : av - topUp;
  }
  if (bonus > 0 && av > 0) {
    bonusPercentage = bonus >= av ? av / totalData : bonus / totalData;
    av = bonus >= av ? 0 : av - bonus;
  }
  if (subscription > 0 && av > 0) {
    subscriptionPercentage =
      subscription >= av ? av / totalData : subscription / totalData;
    av = subscription >= av ? 0 : av - subscription;
  }

  const list = [
    {
      name: 'Utilizado',
      section: {
        percentage: numberToPercentage(usedPercentage),
        color: Colors.pieChart.used,
      },
    },
    {
      name: 'Bônus',
      section: {
        percentage: numberToPercentage(bonusPercentage),
        color: Colors.pieChart.bonus,
      },
    },
    {
      name: 'Adicional Contratado',
      section: {
        percentage: numberToPercentage(topUpPercentage),
        color: Colors.pieChart.topUp,
      },
    },
    {
      name: 'Contratado',
      section: {
        percentage: numberToPercentage(subscriptionPercentage),
        color: Colors.pieChart.subscription,
      },
    },
  ];

  const sortedList = list.sort(
    (a, b) => b.section.percentage - a.section.percentage,
  );

  return sortedList;
};
export const FirstRoute = ({data}) => {
  const sectionsData = formatSectionsData(data);
  const pieData = sectionsData.map((item) => item.section);

  return (
    <Utils.Container>
      <Utils.View align="center" paddingTop={30} paddingBottom={16}>
        <Pie
          radius={80}
          innerRadius={75}
          sections={pieData}
          backgroundColor="#ddd"
        />
      </Utils.View>
      <FlatList
        keyExtractor={(item, index) => `${item.name}-${index}`}
        data={sectionsData}
        renderItem={ChartItem}
      />
      <Utils.Row padding={10} align="flex-start" justify="flex-start">
        <Utils.View>
          <Utils.Text size={14}>
            TOTAL: {data.totalData} {data.dataType}
          </Utils.Text>
          <Utils.Text size={14}>
            DISPONÍVEL: {data.available} {data.dataType}
          </Utils.Text>
        </Utils.View>
      </Utils.Row>
    </Utils.Container>
  );
};

FirstRoute.prototype = {
  data: PropTypes.object,
};

export default FirstRoute;
