import { View, Text, Picker } from "react-native";
import React, { useState } from "react";

export const Filter = ({categoryChanged}) => {
  const [selectedValue, setSelectedValue] = useState("Tüm Sektörler");
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>

      <Picker
        style={{ height: 50, width: 200 }}
onValueChange={(value)=> {
  setSelectedValue(value)
   categoryChanged(value)}}
selectedValue={selectedValue}
      >
        <Picker.Item label="Tüm Sektörler" value="Tüm Sektörler" />
        <Picker.Item label="Giyim ve Aksesuar" value="Giyim ve Aksesuar" />
        <Picker.Item label="Market" value="Market" />
        <Picker.Item label="Cafe ve Restorant" value="Cafe ve Restorant" />
        <Picker.Item label="Ulaşım" value="Ulaşım" />
      </Picker>
      <Picker
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="Dönem İçi" value="java" />
        <Picker.Item label="Son Dönem" value="js" />
        <Picker.Item label="Son 3 Dönem" value="js" />
        <Picker.Item label="Son 6 Dönem" value="js" />
      </Picker>

    </View>
  );

}