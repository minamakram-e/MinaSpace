import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Components
import MoviesButtonsWrapper from './MoviesButtonsWrapper';
import PropBasedIcon from '../atoms/PropBasedIcon';

// Icons
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

type AddMoviesButtonProps = {
  textColor: string;
  bgColor: string;
  onPress: () => void;
};

const AddMoviesButton = ({
  textColor,
  bgColor,
  onPress,
}: AddMoviesButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MoviesButtonsWrapper
        style={[styles.addMoviesButtonWrapper, {backgroundColor: bgColor}]}>
        <PropBasedIcon
          color={textColor}
          component={IoniconsIcon}
          name="add-circle-outline"
          size={20}
        />
        <Text style={[styles.addMoviesButtonTitle, {color: textColor}]}>
          Add
        </Text>
      </MoviesButtonsWrapper>
    </TouchableOpacity>
  );
};

export default AddMoviesButton;

const styles = StyleSheet.create({
  addMoviesButtonWrapper: {
    columnGap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  addMoviesButtonTitle: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    lineHeight: 16.41,
  },
});
