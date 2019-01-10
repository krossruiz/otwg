import { TEST_BOOL_TOGGLE } from "./actionTypes";
import { NAV_BAR_ITEM_ON_MOUSE_SET, NAV_BAR_ITEM_STYLE_CHANGE } from "./actionTypes";
import { SLIDESHOW_CAROUSEL_SLIDE_CHANGE } from "./actionTypes";

export const testBoolToggle = content => ({
  type: TEST_BOOL_TOGGLE,
  payload: {}
});

export const navBarItemOnMouseSet = content => ({
    type: NAV_BAR_ITEM_ON_MOUSE_SET,
    payload: {
        itemId: content.itemId,
        newOnMouseValue: content.newOnMouseValue
    }
});

export const navBarItemStyleChange = content => ({
    type: NAV_BAR_ITEM_STYLE_CHANGE,
    payload: {}
});

export const slideshowCarouselSlideChange = content => ({
    type: SLIDESHOW_CAROUSEL_SLIDE_CHANGE,
    payload: {
        action: content.action,
        newIndex: content.newIndex
    }
});