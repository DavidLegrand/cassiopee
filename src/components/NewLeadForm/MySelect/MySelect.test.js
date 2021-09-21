import React from "react";
import { shallow } from "enzyme";
import MySelect from "./MySelect";

xdescribe("MySelect", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MySelect label="label" />);
    expect(wrapper).to();
  });
});
