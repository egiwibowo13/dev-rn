/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Button, Counter, CheckBox, useThemeContext, List, Text, RadioButton, Slider, Tooltip } from 'dev-rn';
import { SvgUri } from 'react-native-svg';

const ExampleIcon = () => <SvgUri width="100%" height="100%" uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg" />

const App: () => React$Node = () => {
  const [rbValue, setRbValue] = useState(0);
  const onPressItem = item => {
    setRbValue(item.key);
  }

  const theme = useThemeContext()
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.scrollView, { backgroundColor: theme.colors.greyLight }]}
        >
          <Button title="Press Me" type="secondary" />
          <Counter value={1} minValue={0} maxValue={10} label="count label" />
          <CheckBox label="checkbox" checked />
          <Slider label="slider label" minimum={0} maximum={10} />
          <RadioButton label="Jenis Kelamin :" onPressItem={item => onPressItem(item)} options={[{ key: 0, title: 'laki-laki' }, { key: 1, title: 'perempuan' }]} changeMap={{ key: 'key', title: 'title' }} activeKey={rbValue} />
          <List data={[{ title: 'mely' }, { title: 'lala' }, { title: 'septy' }]} renderItem={({ item }) => <Text.Body1>{item.title}</Text.Body1>} />
          <Tooltip icon={ExampleIcon} title="title" message="message" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
