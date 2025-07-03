import { ArticleType } from '@/src/types/ArticleType';
import { get } from '@/src/utils/helpers/apiService';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import style from './style';
export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  function getTopNews() {
    const url = '/everything?q=football';

    
      get(url)
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
