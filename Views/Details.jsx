import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import getUniqueModule from "../services/getUniqueModule";
import getUniqueDetail from "../services/getUniqueDetail"

import { getTimeBewtweenDate } from "../utils";
import getAllLogsValues from "../services/getAllLogsValues";

import { DETAIL_INITIAL_STATE, MODULE_INITIAL_STATE } from "../App";

import Chart from "../Components/Chart";

export default function Details( props ) { 

    const moduleId = props.route.params.moduleId;

    // Module Info
    const [module, setModule] = useState(MODULE_INITIAL_STATE);
    const setModuleState = ( newModuleState ) => {
        setModule(newModuleState);
    }
    useEffect(() => {
        getUniqueModule( moduleId, setModuleState)
    }, []);

    
    // Module Detail
    const [detail, setDetail] = useState(DETAIL_INITIAL_STATE);
    const setDetailState = ( newDetailState ) => {
        if ( newDetailState !== undefined ) {
            setDetail(newDetailState);
        }
    }
    useEffect(() => {
        getUniqueDetail( moduleId, setDetailState );
    }, []);

    // Chart
    // get logs
    const [ moduleLogs, setModuleLogs ] = useState([]);
    useEffect(() => {
        getAllLogsValues( moduleId, setModuleLogs );
    }, []);
    // Info to display
    const [ chartValues, setChartValues ] = useState([0]);
    const [ chartLabels, setChartLabels ] = useState([0]);
    // Set chartValues and Labels from moduleLogs
    useEffect(() => {
        let counter = 1;
        const newLabels = [];
        const newValues = [];
        if ( !(moduleLogs.length <= 1) ) {
            for ( let [index, val ] of moduleLogs ) {
                if ( counter == 20 ) break;
                newLabels.push(index);
                newValues.push(val)
                counter++;
            }
            setChartLabels(newLabels);
            setChartValues(newValues);
        }
    }, [moduleLogs]);


    
    return (
        <View style={styles.viewContainer}>

            <View style={styles.moduleDetailsContainer}>
                <Text style={styles.name}>
                    { module === MODULE_INITIAL_STATE ? 'XXX' : module.name }
                </Text>

                <Chart moduleId={moduleId} labels={chartLabels} values={chartValues}/>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>
                        { detail === DETAIL_INITIAL_STATE ? 'XXX' : detail.value }
                    </Text>
                    <Text style={styles.unit}>
                        { detail === DETAIL_INITIAL_STATE ? 'XXX' : detail.unit }
                    </Text>
                </View>

                <Text style={styles.lastUpdate}>
                    { detail === DETAIL_INITIAL_STATE ? 'XXX' : 'Il y a ' + getTimeBewtweenDate(  detail.operatingTime, new Date( Date.now() )) }
                </Text>

                <Button 
                    title="Historique"
                    color="#0275d8"
                    style={styles.btnHistory}
                    onPress={() => alert('Historique')}     
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    moduleDetailsContainer: {
        width: '90%',
        backgroundColor: 'rgb(245,245,245)',
        marginVertical: 40,
        //Shadow
        elevation: 20,
        shadowColor: '#d0d0d0',
    },
    name: {
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        flexWrap: 'wrap',
        color: 'rgb(245,245,245)',
        backgroundColor: '#0275d8',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    valueContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    value: {
        fontSize: 50,
    },
    unit: {
        fontSize: 25,
    },
    lastUpdate: {
        width: '100%',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 15,
    },
    btnHistory: {

    },
});