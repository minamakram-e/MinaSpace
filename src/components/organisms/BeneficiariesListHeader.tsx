import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

// Colors
import {Colors} from '../../../constants/Colors';

// Components
import AddBeneficiariesButton from '../molecules/AddBeneficiariesButton';
import BeneficiariesListStyleButtons from './BeneficiariesListStyleButtons';
import BoldTitle from '../atoms/BoldTitle';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type BeneficiariesListHeaderProps = {
  isSelectedStyleGrid: boolean;
  setListStyle: () => void;
  setGridStyle: () => void;
};

const BeneficiariesListHeader = ({
  isSelectedStyleGrid,
  setListStyle,
  setGridStyle,
}: BeneficiariesListHeaderProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <View style={styles.beneficiariesListHeader}>
      <BoldTitle title="Movies List" color={activeColors.DeepInk} />
      <View style={styles.beneficiariesListContent}>
        <BeneficiariesListStyleButtons
          isSelectedStyleGrid={isSelectedStyleGrid}
          setGridStyle={setGridStyle}
          setListStyle={setListStyle}
        />
      </View>
    </View>
  );
};

export default BeneficiariesListHeader;

const styles = StyleSheet.create({
  beneficiariesListHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  beneficiariesListContent: {
    flexDirection: 'row',
    columnGap: 8,
  },
});
