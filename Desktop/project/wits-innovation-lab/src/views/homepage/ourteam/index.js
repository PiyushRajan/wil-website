import React from "react";
import Img from "assets/images/section7image.png";
import Centerimg from "assets/images/julia.png";
import Leftimg1 from "assets/images/left1.png";
import Leftimg2 from "assets/images/left2.png";
import Leftimg3 from "assets/images/left3.png";
import Leftimg4 from "assets/images/left4.png";
import Rightimg1 from "assets/images/right1.png";
import Rightimg2 from "assets/images/right2.png";
import Rightimg3 from "assets/images/right3.png";
import Animatorimg from "assets/images/animator.png";
import Employeesimg from "assets/images/employees.png";
import Designersimg from "assets/images/ux.png";
import Foundersimg from "assets/images/founders.png";
import Developerimg from "assets/images/developer.png";
import {
  Maindiv,
  Meet,
  Our,
  We,
  Image,
  Julia,
  Juliap1,
  Juliap2,
  Juliap3,
  Left1,
  Left2,
  Left3,
  Left4,
  Right1,
  Right2,
  Right3,
  Animator,
  Employees,
  Designers,
  Founders,
  Developer,
} from "styles/views/homepage/ourteam/index";

const OurTeam = () => (
  <>
    <Maindiv>
      <Meet>Meet the brains</Meet>
      <Our>Our Team</Our>
      <We>We're a team of thinkers, dreamers, and doers.</We>
      <Image src={Img} alt="Image" />
      <Julia src={Centerimg} alt="Image" />
      <Juliap1>Julia Carter</Juliap1>
      <Juliap2>Sr. Developer</Juliap2>
      <Juliap3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
      </Juliap3>
      <Left1 src={Leftimg1} alt="Image" />
      <Left2 src={Leftimg2} alt="Image" />
      <Left3 src={Leftimg3} alt="Image" />
      <Left4 src={Leftimg4} alt="Image" />
      <Right1 src={Rightimg1} alt="Image" />
      <Right2 src={Rightimg2} alt="Image" />
      <Right3 src={Rightimg3} alt="Image" />
      <Animator src={Animatorimg} alt="Image" />
      <Employees src={Employeesimg} alt="Image" />
      <Designers src={Designersimg} alt="Image" />
      <Founders src={Foundersimg} alt="Image" />
      <Developer src={Developerimg} alt="Image" />
    </Maindiv>
  </>
);

export default OurTeam;
