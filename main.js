const sorts = require('./sorts/allSorts');
const {performance} = require('perf_hooks');

function sortPerf() {
    let sortFuncArray = Object.values(sorts);
    let results = [];

    sortFuncArray.map(ele => {
        let timeBegin = performance.now();
        let fn = ele();
        let timeEnd = performance.now();

        results.push({
            'name': ele.name,
            'time': timeEnd - timeBegin
        });
    });

    return results.sort((a, b) => a.time - b.time);
}

function display(results) {
    results.map((result, index) => console.log(`${index} => Sort: ${result.name}. Time: ${format(result.time)}ms.`));
}

function format(num) { return num.toFixed(2); }

display(sortPerf());
