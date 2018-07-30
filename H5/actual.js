
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


function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls); //获取当前屏的所有元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    var isSetAnimateClass = false;
    var isAnimateDone = false;
    screen.onclick = function(){
        //初始化
        if (isSetAnimateClass === false){
            for (var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'-animation-init');
            }
        isSetAnimateClass = true;
            return ;
        }
        //init
        if (isAnimateDone === false){
            for ( i=0;i<animateElements.length;i++){
                 element = document.querySelector(animateElements[i]);
                 baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('-animation-init','-animation-done'));
            }
            isAnimateDone = true;
            return ;
        }
        //done
        if (isAnimateDone === true){
            for (i=0;i<animateElements.length;i++){
                element = document.querySelector(animateElements[i]);
                baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('-animation-done','-animation-init'));
            }
            isAnimateDone = false;
            return ;
        }

    }

}
setScreenAnimate('#section1');
setScreenAnimate('#section2');
setScreenAnimate('#section3');
setScreenAnimate('#section4');
setScreenAnimate('#section5');