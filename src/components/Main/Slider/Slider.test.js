import React from "react";
import { shallow } from "enzyme";
import Slider from "./Slider";

describe("Slider", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper).toMatchSnapshot();
  });
});
