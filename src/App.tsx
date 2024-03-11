import './App.css';
import { IoSettings } from 'react-icons/io5';

function App() {
  return (
    <div className="drawer bg-[#F1F2F6] h-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-6">
        <label
          htmlFor="my-drawer"
          className="btn btn-md btn-neutral btn-circle drawer-button"
        >
          <IoSettings fontSize={'1.75rem'} color="#F1F2F6" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-8 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-6">
          <div className="text-[2rem]">Navigation</div>
          <div className="text-[1rem] font-semibold bg-red-300">
            Choose an Enurka functionality
          </div>
          <ul className="bg-pink-600">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
