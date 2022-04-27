import { View, StyleSheet } from "react-native-web";
import Icon from 'react-native-vector-icons/FontAwesome';

const BtnAddModule = (props) => {

    return (
        <Icon
            name='plus-square'
            size={65}
            color='#0275d8'
            onPress={() => props.navigation.navigate('AddModule')}
        >
        </Icon>
    );
}
export default BtnAddModule;
