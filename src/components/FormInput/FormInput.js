import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const FormInput = (props, ref) => {
  return (
    <View style={styles.textInput}>
      <Ionicons style={styles.iconStyle} name={props?.iconType} size={15} />
      <TextInput
        style={styles.textInputStyle}
        placeholder={props?.placeholderText}
        returnKeyType={props?.returnKeyType}
        value={props?.value}
        secureTextEntry={props?.secureTextEntry}
        onChangeText={props?.onchange}
        keyboardType={props?.keyboardType}
        ref={ref}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

export default React.forwardRef(FormInput);
