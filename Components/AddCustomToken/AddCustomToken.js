import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const AddCustomToken = () => {
  const [text, onChangeText] = useState('Useless Text');
  //   const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.detailTextBoxView}>
          <Text style={styles.detailText}>
            Create a token is easy, including fake versions of existing tokens.
            Add them by your risk or learn about scams and security risks.
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>Learn about custom token</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCustomToken;
