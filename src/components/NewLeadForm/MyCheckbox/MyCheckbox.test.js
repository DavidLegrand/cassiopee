import React from "react";
import { shallow } from "enzyme";
import MyCheckbox from "./MyCheckbox";

xdescribe("MyCheckbox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyCheckbox />);
    expect(wrapper).toBeTruthy();
  });
});
