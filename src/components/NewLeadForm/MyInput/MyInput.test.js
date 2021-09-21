import React from "react";
import { shallow } from "enzyme";
import MyInput from "./MyInput";

xdescribe("MyInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyInput label="label" name="name" type="text" />);
    expect(wrapper).toBeTruthy();
  });
});
