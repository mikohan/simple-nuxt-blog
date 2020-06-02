import Vue from 'vue'

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const dateFilter = value => {
    return formatDate(value);
};

function formatDate(unixtimestamp) {
    const date = new Date(parseInt(unixtimestamp));

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedDate = day + ". " + months[month] + " " + year;
    return formattedDate;
}

Vue.filter('date', dateFilter);



function convertDateTime(unixtimestamp) {
    // Months array
    var months_arr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    // Convert timestamp to milliseconds
    var date = new Date(parseInt(unixtimestamp));

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime =
        month +
        "-" +
        day +
        "-" +
        year +
        " " +
        hours +
        ":" +
        minutes.substr(-2) +
        ":" +
        seconds.substr(-2);

    return convdataTime;
}
const convertDate = value => {
    return convertDateTime(value);
};
Vue.filter('convertDate', convertDate)