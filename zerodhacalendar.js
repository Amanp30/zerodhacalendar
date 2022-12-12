import moment from "moment";
import React from "react";
import styles from "../styles/zerodhacalender.module.css";

function zerodhacalender() {
  var year = 2022;
  var startOfYear = new Date(year, 0, 1);
  var endOfYear = new Date(year, 11, 31);
  var dates = [];
  //generating dates array
  while (startOfYear <= endOfYear) {
    dates.push(startOfYear);
    startOfYear = new Date(startOfYear.getTime() + 86400000); // add one day
  }
  var months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  var mdate = [[], [], [], [], [], [], [], [], [], [], [], []];

  //generating dates and checking days and adding "" array
  for (const date of dates) {
    var engday = moment(date).format("dddd");
    var monthname = moment(date).format("MMMM");
    var currentmonth = date.getMonth();

    if (engday === "Saturday" && date.getDate() == 1) {
      mdate?.[currentmonth]?.push("", "", "", "", "", "", date);
    } else if (engday === "Friday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push("", "", "", "", "", date);
    } else if (engday === "Thursday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push("", "", "", "", date);
    } else if (engday === "Wednesday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push("", "", "", date);
    } else if (engday === "Tuesday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push("", "", date);
    } else if (engday === "Monday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push("", date);
    } else if (engday === "Sunday" && date.getDate() === 1) {
      mdate?.[currentmonth]?.push(date);
    } else {
      mdate?.[currentmonth]?.push(date);
    }
  }

  console.log(mdate);

  return (
    <>
      <div className={styles.magzi}>
        <div className={styles.months}>
          <div className={styles.mms}>January</div>
          <div className={styles.mms}>February</div>
          <div className={styles.mms}>March</div>
          <div className={styles.mms}>April</div>
          <div className={styles.mms}>May</div>
          <div className={styles.mms}>June</div>
          <div className={styles.mms}>July</div>
          <div className={styles.mms}>August</div>
          <div className={styles.mms}>September</div>
          <div className={styles.mms}>October</div>
          <div className={styles.mms}>November</div>
          <div className={styles.mms}>December</div>
        </div>
        <div className={styles.daywise}>
          <div className={styles.day}></div>
          <div className={styles.day}>M</div>
          <div className={styles.day}></div>
          <div className={styles.day}>W</div>
          <div className={styles.day}></div>
          <div className={styles.day}>F</div>
          <div className={styles.day}></div>
        </div>
        <div className={styles.calendar}>
          {mdate.map((elem, i) => {
            return (
              <>
                <div className={styles.calendar_month}>
                  {elem.map((date) => {
                    return (
                      <>
                        {date !== "" ? (
                          <div
                            className={styles.zboxdate}
                            onClick={(e) => console.log(date)}
                          ></div>
                        ) : (
                          <div className={styles.zboxnodate}></div>
                        )}
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default zerodhacalender;
