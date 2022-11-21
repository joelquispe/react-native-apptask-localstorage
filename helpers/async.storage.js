import AsyncStorage from "@react-native-async-storage/async-storage"

export const getData =async (key)=>{
    try{
        console.log("mi key"+key)
   const data = await  AsyncStorage.getItem(key)
   console.log("login")
   console.log(data)
   return data
    }catch(e){
        console.log(e)
    }
    
}
export const setData = async(key,value)=>{
    try{
        console.log(JSON.stringify(value) + key)
        const data =  await AsyncStorage.setItem(key,JSON.stringify(value))
        console.log(data)
   console.log("registrado")
  
    }catch(e){
        console.log(e)
    }
   
}

export const removeData = async(key)=>{
    try{
        await AsyncStorage.removeItem(key)
    }catch(e){
        console.log(e)
    }
}