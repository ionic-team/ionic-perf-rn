import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

const EmployeeItem = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    nameStyle: {
      fontSize: 16,
      color: colors.text,
    },
    descriptionStyle: {
      fontSize: 14,
      color: '#515151',
    },
    bkgStyle: {
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
  });

  return (
    <ListItem containerStyle={styles.bkgStyle}>
      <Avatar
        size={40}
        rounded
        title={props.name}
        source={{uri: props.thumbnail}}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.nameStyle}>{props.name}</ListItem.Title>
        <View>
          <Text style={styles.descriptionStyle}>{props.email}</Text>
          <Text style={styles.descriptionStyle}>{props.location}</Text>
        </View>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default EmployeeItem;
