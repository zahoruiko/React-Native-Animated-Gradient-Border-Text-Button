import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type TGradientBorderProps = {
  children: JSX.Element | JSX.Element[];
  width: number;
  height: number;
  gradientColors?: string[];
  backgroundOpacity?: number;
  startAngel?: number;
  minRotationAngle?: number;
  clockwiseRotation?: boolean;
  rotationTimeout?: number;
  outerBorderRadius?: number;
  innerBorderRadius?: number;
};

const AnimatedGradientBorder: React.FC<TGradientBorderProps> = ({
  children,
  width,
  height,
  gradientColors = ['orange', 'magenta'],
  backgroundOpacity = 1,
  startAngel = 0,
  minRotationAngle = 15,
  clockwiseRotation = true,
  rotationTimeout = 200,
  outerBorderRadius = 20,
  innerBorderRadius = 18,
}) => {
  const [ angle, setAngle ] = useState(startAngel);

  const getAngle = () => {
    if(clockwiseRotation)
      setAngle(prevAngle => prevAngle + minRotationAngle);
    else
      setAngle(prevAngle => prevAngle - minRotationAngle);
  };

  useEffect(() => {
    if(angle < -359 || angle > 359) setAngle(0); 
  }, [angle]);

  useEffect(() => {
    const interval = setInterval(() => getAngle(), rotationTimeout);

    return () => clearInterval(interval);
  }, []);

  const styles = StyleSheet.create({
    linearGradient: {
      height: height,
      width: width,
      borderRadius: outerBorderRadius
    },
    innerContainer: {
      flex: 1, 
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      opacity: backgroundOpacity,
      borderRadius: innerBorderRadius,
    }
  });

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      useAngle={true}
      angle={angle}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.linearGradient}
    >
      <View style={styles.innerContainer}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default AnimatedGradientBorder;
