let requestCount = 0;

// function helpMe(req, res, next) {
//     req.timeItHasHappened = Date.now().toLocaleDateString();

//     requestCount++;
//     console.log(req.timeItHasHappened, '>', requestCount, req.url);

//     next();
// }
function helpMe(req, res, next) {
    req.timeItHasHappened = new Date().toLocaleString(); // Change to current date
    
    requestCount++;
    console.log(req.timeItHasHappened, '>', requestCount, req.url, req.ip);

    next();
}
export { helpMe };