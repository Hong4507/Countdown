const elements = [...document.querySelectorAll("span p:nth-child(1)")].reverse(),
    mod = [1000, 60, 60, 24],
    time = Date.parse("2022/5/21");
const loop = () => {
    var countdown = time - Date.now();
    for (const key in elements) {
        countdown = Math.floor(countdown / mod[key]);
        elements[key].textContent = (mod[1 + Number(key)] ? countdown % mod[1 + Number(key)] : countdown).toString().padStart(2,0);
    }
    setTimeout(loop, 1000)
}
loop();

