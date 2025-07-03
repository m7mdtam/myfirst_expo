import Header from "@/src/components/Header/Header";
import MainNews from "@/src/components/MainNews/MainNews";
import TopNews from "@/src/components/TopNews/TopNews";
import React, { useState } from "react";
import { ScrollView } from "react-native";


const HomeScreen = () =>   {
  const[textcont, setTextCont]= useState('MKK')
const[counter,setCounter] =useState(0)

/*useEffect(()=>{
  return ()=> {
    alert('un mounting')
  }
})

  useEffect(()=>(
          alert('Hello From Home')
      ) , [])

      useEffect(()=>(
          alert(' Counter or Text changed' )
      ) , [textcont, counter]) 

     */ 



function changetext(){
    console.log('Text before :' , textcont)
setTextCont('mohammed');
//setCounter(counter+1)
setCounter(prevValue=>{
  if (prevValue %2 === 0 ){ return prevValue+1}
else {return prevValue+3}

})
    console.log('Text after :' , textcont)

}



    return (
         <ScrollView>
        
      
        <Header/>
        <MainNews/>

        <TopNews/>
        
      </ScrollView>
    


    );
};
export default HomeScreen;
