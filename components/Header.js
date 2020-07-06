import React from 'react';
import { StyleSheet, Text , View } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
const Header = props => {

    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>{props.title}</Text>
            <View style={styles.menu}>
                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                    <MenuTrigger>
                        <Text style={styles.title}>Menu</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value={1} text='Home' />
                        <MenuOption value={2}>
                            <Text >Request</Text>
                        </MenuOption>
                        <MenuOption value={3} text='Employee Info' />
                        <MenuOption value={4} text='Payroll' />
                        <MenuOption value={5} text='Login' />
                    </MenuOptions>
                </Menu>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    menu: {
    }
})

export default Header;
