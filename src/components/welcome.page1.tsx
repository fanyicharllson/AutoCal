// src/components/WelcomePage1.js
import { useState } from "react";

interface WelcomePageProps {
  onGenerate: (year: string, months: number[]) => void;
}

const WelcomePage1 = ({ onGenerate }: WelcomePageProps) => {
  const [year, setYear] = useState("");
  const [monthCount, setMonthCount] = useState(12); // Default to full year

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const months = Array.from({ length: monthCount }, (_, i) => i);
    onGenerate(year, months);
  };

  return (
    <div>
      <h1>Welcome to the Calendar Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <select
          value={monthCount}
          onChange={(e) => setMonthCount(Number(e.target.value))}
        >
          <option value={12}>Full Year</option>
          <option value={6}>Half Year</option>
          <option value={3}>Quarter</option>
          <option value={1}>Single Month</option>
        </select>
        <button type="submit">Generate Now</button>
      </form>
    </div>
  );
};

export default WelcomePage1;
