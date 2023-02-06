import React from 'react';
import {Text, View} from 'react-native';
import {BrakeLine, Input} from '../../ui';
import {useForm} from 'react-hook-form';
import styles from './CreateTaskForm.styles';

export const CreateTaskForm = () => {
  const {control, handleSubmit} = useForm();

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create task</Text>
      </View>
      <BrakeLine isDark />
      <View style={styles.fieldsWrapper}>
        <Input control={control} name="title" placeholder="Task name" />
      </View>
    </View>
  );
};
