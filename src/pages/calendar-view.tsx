import { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Month {
  name: string;
  days: { day: number; weekday: string }[];
}

const CalendarView = () => {
  const [calendar, setCalendar] = useState<Month[]>([]);
  const [loading, setLoading] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("calendarData");
    if (data) {
      setCalendar(JSON.parse(data));
    }
  }, []);

  const downloadPDF = async () => {
    if (!calendarRef.current) return;
    setLoading(true);
    
    const canvas = await html2canvas(calendarRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
    pdf.save("calendar.pdf");
    setLoading(false);
  };

  return (
    <div className="p-5">
      <button
        onClick={downloadPDF}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
        disabled={loading}
      >
        {loading ? "Downloading..." : "Download as PDF"}
      </button>
      
      <div ref={calendarRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {calendar.map((month) => (
          <div key={month.name} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold text-center text-green-700 mb-3">{month.name}</h2>
            <table className="w-full border-collapse border border-green-600">
              <thead>
                <tr className="bg-green-700 text-white">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <th key={day} className="p-2 border border-green-600">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(month.days.length / 7) }).map((_, weekIndex) => (
                  <tr key={weekIndex}>
                    {month.days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, index) => (
                      <td
                        key={index}
                        className={`p-2 border border-green-600 text-center ${day.day === 0 ? "bg-gray-200" : "bg-green-100 text-green-900"}`}
                      >
                        {day.day !== 0 ? day.day : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
