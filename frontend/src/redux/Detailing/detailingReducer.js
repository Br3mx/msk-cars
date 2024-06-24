import initialState from "../initialState";
//action

export const getFirstSection = (state) => state.detailing.firstSection;
export const getSecondSection = (state) => state.detailing.secondSection;
export const getThirdSection = (state) => state.detailing.thirdSection;
export const getFourthSection = (state) => state.detailing.fourthSection;
export const getOffer = (state) => state.detailing.offer;
export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
