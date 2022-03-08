import {useStoreState} from 'pullstate';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import EmployeeStore from '../store/EmployeeStore';
import {getEmployees} from '../store/Selectors';

export default function Gallery({navigation}) {
  const employees = useStoreState(EmployeeStore, getEmployees);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={item => item.id.value}
        renderItem={({item, index}) => (
          <View style={styles.imageContainerStyle}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  id: item.login.uuid,
                })
              }>
              <Image
                key={index}
                style={styles.imageStyle}
                source={{uri: item.picture.large}}
                alt={`${item.name.first} ${item.name.last}`}
              />
            </TouchableOpacity>
          </View>
        )}
        numColumns={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
  },
  imageStyle: {
    height: 100,
    width: '100%',
  },
});
