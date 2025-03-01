function formatDate() {
    let today = new Date();
    let todaysDate = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
    let formattedDate = today.toLocaleDateString("en-US", todaysDate);
    let dateParts = formattedDate.replace(",", "").split(" ");
    let [weekday, month, day, year] = dateParts;
    let finalDate = `${weekday.toUpperCase()}<br>${month} ${day} ${year}`;
    document.getElementById("dateShow").innerHTML = finalDate;
}

formatDate();