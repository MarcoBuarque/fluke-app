import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle';
// import Icon from 'react-native-vector-icons/Feather';
import {ListItem} from 'react-native-elements';

// Design
import * as Utils from './../../components/Utils';

// Utils
import Colors from './../../utils/Style/Colors';

// https://awesomeopensource.com/project/JesperLekland/react-native-svg-charts-examples

export const Item = ({item}) => {
  const {title, usedData, totalData, dataType, onPress} = item;
  const percentageAvailable = ((totalData - usedData) / totalData) * 100;
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemWrapper}>
      <Utils.Row
        flex={1}
        padding={10}
        borderRadius={6}
        background={Colors.secondaryBackground}>
        <Utils.View flex={1}>
          <Utils.Row flex={1}>
            <Utils.View flex={1}>
              <Utils.View paddingBottom={6}>
                <Utils.Text size={20} color={Colors.white}>
                  {title}
                </Utils.Text>
              </Utils.View>
              <Utils.Row align="center">
                <Utils.View paddingRight={20} flex={0.5}>
                  <Utils.Text size={12} numberOfLines={1} color={Colors.black}>
                    Disponíveis: {`${totalData - usedData} ${dataType}`}
                  </Utils.Text>
                  <Utils.Text size={12} numberOfLines={1} color={Colors.black}>
                    Consumidos: {`${usedData} ${dataType}`}
                  </Utils.Text>
                </Utils.View>
                <Utils.View flex={0.3}>
                  <ProgressCircle
                    percent={100 - percentageAvailable}
                    radius={20}
                    borderWidth={3}
                    color={Colors.red}
                    shadowColor="#6959CD"
                    bgColor={Colors.secondaryBackground}>
                    <Utils.Text size={8} color={Colors.black}>
                      {percentageAvailable}%
                    </Utils.Text>
                  </ProgressCircle>
                </Utils.View>
              </Utils.Row>
            </Utils.View>
          </Utils.Row>
        </Utils.View>
        <Utils.View style={styles.chevron}>
          <Utils.View>
            <ListItem.Chevron color={Colors.black} size={30} />
          </Utils.View>
        </Utils.View>
      </Utils.Row>
    </TouchableOpacity>
  );
};

ListItem.prototype = {
  title: PropTypes.string.isRequired,
  usedData: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  dataType: PropTypes.string,
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  dataType: 'GB',
  onPress: () => {},
};

export const List = ({list}) => {
  return (
    <FlatList
      data={list}
      renderItem={Item}
      keyExtractor={(item, index) => `${item.title}-${index}`}
    />
  );
};

List.prototype = {
  list: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  itemWrapper: {paddingBottom: 10, flex: 1},
  chevron: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: 50,
  },
});
