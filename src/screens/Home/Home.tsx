import { Text, View, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Filter } from "../../components/Filter/filter";
import { PieChart } from "../../components/PieChart/pieChart";
import { FormModel } from "../../components/FormModel/formModel";
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchExpenses,updateNewExpense } from "../../actions/expenses";
import ExpenseObject from './ExpenseObject';


export default function Home() {
  const [modelVisiblity, setModelVisibility] = useState(false);
  const x=useSelector((state) => state.expenses);
  const [expenses, setExpenses] = useState(x);
  const dispatch = useDispatch();
  
let a:number=0;
  const closeModel = () => {
    setModelVisibility(false)
  }
  useEffect(() => {
     dispatch(fetchExpenses())

  }, [null]);
  const deleteFunction=(id)=>{
    const filteredItems =expenses.filter(item=>item.id!==id);
    console.log("filteredItems",filteredItems)
    dispatch(updateNewExpense(filteredItems))
  }
  const categoryChangedFunction=(value)=>{
    console.log(value);
    setExpenses(x);
    const filteredItems =expenses.filter(item=>
      {if(value=="Tüm Sektörler"){
return true;
      } else{
        return item.category===value
      }});
    console.log("xxxx",filteredItems);

  setExpenses(filteredItems)
   
  }
  const renderEpenseObject =({item})=><ExpenseObject item={item} deleteExpense={deleteFunction}/>
  return (
    <View style={{flex:1}}>
    
      <FormModel visibleProp={modelVisiblity} closeProp={closeModel} />
      <Image resizeMode='stretch' style={{ width: '100%', height: '25%' }} source={require('../../../assets/expenses.png')} />
      <Button
        onPress={() => {
          setModelVisibility(true)
        }}
        icon={
          <Icon
            name="plus"
            size={15}
            color="white"
          />
        }
        title=" Add New Expense"
      />
      <Filter categoryChanged={categoryChangedFunction}/>
      <PieChart expenses={expenses} />
   
      <View style={{height:1, backgroundColor:'black',  marginTop:30} } key="111"/>
      <ScrollView style={{flex: 1}}>
        
           <FlatList data={expenses} renderItem={renderEpenseObject} keyExtractor={item=>{
             return item.id;
           }}/>
      </ScrollView>
    </View>
  )
}


