var messageArray = ["Hello! Somu.......How are you ?... is everything going well? it's a small token of love from me This time, I have no money to buy a gift but have a brain to make a surprise website for you"];
var textPosition = 0;
var speed = 100;
text = () => {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    if (textPosition++ != messageArray[0].length) {
        setTimeout(text, speed);
    }

}
window.addEventListener("load", text);