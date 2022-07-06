import { View, StyleSheet, Text } from 'react-native';
import { formatDate, getTimeBewtweenDate } from '../utils';

import uuid from 'react-native-uuid';

const Log = ( props ) => {

    return (
        <View style={styles.logContainer} id={ uuid.v4}>

            <View style={styles.topContainer}>
                {/* ID */}
                <View style={styles.idContainer}>
                    <Text style={styles.idLabel}>
                        Identifiant
                    </Text>
                    <View style={styles.idFull}>
                        <Text style={styles.idPrefix}>Nº</Text>
                        <Text style={ styles.id }> 
                            {props.log.id !== undefined ? props.log.id : 'XXX'} 
                        </Text>
                    </View>
                </View>

                {/* Center Container */}
                <View style={styles.centerContainer}>
                    {/* Values */}
                    <View style={styles.valueContainer}>
                        <Text style={styles.valueLabel}>
                            Mesure
                        </Text>
                        <View style={styles.valueFull}>
                            <Text style={styles.value}> 
                                { props.log.value !== undefined ? props.log.value : 'XXX'}
                            </Text> 
                            <Text style={styles.unit}>
                                {props.log.unit !== undefined ? props.log.unit : 'XXX'}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Operating Time */}
                <View style={styles.opTimeContainer}>
                    <Text style={styles.opTimeLabel}>
                        Durée de fonctionnemnt
                    </Text>
                    <Text style={styles.operatingTime}>
                        { props.log.operatingTime  !== undefined ? getTimeBewtweenDate( props.log.operatingTime, new Date( Date.now() ) ) : 'XXX'}
                    </Text>
                </View>

                {/* State Circle */}
                <View style={ props.log.moduleState ? styles.circleGreen : styles.circleRed }></View>
            </View>

            {/* Capture Date */}
            <Text style={styles.atDate}>
                { props.log.operatingTime !== undefined ? formatDate( new Date ( props.log.operatingTime ) ) : 'XXX' }
            </Text>
        </View>
    );
}
export default Log;

const styles = StyleSheet.create({
    // Containers
    logContainer: {
        width: '90%',
        backgroundColor: 'rgb(245, 245, 245)',
        marginBottom: 15,
        //Shadow
        elevation: 20,
        shadowColor: '#d0d0d0',
        borderRadius: 5,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 3,
    },
    // ID
    idContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    idFull: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    idLabel: {
        fontSize: 8,
    },
    idPrefix: {
        fontSize: 11,
    },
    id: {
        color: 'gray',
        fontSize: 10,
    },
    // Center
    centerContainer: {
        width: '30%',
    },
    // Value
    valueContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueFull: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    valueLabel: {
        fontSize: 8,
    },
    value: {
        marginRight: 5,
        fontSize: 10,
    },
    // Unit
    unit: {
        fontSize: 9,
    },
    // Time
    opTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    opTimeLabel: {
        fontSize: 8,
    },
    operatingTime: {
        fontSize: 9,

    },
    // At date
    atDate:{
        width: '100%',
        textAlign: 'center',
        fontSize: 8,
        color: 'gray',
    },
    // State Circle
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