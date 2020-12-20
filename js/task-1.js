const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${ms}`)
        })
    })
};

const logger = time => console.log(`Resolved after ${time}ms`);