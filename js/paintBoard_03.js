
const canvas = document.getElementById("canvas");
const lineWidth = document.getElementById("line-width");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const btnMode = document.getElementById("btnMode");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

//flag 변수
let isPainting = false;
let isFilling = false;


/**
 * 캔버스에 선을 그리는 함수
 */
function onMouseMove(event){

    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

/**
 * mouse버튼이 내려갈 때
 */
function onMouseDown(event){
    isPainting = true;
}

/**
 * 그리기를 취소한다.
 * 선을 그릴 때마다 선 색깔을 바꾼다.
 */
function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();

}

/**
 * 선의 두께를 변경한다.
 */
function onChangeLineWidth(event){
    //console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

/**
 * 색을 변경한다.
 */
function onClickColor(event){
    console.dir(event);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
}

/**
 * 모드를 변경한다.
 * 채우기면 그리기로
 * 그리기면 채우기로
 */
function onMode(){
    //isFilling true

    //isFilling false

}

/**
 * 캔버스를 선택한 색깔로 채운다
 */
function onClickCanvas(){
    //isFilling true
    
}
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onClickCanvas);
lineWidth.addEventListener("change", onChangeLineWidth);

colorOptions.forEach((color) =>
    color.addEventListener("click", onClickColor));
btnMode.addEventListener("click", onMode);