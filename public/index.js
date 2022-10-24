var i = 0;
var eventlength = 0;

apifunc = async() => {
    let apiData = null;
    apiData = await fetch('./form/api')
    let Data = await apiData.json();
    return Data;
}

document.addEventListener('DOMContentLoaded',async()=>{
    myfunction();
    cardinfofun(i);
    i = 0;
    let data = [];
    try{
        data = await apifunc();
        eventlength = data.length;
    }catch(e){
        console.log(e);
    }
})

function myfunction() {
    if (i == 0) {
        document.getElementById("leftslide").style.opacity = "0.3";
    }
    else{
        document.getElementById("leftslide").style.opacity = "1";
    }
    if (i == eventlength - 1) {
        document.getElementById("rightslide").style.opacity = "0.3";
    }
    else if (i != eventlength - 1) {
        document.getElementById("rightslide").style.opacity = "1";
    }
}

var a = 0;

cardinfofun = async(p)=>{
    let apiData = null;
    apiData = await fetch('./form/api')
    let Data = await apiData.json();
    let x = '<div id="eventinfocard"><div id="evnamediv"><span>' + Data[p].name + '</span></div><div id="descdiv"><span>' + Data[p].description + '</span></div><div class="eventbtns" id="desdiv"><div><button class="navbutton eventnavbtns" title="share"><img src="content\\share.png" id="share"></button><button class="navbutton eventnavbtns" title="Participate"><a href ="'+Data[p].partlink+'" target ="_blank"><img src="content\\participate.png" id="takepart"></a></button><button class="navbutton eventnavbtns" title="More" onclick="slide()"><img src="content\\more.png" id="more"></button> </div></div></div></div>'
    document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (p + 1) + '.jpg")'
    document.getElementById("eventname1").innerHTML = `<img src="${Data[p].posterlink}" alt="nologo" id="eventlogo">`;
    document.getElementById("eventinfo").innerHTML = x
}
function nextevent() {
    if (i < eventlength-1) {
        i++;
        info()
    }
    myfunction();
}
function lastevent() {
    if (i > 0) {
        i--;
        info()
    }
    myfunction();
}

function info() {
    cardinfofun(i)
}
function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 35rem;  ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(180deg)"
        setTimeout(info, 300);
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: none; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        // document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
}