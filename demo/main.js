/**
 * Created by yasem on 10.07.2016.
 */
//Demo file created for test
function testFile(){
        let a = "b";
        console.log("These");
        console.warn('console');
        console.error('statements');
        console.dir({ will: be, removed: "true" })
        console.log("except for this one!");/*NotClearConsole*/
        console.log("this will fail (" + b + ")");
        console.log("this will fail too (" + b + ")"); /*NotClearConsole*/
}
