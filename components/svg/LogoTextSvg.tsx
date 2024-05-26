import * as React from "react";
import Svg, { Path } from "react-native-svg";

/** Type/Interface */
type LogoTextSvgProps = {
  color?: string;
  width?: number;
  height?: number;
};

const LogoTextSvg = ({ color, width, height }: LogoTextSvgProps) => {
  const fill1 = !!color && color !== "#BB304A" ? color : "#BB304A";
  const fill2 = !!color && color !== "#BB304A" ? color : "#F97A57";
  return (
    <Svg
      width={width || 699}
      height={height || 96}
      viewBox="0 0 699 96"
      fill="none"
    >
      <Path
        d="M47.396 0C54.4272 0 60.8509 1.34549 66.6669 4.03647C72.4828 6.72745 77.4308 10.3299 81.5106 14.8438C85.5905 19.3577 88.7589 24.5226 91.0159 30.3386C93.2728 36.0678 94.4013 42.014 94.4013 48.1772C94.4013 53.646 93.403 59.0713 91.4065 64.4533C89.4968 69.7485 86.4586 74.6964 82.2919 79.2971L92.5784 92.8388H71.8752L69.5314 89.7138C66.2328 91.5367 62.7606 92.8822 59.1147 93.7503C55.4689 94.7051 51.7363 95.1826 47.9168 95.1826C41.4064 95.1826 35.2432 93.9673 29.4272 91.5367C23.6112 89.0193 18.4896 85.6339 14.0625 81.3804C9.72225 77.0401 6.29342 72.0054 3.77605 66.2762C1.25868 60.547 0 54.3838 0 47.7866C0 41.6234 1.12847 35.6772 3.38543 29.948C5.72918 24.2188 8.9844 19.1407 13.1511 14.7136C17.3178 10.2865 22.3091 6.72745 28.1251 4.03647C33.9411 1.34549 40.3647 0 47.396 0ZM47.396 78.2554C51.389 78.2554 55.2519 77.4742 58.9845 75.9117C57.0748 73.5679 55.3821 71.5714 53.9064 69.9221C52.5175 68.2728 51.2154 66.9707 50.0001 66.0158C48.7849 65.0609 47.613 64.3665 46.4845 63.9325C45.4428 63.4984 44.4012 63.2814 43.3595 63.2814C41.6234 63.2814 39.8873 63.8891 38.1511 65.1043C38.0643 64.6703 38.0209 64.2797 38.0209 63.9325C38.0209 63.5852 38.0209 63.238 38.0209 62.8908C38.0209 59.0713 39.2362 56.0331 41.6668 53.7762C44.1841 51.5192 47.2658 50.3908 50.9116 50.3908C53.9498 50.3908 56.988 51.3022 60.0262 53.1251C63.1512 54.9481 65.8422 57.5088 68.0991 60.8075L71.4846 65.6252C73.3943 62.8474 74.7832 59.9394 75.6513 56.9012C76.5193 53.863 76.9533 50.8248 76.9533 47.7866C76.9533 43.7935 76.2155 39.9307 74.7398 36.198C73.3509 32.4654 71.311 29.1667 68.62 26.3022C65.929 23.4376 62.7172 21.1806 58.9845 19.5313C55.2519 17.7952 51.0852 16.9271 46.4845 16.9271C41.797 16.9271 37.6303 17.8386 33.9845 19.6615C30.4254 21.3976 27.3872 23.698 24.8699 26.5626C22.4393 29.4272 20.573 32.7258 19.2709 36.4584C18.0556 40.1043 17.448 43.8803 17.448 47.7866C17.448 52.0401 18.1858 56.0331 19.6615 59.7658C21.224 63.4116 23.3074 66.6235 25.9115 69.4012C28.6025 72.0922 31.7709 74.2624 35.4168 75.9117C39.1494 77.4742 43.1425 78.2554 47.396 78.2554Z"
        fill={fill1}
      />
      <Path
        d="M106.079 17.8386C106.079 13.0643 107.208 9.20142 109.465 6.25002C111.722 3.29862 115.498 1.82292 120.793 1.82292H140.845C145.967 1.82292 150.35 2.69098 153.996 4.4271C157.729 6.07641 160.81 8.28996 163.241 11.0677C165.672 13.8455 167.451 17.0573 168.58 20.7032C169.708 24.349 170.272 28.0817 170.272 31.9011C170.272 35.2866 169.838 38.6286 168.97 41.9272C168.102 45.2258 166.843 48.3074 165.194 51.172C163.545 54.0366 161.505 56.5974 159.074 58.8543C156.644 61.1113 153.866 62.8474 150.741 64.0627L173.267 92.969H152.303L126.783 60.9377C125.828 59.8092 125.177 58.5939 124.829 57.2918C124.482 55.9897 124.309 54.6877 124.309 53.3856C124.309 50.2606 125.133 47.5262 126.783 45.1824C127.13 45.8769 127.694 46.4845 128.475 47.0053C129.343 47.4394 130.298 47.83 131.34 48.1772C132.382 48.4376 133.467 48.6546 134.595 48.8283C135.724 48.9151 136.722 48.9585 137.59 48.9585C140.107 48.9585 142.321 48.5244 144.231 47.6564C146.14 46.7883 147.746 45.6599 149.048 44.271C150.35 42.7953 151.305 41.1025 151.913 39.1928C152.607 37.2831 152.955 35.2432 152.955 33.073C152.955 31.0765 152.651 29.2102 152.043 27.474C151.522 25.6511 150.654 24.0452 149.439 22.6563C148.31 21.2674 146.835 20.1823 145.012 19.4011C143.189 18.533 141.019 18.099 138.501 18.099H123.658V92.969H106.079V17.8386Z"
        fill={fill1}
      />
      <Path
        d="M263.673 0.520752C268.1 0.520752 272.31 1.04159 276.303 2.08326C280.296 3.03812 283.768 4.38361 286.719 6.11972C289.758 7.76904 292.145 9.76557 293.881 12.1093C295.704 14.4531 296.615 16.927 296.615 19.5312C296.615 21.6146 296.181 23.9149 295.313 26.4323C294.445 28.9496 292.839 31.1198 290.496 32.9427C289.627 30.5989 288.282 28.4288 286.459 26.4323C284.636 24.4357 282.466 22.743 279.949 21.3541C277.431 19.9652 274.653 18.8802 271.615 18.0989C268.577 17.3177 265.365 16.927 261.98 16.927C257.813 16.927 253.95 17.7083 250.391 19.2708C246.919 20.7465 243.881 22.8732 241.277 25.651C238.672 28.342 236.633 31.5538 235.157 35.2865C233.681 38.9323 232.943 42.9254 232.943 47.2657C232.943 51.7796 233.638 55.9462 235.027 59.7657C236.416 63.5851 238.369 66.8838 240.886 69.6615C243.403 72.4393 246.398 74.6095 249.87 76.172C253.343 77.7345 257.162 78.5157 261.329 78.5157C271.225 78.5157 280.339 74.3057 288.673 65.8855L299.22 77.3439C296.094 80.4689 293.1 83.1598 290.235 85.4168C287.371 87.5869 284.419 89.3665 281.381 90.7553C278.43 92.1442 275.305 93.1425 272.006 93.7501C268.794 94.3578 265.322 94.6616 261.589 94.6616C254.905 94.6616 248.742 93.4897 243.1 91.146C237.457 88.8022 232.553 85.547 228.386 81.3803C224.306 77.1268 221.094 72.1355 218.751 66.4063C216.494 60.5903 215.365 54.2535 215.365 47.3959C215.365 40.4514 216.537 34.1146 218.881 28.3854C221.225 22.6562 224.523 17.7517 228.777 13.6718C233.03 9.50515 238.108 6.29334 244.011 4.03639C250.001 1.69263 256.554 0.520752 263.673 0.520752Z"
        fill={fill2}
      />
      <Path
        d="M340.448 23.8281C346.177 23.8281 350.734 25.1736 354.12 27.8646C357.592 30.4687 359.328 34.375 359.328 39.5833C359.328 41.7535 358.937 43.4896 358.156 44.7917C356.681 42.6215 354.597 41.1893 351.906 40.4948C349.302 39.7136 346.915 39.3229 344.745 39.3229C341.62 39.3229 338.885 39.9306 336.542 41.1458C334.198 42.2743 332.201 43.7934 330.552 45.7032C328.989 47.6129 327.818 49.8264 327.036 52.3438C326.255 54.7744 325.864 57.2483 325.864 59.7657C325.864 62.1962 326.212 64.5834 326.906 66.9272C327.687 69.2709 328.816 71.3543 330.292 73.1772C331.767 75.0001 333.634 76.4758 335.891 77.6043C338.147 78.6459 340.752 79.1668 343.703 79.1668C347.262 79.1668 350.214 78.3855 352.557 76.823C354.901 75.2605 356.724 73.264 358.026 70.8334C359.415 68.3161 360.37 65.4949 360.891 62.3699C361.498 59.2449 361.802 56.1632 361.802 53.125V25.5208H378.729V92.9689H361.802V85.547C358.677 88.672 355.248 90.9724 351.516 92.4481C347.87 93.9238 344.137 94.6616 340.318 94.6616C336.325 94.6616 332.418 93.8804 328.599 92.3179C324.866 90.7553 321.524 88.4984 318.573 85.547C315.708 82.5088 313.364 78.863 311.542 74.6095C309.805 70.2692 308.937 65.4081 308.937 60.0261C308.937 54.6441 309.805 49.7396 311.542 45.3125C313.278 40.8854 315.621 37.066 318.573 33.8542C321.524 30.6424 324.866 28.1684 328.599 26.4323C332.418 24.6962 336.368 23.8281 340.448 23.8281Z"
        fill={fill2}
      />
      <Path
        d="M398.794 25.651V22.0052C398.794 19.9218 399.184 18.0555 399.965 16.4062C400.747 14.7569 401.788 13.368 403.09 12.2395C404.393 11.0243 405.912 10.1128 407.648 9.50515C409.384 8.89751 411.207 8.59369 413.117 8.59369C413.551 8.59369 413.985 8.59369 414.419 8.59369C414.853 8.59369 415.287 8.63709 415.721 8.7239V25.651H430.825C430.825 27.3003 430.651 28.993 430.304 30.7292C430.044 32.3785 429.479 33.8976 428.611 35.2865C427.743 36.5885 426.571 37.6736 425.096 38.5417C423.62 39.3229 421.71 39.7136 419.367 39.7136H415.721V74.3491C415.721 75.6511 416.198 76.7362 417.153 77.6043C418.108 78.3855 419.236 78.7762 420.538 78.7762C422.014 78.7762 423.446 78.5591 424.835 78.1251C426.311 77.6911 427.396 76.9532 428.091 75.9116C428.611 77.3004 428.872 78.6893 428.872 80.0782C428.872 81.9012 428.525 83.6373 427.83 85.2866C427.222 86.8491 426.268 88.2814 424.965 89.5835C423.663 90.7988 422.058 91.797 420.148 92.5783C418.238 93.2727 416.068 93.6199 413.637 93.6199C411.814 93.6199 409.991 93.3161 408.169 92.7085C406.432 92.1008 404.87 91.1894 403.481 89.9741C402.092 88.7588 400.964 87.2397 400.096 85.4168C399.228 83.5939 398.794 81.4671 398.794 79.0366V39.7136H390.46V25.651H398.794Z"
        fill={fill2}
      />
      <Path
        d="M439.909 58.073C439.909 53.2987 440.82 48.8716 442.643 44.7917C444.553 40.7118 447.07 37.1962 450.195 34.2448C453.407 31.2066 457.183 28.8194 461.524 27.0833C465.864 25.3472 470.508 24.4791 475.456 24.4791C480.838 24.4791 485.439 25.5642 489.258 27.7344C493.078 29.8177 495.942 32.2917 497.852 35.1563C499.762 38.0208 500.543 40.9288 500.196 43.8802C499.848 46.7448 498.112 48.9584 494.987 50.5209C494.032 47.3091 491.906 44.8785 488.607 43.2292C485.308 41.4931 481.446 40.5816 477.018 40.4948C471.116 40.408 466.298 42.0139 462.565 45.3125C458.833 48.6111 456.966 53.2119 456.966 59.1146C456.966 65.0174 458.572 69.6181 461.784 72.9168C464.996 76.2154 469.38 77.8647 474.935 77.8647C478.494 77.8647 481.619 77.3873 484.31 76.4324C487.001 75.3907 489.345 73.6112 491.341 71.0938L501.888 80.9897C495.899 89.6703 487.001 94.0106 475.196 94.0106C470.074 94.0106 465.343 93.1425 461.003 91.4064C456.662 89.5835 452.93 87.1095 449.805 83.9845C446.68 80.7727 444.249 76.9532 442.513 72.5261C440.777 68.099 439.909 63.2813 439.909 58.073Z"
        fill={fill2}
      />
      <Path
        d="M512.943 92.9689V15.1041C512.943 11.2847 514.202 8.07285 516.719 5.46868C519.236 2.86451 522.622 1.56242 526.875 1.56242C527.396 1.56242 527.873 1.60583 528.307 1.69263C528.828 1.69263 529.349 1.73603 529.87 1.82284V34.7656C531.259 31.7274 533.689 29.3403 537.162 27.6041C540.721 25.868 544.54 25 548.62 25C552.266 25 555.521 25.651 558.386 26.9531C561.25 28.2552 563.637 30.0347 565.547 32.2917C567.544 34.4618 569.063 37.066 570.104 40.1042C571.146 43.0556 571.667 46.224 571.667 49.6094V92.9689H554.74V53.125C554.74 49.132 553.872 46.007 552.136 43.75C550.4 41.4063 547.839 40.2344 544.453 40.2344C541.502 40.2344 539.202 41.1024 537.552 42.8386C535.99 44.4879 535.209 46.5712 535.209 49.0886C534.254 48.8282 533.212 48.1771 532.083 47.1354C531.042 46.0938 530.304 44.9653 529.87 43.75V92.9689H512.943Z"
        fill={fill2}
      />
      <Path
        d="M619.295 24.4791C623.548 24.4791 627.411 25.0434 630.883 26.1719C634.356 27.2135 637.307 28.7326 639.738 30.7292C642.255 32.6389 644.165 34.9826 645.467 37.7604C646.856 40.4514 647.55 43.4462 647.55 46.7448C647.55 50.0434 646.899 53.125 645.597 55.9896C644.295 58.7674 642.472 61.198 640.128 63.2813C637.784 65.3647 635.007 67.014 631.795 68.2292C628.67 69.3577 625.241 69.922 621.508 69.922C615.953 69.922 611.482 68.7067 608.097 66.2761C604.711 63.7588 603.019 60.4167 603.019 56.2501C603.019 54.3403 603.409 52.4306 604.191 50.5209C606.274 52.3438 608.488 53.7327 610.831 54.6876C613.262 55.6424 615.562 56.1198 617.732 56.1198C622.159 56.1198 625.762 55.382 628.54 53.9063C631.404 52.4306 632.837 50.3039 632.837 47.5261C632.837 45.79 631.882 44.1841 629.972 42.7084C628.062 41.1459 624.937 40.3646 620.597 40.3646C614 40.3646 608.835 42.0139 605.102 45.3125C601.456 48.5243 599.633 53.125 599.633 59.1146C599.633 64.9306 601.326 69.5313 604.711 72.9168C608.097 76.3022 612.437 77.9949 617.732 77.9949C620.51 77.9949 623.288 77.6911 626.066 77.0834C628.843 76.4758 631.317 75.1303 633.488 73.047L643.253 84.2449C637.003 91.0158 628.757 94.4012 618.514 94.4012C613.218 94.4012 608.357 93.5331 603.93 91.797C599.59 90.0609 595.814 87.6303 592.602 84.5053C589.477 81.3803 587.046 77.6911 585.31 73.4376C583.574 69.0973 582.706 64.4098 582.706 59.3751C582.706 54.1667 583.618 49.4358 585.441 45.1823C587.263 40.842 589.781 37.1528 592.993 34.1146C596.291 31.0764 600.154 28.7326 604.581 27.0833C609.095 25.3472 614 24.4791 619.295 24.4791Z"
        fill={fill2}
      />
      <Path
        d="M656.63 92.9689V25.651H673.427V31.1198C674.729 28.8628 676.422 27.0833 678.505 25.7812C680.675 24.3923 683.063 23.6979 685.667 23.6979C689.052 23.6979 691.786 24.5225 693.87 26.1719C696.04 27.8212 697.516 29.7743 698.297 32.0312C699.078 34.2014 699.208 36.4583 698.688 38.8021C698.254 41.059 697.125 42.882 695.302 44.2709C694.694 42.7084 693.653 41.5365 692.177 40.7552C690.788 39.974 689.226 39.5833 687.49 39.5833C685.927 39.5833 684.321 39.8872 682.672 40.4948C681.023 41.1024 679.503 42.0139 678.115 43.2292C676.812 44.3577 675.727 45.8334 674.859 47.6563C673.991 49.3924 673.557 51.4323 673.557 53.7761V92.9689H656.63Z"
        fill={fill2}
      />
    </Svg>
  );
};
export default LogoTextSvg;
