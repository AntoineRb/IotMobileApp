import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { formatDate, getTimeBewtweenDate } from '../utils';

const ItemModule = ( props ) => {

    // console.log('\n' + 'into module');
    // console.log( props.detail["moduleState"] );
    // console.log( props.module["module"].name );

    return (
        <View style={styles.itemModuleContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.moduleNameTitle}>Nom du module :</Text>
                <Text style={ props.detail['moduleState'] ? styles.moduleNameActive : styles.modulesNameInactive}>{  props.module["module"].name }</Text>
            </View>
            <View style={styles.opearatingTimeContainer}>
                <Text style={styles.opearatingTimeTitle}>
                    {props.detail['moduleStat'] ? 'Actif' : 'Inacatif'} depuis :
                </Text>
                <Text style={styles.operatingTime}>
                    {getTimeBewtweenDate(  props.detail["operatingTime"], new Date( Date.now() ))}
                </Text>
            </View>
            <View style={ props.detail['moduleState'] ? styles.circleGreen : styles.circleRed }></View>
        </View>
    );
}

export default ItemModule;

const styles = StyleSheet.create({
    itemModuleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(245,245,245)',
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
        //Shadow
        elevation: 20,
        shadowColor: '#171717',
    },
    // Name Section
    nameContainer: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
    },
    moduleNameActive: {
        fontSize: 12,
        color: 'green',
    },
    modulesNameInactive: {
        fontSize: 12,
        color: 'red'
    },
    moduleNameTitle: {
        fontSize: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    // OperatingTime Section
    opearatingTimeContainer: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
    },
    opearatingTimeTitle: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    operatingTime: {
        fontSize: 12,
        color: 'gray',
    },
    // Circles
    circleGreen: {
        width: 12,
        height: 12,
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: 'green',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D3D3D3',
    },
    circleRed: {
        width: 12,
        height: 12,
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: 'red',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D3D3D3',
    }
});