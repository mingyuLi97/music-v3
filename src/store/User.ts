import { defineStore } from 'pinia';
import { IUserProfile } from 'types/userType';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      profile: {} as IUserProfile
    };
  },
  actions: {
    initProfile(profile: IUserProfile) {
      this.profile = profile;
    }
  }
});
