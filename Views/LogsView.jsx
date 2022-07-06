import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";

import uuid from 'react-native-uuid';

import getModuleLogs from '../services/getModuleLogs';

import { LOGS_INITIAL_STATE } from "../App";
import getModulesLogs from "../services/getModuleLogs";
import Log from "../Components/Log";
import { FlatList, SafeAreaView, ScrollView, StatusBar} from "react-native";
// import { SafeAreaView } from "react-native";

const LogsView = ( props ) => {

    const moduleId = props.route.params.moduleId;

    const [ moduleLogs, setModuleLogs ] = useState([LOGS_INITIAL_STATE]);
    useEffect(() => {
        getModulesLogs( moduleId, setModuleLogs)
    }, []);

    const [ logsElemArr, setLogsELemArr ] = useState([]); 
    useEffect(() => {
        const logsToDisplay = [];
        if ( moduleLogs !== [LOGS_INITIAL_STATE] ) {
            const lastLogs = moduleLogs.slice( logsToDisplay.length - 20 ); // To display 100 last logs
            for ( let log of lastLogs ) {
                logsToDisplay.push( <Log log={ log } key={ uuid.v4() }/> ); // Push log jsx element to display 
            }
            setLogsELemArr( logsToDisplay );
        }
    }, [moduleLogs]);

    const renderLogs = () => {
        return logsElemArr.map( ( elem ) => elem);
    }

    return (
        <View style={styles.view}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={ styles.logsView }> 
                        { logsElemArr.length > 0 &&
                            renderLogs()
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
export default LogsView;

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    logsView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems:'center',
        backgroundColor: '#f2f2f2',
        paddingVertical: 5,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 5
    },
});