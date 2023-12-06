import React from "react";
import '../styles/offline.css'
export const OfflineComponent = () => {
  return (
    <section className="offline">
      <div className="offlineContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-40 h-40 dark:text-gray-600"
        >
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect
            width="176"
            height="32"
            x="168"
            y="320"
            fill="currentColor"
          ></rect>
          <polygon
            fill="currentColor"
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          ></polygon>
          <polygon
            fill="currentColor"
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          ></polygon>
        </svg>
        <p className="">
          Looks like you're not connected to a network. Check your connection
          and try again
        </p>
        <p>Try:</p>
        <ul>
          <li>
            Turning off <span className="t">Airplane mode</span>
          </li>
          <li>
            Turning on <span className="">Mobile data</span> or{" "}
            <span className="">Wi-Fi</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

