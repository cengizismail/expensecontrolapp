import {Text,View,Image} from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Filter } from "../../components/Filter/filter";
import {PieChart} from "../../components/PieChart/pieChart";

export default function Home (){
return(
  <View>
    <Image resizeMode='stretch' style={{ width: '100%', height: '40%' }} source={require('../../../assets/expenses.png')} />
    <Button
      icon={
        <Icon
          name="plus"
          size={15}
          color="white"
        />
      }
      title=" Add New Expense"
    />
    <Filter />
    <PieChart/>

  </View>
)
   
}