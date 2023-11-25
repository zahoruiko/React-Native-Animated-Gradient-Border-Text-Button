import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import AnimatedGradientBorder from './components/AnimatedGradientBorder';
import AnimatedGradientButton from './components/AnimatedGradientButton';
import GradientText from './components/GradientText';

function App(): JSX.Element {
  const HEIGHT = Dimensions.get('window').height * 0.8;
  const WIDTH = Dimensions.get('window').width * 0.8;

  const handleButtonTap = () => console.log('Click!');

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedGradientBorder width={WIDTH} height={HEIGHT}>
        <View style={styles.textContainer}>
          <GradientText gradientColors={['magenta', 'darkorange']} style={styles.text}>
            Text
          </GradientText>
        </View>
        <AnimatedGradientButton
          title={'Click me!'}
          width={200}
          height={75}
          onPress={handleButtonTap}
          titleGradientColors={['magenta', 'darkorange']}
          style={styles.buttonText}
        />
      </AnimatedGradientBorder>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textContainer: {
    marginBottom: 30
  },
  text: {
    fontSize: 46,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold'
  }
});
