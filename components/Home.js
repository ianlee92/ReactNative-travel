import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreDate from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../assets/images/face.png';

Feather.loadFont();

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
});

export default Home;
