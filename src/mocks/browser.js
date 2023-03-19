// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// ! THIS HAS POLYFILL ISSUES IN THE BROWSER. TO BE RESOLVED
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)