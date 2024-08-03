import {StyleSheet, TouchableOpacity} from 'react-native';

// Components
import PropBasedIcon from './PropBasedIcon';

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type ViewProps = {
  iconName: string;
  bgColor: string;
  iconColor: string;
};

interface DeleteMoviesyProps extends ViewProps {
  onDeleteMoviesy: () => void;
  onEditMoviesy?: never;
}

interface EditMoviesyProps extends ViewProps {
  onDeleteMoviesy?: never;
  onEditMoviesy: () => void;
}

type SwipeViewProps = DeleteMoviesyProps | EditMoviesyProps;

const SwipeView: React.FC<SwipeViewProps> = props => {
  const {iconName, bgColor, onDeleteMoviesy, onEditMoviesy, iconColor} = props;

  const onPress = () => {
    if (onDeleteMoviesy) {
      onDeleteMoviesy();
    } else {
      onEditMoviesy();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.swipeViewContainer, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <PropBasedIcon
        color={iconColor}
        component={FontAwesome5Icon}
        size={22}
        name={iconName}
      />
    </TouchableOpacity>
  );
};

export default SwipeView;

const styles = StyleSheet.create({
  swipeViewContainer: {
    height: '95%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
