import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {ListItem, DayBlock, ModalComponent} from './components/ui';
import {COLORS} from './constants';
import {Plus} from './components/icons';
import {CreateTaskForm, DismissKeyboard} from './components/features';
import {FieldValues} from 'react-hook-form';
import {useRealm} from './hooks';
import {CreateTaskData, TasksResponseItem} from './types';

function App(): JSX.Element {
  const [list, setList] = useState<TasksResponseItem[]>([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const {createTask, getTasks, realm, checkTaskHandler} = useRealm();

  const fetchList = () => {
    if (realm) {
      const tasks = getTasks();
      if (tasks) {
        setList(tasks as TasksResponseItem[]);
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, [realm]);

  const createTaskHandler = (data: FieldValues) => {
    createTask(data as CreateTaskData);
    setCreateModalVisible(false);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.mainWrapper}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View
              style={{
                backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
                ...styles.container,
              }}>
              <DayBlock>
                {list.map(({name, isDone, _id}) => (
                  <ListItem
                    onCheckPress={() => {
                      checkTaskHandler(_id, isDone ? 0 : 1);
                      fetchList();
                    }}
                    key={_id}
                    name={name}
                    checked={Boolean(isDone)}
                  />
                ))}
              </DayBlock>
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={() => setCreateModalVisible(true)}
            activeOpacity={0.75}>
            <View style={styles.buttonWrapper}>
              <Plus color={COLORS.BG} width={20} height={20} />
            </View>
          </TouchableOpacity>
        </View>
        <ModalComponent
          visible={createModalVisible}
          onRequestClose={() => setCreateModalVisible(false)}>
          <CreateTaskForm onSubmit={createTaskHandler} />
        </ModalComponent>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  buttonWrapper: {
    backgroundColor: COLORS.BLUE,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});

export default App;
