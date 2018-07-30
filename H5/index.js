function getElm(selector) {
    return document.querySelector(selector) ;
}
function getAllElem(selector) {
    return document.querySelectorAll(selector);
}

//获取元素样式
var getCls = function (element){
    return element.getAttribute('class');
};
//设置样式
var setCls = function (element,cls){
    return element.setAttribute('class',cls)
};
//增加样式
var addCls = function (element,cls){
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1){
        setCls(element,baseCls+' '+cls);
    }
};
//删减样式
var delCls = function (element,cls){
    baseCls = getCls(element);
    if (baseCls.indexOf(cls) !== -1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
};
var screenAnimateElements = {
    '#section1': [
        '.section1-heading',
        '.screen-1-phone',
        '.screen-1-shadow'
    ],
    '#section2':[
        '.sec2-text-1',
        '.sec2-text-2',
        '.sec2-img'
    ],
    '#section3':[
        '.sec3-text-1',
        '.sec3-text-2',
        '.sec3-img',
        '.sec3-square'
    ],
    '#section4':[
        '.sec4-text-1',
        '.sec4-text-2',
        '.sec4-img-1',
        '.sec4-img-2',
        '.sec4-img-3',
        '.sec4-img-4'
    ],
    '#section5':[
        '.sec5-text-1',
        '.sec5-text-2',
        '.sec5-img'
    ]
};
//样式初始化
var setScreenAnimateInit = function (screenCls){
    var screen = document.querySelector(screenCls); //获取当前屏的所有元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for (var i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'-animation-init');
    }
};
var playScreenAnimateDone = function (screenCls){
    var screen = document.querySelector(screenCls); //获取当前屏的所有元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for ( i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls.replace('-animation-init','-animation-done'));
    }
};

var navItems = getAllElem('.nav-item');
var outLineItem = getAllElem('.outline__item');

var switchNavItemsActive = function(idx){
    for (var i=0;i<navItems.length;i++){
        delCls(navItems[i],'nav-item_status_active')
    }
    addCls(navItems[idx],'nav-item_status_active')
    for (var i=0;i<outLineItem.length;i++){
        delCls(outLineItem[i],'outline__item_status_active')
    }
    addCls(outLineItem[idx],'outline__item_status_active')
};


switchNavItemsActive(0);
window.onload = function (){
   /* setScreenAnimateInit('#section1');
    setScreenAnimateInit('#section2');
    setScreenAnimateInit('#section3');
    setScreenAnimateInit('#section4');*/
    for (var k in screenAnimateElements) {
        if (k==='#section1'){
            continue;
        }
        setScreenAnimateInit(k)
    }
};

window.onscroll = function (){
    var top = document.documentElement.scrollTop;
    console.log(top);
    if(top>80){
        addCls(getElm('.header'),'header_status_back');
        addCls(getElm('.fixed-nav'),'fixed-nav_statue_in');
    }else{
        delCls(getElm('.header'),'header_status_back');
        delCls(getElm('.fixed-nav'),'fixed-nav_statue_in');
        switchNavItemsActive(0);
    }
    if (top>1){
        playScreenAnimateDone('#section1');
    }
    if (top>700){
        playScreenAnimateDone('#section2');
        switchNavItemsActive(1);
    }
    if (top>1540){
        playScreenAnimateDone('#section3');
        switchNavItemsActive(2);
    }
    if (top>2331){
        playScreenAnimateDone('#section4');
        switchNavItemsActive(3);
    }
    if (top>3100){
        playScreenAnimateDone('#section5');
        switchNavItemsActive(4);
    }
};

//点击跳转

var setNavJump = function(i,lib){
    var item = lib[i];

    item.onclick = function (){
        document.documentElement.scrollTop = i*800;
    }
};

for (var i=0;i<navItems.length;i++){
    setNavJump(i,navItems);
}
for (var i=0;i<outLineItem.length;i++){
    setNavJump(i,outLineItem);
}


//滑动门
var navBottom = getElm('.header-bottom')

var setTip = function (idx,lib){
    lib[idx].onmouseover = function(){
        navBottom.style.left = (idx*100+20)+'px';
    };
    var activeIdx = 0;
    lib[idx].onmouseout = function(){
        for (var i=0;i<lib.length;i++){
            if ( getCls(lib[i]).indexOf('nav-item_status_active')>-1 ){
                activeIdx = i;
                break;
            }
        }
        navBottom.style.left = (activeIdx*100+20)+'px';
    }
};
for (var i=0;i<navItems.length;i++){
    setTip(i,navItems)
}


//优化开始动画
setTimeout(function(){
    playScreenAnimateDone('#section1');
},200);