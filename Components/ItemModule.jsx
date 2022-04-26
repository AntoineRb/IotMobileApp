import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { formatDate } from '../utils';

const ItemModule = ( props ) => {

    console.log('\n' + 'into module');
    console.log( props.detail["operatingTime"] );
    console.log( props.module["module"].name );

    return (
        <View style={styles.itemModuleContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.moduleNameTitle}>Nom du module :</Text>
                <Text style={styles.moduleName}>{  props.module["module"].name }</Text>
            </View>
            <View style={styles.opearatingTimeContainer}>
                <Text style={styles.opearatingTimeTitle}>
                    {props.detail.state ? 'Actif' : 'Incatif'} depuis :
                </Text>
                <Text style={styles.operatingTime}>
                    {formatDate( new Date( props.detail["operatingTime"] ))}
                </Text>
            </View>
        </View>
    );
}

export default ItemModule;

const styles = StyleSheet.create({

});