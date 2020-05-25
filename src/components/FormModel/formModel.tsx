import { Modal, View, Text, Picker, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import NumberFormat from 'react-number-format'
import { connect, useDispatch, useSelector } from 'react-redux';
import { saveNewExpense } from "../../actions/expenses";
const styles = StyleSheet.create({

    button1: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 5


    },
    button2: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        margin: 5,
    },

})

export const FormModel = ({ visibleProp, closeProp }) => {
    const [costValue, setCostValue] = useState(null);
    const [categorySelectedValue, setCategorySelectedValue] = useState("1");
    const dispatch = useDispatch();
    const handleChange = (amount) => {
        setCostValue(amount)
    }
    const saveHandleChange = () => {
        if (costValue != null && categorySelectedValue != "1") {
            dispatch(saveNewExpense(categorySelectedValue, costValue));
            closeProp();
        }
    }

    return (
        <Modal visible={visibleProp}
            animationType="slide"
            transparent={false} >
            <View>
                <View style={{ display: "flex", flexDirection: "row", borderColor: 'gray', borderWidth: 1, margin: 5, padding: 2 }}>
                    <Picker
                        style={{ height: 40, width: 215 }}
                        selectedValue={categorySelectedValue}
                        onValueChange={(itemValue, itemIndex) => { setCategorySelectedValue(itemValue) }}
                    >
                        <Picker.Item label="Select Category" value="1" />
                        <Picker.Item label="Giyim ve Aksesuar" value="Giyim ve Aksesuar" />
                        <Picker.Item label="Market" value="Market" />
                        <Picker.Item label="Cafe ve Restorant" value="Cafe ve Restorant" />
                        <Picker.Item label="Ulaşım" value="Ulaşım" />
                    </Picker>
                    <Button

                        title="Add New Category"
                    />

                </View>
                <TextInput
                    style={{ display: "flex", flexDirection: "row", borderColor: 'gray', borderWidth: 1, margin: 5, padding: 2 }}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange}
                    keyboardType="numeric"

                />

                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => closeProp()}
                >
                    <Text> CLEAR </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => saveHandleChange()}
                >
                    <Text style={{ color: "white" }}> SAVE </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}