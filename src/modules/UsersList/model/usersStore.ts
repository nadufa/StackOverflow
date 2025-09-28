import { useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';
import { initialState } from './constants';
import type { IUsersSettings } from './types';

export const usersStore = createStore<IUsersSettings>()(
  immer((set) => ({
    searchState: initialState,
    setSearchInput: (e) => {
      set((state) => {
        state.searchState.inputText = e.currentTarget.value;
      });
    },
    setSortByValue: (e) => {
      set((state) => {
        state.searchState.sortByValue = e.target.value;
      });
    },
    setSortDirectionValue: (e) => {
      set((state) => {
        state.searchState.sortDirectionValue = e.target.value;
      });
    },
  }))
);

export const useUsersSettingsStore = () => useStore(usersStore, (state) => state);
