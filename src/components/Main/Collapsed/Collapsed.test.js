import React from "react";
import { shallow } from "enzyme";
import Collapsed from "./Collapsed";

describe("Collapsed", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Collapsed />);
    expect(wrapper).toMatchSnapshot();
  });
});
