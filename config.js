// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我~",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的老婆大人小甜心猪咩咩！",  // 同上...
        "今天是你的生日～",
        "这是我们在一起的",
        "第二个生日～",
        "还记得去年我生日的时候",
        "你给了我一个二维码哝～",
        "今年我同样也发给你一个～！",
        "你是我的老婆大人哝！！！",
        "希望你可以永远在我这做个小孩～",
        "愿你贪吃长胖 天气舒服～",
        "愿你心想事成 天天开心～",
        "愿你多多运动 天天健康～",
        "愿我们无论咋样一起走下去！",
        "只愿得你心 白首不分离",
        "这简单的话语 是老公最真挚的祝福～！",
        "mua～～～～！muaaaamuamua！～",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我点我～",
        play: "来点 music！",
        bannar_coming: "得整点颜色哝～",
        balloons_flying: "好像少点东西？",
        cake_fadein: "蛋糕？！",
        light_candle: "蜡烛？！",
        wish_message: "祝我的老婆大人生日快乐！！",
        story: "A MESSAGE FOR YOU",
    }
};
