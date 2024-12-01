import logo from "./logo.svg";
import "./App.css";
import banner from "./img/MainFrame.mp4";
import scroll from "./img/scrolling.png";
import icon from "./img/icongamenormal.png";
import ios from "./img/buttontaigameappstore.png";
import android from "./img/buttontaigamegg.png";
import apk from "./img/buttontaigialap.png";
import napthe from "./img/buttonnapthe.png";
import cloud from "./img/cloud.png";

import banner1 from "./img/bgframe2.mp4";
import tintuctamquoc from "./img/tintuctamquoc.png";
import tatca from "./img/Tát Cả Normal.png";
import tintuc from "./img/Tin Tức.png";
import sukien from "./img/Sự Kiện.png";
import camnang from "./img/Cẩm Nang.png";
import framebanner from "./img/Frame Banner.png";
import xemthem from "./img/Button Xem Thêm Normal.png";

import banner2 from "./img/Bg Frame 3.mp4";
import danhtuong from "./img/Danh Tướng Tam Quốc.png";
import danhtuongchitiec from "./img/Group 37.png";

import banner3 from "./img/Bg Frame 4.mp4";
import thuphongtamquoc from "./img/Thư Phòng Tam Quốc.png";
import thuphong from "./img/Group 39.png";

import banner4 from "./img/Bg Frame 5.mp4";
import tinhnang from "./img/Tính Năng Đặc Sắc.png";
import tinhnangdacsac from "./img/Group 38.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main">
        <section className="banner">
          <video src={banner} autoPlay muted loop className="banner-video" />
          <div className="app_info">
            <a className="app_install_icon">
              <img src={icon} alt="icon" className="install_icon" />
            </a>
            <ul className="app_install">
              <li className="app_install_appstore">
                <a
                  id="getLinkIos"
                  data-track="DownloadIos-Mainsite-Header"
                  href="\"
                >
                  <img src={ios} alt="icon" className="icon_install_ios" />
                </a>
              </li>
              <li className="app_install_googleplay">
                <a
                  id="getLinkAndroid"
                  data-track="DownloadAndroid-Mainsite-Header"
                  href="\"
                >
                  <img
                    src={android}
                    alt="icon"
                    className="icon_install_android"
                  />
                </a>
              </li>
            </ul>
            <div className="app_install_gia_lap">
              <a href="\">
                <img src={apk} alt="icon" />
              </a>
            </div>
            <div className="app_install_nap_the">
              <a
                href="\"
                data-track="Topup-Mainsite-Header"
                target="_blank"
                rel="noopener"
              >
                <img src={napthe} alt="icon" />
              </a>
            </div>
          </div>
          <div className="scroll">
            <img src={scroll} alt="scroll" />
          </div>
          <img className="cloud" src={cloud} alt="cloud" />
        </section>

        <section className="news">
          <video src={banner1} autoPlay muted loop className="banner-video" />
          <div className="news_event">
            <img src={tintuctamquoc} alt="icon" className="tintuctamquoc" />
          </div>
          <div class="container">
            <ul className="posts-tabs">
              <li>
                <a>
                  <img src={tatca} alt="icon" className="tintuctamquoc" />
                </a>
              </li>
              <li>
                <a>
                  <img src={tintuc} alt="icon" className="tintuctamquoc" />
                </a>
              </li>
              <li>
                <a>
                  <img src={sukien} alt="icon" className="tintuctamquoc" />
                </a>
              </li>
              <li>
                <a>
                  <img src={camnang} alt="icon" className="tintuctamquoc" />
                </a>
              </li>
            </ul>
          </div>
          <div className="posts-contain">
            <div className="event-banner">
              <img src={framebanner} alt="icon" className="framebanner" />
            </div>
            <div className="event-content">
              <ul>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
                <li>
                  <p className="event-content-text">
                    Khai mở máy chủ mới S116 Thanh Phong Kiếm
                  </p>
                </li>
              </ul>
              <div>
                <img src={xemthem} alt="icon" className="xemthem" />
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <video
            src={banner2}
            autoPlay
            muted
            loop
            className="banner-video mix"
          />
          <div className="truyen">
            <img src={danhtuong} alt="icon" className="danhtuong" />

            <img
              src={danhtuongchitiec}
              alt="icon"
              className="danhtuongchitiec"
            />
          </div>
        </section>

        <section className="card">
          <video src={banner3} autoPlay muted loop className="banner-video" />
          <div className="truyen">
            <img src={thuphongtamquoc} alt="icon" className="thuphongtamquoc" />
            <img src={thuphong} alt="icon" className="thuphong" />
          </div>
        </section>

        <section className="card">
          <video
            src={banner4}
            autoPlay
            muted
            loop
            className="banner-video-and"
          />
          <div className="truyen">
            <img src={tinhnang} alt="icon" className="tinhnang" />
            <img src={tinhnangdacsac} alt="icon" className="tinhnangdacsac" />
          </div>
        </section>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
