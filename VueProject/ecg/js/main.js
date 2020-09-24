/**
 * 初始化布局时，传递的病人信息
 * 根据病人信息初始化床位列表
 */
const patients = [{
    bed: '10-1',
    name: '老毛泽东',
    sex: '男',
    age: '59岁',
    pid: '5894054',
    yb: '非记账医保',
    qf: true
}
,
{
    bed: '10-2',
    name: '老江泽民',
    sex: '男',
    age: '69岁',
    pid: '583354',
    yb: '非记账医保',
    qf: true
},
{
    bed: '10-3',
    name: '老江泽民',
    sex: '男',
    age: '69岁',
    pid: '583354',
    yb: '非记账医保',
    qf: true
},
{
    bed: '10-4',
    name: '老江泽民',
    sex: '男',
    age: '69岁',
    pid: '583354',
    yb: '非记账医保',
    qf: true
},
{
    bed: '10-5',
    name: '老江泽民',
    sex: '男',
    age: '69岁',
    pid: '583354',
    yb: '非记账医保',
    qf: false
},
{
    bed: '10-6',
    name: '老江泽民',
    sex: '男',
    age: '69岁',
    pid: '583354',
    yb: '非记账医保',
    qf: true
}
];
/**
 * 初始化布局是，传递的设备列表
 * 根据设备列表布局显示的曲线
 */
var equipTypes = [
    {
        type: '呼吸机', //设备类型名称
        code: 'hxj', //设备类型代码
        visibility: 'block', //是否显示
        data: { //数据信息
            category: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06", "08:07", "08:08", "08:09", "08:10"], //x轴坐标
            keys: [//数据关键字集合
                {
                    name: 'Pp', //关键字明后才能
                    color: '#00ffff', //关键字颜色
                    size: '18', //关键字大小
                    max: 90, //y轴纵坐标最大值
                    min: 10,//y轴纵坐标最小值
                    lineColor: '#00ffff',//曲线颜色
                    upper: 80, //阀值上线
                    down: 10, //阀值下限
                    data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43] //y轴值
                },
                {
                    name: 'Pm',
                    color: '#00ffff',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ffff',
                    upper: 80,
                    down: 10,
                    data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43]
                },
                // {
                //     name: 'Peep',
                //     color: '#00ff40',
                //     size: '18',
                //     max: 90,
                //     min: 10,
                //     lineColor: '#00ff40',
                //     upper: 80,
                //     down: 10,
                //     data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43]
                // },
                {
                    name: 'I:E',
                    color: '#ffff00',
                    size: '18',
                    max: 10,
                    min: 0,
                    lineColor: '#ffff00',
                    upper: 4,
                    down: 3,
                    data: [[0, 1, 2], [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [7, 1, 2], [8, 7, 6], [9, 1, 2]] //y轴值
                },
                // {
                //     name: 'f',
                //     color: '#ffffff',
                //     size: '18',
                //     max: 90,
                //     min: 10,
                //     lineColor: '#ffffff',
                //     upper: 80,
                //     down: 10,
                //     data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43]
                // },
                {
                    name: 'Vte',
                    color: '#00ffff',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ffff',
                    upper: 80,
                    down: 10,
                    data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43]
                }
                ,
                {
                    name: 'Vetot',
                    color: '#00ff40',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ff40',
                    upper: 80,
                    down: 10,
                    data: [45, 88, 89, 99, 72, 99, 55, 23, 34, 43]
                }
            ],
            fixed:[{key:"Am",value:"12",unit:"%"},{key:"BS",value:"12",unit:"%"},{key:"Am",value:"12",unit:"%"}]
        }
    },
    {
        type: '心电仪',
        code: 'xdy',
        visibility: 'none', //是否显示
        data: {
            category: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06", , "08:07", "08:08",  "08:09",  "08:10"],
            keys: [
                {
                    name: 'PR',
                    color: '#00ff40',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ff40',
                    upper: 80,
                    down: 10,
                    data: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
                },
                {
                    name: 'HR',
                    color: '#ffff00',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#ffff00',
                    upper: 80,
                    down: 10,
                    data: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
                },
                {
                    name: 'Resp',
                    color: '#00ffff',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ffff',
                    upper: 80,
                    down: 10,
                    data: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
                },
                {
                    name: 'SpO2',
                    color: '#00ff40',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ff40',
                    upper: 80,
                    down: 10,
                    data: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
                },
                {
                    name: 'NIBP',
                    color: '#00ff40',
                    size: '18',
                    max: 90,
                    min: 10,
                    lineColor: '#00ff40',
                    upper: 80,
                    down: 10,
                    data: [[0, 144, 80], [1, 144, 90], [2, 134, 78], [3, 144, 88], [4, 133, 99], [5, 112, 88], [6, 144, 88], [7, 99, 67], [8, null, null], [9, 143, 90]]//y轴值
                }
            ]
        },

    }
];
/**
 * chart 集合
 */
var chartMap = new Map();
/**
 * 缓存x轴数据
 */
var xAxiasMap = new Map();
/**
 * 缓存Y轴数据
 */
var yAxiasMap = new Map();

var alContainer;
const TOP_HEIGHT = 48;
const BOTTOM_HEIGHT = 48;
const BOTTOM_FIXED = 72;
const KEY_CHART_HEIGHT = 76;
/**
 * 函数调用
 */
$(function () {
    alContainer = $("#app");
    initViewWithPatient(patients, equipTypes);

    //测试代码
    setInterval(function(){
        var index = Math.ceil(Math.random()*5)
        var val1 = 70+Math.ceil(Math.random()*30)+''
        var val2 = 70+Math.ceil(Math.random()*20)+''
        updateKey(patients[index].bed,'Pp',val1);
        updateKey(patients[index].bed,'HR',val2);
        updateFixedKey(patients[index].bed,'xdy',[{key:"Am",value:val1,unit:"%"},{key:"BS",value:val2,unit:"%"},{key:"Am",value:"12",unit:"%"}]);
        updateFixedKey(patients[index].bed,'hxj',[{key:"AB",value:val2,unit:"%"},{key:"BS",value:val1,unit:"%"},{key:"Am",value:"12",unit:"%"}]);
    },400);
});

/**
 * 对外提供的用来更新病人信息的方法
 * <p>根据床位号更新病人信息</p>
 * @param {JSON} patient 
 */
function updatePatientInfo(patient){
    var id = "Bed_Top_"+patient.bed;
    var value = patient.name+"/"+patient.sex+"/"+patient.age;
    updateValue(id,value);

    id = "Bed_Bottom_"+patient.bed;
    value = patient.pid+patient.yb;
    updateValue(id,value);

    id = "Bed_Money_"+patient.bed;
    if(patient.qf){
        updateValue(id,'欠费');
    }else{
        updateValue(id,'');
    }
}
/**
 *  对外提供的用来更新床位病人生理参数的方法
 * <p>
 *  根据床位和关键字更新当前床位的数据
 * </p>
 * @param {string} bed 
 * @param {string} key 
 * @param {string} value 
 */
function updateKey(bed,key,value){
    var id = key+"_"+bed;
    updateValue(id,value);
    dynamicAddData(id,value);
}
/**
 * 更新固定参数新
 * @param {string} bed  床号
 * @param {string} code  设备类型
 * @param {JSON} values json 数组
 */
function updateFixedKey(bed,code,values){
    for(var x = 0;x<12;x++){
        var id1 = code+"_"+bed+"_"+x+"_key";
        var id2 = code+"_"+bed+"_"+x+"_value";
        if(values[x]!=null){
            var key = values[x].key;
            var value = values[x].value;

            updateValue(id1,key);
            updateValue(id2,value);
        }else{
            updateValue(id1,'');
            updateValue(id2,'');
        }
    }
}

/**
 * 动态添加数据，用来更改曲线图
 * @param {string} id 
 * @param {string} value 
 */
 function dynamicAddData(id, value) {
    var lineId = "Line_" + id;
    var charts = chartMap.get(lineId);
    var xAxis = xAxiasMap.get(lineId);
    var yAxis = yAxiasMap.get(lineId);
    if (charts && xAxis && yAxis && value.length > 0) {
        // console.log(lineId);
        if (id.indexOf("NIBP") !== -1) {
            var str = value.split("/");
            var v = [0, parseFloat(str[0]), parseFloat(str[1])];

            yAxis.push(v);
            yAxis.shift();

            for (var x = 0; x < yAxis.length; x++) {
                var lastValue = yAxis[x];
                lastValue[0] = x;
            }

        } else {
            yAxis.push(value);
            yAxis.shift();
        }

        xAxis.push(getCurrentHM());
        xAxis.shift();

        charts.setOption({
            xAxis: {
                data: xAxis
            },
            series: [{
                data: yAxis
            }]
        });

        xAxiasMap.set(id, xAxis);
        yAxiasMap.set(id, yAxis);
    }
}

/**
 *  根据id更新对应的控件值
 * @param {string} id 
 * @param {string} value 
 */
function updateValue(id,value){
    var view = document.getElementById(id);
    if(view){
        view.innerText = value;
    }
}




/**
 *  根据病人信息和数据信息初始化布局
 * @param {JSON} patients 
 * @param {JSON} data 
 */
function initViewWithPatient(patients, data) {
    var itemWidth = (window.innerWidth - 64 - 20) / 4;
    var itemHeight = getItemHeightFromData(data);

    inflateView(itemWidth, itemHeight, patients, data);
}

/**
 *  根据宽高布局填充界面
 * @param {int} width 宽度 
 * @param {int} height  高度
 * @param {JSON} patients  病人信息
 * @param {JSON} data  数据信息
 */
function inflateView(width, height, patients, data) {
    alContainer.empty();
    for (var x = 0; x < patients.length; x++) {
        alContainer.append(getItemView(width, height, patients[x], data));
    }

    patients.forEach(element => {
        initBedKeyChartView(element.bed,data);
    });

    
}

function initBedKeyChartView(bed,data){  
    data.forEach(element => {
        initKeyChartView(bed,element);
    });
}

function initKeyChartView(bed,equip){
    var xAxias = equip.data.category;
    equip.data.keys.forEach(element => {
        var id = "Line_"+element.name+"_"+bed;
        const dom = document.getElementById(id);
        if(dom){
            var keyChart = chartMap.get(id);
            if(keyChart!=null && keyChart!=undefined){
                keyChart.dispose();
            }
            keyChart = echarts.init(dom);
            chartMap.set(id,keyChart);
            xAxiasMap.set(id,xAxias);
            yAxiasMap.set(id,element.data);
            const options = getChartOptions(element,xAxias);
            keyChart.setOption(options);
            // console.log(options);

        }
    });
    $("#"+bed+"_"+equip.code).css('display',equip.visibility);
}

/**
 * 获取床位选项卡布局信息
 * @param {*} width 
 * @param {*} height 
 * @param {*} patient 
 * @param {*} data 
 */
function getItemView(width, height, patient, data) {
    // console.log(width + "," + height + "," + window.innerWidth);
    return '<div class="bed-item" style="width:' + width + 'px;height:' + height + 'px">' +
        getItemTitle(width, patient) +
        getItemContent(width, height, patient.bed, data) +
        getItemBottom(patient.bed, data) +
        '</div>';
}

/**
 * 获取床位选项卡头部信息
 * @param {*} width 
 * @param {*} patient 
 */
function getItemTitle(width, patient) {
    var contentWidth = width - 96;
    var money = patient.qf?"欠费":"";
    return '<div class="bed-item-title">' +
        '<label id="Bed_"' + patient.bed + '>' + patient.bed + '</label>' + '<div style="width:' + contentWidth + 'px;">' +
        '<div id="Bed_Top_"' + patient.bed + '>' + patient.name + "/" + patient.sex + "/" + patient.age + '</div>' +
        '<div id="Bed_Bottom_"' + patient.bed + '>' + patient.pid + "/" + patient.yb + '</div>' +
        '</div>' + '<label id="Bed_Money_"' + patient.bed + '>'+money+'</label>' +
        '</div>'
}

/**
 * 获取床位卡片内容区域信息
 * @param {int} width 
 * @param {int} height 
 * @param {string} bed 
 * @param {JSON} data 
 */
function getItemContent(width, height, bed, data) {
    const h = height - TOP_HEIGHT - BOTTOM_HEIGHT;
    return '<div class="bed-item-content" style="height:' + h + 'px">' +
        getItemContentByType(width,bed, data)
        + '</div>'
}
/**
 *  根据设备类型获取对应的布局信息
 * @param {string} bed 
 * @param {JSON} data 
 */
function getItemContentByType(width,bed, data) {
    var contentView = "";
    data.forEach(element => {
        contentView += getItemContentTypeView(width,bed, element);
    });

    return contentView;
}

/**
 * 获取设备类型所对应的布局详情
 * @param {string} bed 
 * @param {JSON} equip 
 */
function getItemContentTypeView(width,bed, equip) {
    return  '<div id="' + bed + "_" + equip.code + '" class="bed-item-content-equip">' +
        getKeyChartView(width,bed, equip) +
        '</div>';
}

/**
 *  获取设备下属关键字对应的曲线图布局
 * @param {string} bed 
 * @param {JSON} equip 
 */
function getKeyChartView(width,bed, equip) {
    // var xValues = equip.data.category;
    var view = "";
    equip.data.keys.forEach(element => {
        view += getKeyChartItemView(bed, element);
    });
    view+=getKeyItemFixed(width,bed,equip);
    return view;
}

/**
 * 获取设备具体某个关键字对应的曲线图布局
 * @param {*} bed 
 * @param {*} key 
 */
function getKeyChartItemView(bed, key) {
    return '<div style="width:100%;height: 76px;display: flex">' +
    '<div style="width: calc(100% - 64px);height: 76px;line-height: 76px;" id="Line_' + key.name + '_' + bed + '"></div>' +
    '<div style="width: 64px;height: 76px;">' +
    '<label style="display: block;color: ' +key.color + '">' + key.name + '</label>' +
    '<label id="' + key.name + '_' + bed + '" style="color: ' +key.color + ';font-size: ' + key.size + 'px;">---</label>' +
    '</div>' +
    '</div>';
}

/**
 * 获取底部布局
 * @param {*} bed 
 * @param {*} data 
 */
function getItemBottom(bed, data) {
    return '<div class="bed-item-bottom">' +
        getBottomButton(bed, data)
        + '</div>'
}

/**
 * 获取底部按钮区域
 * @param {*} bed 
 * @param {*} data 
 */
function getBottomButton(bed, data) {
    var view = "";
    data.forEach(element => {
        view += '<button class="btn btn-primary" code="' + bed + "_" + element.code + '" onclick="changeContentView(this)">' + element.type + '</button>';
    });
    return view;
}


/**
 * 获取底部固定小方块
 * @param {int}} width 
 * @param {int} bed 
 */
function getKeyItemFixed(width,bed,equip){
    var w = width/6;
    return '<div class="bed-item-fixed">'+
        getKeyItemFixedView(w,bed,equip)
    +'</div>';
}

function getKeyItemFixedView(width,bed,equip){
    var view = "";
    for(var x = 0;x<12;x++){
        var id = equip.code+"_"+bed+"_"+x;
        var key = "";
        var val = ""
        if(equip.data.fixed!=null && equip.data.fixed[x]!=null){
            key = equip.data.fixed[x].key;
            val = equip.data.fixed[x].value;
        }
        view+='<div  class="bed-item-fixed-key" style="width:'+width+'px;">'+
            '<span  id="'+id+'_key">'+key+'</span>'+
            '<span id="'+id+'_value">'+val+'</span>'
        +'</div>'
    }
    return view;
}

/**
 * 通过点击底部按钮改变内容区域的显示内容
 * @param {*} target 
 */
function changeContentView(target) {
    var type = $(target).attr('code');
    $("#" + type).show();
    $("#" + type).siblings('div').hide();

}

/**
 * 根据子项获取床位卡片高度
 * @param {JSON} data 
 */
function getItemHeightFromData(data) {
    var lineCount = 0;
    data.forEach(element => {
        if (element.data.keys.length > lineCount) {
            lineCount = element.data.keys.length;
        }
    });
    return TOP_HEIGHT+ lineCount * KEY_CHART_HEIGHT+BOTTOM_FIXED + BOTTOM_HEIGHT;
}