import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BrakeLine, Input} from '../../ui';
import {useForm} from 'react-hook-form';
import styles from './CreateTaskForm.styles';
import {Props} from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({onSubmit}) => {
  const {control, handleSubmit} = useForm();

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create task</Text>
      </View>
      <BrakeLine isDark />
      <View style={styles.fieldsWrapper}>
        <View style={styles.inputWrapper}>
          <Input control={control} name="name" placeholder="Name *" />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            control={control}
            multiline={true}
            numberOfLines={4}
            name="description"
            placeholder="Description"
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};
