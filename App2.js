/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Boat, PRODUCTS_DATA, BoatList} from './GetABoat.js';

const App2: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <Text>GetABoat - For Sale</Text>
        <BoatList />
      </ScrollView>
    </View>
  );
};

export default App2;
