function getChartOptions(key, xAxias) {
    const y1 = getYAxis(key,'left');
    const y2 = getYAxis(key,'right');
    const item = getSerialItem(key);
    item.data = key.data;
    // var visualMap = getKeyVisualMap(key);
    // if(key === 'NIBP' || key ==="I:E"){
    //     visualMap =null;
    // }
    
    const xAxis = getXAxis();
    xAxis.data = xAxias;
    return {
        tooltip: {
            trigger: 'axis'
        },
        // visualMap: visualMap,
        calculable: true,
        legend: {},
        xAxis: [xAxis],
        yAxis:[y1,y2],
        series: item
    };
}

function getYAxis(key,position){
    return {
        type: 'value',
        min: key.min,
        max: key.max,
        position: position,
        axisLabel: {
            formatter: '{value}' //61A0A8
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: key.lineColor
            }
        }
    };
}

function getXAxis() {
    return {
        type: "category",
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(219,225,255,1)",
                width: 1,
                type: "solid"
            }
        },
        axisLabel: { //设置x轴的字
            show: true,
            interval: 5,//使x轴横坐标全部显示
            textStyle: {//x轴字体样式
                color: "rgba(219,225,255,1)",
                fontSize: 10
            }
        }
    }
}

function getSerialItem(key) {
    var item = {};
    item.type = 'line';
    item.symbol = 'triangle';
    item.connectNulls = true;
    item.itemStyle = {normal: {lineStyle: {color: key.lineColor}}};
    item.markPoint = {
        symbol:'circle',
        data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
        ],
        label: {
            color: '#000000'
        },
        itemStyle: {
            color: key.lineColor,
            borderColor: '#000',
            borderWidth: 0,
            borderType: 'solid',
        },
        symbolSize:30,
        symbolOffset:[0,0]
    };

    //变动的部分
    if (key.name === 'NIBP' || key.name  === 'I:E') {
        item.type = 'custom';
        item.itemStyle = {normal: {lineStyle: {color: key.lineColor}}};
        item.renderItem = myRenderItem;
        item.encode = {x: 0, y: [1, 2], tooltip: [1, 2]};
        item.z = 100;
        item.symbol = 'triangle';
    }

    return item;
}

function myRenderItem(params, api) {
    const xValue = api.value(0);
    const highPoint = api.coord([xValue, api.value(1)]);//(0,120)
    const lowPoint = api.coord([xValue, api.value(2)]);//(0,90)
    // console.log(xValue+","+highPoint+","+api.value(2));
    const halfWidth = api.size([1, 0])[0] * 0.1;
    const style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'group',
        children: [
            {
                type: 'line',
                shape: {
                    x1: highPoint[0] - halfWidth, y1: highPoint[1] - 5,
                    x2: highPoint[0], y2: highPoint[1]
                },
                style: style
            },
            {
                type: "line",
                shape: {
                    x1: highPoint[0], y1: highPoint[1],
                    x2: highPoint[0] + halfWidth, y2: highPoint[1] - 5,
                },
                style: style,
            },
            {
                type: 'line',
                shape: {
                    x1: highPoint[0], y1: highPoint[1],
                    x2: lowPoint[0], y2: lowPoint[1]
                },
                style: style
            },
            {
                type: 'line',
                shape: {
                    x1: lowPoint[0] - halfWidth, y1: lowPoint[1] + 5,
                    x2: lowPoint[0], y2: lowPoint[1]
                },
                style: style
            },
            {
                type: 'line',
                shape: {
                    x1: lowPoint[0], y1: lowPoint[1],
                    x2: lowPoint[0] + halfWidth, y2: lowPoint[1] + 5
                },
                style: style
            }
        ]
    };
}

function getKeyVisualMap(key, color) {
    if (!color) {
        color = '#e91642';
    }
    return [
        {
            show: false,
            pieces: [
                {
                    lte: key.upper,
                    color: color
                },
                {
                    gt: key.down,
                    color: color
                }
            ]
        }
    ];
}

function getCurrentHM(date) {
    if (!date) {
        date = new Date();
    }
    // const y = date.getFullYear();
    // const m = (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    // const d = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    const h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours();
    const f = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();
    const s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
    return h + ":" + f + ":" + s;
}