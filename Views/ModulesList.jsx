import { View, StyleSheet } from "react-native";
import {v4 as uuidv4} from 'uuid';

import ItemModule from '../Components/ItemModule'

export default function ModulesList( props ) {  // detailsList and modulesList for Props

    let modulesListMap = new Map();
    let moduleListArr = []

    // console.log('into modules list' + '\n');
    // console.log( props.detailsList );


    if ( props.modulesList !== undefined && props.detailsList !== undefined ) {
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
                moduleListArr.push(<ItemModule key={detail.moduleId} module={module} detail={detail}/>);
            }
        }
    }

    const renderRow = () => {
        return moduleListArr.map( (elem) => elem );
    }

    return (
        <View>
            {(moduleListArr.length > 0) &&
                renderRow()
            }
        </View>
    );
}
