import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
const countryObjectStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    countryName: {
        flex: 1,
        marginStart: 12,

    },
    countryFlag: {
        width: 32,
        height: 20,

        borderRadius: 4,
    },
});
const ExpenseObject = ({ item,deleteExpense }) => {
  
    const [modelVisiblity, setModelVisibility] = useState(false);
    return (
        <View style={countryObjectStyles.contentContainer}>
    <Modal
          animationType="slide"
          transparent={false}
          visible={modelVisiblity}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 100}}>
            <View>
              <Text style={{fontSize:20 , marginLeft:50}}>are you sure you want to delete?</Text>

              <TouchableHighlight
              style={{marginTop:30, marginLeft:50}}
                onPress={() => {
                    deleteExpense(item.id)
                    setModelVisibility(false);
                }}>
                <Text style={{fontSize:20}}>Yes</Text>
              </TouchableHighlight>
              <TouchableHighlight
           style={{marginTop:30, marginLeft:50}}
                onPress={() => {
                    setModelVisibility(false);
                }}>
                <Text style={{fontSize:20}}>No</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
            <Text style={countryObjectStyles.countryName}  >{`${item.category} ( ${item.price} )`}</Text>
            <TouchableOpacity   onPress={()=>{setModelVisibility(true) }}  >
                <Icon
                    style={{ width: 30 }}
                    name='close'
                    size={20}
                    color={'red'}
                />
            </TouchableOpacity>
        </View>

    )
}
export default ExpenseObject;