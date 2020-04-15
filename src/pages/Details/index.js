import React, { useState, useEffect } from 'react';
import { Text, FlatList, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import styles from './styles';


export default function Detail() {

    const route = useRoute();
    const video = route.params.video;

    return (
        <View style={styles.container} >

            <Text style={styles.headerText} >{video.name}</Text>

        </View>

    );
}