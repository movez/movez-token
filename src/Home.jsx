import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as THREE from "three";

import { useRef, useReducer, useMemo } from "react";
import { Canvas, useFrame,useThree,} from '@react-three/fiber'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls, Leva } from 'leva'

import {
  useGLTF,
  Environment,
  Lightformer,
  Instance,
  Instances,
  OrbitControls,
  Edges,
  PerspectiveCamera,
  Bounds,
  MeshTransmissionMaterial

} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";

import Q2024 from "./Component/Q2024.jsx";


import "./App.css";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];
function Home(props) {




  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  const timelineRef = useRef();
  const [position, setPosition] = useState(0); // Track the current position

  const scrollLeft = () => {
    if (timelineRef.current && position > 0) {
      setPosition(position - 1); // Decrement the position
      const scrollAmount = timelineRef.current.children[position].offsetWidth;
      timelineRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (
      timelineRef.current &&
      position < timelineRef.current.children.length - 1
    ) {
      const scrollAmount = timelineRef.current.children[position].offsetWidth;
      setPosition(position + 1); // Increment the position
      timelineRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="__next">
        <div style={{ overflow: "hidden" }}>
          <div className="cta-grp xl:flex gap-5 hidden">
            <a
              href="https://apps.apple.com/us/app/movez/id1167356396"
              target="_blank"
              className="cta-btn flex"
            >
              <span
                height="25px"
                width="25px"
                color="#fff"
                rotate={0}
                className="sc-bczRLJ hpmVxp pr-3"
              >
                <img src="/app.png" style={{ width: 50 }} alt="" />
              </span>
              <span
                height="25px"
                width="25px"
                color="#fff"
                rotate={0}
                className="sc-bczRLJ hpmVxp"
              >
                {/* <img src="logos/burnz-logo.svg" alt="" style={{ width: 50 }} /> */}
                <img src="/play.png" style={{ width: 50 }} alt="" />
              </span>
              <span className="px-2 hidden md:block"> | </span>
              <span className="hidden md:block">Live Now</span>
            </a>
            <a
              href="https://www.okx.com/trade-spot/movez-usdt"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img src="logos/okx.svg" alt="" style={{ width: 50 }} />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
            <a
              href="https://www.bybit.com/en-US/trade/spot/MOVEZ/USDT"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img src="logos/bybit.svg" alt="" style={{ width: 40 }} />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
            <a
              href="https://www.gate.io/trade/MOVEZ_USDT"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img src="logos/gate.png" alt="" style={{ width: 25 }} />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x039cd22cb49084142d55fcd4b6096a4f51ffb3b4"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img
                src="https://igo.gamestarter.com/images/612f9cce81330511214a9d1a_Group_165.svg"
                alt=""
                style={{ width: 25 }}
              />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
            <a
              href="https://www.mexc.com/exchange/MOVEZ_USDT"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img src="./logos/mexc.png" alt="" style={{ width: 25 }} />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
            <a
              href="https://www.huobi.com/en-us/exchange/movez_usdt/"
              target="_blank"
              className="cta-btn flex relative"
            >
              <img src="./logos/huobi.png" alt="" style={{ width: 25 }} />
              <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                Live
              </div>
            </a>
          </div>
          <img src="./Disco.png" className="logo" />

          <Link
      className="staking"
      to="Stake"
    >
      Staking
    </Link>
          <a
            className="litepaper"
            href="https://docs.movez.org/"
            target="_blank"
          >
            Litepaper
          </a>

          <div className=" canv">
            {/* <canvas style={{ display: "block" }} /> */}
           <Canvas
              className="canv1"
              onClick={click}
              style={{ display: "block" }}
              shadows
              gl={{ alpha: true }}
              camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
              {...props}
            >
              <ambientLight color={"#ffffff"} intensity={4} />
              <spotLight
                color={"#ff0000"}
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={5}
                castShadow
              />
            

              <Physics gravity={[0, 0, 0]}>
                <Pointer /> 
         {/* {connectors.map((props, i) => <Connector key={i} {...props} />) } */}
           {
                  connectors.map((props, i) => <Connector key={i} {...props} />) }
            
                <Connector position={[1, 0.5, 1]}>
                  <Model>
                    <MeshTransmissionMaterial
                      clearcoat={1}
                      thickness={0.1}
                      anisotropicBlur={0.1}
                      chromaticAberration={0.1}
                      samples={8}
                      resolution={512}
                    />
                  </Model>
                </Connector>
              </Physics>

              <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 1]}>
                  <Lightformer
                    form="circle"
                    intensity={4}
                    rotation-x={Math.PI / 2}
                    position={[0, 5, -9]}
                    scale={2}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    rotation-y={Math.PI / 2}
                    position={[-5, 1, -1]}
                    scale={2}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    rotation-y={Math.PI / 2}
                    position={[-5, -1, -1]}
                    scale={2}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    rotation-y={-Math.PI / 2}
                    position={[10, 1, 0]}
                    scale={8}
                  />
                </group>
              </Environment>
            </Canvas> 
          </div>
          <div className="height"></div>
          <section>
            <div className="textt">
              <h2
                style={{
                  textShadow: "0 100px 0 rgba(255, 255, 255, 0.1)",
                  transform: "translateX(calc(0% - 0px * 0.5))",
                }}
                className="spaac"
              >
                <span>Movez </span>
                <span>Earn </span>
                <span>Win </span>
                <span>Rewards </span>
                <span>Movez </span>
                <span>Movez </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
              </h2>
              <h2
                style={{
                  textShadow: "0 100px 0 rgba(255, 255, 255, 0.1)",
                  transform: "translateX(calc(0% - 0px * 1.15))",
                }}
              >
                <span>Move </span>
                <span>Move </span>
                <span>Fitness </span>
                <span>Move </span>
                <span>Win </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Win </span>
                <span>Win </span>
                <span>Win </span>
                <span>Win </span>
                <span>Win </span>
                <span>Win </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
                <span>Move </span>
              </h2>
            </div>
          </section>

          <div className="container mx-auto px-5 lg:hidden">
            <div className="grid grid-cols-1 mb-10">
              <a
                href="https://apps.apple.com/us/app/movez/id1167356396"
                target="_blank"
                className="cta-btn flex"
              >
                <span
                  height="25px"
                  width="25px"
                  color="#fff"
                  rotate={0}
                  className="sc-bczRLJ hpmVxp pr-3 py-3"
                >
                  <img src="/app.png" style={{ width: 50 }} alt="" />
                </span>
                <span
                  height="25px"
                  width="25px"
                  color="#fff"
                  rotate={0}
                  className="sc-bczRLJ hpmVxp py-3"
                >
                  <img src="/play.png" style={{ width: 50 }} alt="" />
                </span>

                <span className="px-2"> | </span>
                <span className=""> Live Now</span>
              </a>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-5">
              <a
                href="https://www.okx.com/trade-spot/movez-usdt"
                target="_blank"
                className="cta-btn flex relative py-10 lg:py-0"
              >
                <img src="logos/okx.svg" alt="" style={{ width: 50 }} />
                <span className="px-2 hidden lg:block">| </span>
                <span className="hidden lg:block">8:00 am UTC</span>
                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
              <a
                href="https://www.bybit.com/en-US/trade/spot/MOVEZ/USDT"
                target="_blank"
                className="cta-btn flex relative"
              >
                <img
                  src="logos/bybit.svg"
                  alt=""
                  style={{ width: 40 }}
                  className="py-4 lg:py-0"
                />
                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
              <a
                href="https://www.gate.io/trade/MOVEZ_USDT"
                target="_blank"
                className="cta-btn flex relative"
              >
                <img
                  src="logos/gate.png"
                  alt=""
                  style={{ width: 25 }}
                  className="py-4 lg:py-0"
                />
                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x039cd22cb49084142d55fcd4b6096a4f51ffb3b4"
                target="_blank"
                className="cta-btn flex relative"
              >
                <img
                  src="https://igo.gamestarter.com/images/612f9cce81330511214a9d1a_Group_165.svg"
                  alt=""
                  style={{ width: 25 }}
                />
                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
              <a
                href="https://www.mexc.com/exchange/MOVEZ_USDT"
                target="_blank"
                className="cta-btn flex relative"
              >
                <img
                  src="logos/mexc.png"
                  alt=""
                  style={{ width: 25 }}
                  className="py-4"
                />
                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
              <a
                href="https://www.huobi.com/en-us/exchange/movez_usdt"
                target="_blank"
                className="cta-btn flex relative"
              >
                <img
                  src="logos/huobi.png"
                  alt=""
                  style={{ width: 25 }}
                  className="py-4"
                />

                <div className="absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange">
                  Live
                </div>
              </a>
            </div>
          </div>
          <div className="container mx-auto py-10">
            <div className="px-5 md:px-0">
              <div className="flex title items-center">
                <h1>
                  Supercharge <span className="outline">Your Fitness</span>
                </h1>
                <a className="abc1" href="" target="_blank">
                  {/* <Link to="/Flash">     Purple Background  </Link> */}
                </a>

                <a
                  href="https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/supercharge-your-fitness"
                  target="_blank"
                  className="link pl-4 pt-2"
                >
                  <span
                    height="30px"
                    width="30px"
                    color="#00000"
                    rotate={0}
                    className="sc-bczRLJ eVEpwd"
                  >
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={36}
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <p className="pt-3">
                Centered around the Movez app, participants will be able to earn
                <strong> $DISCO </strong> token rewards <br />
                for participating in a range of <b>fitness</b> activities.
              </p>
            </div>
            <div className="card-box py-5 grid md:grid-cols-2 grid-cols-1">
              <a
                className="card"
                href="https://docs.movez.org/"
                target="_blank"
              >
                <h2>Attend to Earn A2E</h2>
                {/* <p>Gym sessions now pays.</p> */}
                <div
                  className="pic"
                  style={{ backgroundImage: "url(lifting.jpeg)" }}
                />
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
                <div className="social">
                  <i className="fab fa-github" />
                </div>
                <button style={{ backgroundColor: "#A020F0" }} />
              </a>
              <a
                className="card"
                href="https://docs.movez.org/"
                target="_blank"
              >
                <h2>Move to Earn M2E</h2>
                {/* <p>Walk,Run,Jog and earn.</p> */}
                <div
                  className="pic"
                  style={{ backgroundImage: "url(walking.jpeg)" }}
                />
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
                <div className="social">
                  <i className="fab fa-github" />
                </div>
                <button style={{ backgroundColor: "#A020F0" }} />
              </a>
              <a
                className="card"
                href="https://docs.movez.org/"
                target="_blank"
              >
                <h2 className="span">Participate to Earn</h2>
                <h2 id="span">(organize, host &amp; promote) P2E</h2>
                <div
                  className="pic"
                  style={{ backgroundImage: "url(cycling1.jpg)" }}
                />
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
                <div className="social">
                  <i className="fab fa-github" />
                </div>
                <button style={{ backgroundColor: "#A020F0" }} />
              </a>
              <a
                className="card"
                href="https://docs.movez.org/"
                target="_blank"
              >
                <h2>Create to Earn C2E</h2>
                {/* <p>Earn by activities.</p> */}
                <div
                  className="pic"
                  style={{ backgroundImage: "url(surfing.jpeg)" }}
                />
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
                <div className="social">
                  <i className="fab fa-github" />
                </div>
                <button style={{ backgroundColor: "#A020F0" }} />
              </a>
            </div>
          </div>
          <div className="relative mb-10" style={{ height: 400 }}>
            <div className="container mx-auto py-10 pb-5 px-3">
              <h1>
                Ready? <span className="outline">Set.Go!</span>
              </h1>
              <p className="pt-3">Get ready, the movement's moving! Are you?</p>
            </div>
            <div className="relative">
              <div className="btn-grp hid">
                <div className="left" onClick={scrollLeft}>
                  <span
                    height="25px"
                    width={19}
                    color="white"
                    rotate={0}
                    className="sc-bczRLJ ezcwRl"
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
                  </span>
                </div>
                <button className="right" onClick={scrollRight}>
                  <span
                    height="25px"
                    width={19}
                    color="white"
                    rotate={0}
                    className="sc-bczRLJ ezcwRl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div
                ref={timelineRef}
                className=""
                style={{ transition: "all 1s ease 0s", height: 250, left: 0 }}
              >
                <ul className="timeline-events flex">
                  <li className="timeline-event-years-4-5 timeline-event-legend">
                    <i>
                      <span
                        className="flex items-center absolute"
                        style={{ left: 140 }}
                      >
                        <span className="text-sm pr-1">100%</span>
                        <span
                          height="22px"
                          width={15}
                          color="white"
                          rotate={0}
                          className="sc-bczRLJ ezcwRl"
                        >
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52"
                              stroke="currentColor"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                              strokeWidth={32}
                              d="M128.18 291.5v-74.77l64.95-65.1"
                            />
                            <path d="M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z" />
                            <circle
                              cx="259.02"
                              cy="67.21"
                              r="37.38"
                              stroke="currentColor"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                              strokeWidth={16}
                            />
                          </svg>
                        </span>
                      </span>
                    </i>
                  </li>
                  <li className="timeline-event-years-2">
                    <h2>Phase I</h2>
                    <h3>App Beta Launch</h3>
                    <h4>Main website</h4>
                    <h4>Staking</h4>
                    <h4>Dual token Launch</h4>
                    <h4>Booster NFTs</h4>
                  </li>
                  <li className="timeline-event-years-2">
                    <h2>Phase II</h2>
                    <h3>Enhanced user experience</h3>
                    <h4>Additional sports</h4>
                    <h4>Achievement system</h4>
                    <h4>Quests/missions system</h4>
                    <h4>Boost zones</h4>
                  </li>
                  <li className="timeline-event-years-2">
                    <h2>Phase III</h2>
                    <h3>Expansion to the physical world</h3>
                    <h4>AR implementation</h4>
                    <h4>Geo-Location NFTs</h4>
                    <h4>Movez merchandize</h4>
                    <h4>One time sign-up gift</h4>
                    <h4>Shop partnerships</h4>
                  </li>
                  <li className="timeline-event-years-2">
                    <h2>Phase IV</h2>
                    <h3>Expanding with focus on big events</h3>
                    <h4>Mega/Big events</h4>
                    <h4>Multi-chain upgrade</h4>
                    <h4>Community sports-driven events</h4>
                    <h4>Geo-location competitions</h4>
                    <h4>Corporate implementation</h4>
                  </li>
                  <Q2024 />
                </ul>
                <ul className="timelines-years">
                  <li>Q4 2022</li>
                  <li>Q1 2023</li>
                  <li>Q2 2023</li>
                  <li>Q3 2023</li>
                  <li>Q4 2023</li>
                  <li>Q1 2024</li>
                  <li>Q2 2024</li>
                  <li>Q3 2024</li>
                  <li>Q4 2024</li>
                  <li>Q1 2025</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
              <div className="token-box p-10">
                <h1>MOVEZ</h1>
                <p className="flex py-5 items-center">
                  <img
                    src="Purple.png"
                    className="mr-3"
                    style={{ width: 30, height: 30 }}
                  />
                  Governance
                </p>
                <ul>
                  <li className="flex py-1">
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M288 192h129.81a2 2 0 001.41-3.41L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16zM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" />
                        <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160a32 32 0 01-32 32h-96a32 32 0 01-32-32v-48a32 32 0 0132-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0132 32z" />
                      </svg>
                    </span>
                    <span className="pl-3">Staking</span>
                  </li>
                  <li className="flex py-1">
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M160 136v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0056 56h208a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56H216a56.06 56.06 0 00-56 56zM48 240a16 16 0 000 32h112v-32z" />
                      </svg>
                    </span>
                    <span className="pl-3">Access to the App Reward</span>
                  </li>
                  <li className="flex py-1">
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M64 164v244a56 56 0 0056 56h272a56 56 0 0056-56V164a4 4 0 00-4-4H68a4 4 0 00-4 4zm267 151.63l-63.69 63.68a16 16 0 01-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0123.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v105.37l36.69-36.68a16 16 0 0123.16.56c5.8 6.37 5.24 16.29-.85 22.38z" />
                        <rect
                          x={32}
                          y={48}
                          width={448}
                          height={80}
                          rx={32}
                          ry={32}
                        />
                      </svg>
                    </span>
                    <span className="pl-3">Voting Access</span>
                  </li>
                  <li className="flex py-1">
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M416 480c-35.29 0-64-29.11-64-64.88 0-33.29 28.67-65.4 44.08-82.64 1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0130.55 0c1.13 1.31 2.63 3 4.36 4.93 15.5 17.3 44.33 49.51 44.33 83.05 0 35.74-28.71 64.85-64 64.85zM398.23 276.64L166.89 47.22a52.1 52.1 0 00-73.6 0l-4.51 4.51a53.2 53.2 0 00-15.89 37.33A51.66 51.66 0 0088.14 126l41.51 41.5L45 252a44.52 44.52 0 00-13 32 42.81 42.81 0 0013.5 30.84l131.24 126a44 44 0 0061.08-.18l124.11-120.28a15.6 15.6 0 018.23-4.29 69.21 69.21 0 0111.93-.86h.3a22.53 22.53 0 0015.84-38.59zM152.29 144.85l-41.53-41.52a20 20 0 010-28.34l5.16-5.15a20.07 20.07 0 0128.39 0L186 111.21z" />
                      </svg>
                    </span>
                    <span className="pl-3">Liquidity provider for DISCO</span>
                  </li>
                  <li className="flex py-1">
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M352 368h112V256"
                        />
                        <path
                          d="M48 144l121.37 121.37a32 32 0 0045.26 0l50.74-50.74a32 32 0 0145.26 0L448 352"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                      </svg>
                    </span>
                    <span className="pl-3">Deflationary</span>
                  </li>
                </ul>
              </div>
              <div className="px-5 dual-token lg:col-span-2 py-10 text-center justify-center flex flex-col items-center">
                <div className="w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 518 340.891"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="1.194"
                        y1="-0.411"
                        x2="0.075"
                        y2="1.166"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#1788fb" />
                        <stop offset="0.483" stopColor="#238df8" />
                        <stop offset={1} stopColor="#17e9fb" />
                      </linearGradient>
                      <filter
                        id="Path_2362"
                        x={178}
                        y="1.609"
                        width={340}
                        height="339.282"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dy={3} input="SourceAlpha" />
                        <feGaussianBlur stdDeviation={10} result="blur" />
                        <feFlood floodColor="#fc4c02" floodOpacity="0.584" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                      <filter
                        id="Path_2363"
                        x={0}
                        y={0}
                        width={340}
                        height="340.891"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dy={3} input="SourceAlpha" />
                        <feGaussianBlur stdDeviation={10} result="blur-2" />
                        <feFlood floodColor="#fc4c02" floodOpacity="0.584" />
                        <feComposite operator="in" in2="blur-2" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                      <linearGradient
                        id="linear-gradient-2"
                        x1="1.194"
                        y1="-0.411"
                        x2="0.075"
                        y2="1.166"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#fc4c02" />
                        <stop offset="0.483" stopColor="#fc4f02" />
                        <stop offset={1} stopColor="#fc8702" />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_1738"
                      data-name="Group 1738"
                      transform="translate(-164 -74.109)"
                    >
                      <g
                        id="Group_1736"
                        data-name="Group 1736"
                        transform="translate(354 113.973)"
                      >
                        <circle
                          id="Ellipse_13"
                          data-name="Ellipse 13"
                          cx={126}
                          cy={126}
                          r={126}
                          transform="translate(33 0.027)"
                          className="dual-1"
                        />
                        <image
                          id="GoldImage"
                          href="Gold.png"
                          x="33"
                          y="4"
                          width="250"
                          height="250"
                          className="dual-2"
                        />
                      </g>

                      <g
                        transform="matrix(1, 0, 0, 1, 164, 74.11)"
                        filter="url(#Path_2362)"
                      >
                        <g
                          id="Path_2362-2"
                          data-name="Path 2362"
                          transform="translate(208 27.89)"
                          fill="none"
                        >
                          <path
                            d="M140,.718C217.32.718,280,62.68,280,140A140,140,0,0,1,0,140C0,62.68,62.68.718,140,.718Z"
                            stroke="none"
                            className="dual-3"
                          />
                          <path
                            d="M 140 6.717926025390625 C 66.11216735839844 6.717926025390625 6 66.50802612304688 6 140.0000152587891 C 6 213.8878479003906 66.11216735839844 273.9999694824219 140 273.9999694824219 C 213.8878326416016 273.9999694824219 274 213.8878479003906 274 140.0000152587891 C 274 66.50802612304688 213.8878326416016 6.717926025390625 140 6.717926025390625 M 140 0.717926025390625 C 217.31982421875 0.717926025390625 280 62.68014526367188 280 140.0000152587891 C 280 217.3198547363281 217.31982421875 279.9999694824219 140 279.9999694824219 C 62.68013000488281 279.9999694824219 0 217.3198547363281 0 140.0000152587891 C 0 62.68014526367188 62.68013000488281 0.717926025390625 140 0.717926025390625 Z"
                            stroke="none"
                            fill="#fc4c02"
                            className="dual-4"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1, 0, 0, 1, 164, 74.11)"
                        filter="url(#Path_2363)"
                      >
                        <g
                          id="Path_2363-2"
                          data-name="Path 2363"
                          transform="translate(30 27.89)"
                          fill="none"
                        >
                          <path
                            d="M140-.891C217.32-.891,280,62.68,280,140A140,140,0,0,1,0,140C0,62.68,62.68-.891,140-.891Z"
                            stroke="none"
                            className="dual-5"
                          />
                          <path
                            d="M 140 5.109100341796875 C 66.11216735839844 5.109100341796875 6 65.62089538574219 6 139.9999847412109 C 6 213.8878173828125 66.11216735839844 273.9999694824219 140 273.9999694824219 C 213.8878326416016 273.9999694824219 274 213.8878173828125 274 139.9999847412109 C 274 65.62089538574219 213.8878326416016 5.109100341796875 140 5.109100341796875 M 140 -0.890899658203125 C 217.31982421875 -0.890899658203125 280 62.68014526367188 280 139.9999847412109 C 280 217.3198547363281 217.31982421875 279.9999694824219 140 279.9999694824219 C 62.68013000488281 279.9999694824219 0 217.3198547363281 0 139.9999847412109 C 0 62.68014526367188 62.68013000488281 -0.890899658203125 140 -0.890899658203125 Z"
                            stroke="none"
                            fill="#fc4c02"
                            className="dual-6"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_1737"
                        data-name="Group 1737"
                        transform="translate(-37.561 74.021)"
                      >
                        <circle
                          id="Ellipse_13-2"
                          data-name="Ellipse 13"
                          cx={128}
                          cy={128}
                          r={128}
                          transform="translate(244.56 39.979)"
                          className="dual-7"
                        />
                        <g
                          id="Group_1"
                          data-name="Group 1"
                          transform="translate(303.39 111.936)"
                        >
                          <image
                            id="GoldImage"
                            href="Purple.png"
                            x="-55"
                            y="-70"
                            width="250"
                            height="250"
                            className="dual-2"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h1>
                  Dual <span className="outline">Tokens</span>
                </h1>
                <p className="pt-3">
                  <b>Movez</b> features a dual tokens system.
                  <br />
                  <span className="flex justify-center pt-2">
                    <b>$USD</b>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN mx-2"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M320 120l48 48-48 48"
                        />
                        <path
                          d="M352 168H144a80.24 80.24 0 00-80 80v16M192 392l-48-48 48-48"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <path
                          d="M160 344h208a80.24 80.24 0 0080-80v-16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                      </svg>
                    </span>
                    <b>$MOVEZ</b>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN mx-2"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M320 120l48 48-48 48"
                        />
                        <path
                          d="M352 168H144a80.24 80.24 0 00-80 80v16M192 392l-48-48 48-48"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <path
                          d="M160 344h208a80.24 80.24 0 0080-80v-16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                      </svg>
                    </span>
                    <b>$DISCO</b>
                  </span>
                </p>
              </div>
              <div className="token-box p-10 text-right">
                <h1>
                  <span className="outline">DISCO</span>
                </h1>
                <p className="flex py-5 justify-end items-center">
                  IN-APP
                  <img
                    src="Gold.png"
                    className="ml-3"
                    style={{ width: 30, height: 30 }}
                  />
                </p>
                <ul>
                  <li className="flex justify-end py-1">
                    <span className="pr-3">Buy/trade NFTS</span>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"
                        />
                      </svg>
                    </span>
                  </li>
                  <li className="flex justify-end py-1">
                    <span className="pr-3">Reward for each activity</span>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M467 176a29.94 29.94 0 00-25.32 12.5 2 2 0 01-3.64-1.14v-36.65c0-20.75-16.34-38.21-37.08-38.7A38 38 0 00362 150v82a2 2 0 01-2 2H152a2 2 0 01-2-2v-81.29c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0074 150v37.38a2 2 0 01-3.64 1.14A29.94 29.94 0 0045 176c-16.3.51-29 14.31-29 30.62v98.72c0 16.31 12.74 30.11 29 30.62a29.94 29.94 0 0025.32-12.5 2 2 0 013.68 1.16v36.67C74 382 90.34 399.5 111.08 400A38 38 0 00150 362v-82a2 2 0 012-2h208a2 2 0 012 2v81.29c0 20.75 16.34 38.21 37.08 38.7A38 38 0 00438 362v-37.38a2 2 0 013.64-1.14A29.94 29.94 0 00467 336c16.3-.51 29-14.31 29-30.62v-98.74c0-16.31-12.74-30.11-29-30.64z" />
                      </svg>
                    </span>
                  </li>
                  <li className="flex justify-end py-1">
                    <span className="pr-3">Tournaments/Events Access</span>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M464 80h-60.1a4 4 0 01-4-4V63.92a32 32 0 00-32-31.92l-223.79.26a32 32 0 00-31.94 31.93V76a4 4 0 01-4 4H48a16 16 0 00-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 015.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 016.25 7.8V444a4 4 0 01-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 448h-60a4 4 0 01-4-4v-86.86a8 8 0 016.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 015.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 00-16-16zM112 198.22a4 4 0 01-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 014-4.15h40a4 4 0 014 4c-.02 27.45-.07 58.87-.07 82.22zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 01-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 014-4h40a4 4 0 014 4.15c-.79 22.96-7.9 45.94-19.81 63.63z" />
                      </svg>
                    </span>
                  </li>
                  <li className="flex justify-end py-1">
                    <span className="pr-3">0% Tax fee on sell</span>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M448 400H64a16 16 0 010-32h384a16 16 0 010 32zM416 448H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z" />
                        <path d="M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                        <circle cx={256} cy={208} r={64} />
                        <path d="M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zM480 144h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z" />
                      </svg>
                    </span>
                  </li>
                  <li className="flex justify-end py-1">
                    <span className="pr-3">
                      Tokens Burned after each activity
                    </span>
                    <span
                      height="25px"
                      width="25px"
                      color="white"
                      rotate={0}
                      className="sc-bczRLJ bIJdPN"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-10 tokenmetrics relative overflow-hidden px-5">
            
          <div className="flex title items-center px-5" bis_skin_checked={1}>
  <h1>
    Token<span className="outline">Metrics</span>
  </h1>
  <a
    href="https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/tokenomics"
    target="_blank"
    className="link pl-4 pt-2"
  >
    {" "}
    <span
      height="30px"
      width="30px"
      color="#00000"
      rotate={0}
      className="sc-bczRLJ eVEpwd"
    >
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={36}
        />
      </svg>
    </span>
  </a>
</div>

            <>
  <h2 className="pt-3 text-xl px-5">
    Total Supply: <b className="futura">5,000,000,000</b> $MOVEZ
  </h2>
  <p className="pt-1 opacity-60 px-5">
    MOVEZ does not require users to own NFT assets to participate
    <br />
    in its move-to-earn ecosystem.
  </p>
</>
<div className="chart regular-font-size">
 <Canvas className="canv3" gl={{ antialias: true,logarithmicDepthBuffer: true  }}
     shadows camera={{ position: [0, 1, 7], fov: 50 }}>
      <color attach="background" args={['#101010']} />
      <ambientLight intensity={1}/>

       <directionalLight position={[-5,5,5]} />
       <Camera/>
       <Model2/>
     

      <Environment preset='city' />
     
      
   
    </Canvas> 
    </div>
          </div>
          <img
      src="/tokenmetrics.svg"
      className="mx-auto w-100 md:w-1/2 mt-5 px-5"
      style={{ height: '650px' }}
      alt="Token Metrics"
    />          <div className="relative">
            <div className="container mx-auto">
              <div className="px-5 md:px-0 py-20">
                <div className="flex title items-center">
                  <h1>
                    Go <span className="outline">Social</span>
                  </h1>
                  <a
                    href="https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/supercharge-your-fitness"
                    target="_blank"
                    className="link pl-4 pt-2"
                  >
                    <span
                      height="30px"
                      width="30px"
                      color="#00000"
                      rotate={0}
                      className="sc-bczRLJ eVEpwd"
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={36}
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <p className="pt-3">
                  Featuring powerful boost zones, local challenges, and both
                  national and worldwide leaderboards,
                  <br />
                  Movez makes staying fit as competitive or relaxed as you
                  choose while unlocking an array of new social experiences.
                </p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hideshow-line"
              style={{
                zIndex: -1,
                right: 0,
                top: "-20px",
                height: "110%",
                objectFit: "cover",
              }}
              viewBox="0 0 1694 632"
            >
              <defs>
                <filter
                  id="Path_1809"
                  x="-128.34"
                  y="-653.017"
                  width="1873.842"
                  height="1679.6"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy={3} input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={10} result="blur" />
                  <feFlood floodColor="#fc4c02" floodOpacity="0.686" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="clip-iPhone_13_12_Pro_Max_8">
                  <rect width={1694} height={632} className="svg-elem-1" />
                </clipPath>
              </defs>
              <g
                id="iPhone_13_12_Pro_Max_8"
                data-name="iPhone 13, 12 Pro Max – 8"
                clipPath="url(#clip-iPhone_13_12_Pro_Max_8)"
              >
                <g
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  filter="url(#Path_1809)"
                >
                  <path
                    id="Path_1809-2"
                    data-name="Path 1809"
                    d="M10819.705,2627.722s232.789-312.442,412.521-555.4c110.062-148.78,186.822-290.82,111.081-310.741s84.1-195.969,101.01-237.551c13.455-33.076,10.91-67.434,14.3-91,10.876-75.692,4.592-165.5,54.389-200.4,84.545-59.255,53.643-252.151,93.189-268.385"
                    transform="matrix(0.59, 0.81, -0.81, 0.59, -4329.27, -9942.53)"
                    fill="none"
                    stroke="#fc4c02"
                    strokeWidth={6}
                    className="svg-elem-2"
                  />
                </g>
              </g>
            </svg>
          </div>
          <footer className="relative">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div className=" canv canv2">
                {/* <canvas style={{ display: "block" }} /> */}
                <Canvas
                  className="canv2"
                  orthographic
                  camera={{ position: [10, 20, 20], zoom: 85 }}
                  gl={{ alpha: true }}
                >
                  {/** The Alphabet and the grid */}
                  <Leva hidden={true} />
                  <Alphabet
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    position={[0.5, -0.5, 0.7]}
                  />
                  <ambientLight color={"#ffffff"} intensity={0.5} />

                  <OrbitControls
                    autoRotateSpeed={-0.1}
                    zoomSpeed={0.25}
                    minZoom={40}
                    maxZoom={140}
                    enablePan={false}
                    enableRotate={false} // Disable rotation
                    enableZoom={false}       // Disable zooming
                    dampingFactor={0.05}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                  />
                  {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
                  <Environment resolution={32}>
                    <group rotation={[-Math.PI / 4, -0.3, 0]}>
                      <Lightformer
                        intensity={20}
                        rotation-x={Math.PI / 2}
                        position={[0, 5, -9]}
                        scale={[10, 10, 1]}
                      />
                      <Lightformer
                        intensity={10}
                        rotation-y={Math.PI / 2}
                        position={[-5, 1, -1]}
                        scale={[10, 2, 1]}
                      />
                      <Lightformer
                        intensity={5}
                        rotation-y={Math.PI / 2}
                        position={[-5, -1, -1]}
                        scale={[10, 2, 1]}
                      />
                      <Lightformer
                        intensity={5}
                        rotation-y={-Math.PI / 2}
                        position={[10, 1, 0]}
                        scale={[20, 2, 1]}
                      />
                      <Lightformer
                        type="ring"
                        intensity={2}
                        rotation-y={Math.PI / 2}
                        position={[-0.1, -1, -5]}
                        scale={10}
                      />
                    </group>
                  </Environment>
                  {/** Soft shadows */}
                </Canvas>
              </div>
            </div>
            <div className="left-social">
              <a href="https://Twitter.com/movezapp" target="_blank">
                <img src="./tw.svg" height="25px" width="25px" />

                <span
                  height="25px"
                  width="25px"
                  color="#00000"
                  rotate={0}
                  className="sc-bczRLJ bwyKOl"
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                  </svg>
                </span>
              </a>
              <div className="py-10" />
              <a href="https://t.me/movezapp" target="_blank">
                <img src="./tg.svg" height="25px" width="25px" />
              </a>
            </div>
            <div className="right-social">
              <a href="https://facebook.com/movezapp" target="_blank">
                <img src="./fb.svg" height="25px" width="25px" />

                <span
                  height="25px"
                  width="25px"
                  color="black"
                  rotate={0}
                  className="sc-bczRLJ eyUGJp"
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M368 192H192v-80a64 64 0 11128 0 16 16 0 0032 0 96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64z" />
                  </svg>
                </span>
              </a>
              <div className="py-10" />
              <a href="https://instagram.com/movez" target="_blank">
                <img src="./insta.svg" height="25px" width="25px" />

                <span
                  height="25px"
                  width="25px"
                  color="black"
                  rotate={0}
                  className="sc-bczRLJ eyUGJp"
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" />
                    <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="bottom-social" />
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(0.5), r(3.5), r(3)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.1)
    );
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.085, 1, 0.085]} />
      <CuboidCollider args={[1, 0.08, 0.08]} />
      <CuboidCollider args={[0.21, 0.21, 1]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.4} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 0.5,
        (mouse.y * viewport.height) / 0.5,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({ children, ...props }) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/newdisco.glb");
  // useFrame((state, delta) => {
  //   easing.dampC(ref.current.material.color, color, 0.2, delta)
  // })
  // const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.05} metalness={2} ref={ref} {...props} dispose={null}>
      {children}

      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3a69432a4ae341e9838814cf38e58f0cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Disco_Sphere"
                  position={[84.705, 871.437, -156.223]}
                  scale={991.387}
                >
                  <group
                    name="Base_Sphere"
                    position={[0, -0.908, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.101}
                  >
                    <mesh
                      name="Base_Sphere_DiscoBall_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Base_Sphere_DiscoBall_0.geometry}
                      material={materials.DiscoBall}
                    />
                  </group>
                  <group
                    name="Chain"
                    position={[0, -0.908, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.101}
                  />
                  <group
                    name="Fix"
                    position={[0, -0.908, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.101}
                  />
                  <group
                    name="Reflective_Plates"
                    position={[0, -0.908, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.101}
                  >
                    <mesh
                      name="Reflective_Plates_Reflective_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Reflective_Plates_Reflective_0.geometry}
                      material={materials.Reflective}
                      position={[-0.014, -0.012, -0.207]}
                    />
                    <mesh
                      name="Reflective_Plates_Reflective_0001"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Reflective_Plates_Reflective_0001.geometry
                      }
                      material={
                        new THREE.MeshStandardMaterial({
                          color: "white",
                          metalness: 0.9,
                          roughness: 0,
                          emissive: "white", // Add an emissive color
                          emissiveIntensity: 1,
                        })
                      }
                    />
                    <mesh
                      name="Reflective_Plates_Reflective_0002"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Reflective_Plates_Reflective_0002.geometry
                      }
                      material={
                        new THREE.MeshStandardMaterial({
                          color: "red",
                          metalness: 0.9,
                          roughness: 0,
                          emissive: "red", // Add an emissive color
                          emissiveIntensity: 1,
                        })
                      }
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/newdisco.glb");

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="gray" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ":" + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper args={[100, 100, "gray", "gray"]} position={[0, -0.01, 0]} />
  </Instances>
);

function Alphabet(props) {
  const { nodes, materials } = useGLTF("/Z.glb");
  
  const ref = useRef()
  const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })
  return (
    <>
      <group>
        <Grid />
      </group>
      <group scale={1.19} {...props} metalness={0.5} roughness={0.6} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.movezstl.geometry}
          scale={[0.03, 0.03, 0.12]}
        >
           <LayerMaterial  ref={ref} toneMapped={false}>
        <Depth colorA="pink" colorB="purple" alpha={1} mode="normal" near={0.5 * gradient} far={0.6} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="purple" alpha={1} mode="add" near={5 * gradient} far={4} origin={[0, 1, 1]} />
        <Depth colorA="#A020F0" colorB="pink" alpha={1} mode="normal" near={10 * gradient} far={2} origin={[0, 1, -1]} />
        <Depth colorA="purple" colorB="blue" alpha={1} mode="overlay" near={7 * gradient} far={2} origin={[0, -1, -1]} />
        <Fresnel mode="add" color="#A020F0" intensity={0.2} power={1.5} bias={0.1} />
      </LayerMaterial>
            <Edges
    linewidth={2}
    scale={1}
    threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
    color="whitesmoke"
  />
        </mesh>
            
      
      </group>
    
    </>
  );
}















function Camera() {
  const cameraRef = useRef()
  const { size } = useThree() // Access the canvas size
  const [cameraPosition, setCameraPosition] = useState([9, 10, 11]) // Default position for desktop

  useEffect(() => {
    // Check if the screen width is below a certain threshold (e.g., 768px for mobile)
    if (size.width < 768) {
      setCameraPosition([13, 11.5, 17.5]) // Adjusted position for mobile
    } else {
      setCameraPosition([9, 10, 11]) // Reset position for desktop
    }
  }, [size.width])

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 2.5, 0) // Set the camera to look at a dynamic target, e.g., (0, 2.5, 0)
    }
  })

  return (
    <PerspectiveCamera ref={cameraRef} fov={35} makeDefault position={cameraPosition} />
  )
}

function Model2() {
  const { nodes, materials } = useGLTF('model.glb');
  

  useEffect(() => {
  }, [materials]);

  const pillar1 = useRef();
  const pillar2 = useRef();
  const pillar3 = useRef();

  let time = 0.0

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const oscillation = Math.sin(time * 0.5); // Oscillates between -1 and 1 over time

    pillar1.current.rotation.y =  oscillation * 0.5; // Adjust amplitude as needed
    pillar2.current.rotation.y = oscillation * 0.5;
    pillar3.current.rotation.y =  oscillation * 0.5;
  });


  return (
    <group>
      <primitive object={nodes.Scene}/>
      <primitive ref={pillar1} object={nodes['pillar1']} rotation={[0,1,0]}/>
      <primitive ref={pillar2} object={nodes['pillar2']} rotation={[0,1,0]}/>
      <primitive ref={pillar3} object={nodes['pillar3']} rotation={[0,1,0]}/>
    </group>
  );
}