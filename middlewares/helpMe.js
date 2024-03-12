let requestCount = 0;

function helpMe(req, res, next) {
    req.timeItHasHappened = Date.now();

    requestCount++;
    console.log(req.timeItHasHappened, '>', requestCount, req.url);

    next();
}

export { helpMe };