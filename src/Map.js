import React, { Component, createRef } from "react";
import PrismaZoom from "react-prismazoom";
import { ScrollBoost } from "react-scrollbooster";

import map from "./assets/map.png";
import cloud from "./assets/cloud.png";

//import clock from "./assets/clock.png";
import circle from "./assets/circle.png";
//import { Container } from "postcss";

import { data } from './data/modal_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.prismaZoom = createRef();
    this.scrollBooster = createRef();

    this.state = {
      zoom: 1,
      showModal: false,
      order: -1,
    };
  }

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  onClickOnZoomOut = () => {
    this.prismaZoom.current.zoomOut(1);
  };

  modal1 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 0 });
  };

  modal2 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 1 });
  };

  modal3 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 2 });
  };

  modal4 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 3 });
  };

  modal5 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 4 });
  };

  modal6 = () => {
    this.setState({ showModal: true });
    this.setState({ order: 5 });
  };

  componentDidMount() {
    console.log(this.scrollBooster);
  }

  onScrollBoostRefChange(scrollbooster) {
    console.log(scrollbooster);
    const [relX, relY] = [
      (scrollbooster.content.width - scrollbooster.viewport.width) / 2,
      (scrollbooster.content.height - scrollbooster.viewport.height) / 2,
    ];
    console.log(relX);
    scrollbooster?.setPosition({
      x: relX,
      y: relY,
    });
    this.scrollBooster.current = scrollbooster;
  }

  render() {
    console.log(this.viewport);
    return (
      <>
        <ScrollBoost scrollMode="transform" emulateScroll>
          {({ viewport, scrollbooster }) => {
            if (scrollbooster && this.scrollBooster.current !== scrollbooster) {
              this.onScrollBoostRefChange(scrollbooster);
            }
            return (
              <>
                <div className="relative left-8 top-12  md:left-20 lg:left-32  space-x-2 z-10">
                  <div className="shadow inline-block">
                    <button
                      onClick={(event) => {
                        if (scrollbooster) {
                          const layoutRect =
                            event.currentTarget.parentNode.getBoundingClientRect();
                          const [relX, relY] = [
                            scrollbooster.getState().position.x / 2 +
                              6.5 * layoutRect.width,
                            scrollbooster.getState().position.y / 2 +
                              9.5 * layoutRect.height,
                          ];
                          this.prismaZoom.current.zoomToZone(
                            relX,
                            relY,
                            layoutRect.width,
                            layoutRect.height
                          );
                        }
                      }}
                      className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                    >
                      Zoom In
                    </button>
                  </div>
                  <div className="shadow inline-block">
                    <button
                      onClick={this.onClickOnZoomOut}
                      className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                    >
                      Zoom Out
                    </button>
                  </div>
                  <div className="shadow inline-block">
                    <button
                      onClick={() => {
                        const [relX, relY] = [
                          (scrollbooster.content.width -
                            scrollbooster.viewport.width) /
                            2,
                          (scrollbooster.content.height -
                            scrollbooster.viewport.height) /
                            2,
                        ];
                        scrollbooster.scrollTo({ x: relX, y: relY });
                      }}
                      className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div
                  className="overflow-hidden w-full md:w-[80vw] 2xl:w-full h-container 2xl:h-[500px] mx-auto"
                  ref={viewport}
                >
                  <div>
                    <PrismaZoom
                      className="App-zoom"
                      onZoomChange={this.onZoomChange}
                      maxZoom={2}
                      ref={this.prismaZoom}
                    >
                      <img
                        className="max-w-none w-[5000px] h-auto"
                        src={map}
                        alt="map"
                      />
                      <img
                        className="animate-cloud max-w-none w-[4000px] h-auto absolute top-[70px]"
                        src={cloud}
                        alt="cloud"
                      />
                      <button
                        onClick={this.modal1}
                        className="absolute left-buttonx1 bottom-buttony1 bg-button1 rounded-full  px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Nuestros Planteles</span>
                      </button>
                      <button
                        onClick={this.modal2}
                        className="absolute left-buttonx2 bottom-buttony2 bg-button2 rounded-full px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Oficina Central</span>
                      </button>
                      <button
                        onClick={this.modal3}
                        className="absolute left-buttonx3 bottom-buttony3 bg-button3 rounded-full px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Historia</span>
                      </button>
                      <button
                        onClick={this.modal4}
                        className="absolute left-buttonx4 bottom-buttony4 bg-button4 rounded-full px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Comunidades</span>
                      </button>
                      <button
                        onClick={this.modal5}
                        className="absolute left-buttonx5 bottom-buttony5 bg-button5 rounded-full px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Producción Responsable</span>
                      </button>
                      <button
                        onClick={this.modal6}
                        className="absolute left-buttonx6 bottom-buttony6 bg-button6 rounded-full px-3 items-center flex text-white py-[3px] text-sm tracking-wider w-fit"
                      >
                        <img
                          src={circle}
                          className="w-4 h-4 inline mr-1"
                          alt="circle"
                        />
                        <span>Plantas Industriales</span>
                      </button>
                    </PrismaZoom>
                  </div>
                </div>
              </>
            );
          }}
        </ScrollBoost>
        {this.state.showModal ? (
          <>
            <div className="bg-black opacity-40 fixed inset-0 z-50"></div>
            <div
              className="justify-center items-center flex fixed inset-0 z-50"
              onClick={() => {
                this.setState({
                  showModal: false,
                });
              }}
            >
              <div
                className="rounded-lg w-[500px] bg-white pb-6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="relative flex-auto">
                  <img src={data[this.state.order].banner} alt="banner1" />
                </div>
                <h3 className="text-2xl font-bold px-4 pt-4 pb-2">
                  {data[this.state.order].title}
                </h3>
                <div className="relative px-4 pb-6 flex-auto">
                  {data[this.state.order].content}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
}



export default App;
