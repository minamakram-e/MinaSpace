import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

// Colors
import {Colors} from '../../../constants/Colors';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type BeneficiarGridItemProps = {
  image: any;
  firstName: string;
};

const BeneficiarGridItem = ({image, firstName}: BeneficiarGridItemProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];
  console.log('image', image);
  return (
    <Pressable
      style={[
        styles.beneficiarGridItemContainer,
        {
          backgroundColor: activeColors.PureWhite,
          shadowColor: activeColors.MidnightBlack,
        },
      ]}>
      <Image source={{uri: image}} style={styles.beneficiarGridItemImage} />
      <Text
        style={[
          styles.beneficiarGridItemName,
          {
            color: activeColors.DeepInk,
          },
        ]}>
        {firstName}xx
      </Text>
    </Pressable>
  );
};

export default BeneficiarGridItem;

const styles = StyleSheet.create({
  beneficiarGridItemContainer: {
    borderRadius: 18,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 3,
    padding: 5,
    width: '48%',
  },
  beneficiarGridItemImage: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
    width: 60,
    height: 60,
  },
  beneficiarGridItemName: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 8,
  },
});
