import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import FastImage from 'react-native-fast-image'
import { fontFamily } from './src/utils/Constants';
import { DataTable } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import ProfileScreenComponent from './src/screens/ProfileScreen/ProfileScreenComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TripsScreenComponent from './src/screens/TripsScreen/TripsScreenComponent';
import ExploreScreenComponent from './src/screens/ExploreScreen/ExploreScreenComponent';

const MyComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
    <View>
        <MyComponent />
        <Text style={{
          fontFamily: fontFamily.LatoHeavy,
          fontSize: 32,
        }}>App</Text>



        <Entypo name="500px" size={30} color="teal" />
        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
      <SafeAreaProvider>
        {/* <ProfileScreenComponent /> */}
        {/* <TripsScreenComponent /> */}
        <ExploreScreenComponent />
      </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
