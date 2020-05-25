import React, { Component, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native'
import Pie from 'react-native-pie'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    flexDirection: 'row',
    marginLeft: 10
  },
});
function getPieValue(expenses: any[]): any[] {
  let categoryNames: string[] = [...new Set(expenses.map((item) => item.category))]
  let summaryValues: any[] = [];
  categoryNames.forEach(element1 => {
    let sum: number = 0;
    expenses.forEach(element2 => {
      if (element1 == element2.category) {
        sum += Number.parseInt(element2.price);
      }
    });

    summaryValues.push({ category: element1, totalPrice: sum });
  });
  return summaryValues;

}
export const PieChart = ({ expenses }) => {
  const pieColor: string[] = ["#FF8C00", "#808000", "#00FFFF", "#FF0000", "#00FF00", "#800000", "#008080", "#FF00FF"]

  let pieSeriesValues: any[] = getPieValue(expenses);

  let totalEnpenditures: number = 0;

  pieSeriesValues.forEach((item) => {
    totalEnpenditures += item.totalPrice;
  });

  pieSeriesValues.sort((a, b) => b.totalPrice - a.totalPrice)

  for (let index = 0; index < pieSeriesValues.length; index++) {
    pieSeriesValues[index].color = pieColor[index]
  }

  const pieSeriesValue = pieSeriesValues.map((a) => a.totalPrice * 100 / totalEnpenditures)
  return (
    <View style={styles.container}>
      <Pie
        style={{ flex: 1 }}
        radius={60}
        innerRadius={40}
        series={pieSeriesValue}
        colors={pieColor} />
      <View style={{ marginLeft: 30 }}>
        <FlatList
          data={pieSeriesValues}
          renderItem={({ item }) => <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
            <Icon
              style={{ width: 30 }}
              name='check'
              size={20}
              color={item.color}
            />
            <Text style={{ width: 100 }}>{item.category} </Text>
            <Text>{item.totalPrice}TL</Text>
          </View>
          }
        />

      </View>
    </View>
  );

}

