import { NAV_BAR_ITEM_ON_MOUSE_SET } from "./actionTypes";
import { NAV_BAR_ITEM_STYLE_CHANGE } from "./actionTypes";
import { INVEST_TODAY_MENU_ITEM_ID, CURRICULUM_MENU_ITEM_ID, WORKOUT_WALLS_MENU_ITEM_ID, PODCAST_MENU_ITEM_ID, 
	INTERNS_MENU_ITEM_ID, ABOUT_US_MENU_ITEM_ID, CONTACT_MENU_ITEM_ID, BLOG_MENU_ITEM_ID } from '../../constants/navBarMenuItems';

const initialState = {
    investToday: {
        onMouse: false,
        styles: []
    },
    curriculum: {
        onMouse: false,
        styles: []
    },
    workoutWalls: {
        onMouse: false,
        styles: []
    },
    podcast: {
        onMouse: false,
        styles: []
    },
    interns: {
        onMouse: false,
        styles: []
    },
    aboutUs: {
        onMouse: false,
        styles: []
    },
    contact: {
        onMouse: false,
        styles: []
    },
    blog: {
        onMouse: false,
        styles: []
    }
};

const navBarReducer = (state = initialState, action) => {

    let onMouseDefaultState = {
        ...state,
        investToday: {
            ...state.investToday,
            onMouse: false
        },
        curriculum: {
            ...state.curriculum,
            onMouse: false
        },
        workoutWalls: {
            ...state.workoutWalls,
            onMouse: false
        },
        podcast: {
            ...state.podcast,
            onMouse: false
        },
        interns: {
            ...state.interns,
            onMouse: false
        },
        aboutUs: {
            ...state.aboutUs,
            onMouse: false
        },
        contact: {
            ...state.contact,
            onMouse: false
        },
        blog: {
            ...state.blog,
            onMouse: false
        }
    }

  switch (action.type) {
    case NAV_BAR_ITEM_STYLE_CHANGE: {
        switch(action.payload.itemId){
            case INVEST_TODAY_MENU_ITEM_ID:
                return {
                    ...state,
                    investToday: {
                        ...state.investToday,
                        styles: action.payload.newStyles
                    }
                }
            case CURRICULUM_MENU_ITEM_ID:
                return {
                    ...state,
                    curriculum: {
                        ...state.curriculum,
                        styles: action.payload.newStyles
                    }
                }
            case WORKOUT_WALLS_MENU_ITEM_ID:
                return {
                    ...state,
                    workoutWalls: {
                        ...state.workoutWalls,
                        styles: action.payload.newStyles
                    }
                }
            case PODCAST_MENU_ITEM_ID:
                return {
                    ...state,
                    podcast: {
                        ...state.podcast,
                        styles: action.payload.newStyles
                    }
                }
            case INTERNS_MENU_ITEM_ID:
                return {
                    ...state,
                    interns: {
                        ...state.interns,
                        styles: action.payload.newStyles
                    }
                }
            case ABOUT_US_MENU_ITEM_ID:
                return {
                    ...state,
                    aboutUs: {
                        ...state.aboutUs,
                        styles: action.payload.newStyles
                    }
                }
            case CONTACT_MENU_ITEM_ID:
                return {
                    ...state,
                    contact: {
                        ...state.contact,
                        styles: action.payload.newStyles
                    }
                }
            case BLOG_MENU_ITEM_ID:
                return {
                    ...state,
                    blog: {
                        ...state.blog,
                        styles: action.payload.newStyles
                    }
                }
            default:
                return state;
        }
    }
    case NAV_BAR_ITEM_ON_MOUSE_SET: {
        switch (action.payload.itemId){
            case INVEST_TODAY_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    investToday: {
                        ...state.investToday,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case CURRICULUM_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    curriculum: {
                        ...state.curriculum,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case WORKOUT_WALLS_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    workoutWalls: {
                        ...state.workoutWalls,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case PODCAST_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    podcast: {
                        ...state.podcast,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case INTERNS_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    interns: {
                        ...state.interns,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case ABOUT_US_MENU_ITEM_ID:
                return{
                    ...onMouseDefaultState,
                    aboutUs: {
                        ...state.aboutUs,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case CONTACT_MENU_ITEM_ID:
                return{
                    ...state,
                    contact: {
                        ...state.contact,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            case BLOG_MENU_ITEM_ID:
                return{
                    ...state,
                    blog: {
                        ...state.blog,
                        onMouse: action.payload.newOnMouseValue
                    }
                }
            default:
                break;
        }
    }
    default:
      return state;
  }
};

export default navBarReducer;
