import {AsyncStorage} from 'react-native';


export const setExpensesFromStorage = async (expenses) => {
    try {
      await AsyncStorage.setItem("@expen", JSON.stringify(expenses))
    } catch (e) {
      // saving error
    }
  }

  export const updateExpenseToStorage = async (expenses) => {
    try {
      await AsyncStorage.setItem("@expen", JSON.stringify(expenses))
      let resultX:any[]=[];
   
     await AsyncStorage.getItem('@expen', (err, result) => {
       if(result){
      resultX=JSON.parse(result);
       }
      })
      return resultX;
    } catch (e) {
      // saving error
    }
  }
  
export const saveExpenseToStorage = async (category,price) => {
    try {
        let resultX:any[]=[];
   
     await AsyncStorage.getItem('@expen', (err, result) => {
       if(result){
      resultX=JSON.parse(result);
       }
      })
     let id= resultX.length===0?0:resultX[resultX.length-1].id;
      resultX.push({id:++id, category:category,price:Number.parseInt(price),color:""})
       setExpensesFromStorage(resultX);
       console.log("lstresultX",resultX)
      return resultX;
     
    } catch(e) {
      // error reading value
    }
  }
  
  export const getExpensesFromStorage = async () => {
    try {
        let resultX=""
     
     await AsyncStorage.getItem('@expen', (err, result) => {
        resultX=JSON.parse(result);
      })
      return resultX;
    } catch(e) {
      // error reading value
    }
  }
