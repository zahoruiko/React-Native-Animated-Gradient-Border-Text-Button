import React from 'react';
import { TextStyle, TouchableOpacity } from 'react-native';
import AnimatedGradientBorder from './AnimatedGradientBorder';
import GradientText from './GradientText';

export type TGradientButtonProps = {
  title: string;
  width: number;
  height: number;
  borderGradientColors?: string[];
  titleGradientColors?: string[];
  onPress: () => void;
  style?: TextStyle;
  backgroundOpacity?: number;
};

const GradientButton: React.FC<TGradientButtonProps> = ({
  title,
  width = 200,
  height = 75,
  borderGradientColors = ['magenta', 'orange'],
  titleGradientColors = ['darkmagenta', 'magenta'],
  onPress = () => {},
  style = undefined,
  backgroundOpacity = 0.9
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AnimatedGradientBorder width={width} height={height} gradientColors={borderGradientColors} backgroundOpacity={backgroundOpacity}>
        <GradientText gradientColors={titleGradientColors} style={style}>
          {title}
        </GradientText>
      </AnimatedGradientBorder>
    </TouchableOpacity>
  );
};

export default GradientButton;
