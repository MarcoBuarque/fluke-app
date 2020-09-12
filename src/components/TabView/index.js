import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Colors from './../../utils/Style/Colors';

const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewComponent({firstRoute, secondRoute}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: firstRoute.name},
    {key: 'second', title: secondRoute.name},
  ]);

  const renderScene = SceneMap({
    first: firstRoute.component,
    second: secondRoute.component,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(tabBarProps) => renderHeaderTab(tabBarProps, routes)}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBarIndicator: {
    backgroundColor: Colors.black,
  },
  tabBar: {
    backgroundColor: Colors.secondaryBackground,
  },
});

const renderHeaderTab = (tabBarProps) => {
  return (
    <TabBar
      {...tabBarProps}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
    />
  );
};
