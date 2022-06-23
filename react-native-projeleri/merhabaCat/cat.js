import React from 'react';
import { Text } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
  }

const Cat = () => {
    const name='Nefise';
  return (
    <Text>Hello, I am your {getFullName('Sude','Vera','Ali')}!</Text>
  );
}

export default Cat;