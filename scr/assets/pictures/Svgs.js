import * as React from 'react';
import Svg, {
    Path,
    Defs,
    Pattern,
    Use,
    Image,
    Circle,
    Rect,
    G,
    ClipPath,
    Mask,
  } from 'react-native-svg';

export const Rectangle = props => {
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        //   color='green'
        //    fill='white'
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          {...props}
        >
          <G
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="white"
            stroke="none"
          >
            <Path d="M1419 4455 c-149 -30 -270 -97 -375 -208 -284 -302 -266 -837 39 -1112 104 -94 249 -156 421 -179 l38 -5 -7 37 c-41 204 -10 455 80 648 102 223 305 422 524 515 38 16 65 34 63 41 -1 7 -36 46 -78 85 -88 85 -217 155 -329 178 -86 18 -286 18 -376 0z" />
            <Path d="M3322 4451 c-140 -35 -314 -141 -384 -233 l-27 -35 71 -32 c279 -123 490 -368 584 -677 25 -81 27 -104 28 -259 1 -93 -2 -189 -7 -212 l-7 -43 37 0 c90 1 223 46 330 113 231 144 369 466 324 756 -40 253 -179 455 -383 555 -130 64 -189 77 -353 82 -113 3 -154 0 -213 -15z" />
            <Path d="M2465 4069 c-162 -16 -327 -77 -446 -165 -220 -161 -352 -457 -336 -754 21 -393 245 -684 614 -797 81 -25 101 -27 263 -27 162 0 182 2 263 27 365 112 590 400 614 788 30 476 -296 875 -753 923 -117 13 -140 13 -219 5z" />
            <Path d="M770 3114 c-309 -83 -565 -417 -610 -797 -32 -268 72 -497 270 -597 54 -27 254 -80 304 -80 9 0 15 20 20 65 16 158 107 379 216 523 147 195 365 342 601 404 46 12 85 23 87 24 2 1 -10 29 -27 62 -32 64 -45 72 -117 72 -58 0 -217 42 -297 78 -99 45 -192 111 -272 191 -77 78 -82 80 -175 55z" />
            <Path d="M4160 3047 c-93 -91 -189 -153 -304 -198 -84 -32 -198 -59 -254 -59 -68 0 -81 -9 -113 -72 -17 -33 -29 -61 -27 -62 2 -1 41 -12 87 -24 423 -111 751 -477 813 -905 l12 -89 46 7 c101 15 265 57 309 79 99 51 177 172 207 322 20 103 12 344 -16 461 -66 276 -274 502 -545 591 -124 41 -119 42 -215 -51z" />
            <Path d="M1666 2494 c-193 -42 -365 -140 -503 -287 -80 -86 -116 -139 -168 -250 -75 -160 -89 -237 -90 -487 0 -175 3 -227 18 -280 40 -148 122 -262 225 -314 61 -31 402 -116 602 -150 534 -91 1091 -91 1620 0 204 35 540 118 601 150 103 52 186 165 225 309 11 40 18 116 21 230 7 256 -20 402 -107 575 -133 264 -398 459 -691 510 l-67 12 -48 -52 c-132 -142 -326 -245 -534 -284 -48 -9 -136 -16 -210 -16 -74 0 -162 7 -210 16 -207 39 -402 142 -533 283 -52 56 -52 56 -151 35z" />
          </G>
        </Svg>
      );
}

export const Setting = props => {
    return (
        <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
          height="30"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <G
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="white"
      stroke="none"
    >
      <Path d="M1720 4806 c-214 -75 -544 -265 -665 -383 -91 -88 -110 -203 -60 -353 39 -114 42 -277 8 -385 -74 -232 -269 -397 -513 -434 -128 -20 -210 -73 -259 -169 -45 -88 -77 -380 -67 -612 12 -286 39 -386 124 -461 51 -45 94 -61 217 -84 137 -25 222 -70 325 -174 132 -134 184 -260 183 -446 0 -90 -4 -111 -39 -210 -85 -244 -40 -333 276 -543 107 -71 319 -181 438 -227 122 -47 193 -48 281 -4 39 20 75 47 99 77 116 143 195 203 329 248 247 84 514 4 685 -204 96 -116 215 -158 340 -118 98 32 315 145 450 235 171 114 258 194 287 261 37 86 37 132 1 240 -40 120 -51 268 -26 372 54 231 230 409 461 464 165 40 172 43 229 95 39 36 61 65 75 104 76 204 74 790 -3 961 -26 56 -79 115 -127 140 -17 8 -62 22 -100 30 -265 55 -451 226 -514 474 -24 91 -16 262 15 345 31 84 32 183 2 250 -29 62 -54 90 -165 176 -220 171 -563 345 -703 356 -105 9 -148 -12 -279 -136 -85 -82 -131 -116 -188 -144 -178 -88 -373 -88 -554 0 -61 30 -101 60 -189 144 -85 81 -122 110 -159 123 -67 22 -138 20 -215 -8z m1030 -1470 c208 -56 368 -170 480 -343 240 -366 133 -862 -237 -1103 -136 -89 -259 -125 -433 -125 -226 0 -408 75 -564 231 -156 156 -231 338 -231 564 0 174 36 297 125 433 120 185 307 310 525 353 85 16 257 12 335 -10z" />
    </G>
  </Svg>
      );
}

export const SearchIcon = props => {
  return(
  <Svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m26.493 23.76-4.915-4.88a11.363 11.363 0 0 0 2.443-7.05c0-2.277-.678-4.503-1.95-6.396a11.554 11.554 0 0 0-5.19-4.24 11.616 11.616 0 0 0-6.683-.656A11.583 11.583 0 0 0 4.276 3.69a11.496 11.496 0 0 0-3.165 5.895 11.463 11.463 0 0 0 .658 6.651 11.524 11.524 0 0 0 4.26 5.167 11.605 11.605 0 0 0 6.426 1.94 11.484 11.484 0 0 0 7.084-2.432l4.901 4.893a1.446 1.446 0 0 0 1.583.315c.176-.073.336-.18.47-.315a1.438 1.438 0 0 0 .317-1.576 1.437 1.437 0 0 0-.317-.468ZM3.78 11.83c0-1.708.509-3.378 1.462-4.797a8.666 8.666 0 0 1 3.893-3.18 8.712 8.712 0 0 1 5.012-.492 8.687 8.687 0 0 1 4.442 2.363 8.622 8.622 0 0 1 2.374 4.421 8.597 8.597 0 0 1-.494 4.989 8.643 8.643 0 0 1-3.195 3.875 8.703 8.703 0 0 1-10.953-1.074 8.614 8.614 0 0 1-2.54-6.105Z"
      fill="green"
    />
  </Svg>
)

}

export const VerticalThreeDots = props => {
  return(
    <Svg
      width={18}
      height={26}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {/* Green rectangle */}
      <Rect width={10} height={30} fill="none" />
      {/* Three dots */}
      <Circle cx={4} cy={3} r={3.5} fill="green" />
      <Circle cx={4} cy={13} r={3.5} fill="green" />
      <Circle cx={4} cy={23} r={3.5} fill="green" />
    </Svg>
  )
}

export const BackIcon = props => {
  return(
    <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h30v30H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.01111)" />
      </Pattern>
      <Image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVR4nO2dsYpTQRRAs0ZksRBEG2GtF7HcagvrgPoLSeU3mP2HNRu/wEobrbXwD2zsbCxsFIRdwWghKi5HAtoIYubKu5N5OacO5HICk5y8mfcGAxEREREREekG4BxwH3jL3/kAzJav7WiMfgNsAY9YnVntmZsEmFLGSe2ZmwO4BZwqulvJ14BPlHPU5Vy9ArgIvA5Ifgmcrz1/EwBD4FlA8ntgp/b8zQDMA5K/ATdqz94MwIQYd2rP3gzAPvA1INnfzasCXAHeBSQ/B86u/EabDLANvAhIfgNcrj1/X/P6N5+B67XnbwbggHKWpXi79uzNAIyAHwHRd2vP3gzALrAISH68XG5qz98EmNcpkofmdY7oeWC5MK8LJU+IYV4XSN43rzsG87p7MK9TJG+Z1zmiDwJffOZ1oeSRed0xmNfdg3mdInloXueInge+/MzrQskTYpjXBZLN664xr9c/ry9lzNgLgHsByYvlLtHaszcFcFwo+dSr14peX4BDl44E/K85EX/eJQLsAV8Cy4hnTQKyx8QwwQOyZwHR3z0SUS76DPA0eMjnavEnu8kAF4BXAdkeWwvuFP0YkP3EnaJ5F2enxZ/spkP5Yfkl/h8SlP0gINvzKQHR2564SgI3OeaBmZ4qe0wMMz0gexYQbaYnZ/pO8RtuMpjpqbJ3zfQ82SMzPU/2NLBem+kRzPQkMNPzwExPlb3n1fQ82WNimOlJme4RjVLM9EQw09Nva7wILCNuNSsFuOmNutc304+zZusdwMMC0d4U9j8fD3L0j8eDnPw6wOTjQURERERERAZ/8BMXmYOMYh01GwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
  )
}

