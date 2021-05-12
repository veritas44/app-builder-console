/* eslint-disable react/self-closing-comp */
import React from 'react';

function Icon(props: { primaryColor: string }) {
  const [state, setState] = React.useState({
    audioMute: true,
    screenshare: false,
    videoMute: true,
    recording: true,
    chat: false,
  });

  return (
    <div style={{ position: 'relative' }}>
      {state.screenshare ? (
        <img
          src="/sc.png"
          style={{
            position: 'absolute',
            left: '50%',
            width: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      ) : (
        <></>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1170" style={{height:"calc(100vh - 210px)"}}>
        <defs>
          <clipPath id="clip-Share_9">
            <path d="M0 0H1920V1080H0z"></path>
          </clipPath>
        </defs>

        <g clipPath="url(#clip-Share_9)" data-name="Share – 9" transform="translate(0,90)">
          <path fill="#fff" d="M0 0H1920V1080H0z"></path>
          <path
            fill="#03cedd"
            d="M0 0H384V243H0z"
            data-name="Rectangle 65"
            transform="translate(1536 97)"></path>
          <g data-name="Group 145" transform="translate(1237.941 -42.859)">
            <ellipse
              cx="30.702"
              cy="30.702"
              fill="#efbda0"
              data-name="Ellipse 15"
              rx="30.702"
              ry="30.702"
              transform="translate(483.972 173.025)"></ellipse>
            <path
              fill="#ffca28"
              d="M756.537 452.18l-17.085 49.536-8.234 23.884s-.84 37.975-1.685 37.975c-.175 0-.425.547-.7 1.41h-81.821l6.566-69.769-.4-3.251-5.139-41.665a20.883 20.883 0 0113.8-22.256l8.582-3.017a67.944 67.944 0 0135.091-2.676 67.945 67.945 0 0128.671 12.767z"
              data-name="Path 111"
              transform="translate(-190.825 -183.674)"></path>
            <path
              fill="#4a3015"
              d="M758.715 286.47s-9.748-21.12-28.434-16.247-29.244 12.185-30.056 19.5.406 18.278.406 18.278 2.031-15.03 15.03-11.779 33.305.812 33.305.812l3.249 29.244s3.655-5.28 7.717-2.031 11.78-31.279-1.217-37.777z"
              data-name="Path 113"
              transform="translate(-217.416 -107.478)"></path>
            <path
              fill="#ffca28"
              d="M863.6 560.269s0 19.283-7.087 36.009h-24.35l.214-.565 6.75-29.539-2.53-10.125-6.115-23.039a67.349 67.349 0 01.541-36.47l.277-.931a16.972 16.972 0 0116.268-12.135s10.97 9.285 10.125 27z"
              data-name="Path 114"
              transform="translate(-281.856 -214.965)"></path>
            <path
              fill="#a0616a"
              d="M486.885 712.634a9.318 9.318 0 0111.415-8.594l17.657-28.014 7.1 15.674-17.857 24.2a9.369 9.369 0 01-18.318-3.267z"
              data-name="Path 73"
              transform="translate(-110.381 -311.691)"></path>
            <path
              fill="#ffca28"
              d="M592.907 441.35l-.974.172a31.329 31.329 0 00-24.063 19.843q-.172.469-.331.944l-6.751 30.38-46.416 88.611 14.349 8.438s39.664-46.416 44.728-62.45l20.388-39.209a12.707 12.707 0 001.424-6.351l-1.528-39.715a.7.7 0 00-.825-.666z"
              data-name="Path 115"
              transform="translate(-124.197 -193.801)"></path>
          </g>
          <path
            fill="#b2ff59"
            d="M0 0H384V243H0z"
            data-name="Rectangle 65"
            transform="translate(1536 340)"></path>
          <g data-name="Group 146" transform="translate(1237.941 199.141)">
            <ellipse
              cx="30.702"
              cy="30.702"
              fill="#efbda0"
              data-name="Ellipse 15"
              rx="30.702"
              ry="30.702"
              transform="translate(483.972 173.025)"></ellipse>
            <path
              fill="#00bfa5"
              d="M756.537 452.18l-17.085 49.536-8.234 23.884s-.84 37.975-1.685 37.975c-.175 0-.425.547-.7 1.41h-81.821l6.566-69.769-.4-3.251-5.139-41.665a20.883 20.883 0 0113.8-22.256l8.582-3.017a67.944 67.944 0 0135.091-2.676 67.945 67.945 0 0128.671 12.767z"
              data-name="Path 111"
              transform="translate(-190.825 -183.674)"></path>
            <path
              fill="#6d6219"
              d="M758.715 286.47s-9.748-21.12-28.434-16.247-29.244 12.185-30.056 19.5.406 18.278.406 18.278 2.031-15.03 15.03-11.779 33.305.812 33.305.812l3.249 29.244s3.655-5.28 7.717-2.031 11.78-31.279-1.217-37.777z"
              data-name="Path 113"
              transform="translate(-217.416 -107.478)"></path>
            <path
              fill="#00bfa5"
              d="M863.6 560.269s0 19.283-7.087 36.009h-24.35l.214-.565 6.75-29.539-2.53-10.125-6.115-23.039a67.349 67.349 0 01.541-36.47l.277-.931a16.972 16.972 0 0116.268-12.135s10.97 9.285 10.125 27z"
              data-name="Path 114"
              transform="translate(-281.856 -214.965)"></path>
            <path
              fill="#a0616a"
              d="M486.885 712.634a9.318 9.318 0 0111.415-8.594l17.657-28.014 7.1 15.674-17.857 24.2a9.369 9.369 0 01-18.318-3.267z"
              data-name="Path 73"
              transform="translate(-110.381 -311.691)"></path>
            <path
              fill="#00bfa5"
              d="M592.907 441.35l-.974.172a31.329 31.329 0 00-24.063 19.843q-.172.469-.331.944l-6.751 30.38-46.416 88.611 14.349 8.438s39.664-46.416 44.728-62.45l20.388-39.209a12.707 12.707 0 001.424-6.351l-1.528-39.715a.7.7 0 00-.825-.666z"
              data-name="Path 115"
              transform="translate(-124.197 -193.801)"></path>
          </g>
          <path
            fill="#ffeb3b"
            d="M0 0h384v243H0z"
            data-name="Path 74"
            transform="translate(1536 583)"></path>
          <g data-name="Group 147" transform="translate(1237.941 444.141)">
            <ellipse
              cx="30.702"
              cy="30.702"
              fill="#75482e"
              data-name="Ellipse 15"
              rx="30.702"
              ry="30.702"
              transform="translate(483.972 173.025)"></ellipse>
            <path
              fill="#ff3d00"
              d="M756.537 452.18l-17.085 49.536-8.234 23.884s-.84 37.975-1.685 37.975c-.175 0-.425.547-.7 1.41h-81.821l6.566-69.769-.4-3.251-5.139-41.665a20.883 20.883 0 0113.8-22.256l8.582-3.017a67.944 67.944 0 0135.091-2.676 67.945 67.945 0 0128.671 12.767z"
              data-name="Path 111"
              transform="translate(-190.825 -183.674)"></path>


            <path
              fill="#0a091a"
              d="M758.715 286.47s-9.748-21.12-28.434-16.247-29.244 12.185-30.056 19.5.406 18.278.406 18.278 2.031-15.03 15.03-11.779 33.305.812 33.305.812l3.249 29.244s3.655-5.28 7.717-2.031 11.78-31.279-1.217-37.777z"
              data-name="Path 113"
              transform="translate(-217.416 -107.478)"></path>
            <path
              fill="#ff3d00"
              d="M863.6 560.269s0 19.283-7.087 36.009h-24.35l.214-.565 6.75-29.539-2.53-10.125-6.115-23.039a67.349 67.349 0 01.541-36.47l.277-.931a16.972 16.972 0 0116.268-12.135s10.97 9.285 10.125 27z"
              data-name="Path 114"
              transform="translate(-281.856 -214.965)"></path>
            <path
              fill="#a0616a"
              d="M486.885 712.634a9.318 9.318 0 0111.415-8.594l17.657-28.014 7.1 15.674-17.857 24.2a9.369 9.369 0 01-18.318-3.267z"
              data-name="Path 73"
              transform="translate(-110.381 -311.691)"></path>
            <path
              fill="#ff3d00"
              d="M592.907 441.35l-.974.172a31.329 31.329 0 00-24.063 19.843q-.172.469-.331.944l-6.751 30.38-46.416 88.611 14.349 8.438s39.664-46.416 44.728-62.45l20.388-39.209a12.707 12.707 0 001.424-6.351l-1.528-39.715a.7.7 0 00-.825-.666z"
              data-name="Path 115"
              transform="translate(-124.197 -193.801)"></path>
          </g>
          <path
            fill="#eeead6"
            d="M0 0H384V255H0z"
            data-name="Rectangle 65"
            transform="translate(1536 825)"></path>
          <path fill="#20b3ff" d="M0 0h1536v971H0z" data-name="Path 75"></path>
          <g data-name="Group 137">
            <ellipse
              cx="113.261"
              cy="113.261"
              fill="#e9ce9f"
              data-name="Ellipse 15"
              rx="113.261"
              ry="113.261"
              transform="translate(772.996 202.631)"></ellipse>
            <path
              fill="#273f80"
              d="M1051.049 535.542l-63.028 182.736v.016L957.646 806.4s-3.1 140.089-6.217 140.089c-.646 0-1.566 2.019-2.6 5.2H647.012l24.223-257.376-1.486-11.992L650.8 528.6a77.038 77.038 0 0150.909-82.1l31.661-11.131a250.646 250.646 0 01129.451-9.87 250.646 250.646 0 01105.766 47.1z"
              data-name="Path 111"
              transform="translate(23.485 19.319)"></path>
            <path
              fill="#23232b"
              d="M916.744 332.12s-35.96-77.913-104.891-59.933-107.88 44.951-110.876 71.92 1.5 67.426 1.5 67.426 7.492-55.445 55.445-43.452 122.863 3 122.863 3l11.987 107.88s13.485-19.479 28.468-7.492 43.45-115.376-4.496-139.349z"
              data-name="Path 113"
              transform="translate(67.733 -107.478)"></path>
            <path
              fill="#273f80"
              d="M958.72 766.78s0 71.134-26.145 132.838H842.74l.791-2.083 24.9-108.97-9.331-37.351-22.56-84.99v-.016a248.455 248.455 0 011.994-134.538l1.021-3.435a62.609 62.609 0 0160.012-44.765s40.468 34.251 37.352 99.62z"
              data-name="Path 114"
              transform="translate(174.967 71.389)"></path>
            <path
              fill="#a0616a"
              d="M486.928 811.07a34.375 34.375 0 0142.113-31.7l65.137-103.343 26.2 57.822L554.5 823.12a34.562 34.562 0 01-67.576-12.05z"
              data-name="Path 73"
              transform="translate(-110.381 232.349)"></path>
            <path
              fill="#273f80"
              d="M804.088 441.379l-3.594.635c-40.385 7.132-74.627 34.707-88.767 73.2q-.636 1.732-1.221 3.483L685.6 630.77 514.372 957.662l52.932 31.13s146.322-171.228 165-230.38l75.212-144.642a46.874 46.874 0 005.252-23.428l-5.638-146.507a2.593 2.593 0 00-3.042-2.456z"
              data-name="Path 115"
              transform="translate(-87.391 36.171)"></path>
          </g>
          <path
            fill="#fff"
            d="M0 0H384V104H0z"
            data-name="Rectangle 40"
            transform="translate(1536)"></path>
          <g data-name="Group 57" transform="translate(0 -28)">
            <path
              fill="#fff"
              d="M0 0H143V45H0z"
              data-name="Rectangle 39"
              opacity="0.8"
              transform="translate(1777 323)"></path>
            <text
              fill="#333"
              data-name="Ada Brook"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1849 353)">
              <tspan x="-55.517" y="0">
                Ada Brook
              </tspan>
            </text>
          </g>
          <g data-name="Group 140" transform="translate(0 215)">
            <path
              fill="#fff"
              d="M0 0H165V45H0z"
              data-name="Rectangle 39"
              opacity="0.8"
              transform="translate(1755 323)"></path>
            <text
              fill="#333"
              data-name="Fergus Hurley"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1838 353)">
              <tspan x="-74.569" y="0">
                Fergus Hurley
              </tspan>
            </text>
          </g>
          <g data-name="Group 142" transform="translate(0 458)">
            <path
              fill="#fff"
              d="M0 0H146V45H0z"
              data-name="Rectangle 39"
              opacity="0.8"
              transform="translate(1774 323)"></path>
            <text
              fill="#333"
              data-name="Clark Larson"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1849 353)">
              <tspan x="-68.486" y="0">
                Clark Larson
              </tspan>
            </text>
          </g>
          <g data-name="Group 62" transform="translate(-1 -13)">
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              data-name="Icon feather-settings"
              transform="translate(1848.5 42.5)">
              <path
                d="M28.482 22.7a5.782 5.782 0 11-5.782-5.782 5.782 5.782 0 015.782 5.782z"
                data-name="Path 38"></path>
              <path
                d="M36.962 28.482a3.18 3.18 0 00.636 3.508l.116.116a3.857 3.857 0 11-5.454 5.454l-.116-.116a3.206 3.206 0 00-5.435 2.274v.328a3.855 3.855 0 01-7.709 0v-.173a3.18 3.18 0 00-2.081-2.91 3.18 3.18 0 00-3.508.636l-.116.116a3.857 3.857 0 11-5.454-5.454l.116-.116a3.206 3.206 0 00-2.274-5.435h-.328a3.855 3.855 0 010-7.709h.173a3.18 3.18 0 002.91-2.081 3.18 3.18 0 00-.638-3.509l-.116-.116a3.857 3.857 0 115.454-5.454l.116.116a3.18 3.18 0 003.508.636h.154a3.18 3.18 0 001.927-2.91v-.328a3.855 3.855 0 017.709 0v.173A3.206 3.206 0 0031.989 7.8l.116-.116a3.857 3.857 0 115.454 5.454l-.116.116a3.18 3.18 0 00-.636 3.508v.154a3.18 3.18 0 002.91 1.927h.328a3.855 3.855 0 010 7.709h-.173a3.18 3.18 0 00-2.91 1.927z"
                data-name="Path 39"></path>
            </g>
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              data-name="Icon feather-grid"
              transform="translate(1777.5 42.5)">
              <path d="M4.5 4.5h15.244v15.244H4.5z" data-name="Path 42"></path>
              <path
                d="M28.455 4.5h15.244v15.244H28.455z"
                data-name="Path 43"></path>
              <path
                d="M28.455 28.455h15.244v15.244H28.455z"
                data-name="Path 44"></path>
              <path
                d="M4.5 28.455h15.244v15.244H4.5z"
                data-name="Path 45"></path>
            </g>
            <g data-name="Secondary Button" transform="translate(1575 44)">
              <g data-name="Group 2">
                <g
                  fill="none"
                  stroke={props.primaryColor}
                  strokeWidth="2"
                  data-name="Rectangle 4">
                  <path stroke="none" d="M0 0H178V42H0z"></path>
                  <path d="M1 1H177V41H1z"></path>
                </g>
                <text
                  fill={props.primaryColor}
                  data-name="13 users"
                  fontFamily="WorkSans-SemiBold, Work Sans"
                  fontSize="22"
                  fontWeight="600"
                  transform="translate(89 29)">
                  <tspan x="-43.923" y="0">
                    13 users
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <path
            fill="#fff"
            d="M0 0H1266V108H0z"
            data-name="Rectangle 18"
            transform="translate(135 972)"></path>
          <g
            fill="none"
            stroke={props.primaryColor}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3.361"
            transform="translate(739.671 1009.489)">
            <path d="M0 0L0 33.021" data-name="Line 46"></path>
            <path
              d="M0 0L0 33.021"
              data-name="Line 47"
              transform="translate(52.664)"></path>
            <path
              d="M0 0L18.213 0"
              data-name="Line 48"
              transform="translate(0 33.021)"></path>
            <path
              d="M0 0L18.209 0"
              data-name="Line 49"
              transform="translate(34.456 33.021)"></path>
            <path d="M0 0L52.664 0" data-name="Line 50"></path>
            <path
              d="M0 0L0 23.691"
              data-name="Line 51"
              transform="translate(26.05 9.331)"></path>
            <path
              d="M0 0L10.322 10.327"
              data-name="Line 52"
              transform="translate(26.05 8.848)"></path>
            <path
              d="M10.322 0L0 10.327"
              data-name="Line 53"
              transform="translate(15.727 8.848)"></path>
          </g>
          {state.recording ? (
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.838"
              transform="translate(896.08 1002.692)">
              <ellipse
                cx="23.308"
                cy="23.308"
                data-name="Ellipse 1"
                rx="23.308"
                ry="23.308"></ellipse>
              <ellipse
                cx="7.79"
                cy="7.79"
                data-name="Ellipse 2"
                rx="7.79"
                ry="7.79"
                transform="translate(15.518 15.518)"></ellipse>
            </g>
          ) : (
            <g
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.84"
              transform="translate(869.551 991.541)">
              <circle
                cx="23.319"
                cy="23.319"
                r="23.319"
                fill="none"
                data-name="Ellipse 4"
                transform="translate(26.53 11.54)"></circle>
              <circle
                cx="7.794"
                cy="7.794"
                r="7.794"
                fill={props.primaryColor}
                data-name="Ellipse 5"
                transform="translate(42.056 27.066)"></circle>
            </g>
          )}
          <g
            fill="none"
            stroke={props.primaryColor}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="4.23"
            transform="translate(1049.283 1002.691)">
            <path
              d="M4.255 36.743a23.292 23.292 0 0019.064 9.9h23.323V23.327A23.324 23.324 0 0029.508.861"
              data-name="Path 57"></path>
            <path
              d="M4.258 36.742A23.31 23.31 0 0129.512.842"
              data-name="Path 58"></path>
            <path
              d="M0 0L19.294 0"
              data-name="Line 43"
              transform="translate(14.519 23.327)"></path>
            <path
              d="M0 0L19.294 0"
              data-name="Line 44"
              transform="translate(14.519 14.17)"></path>
            <path
              d="M0 0L19.294 0"
              data-name="Line 45"
              transform="translate(14.519 32.455)"></path>
          </g>
          {state.videoMute ? (
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.359"
              transform="translate(586.191 1005.4)">
              <rect
                width="41.201"
                height="41.201"
                data-name="Rectangle 66"
                rx="16.245"></rect>
              <path
                d="M52.666 9.177a11.416 11.416 0 000 22.833"
                data-name="Path 64"></path>
              <ellipse
                cx="11.465"
                cy="11.465"
                data-name="Ellipse 3"
                rx="11.465"
                ry="11.465"
                transform="translate(9.135 9.135)"></ellipse>
              <path
                d="M0 0L0 22.833"
                data-name="Line 55"
                transform="translate(52.666 9.176)"></path>
            </g>
          ) : (
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.36"
              transform="translate(558.403 985.157)">
              <path
                d="M51.478 0L0 54.126"
                data-name="Line 56"
                transform="translate(22.32 13.69)"></path>
              <path
                d="M68.903 40.802a11.55 11.55 0 0011.55 11.55v-23.1a11.546 11.546 0 00-11.55 11.55z"
                data-name="Path 76"></path>
              <path
                d="M60.506 20.514a11.907 11.907 0 00-3.568-.538H39.085a11.908 11.908 0 00-11.908 11.908v17.853a11.883 11.883 0 001 4.779"
                data-name="Path 77"></path>
              <path
                d="M37.201 45.021a11.6 11.6 0 0114.474-15.219"
                data-name="Path 78"></path>
              <path
                d="M58.819 36.59a11.6 11.6 0 01-14.482 15.225"
                data-name="Path 79"></path>
              <path
                d="M35.5 61.103a11.908 11.908 0 003.585.55h17.853a11.908 11.908 0 0011.907-11.908V31.884a11.879 11.879 0 00-1.006-4.792"
                data-name="Path 80"></path>
            </g>
          )}
          <g data-name="Group 56" transform="translate(-35 23)">
            <path
              fill="#fff"
              d="M0 0H142V51H0z"
              data-name="Rectangle 37"
              opacity="0.8"
              transform="translate(1429 898)"></path>
            <text
              fill="#333"
              data-name="Matt Healy"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="24"
              fontWeight="600"
              transform="translate(1500 932)">
              <tspan x="-63.48" y="0">
                Matt Healy
              </tspan>
            </text>
          </g>
          <g data-name="Group 148" transform="translate(1237.941 698.141)">
            <ellipse
              cx="30.702"
              cy="30.702"
              fill="#e1d587"
              data-name="Ellipse 15"
              rx="30.702"
              ry="30.702"
              transform="translate(483.972 173.025)"></ellipse>
            <path
              fill="#826c38"
              d="M756.537 452.18l-17.085 49.536-8.234 23.884s-.84 37.975-1.685 37.975c-.175 0-.425.547-.7 1.41h-81.821l6.566-69.769-.4-3.251-5.139-41.665a20.883 20.883 0 0113.8-22.256l8.582-3.017a67.944 67.944 0 0135.091-2.676 67.945 67.945 0 0128.671 12.767z"
              data-name="Path 111"
              transform="translate(-190.825 -183.674)"></path>
            <path
              fill="#463fb0"
              d="M758.715 286.47s-9.748-21.12-28.434-16.247-29.244 12.185-30.056 19.5.406 18.278.406 18.278 2.031-15.03 15.03-11.779 33.305.812 33.305.812l3.249 29.244s3.655-5.28 7.717-2.031 11.78-31.279-1.217-37.777z"
              data-name="Path 113"
              transform="translate(-217.416 -107.478)"></path>
            <path
              fill="#826c38"
              d="M863.6 560.269s0 19.283-7.087 36.009h-24.35l.214-.565 6.75-29.539-2.53-10.125-6.115-23.039a67.349 67.349 0 01.541-36.47l.277-.931a16.972 16.972 0 0116.268-12.135s10.97 9.285 10.125 27z"
              data-name="Path 114"
              transform="translate(-281.856 -214.965)"></path>
            <path
              fill="#a0616a"
              d="M486.885 712.634a9.318 9.318 0 0111.415-8.594l17.657-28.014 7.1 15.674-17.857 24.2a9.369 9.369 0 01-18.318-3.267z"
              data-name="Path 73"
              transform="translate(-110.381 -311.691)"></path>
            <path
              fill="#826c38"
              d="M592.907 441.35l-.974.172a31.329 31.329 0 00-24.063 19.843q-.172.469-.331.944l-6.751 30.38-46.416 88.611 14.349 8.438s39.664-46.416 44.728-62.45l20.388-39.209a12.707 12.707 0 001.424-6.351l-1.528-39.715a.7.7 0 00-.825-.666z"
              data-name="Path 115"
              transform="translate(-124.197 -193.801)"></path>
          </g>
          <g data-name="Group 144" transform="translate(0 712)">
            <path
              fill="#fff"
              d="M0 0H143V45H0z"
              data-name="Rectangle 39"
              opacity="0.8"
              transform="translate(1777 323)"></path>
            <text
              fill="#333"
              data-name="Louisa Nava"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1849 353)">
              <tspan x="-64.812" y="0">
                Louisa Nava
              </tspan>
            </text>
          </g>
          {state.audioMute ? (
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.36"
              transform="translate(438.794 1005.399)">
              <path
                d="M41.199 20.601a20.6 20.6 0 11-41.2 0"
                data-name="Path 65"></path>
              <rect
                width="22.897"
                height="32.035"
                data-name="Rectangle 67"
                rx="11.449"
                transform="translate(9.196)"></rect>
            </g>
          ) : (
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3.36"
              transform="translate(403.458 986.48)">
              <path
                d="M64.523 22.805a11.441 11.441 0 00-8.586-3.865h0a11.474 11.474 0 00-11.47 11.474v9.168"
                data-name="Path 81"></path>
              <path
                d="M35.254 39.582a20.5 20.5 0 003.055 10.794"
                data-name="Path 82"></path>
              <path
                d="M45.078 43.256a11.323 11.323 0 01-.611-3.666"
                data-name="Path 83"></path>
              <path
                d="M45.233 57.263a20.642 20.642 0 0031.289-17.681"
                data-name="Path 84"></path>
              <path
                d="M67.411 39.582A11.474 11.474 0 0155.937 51.04h0a11.4 11.4 0 01-4.073-.745"
                data-name="Path 85"></path>
              <path d="M67.411 39.582v-5.625" data-name="Path 86"></path>
              <path
                d="M42.824 0L0 45.028"
                data-name="Line 57"
                transform="translate(33.71 17.27)"></path>
            </g>
          )}
          <path
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setState((p) => {
                return { ...p, screenshare: !p.screenshare };
              })
            }
            fill="#fff"
            d="M0 0H69V60H0z"
            data-name="Rectangle 68"
            opacity="0.01"
            transform="translate(732 999)"></path>
          <path
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setState((p) => {
                return { ...p, videoMute: !p.videoMute };
              })
            }
            fill="#fff"
            d="M0 0H69V60H0z"
            data-name="Rectangle 69"
            opacity="0.01"
            transform="translate(578 996)"></path>
          <path
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setState((p) => {
                return { ...p, audioMute: !p.audioMute };
              })
            }
            fill="#fff"
            d="M0 0H69V60H0z"
            data-name="Rectangle 70"
            opacity="0.01"
            transform="translate(425 996)"></path>
          <path
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setState((p) => {
                return { ...p, recording: !p.recording };
              })
            }
            fill="#fff"
            d="M0 0H69V60H0z"
            data-name="Rectangle 71"
            opacity="0.01"
            transform="translate(885 996)"></path>
          <path
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setState((p) => {
                return { ...p, chat: !p.chat };
              })
            }
            fill="#fff"
            d="M0 0H69V60H0z"
            data-name="Rectangle 72"
            opacity="0.01"
            transform="translate(1039 996)"></path>
        </g>
        {state.chat ? (
          <g data-name="Group 150" transform="translate(0 90)">
            <path
              fill="#fff"
              d="M0 0H384V986H0z"
              data-name="Rectangle 74"
              transform="translate(1536 100)"></path>
            <text
              fill="#333"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="28"
              fontWeight="600"
              transform="translate(1613 135)">
              <tspan x="-39.424" y="0">
                Chats
              </tspan>
            </text>
            <text
              fill="#333"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1630 202)">
              <tspan x="-32.857" y="0">
                Group
              </tspan>
            </text>
            <text
              fill="#333"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              opacity="0.3"
              transform="translate(1822 202)">
              <tspan x="-37.95" y="0">
                Private
              </tspan>
            </text>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M0 0L0 47.557"
              data-name="Line 25"
              transform="translate(1723.5 170.5)"></path>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M1723.5 170.5h-187"
              data-name="Path 53"
              opacity="0.3"></path>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M197 0L0 0"
              data-name="Line 26"
              transform="translate(1723.5 170.5)"></path>
            <text
              fill="#333"
              data-name="Group"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              opacity="0.3"
              transform="translate(1630 202)">
              <tspan x="-32.857" y="0">
                Group
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="Private"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="22"
              fontWeight="600"
              transform="translate(1822 202)">
              <tspan x="-37.95" y="0">
                Private
              </tspan>
            </text>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M187 0L0 0"
              data-name="Line 28"
              transform="translate(1536.5 218.319)"></path>
            <text
              fill="#333"
              data-name="Example Message like this can be entered."
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="18"
              fontWeight="600"
              transform="translate(1570 1024)">
              <tspan x="0" y="0">
                Example Message like this
              </tspan>
              <tspan x="0" y="21">
                can be entered.
              </tspan>
            </text>
            <g
              fill="none"
              stroke={props.primaryColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              data-name="Icon feather-send"
              transform="translate(1856.342 1012.766)">
              <path d="M30 0L13.5 16.5" data-name="Path 51"></path>
              <path
                d="M30 0L19.5 30l-6-13.5-13.5-6z"
                data-name="Path 52"></path>
            </g>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M0 0L352 0"
              data-name="Line 31"
              transform="translate(1552 1067)"></path>
            <path
              fill="none"
              stroke={props.primaryColor}
              strokeWidth="2"
              d="M0 0L352 0"
              data-name="Line 32"
              transform="translate(1552 986)"></path>
            <path
              fill="#f5f5f5"
              d="M0 0H163V47H0z"
              data-name="Rectangle 51"
              transform="translate(1552 293)"></path>
            <path
              fill="#f5f5f5"
              d="M0 0H298V93H0z"
              data-name="Rectangle 53"
              transform="translate(1552 355)"></path>
            <path
              fill={props.primaryColor}
              d="M0 0H260V54H0z"
              data-name="Rectangle 52"
              transform="translate(1644 466)"></path>
            <path
              fill={props.primaryColor}
              d="M0 0H260V54H0z"
              data-name="Rectangle 54"
              transform="translate(1644 538)"></path>
            <text
              data-name="Some message!"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="18"
              fontWeight="600"
              transform="translate(1630 322)">
              <tspan x="-69.111" y="0">
                Some message!
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="12:01"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="16"
              fontWeight="600"
              opacity="0.5"
              transform="translate(1858 411)">
              <tspan x="0" y="0">
                12:01
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="12:00"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="16"
              fontWeight="600"
              opacity="0.5"
              transform="translate(1723 322)">
              <tspan x="0" y="0">
                12:00
              </tspan>
            </text>
            <text
              data-name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="18"
              fontWeight="600"
              transform="translate(1561 369)">
              <tspan x="0" y="17">
                Lorem ipsum dolor sit amet,{' '}
              </tspan>
              <tspan x="0" y="39">
                consetetur sadipscing elitr, sed{' '}
              </tspan>
              <tspan x="0" y="61">
                diam nonumy eirmod
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="12:05"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="16"
              fontWeight="600"
              opacity="0.5"
              transform="translate(1636 496)">
              <tspan x="-40.528" y="0">
                12:05
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="12:05"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="16"
              fontWeight="600"
              opacity="0.5"
              transform="translate(1636 571)">
              <tspan x="-40.528" y="0">
                12:05
              </tspan>
            </text>
            <text
              fill="#fff"
              data-name="Some message reply, yes!!"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="18"
              fontWeight="600"
              transform="translate(1770 497)">
              <tspan x="-116.271" y="0">
                Some message reply, yes!!
              </tspan>
            </text>
            <text
              fill="#fff"
              data-name="Some message reply, yes!!"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="18"
              fontWeight="600"
              transform="translate(1770 569)">
              <tspan x="-116.271" y="0">
                Some message reply, yes!!
              </tspan>
            </text>
            <text
              fill="#333"
              data-name="Ekaansh Arora"
              fontFamily="WorkSans-SemiBold, Work Sans"
              fontSize="26"
              fontWeight="600"
              transform="translate(1675 264)">
              <tspan x="-92.404" y="0">
                Ekaansh Arora
              </tspan>
            </text>
            <g data-name="Group 122" transform="translate(1514.107 204.84)">
              <g
                fill="none"
                stroke="#333"
                strokeLinecap="square"
                strokeWidth="3"
                data-name="Group 119"
                transform="rotate(90 3.46 48.745)">
                <path d="M0 0L5.312 5.312" data-name="Line 4"></path>
                <path
                  d="M0 0L5.312 5.312"
                  data-name="Line 5"
                  transform="rotate(90 5.313 5.313)"></path>
                <path
                  d="M0 0L0.25 11.107"
                  data-name="Line 41"
                  transform="translate(5.375 -8.795)"></path>
              </g>
            </g>
          </g>
        ) : (
          <></>
        )}
        <g>
        <path d="M 0 10 C 1.5 0.1421 3.8579 -1.5 58 0 H 1920 C 1925 10 1925 0 1925 43 V 66.6111 H 0 V 43 Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="5" />
        <circle cx="34.0556" cy="23.0556" r="10.55556" fill="#C4C4C4" />
        <circle cx="68.7223" cy="23.0556" r="10.55556" fill="#C4C4C4" />
        <circle cx="102.3888" cy="23.0556" r="10.55556" fill="#C4C4C4" />
        </g>
      </svg>

    </div>
  );
}

export default Icon;
