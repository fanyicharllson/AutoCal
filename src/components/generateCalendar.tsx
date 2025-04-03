export const generateCalendar = (year: number, months: number) => {
    const calendarData = [];

    for (let month = 0; month < months; month++) {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = (firstDay.getDay() + 6) % 7; // Convert Sunday-first to Monday-first

        const monthData = {
            name: firstDay.toLocaleString("default", { month: "long" }),
            days: [] as { day: number; isCurrentMonth: boolean }[],
        };

        // Add empty placeholders for alignment (before 1st day)
        for (let i = 0; i < firstDayIndex; i++) {
            monthData.days.push({ day: 0, isCurrentMonth: false });
        }

        // Add actual days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            monthData.days.push({ day, isCurrentMonth: true });
        }

        // Add placeholders at the end (to complete the last row)
        while (monthData.days.length % 7 !== 0) {
            monthData.days.push({ day: 0, isCurrentMonth: false });
        }

        calendarData.push(monthData);
    }

    return calendarData;
};
