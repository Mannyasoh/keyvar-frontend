import React, { FC } from "react";

const LinkedInIcon: FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 35 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <ellipse cx="17.5" cy="18.5" rx="17.5" ry="18.5" fill="#FBF9F0" />
      <rect
        x="1.59082"
        y="1.68188"
        width="31.8182"
        height="33.6364"
        fill="url(#pattern5460)"
      />
      <defs>
        <pattern
          id="pattern5460"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1067_3965"
            transform="matrix(0.00206473 0 0 0.00195312 -0.0285714 0)"
          />
        </pattern>
        <image
          id="image0_1067_3965"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LinkedInIcon;