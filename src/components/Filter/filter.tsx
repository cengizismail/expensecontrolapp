import { View, Text, Picker } from "react-native";
import React from "react";

export const Filter = () => {

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>

      <Picker
        style={{ height: 50, width: 200 }}

      >
        <Picker.Item label="Tüm Sektörler" value="java" />
        <Picker.Item label="Giyim ve Aksesuar" value="js" />
        <Picker.Item label="Market" value="js" />
        <Picker.Item label="Cafe ve Restorant" value="js" />
        <Picker.Item label="Ulaşım" value="js" />

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