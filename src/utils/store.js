'use client'
import { create } from "zustand";

export const activeStore = create((set) => ({
    active1: 0,
    setActive1 : (act) => set((state) => ({ active: state.active = act })),
}))

