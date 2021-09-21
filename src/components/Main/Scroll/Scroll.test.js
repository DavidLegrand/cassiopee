import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

describe("Scroll", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper).toMatchSnapshot();
  });
});
