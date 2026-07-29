// ===============================
// 1. BASIC PROMISE CREATION
// ===============================

function example1() {
    console.log("Example 1: Basic Promise");

    const p = new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                resolve("Task completed successfully.");
            } else {
                reject(new Error("Task failed."));
            }
        }, 1000);
    });

    p.then((result) => console.log("Resolved:", result))
     .catch((err) => console.error("Rejected:", err.message));
}

// example1();


// ===============================
// 2. PROMISE CHAINING
// ===============================

function fakeFetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Aman"
            });
        }, 500);
    });
}

function fakeFetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                `Post 1 by User ${userId}`,
                `Post 2 by User ${userId}`
            ]);
        }, 500);
    });
}

// Using .then()

function example2_then() {
    console.log("Example 2A: Promise Chaining (.then)");

    fakeFetchUser(1)
        .then((user) => {
            console.log("User:", user);
            return fakeFetchPosts(user.id);
        })
        .then((posts) => {
            console.log("Posts:", posts);
        })
        .catch((err) => {
            console.error(err.message);
        });
}

// Using async/await

async function example2_asyncAwait() {
    console.log("Example 2B: Async/Await");

    try {
        const user = await fakeFetchUser(2);
        console.log("User:", user);

        const posts = await fakeFetchPosts(user.id);
        console.log("Posts:", posts);

    } catch (err) {
        console.error(err.message);
    }
}

// example2_then();
// example2_asyncAwait();


// ===============================
// 3. ERROR HANDLING
// ===============================

function fakeFetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Network Error!"));
        }, 500);
    });
}

function example3_then() {
    console.log("Example 3A: Error Handling (.then)");

    fakeFetchDataWithError()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error("Caught Error:", err.message);
        });
}

async function example3_asyncAwait() {
    console.log("Example 3B: Error Handling (Async/Await)");

    try {
        await fakeFetchDataWithError();
    } catch (err) {
        console.error("Caught Error:", err.message);
    }
}

// example3_then();
// example3_asyncAwait();


// ===============================
// 4. Promise.all()
// ===============================

function delay(value, ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`${value} failed`));
            } else {
                resolve(value);
            }
        }, ms);
    });
}

function example4_promiseAll() {
    console.log("Example 4: Promise.all()");

    Promise.all([
        delay("A", 300),
        delay("B", 500),
        delay("C", 700)
    ])
        .then((result) => {
            console.log("All Promises Resolved:", result);
        })
        .catch((err) => {
            console.error("One Promise Failed:", err.message);
        });
}

// example4_promiseAll();


// ===============================
// 5. Promise.race()
// ===============================

function timeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timeout"));
        }, ms);
    });
}

function example5_promiseRace() {
    console.log("Example 5: Promise.race()");

    const slowRequest = delay("Service Response", 2000);

    Promise.race([
        slowRequest,
        timeout(1000)
    ])
        .then((result) => {
            console.log("Winner:", result);
        })
        .catch((err) => {
            console.error("Race Error:", err.message);
        });
}

// example5_promiseRace();
// ======================================
// 6. Promise.any()
// Resolves as soon as any Promise succeeds
// ======================================

function example6_promiseAny() {
    console.log("Example 6: Promise.any()");

    Promise.any([
        delay("Service A", 200, true),
        delay("Service B", 300, true),
        delay("Service C", 500, false)
    ])
        .then((result) => {
            console.log("First Successful Result:", result);
        })
        .catch((err) => {
            console.log("All Promises Failed");
            console.error(err.errors.map((e) => e.message));
        });
}

// example6_promiseAny();


// ======================================
// 7. Sequential Execution
// ======================================

function processItem(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed Item ${id}`);
        }, 300);
    });
}

// Wrong way: forEach doesn't wait for async callbacks

function example7_wrong_forEach() {
    console.log("Example 7A: Wrong use of forEach()");

    [1, 2, 3].forEach(async (id) => {
        const result = await processItem(id);
        console.log(result);
    });

    console.log("forEach loop finished (items may still be processing)");
}

// Correct way: for...of waits for each Promise

async function example7_correct_forOf() {
    console.log("Example 7B: Correct use of for...of");

    for (const id of [1, 2, 3]) {
        const result = await processItem(id);
        console.log(result);
    }

    console.log("for...of loop finished");
}

// example7_wrong_forEach();
// example7_correct_forOf();


// ======================================
// 8. Promisify Callback Function
// ======================================

function oldStyleReadFile(path, callback) {
    setTimeout(() => {
        if (path) {
            callback(null, `Contents of ${path}`);
        } else {
            callback(new Error("No path provided"));
        }
    }, 300);
}

// Generic Promisify Function

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    };
}

const readFileAsync = promisify(oldStyleReadFile);

async function example8_promisify() {
    console.log("Example 8: Promisify");

    try {
        const data = await readFileAsync("file.txt");
        console.log("Promisified Result:", data);
    } catch (err) {
        console.error(err.message);
    }
}

// example8_promisify();
// ======================================
// 9. Canceling a Promise using AbortController
// ======================================

function cancellableDelay(ms, signal) {
    return new Promise((resolve, reject) => {

        const timer = setTimeout(() => {
            resolve("Finished without cancellation.");
        }, ms);

        signal.addEventListener("abort", () => {
            clearTimeout(timer);
            reject(new Error("Operation was cancelled."));
        });

    });
}

async function example9_cancellation() {
    console.log("Example 9: AbortController");

    const controller = new AbortController();

    const promise = cancellableDelay(2000, controller.signal)
        .then((result) => console.log(result))
        .catch((err) => console.error(err.message));

    // Cancel after 500ms
    setTimeout(() => {
        controller.abort();
    }, 500);

    await promise;
}


// ======================================
// 10. Retry Logic with Exponential Backoff
// ======================================

function unreliableTask(failCount) {

    let attempts = 0;

    return function () {

        attempts++;

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (attempts <= failCount) {
                    reject(new Error(`Attempt ${attempts} failed.`));
                } else {
                    resolve(`Succeeded on attempt ${attempts}.`);
                }

            }, 200);

        });

    };

}

async function retryWithBackoff(fn, retries = 3, delayMs = 300) {

    for (let attempt = 1; attempt <= retries + 1; attempt++) {

        try {

            return await fn();

        } catch (err) {

            console.log(`Retry ${attempt} failed: ${err.message}`);

            if (attempt === retries + 1) {
                throw err;
            }

            await new Promise((resolve) =>
                setTimeout(resolve, delayMs * 2 ** (attempt - 1))
            );

        }

    }

}

async function example10_retryLogic() {

    console.log("Example 10: Retry with Exponential Backoff");

    const task = unreliableTask(2);

    try {

        const result = await retryWithBackoff(task, 3, 200);
        console.log("Final Result:", result);

    } catch (err) {

        console.error("All retries exhausted:", err.message);

    }

}


// ======================================
// Run All Examples
// ======================================

async function runAll() {

    console.log("========== Promise Examples ==========\n");

    example1();
    await new Promise((r) => setTimeout(r, 1200));

    example2_then();
    await new Promise((r) => setTimeout(r, 1200));

    await example2_asyncAwait();
    await new Promise((r) => setTimeout(r, 600));

    example3_then();
    await new Promise((r) => setTimeout(r, 600));

    await example3_asyncAwait();
    await new Promise((r) => setTimeout(r, 600));

    example4_promiseAll();
    await new Promise((r) => setTimeout(r, 800));

    example5_promiseRace();
    await new Promise((r) => setTimeout(r, 2200));

    example6_promiseAny();
    await new Promise((r) => setTimeout(r, 800));

    example7_wrong_forEach();
    await new Promise((r) => setTimeout(r, 1500));

    await example7_correct_forOf();
    await new Promise((r) => setTimeout(r, 500));

    await example8_promisify();
    await new Promise((r) => setTimeout(r, 500));

    await example9_cancellation();
    await new Promise((r) => setTimeout(r, 500));

    await example10_retryLogic();

    console.log("\n========== All Examples Finished ==========");

}


// Call this to execute every example
runAll();