<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";

// 文章类
class Article {
  constructor(title, description, createDate, updateDate, likeCount, forwardCount, thumbnailUrl) {
    // 属性
    this.title = title;                 //标题  
    this.description = description;     //描述
    this.createDate = createDate;       //创建日期
    this.updateDate = updateDate;       //更新日期
    this.likeCount = likeCount;         //点赞数量
    this.forwardCount = forwardCount;   //转发数量
    this.thumbnailUrl = thumbnailUrl;   //缩略图URL
  }
}

// 创建一篇临时文章
// 实例化两个Date时间对象,作为创建时间和修改时间待会插入article文章
var articleCreateDateTemp = new Date();
articleCreateDateTemp.setTime(1672486928000);
var articleUpdateDateTemp = articleCreateDateTemp;
// 计算缩略图文件路径
var thumbnailUrlTemp = "./images/articleThumbnail/" + articleCreateDateTemp.getTime() + "01" + ".png";
console.log(thumbnailUrlTemp)
// 实例化临时文章
var articleTemp = new Article(
  "从零开始搭建一个个人博客",
  "个人博客如何搭建是怎么回事呢？个人博客相信大家都很熟悉，但是个人博客如何搭建是怎么回事呢，下面就让小编带大家一起了解吧。个人博客如何搭建，其实就是好玩又实用的技术，大家可能会很惊讶个人博客怎么会如何搭建呢",
  articleCreateDateTemp,
  articleUpdateDateTemp,
  114,
  514,
  thumbnailUrlTemp
);

console.log(articleTemp.title)


</script>

<template>
  <!-- 自己添加的个人信息卡片 -->
  <PersonalInfo />
</template>

<style scoped>

</style>
