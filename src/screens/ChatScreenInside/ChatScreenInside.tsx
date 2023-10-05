import React, { useState, useEffect } from "react";
import { CellularWifi } from "../../components/CellularWifi";
import { TimeIphone } from "../../components/TimeIphone";
import { Back1 } from "../../icons/Back1";
import { Call } from "../../icons/Call";
import { Document1 } from "../../icons/Document1";
import { Edit05 } from "../../icons/Edit05";
import { Members } from "../../icons/Members";
import { Paperclip } from "../../icons/Paperclip";
import { ReportMessage } from "../../icons/ReportMessage";
import "./style.css";

export const ChatScreenInside = (): JSX.Element => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    // Fetch chat data from the API when the component mounts
    fetch('https://qa.corider.in/assignment/chat?page=0')
      .then((response) => response.json())
      .then((data) => setChatData(data.messages));
  }, []);
  return (
    <div className="chat-screen-inside">
      <div className="div">
        <div className="status-bar-iphone">
          <TimeIphone className="time-iphone" darkMode={false} type="none" />
          <CellularWifi
            cap="/img/cap.svg"
            capacityClassName="cellular-wifi-battery-iphone-instance"
            cellularConnection="/img/cellular-connection.svg"
            className="cellular-wifi-battery-iphone"
            darkMode="off"
            overlapGroupClassName="cellular-wifi-instance"
            wifi="/img/wifi.svg"
          />
        </div>
        <div className="overlap">
          <div className="overlap-2">
            <div className="frame">
              <div className="frame-2">
                <Back1 className="group" />
                <div className="text-wrapper-2">Trip 1</div>
                <Edit05 className="icon-instance-node" />
              </div>
              <header className="header">
                <div className="text">
                  <div className="profile-wrapper">
                    <div className="profile">
                      <img className="rectangle" alt="Rectangle" src="/img/rectangle-12-3.png" />
                      <img className="img" alt="Rectangle" src="/img/rectangle-14.png" />
                      <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-13.png" />
                      <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-15.png" />
                    </div>
                  </div>
                  <p className="from-IGI-airport">
                    <span className="span">From</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                    <span className="text-wrapper-4">
                      IGI Airport, T3
                      <br />
                    </span>
                    <span className="span">To</span>
                    <span className="text-wrapper-3">&nbsp;&nbsp;</span>
                    <span className="text-wrapper-4">Sector 28</span>
                  </p>
                </div>
                <img className="group" alt="Dots vertical" src="/img/dots-vertical.svg" />
              </header>
            </div>
            <img className="vector" alt="Vector" src="/img/vector-15.svg" />
            <div className="text-wrapper-5">12 JAN, 2023</div>
            <div className="search-dropdown">
              <div className="frame-3">
                <Members className="icon-instance-node" />
                <div className="text-wrapper-6">Members</div>
              </div>
              <div className="frame-4">
                <Call className="icon-instance-node" />
                <div className="text-wrapper-6">Share Number</div>
              </div>
              <div className="frame-5">
                <ReportMessage className="icon-instance-node" />
                <div className="text-wrapper-6">Report</div>
              </div>
            </div>
          </div>
          <img className="vector-2" alt="Vector" src="/img/vector-15.svg" />
        </div>
        <div className="frame-6">
          <div className="group">
            <div className="overlap-3">
              <div className="overlap-wrapper">
                <div className="overlap-4">
                  <div className="rectangle-wrapper">
                    <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-12-2.png" />
                  </div>
                  <div className="check-verified">
                    <div className="overlap-group-2">
                      <div className="rectangle-5" />
                      <img className="solid" alt="Solid" src="/img/solid.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="check-verified">
                <div className="overlap-group-2">
                  <div className="rectangle-5" />
                  <img className="solid" alt="Solid" src="/img/solid.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="descriptions">
            <div className="content">
              <p className="p">
                Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the
                ride and save money
              </p>
            </div>
          </div>
        </div>
        <div className="frame-7">
          <div className="group">
            <div className="overlap-4">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-12-1.png" />
              </div>
              <div className="check-verified">
                <div className="overlap-group-2">
                  <div className="rectangle-5" />
                  <img className="solid" alt="Solid" src="/img/solid.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="descriptions">
            <div className="content">
              <p className="p">
                Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the
                ride and save money
              </p>
            </div>
          </div>
        </div>
        <div className="frame-8">
          <div className="group">
            <div className="overlap-4">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-12.png" />
              </div>
              <div className="check-verified">
                <div className="overlap-group-2">
                  <div className="rectangle-5" />
                  <img className="solid" alt="Solid" src="/img/solid.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="descriptions">
            <div className="content">
              <p className="p">
                Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the
                ride and save money
              </p>
            </div>
          </div>
        </div>
        <div className="frame-9">
          <div className="content-wrapper">
            <div className="content">
              <p className="text-wrapper-7">
                Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the
                ride and save money
              </p>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="reply">
            <div className="frame-11">
              <div className="frame-12">
                <div className="text-wrapper-8">I</div>
                <div className="text-wrapper-9">Reply to @Rohit Yadav</div>
              </div>
              <Paperclip className="icon-instance-node" />
              <img className="icon-instance-node" alt="Send" src="/img/send-03.svg" />
            </div>
          </div>
        </div>
        <div className="home-indicator" />
        <div className="attachments-click">
          <img className="icon-instance-node" alt="Camera" src="/img/camera-02.svg" />
          <img className="icon-instance-node" alt="Icon video" src="/img/icon-video.svg" />
          <Document1 className="icon-instance-node" />
          <img className="corner" alt="Corner" src="/img/corner.svg" />
        </div>
      </div>
    </div>
  );
};
