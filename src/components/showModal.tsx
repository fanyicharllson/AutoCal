import { useState } from "react";
import { Modal } from "./Main.modal.component";
import { generateCalendar } from "./generateCalendar";
import { useNavigate } from "react-router-dom";
import Loadingspin from "./loadingSpinner";

interface showModalProps {
  isOpen: boolean;
  setIsOpen: (close: boolean) => void;
}

function ShowModal({ isOpen, setIsOpen }: showModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle category selection
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.options[event.target.selectedIndex].text);
  };

  // Handle year input & validate
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputYear = event.target.value;

    // Check if it's a number
    if (!/^\d*$/.test(inputYear)) return;

    setYear(inputYear);

    // Validate year range
    if (inputYear && (Number(inputYear) < 1900 || Number(inputYear) > 9999)) {
      setError("Please enter a valid year between 1900 and 9999.");
    } else {
      setError("");
    }
  };
  const handleGenerate = () => {
    if (!year) return;
    setLoading(true);

    setTimeout(() => {
      const calendar = generateCalendar(
        Number(year),
        selectedCategory ? Number(selectedCategory) : 12
      );
      localStorage.setItem("calendarData", JSON.stringify(calendar)); // Pass data to next page
      navigate("/calendar-view");
    }, 2000);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Generate your Calender now!"
        footer={
          <>
            <button
              className="btn-style py-2 px-4 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGenerate}
              disabled={!year || !!error || loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <Loadingspin />
                  <span className="text-sm">Generating...</span>
                </div>
              ) : (
                "Generate"
              )}
            </button>
            <button
              className="border-btn-style hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </>
        }
      >
        {/* Modal content */}
        <p className="text-sm text-gray-500 text-center max-w-sm">
          Enter the year you wish to generate calender for, specify how you want
          to generate the calender by selecting from dropdown.
        </p>
        <div className="space-y-3 pt-4">
          <div className="space-y-2">
            <label htmlFor="selectedCatergory" className="label">
              Selected Category:{" "}
            </label>
            <div className="w-full">
              <input
                type="text"
                name="CatergoryInput"
                id="selectedCatergory"
                readOnly
                placeholder="You will see your selected category here"
                className="input text-sm bg-green-50"
                value={
                  selectedCategory
                    ? `${selectedCategory} - ${year || "Year not entered"}`
                    : `Full Year(12 months) - ${year || "Year not entered"}`
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="Year" className="label">
              Enter Year:{" "}
            </label>
            <div className="w-full">
              <input
                type="number"
                name="year"
                id="Year"
                value={year}
                onChange={handleYearChange}
                placeholder="Enter your year"
                className="input text-sm"
                min="1900"
                max="9999"
              />
            </div>
            {/* Display error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="categorydropdown" className="label">
              Select Your Catergory:
            </label>
            <div>
              <select
                name="selectCategory"
                id="categorydropdown"
                className="select cursor-pointer text-sm"
                onChange={handleCategoryChange}
              >
                <option>Select Catergory</option>
                <option value={12}>Full Year(12 months)</option>
                <option value={6}>Half Year(1-6 months)</option>
                <option value={1}>Single Month(1 month)</option>
                <option value={4}>Quater Year(1-4 months)</option>
              </select>
            </div>
          </div>
          {/* Notice */}
          <div>
            <p className="text-sm text-gray-500">
              <span className="font-bold">NB* </span>
              If you don't select your category, AutoCal will generate full year
              calender for you by default.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ShowModal;
