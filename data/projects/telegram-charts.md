# Telegram charts

[Demo](https://ogogorev.github.io/telegram-charts-stage-2/)
[Github](https://github.com/ogogorev/telegram-charts-stage-2)

I decided to perform a task from one of contests that was organised by Telegram Messenger. The task was to create five charts, without using any third-party libraries.

For drawing of charts I used canvas. Each chart is a function, that receives parameters from outside. I defined chart functions in old manner - using prototype inheritance. Some of the chart logic is reused - all charts are inherited from the line chart (which is not ideal design, better would be to create some abstract Chart object. And even better would be to use object composition instead of inheritance 🙂).

Performance was the biggest challenge I had developing this project was. In all charts there was a big performance issue, which I finally was able to solve. The issue was related to chart rendering - I was using requestAnimationFrame function from the beginning, but not for all updates. Some of them were still triggered by mouse events (like mousemove). After moving all re-draws to requestAnimationFrame, the performance has been improved significantly.
