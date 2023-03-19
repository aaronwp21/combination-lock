import { describe, expect, it } from "vitest";
import {add, ave} from './lib'

describe('Library', () => {

  describe('Add fn', () => {
    it('is defined', () => {
      expect(add).toBeDefined();
    })
    it('takes numbers and adds them', () => {
      expect(add(2,2)).toBe(4);
      expect(add(2,3)).toBe(5);
      expect(add(3,3)).toBe(6);
      expect(add(3,3,3)).toBe(9);
      expect(add(3,3,3,3)).toBe(12);
    })
  });

  describe('Ave fn', () => {
    it('is defined', () => {
      expect(ave).toBeDefined();
    })
    it('takes numbers and return an average', () => {
      expect(ave(1,2)).toBe(1.5);
      expect(ave(2,3)).toBe(2.5);
    })
  });
  
});