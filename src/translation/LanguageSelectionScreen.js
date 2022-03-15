import React, {useEffect} from 'react';
import {SafeAreaView,View,Text,ScrollView,Image,StyleSheet,} from 'react-native';
import StringsOfLanguages from './stringoflanguages';

const LanguageSelectionScreen = ({navigation}) => {
  const lang = [
    {shortform: 'hi', longform: 'Hindi'},
    {shortform: 'ma', longform: 'Marathi'},
    {shortform: 'en', longform: 'English'},
    {shortform: 'fr', longform: 'French'},
  ];

  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('ContentScreen', {selectedLanguage: value});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>Select Language</Text>
      
        <ScrollView style={{marginTop: 30, width: '80%'}}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
             
            </View>
          ))}
        </ScrollView>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: '#191919',
    fontSize: 25,
    textAlign: 'center',
  },
 
  elementContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  textStyle: {
    color: '#191919',
    fontSize: 25,
  },
 
});

export default LanguageSelectionScreen;