import { test as base } from '@playwright/test';

type Fixtures = {
  userData: { name: string; password: string };
};

export const test = base.extend<Fixtures>({
  userData: async ({}, use) => {
    const id = Date.now(); // Único por milisegundo
    await use({
      name: `Tester${id}`,      
      password: `Seguro${id}!`
    });
  },
});