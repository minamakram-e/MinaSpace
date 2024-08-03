import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Components
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import PropBasedIcon from '../atoms/PropBasedIcon';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Data
import {Colors} from '../../../constants/Colors';
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={styles.homeContainer}>
      <Text>cfffffffffffff</Text>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>Logout</Text>
        <PropBasedIcon
          color={Colors.GrayishSilver}
          component={FontAwesomeIcon}
          name={'sign-out'}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 26,
    paddingVertical: 16,
    flex: 1,
  },
  logoutBtn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#ddd',
    flexDirection: 'row',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 7,
    color: Colors.GrayishSilver,
  },
});
