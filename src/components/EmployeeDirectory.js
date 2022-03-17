import React from 'react';
import {FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import EmployeeItem from './EmployeeItem';
import {useStoreState} from 'pullstate';
import EmployeeStore from '../store/EmployeeStore';
import {getEmployees} from '../store/Selectors';

export default function EmployeeDirectory({navigation}) {
  const employees = useStoreState(EmployeeStore, getEmployees);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={item => item.id.value}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                id: item.login.uuid,
              })
            }>
            <EmployeeItem
              key={index}
              thumbnail={item.picture.thumbnail}
              name={`${item.name.first} ${item.name.last}`}
              email={item.email}
              location={`${item.location.city}, ${item.location.state}`}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
