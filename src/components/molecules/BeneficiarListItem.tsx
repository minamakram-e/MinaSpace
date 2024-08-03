import React, {useContext} from 'react';
import {
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

// Colors
import {Colors} from '../../../constants/Colors';

// Components
import SwipeView from '../atoms/SwipeView';
import BeneficiarListItemView from './BeneficiarListItemView';

// Navigation
import {Beneficiary} from '../../navigation/BeneficiariesStackNavigator';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';
import PropBasedIcon from '../atoms/PropBasedIcon';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type BeneficiarListItemProps = {
  beneficiaryItem: ListRenderItemInfo<Beneficiary>;
};

const BeneficiarListItem = ({beneficiaryItem}: BeneficiarListItemProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <Pressable
      style={[
        styles.beneficiarListItemContainer,
        {
          backgroundColor: activeColors.PureWhite,
          shadowColor: activeColors.MidnightBlack,
        },
      ]}>
      <Image
        source={{uri: beneficiaryItem.Poster}}
        style={[
          styles.beneficiarListItemImage,
          {
            shadowColor: activeColors.MidnightBlack,
          },
        ]}
      />
      <View style={styles.beneficiarListItemDetailsContainer}>
        <Text
          style={[
            styles.beneficiarListItemName,
            {
              color: activeColors.DeepInk,
            },
          ]}>
          {beneficiaryItem.Title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.beneficiarListItemIconContainer,
              {
                backgroundColor: activeColors.MidnightBlack,
              },
            ]}>
            <PropBasedIcon
              name="phone-alt"
              component={FontAwesome5Icon}
              color={activeColors.SlateGrey}
              size={6}
            />
          </View>
          <Text
            style={[
              styles.beneficiarListItemDetail,
              {
                color: activeColors.SlateGrey,
              },
            ]}>
            Year {beneficiaryItem.Year}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.beneficiarListItemIconContainer,
              {
                backgroundColor: activeColors.MidnightBlack,
              },
            ]}>
            <PropBasedIcon
              name="dollar-sign"
              component={FontAwesome5Icon}
              color={activeColors.SlateGrey}
              size={6}
            />
          </View>
          <Text
            style={[
              styles.beneficiarListItemDetail,
              {
                color: activeColors.SlateGrey,
              },
            ]}>
            Type {beneficiaryItem.Type}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  beneficiarListItemContainer: {
    flexDirection: 'row',
    borderRadius: 18,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 14,
    marginHorizontal: 1,
    marginVertical: 2,
  },
  beneficiarListItemImage: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 8,
    width: 59,
    height: 59,
  },
  beneficiarListItemDetailsContainer: {
    marginLeft: 10,
    rowGap: 4,
  },
  beneficiarListItemName: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    lineHeight: 16.41,
  },
  beneficiarListItemIconContainer: {
    width: 15,
    height: 15,
    borderRadius: 100,
    opacity: 0.09,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beneficiarListItemDetail: {
    fontFamily: 'Roboto Regular',
    fontSize: 12,
    lineHeight: 14.06,
    marginLeft: 6,
  },
});
export default BeneficiarListItem;
