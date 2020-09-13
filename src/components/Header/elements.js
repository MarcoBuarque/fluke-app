import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const GoBack = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.goBackWrapper} onPress={onPress}>
      <Icon name="arrow-back-outline" size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 6,
  },
});
