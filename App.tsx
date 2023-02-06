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
import {ListItem, DayBlock} from './components/ui';
import {COLORS} from './constants';
import {Storage} from './services';
import {LIST} from './constants';
import {Plus} from './components/icons';
import {ModalComponent} from './components/ui';
import {CreateTaskForm} from './components/features';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    checked: true,
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    checked: false,
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    checked: false,
    title: 'Third Item',
  },
];

function App(): JSX.Element {
  const [list, setList] = useState([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const getData = async () => {
    const data = await Storage.getData(LIST);
    if (data) {
      setList(data);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-void
    void getData();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  return (
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
              {DATA.map(({title, checked, id}) => (
                <ListItem key={id} title={title} checked={checked} />
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
        <CreateTaskForm />
      </ModalComponent>
    </SafeAreaView>
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
