// Example dailyLogs array
// const dailyLogs = [
//   { Focus_time: "01:20:30", Code_time: "02:10:00", Active_code_time: "01:00:00", HTML: 50, CSS: 30, JavaScript: 20, React: 10 },
//   { Focus_time: "00:40:30", Code_time: "01:30:00", Active_code_time: "00:50:00", HTML: 30, CSS: 20, JavaScript: 10, React: 5 },
// ];

function sumDailyLogs(dailyLogs, previousDate) {
    const totalFocus = dailyLogs.reduce((sum, item) => sum + parseTime(item.Focus_time), 0);
    const totalCodeTime = dailyLogs.reduce((sum, item) => sum + parseTime(item.Code_time), 0);
    const totalActiveCodeTime = dailyLogs.reduce((sum, item) => sum + parseTime(item.Active_code_time), 0);
    const totalHtml = dailyLogs.reduce((sum, item) => sum + (item.HTML || 0), 0);
    const totalCss = dailyLogs.reduce((sum, item) => sum + (item.CSS || 0), 0);
    const totalJS = dailyLogs.reduce((sum, item) => sum + (item.JavaScript || 0), 0);
    const totalReact = dailyLogs.reduce((sum, item) => sum + (item.React || 0), 0);

    const previousEntry = {
        date: previousDate,
        total_focus: formatTime(totalFocus),
        total_CT: formatTime(totalCodeTime),
        total_ACT: formatTime(totalActiveCodeTime),
        HTML: totalHtml,
        CSS: totalCss,
        JS: totalJS,
        REACT: totalReact,
    };

    return previousEntry;
}

// Helpers
function parseTime(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 2) parts.push(0); // HH:MM => HH:MM:00
    return parts[0] * 3600 + parts[1] * 60 + parts[2]; // convert to seconds
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Usage example
const previousDate = "2025-10-16";
const previousEntry = sumDailyLogs(dailyLogs, previousDate);
console.log(previousEntry);
