import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { formatDate, getTimeBewtweenDate } from '../utils';

import Icon from 'react-native-vector-icons/FontAwesome';

const ItemModule = ( props ) => {

    return (
        <View style={styles.itemModuleContainer}>
                {/* <Text style={styles.moduleNameTitle}>Nom du module :</Text> */}
            <View style={styles.nameContainer}>
                <Text style={ props.detail['moduleState'] ? styles.moduleNameActive : styles.modulesNameInactive}>
                    {  props.module !== undefined ? props.module["module"].name : 'XXX' }
                </Text>
            </View>
            <View style={styles.opearatingTimeContainer}>
                <Text style={styles.opearatingTimeTitle}>
                    <Text style={ props.detail['moduleState'] ? styles.moduleStateGreen : styles.moduleStateRed} >
                        {props.detail['moduleState'] ? 'Actif ' : 'Inacatif '} 
                    </Text>
                    depuis :
                </Text>
                <Text style={styles.operatingTime}>
                    <Icon name='clock-o' size={12}/> 
                    { props.detail !== undefined  ? ' ' + getTimeBewtweenDate(  props.detail["operatingTime"], new Date( Date.now() )) : 'XXX'}
                </Text>
            </View>
            <Icon.Button 
                name='area-chart' 
                size={20}
                backgroundColor='#0275d8'
                onPress={() => props.navigation.navigate('Détails',{
                    moduleId: props.detail['moduleId']
                })}
            >
                Activity
            </Icon.Button>
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
        shadowColor: '#d0d0d0',
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
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
    },
    opearatingTimeTitle: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    moduleStateGreen: {
        color: 'green',
    },
    moduleStateRed: {
        color: 'red',
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