import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

export const DataDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>DataDetail TESTTT</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{backgroundColor: 'red', padding: 16, marginTop: 10}}>
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DataDetail;
