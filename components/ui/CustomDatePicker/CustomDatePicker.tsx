import React, {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import {Props} from './CustomDatePicker.types';
import {useController} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {Calendar} from '../../icons';
import {Input} from '../Input';
import styles from './CustomDatePicker.styles';

export const CustomDatePicker: FC<Props> = ({
  control,
  defaultValue,
  name,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const {field} = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <>
      {/*<CustomButton type="outlined" onPress={() => setOpen(true)}>*/}
      {/*  {title}*/}
      {/*</CustomButton>*/}
      <View>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)} />
        <Input
          editable={false}
          isDateTime
          control={control}
          name="startDate"
          Icon={<Calendar />}
        />
      </View>
      <DatePicker
        {...props}
        modal
        open={open}
        date={field.value as Date}
        minuteInterval={30}
        onConfirm={currentDate => {
          setOpen(false);
          field.onChange(currentDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
