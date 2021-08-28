import {DeleteInCart} from "./DeleteInCart";
import { shallow } from "enzyme";

describe("Testing delete in cart button", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DeleteInCart />);
    });

    test('renders button with text of `Delete`', () => {
        expect(wrapper.find(".Delete").text()).toBe("Delete");
      });
      
});