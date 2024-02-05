import scheduler from "node-schedule";

let count = 0;

const jobFunction = () => {
    const nextTime = new Date(new Date().getTime() + 58 * 60 * 1000);
    scheduler.scheduleJob(nextTime, jobFunction, { scheduled: true, timezone: "Asia/Tashkent" });

    // work start
    // ...
    count++;
    console.log(count, new Date());
    // work end
};

jobFunction();
