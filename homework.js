var Homework = {
};

document.getElementById("sampleBtn").addEventListener('click', function (event) {
    if (document.getElementById('table').style.display === 'none')
        Homework.sample();
});

!function () {
    Homework.sample = function () {
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                Homework.createTable(i, j, i * j);
            }
        }
    }

    /**
     * 
     * @param {number} multiplicand 
     * @param {number} multiplier 
     * @param {number} ans 
     */
    Homework.createTable = function (multiplicand, multiplier, ans) {
        let td = document.createElement('td');
        td.innerHTML = multiplicand + 'x' + multiplier + ' = ' + ans;

        let body = document.getElementById('body');
        body.getElementsByTagName('tr')[multiplier - 1].appendChild(td);
        document.getElementById('table').style.display = 'block';
    }
}();
