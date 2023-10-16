window.alert('お使いの端末から33.4個のウイルス対策が検出されませんでした');
const clock = () => {
  const d = new Date();
  let ye = d.getFullYear();
  let mo = d.getMonth() + 1;
  let da = d.getDate();
  let daymia = d.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[daymia];
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  mo = mo < 10 ? "0" + mo : mo;
  da = da < 10 ? "0" + da : da;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let miaa = `${ye}.${mo}.${da} ${day}`;
  let miab = `${hour}:${min}:${sec}`;
  
  document.querySelector(".clock-date").innerText = miaa;
  document.querySelector(".clock-time").innerText =miab;
};

setInterval(clock, 1000);
