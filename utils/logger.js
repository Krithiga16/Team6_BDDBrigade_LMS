function logTestResults(testName,status){
    const seperator = '='.repeat(40);
    console.log(`\n${seperator}`);
    console.log(`Test: ${testName}`);
    console.log(`Status: ${status}`);
    console.log(`${seperator}\n`);
}

function getScreenshotFileName(testName){
    const ssName = testName.replace('Team6_');
    return `screenshot_${ssName}_${Date.now()}.png`;
}

module.exports ={
    logTestResults,
    getScreenshotFileName
}