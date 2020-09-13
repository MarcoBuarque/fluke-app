import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/Ionicons';
import {ListItem} from 'react-native-elements';

// Design
import * as Utils from './../../components/Utils';

// Utils
import Colors from './../../utils/Style/Colors';

// https://awesomeopensource.com/project/JesperLekland/react-native-svg-charts-examples

export const Item = ({item}) => {
  const {
    title,
    usedData,
    totalData,
    dataType,
    onPress,
    available,
    disabled,
  } = item;
  const percentageAvailable = parseInt((available / totalData) * 100, 10);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.itemWrapper}
      disabled={disabled}>
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
                    Disponíveis: {`${available} ${dataType}`}
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
                    shadowColor={Colors.blue}
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
        {!disabled && (
          <Utils.View style={styles.chevron}>
            <ListItem.Chevron color={Colors.black} size={30} />
          </Utils.View>
        )}
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
  disabled: PropTypes.bool,
};

ListItem.defaultProps = {
  dataType: 'GB',
  onPress: () => {},
  disabled: false,
};

export const List = ({list, refreshing, onRefresh}) => {
  return (
    <FlatList
      data={list}
      renderItem={Item}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      refreshControl={
        <Utils.RefreshControlStyled
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

List.prototype = {
  list: PropTypes.array.isRequired,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

const styles = StyleSheet.create({
  itemWrapper: {paddingBottom: 10, flex: 1},
  chevron: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: 50,
  },
  helpBtnWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export const HelpButton = () => (
  <TouchableOpacity
    style={styles.helpBtnWrapper}
    onPress={() => Linking.openURL('https://flu.ke/atendimento')}>
    <Utils.View flex={1} justify="center">
      <Icon name="help-circle-outline" size={22} color={Colors.black} />
    </Utils.View>
  </TouchableOpacity>
);
