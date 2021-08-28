import { AddToCartButton } from "./AddToCartButton";
import { shallow } from "enzyme";



describe("Add to cart button testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddToCartButton />);
    });

    it('should be defined', () => {
        expect(AddToCartButton).toBeDefined();

      });
      

    it('should display with label of `Add To Cart`', () => {
        expect(wrapper.find(".AddButton").text()).toBe("Add To Cart");

      });
      
});
