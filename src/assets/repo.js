// 1. คลังข้อมูล Packages
const packagesData = [
  {
    name: "BatteryMirror",
    desc: "Mirrors the statusbar battery on the Low Power Mode toggle in Control Center.",
    version: "v0.0.4",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.batterymirror.png"
  },
  {
    name: "BattFX",
    desc: "Styles the system battery indicator while keeping the modern percentage body available systemwide.",
    version: "v0.0.5",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.battfx.png"
  },
  {
    name: "CCAster",
    desc: "An iOS 18-inspired, editable Control Center experience for iOS 16.",
    version: "v0.2.2",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.ccaster.png"
  },
  {
    name: "CCSupport Battery Fix",
    desc: "Fixes status bar battery percentage display when CCSupport is installed on iOS 15+.",
    version: "v0.0.2",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.ccsupportbatteryfix.png"
  },
  {
    name: "CenterLastRow",
    desc: "Centers the final SpringBoard icon row when it is not full.",
    version: "v0.0.1-2+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.centerlastrow.png"
  },
  {
    name: "CustHome",
    desc: "Backport the modern Home Screen customize experience to iOS 15, 16, and 17.",
    version: "v0.2.0",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.custhome.png"
  },
  {
    name: "DockFull",
    desc: "Adds switchable full-width dock styles, including a square extended dock, a rounded card dock, and a stock floating mode.",
    version: "v0.0.3",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.dockfull.png"
  },
  {
    name: "DockLibrary",
    desc: "Swipe up from the dock to open the App Library.",
    version: "v0.4.2",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.docklibrary.png"
  },
  {
    name: "DuoWall",
    desc: "Create native light and dark WallpaperKit pairs that appear in Collections and switch automatically with system appearance.",
    version: "v0.0.76-2+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.duowall.png"
  },
  {
    name: "Finn",
    desc: "Tints the homescreen context-menu backdrop to the app icon color. Rootless rewrite of Koi for iOS 15 & 16.",
    version: "v1.0.1",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.finn.png"
  },
  {
    name: "MuteFlash",
    desc: "Use the ringer switch as a flashlight toggle without changing silent mode.",
    version: "v0.0.2",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.muteflash.png"
  },
  {
    name: "MuteModule",
    desc: "Exposes Apple's hidden Control Center mute module on iPhone.",
    version: "v0.0.1-4+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.mutemodule.png"
  },
  {
    name: "NoSeparators",
    desc: "Hide common UIKit separator lines systemwide on iOS 11.",
    version: "v0.0.1-2+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.noseparators.png"
  },
  {
    name: "Solert",
    desc: "iOS 26-inspired UIAlertController restyling for iOS 15.",
    version: "v0.0.1-1+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.solert.png"
  },
  {
    name: "SwipeForMore7",
    desc: "Manage packages in Cydia via swipe.",
    version: "v1.2.5+ios7.12",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.swipeformore7.png"
  },
  {
    name: "TapTimeNeo",
    desc: "Tap the status bar clock to briefly show the date on iOS 15+.",
    version: "v0.0.1-7+debug",
    icon: "https://futur3sn0w.github.io/repo/icons/com.futur3sn0w.taptimenneo.png"
  }
];

// 2. ฟังก์ชันเรนเดอร์โครงสร้าง UI ทั้งหมด
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  // สร้าง HTML Cards ของทุก Package
  const pkgCardsHTML = packagesData.map(pkg => `
    <div class="pkg-card">
      <img class="pkg-icon" src="${pkg.icon}" alt="${pkg.name} icon" onerror="this.style.display='none'">
      <div class="pkg-info">
        <div class="pkg-name">${pkg.name}</div>
        <div class="pkg-desc">${pkg.desc}</div>
        <div class="pkg-version">${pkg.version}</div>
      </div>
    </div>
  `).join("");

  // วาดโครงสร้างทั้งหมด (Hero, Divider, Grid, Footer) ลงใน #app
  app.innerHTML = `
    <div class="hero">
      <img class="hero-logo" src="https://futur3sn0w.github.io/repo/CydiaIcon.png" alt="F1X3R">
      <h1>F1X3R Developer</h1>
      <p>DarkStore &nbsp;&middot;&nbsp; ${packagesData.length} packages</p>
    </div>

    <div class="divider"></div>

    <div class="section-header">
      <h2>Packages</h2>
      <span class="badge">${packagesData.length}</span>
    </div>

    <div class="pkg-grid">
      ${pkgCardsHTML}
    </div>

    <div class="divider"></div>

    <footer>
      <p>Made with ♡ by <a href="tg://user?id=6105731078">F1X3R</a></p>
    </footer>
  `;

  // เช็ค User Agent หลังวาด UI เสร็จ
  const ua = navigator.userAgent;
  if (/Sileo/.test(ua)) {
    document.querySelector('.btn-sileo')?.style.setProperty('outline', '2px solid white');
  } else if (/Zebra/.test(ua)) {
    document.querySelector('.btn-zebra')?.style.setProperty('outline', '2px solid #1a1a00');
  }
});
