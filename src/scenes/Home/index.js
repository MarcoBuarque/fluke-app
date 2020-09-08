import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>HOMEEEE TESTTT</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DataDetail')}
        style={{backgroundColor: 'red', padding: 16, marginTop: 10}}>
        <Text> GO TO DATA DETAIL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
