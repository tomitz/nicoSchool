for(var i = 1; i <= 100000; i++) {
    if(i % 15 === 0) {
        // 3 と 5 の両方で割り切れる場合の処理
        document.write('FizzBuzz ');
    } else if (i % 3 === 0) {
        // 3 で割り切れる場合の処理
        document.write('Fizz ');
    } else if (i % 5 === 0) {
        // 5 で割り切れる場合の処理
        document.write('Buzz ');
    } else {
        document.write(i + ' ');
    }
}
