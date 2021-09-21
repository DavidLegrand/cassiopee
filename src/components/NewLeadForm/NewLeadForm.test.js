import React from "react";
import { shallow } from "enzyme";
import NewLeadForm from "./NewLeadForm";

describe("NewLeadForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewLeadForm />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
