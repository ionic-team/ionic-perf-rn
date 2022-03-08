import {useTheme} from '@react-navigation/native';
import {useStoreState} from 'pullstate';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import EmployeeStore from '../store/EmployeeStore';
import {getEmployee} from '../store/Selectors';

export default function DetailsScreen({route}) {
  const {id} = route.params;
  const employee = useStoreState(EmployeeStore, getEmployee(id));

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    headerCard: {
      alignItems: 'center',
      backgroundColor: colors.card,
      borderColor: 'transparent',
    },
    name: {
      textAlign: 'center',
      marginTop: 8,
      color: colors.text,
      fontWeight: 'bold',
    },
    detailsCard: {
      backgroundColor: colors.card,
      borderColor: 'transparent',
      listItem: {
        backgroundColor: colors.card,
        color: colors.text,
        itemTitle: {
          color: colors.text,
        },
      },
    },
  });

  return (
    <View>
      <Card containerStyle={styles.headerCard}>
        <Avatar
          size={200}
          rounded
          source={{uri: employee.picture.large}}
          alt={`${employee.name.first} ${employee.name.last}`}
        />
        <Text
          h3
          style={
            styles.name
          }>{`${employee.name.first} ${employee.name.last}`}</Text>
      </Card>

      <Card containerStyle={styles.detailsCard}>
        <ListItem bottomDivider containerStyle={styles.detailsCard.listItem}>
          <Icon name="ios-mail" size={24} color={colors.text} />
          <ListItem.Content>
            <ListItem.Title style={styles.detailsCard.listItem.itemTitle}>
              {employee.email}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider containerStyle={styles.detailsCard.listItem}>
          <Icon name="ios-call" size={24} color={colors.text} />
          <ListItem.Content>
            <ListItem.Title style={styles.detailsCard.listItem.itemTitle}>
              {employee.phone}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider containerStyle={styles.detailsCard.listItem}>
          <Icon name="ios-phone-portrait" size={24} color={colors.text} />
          <ListItem.Content>
            <ListItem.Title style={styles.detailsCard.listItem.itemTitle}>
              {employee.cell}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider containerStyle={styles.detailsCard.listItem}>
          <Icon name="ios-location" size={24} color={colors.text} />
          <ListItem.Content>
            <ListItem.Title
              style={
                styles.detailsCard.listItem.itemTitle
              }>{`${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Card>
    </View>
  );
}
