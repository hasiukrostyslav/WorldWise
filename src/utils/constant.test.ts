import { describe, expect, it } from 'vitest';
import { EMAIL_REGEX } from './constant';

describe('#email validation should not be pass', () => {
  it('Start with .', () => {
    expect('.test@mail.com'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Start with -', () => {
    expect('-test@mail.com'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Start with _', () => {
    expect('_test@mail.com'.match(EMAIL_REGEX)).toBeNull();
  });
  it('End with .', () => {
    expect('test@mail.com.'.match(EMAIL_REGEX)).toBeNull();
  });
  it('End with -', () => {
    expect('test@mail.com-'.match(EMAIL_REGEX)).toBeNull();
  });
  it('End with _', () => {
    expect('test@mail.com_'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Double ..', () => {
    expect('test@mail..com'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Without @', () => {
    expect('test1mail.com_'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Two @', () => {
    expect('te@st@mail.com'.match(EMAIL_REGEX)).toBeNull();
  });
  it('Contain $, #, &, %', () => {
    expect('t$e#s&t%@mail.com'.match(EMAIL_REGEX)).toBeNull();
  });
});

describe('#email validation should  be pass', () => {
  it('Contain .', () => {
    expect('te.st@mail.com'.match(EMAIL_REGEX)).toBeTruthy();
  });
  it('Contain -', () => {
    expect('te-st@mail.com'.match(EMAIL_REGEX)).toBeTruthy();
  });
  it('Contain _', () => {
    expect('te_st@mail.com'.match(EMAIL_REGEX)).toBeTruthy();
  });
  it('Contain two .', () => {
    expect('te.st@ma.il.com'.match(EMAIL_REGEX)).toBeTruthy();
  });
  it('Contain ., -, _', () => {
    expect('t.e_s-t@mail.com'.match(EMAIL_REGEX)).toBeTruthy();
  });
});
