//7f2f26fdae944aa3967653a82df978bb
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import { ArticleType } from './types';
const news=[
    {
        id:1,
                 source:'source 1',

         title:'News 1',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0xue0f14_9-fJaUfJqwQFNVJkXEQKoia3g&s'},
          {
            id:2,
            source:'source 2',

            title:'News 2',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksvU87u2_IZcadUh5vJtd7Cj1Y25w7xAojQ&s',
          },
         
]



export default function MainNews() {


    const[topNews,setTopNews]=useState([])

useEffect(()=>(
        getTopNews()
    ) , [])



    function getTopNews(){
        const url=
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=7f2f26fdae944aa3967653a82df978bb';

        axios.get(url).then((res: { data: any; })=>{
            console.log(res.data);
            const articles= res.data?.articles?.filter(
                (                article: ArticleType)=> article?.urlToImage != null,
            )
            setTopNews(articles)
        }
        ).catch((err: any)=>{
            console.log(err);

        })
    }

    

    function readernews(item: {
        urlToImage: string | undefined; id?: number; title: any; source:any; image?: string; 
}){
        return(
<ImageBackground source={{uri:item.urlToImage}}style={styles.container} resizeMode='cover'>
        <View style={styles.whiteCont}>
            <View style={styles.redCont}>
                <Text style={styles.deadlinetext}>{item.source?.name}</Text>
            </View>
            <Text style={styles.name}>{item.title}</Text>

        </View>

     
    </ImageBackground>
  );
        
    }
    function addArticle(){
        const newArticle={
                    id:2,
            source:'44souc 2',

            title:'ssss 2',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksvU87u2_IZcadUh5vJtd7Cj1Y25w7xAojQ&s',
    }

}
  return (
 <View>
    <FlatList
  data={topNews}
  renderItem={({item})=> readernews(item)}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  pagingEnabled
  contentContainerStyle={styles.listcontainer}
  />
  
  </View>
  );
}
