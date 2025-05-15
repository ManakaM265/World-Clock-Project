function updateTime() {
  let nairobi = document.querySelector("#nairobi");
  let nairobiDate = nairobi.querySelector(".date");
  let nairobiTime = nairobi.querySelector(".time");
  let nairobiCurrentTime = moment().tz("Africa/Nairobi");
  nairobiDate.innerHTML = moment().format("MMMM Do YYYY");
  nairobiTime.innerHTML = nairobiCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  let londonCurrentTime = moment().tz("Europe/London");
  londonDate.innerHTML = moment().format("MMMM Do YYYY");
  londonTime.innerHTML = londonCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
