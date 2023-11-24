
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  gradientColors?: string[];
}

const GradientText = ({ children, style, gradientColors = ['red', 'green', 'blue'], ...rest }: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={
        <Text style={style} {...rest}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={[style, { opacity: 0 }]} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
