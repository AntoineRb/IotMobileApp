import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Request
import getModulesList from './services/getModulesList';
import getDetailsList from './services/getDetailsList';
import ModulesList from './Views/ModulesList';

export const MODULE_INITIAL_STATE = {
  id: 0,
  creationDate: undefined,
  type: "",
  name: ""
}

export const DETAIL_INITIAL_STATE = {
  value: 0,
  minValue: 0,
  maxValue: 0,
  unit: "",
  operatingTime: undefined,
  moduleState: false,
  dataCount: 0,
  moduleId: 0
}

export default function App() {

  // To Get All Modules
  const [ modulesList, setModulesList ]  = useState([MODULE_INITIAL_STATE]);
  const setModulesListState = (newModulesList) => {
    if ( newModulesList !== undefined ) {
      setModulesList( newModulesList );
    } 
    else {
      const unexpectedType = typeof newModulesList;
      console.error(`App.tsx: The value type expected is IModule but the actual type is ${unexpectedType}`);
    }
  }
  useEffect(() => {
    getModulesList( setModulesListState ); 
    const refreshModulesList = setInterval( async () => {
      await getModulesList( setModulesListState );   
    }, 10000);
    return () => {
      window.clearInterval( refreshModulesList );
    }
  }, []);

   // To Get All Modules Details
   const [ detailsList, setDetailsList ]  = useState([DETAIL_INITIAL_STATE]);
   const setDetailsListState = ( newDetailsList ) => {
     if ( newDetailsList !== undefined ) {
       setDetailsList( newDetailsList );
      // console.log(newDetailsList);
     } 
     else {
       const unexpectedType = typeof newDetailsList;
       console.error(`App.tsx: The value type expected is IDetail[] but the actual type is ${unexpectedType}`);
     }
   }

   // Refresh Details List  
   useEffect(() => {
     getDetailsList( setDetailsListState );
     const refreshDetailsList = setInterval( async () => {
       await getDetailsList( setDetailsListState );   
     }, 10000);
     return () => {
       window.clearInterval( refreshDetailsList );
     }
   }, []);

  const getModulesListState = ( modulesList ) => {
    return modulesList;
  }
  const getDetailsListState = ( detailsList ) => {
    return detailsList;
  }

  return (
    <View style={styles.container}>
      <ModulesList
        modulesList={getModulesListState( modulesList )}
        detailsList={getDetailsListState( detailsList )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
