import { View, Text, StyleSheet } from "react-native";

import uuid from 'react-native-uuid';

import ItemModule from '../Components/ItemModule'

import BtnAddModule from "../Components/BtnAddModule";
import { DETAIL_INITIAL_STATE, MODULE_INITIAL_STATE } from "../App";

export default function ModulesList( props ) {  // detailsList and modulesList for Props

    

    let modulesListMap = new Map();
    let moduleListArr = []

    // console.log('into modules list' + '\n');
    // console.log( props.detailsList );


    if ( props.modulesList !== MODULE_INITIAL_STATE && props.detailsList !== DETAIL_INITIAL_STATE ) {
        for ( let module of props.modulesList ) {
            if ( module.id === 0 ) {
                continue;
            }
            modulesListMap.set( module.id, {
                module
            })
        }
        for ( let detail of props.detailsList ) {
            if ( detail.moduleId === 0 ) {
                continue;
            }
            if ( detail.moduleId !== 0) {
                let moduleID = detail.moduleId;
                let module = modulesListMap.get( moduleID );
                moduleListArr.push(<ItemModule key={ uuid.v4() } module={module} detail={detail} navigation={props.navigation}/>);
            }
        }
    }

    const renderRow = () => {
        return moduleListArr.map( (elem) => elem );
    }

    return (
        <View style={styles.container}>
            <View style={styles.moduleList}>
                {(moduleListArr.length > 0) &&
                    renderRow()
                }
            </View>
            <BtnAddModule style={styles.btnAddModule} navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems:'center',
        backgroundColor: '#f2f2f2',
    },  
    moduleList: {
        width: '90%',
        margin: 'auto'
    },
});
