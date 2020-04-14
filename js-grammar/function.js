var myBirthTime = new Date(1994, 08, 13, 12, 30);

function updateParagraph() {
  var now = new Date();
  var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText =
    '生まれてから' + seconds + '秒経過。';
}

setInterval(updateParagraph, 50);

function getAreaOfCircle(r) {
    return r * r * 3.14
}

document.write('<br>半径5cmの円の面積 = ' + getAreaOfCircle(5));
document.write('<br>半径10cmの円の面積 = ' + getAreaOfCircle(10));
document.write('<br>半径15cmの円の面積 = ' + getAreaOfCircle(15));
