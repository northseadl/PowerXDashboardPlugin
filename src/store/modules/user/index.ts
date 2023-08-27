import { defineStore } from 'pinia';
// import { clearToken, setToken } from '@/utils/auth';
// import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
// import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: (): UserState =>
    ({
      id: undefined,
      account: undefined,
      name: undefined,
      email: undefined,
      mobilePhone: undefined,
      gender: undefined,
      nickName: undefined,
      desc: undefined,
      avatar: undefined,
      externalEmail: undefined,
      depIds: undefined,
      roles: [],
      position: undefined,
      jobTitle: undefined,
      isEnabled: undefined,
      createdAt: undefined,
    } as UserState),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      return undefined;
    },
  },
});

export default useUserStore;
