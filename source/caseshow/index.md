---
title: 案例展示
date: 2021-03-04 11:22:53
---

## 倒计时

{% btn '/myhtml/countdown.html',案例展示,far fa-hand-point-right,blue block larger %}
{% hideBlock 查看源码 %}

    ``` html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            ul {
                width: 300px;
                height: 70px;
                border: 1px solid black;
                text-align: center;
                margin: 50px auto;
            }
            ul li {
                list-style: none;
                margin-top: 10px;
                width: 50px;
                height: 50px;
                background-color: brown;
                color: #fff;
                line-height: 50px;
                font-size: 20px;
                display: inline-block;
            }
            h2 {
                text-align: center;
                margin-top: 50px;
            }
        </style>
    </head>
    <body>
        <h2>距离20250618还有这么多天</h2>
        <ul class="box">
            <li id="dayBox">xx</li>天
            <li id="hourBox">xx</li>时
            <li id="minutesBox">xx</li>分
            <li id="secondBox">xx</li>秒
        </ul>
        <script>
            // 获取天时分秒的函数
            function tsfm(end) {
                // 1. 获取当前时间和设置最终时间
                var now = new Date()
                var end = new Date(end)
                var arr = {}
                // 2. 获取时间差
                var timeDiff = Math.abs(now - end)
                // 3. 将时间戳转换成天时分秒
                var day = parseInt(timeDiff / 86400000)
                var hour = parseInt((timeDiff - (day * 86400000)) / 3600000)
                var minutes = parseInt((timeDiff - (day * 86400000) - (hour * 3600000)) / 60000)
                var second = parseInt((timeDiff - (day * 86400000) - (hour * 3600000) - (minutes * 60000)) / 1000)
                arr['day'] = day
                arr['hour'] = hour
                arr['minutes'] = minutes
                arr['second'] = second
                console.log(arr)
                return arr
            }
            // 修改li里的内容函数
            function changetime(end) {
                var arr1 = tsfm(end)
                dayBox.innerHTML = arr1.day
                hourBox.innerHTML = arr1.hour
                minutesBox.innerHTML = arr1.minutes
                secondBox.innerHTML = arr1.second
                console.log('我执行了')
            }
            // 添加间隔定时器
            var end = '2025/06/04 00:00:00'
            changetime(end)
            var timeid1 = setInterval(changetime, 1000, end)
        </script>
    </body>
    </html>
    ```



{% endhideBlock %}
