export function cm(...params) {
    return Object.assign({ boxSizing: 'border-box' ,display:'flex'}, ...params);
}

const styles={
    h100: {
        height: '100%'
    },
    w100: {
        width: '100%'
    },
    uWrap: {
        flexWrap: "wrap"//自动换行
    },
    uNoWrap: {
        flexWrap: "nowrap"//截断
    },

    //主轴的排列方向
    udr: {
        //子项横向排列
        flexDirection: 'row'
    },
    udc: {
        //子项竖向排列
        flexDirection: 'column'
    },
    uf1: {
        flex: 1
    },
    //次轴排序
    uas: {
        //居前
        alignItems: 'flex-start',
    },
    uac: {
        //居中
        alignItems: 'center',
    },
    // 取消边框高亮显示
    // ou:{
    //     outline:"none"
    // },
    uae: {
        //居后
        alignItems: 'flex-end',
    },
    //主轴排序
    ujs: {
        //居前
        justifyContent: 'flex-start',
    },
    ujc: {
        //居中
        justifyContent: 'center',
    },
    uje: {
        //居后
        justifyContent: 'flex-end',
    },
    uja: {
        //平均分布
        justifyContent: "space-around",
    },
    ujb: {
        //两端
        justifyContent: "space-between",
    },
    //自身次轴对齐 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
    uSelfAuto: {alignSelf: "auto"},
    uSelfStart: {alignSelf: "flex-start"},
    uSelfEnd: {alignSelf: "flex-end"},
    uSelfCenter: {alignSelf: "center"},
    uSelfStretch: {alignSelf: "stretch"},
    upa: {
        //绝对定位
        position: 'absolute'
    },

    upr: {
        position: 'relative'
    },
    uof: {//超出隐藏
        overflow: "hidden"
    },
    //文字水平居中 enum('auto', 'left', 'right', 'center')
    utxc: {
        textAlign: "center"
    },
    //水平居右
    utxr: {
        textAlign: "right"
    },
    //文字垂直居中 textAlignVertical enum('auto', 'top', 'bottom', 'center') 只支持安卓
    utxvc: {
        textAlignVertical: 'center'
    },
    //文字垂直居顶
    utxvt: {
        textAlignVertical: 'top'
    },
    //文本横线-底部
    utxdu: {
        textDecorationLine: "underline"
    },
    //文本横线-中间
    utxdt: {
        textDecorationLine: "line-through"
    },
    //文本横线-中间和底部
    utxdut: {
        textDecorationLine: "underline line-through"
    },
}

//盒子
function uf(number) {
    return {flex: number};
}

function h(number) {
    return {height: number};
}

function h_(c) {
    return {height: c};
}

//最小高度
function minh(number) {
    return {minHeight: number};
}

function minh_(c) {
    return {minHeight: c};
}

//最大高度
function maxh(number) {
    return {maxHeight: number};
}

function maxh_(c) {
    return {maxHeight: c};
}

//宽度百分比
function wRatio(number) {
    return {width: number + "%"};
}

//高度百分比
function hRatio(number) {
    return {height: number + "%"};
}

//宽度
function w(number) {
    return {width: number};
}

function w_(c) {
    return {width: c};
}

//最小宽度
function minw(number) {
    return {minWidth: number};
}

function minw_(c) {
    return {minWidth: c};
}

//最大宽度
function maxw(number) {
    return {maxWidth: number};
}

function maxw_(c) {
    return {maxWidth: c};
}

//内边距
function pt(number) {
    return {paddingTop: number};
}

function pt_(c) {
    return {paddingTop: c};
}

function pr(number) {
    return {paddingRight: number};
}

function pr_(c) {
    return {paddingRight: c};
}

function pl(number) {
    return {paddingLeft: number};
}

function pl_(c) {
    return {paddingLeft: c};
}

function pb(number) {
    return {paddingBottom: number};
}

function pb_(c) {
    return {paddingBottom: c};
}

function ptb(number) {
    return {paddingTop: number, paddingBottom: number};
}

function ptb_(c) {
    return {paddingTop: c, paddingBottom: c};
}

function marginLeft(c){
    return {marginLeft:c }
}

function plr(number) {
    return {paddingRight: number, paddingLeft: number};
}

function plr_(c) {
    return {paddingRight: c, paddingLeft: c};
}

    function pa(number) {
    return {padding: number};
}

function pa_(c) {
    return {padding: c};
}

//边框
function bt(number) {
    return {borderTopWidth: number};
}

function bt_(number) {
    return {borderTopWidth: number};
}

function bb(number) {
    return {borderBottomWidth: number};
}

function bb_(number) {
    return {borderBottomWidth: number};
}

function bl(number) {
    return {borderLeftWidth: number};
}

function bl_(number) {
    return {borderLeftWidth: number};
}

function br(number) {
    return {borderRightWidth: number};
}

function br_(number) {
    return {borderRightWidth: number};
}

function blr(number) {
    return {borderLeftWidth: number, borderRightWidth: number};
}

function blr_(number) {
    return {borderLeftWidth: number, borderRightWidth: number};
}

function btb(number) {
    return {borderTopWidth: number, borderBottomWidth: number};
}

function btb_(number) {
    return {borderTopWidth: number, borderBottomWidth: number};
}

function ba(number) {
    return {borderWidth: number};
}

function ba_(number) {
    return {borderWidth: number};
}

//边框 不乘以比例
function btAbs(number) {
    return {borderTopWidth: number};
}

function bbAbs(number) {
    return {borderBottomWidth: number};
}

function blAbs(number) {
    return {borderLeftWidth: number};
}

function brAbs(number) {
    return {borderRightWidth: number};
}

function blrAbs(number) {
    return {borderLeftWidth: number, borderRightWidth: number};
}

function btbAbs(number) {
    return {borderTopWidth: number, borderBottomWidth: number};
}

function baAbs(number) {
    return {borderWidth: number};
}

//外边距
function mt(number) {
    return {marginTop: number};
}

function mt_(c) {
    return {marginTop: c};
}

function mb(number) {
    return {marginBottom: number};
}

function mb_(c) {
    return {marginBottom: c};
}

function ml(number) {
    return {marginLeft: number};
}

function ml_(c) {
    return {marginLeft: c};
}

function mr(number) {
    return {marginRight: number};
}

function mr_(c) {
    return {marginRight: c};
}

function mlr(number) {
    return {marginLeft: number, marginRight: number};
}

function mlr_(c) {
    return {marginLeft: c, marginRight: c};
}

function mtb(number) {
    return {marginTop: number, marginBottom: number};
}

function mtb_(c) {
    return {marginTop: c, marginBottom: c};
}

function ma(number) {
    return {margin: number};
}

function linH(number) {
    return {lineHeight: number};
}

function ma_(c) {
    return {margin: c};
}

//圆角
function radiusA(number) {
    return {borderRadius: number};
}

function radiusA_(c) {
    return {borderRadius: c};
}

function radiusTL(number) {
    return {borderTopLeftRadius: number};
}

function radiusTL_(c) {
    return {borderTopLeftRadius: c};
}

function radiusTR(number) {
    return {borderTopRightRadius: number};
}

function radiusTR_(c) {
    return {borderTopRightRadius: c};
}

function radiusBL(number) {
    return {borderBottomLeftRadius: number};
}

function radiusBL_(c) {
    return {borderBottomLeftRadius: c};
}

function radiusBR(number) {
    return {borderBottomRightRadius: number};
}

function radiusBR_(c) {
    return {borderBottomRightRadius: c};
}

//位置
function top(number) {
    return {top: number};
}

function top_(c) {
    return {top: c};
}

function bottom(number) {
    return {bottom: number};
}

function bottom_(c) {
    return {bottom: c};
}

function left(number) {
    return {left: number};
}

function left_(c) {
    return {left: c};
}

function right(number) {
    return {right: number};
}

function right_(c) {
    return {right: c};
}

/*字体大小*/
function fSize(number) {
    return {fontSize: number};
}

function fSize_(c) {
    return {fontSize: c};
}

/*字体加粗*/
function fWeight(c) {
    return {fontWeight: c};
}

/*字体颜色*/
function color(c) {
    return {color: c};
}


/*背景色*/
function bgColor(c) {
    return {backgroundColor: c};
}

/*边框色*/
function bdColor(c) {
    return {borderColor: c};
}

/*透明度*/
function opacity(c) {
    return {opacity: c};
}

function zindex(c) {
    return {zIndex: c};
}
function cursor(s){
    return {cursor:s}
}
styles.h = h;
styles.h_ = h_;
styles.hRatio = hRatio;
styles.minh = minh;
styles.minh_ = minh_;
styles.maxh = maxh;
styles.maxh_ = maxh_;
styles.w = w;
styles.w_ = w_;
styles.minw = minw;
styles.minw_ = minw_;
styles.maxw = maxw;
styles.maxw_ = maxw_;
//宽度百分比
styles.wRatio = wRatio;
styles.hRatio = hRatio;
//内边距
styles.pt = pt;
styles.pt_ = pt_;
styles.pr = pr;
styles.pr_ = pr_;
styles.pl = pl;
styles.pl_ = pl_;
styles.pb = pb;
styles.pb_ = pb_;
styles.ptb = ptb;
styles.ptb_ = ptb_;
styles.plr = plr;
styles.plr_ = plr_;
styles.pa = pa;
styles.pa_ = pa_;
/*边框宽度数值会乘以比例*/
styles.bt = bt;
styles.bt_ = bt_;
styles.bb = bb;
styles.bb_ = bb_;
styles.bl = bl;
styles.bl_ = bl_;
styles.br = br;
styles.br_ = br_;
styles.blr = blr;
styles.blr_ = blr_;
styles.btb = btb;
styles.btb_ = btb_;
styles.ba = ba;
styles.ba_ = ba_;
/*边框宽度 数值不会会乘以比例**/
styles.btAbs = btAbs;
styles.bbAbs = bbAbs;
styles.blAbs = blAbs;
styles.brAbs = brAbs;
styles.blrAbs = blrAbs;
styles.btbAbs = btbAbs;
styles.baAbs = baAbs;
/*盒子*/
styles.uf = uf;
/*外边距*/
styles.mt = mt;
styles.mt_ = mt_;
styles.mb = mb;
styles.mb_ = mb_;
styles.ml = ml;
styles.ml_ = ml_;
styles.mr = mr;
styles.mr_ = mr_;
styles.mlr = mlr;
styles.mlr_ = mlr_;
styles.mtb = mtb;
styles.mtb_ = mtb_;
styles.ma = ma;
styles.ma_ = ma_;
/*2种比例*/
/*圆角*/
styles.radiusA = radiusA;
styles.radiusA_ = radiusA_;
styles.radiusTL = radiusTL;
styles.radiusTL_ = radiusTL_;
styles.radiusTR = radiusTR;
styles.radiusTR_ = radiusTR_;
styles.radiusBL = radiusBL;
styles.radiusBL_ = radiusBL_;
styles.radiusBR = radiusBR;
styles.radiusBR_ = radiusBR_;
/*位置*/
styles.top = top;
styles.top_ = top_;
styles.bottom = bottom;
styles.bottom_ = bottom_;
styles.left = left;
styles.left_ = left_;
styles.right = right;
styles.right_ = right_;
/*字体大小*/
styles.fSize = fSize;
styles.fSize_ = fSize_;
styles.fWeight = fWeight;
/*颜色*/
styles.color = color;
styles.bgColor = bgColor;
styles.bdColor = bdColor;
/*透明度*/
styles.opacity = opacity;
/*层*/
styles.zindex = zindex;
/*行高*/
styles.linH = linH;
styles.marginLeft = marginLeft;
styles.cursor = cursor;

export default styles

