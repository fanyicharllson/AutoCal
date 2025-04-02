import { Modal } from "./Main.modal.component";

interface showModalProps {
  isOpen: boolean;
  setIsOpen: (close: boolean) => void;
}

function ShowModal({ isOpen, setIsOpen }: showModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Generate your Calender now!"
        footer={
          <>
            <button
              className="btn-style py-2 px-4 hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Generate
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
                className="input text-sm"
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
                placeholder="Enter your year"
                className="input text-sm"
              />
            </div>
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
              >
                <option>Select Catergory</option>
                <option value={12}>Full Year(12 months)</option>
                <option value={6}>Half Year(1-6 months)</option>
                <option value={1}>Single Month(1 month)</option>
                <option value={4}>Quater Year(1-4 months)</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              <span className="font-bold">NB* </span>
              If you don't select your category, it will generate full year calender for you by default.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ShowModal;
