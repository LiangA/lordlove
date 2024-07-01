// composables/state.js
import { useState } from '#app';

export const useUser = () => useState('user', () => null);
