import { assert } from 'chai';
import sinon from 'sinon';
import { loadLocale, __RewireAPI__ as rew } from '../src/loader';
import fs from 'fs';

describe('loader', () => {
    it('should load locale from .mo file', () => {
        const spy = sinon.spy();
        const expected = JSON.parse(fs.readFileSync('tests/fixtures/test-loader.json'));
        rew.__Rewire__('addLocale', spy);
        loadLocale('en', 'tests/fixtures/test-loader.mo', false);
        assert(spy.calledWithExactly('en', expected, false));
        rew.__ResetDependency__('addLocale');
    });

    it('should load locale from .po file', () => {
        const spy = sinon.spy();
        const expected = JSON.parse(fs.readFileSync('tests/fixtures/test-result-po.json'));
        rew.__Rewire__('addLocale', spy);
        loadLocale('en', 'tests/fixtures/test-loader.po', false);
        assert(spy.calledWithExactly('en', expected, false));
        rew.__ResetDependency__('addLocale');
    });

    it('should load locale from object', () => {
        const spy = sinon.spy();
        const expected = { headers: 'test', translations: 'test' };
        rew.__Rewire__('addLocale', spy);
        loadLocale('en', { headers: 'test', translations: 'test' }, false);
        assert(spy.calledWithExactly('en', expected, false));
        rew.__ResetDependency__('addLocale');
    });
});

describe('loader with transform', () => {
    it('should load locale from .po file', () => {
        const spy = sinon.spy();
        const expected = JSON.parse(fs.readFileSync('tests/fixtures/test-result-po-before-transform.json'));
        rew.__Rewire__('addLocale', spy);
        loadLocale('en', 'tests/fixtures/test-loader-with-transform.po');
        assert(spy.calledWithExactly('en', expected, true));
        rew.__ResetDependency__('addLocale');
    });
});
