/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#FFFFFF")

  /*
  In the above lines, what we do is create a state, which essentially is like something that monitors the apps state.
  This then means that we are able to alter the UI of the app, as its state is being monitored. 

  const [] = useState()

  Inside the useState() is how you declare the default state of the variable. You can declare something as a boolean value,
  you can declare an array, etc. In this case, the base state is white. In an array of UseState, the first item is always
  a variable, and the second is always the method used to change the variable. In this case, the variable is randomBrackground,
  and the function used to change it is setRandomBackground.

  So the default state of randomBackground of the app is white.
  */

  const generateColour = () => {
    const hexRange = "0123456789ABCDEF"
    let colour = "#"

    for (let i = 0; i < 6; i++) {
      colour += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackground(colour)
  }

  /*
  The above function works with a string of hexidecimal characters that all can be ordered randomly, and will output random colours.
  There is also a variable called colour, that begins with a #, the only constant character in the string we are trying to make.
  Then we use a foor loop that loops 6 times, and each time selects a random character from hexRange, and adds it to colour. 
  Finally, setRandomBackground() is called to set the background colour to the that of the variable 'colour'. 

  Also, Math.floor() makes sure you are returned a whole number, and Math.floor(Math.random() * 16) ensured you are returned
  a whole number between 0-16. 
  */

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <TouchableOpacity>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: 'uppercase'
  }
});

export default App;
