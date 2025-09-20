import svgPaths from "./svg-wi0b52vp2g";
import imgDashboard1 from "figma:asset/d40936fd00643ff18b62ba008f54f3278291e9cc.png";

function Frame1000003345() {
  return (
    <div className="relative shrink-0 size-[69px]">
      <div className="absolute bottom-[-2.04%] left-0 right-[-2.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71">
          <g id="Frame 1000003345">
            <circle cx="35.2041" cy="35.2041" fill="var(--fill-0, #091C61)" id="Ellipse 2" r="34.5" stroke="var(--stroke-0, #7466F1)" strokeWidth="1.40816" />
            <g clipPath="url(#clip0_15_661)" id="logos:figma">
              <path d={svgPaths.p23c88080} fill="var(--fill-0, #0ACF83)" id="Vector" />
              <path d={svgPaths.p2493b330} fill="var(--fill-0, #A259FF)" id="Vector_2" />
              <path d={svgPaths.p3585ad00} fill="var(--fill-0, #F24E1E)" id="Vector_3" />
              <path d={svgPaths.p3f600980} fill="var(--fill-0, #FF7262)" id="Vector_4" />
              <path d={svgPaths.p1119a280} fill="var(--fill-0, #1ABCFE)" id="Vector_5" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_15_661">
              <rect fill="white" height="34.3869" transform="translate(25.3468 18.3061)" width="22.9246" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame1000003394() {
  return (
    <div className="absolute content-stretch flex gap-[21.122px] items-center justify-start left-[1394px] top-[180px]">
      <Frame1000003345 />
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute bg-[#091c61] h-[1200px] left-0 overflow-clip top-0 w-[1600px]" data-name="Mockup">
      <div className="absolute left-[-701px] size-[1700px] top-[-148px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1700 1700">
          <circle cx="850" cy="850" fill="url(#paint0_linear_15_670)" id="Ellipse 198" r="850" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_670" x1="0" x2="1869.64" y1="0" y2="1486.66">
              <stop offset="0.198551" stopColor="#CB3CFF" />
              <stop offset="0.683389" stopColor="#7F25FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bg-[100.27%_0.66%] bg-no-repeat bg-size-[100.01%_160.5%] h-[986px] rounded-tl-[24.622px] rounded-tr-[24.622px] shadow-[0px_21.607px_32.41px_0px_rgba(0,0,0,0.25)] top-[214px] translate-x-[-50%] w-[1231px]" data-name="Dashboard 1" style={{ left: "calc(50% + 12.5px)", backgroundImage: `url('${imgDashboard1}')` }} />
      <Frame1000003394 />
    </div>
  );
}

export default function Component0() {
  return (
    <div className="bg-white relative size-full" data-name="0">
      <Mockup />
    </div>
  );
}