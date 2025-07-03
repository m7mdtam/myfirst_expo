import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { ArticleType } from '../MainNews/types';
import style from './style';

export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  function getTopNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7f2f26fdae944aa3967653a82df978bb';

    axios
      .get(url)
      .then((res) => {
        const filteredArticles = res.data?.articles?.filter(
          (article: ArticleType) => article?.urlToImage != null
        );
        setArticles(filteredArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTopNews();
  }, []);

  function renderitem({ item }: { item: ArticleType }) {
    return (
      <View style={style.cardCont}>
        <Image style={style.cardArticleImage} source={{ uri: item.urlToImage }} />
        <Text style={style.cardArticleName}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.sectionTitle}>Top News</Text>
      <FlatList data={articles} renderItem={({item})=>renderitem({item} )}
       contentContainerStyle={style.listCont}
 showsVerticalScrollIndicator={false}     
 scrollEnabled={false}
       />
    </View>
  );
}
