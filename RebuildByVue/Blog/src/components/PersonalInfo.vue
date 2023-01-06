<template>
    <div class="personal-info">
        <div class="personal-info-header">
            <div class="headshot"></div>
            <div class="nickname">RaBBBBBIT</div>
        </div>

        <div class="links-container">
            <div class="links-title">
                Follow Me On:
            </div>
            <!-- 链接列表 -->
            <ul class="links-list">
                <li class="link-tag BiliBili">
                    <a target="_blank" href="https://space.bilibili.com/321512791">BiliBili</a>
                </li>
                <li class="link-tag YouTube">
                    <a target="_blank" href="https://www.youtube.com/channel/UCq45OdVHDu9r1yoX0ZiIkIg">youtube</a>
                </li>
                <li class="link-tag CSDN">
                    <a target="_blank" href="https://blog.csdn.net/rabbbbbbbit">CSDN</a>
                </li>
                <li class="link-tag GitHub">
                    <a target="_blank" href="https://github.com/RaBBBBBIT">GitHub</a>
                </li>
                <li class="link-tag RSS">
                    <a target="_blank" href="https://rss.com/">RSS</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
@font-face {
    font-family: 'SmileySans';
    src: url(../assets/font/SmileySans/SmileySans-Oblique.ttf);
    src: url(../assets/font/SmileySans/SmileySans-Oblique.ttf);
    src: url(../assets/font/SmileySans/SmileySans-Oblique.otf);
    src: url(../assets/font/SmileySans/SmileySans-Oblique.otf.woff2);
    src: url(../assets/font/SmileySans/SmileySans-Oblique.ttf.woff2);
}

@font-face {
    font-family: 'JetBrainsMono';
    src: url(../assets/font/JetBrainsMono/JetBrainsMono-Medium.ttf);
    src: url(../assets/font/JetBrainsMono/JetBrainsMono-Medium.woff2);
}

@font-face {
    font-family: 'MiSans';
    src: url(../assets/font/MiSans/MiSans-Normal.ttf);
}

.personal-info {
    /* 大小 */
    width: 256px;
    height: 512px;
    /* 阴影 */
    box-shadow: 10px 10px 25px 20px rgba(0, 0, 0, 5%);
}

.personal-info-header {
    /* 大小 */
    width: 256px;
    height: 215px;
    /* 背景色 */
    background-color: #3F51B5;
    /* 上面的两个圆角 */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* 阴影 */
    box-shadow: 10px 10px 25px 20px rgba(0, 0, 0, 5%);
}

/* 头像 */
.headshot {
    /* 大小 */
    width: 94px;
    height: 94px;
    /* 边框 */
    border-radius: 50%;
    border: 1px black solid;
    /* 背景 */
    background-image: url("../assets/images/Headshot.png");
    background-size: contain;
    /* 阴影 */
    box-shadow: 10px 10px 25px 20px rgba(0, 0, 0, 5%);
    /* 定位 */
    position: relative;
    top: 38px;

    margin: 0 auto;
}

/* 昵称 */
.nickname {
    /* 字体 */
    font-family: SmileySans;
    color: #fff;
    font-size: 32px;
    /* 大小 */
    width: 129px;
    height: 39px;
    /* 定位 */
    position: relative;
    top: 55px;
    /* 阴影 */
    text-shadow: 10px 10px 25px 20px rgba(0, 0, 0, 5%);

    margin: 0 auto;
}

/* "Follow Me On:" 字样 */
.links-title {
    /* 字体 */
    color: #757575;
    font-family: MiSans;
    font-weight: light;
    font-size: 12px;
    /* 大小 */
    width: 81px;
    height: 16px;
    /* 定位 */
    position: relative;
    top: 13px;
    margin: 0 auto;
}

.links-container {
    width: 256px;
    height: 297px;


    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.links-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0px;
    padding: 0px;

    position: relative;
    top: 48px;
}

.link-tag {
    /* 清除列表样式 */
    list-style: none;

    margin: 0px;
    margin-bottom: 18px;


}

.link-tag>a {
    /* 去除默认样式 */
    /* 去除默认的下划线 */
    text-decoration: none;
    /* 去除旧版浏览器的点击后的外虚线框 */
    outline: none;
    /* 去除默认的颜色和点击后变化的颜色 */

    /* 字体 */
    color: #212121;
    font-size: 14px;
    font-family: JetBrainsMono;
}

.link-tag>a:hover {
    background-color: rgba(0, 0, 0, 0%);
    color: #536DFE;
}
</style>