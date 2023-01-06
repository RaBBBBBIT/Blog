console.log("HelloWorld!");

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
        this.thumbnailUrl = thumbnailUrl;
    }
}


var middleContainer = document.getElementsByClassName("mid")[0]
console.log(middleContainer)
// middleContainer.style.backgroundImage = "url(./images/articleThumbnail/167248692800001.png)"

createArticle();









// 获取文章列表
function getArticleList() {

}

// 创建一篇文章
function createArticle(title, description, createDate, likeCount, starCount, forwardCount, thumbnailUrl) {
    // 实例化一个Date时间对象,待会插入article文章
    var articleDateTemp = new Date();
    articleDateTemp.setTime(1672486928000);
    var thumbnailUrlTemp = "./images/articleThumbnail/" + articleDateTemp.getTime() + "01" + ".png";
    // 实例化article文章对象
    var articleTemp = new Article(
        title = "从零开始搭建一个个人博客",
        description = "个人博客如何搭建是怎么回事呢？个人博客相信大家都很熟悉，但是个人博客如何搭建是怎么回事呢，下面就让小编带大家一起了解吧。个人博客如何搭建，其实就是好玩又实用的技术，大家可能会很惊讶个人博客怎么会如何搭建呢......",
        createDate = articleDateTemp,
        likeCount = 114,
        starCount = 514,
        forwardCount = 1919,
        thumbnailUrl = thumbnailUrlTemp
    );



    console.log(articleTemp.createDate.getTime());
    console.log(articleTemp.thumbnailUrl)
    // middleContainer.style.backgroundImage = "url(" + articleTemp.thumbnailUrl + ")"


}