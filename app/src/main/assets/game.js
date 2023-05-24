var _SETTINGS = {
    'Language': {
        'Default': 'en'
    },
    'MoreGames': {
        'Enabled': true,
        'Link': '',
        'NewWindow': true
    }
};

! function(_0x126f85, _0x1b177c) {
    'object' == typeof module && 'object' == typeof module['exports'] ? module['exports'] = _0x126f85['document'] ? _0x1b177c(_0x126f85, !0x0) : function(_0x3244fa) {
        if (!_0x3244fa['document']) throw Error('jQuery requires a window with a document');
        return _0x1b177c(_0x3244fa);
    } : _0x1b177c(_0x126f85);
}('undefined' != typeof window ? window : this, function(_0x73c481, _0x1d619b) {
    function _0x13b804(_0x5b4ba4, _0x106bc4) {
        _0x106bc4 = _0x106bc4 || _0x175e87;
        var _0x5093e7 = _0x106bc4['createElement']('script');
        _0x5093e7['text'] = _0x5b4ba4;
        _0x106bc4['head']['appendChild'](_0x5093e7)['parentNode']['removeChild'](_0x5093e7);
    }

    function _0x36a835(_0x38c4de) {
        var _0x2a0ddd = !!_0x38c4de && 'length' in _0x38c4de && _0x38c4de['length'],
            _0x571a99 = _0x2139f7['type'](_0x38c4de);
        return 'function' !== _0x571a99 && !_0x2139f7['isWindow'](_0x38c4de) && ('array' === _0x571a99 || 0x0 === _0x2a0ddd || 'number' == typeof _0x2a0ddd && 0x0 < _0x2a0ddd && _0x2a0ddd - 0x1 in _0x38c4de);
    }

    function _0x443dae(_0x1a12e5, _0x260e81) {
        return _0x1a12e5['nodeName'] && _0x1a12e5['nodeName']['toLowerCase']() === _0x260e81['toLowerCase']();
    }

    function _0x11be12(_0x59809b, _0x5945f5, _0x59e46e) {
        return _0x2139f7['isFunction'](_0x5945f5) ? _0x2139f7['grep'](_0x59809b, function(_0x2c19c4, _0x323da9) {
            return !!_0x5945f5['call'](_0x2c19c4, _0x323da9, _0x2c19c4) !== _0x59e46e;
        }) : _0x5945f5['nodeType'] ? _0x2139f7['grep'](_0x59809b, function(_0x3830f2) {
            return _0x3830f2 === _0x5945f5 !== _0x59e46e;
        }) : 'string' != typeof _0x5945f5 ? _0x2139f7['grep'](_0x59809b, function(_0x16a12c) {
            return -0x1 < _0x497165['call'](_0x5945f5, _0x16a12c) !== _0x59e46e;
        }) : _0x2608eb['test'](_0x5945f5) ? _0x2139f7['filter'](_0x5945f5, _0x59809b, _0x59e46e) : (_0x5945f5 = _0x2139f7['filter'](_0x5945f5, _0x59809b), _0x2139f7['grep'](_0x59809b, function(_0x5567db) {
            return -0x1 < _0x497165['call'](_0x5945f5, _0x5567db) !== _0x59e46e && 0x1 === _0x5567db['nodeType'];
        }));
    }

    function _0xc8f7bc(_0x4af3a1, _0xde6acd) {
        for (;
            (_0x4af3a1 = _0x4af3a1[_0xde6acd]) && 0x1 !== _0x4af3a1['nodeType'];);
        return _0x4af3a1;
    }

    function _0x2d0e41(_0x467dd8) {
        return _0x467dd8;
    }

    function _0x401840(_0x1cc8b0) {
        throw _0x1cc8b0;
    }

    function _0x35a097(_0x156163, _0x5f2d92, _0x24e69b, _0x6338a) {
        var _0x44b199;
        try {
            _0x156163 && _0x2139f7['isFunction'](_0x44b199 = _0x156163['promise']) ? _0x44b199['call'](_0x156163)['done'](_0x5f2d92)['fail'](_0x24e69b) : _0x156163 && _0x2139f7['isFunction'](_0x44b199 = _0x156163['then']) ? _0x44b199['call'](_0x156163, _0x5f2d92, _0x24e69b) : _0x5f2d92['apply'](void 0x0, [_0x156163]['slice'](_0x6338a));
        } catch (_0x175adc) {
            _0x24e69b['apply'](void 0x0, [_0x175adc]);
        }
    }

    function _0xbf322f() {
        _0x175e87['removeEventListener']('DOMContentLoaded', _0xbf322f);
        _0x73c481['removeEventListener']('load', _0xbf322f);
        _0x2139f7['ready']();
    }

    function _0x1c03e0() {
        this['expando'] = _0x2139f7['expando'] + _0x1c03e0['uid']++;
    }

    function _0x3fa05f(_0x5ec972, _0x3763d4, _0xa4404c) {
        var _0x4449;
        if (void 0x0 === _0xa4404c && 0x1 === _0x5ec972['nodeType'])
            if (_0x4449 = 'data-' + _0x3763d4['replace'](_0x31191d, '-$&')['toLowerCase'](), _0xa4404c = _0x5ec972['getAttribute'](_0x4449), 'string' == typeof _0xa4404c) {
                try {
                    _0xa4404c = 'true' === _0xa4404c || 'false' !== _0xa4404c && ('null' === _0xa4404c ? null : _0xa4404c === +_0xa4404c + '' ? +_0xa4404c : _0x47f69d['test'](_0xa4404c) ? JSON['parse'](_0xa4404c) : _0xa4404c);
                } catch (_0x4dd0e4) {}
                _0x108b92['set'](_0x5ec972, _0x3763d4, _0xa4404c);
            } else _0xa4404c = void 0x0;
        return _0xa4404c;
    }

    function _0x3b83d0(_0x593a07, _0x1bfc03, _0x136e20, _0x5a7007) {
        var _0x56b705, _0x422599 = 0x1,
            _0x42615d = 0x14,
            _0x1f795c = _0x5a7007 ? function() {
                return _0x5a7007['cur']();
            } : function() {
                return _0x2139f7['css'](_0x593a07, _0x1bfc03, '');
            },
            _0x56581d = _0x1f795c(),
            _0x299efd = _0x136e20 && _0x136e20[0x3] || (_0x2139f7['cssNumber'][_0x1bfc03] ? '' : 'px'),
            _0x740749 = (_0x2139f7['cssNumber'][_0x1bfc03] || 'px' !== _0x299efd && +_0x56581d) && _0x277eb1['exec'](_0x2139f7['css'](_0x593a07, _0x1bfc03));
        if (_0x740749 && _0x740749[0x3] !== _0x299efd) {
            _0x299efd = _0x299efd || _0x740749[0x3];
            _0x136e20 = _0x136e20 || [];
            _0x740749 = +_0x56581d || 0x1;
            do _0x422599 = _0x422599 || '.5', _0x740749 /= _0x422599, _0x2139f7['style'](_0x593a07, _0x1bfc03, _0x740749 + _0x299efd); while (_0x422599 !== (_0x422599 = _0x1f795c() / _0x56581d) && 0x1 !== _0x422599 && --_0x42615d);
        }
        return _0x136e20 && (_0x740749 = +_0x740749 || +_0x56581d || 0x0, _0x56b705 = _0x136e20[0x1] ? _0x740749 + (_0x136e20[0x1] + 0x1) * _0x136e20[0x2] : +_0x136e20[0x2], _0x5a7007 && (_0x5a7007['unit'] = _0x299efd, _0x5a7007['start'] = _0x740749, _0x5a7007['end'] = _0x56b705)), _0x56b705;
    }

    function _0x34b295(_0x58ea38, _0x1d3dfa) {
        for (var _0x14b4fc, _0x1ae41d, _0x32b716 = [], _0x5c0944 = 0x0, _0x2bd266 = _0x58ea38['length']; _0x5c0944 < _0x2bd266; _0x5c0944++)
            if (_0x1ae41d = _0x58ea38[_0x5c0944], _0x1ae41d['style'])
                if (_0x14b4fc = _0x1ae41d['style']['display'], _0x1d3dfa) {
                    if ('none' === _0x14b4fc && (_0x32b716[_0x5c0944] = _0x2c5ff7['get'](_0x1ae41d, 'display') || null, _0x32b716[_0x5c0944] || (_0x1ae41d['style']['display'] = '')), '' === _0x1ae41d['style']['display'] && _0x41a80d(_0x1ae41d)) {
                        _0x14b4fc = _0x32b716;
                        var _0x48f5e5 = _0x5c0944,
                            _0x1e2a2e, _0x4316c9 = void 0x0;
                        _0x1e2a2e = _0x1ae41d['ownerDocument'];
                        var _0x5f4bcf = _0x1ae41d['nodeName'];
                        _0x1e2a2e = (_0x1ae41d = _0x518a87[_0x5f4bcf]) ? _0x1ae41d : (_0x4316c9 = _0x1e2a2e['body']['appendChild'](_0x1e2a2e['createElement'](_0x5f4bcf)), _0x1ae41d = _0x2139f7['css'](_0x4316c9, 'display'), _0x4316c9['parentNode']['removeChild'](_0x4316c9), 'none' === _0x1ae41d && (_0x1ae41d = 'block'), _0x518a87[_0x5f4bcf] = _0x1ae41d, _0x1ae41d);
                        _0x14b4fc[_0x48f5e5] = _0x1e2a2e;
                    }
                } else 'none' !== _0x14b4fc && (_0x32b716[_0x5c0944] = 'none', _0x2c5ff7['set'](_0x1ae41d, 'display', _0x14b4fc));
        for (_0x5c0944 = 0x0; _0x5c0944 < _0x2bd266; _0x5c0944++) null != _0x32b716[_0x5c0944] && (_0x58ea38[_0x5c0944]['style']['display'] = _0x32b716[_0x5c0944]);
        return _0x58ea38;
    }

    function _0x18f449(_0x2c0ebe, _0xf2140f) {
        var _0x2fdfad;
        return _0x2fdfad = 'undefined' != typeof _0x2c0ebe['getElementsByTagName'] ? _0x2c0ebe['getElementsByTagName'](_0xf2140f || '*') : 'undefined' != typeof _0x2c0ebe['querySelectorAll'] ? _0x2c0ebe['querySelectorAll'](_0xf2140f || '*') : [], void 0x0 === _0xf2140f || _0xf2140f && _0x443dae(_0x2c0ebe, _0xf2140f) ? _0x2139f7['merge']([_0x2c0ebe], _0x2fdfad) : _0x2fdfad;
    }

    function _0x20fbbc(_0x3b6ef2, _0x4b62f8) {
        for (var _0x4acf85 = 0x0, _0x56bf95 = _0x3b6ef2['length']; _0x4acf85 < _0x56bf95; _0x4acf85++) _0x2c5ff7['set'](_0x3b6ef2[_0x4acf85], 'globalEval', !_0x4b62f8 || _0x2c5ff7['get'](_0x4b62f8[_0x4acf85], 'globalEval'));
    }

    function _0x1ba964(_0x5d93d8, _0x209879, _0x46ce7a, _0x4a463c, _0xff69bb) {
        for (var _0x4b8217, _0x32d1d7, _0x2e202b, _0x20aead, _0x3a7be5 = _0x209879['createDocumentFragment'](), _0x367bc5 = [], _0x155d29 = 0x0, _0x100bbc = _0x5d93d8['length']; _0x155d29 < _0x100bbc; _0x155d29++)
            if (_0x4b8217 = _0x5d93d8[_0x155d29], _0x4b8217 || 0x0 === _0x4b8217)
                if ('object' === _0x2139f7['type'](_0x4b8217)) _0x2139f7['merge'](_0x367bc5, _0x4b8217['nodeType'] ? [_0x4b8217] : _0x4b8217);
                else if (_0x8e7318['test'](_0x4b8217)) {
            _0x32d1d7 = _0x32d1d7 || _0x3a7be5['appendChild'](_0x209879['createElement']('div'));
            _0x2e202b = (_0x5f0ecc['exec'](_0x4b8217) || ['', ''])[0x1]['toLowerCase']();
            _0x2e202b = _0x57e4f1[_0x2e202b] || _0x57e4f1['_default'];
            _0x32d1d7['innerHTML'] = _0x2e202b[0x1] + _0x2139f7['htmlPrefilter'](_0x4b8217) + _0x2e202b[0x2];
            for (_0x2e202b = _0x2e202b[0x0]; _0x2e202b--;) _0x32d1d7 = _0x32d1d7['lastChild'];
            _0x2139f7['merge'](_0x367bc5, _0x32d1d7['childNodes']);
            _0x32d1d7 = _0x3a7be5['firstChild'];
            _0x32d1d7['textContent'] = '';
        } else _0x367bc5['push'](_0x209879['createTextNode'](_0x4b8217));
        _0x3a7be5['textContent'] = '';
        for (_0x155d29 = 0x0; _0x4b8217 = _0x367bc5[_0x155d29++];)
            if (_0x4a463c && -0x1 < _0x2139f7['inArray'](_0x4b8217, _0x4a463c)) _0xff69bb && _0xff69bb['push'](_0x4b8217);
            else if (_0x20aead = _0x2139f7['contains'](_0x4b8217['ownerDocument'], _0x4b8217), _0x32d1d7 = _0x18f449(_0x3a7be5['appendChild'](_0x4b8217), 'script'), _0x20aead && _0x20fbbc(_0x32d1d7), _0x46ce7a)
            for (_0x2e202b = 0x0; _0x4b8217 = _0x32d1d7[_0x2e202b++];) _0x53fafb['test'](_0x4b8217['type'] || '') && _0x46ce7a['push'](_0x4b8217);
        return _0x3a7be5;
    }

    function _0x5319f1() {
        return !0x0;
    }

    function _0x5caf16() {
        return !0x1;
    }

    function _0x410285() {
        try {
            return _0x175e87['activeElement'];
        } catch (_0x432ec3) {}
    }

    function _0x4a9974(_0x231d1a, _0x511002, _0x508750, _0x308a7c, _0x354fc8, _0x1e4a9d) {
        var _0x33e83f, _0x275a36;
        if ('object' == typeof _0x511002) {
            'string' != typeof _0x508750 && (_0x308a7c = _0x308a7c || _0x508750, _0x508750 = void 0x0);
            for (_0x275a36 in _0x511002) _0x4a9974(_0x231d1a, _0x275a36, _0x508750, _0x308a7c, _0x511002[_0x275a36], _0x1e4a9d);
            return _0x231d1a;
        }
        if (null == _0x308a7c && null == _0x354fc8 ? (_0x354fc8 = _0x508750, _0x308a7c = _0x508750 = void 0x0) : null == _0x354fc8 && ('string' == typeof _0x508750 ? (_0x354fc8 = _0x308a7c, _0x308a7c = void 0x0) : (_0x354fc8 = _0x308a7c, _0x308a7c = _0x508750, _0x508750 = void 0x0)), !0x1 === _0x354fc8) _0x354fc8 = _0x5caf16;
        else if (!_0x354fc8) return _0x231d1a;
        return 0x1 === _0x1e4a9d && (_0x33e83f = _0x354fc8, _0x354fc8 = function(_0x4d497c) {
            return _0x2139f7()['off'](_0x4d497c), _0x33e83f['apply'](this, arguments);
        }, _0x354fc8['guid'] = _0x33e83f['guid'] || (_0x33e83f['guid'] = _0x2139f7['guid']++)), _0x231d1a['each'](function() {
            _0x2139f7['event']['add'](this, _0x511002, _0x354fc8, _0x308a7c, _0x508750);
        });
    }

    function _0x3c654e(_0x75fdec, _0x31a7d9) {
        return _0x443dae(_0x75fdec, 'table') && _0x443dae(0xb !== _0x31a7d9['nodeType'] ? _0x31a7d9 : _0x31a7d9['firstChild'], 'tr') ? _0x2139f7('>tbody', _0x75fdec)[0x0] || _0x75fdec : _0x75fdec;
    }

    function _0x3f4ae9(_0x587507) {
        return _0x587507['type'] = (null !== _0x587507['getAttribute']('type')) + '/' + _0x587507['type'], _0x587507;
    }

    function _0x198c0f(_0x151c2a) {
        var _0x16222a = _0x1ed651['exec'](_0x151c2a['type']);
        return _0x16222a ? _0x151c2a['type'] = _0x16222a[0x1] : _0x151c2a['removeAttribute']('type'), _0x151c2a;
    }

    function _0x16b4d2(_0x22870c, _0x4404cf) {
        var _0x15ec57, _0x832ff8, _0x298578, _0x1b86af, _0x4976d5, _0x19ad1b;
        if (0x1 === _0x4404cf['nodeType']) {
            if (_0x2c5ff7['hasData'](_0x22870c) && (_0x15ec57 = _0x2c5ff7['access'](_0x22870c), _0x832ff8 = _0x2c5ff7['set'](_0x4404cf, _0x15ec57), _0x19ad1b = _0x15ec57['events']))
                for (_0x298578 in (delete _0x832ff8['handle'], _0x832ff8['events'] = {}, _0x19ad1b)) {
                    _0x15ec57 = 0x0;
                    for (_0x832ff8 = _0x19ad1b[_0x298578]['length']; _0x15ec57 < _0x832ff8; _0x15ec57++) _0x2139f7['event']['add'](_0x4404cf, _0x298578, _0x19ad1b[_0x298578][_0x15ec57]);
                }
            _0x108b92['hasData'](_0x22870c) && (_0x1b86af = _0x108b92['access'](_0x22870c), _0x4976d5 = _0x2139f7['extend']({}, _0x1b86af), _0x108b92['set'](_0x4404cf, _0x4976d5));
        }
    }

    function _0x3c3d66(_0x2be1a3, _0x195197, _0x15a7b1, _0x387645) {
        _0x195197 = _0x5ef103['apply']([], _0x195197);
        var _0x53dbbc, _0x14c670, _0x4803ec, _0x1a126b, _0x17a75b = 0x0,
            _0x58edfe = _0x2be1a3['length'],
            _0x21b3bc = _0x58edfe - 0x1,
            _0x2adaf7 = _0x195197[0x0],
            _0x41c5fe = _0x2139f7['isFunction'](_0x2adaf7);
        if (_0x41c5fe || 0x1 < _0x58edfe && 'string' == typeof _0x2adaf7 && !_0x11c3a0['checkClone'] && _0x1e60bb['test'](_0x2adaf7)) return _0x2be1a3['each'](function(_0x3d9355) {
            var _0xd90474 = _0x2be1a3['eq'](_0x3d9355);
            _0x41c5fe && (_0x195197[0x0] = _0x2adaf7['call'](this, _0x3d9355, _0xd90474['html']()));
            _0x3c3d66(_0xd90474, _0x195197, _0x15a7b1, _0x387645);
        });
        if (_0x58edfe && (_0x53dbbc = _0x1ba964(_0x195197, _0x2be1a3[0x0]['ownerDocument'], !0x1, _0x2be1a3, _0x387645), _0x14c670 = _0x53dbbc['firstChild'], 0x1 === _0x53dbbc['childNodes']['length'] && (_0x53dbbc = _0x14c670), _0x14c670 || _0x387645)) {
            _0x14c670 = _0x2139f7['map'](_0x18f449(_0x53dbbc, 'script'), _0x3f4ae9);
            for (_0x4803ec = _0x14c670['length']; _0x17a75b < _0x58edfe; _0x17a75b++) _0x1a126b = _0x53dbbc, _0x17a75b !== _0x21b3bc && (_0x1a126b = _0x2139f7['clone'](_0x1a126b, !0x0, !0x0), _0x4803ec && _0x2139f7['merge'](_0x14c670, _0x18f449(_0x1a126b, 'script'))), _0x15a7b1['call'](_0x2be1a3[_0x17a75b], _0x1a126b, _0x17a75b);
            if (_0x4803ec) {
                _0x53dbbc = _0x14c670[_0x14c670['length'] - 0x1]['ownerDocument'];
                _0x2139f7['map'](_0x14c670, _0x198c0f);
                for (_0x17a75b = 0x0; _0x17a75b < _0x4803ec; _0x17a75b++) _0x1a126b = _0x14c670[_0x17a75b], _0x53fafb['test'](_0x1a126b['type'] || '') && !_0x2c5ff7['access'](_0x1a126b, 'globalEval') && _0x2139f7['contains'](_0x53dbbc, _0x1a126b) && (_0x1a126b['src'] ? _0x2139f7['_evalUrl'] && _0x2139f7['_evalUrl'](_0x1a126b['src']) : _0x13b804(_0x1a126b['textContent']['replace'](_0x26742f, ''), _0x53dbbc));
            }
        }
        return _0x2be1a3;
    }

    function _0x297409(_0x43e7b7, _0x2dcbea, _0x1070c9) {
        for (var _0xa63d3 = _0x2dcbea ? _0x2139f7['filter'](_0x2dcbea, _0x43e7b7) : _0x43e7b7, _0x1e40b1 = 0x0; null != (_0x2dcbea = _0xa63d3[_0x1e40b1]); _0x1e40b1++) _0x1070c9 || 0x1 !== _0x2dcbea['nodeType'] || _0x2139f7['cleanData'](_0x18f449(_0x2dcbea)), _0x2dcbea['parentNode'] && (_0x1070c9 && _0x2139f7['contains'](_0x2dcbea['ownerDocument'], _0x2dcbea) && _0x20fbbc(_0x18f449(_0x2dcbea, 'script')), _0x2dcbea['parentNode']['removeChild'](_0x2dcbea));
        return _0x43e7b7;
    }

    function _0x20837e(_0x538284, _0x2a17f8, _0x5d57bc) {
        var _0x449b8c, _0x50a276, _0x4baf57, _0x8d2286, _0x47c991 = _0x538284['style'];
        return _0x5d57bc = _0x5d57bc || _0x415977(_0x538284), _0x5d57bc && (_0x8d2286 = _0x5d57bc['getPropertyValue'](_0x2a17f8) || _0x5d57bc[_0x2a17f8], '' !== _0x8d2286 || _0x2139f7['contains'](_0x538284['ownerDocument'], _0x538284) || (_0x8d2286 = _0x2139f7['style'](_0x538284, _0x2a17f8)), !_0x11c3a0['pixelMarginRight']() && _0x37f1e9['test'](_0x8d2286) && _0x28b577['test'](_0x2a17f8) && (_0x449b8c = _0x47c991['width'], _0x50a276 = _0x47c991['minWidth'], _0x4baf57 = _0x47c991['maxWidth'], _0x47c991['minWidth'] = _0x47c991['maxWidth'] = _0x47c991['width'] = _0x8d2286, _0x8d2286 = _0x5d57bc['width'], _0x47c991['width'] = _0x449b8c, _0x47c991['minWidth'] = _0x50a276, _0x47c991['maxWidth'] = _0x4baf57)), void 0x0 !== _0x8d2286 ? _0x8d2286 + '' : _0x8d2286;
    }

    function _0x5242f6(_0x4eb572, _0x27e6e5) {
        return {
            'get': function() {
                return _0x4eb572() ? void delete this['get'] : (this['get'] = _0x27e6e5)['apply'](this, arguments);
            }
        };
    }

    function _0x399a6e(_0x3e0856) {
        var _0x1889f4 = _0x2139f7['cssProps'][_0x3e0856];
        if (!_0x1889f4) {
            var _0x1889f4 = _0x2139f7['cssProps'],
                _0x4e24d3;
            _0x3c1482: if (_0x4e24d3 = _0x3e0856, !(_0x4e24d3 in _0x44b449)) {
                for (var _0x2791f1 = _0x4e24d3[0x0]['toUpperCase']() + _0x4e24d3['slice'](0x1), _0x139693 = _0x4d24ea['length']; _0x139693--;)
                    if (_0x4e24d3 = _0x4d24ea[_0x139693] + _0x2791f1, _0x4e24d3 in _0x44b449) break _0x3c1482;
                _0x4e24d3 = void 0x0;
            }
            _0x1889f4 = _0x1889f4[_0x3e0856] = _0x4e24d3 || _0x3e0856;
        }
        return _0x1889f4;
    }

    function _0x22e993(_0x4f156d, _0x28ede7, _0x32b14e) {
        return (_0x4f156d = _0x277eb1['exec'](_0x28ede7)) ? Math['max'](0x0, _0x4f156d[0x2] - (_0x32b14e || 0x0)) + (_0x4f156d[0x3] || 'px') : _0x28ede7;
    }

    function _0x3f5eb7(_0xc885b6, _0x47e5b5, _0x2916c5, _0x2ad29c, _0x4b4751) {
        var _0x54c7b9 = 0x0;
        for (_0x47e5b5 = _0x2916c5 === (_0x2ad29c ? 'border' : 'content') ? 0x4 : 'width' === _0x47e5b5 ? 0x1 : 0x0; 0x4 > _0x47e5b5; _0x47e5b5 += 0x2) 'margin' === _0x2916c5 && (_0x54c7b9 += _0x2139f7['css'](_0xc885b6, _0x2916c5 + _0x1430a7[_0x47e5b5], !0x0, _0x4b4751)), _0x2ad29c ? ('content' === _0x2916c5 && (_0x54c7b9 -= _0x2139f7['css'](_0xc885b6, 'padding' + _0x1430a7[_0x47e5b5], !0x0, _0x4b4751)), 'margin' !== _0x2916c5 && (_0x54c7b9 -= _0x2139f7['css'](_0xc885b6, 'border' + _0x1430a7[_0x47e5b5] + 'Width', !0x0, _0x4b4751))) : (_0x54c7b9 += _0x2139f7['css'](_0xc885b6, 'padding' + _0x1430a7[_0x47e5b5], !0x0, _0x4b4751), 'padding' !== _0x2916c5 && (_0x54c7b9 += _0x2139f7['css'](_0xc885b6, 'border' + _0x1430a7[_0x47e5b5] + 'Width', !0x0, _0x4b4751)));
        return _0x54c7b9;
    }

    function _0x3f89d9(_0x381af7, _0x2fe8a6, _0x59320f) {
        var _0x300883, _0x53c957 = _0x415977(_0x381af7),
            _0x510089 = _0x20837e(_0x381af7, _0x2fe8a6, _0x53c957),
            _0x22b554 = 'border-box' === _0x2139f7['css'](_0x381af7, 'boxSizing', !0x1, _0x53c957);
        return _0x37f1e9['test'](_0x510089) ? _0x510089 : (_0x300883 = _0x22b554 && (_0x11c3a0['boxSizingReliable']() || _0x510089 === _0x381af7['style'][_0x2fe8a6]), 'auto' === _0x510089 && (_0x510089 = _0x381af7['offset' + _0x2fe8a6[0x0]['toUpperCase']() + _0x2fe8a6['slice'](0x1)]), _0x510089 = parseFloat(_0x510089) || 0x0, _0x510089 + _0x3f5eb7(_0x381af7, _0x2fe8a6, _0x59320f || (_0x22b554 ? 'border' : 'content'), _0x300883, _0x53c957) + 'px');
    }

    function _0x3540df(_0x42160c, _0x36890a, _0x359858, _0x2994a1, _0x1abfdb) {
        return new _0x3540df['prototype']['init'](_0x42160c, _0x36890a, _0x359858, _0x2994a1, _0x1abfdb);
    }

    function _0x508fd7() {
        _0xa6bac1 && (!0x1 === _0x175e87['hidden'] && _0x73c481['requestAnimationFrame'] ? _0x73c481['requestAnimationFrame'](_0x508fd7) : _0x73c481['setTimeout'](_0x508fd7, _0x2139f7['fx']['interval']), _0x2139f7['fx']['tick']());
    }

    function _0x2a4b22() {
        return _0x73c481['setTimeout'](function() {
            _0xefbd34 = void 0x0;
        }), _0xefbd34 = _0x2139f7['now']();
    }

    function _0x299c43(_0xadfdf2, _0x1d87be) {
        var _0x5b29e1, _0x31770a = 0x0,
            _0x40e6c5 = {
                'height': _0xadfdf2
            };
        for (_0x1d87be = _0x1d87be ? 0x1 : 0x0; 0x4 > _0x31770a; _0x31770a += 0x2 - _0x1d87be) _0x5b29e1 = _0x1430a7[_0x31770a], _0x40e6c5['margin' + _0x5b29e1] = _0x40e6c5['padding' + _0x5b29e1] = _0xadfdf2;
        return _0x1d87be && (_0x40e6c5['opacity'] = _0x40e6c5['width'] = _0xadfdf2), _0x40e6c5;
    }

    function _0x22fddc(_0x1c6530, _0x4f84e8, _0x6648db) {
        for (var _0x31e7c6, _0x243130 = (_0x131ec1['tweeners'][_0x4f84e8] || [])['concat'](_0x131ec1['tweeners']['*']), _0x244442 = 0x0, _0x449dc8 = _0x243130['length']; _0x244442 < _0x449dc8; _0x244442++)
            if (_0x31e7c6 = _0x243130[_0x244442]['call'](_0x6648db, _0x4f84e8, _0x1c6530)) return _0x31e7c6;
    }

    function _0x131ec1(_0x3ba5d0, _0x3f5b26, _0x12119b) {
        var _0x44698f, _0x5fae28, _0x5ba648 = 0x0,
            _0x228755 = _0x131ec1['prefilters']['length'],
            _0x42e0a4 = _0x2139f7['Deferred']()['always'](function() {
                delete _0xef9f8f['elem'];
            }),
            _0xef9f8f = function() {
                if (_0x5fae28) return !0x1;
                for (var _0x711f07 = _0xefbd34 || _0x2a4b22(), _0x711f07 = Math['max'](0x0, _0x3e37e5['startTime'] + _0x3e37e5['duration'] - _0x711f07), _0xcde526 = 0x1 - (_0x711f07 / _0x3e37e5['duration'] || 0x0), _0x580d28 = 0x0, _0x18ef3e = _0x3e37e5['tweens']['length']; _0x580d28 < _0x18ef3e; _0x580d28++) _0x3e37e5['tweens'][_0x580d28]['run'](_0xcde526);
                return _0x42e0a4['notifyWith'](_0x3ba5d0, [_0x3e37e5, _0xcde526, _0x711f07]), 0x1 > _0xcde526 && _0x18ef3e ? _0x711f07 : (_0x18ef3e || _0x42e0a4['notifyWith'](_0x3ba5d0, [_0x3e37e5, 0x1, 0x0]), _0x42e0a4['resolveWith'](_0x3ba5d0, [_0x3e37e5]), !0x1);
            },
            _0x3e37e5 = _0x42e0a4['promise']({
                'elem': _0x3ba5d0,
                'props': _0x2139f7['extend']({}, _0x3f5b26),
                'opts': _0x2139f7['extend'](!0x0, {
                    'specialEasing': {},
                    'easing': _0x2139f7['easing']['_default']
                }, _0x12119b),
                'originalProperties': _0x3f5b26,
                'originalOptions': _0x12119b,
                'startTime': _0xefbd34 || _0x2a4b22(),
                'duration': _0x12119b['duration'],
                'tweens': [],
                'createTween': function(_0x4865b1, _0xe195ca) {
                    var _0x4a7417 = _0x2139f7['Tween'](_0x3ba5d0, _0x3e37e5['opts'], _0x4865b1, _0xe195ca, _0x3e37e5['opts']['specialEasing'][_0x4865b1] || _0x3e37e5['opts']['easing']);
                    return _0x3e37e5['tweens']['push'](_0x4a7417), _0x4a7417;
                },
                'stop': function(_0x52e048) {
                    var _0x187a26 = 0x0,
                        _0x22eb26 = _0x52e048 ? _0x3e37e5['tweens']['length'] : 0x0;
                    if (_0x5fae28) return this;
                    for (_0x5fae28 = !0x0; _0x187a26 < _0x22eb26; _0x187a26++) _0x3e37e5['tweens'][_0x187a26]['run'](0x1);
                    return _0x52e048 ? (_0x42e0a4['notifyWith'](_0x3ba5d0, [_0x3e37e5, 0x1, 0x0]), _0x42e0a4['resolveWith'](_0x3ba5d0, [_0x3e37e5, _0x52e048])) : _0x42e0a4['rejectWith'](_0x3ba5d0, [_0x3e37e5, _0x52e048]), this;
                }
            });
        _0x3f5b26 = _0x3e37e5['props'];
        _0x12119b = _0x3e37e5['opts']['specialEasing'];
        var _0x5727d3, _0x126e6d, _0x39f4ea, _0x4ad119;
        for (_0x44698f in _0x3f5b26)
            if (_0x5727d3 = _0x2139f7['camelCase'](_0x44698f), _0x126e6d = _0x12119b[_0x5727d3], _0x39f4ea = _0x3f5b26[_0x44698f], Array['isArray'](_0x39f4ea) && (_0x126e6d = _0x39f4ea[0x1], _0x39f4ea = _0x3f5b26[_0x44698f] = _0x39f4ea[0x0]), _0x44698f !== _0x5727d3 && (_0x3f5b26[_0x5727d3] = _0x39f4ea, delete _0x3f5b26[_0x44698f]), _0x4ad119 = _0x2139f7['cssHooks'][_0x5727d3], _0x4ad119 && 'expand' in _0x4ad119)
                for (_0x44698f in (_0x39f4ea = _0x4ad119['expand'](_0x39f4ea), delete _0x3f5b26[_0x5727d3], _0x39f4ea)) _0x44698f in _0x3f5b26 || (_0x3f5b26[_0x44698f] = _0x39f4ea[_0x44698f], _0x12119b[_0x44698f] = _0x126e6d);
            else _0x12119b[_0x5727d3] = _0x126e6d;
        for (; _0x5ba648 < _0x228755; _0x5ba648++)
            if (_0x44698f = _0x131ec1['prefilters'][_0x5ba648]['call'](_0x3e37e5, _0x3ba5d0, _0x3f5b26, _0x3e37e5['opts'])) return _0x2139f7['isFunction'](_0x44698f['stop']) && (_0x2139f7['_queueHooks'](_0x3e37e5['elem'], _0x3e37e5['opts']['queue'])['stop'] = _0x2139f7['proxy'](_0x44698f['stop'], _0x44698f)), _0x44698f;
        return _0x2139f7['map'](_0x3f5b26, _0x22fddc, _0x3e37e5), _0x2139f7['isFunction'](_0x3e37e5['opts']['start']) && _0x3e37e5['opts']['start']['call'](_0x3ba5d0, _0x3e37e5), _0x3e37e5['progress'](_0x3e37e5['opts']['progress'])['done'](_0x3e37e5['opts']['done'], _0x3e37e5['opts']['complete'])['fail'](_0x3e37e5['opts']['fail'])['always'](_0x3e37e5['opts']['always']), _0x2139f7['fx']['timer'](_0x2139f7['extend'](_0xef9f8f, {
            'elem': _0x3ba5d0,
            'anim': _0x3e37e5,
            'queue': _0x3e37e5['opts']['queue']
        })), _0x3e37e5;
    }

    function _0x5f58a0(_0x500773) {
        return (_0x500773['match'](_0x18f593) || [])['join'](' ');
    }

    function _0x2e68fd(_0x423805) {
        return _0x423805['getAttribute'] && _0x423805['getAttribute']('class') || '';
    }

    function _0x1a9296(_0x5f1747, _0x567b67, _0x2fd364, _0x3ce199) {
        var _0x3f1206;
        if (Array['isArray'](_0x567b67)) _0x2139f7['each'](_0x567b67, function(_0x56d8cf, _0x5bbc3e) {
            _0x2fd364 || _0x1d60cd['test'](_0x5f1747) ? _0x3ce199(_0x5f1747, _0x5bbc3e) : _0x1a9296(_0x5f1747 + '[' + ('object' == typeof _0x5bbc3e && null != _0x5bbc3e ? _0x56d8cf : '') + ']', _0x5bbc3e, _0x2fd364, _0x3ce199);
        });
        else if (_0x2fd364 || 'object' !== _0x2139f7['type'](_0x567b67)) _0x3ce199(_0x5f1747, _0x567b67);
        else
            for (_0x3f1206 in _0x567b67) _0x1a9296(_0x5f1747 + '[' + _0x3f1206 + ']', _0x567b67[_0x3f1206], _0x2fd364, _0x3ce199);
    }

    function _0x37c251(_0x38d324) {
        return function(_0x3e153a, _0x574b86) {
            'string' != typeof _0x3e153a && (_0x574b86 = _0x3e153a, _0x3e153a = '*');
            var _0xabc68c, _0x84d537 = 0x0,
                _0x59b58a = _0x3e153a['toLowerCase']()['match'](_0x18f593) || [];
            if (_0x2139f7['isFunction'](_0x574b86))
                for (; _0xabc68c = _0x59b58a[_0x84d537++];) '+' === _0xabc68c[0x0] ? (_0xabc68c = _0xabc68c['slice'](0x1) || '*', (_0x38d324[_0xabc68c] = _0x38d324[_0xabc68c] || [])['unshift'](_0x574b86)) : (_0x38d324[_0xabc68c] = _0x38d324[_0xabc68c] || [])['push'](_0x574b86);
        };
    }

    function _0x3fc78f(_0x293546, _0x383aa1, _0x5368f6, _0x13fd7b) {
        function _0xdd5939(_0x48f1e9) {
            var _0x597036;
            return _0x42f35a[_0x48f1e9] = !0x0, _0x2139f7['each'](_0x293546[_0x48f1e9] || [], function(_0x21322f, _0x45cc08) {
                var _0x22bece = _0x45cc08(_0x383aa1, _0x5368f6, _0x13fd7b);
                return 'string' != typeof _0x22bece || _0x437919 || _0x42f35a[_0x22bece] ? _0x437919 ? !(_0x597036 = _0x22bece) : void 0x0 : (_0x383aa1['dataTypes']['unshift'](_0x22bece), _0xdd5939(_0x22bece), !0x1);
            }), _0x597036;
        }
        var _0x42f35a = {},
            _0x437919 = _0x293546 === _0x2ab5ff;
        return _0xdd5939(_0x383aa1['dataTypes'][0x0]) || !_0x42f35a['*'] && _0xdd5939('*');
    }

    function _0x4b6b0e(_0xb47481, _0x1d8454) {
        var _0x426e78, _0x44902d, _0x1e8734 = _0x2139f7['ajaxSettings']['flatOptions'] || {};
        for (_0x426e78 in _0x1d8454) void 0x0 !== _0x1d8454[_0x426e78] && ((_0x1e8734[_0x426e78] ? _0xb47481 : _0x44902d || (_0x44902d = {}))[_0x426e78] = _0x1d8454[_0x426e78]);
        return _0x44902d && _0x2139f7['extend'](!0x0, _0xb47481, _0x44902d), _0xb47481;
    }
    var _0x3b12f3 = [],
        _0x175e87 = _0x73c481['document'],
        _0x151db6 = Object['getPrototypeOf'],
        _0x3a69aa = _0x3b12f3['slice'],
        _0x5ef103 = _0x3b12f3['concat'],
        _0x1551e8 = _0x3b12f3['push'],
        _0x497165 = _0x3b12f3['indexOf'],
        _0xe13020 = {},
        _0x2b4b42 = _0xe13020['toString'],
        _0x45ab80 = _0xe13020['hasOwnProperty'],
        _0x21a930 = _0x45ab80['toString'],
        _0x33adfc = _0x21a930['call'](Object),
        _0x11c3a0 = {},
        _0x2139f7 = function(_0x52682d, _0x50ea21) {
            return new _0x2139f7['fn']['init'](_0x52682d, _0x50ea21);
        },
        _0x35f0b6 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _0x5e2670 = /^-ms-/,
        _0x51e601 = /-([a-z])/g,
        _0x53fdd1 = function(_0x48b5ff, _0x125d83) {
            return _0x125d83['toUpperCase']();
        };
    _0x2139f7['fn'] = _0x2139f7['prototype'] = {
        'jquery': '3.2.1',
        'constructor': _0x2139f7,
        'length': 0x0,
        'toArray': function() {
            return _0x3a69aa['call'](this);
        },
        'get': function(_0x4c6fe8) {
            return null == _0x4c6fe8 ? _0x3a69aa['call'](this) : 0x0 > _0x4c6fe8 ? this[_0x4c6fe8 + this['length']] : this[_0x4c6fe8];
        },
        'pushStack': function(_0x4cb243) {
            _0x4cb243 = _0x2139f7['merge'](this['constructor'](), _0x4cb243);
            return _0x4cb243['prevObject'] = this, _0x4cb243;
        },
        'each': function(_0xf43461) {
            return _0x2139f7['each'](this, _0xf43461);
        },
        'map': function(_0x2b6274) {
            return this['pushStack'](_0x2139f7['map'](this, function(_0x5c1fcc, _0x4e01b7) {
                return _0x2b6274['call'](_0x5c1fcc, _0x4e01b7, _0x5c1fcc);
            }));
        },
        'slice': function() {
            return this['pushStack'](_0x3a69aa['apply'](this, arguments));
        },
        'first': function() {
            return this['eq'](0x0);
        },
        'last': function() {
            return this['eq'](-0x1);
        },
        'eq': function(_0x23c9da) {
            var _0x14f78f = this['length'];
            _0x23c9da = +_0x23c9da + (0x0 > _0x23c9da ? _0x14f78f : 0x0);
            return this['pushStack'](0x0 <= _0x23c9da && _0x23c9da < _0x14f78f ? [this[_0x23c9da]] : []);
        },
        'end': function() {
            return this['prevObject'] || this['constructor']();
        },
        'push': _0x1551e8,
        'sort': _0x3b12f3['sort'],
        'splice': _0x3b12f3['splice']
    };
    _0x2139f7['extend'] = _0x2139f7['fn']['extend'] = function() {
        var _0x47c75c, _0x5bfd79, _0x5e3eb4, _0x1bcc4b, _0x2ad178, _0x43184d, _0x14e369 = arguments[0x0] || {},
            _0x606b72 = 0x1,
            _0x23ab2b = arguments['length'],
            _0x251325 = !0x1;
        'boolean' == typeof _0x14e369 && (_0x251325 = _0x14e369, _0x14e369 = arguments[_0x606b72] || {}, _0x606b72++);
        'object' == typeof _0x14e369 || _0x2139f7['isFunction'](_0x14e369) || (_0x14e369 = {});
        for (_0x606b72 === _0x23ab2b && (_0x14e369 = this, _0x606b72--); _0x606b72 < _0x23ab2b; _0x606b72++)
            if (null != (_0x47c75c = arguments[_0x606b72]))
                for (_0x5bfd79 in _0x47c75c) _0x5e3eb4 = _0x14e369[_0x5bfd79], _0x1bcc4b = _0x47c75c[_0x5bfd79], _0x14e369 !== _0x1bcc4b && (_0x251325 && _0x1bcc4b && (_0x2139f7['isPlainObject'](_0x1bcc4b) || (_0x2ad178 = Array['isArray'](_0x1bcc4b))) ? (_0x2ad178 ? (_0x2ad178 = !0x1, _0x43184d = _0x5e3eb4 && Array['isArray'](_0x5e3eb4) ? _0x5e3eb4 : []) : _0x43184d = _0x5e3eb4 && _0x2139f7['isPlainObject'](_0x5e3eb4) ? _0x5e3eb4 : {}, _0x14e369[_0x5bfd79] = _0x2139f7['extend'](_0x251325, _0x43184d, _0x1bcc4b)) : void 0x0 !== _0x1bcc4b && (_0x14e369[_0x5bfd79] = _0x1bcc4b));
        return _0x14e369;
    };
    _0x2139f7['extend']({
        'expando': 'jQuery' + ('3.2.1' + Math['random']())['replace'](/\D/g, ''),
        'isReady': !0x0,
        'error': function(_0x5ad6ae) {
            throw Error(_0x5ad6ae);
        },
        'noop': function() {},
        'isFunction': function(_0x174000) {
            return 'function' === _0x2139f7['type'](_0x174000);
        },
        'isWindow': function(_0x25f11f) {
            return null != _0x25f11f && _0x25f11f === _0x25f11f['window'];
        },
        'isNumeric': function(_0x597a81) {
            var _0x404dae = _0x2139f7['type'](_0x597a81);
            return ('number' === _0x404dae || 'string' === _0x404dae) && !isNaN(_0x597a81 - parseFloat(_0x597a81));
        },
        'isPlainObject': function(_0x59f755) {
            var _0x36ab10, _0x2088c7;
            return !(!_0x59f755 || '[object Object]' !== _0x2b4b42['call'](_0x59f755)) && (!(_0x36ab10 = _0x151db6(_0x59f755)) || (_0x2088c7 = _0x45ab80['call'](_0x36ab10, 'constructor') && _0x36ab10['constructor'], 'function' == typeof _0x2088c7 && _0x21a930['call'](_0x2088c7) === _0x33adfc));
        },
        'isEmptyObject': function(_0x16188b) {
            for (var _0x58e5ce in _0x16188b) return !0x1;
            return !0x0;
        },
        'type': function(_0xa4c1bd) {
            return null == _0xa4c1bd ? _0xa4c1bd + '' : 'object' == typeof _0xa4c1bd || 'function' == typeof _0xa4c1bd ? _0xe13020[_0x2b4b42['call'](_0xa4c1bd)] || 'object' : typeof _0xa4c1bd;
        },
        'globalEval': function(_0x426b32) {
            _0x13b804(_0x426b32);
        },
        'camelCase': function(_0x571c1b) {
            return _0x571c1b['replace'](_0x5e2670, 'ms-')['replace'](_0x51e601, _0x53fdd1);
        },
        'each': function(_0xa74345, _0x35c987) {
            var _0x5f3055, _0x35786f = 0x0;
            if (_0x36a835(_0xa74345))
                for (_0x5f3055 = _0xa74345['length']; _0x35786f < _0x5f3055 && !0x1 !== _0x35c987['call'](_0xa74345[_0x35786f], _0x35786f, _0xa74345[_0x35786f]); _0x35786f++);
            else
                for (_0x35786f in _0xa74345)
                    if (!0x1 === _0x35c987['call'](_0xa74345[_0x35786f], _0x35786f, _0xa74345[_0x35786f])) break;
            return _0xa74345;
        },
        'trim': function(_0x3e1f43) {
            return null == _0x3e1f43 ? '' : (_0x3e1f43 + '')['replace'](_0x35f0b6, '');
        },
        'makeArray': function(_0x25e57e, _0x55eb0b) {
            var _0x49bae1 = _0x55eb0b || [];
            return null != _0x25e57e && (_0x36a835(Object(_0x25e57e)) ? _0x2139f7['merge'](_0x49bae1, 'string' == typeof _0x25e57e ? [_0x25e57e] : _0x25e57e) : _0x1551e8['call'](_0x49bae1, _0x25e57e)), _0x49bae1;
        },
        'inArray': function(_0x3ba589, _0x2fe8a5, _0x2a4cfa) {
            return null == _0x2fe8a5 ? -0x1 : _0x497165['call'](_0x2fe8a5, _0x3ba589, _0x2a4cfa);
        },
        'merge': function(_0x1a745e, _0x15f3ab) {
            for (var _0x17c815 = +_0x15f3ab['length'], _0x229b5e = 0x0, _0x14c81b = _0x1a745e['length']; _0x229b5e < _0x17c815; _0x229b5e++) _0x1a745e[_0x14c81b++] = _0x15f3ab[_0x229b5e];
            return _0x1a745e['length'] = _0x14c81b, _0x1a745e;
        },
        'grep': function(_0x3c695a, _0x3ec14d, _0x23ab40) {
            for (var _0x2b5294 = [], _0x37b5e1 = 0x0, _0x32cb15 = _0x3c695a['length'], _0x2f0102 = !_0x23ab40; _0x37b5e1 < _0x32cb15; _0x37b5e1++) _0x23ab40 = !_0x3ec14d(_0x3c695a[_0x37b5e1], _0x37b5e1), _0x23ab40 !== _0x2f0102 && _0x2b5294['push'](_0x3c695a[_0x37b5e1]);
            return _0x2b5294;
        },
        'map': function(_0x4e0b55, _0x17e83b, _0x5d883d) {
            var _0x164c4e, _0x3873c8, _0x490c62 = 0x0,
                _0x26a2fc = [];
            if (_0x36a835(_0x4e0b55))
                for (_0x164c4e = _0x4e0b55['length']; _0x490c62 < _0x164c4e; _0x490c62++) _0x3873c8 = _0x17e83b(_0x4e0b55[_0x490c62], _0x490c62, _0x5d883d), null != _0x3873c8 && _0x26a2fc['push'](_0x3873c8);
            else
                for (_0x490c62 in _0x4e0b55) _0x3873c8 = _0x17e83b(_0x4e0b55[_0x490c62], _0x490c62, _0x5d883d), null != _0x3873c8 && _0x26a2fc['push'](_0x3873c8);
            return _0x5ef103['apply']([], _0x26a2fc);
        },
        'guid': 0x1,
        'proxy': function(_0x34135b, _0x211f33) {
            var _0x36b206, _0x5855c0, _0x592ae5;
            if ('string' == typeof _0x211f33 && (_0x36b206 = _0x34135b[_0x211f33], _0x211f33 = _0x34135b, _0x34135b = _0x36b206), _0x2139f7['isFunction'](_0x34135b)) return _0x5855c0 = _0x3a69aa['call'](arguments, 0x2), _0x592ae5 = function() {
                return _0x34135b['apply'](_0x211f33 || this, _0x5855c0['concat'](_0x3a69aa['call'](arguments)));
            }, _0x592ae5['guid'] = _0x34135b['guid'] = _0x34135b['guid'] || _0x2139f7['guid']++, _0x592ae5;
        },
        'now': Date['now'],
        'support': _0x11c3a0
    });
    'function' == typeof Symbol && (_0x2139f7['fn'][Symbol['iterator']] = _0x3b12f3[Symbol['iterator']]);
    _0x2139f7['each']('Boolean Number String Function Array Date RegExp Object Error Symbol' ['split'](' '), function(_0x577467, _0x8cebf3) {
        _0xe13020['[object ' + _0x8cebf3 + ']'] = _0x8cebf3['toLowerCase']();
    });
    var _0x4cc3b6, _0x181ae0 = _0x73c481,
        _0x227aa5 = function(_0x51674b, _0x1a8e18, _0x3ef8a2, _0x31165b) {
            var _0x4cb0c2, _0x137497, _0x20a01d, _0x5e9283, _0x40e1a3, _0x5d4175 = _0x1a8e18 && _0x1a8e18['ownerDocument'],
                _0x45a26c = _0x1a8e18 ? _0x1a8e18['nodeType'] : 0x9;
            if (_0x3ef8a2 = _0x3ef8a2 || [], 'string' != typeof _0x51674b || !_0x51674b || 0x1 !== _0x45a26c && 0x9 !== _0x45a26c && 0xb !== _0x45a26c) return _0x3ef8a2;
            if (!_0x31165b && ((_0x1a8e18 ? _0x1a8e18['ownerDocument'] || _0x1a8e18 : _0x47458b) !== _0x425c27 && _0xe41a91(_0x1a8e18), _0x1a8e18 = _0x1a8e18 || _0x425c27, _0xd3b329)) {
                if (0xb !== _0x45a26c && (_0x5e9283 = _0x4d078f['exec'](_0x51674b)))
                    if (_0x4cb0c2 = _0x5e9283[0x1])
                        if (0x9 === _0x45a26c) {
                            if (!(_0x137497 = _0x1a8e18['getElementById'](_0x4cb0c2))) return _0x3ef8a2;
                            if (_0x137497['id'] === _0x4cb0c2) return _0x3ef8a2['push'](_0x137497), _0x3ef8a2;
                        } else {
                            if (_0x5d4175 && (_0x137497 = _0x5d4175['getElementById'](_0x4cb0c2)) && _0x5288fc(_0x1a8e18, _0x137497) && _0x137497['id'] === _0x4cb0c2) return _0x3ef8a2['push'](_0x137497), _0x3ef8a2;
                        }
                else {
                    if (_0x5e9283[0x2]) return _0x3ac621['apply'](_0x3ef8a2, _0x1a8e18['getElementsByTagName'](_0x51674b)), _0x3ef8a2;
                    if ((_0x4cb0c2 = _0x5e9283[0x3]) && _0x23f74e['getElementsByClassName'] && _0x1a8e18['getElementsByClassName']) return _0x3ac621['apply'](_0x3ef8a2, _0x1a8e18['getElementsByClassName'](_0x4cb0c2)), _0x3ef8a2;
                }
                if (_0x23f74e['qsa'] && !_0x38c152[_0x51674b + ' '] && (!_0x4dba72 || !_0x4dba72['test'](_0x51674b))) {
                    if (0x1 !== _0x45a26c) _0x5d4175 = _0x1a8e18, _0x40e1a3 = _0x51674b;
                    else if ('object' !== _0x1a8e18['nodeName']['toLowerCase']()) {
                        (_0x20a01d = _0x1a8e18['getAttribute']('id')) ? _0x20a01d = _0x20a01d['replace'](_0x4918bd, _0x22092d): _0x1a8e18['setAttribute']('id', _0x20a01d = _0x187ba2);
                        _0x137497 = _0x475749(_0x51674b);
                        for (_0x4cb0c2 = _0x137497['length']; _0x4cb0c2--;) _0x137497[_0x4cb0c2] = '#' + _0x20a01d + ' ' + _0x5e4ddd(_0x137497[_0x4cb0c2]);
                        _0x40e1a3 = _0x137497['join'](',');
                        _0x5d4175 = _0x183831['test'](_0x51674b) && _0x22872f(_0x1a8e18['parentNode']) || _0x1a8e18;
                    }
                    if (_0x40e1a3) try {
                        return _0x3ac621['apply'](_0x3ef8a2, _0x5d4175['querySelectorAll'](_0x40e1a3)), _0x3ef8a2;
                    } catch (_0x7658ee) {} finally {
                        _0x20a01d === _0x187ba2 && _0x1a8e18['removeAttribute']('id');
                    }
                }
            }
            return _0x1bc3f0(_0x51674b['replace'](_0x47cd5c, '$1'), _0x1a8e18, _0x3ef8a2, _0x31165b);
        },
        _0x4b178f = function() {
            function _0x2b0940(_0x2c8c83, _0xde54ca) {
                return _0x398aef['push'](_0x2c8c83 + ' ') > _0x398be['cacheLength'] && delete _0x2b0940[_0x398aef['shift']()], _0x2b0940[_0x2c8c83 + ' '] = _0xde54ca;
            }
            var _0x398aef = [];
            return _0x2b0940;
        },
        _0x59a74f = function(_0x4ca119) {
            return _0x4ca119[_0x187ba2] = !0x0, _0x4ca119;
        },
        _0x3597a5 = function(_0x41072f) {
            var _0x2c4f2b = _0x425c27['createElement']('fieldset');
            try {
                return !!_0x41072f(_0x2c4f2b);
            } catch (_0x3ad1b4) {
                return !0x1;
            } finally {
                _0x2c4f2b['parentNode'] && _0x2c4f2b['parentNode']['removeChild'](_0x2c4f2b);
            }
        },
        _0x848dd2 = function(_0x1c816f, _0x5e8cb1) {
            for (var _0x5364a7 = _0x1c816f['split']('|'), _0x5d70b5 = _0x5364a7['length']; _0x5d70b5--;) _0x398be['attrHandle'][_0x5364a7[_0x5d70b5]] = _0x5e8cb1;
        },
        _0x11729f = function(_0xdd19fa, _0x5c0e0b) {
            var _0xf64aa3 = _0x5c0e0b && _0xdd19fa,
                _0x20c0a3 = _0xf64aa3 && 0x1 === _0xdd19fa['nodeType'] && 0x1 === _0x5c0e0b['nodeType'] && _0xdd19fa['sourceIndex'] - _0x5c0e0b['sourceIndex'];
            if (_0x20c0a3) return _0x20c0a3;
            if (_0xf64aa3)
                for (; _0xf64aa3 = _0xf64aa3['nextSibling'];)
                    if (_0xf64aa3 === _0x5c0e0b) return -0x1;
            return _0xdd19fa ? 0x1 : -0x1;
        },
        _0x434791 = function(_0x2477c6) {
            return function(_0x18bd3f) {
                return 'input' === _0x18bd3f['nodeName']['toLowerCase']() && _0x18bd3f['type'] === _0x2477c6;
            };
        },
        _0x5687fe = function(_0x3d13dc) {
            return function(_0x36969e) {
                var _0x5dc67a = _0x36969e['nodeName']['toLowerCase']();
                return ('input' === _0x5dc67a || 'button' === _0x5dc67a) && _0x36969e['type'] === _0x3d13dc;
            };
        },
        _0x16caf1 = function(_0x4e50cb) {
            return function(_0x12f4c0) {
                return 'form' in _0x12f4c0 ? _0x12f4c0['parentNode'] && !0x1 === _0x12f4c0['disabled'] ? 'label' in _0x12f4c0 ? 'label' in _0x12f4c0['parentNode'] ? _0x12f4c0['parentNode']['disabled'] === _0x4e50cb : _0x12f4c0['disabled'] === _0x4e50cb : _0x12f4c0['isDisabled'] === _0x4e50cb || _0x12f4c0['isDisabled'] !== !_0x4e50cb && _0x37c4d8(_0x12f4c0) === _0x4e50cb : _0x12f4c0['disabled'] === _0x4e50cb : 'label' in _0x12f4c0 && _0x12f4c0['disabled'] === _0x4e50cb;
            };
        },
        _0x523824 = function(_0x32751d) {
            return _0x59a74f(function(_0x317968) {
                return _0x317968 = +_0x317968, _0x59a74f(function(_0x5747c8, _0x391132) {
                    for (var _0x525f93, _0x1a03f3 = _0x32751d([], _0x5747c8['length'], _0x317968), _0xea563e = _0x1a03f3['length']; _0xea563e--;) _0x5747c8[_0x525f93 = _0x1a03f3[_0xea563e]] && (_0x5747c8[_0x525f93] = !(_0x391132[_0x525f93] = _0x5747c8[_0x525f93]));
                });
            });
        },
        _0x22872f = function(_0xe9eadd) {
            return _0xe9eadd && 'undefined' != typeof _0xe9eadd['getElementsByTagName'] && _0xe9eadd;
        },
        _0x159f6e = function() {},
        _0x5e4ddd = function(_0x5aed4c) {
            for (var _0x13a732 = 0x0, _0x4f9f9f = _0x5aed4c['length'], _0x503474 = ''; _0x13a732 < _0x4f9f9f; _0x13a732++) _0x503474 += _0x5aed4c[_0x13a732]['value'];
            return _0x503474;
        },
        _0x63268b = function(_0x130512, _0x433d97, _0x25fecf) {
            var _0x27be50 = _0x433d97['dir'],
                _0x82da22 = _0x433d97['next'],
                _0x1ed1aa = _0x82da22 || _0x27be50,
                _0x1fb87e = _0x25fecf && 'parentNode' === _0x1ed1aa,
                _0x40b9a8 = _0x8eb67++;
            return _0x433d97['first'] ? function(_0x50dc4b, _0x1f9200, _0x35cfd7) {
                for (; _0x50dc4b = _0x50dc4b[_0x27be50];)
                    if (0x1 === _0x50dc4b['nodeType'] || _0x1fb87e) return _0x130512(_0x50dc4b, _0x1f9200, _0x35cfd7);
                return !0x1;
            } : function(_0x55c1df, _0x3c1deb, _0x375be4) {
                var _0x2864ca, _0x1f7589, _0x18cc05, _0x3ef5f8 = [_0x212e5e, _0x40b9a8];
                if (_0x375be4)
                    for (; _0x55c1df = _0x55c1df[_0x27be50];) {
                        if ((0x1 === _0x55c1df['nodeType'] || _0x1fb87e) && _0x130512(_0x55c1df, _0x3c1deb, _0x375be4)) return !0x0;
                    } else
                        for (; _0x55c1df = _0x55c1df[_0x27be50];)
                            if (0x1 === _0x55c1df['nodeType'] || _0x1fb87e)
                                if (_0x18cc05 = _0x55c1df[_0x187ba2] || (_0x55c1df[_0x187ba2] = {}), _0x1f7589 = _0x18cc05[_0x55c1df['uniqueID']] || (_0x18cc05[_0x55c1df['uniqueID']] = {}), _0x82da22 && _0x82da22 === _0x55c1df['nodeName']['toLowerCase']()) _0x55c1df = _0x55c1df[_0x27be50] || _0x55c1df;
                                else {
                                    if ((_0x2864ca = _0x1f7589[_0x1ed1aa]) && _0x2864ca[0x0] === _0x212e5e && _0x2864ca[0x1] === _0x40b9a8) return _0x3ef5f8[0x2] = _0x2864ca[0x2];
                                    if (_0x1f7589[_0x1ed1aa] = _0x3ef5f8, _0x3ef5f8[0x2] = _0x130512(_0x55c1df, _0x3c1deb, _0x375be4)) return !0x0;
                                }
                return !0x1;
            };
        },
        _0x3d0539 = function(_0x1a7253) {
            return 0x1 < _0x1a7253['length'] ? function(_0xca6bf7, _0x23566c, _0x48f6a7) {
                for (var _0x25b954 = _0x1a7253['length']; _0x25b954--;)
                    if (!_0x1a7253[_0x25b954](_0xca6bf7, _0x23566c, _0x48f6a7)) return !0x1;
                return !0x0;
            } : _0x1a7253[0x0];
        },
        _0x4e5d68 = function(_0x374718, _0x1bbd73, _0xb66a61, _0xea2baa, _0x25847e) {
            for (var _0x10cd30, _0xa3fa62 = [], _0x1f2e9a = 0x0, _0x356ff3 = _0x374718['length'], _0x1362f1 = null != _0x1bbd73; _0x1f2e9a < _0x356ff3; _0x1f2e9a++)(_0x10cd30 = _0x374718[_0x1f2e9a]) && (_0xb66a61 && !_0xb66a61(_0x10cd30, _0xea2baa, _0x25847e) || (_0xa3fa62['push'](_0x10cd30), _0x1362f1 && _0x1bbd73['push'](_0x1f2e9a)));
            return _0xa3fa62;
        },
        _0x58f607 = function(_0x3741dd, _0x1ab6ae, _0x19735b, _0x3048dd, _0x843e74, _0x20d66a) {
            return _0x3048dd && !_0x3048dd[_0x187ba2] && (_0x3048dd = _0x58f607(_0x3048dd)), _0x843e74 && !_0x843e74[_0x187ba2] && (_0x843e74 = _0x58f607(_0x843e74, _0x20d66a)), _0x59a74f(function(_0x22177b, _0xcf1336, _0x2f69d3, _0x3fee82) {
                var _0x3d4a9c, _0x4d20ac, _0x44f9fd = [],
                    _0x50d78e = [],
                    _0x3606e0 = _0xcf1336['length'],
                    _0x71e67f;
                if (!(_0x71e67f = _0x22177b)) {
                    _0x71e67f = _0x1ab6ae || '*';
                    for (var _0x4fb719 = _0x2f69d3['nodeType'] ? [_0x2f69d3] : _0x2f69d3, _0x4dec7b = [], _0x45fe57 = 0x0, _0x51e536 = _0x4fb719['length']; _0x45fe57 < _0x51e536; _0x45fe57++) _0x227aa5(_0x71e67f, _0x4fb719[_0x45fe57], _0x4dec7b);
                    _0x71e67f = _0x4dec7b;
                }
                _0x71e67f = !_0x3741dd || !_0x22177b && _0x1ab6ae ? _0x71e67f : _0x4e5d68(_0x71e67f, _0x44f9fd, _0x3741dd, _0x2f69d3, _0x3fee82);
                _0x4fb719 = _0x19735b ? _0x843e74 || (_0x22177b ? _0x3741dd : _0x3606e0 || _0x3048dd) ? [] : _0xcf1336 : _0x71e67f;
                if (_0x19735b && _0x19735b(_0x71e67f, _0x4fb719, _0x2f69d3, _0x3fee82), _0x3048dd) {
                    _0x3d4a9c = _0x4e5d68(_0x4fb719, _0x50d78e);
                    _0x3048dd(_0x3d4a9c, [], _0x2f69d3, _0x3fee82);
                    for (_0x2f69d3 = _0x3d4a9c['length']; _0x2f69d3--;)(_0x4d20ac = _0x3d4a9c[_0x2f69d3]) && (_0x4fb719[_0x50d78e[_0x2f69d3]] = !(_0x71e67f[_0x50d78e[_0x2f69d3]] = _0x4d20ac));
                }
                if (_0x22177b) {
                    if (_0x843e74 || _0x3741dd) {
                        if (_0x843e74) {
                            _0x3d4a9c = [];
                            for (_0x2f69d3 = _0x4fb719['length']; _0x2f69d3--;)(_0x4d20ac = _0x4fb719[_0x2f69d3]) && _0x3d4a9c['push'](_0x71e67f[_0x2f69d3] = _0x4d20ac);
                            _0x843e74(null, _0x4fb719 = [], _0x3d4a9c, _0x3fee82);
                        }
                        for (_0x2f69d3 = _0x4fb719['length']; _0x2f69d3--;)(_0x4d20ac = _0x4fb719[_0x2f69d3]) && -0x1 < (_0x3d4a9c = _0x843e74 ? _0x4400ef(_0x22177b, _0x4d20ac) : _0x44f9fd[_0x2f69d3]) && (_0x22177b[_0x3d4a9c] = !(_0xcf1336[_0x3d4a9c] = _0x4d20ac));
                    }
                } else _0x4fb719 = _0x4e5d68(_0x4fb719 === _0xcf1336 ? _0x4fb719['splice'](_0x3606e0, _0x4fb719['length']) : _0x4fb719), _0x843e74 ? _0x843e74(null, _0xcf1336, _0x4fb719, _0x3fee82) : _0x3ac621['apply'](_0xcf1336, _0x4fb719);
            });
        },
        _0x352d48 = function(_0xc9242c) {
            var _0x5bb35a, _0x34f449, _0x2a9e88, _0x2c1f1d = _0xc9242c['length'],
                _0x4ba8df = _0x398be['relative'][_0xc9242c[0x0]['type']];
            _0x34f449 = _0x4ba8df || _0x398be['relative'][' '];
            for (var _0x10c9b9 = _0x4ba8df ? 0x1 : 0x0, _0x2bc6f8 = _0x63268b(function(_0x49df60) {
                    return _0x49df60 === _0x5bb35a;
                }, _0x34f449, !0x0), _0x47bd38 = _0x63268b(function(_0xe284c1) {
                    return -0x1 < _0x4400ef(_0x5bb35a, _0xe284c1);
                }, _0x34f449, !0x0), _0x2c2662 = [function(_0x27b6f6, _0x59a739, _0x2d47d2) {
                    _0x27b6f6 = !_0x4ba8df && (_0x2d47d2 || _0x59a739 !== _0x2e4992) || ((_0x5bb35a = _0x59a739)['nodeType'] ? _0x2bc6f8(_0x27b6f6, _0x59a739, _0x2d47d2) : _0x47bd38(_0x27b6f6, _0x59a739, _0x2d47d2));
                    return _0x5bb35a = null, _0x27b6f6;
                }]; _0x10c9b9 < _0x2c1f1d; _0x10c9b9++)
                if (_0x34f449 = _0x398be['relative'][_0xc9242c[_0x10c9b9]['type']]) _0x2c2662 = [_0x63268b(_0x3d0539(_0x2c2662), _0x34f449)];
                else {
                    if (_0x34f449 = _0x398be['filter'][_0xc9242c[_0x10c9b9]['type']]['apply'](null, _0xc9242c[_0x10c9b9]['matches']), _0x34f449[_0x187ba2]) {
                        for (_0x2a9e88 = ++_0x10c9b9; _0x2a9e88 < _0x2c1f1d && !_0x398be['relative'][_0xc9242c[_0x2a9e88]['type']]; _0x2a9e88++);
                        return _0x58f607(0x1 < _0x10c9b9 && _0x3d0539(_0x2c2662), 0x1 < _0x10c9b9 && _0x5e4ddd(_0xc9242c['slice'](0x0, _0x10c9b9 - 0x1)['concat']({
                            'value': ' ' === _0xc9242c[_0x10c9b9 - 0x2]['type'] ? '*' : ''
                        }))['replace'](_0x47cd5c, '$1'), _0x34f449, _0x10c9b9 < _0x2a9e88 && _0x352d48(_0xc9242c['slice'](_0x10c9b9, _0x2a9e88)), _0x2a9e88 < _0x2c1f1d && _0x352d48(_0xc9242c = _0xc9242c['slice'](_0x2a9e88)), _0x2a9e88 < _0x2c1f1d && _0x5e4ddd(_0xc9242c));
                    }
                    _0x2c2662['push'](_0x34f449);
                }
            return _0x3d0539(_0x2c2662);
        },
        _0x49c4c2, _0x23f74e, _0x398be, _0x16e484, _0x539e7d, _0x475749, _0x1482d8, _0x1bc3f0, _0x2e4992, _0x23d09e, _0x4caa1f, _0xe41a91, _0x425c27, _0x2ce0f7, _0xd3b329, _0x4dba72, _0x3ab398, _0x4ba686, _0x5288fc, _0x187ba2 = 'sizzle' + 0x1 * new Date(),
        _0x47458b = _0x181ae0['document'],
        _0x212e5e = 0x0,
        _0x8eb67 = 0x0,
        _0x3a6adf = _0x4b178f(),
        _0x3a8547 = _0x4b178f(),
        _0x38c152 = _0x4b178f(),
        _0x5d103b = function(_0x3c558a, _0x1358c4) {
            return _0x3c558a === _0x1358c4 && (_0x4caa1f = !0x0), 0x0;
        },
        _0x4b705b = {}['hasOwnProperty'],
        _0x3163ca = [],
        _0x4cdb91 = _0x3163ca['pop'],
        _0x18e12e = _0x3163ca['push'],
        _0x3ac621 = _0x3163ca['push'],
        _0xef8969 = _0x3163ca['slice'],
        _0x4400ef = function(_0x1cff15, _0x134dbb) {
            for (var _0x599ba9 = 0x0, _0x4360bb = _0x1cff15['length']; _0x599ba9 < _0x4360bb; _0x599ba9++)
                if (_0x1cff15[_0x599ba9] === _0x134dbb) return _0x599ba9;
            return -0x1;
        },
        _0x176d5d = /[ \t\r\n\f]+/g,
        _0x47cd5c = /^[ \t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[ \t\r\n\f]+$/g,
        _0x4929c8 = /^[ \t\r\n\f]*,[ \t\r\n\f]*/,
        _0x2fd1f4 = /^[ \t\r\n\f]*([>+~]|[ \t\r\n\f])[ \t\r\n\f]*/,
        _0xbf4614 = /=[ \t\r\n\f]*([^\]'"]*?)[ \t\r\n\f]*\]/g,
        _0x826923 = RegExp(':((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
        _0x44bcd0 = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        _0x4d91ae = {
            'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            'ATTR': RegExp('^\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]'),
            'PSEUDO': RegExp('^:((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
            'CHILD': RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)', 'i'),
            'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
            'needsContext': RegExp('^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)', 'i')
        },
        _0x12b98d = /^(?:input|select|textarea|button)$/i,
        _0x4a8066 = /^h\d$/i,
        _0x115a5a = /^[^{]+\{\s*\[native \w/,
        _0x4d078f = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _0x183831 = /[+~]/,
        _0x3c7a28 = /\\([\da-f]{1,6}[ \t\r\n\f]?|([ \t\r\n\f])|.)/ig,
        _0x326953 = function(_0x50e0fd, _0x1fe30c, _0x277622) {
            _0x50e0fd = '0x' + _0x1fe30c - 0x10000;
            return _0x50e0fd !== _0x50e0fd || _0x277622 ? _0x1fe30c : 0x0 > _0x50e0fd ? String['fromCharCode'](_0x50e0fd + 0x10000) : String['fromCharCode'](_0x50e0fd >> 0xa | 0xd800, 0x3ff & _0x50e0fd | 0xdc00);
        },
        _0x4918bd = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        _0x22092d = function(_0x9e5e5b, _0x205554) {
            return _0x205554 ? ' ' === _0x9e5e5b ? '�' : _0x9e5e5b['slice'](0x0, -0x1) + '\x5c' + _0x9e5e5b['charCodeAt'](_0x9e5e5b['length'] - 0x1)['toString'](0x10) + ' ' : '\x5c' + _0x9e5e5b;
        },
        _0x2e6b72 = function() {
            _0xe41a91();
        },
        _0x37c4d8 = _0x63268b(function(_0x1d0fdd) {
            return !0x0 === _0x1d0fdd['disabled'] && ('form' in _0x1d0fdd || 'label' in _0x1d0fdd);
        }, {
            'dir': 'parentNode',
            'next': 'legend'
        });
    try {
        _0x3ac621['apply'](_0x3163ca = _0xef8969['call'](_0x47458b['childNodes']), _0x47458b['childNodes']), _0x3163ca[_0x47458b['childNodes']['length']]['nodeType'];
    } catch (_0x3555ae) {
        _0x3ac621 = {
            'apply': _0x3163ca['length'] ? function(_0x280f71, _0x373022) {
                _0x18e12e['apply'](_0x280f71, _0xef8969['call'](_0x373022));
            } : function(_0x37d538, _0x369233) {
                for (var _0xb6275b = _0x37d538['length'], _0x23a6b1 = 0x0; _0x37d538[_0xb6275b++] = _0x369233[_0x23a6b1++];);
                _0x37d538['length'] = _0xb6275b - 0x1;
            }
        };
    }
    _0x23f74e = _0x227aa5['support'] = {};
    _0x539e7d = _0x227aa5['isXML'] = function(_0x487002) {
        _0x487002 = _0x487002 && (_0x487002['ownerDocument'] || _0x487002)['documentElement'];
        return !!_0x487002 && 'HTML' !== _0x487002['nodeName'];
    };
    _0xe41a91 = _0x227aa5['setDocument'] = function(_0x4fbb6d) {
        var _0x517708, _0x2efca6;
        _0x4fbb6d = _0x4fbb6d ? _0x4fbb6d['ownerDocument'] || _0x4fbb6d : _0x47458b;
        return _0x4fbb6d !== _0x425c27 && 0x9 === _0x4fbb6d['nodeType'] && _0x4fbb6d['documentElement'] ? (_0x425c27 = _0x4fbb6d, _0x2ce0f7 = _0x425c27['documentElement'], _0xd3b329 = !_0x539e7d(_0x425c27), _0x47458b !== _0x425c27 && (_0x2efca6 = _0x425c27['defaultView']) && _0x2efca6['top'] !== _0x2efca6 && (_0x2efca6['addEventListener'] ? _0x2efca6['addEventListener']('unload', _0x2e6b72, !0x1) : _0x2efca6['attachEvent'] && _0x2efca6['attachEvent']('onunload', _0x2e6b72)), _0x23f74e['attributes'] = _0x3597a5(function(_0x5b817e) {
            return _0x5b817e['className'] = 'i', !_0x5b817e['getAttribute']('className');
        }), _0x23f74e['getElementsByTagName'] = _0x3597a5(function(_0x2270b7) {
            return _0x2270b7['appendChild'](_0x425c27['createComment']('')), !_0x2270b7['getElementsByTagName']('*')['length'];
        }), _0x23f74e['getElementsByClassName'] = _0x115a5a['test'](_0x425c27['getElementsByClassName']), _0x23f74e['getById'] = _0x3597a5(function(_0x162086) {
            return _0x2ce0f7['appendChild'](_0x162086)['id'] = _0x187ba2, !_0x425c27['getElementsByName'] || !_0x425c27['getElementsByName'](_0x187ba2)['length'];
        }), _0x23f74e['getById'] ? (_0x398be['filter']['ID'] = function(_0x5d79ab) {
            var _0x3c4eae = _0x5d79ab['replace'](_0x3c7a28, _0x326953);
            return function(_0x42a29a) {
                return _0x42a29a['getAttribute']('id') === _0x3c4eae;
            };
        }, _0x398be['find']['ID'] = function(_0x264cfe, _0x19022b) {
            if ('undefined' != typeof _0x19022b['getElementById'] && _0xd3b329) {
                var _0x22c8a4 = _0x19022b['getElementById'](_0x264cfe);
                return _0x22c8a4 ? [_0x22c8a4] : [];
            }
        }) : (_0x398be['filter']['ID'] = function(_0x46b848) {
            var _0xbcf245 = _0x46b848['replace'](_0x3c7a28, _0x326953);
            return function(_0x59e0cb) {
                return (_0x59e0cb = 'undefined' != typeof _0x59e0cb['getAttributeNode'] && _0x59e0cb['getAttributeNode']('id')) && _0x59e0cb['value'] === _0xbcf245;
            };
        }, _0x398be['find']['ID'] = function(_0x56e423, _0x39204f) {
            if ('undefined' != typeof _0x39204f['getElementById'] && _0xd3b329) {
                var _0x50ee89, _0x361297, _0x4612ea, _0x1cdc3a = _0x39204f['getElementById'](_0x56e423);
                if (_0x1cdc3a) {
                    if (_0x50ee89 = _0x1cdc3a['getAttributeNode']('id'), _0x50ee89 && _0x50ee89['value'] === _0x56e423) return [_0x1cdc3a];
                    _0x4612ea = _0x39204f['getElementsByName'](_0x56e423);
                    for (_0x361297 = 0x0; _0x1cdc3a = _0x4612ea[_0x361297++];)
                        if (_0x50ee89 = _0x1cdc3a['getAttributeNode']('id'), _0x50ee89 && _0x50ee89['value'] === _0x56e423) return [_0x1cdc3a];
                }
                return [];
            }
        }), _0x398be['find']['TAG'] = _0x23f74e['getElementsByTagName'] ? function(_0x2e5b19, _0x5ed940) {
            return 'undefined' != typeof _0x5ed940['getElementsByTagName'] ? _0x5ed940['getElementsByTagName'](_0x2e5b19) : _0x23f74e['qsa'] ? _0x5ed940['querySelectorAll'](_0x2e5b19) : void 0x0;
        } : function(_0x2bd1fc, _0x3a66d4) {
            var _0x1e896b, _0x3c3436 = [],
                _0x41999d = 0x0,
                _0x328c91 = _0x3a66d4['getElementsByTagName'](_0x2bd1fc);
            if ('*' === _0x2bd1fc) {
                for (; _0x1e896b = _0x328c91[_0x41999d++];) 0x1 === _0x1e896b['nodeType'] && _0x3c3436['push'](_0x1e896b);
                return _0x3c3436;
            }
            return _0x328c91;
        }, _0x398be['find']['CLASS'] = _0x23f74e['getElementsByClassName'] && function(_0x11170e, _0x545c61) {
            if ('undefined' != typeof _0x545c61['getElementsByClassName'] && _0xd3b329) return _0x545c61['getElementsByClassName'](_0x11170e);
        }, _0x3ab398 = [], _0x4dba72 = [], (_0x23f74e['qsa'] = _0x115a5a['test'](_0x425c27['querySelectorAll'])) && (_0x3597a5(function(_0x75120a) {
            _0x2ce0f7['appendChild'](_0x75120a)['innerHTML'] = '<a id=\x27' + _0x187ba2 + '\x27></a><select id=\x27' + _0x187ba2 + '-\x0d\x5c\x27 msallowcapture=\x27\x27><option selected=\x27\x27></option></select>';
            _0x75120a['querySelectorAll']('[msallowcapture^=\x27\x27]')['length'] && _0x4dba72['push']('[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27\x27|\x22\x22)');
            _0x75120a['querySelectorAll']('[selected]')['length'] || _0x4dba72['push']('\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)');
            _0x75120a['querySelectorAll']('[id~=' + _0x187ba2 + '-]')['length'] || _0x4dba72['push']('~=');
            _0x75120a['querySelectorAll'](':checked')['length'] || _0x4dba72['push'](':checked');
            _0x75120a['querySelectorAll']('a#' + _0x187ba2 + '+*')['length'] || _0x4dba72['push']('.#.+[+~]');
        }), _0x3597a5(function(_0x5110d9) {
            _0x5110d9['innerHTML'] = '<a href=\x27\x27 disabled=\x27disabled\x27></a><select disabled=\x27disabled\x27><option/></select>';
            var _0x3eb444 = _0x425c27['createElement']('input');
            _0x3eb444['setAttribute']('type', 'hidden');
            _0x5110d9['appendChild'](_0x3eb444)['setAttribute']('name', 'D');
            _0x5110d9['querySelectorAll']('[name=d]')['length'] && _0x4dba72['push']('name[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[*^$|!~]?=');
            0x2 !== _0x5110d9['querySelectorAll'](':enabled')['length'] && _0x4dba72['push'](':enabled', ':disabled');
            _0x2ce0f7['appendChild'](_0x5110d9)['disabled'] = !0x0;
            0x2 !== _0x5110d9['querySelectorAll'](':disabled')['length'] && _0x4dba72['push'](':enabled', ':disabled');
            _0x5110d9['querySelectorAll']('*,:x');
            _0x4dba72['push'](',.*:');
        })), (_0x23f74e['matchesSelector'] = _0x115a5a['test'](_0x4ba686 = _0x2ce0f7['matches'] || _0x2ce0f7['webkitMatchesSelector'] || _0x2ce0f7['mozMatchesSelector'] || _0x2ce0f7['oMatchesSelector'] || _0x2ce0f7['msMatchesSelector'])) && _0x3597a5(function(_0x24ddf8) {
            _0x23f74e['disconnectedMatch'] = _0x4ba686['call'](_0x24ddf8, '*');
            _0x4ba686['call'](_0x24ddf8, '[s!=\x27\x27]:x');
            _0x3ab398['push']('!=', ':((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)');
        }), _0x4dba72 = _0x4dba72['length'] && RegExp(_0x4dba72['join']('|')), _0x3ab398 = _0x3ab398['length'] && RegExp(_0x3ab398['join']('|')), _0x517708 = _0x115a5a['test'](_0x2ce0f7['compareDocumentPosition']), _0x5288fc = _0x517708 || _0x115a5a['test'](_0x2ce0f7['contains']) ? function(_0x401b60, _0x5ae925) {
            var _0x1a7ddd = 0x9 === _0x401b60['nodeType'] ? _0x401b60['documentElement'] : _0x401b60,
                _0xdf0c92 = _0x5ae925 && _0x5ae925['parentNode'];
            return _0x401b60 === _0xdf0c92 || !(!_0xdf0c92 || 0x1 !== _0xdf0c92['nodeType'] || !(_0x1a7ddd['contains'] ? _0x1a7ddd['contains'](_0xdf0c92) : _0x401b60['compareDocumentPosition'] && 0x10 & _0x401b60['compareDocumentPosition'](_0xdf0c92)));
        } : function(_0x29d6fe, _0x24203a) {
            if (_0x24203a)
                for (; _0x24203a = _0x24203a['parentNode'];)
                    if (_0x24203a === _0x29d6fe) return !0x0;
            return !0x1;
        }, _0x5d103b = _0x517708 ? function(_0x424a2c, _0x278cf1) {
            if (_0x424a2c === _0x278cf1) return _0x4caa1f = !0x0, 0x0;
            var _0x545100 = !_0x424a2c['compareDocumentPosition'] - !_0x278cf1['compareDocumentPosition'];
            return _0x545100 ? _0x545100 : (_0x545100 = (_0x424a2c['ownerDocument'] || _0x424a2c) === (_0x278cf1['ownerDocument'] || _0x278cf1) ? _0x424a2c['compareDocumentPosition'](_0x278cf1) : 0x1, 0x1 & _0x545100 || !_0x23f74e['sortDetached'] && _0x278cf1['compareDocumentPosition'](_0x424a2c) === _0x545100 ? _0x424a2c === _0x425c27 || _0x424a2c['ownerDocument'] === _0x47458b && _0x5288fc(_0x47458b, _0x424a2c) ? -0x1 : _0x278cf1 === _0x425c27 || _0x278cf1['ownerDocument'] === _0x47458b && _0x5288fc(_0x47458b, _0x278cf1) ? 0x1 : _0x23d09e ? _0x4400ef(_0x23d09e, _0x424a2c) - _0x4400ef(_0x23d09e, _0x278cf1) : 0x0 : 0x4 & _0x545100 ? -0x1 : 0x1);
        } : function(_0xa01052, _0x6a4cf2) {
            if (_0xa01052 === _0x6a4cf2) return _0x4caa1f = !0x0, 0x0;
            var _0x2fa359, _0x5836c7 = 0x0;
            _0x2fa359 = _0xa01052['parentNode'];
            var _0x344195 = _0x6a4cf2['parentNode'],
                _0x3cc035 = [_0xa01052],
                _0x38193e = [_0x6a4cf2];
            if (!_0x2fa359 || !_0x344195) return _0xa01052 === _0x425c27 ? -0x1 : _0x6a4cf2 === _0x425c27 ? 0x1 : _0x2fa359 ? -0x1 : _0x344195 ? 0x1 : _0x23d09e ? _0x4400ef(_0x23d09e, _0xa01052) - _0x4400ef(_0x23d09e, _0x6a4cf2) : 0x0;
            if (_0x2fa359 === _0x344195) return _0x11729f(_0xa01052, _0x6a4cf2);
            for (_0x2fa359 = _0xa01052; _0x2fa359 = _0x2fa359['parentNode'];) _0x3cc035['unshift'](_0x2fa359);
            for (_0x2fa359 = _0x6a4cf2; _0x2fa359 = _0x2fa359['parentNode'];) _0x38193e['unshift'](_0x2fa359);
            for (; _0x3cc035[_0x5836c7] === _0x38193e[_0x5836c7];) _0x5836c7++;
            return _0x5836c7 ? _0x11729f(_0x3cc035[_0x5836c7], _0x38193e[_0x5836c7]) : _0x3cc035[_0x5836c7] === _0x47458b ? -0x1 : _0x38193e[_0x5836c7] === _0x47458b ? 0x1 : 0x0;
        }, _0x425c27) : _0x425c27;
    };
    _0x227aa5['matches'] = function(_0x3020c9, _0x53cf28) {
        return _0x227aa5(_0x3020c9, null, null, _0x53cf28);
    };
    _0x227aa5['matchesSelector'] = function(_0x5044d2, _0x3b3c9b) {
        if ((_0x5044d2['ownerDocument'] || _0x5044d2) !== _0x425c27 && _0xe41a91(_0x5044d2), _0x3b3c9b = _0x3b3c9b['replace'](_0xbf4614, '=\x27$1\x27]'), _0x23f74e['matchesSelector'] && _0xd3b329 && !_0x38c152[_0x3b3c9b + ' '] && (!_0x3ab398 || !_0x3ab398['test'](_0x3b3c9b)) && (!_0x4dba72 || !_0x4dba72['test'](_0x3b3c9b))) try {
            var _0x343d92 = _0x4ba686['call'](_0x5044d2, _0x3b3c9b);
            if (_0x343d92 || _0x23f74e['disconnectedMatch'] || _0x5044d2['document'] && 0xb !== _0x5044d2['document']['nodeType']) return _0x343d92;
        } catch (_0x1f5419) {}
        return 0x0 < _0x227aa5(_0x3b3c9b, _0x425c27, null, [_0x5044d2])['length'];
    };
    _0x227aa5['contains'] = function(_0x2ba86b, _0xa7d2a1) {
        return (_0x2ba86b['ownerDocument'] || _0x2ba86b) !== _0x425c27 && _0xe41a91(_0x2ba86b), _0x5288fc(_0x2ba86b, _0xa7d2a1);
    };
    _0x227aa5['attr'] = function(_0xea4580, _0x11d2f4) {
        (_0xea4580['ownerDocument'] || _0xea4580) !== _0x425c27 && _0xe41a91(_0xea4580);
        var _0x24f896 = _0x398be['attrHandle'][_0x11d2f4['toLowerCase']()],
            _0x24f896 = _0x24f896 && _0x4b705b['call'](_0x398be['attrHandle'], _0x11d2f4['toLowerCase']()) ? _0x24f896(_0xea4580, _0x11d2f4, !_0xd3b329) : void 0x0;
        return void 0x0 !== _0x24f896 ? _0x24f896 : _0x23f74e['attributes'] || !_0xd3b329 ? _0xea4580['getAttribute'](_0x11d2f4) : (_0x24f896 = _0xea4580['getAttributeNode'](_0x11d2f4)) && _0x24f896['specified'] ? _0x24f896['value'] : null;
    };
    _0x227aa5['escape'] = function(_0x250cf4) {
        return (_0x250cf4 + '')['replace'](_0x4918bd, _0x22092d);
    };
    _0x227aa5['error'] = function(_0x4662fa) {
        throw Error('Syntax error, unrecognized expression: ' + _0x4662fa);
    };
    _0x227aa5['uniqueSort'] = function(_0x53644c) {
        var _0x389db0, _0x2a03cb = [],
            _0x3e8efe = 0x0,
            _0x53ce9e = 0x0;
        if (_0x4caa1f = !_0x23f74e['detectDuplicates'], _0x23d09e = !_0x23f74e['sortStable'] && _0x53644c['slice'](0x0), _0x53644c['sort'](_0x5d103b), _0x4caa1f) {
            for (; _0x389db0 = _0x53644c[_0x53ce9e++];) _0x389db0 === _0x53644c[_0x53ce9e] && (_0x3e8efe = _0x2a03cb['push'](_0x53ce9e));
            for (; _0x3e8efe--;) _0x53644c['splice'](_0x2a03cb[_0x3e8efe], 0x1);
        }
        return _0x23d09e = null, _0x53644c;
    };
    _0x16e484 = _0x227aa5['getText'] = function(_0x535d2e) {
        var _0x3ab4f2, _0x370137 = '',
            _0x4d2208 = 0x0;
        if (_0x3ab4f2 = _0x535d2e['nodeType'])
            if (0x1 === _0x3ab4f2 || 0x9 === _0x3ab4f2 || 0xb === _0x3ab4f2) {
                if ('string' == typeof _0x535d2e['textContent']) return _0x535d2e['textContent'];
                for (_0x535d2e = _0x535d2e['firstChild']; _0x535d2e; _0x535d2e = _0x535d2e['nextSibling']) _0x370137 += _0x16e484(_0x535d2e);
            } else {
                if (0x3 === _0x3ab4f2 || 0x4 === _0x3ab4f2) return _0x535d2e['nodeValue'];
            }
        else
            for (; _0x3ab4f2 = _0x535d2e[_0x4d2208++];) _0x370137 += _0x16e484(_0x3ab4f2);
        return _0x370137;
    };
    _0x398be = _0x227aa5['selectors'] = {
        'cacheLength': 0x32,
        'createPseudo': _0x59a74f,
        'match': _0x4d91ae,
        'attrHandle': {},
        'find': {},
        'relative': {
            '>': {
                'dir': 'parentNode',
                'first': !0x0
            },
            ' ': {
                'dir': 'parentNode'
            },
            '+': {
                'dir': 'previousSibling',
                'first': !0x0
            },
            '~': {
                'dir': 'previousSibling'
            }
        },
        'preFilter': {
            'ATTR': function(_0x229e0f) {
                return _0x229e0f[0x1] = _0x229e0f[0x1]['replace'](_0x3c7a28, _0x326953), _0x229e0f[0x3] = (_0x229e0f[0x3] || _0x229e0f[0x4] || _0x229e0f[0x5] || '')['replace'](_0x3c7a28, _0x326953), '~=' === _0x229e0f[0x2] && (_0x229e0f[0x3] = ' ' + _0x229e0f[0x3] + ' '), _0x229e0f['slice'](0x0, 0x4);
            },
            'CHILD': function(_0x367a56) {
                return _0x367a56[0x1] = _0x367a56[0x1]['toLowerCase'](), 'nth' === _0x367a56[0x1]['slice'](0x0, 0x3) ? (_0x367a56[0x3] || _0x227aa5['error'](_0x367a56[0x0]), _0x367a56[0x4] = +(_0x367a56[0x4] ? _0x367a56[0x5] + (_0x367a56[0x6] || 0x1) : 0x2 * ('even' === _0x367a56[0x3] || 'odd' === _0x367a56[0x3])), _0x367a56[0x5] = +(_0x367a56[0x7] + _0x367a56[0x8] || 'odd' === _0x367a56[0x3])) : _0x367a56[0x3] && _0x227aa5['error'](_0x367a56[0x0]), _0x367a56;
            },
            'PSEUDO': function(_0x466251) {
                var _0x581e0d, _0x8d8206 = !_0x466251[0x6] && _0x466251[0x2];
                return _0x4d91ae['CHILD']['test'](_0x466251[0x0]) ? null : (_0x466251[0x3] ? _0x466251[0x2] = _0x466251[0x4] || _0x466251[0x5] || '' : _0x8d8206 && _0x826923['test'](_0x8d8206) && (_0x581e0d = _0x475749(_0x8d8206, !0x0)) && (_0x581e0d = _0x8d8206['indexOf'](')', _0x8d8206['length'] - _0x581e0d) - _0x8d8206['length']) && (_0x466251[0x0] = _0x466251[0x0]['slice'](0x0, _0x581e0d), _0x466251[0x2] = _0x8d8206['slice'](0x0, _0x581e0d)), _0x466251['slice'](0x0, 0x3));
            }
        },
        'filter': {
            'TAG': function(_0x1303c6) {
                var _0x52ec84 = _0x1303c6['replace'](_0x3c7a28, _0x326953)['toLowerCase']();
                return '*' === _0x1303c6 ? function() {
                    return !0x0;
                } : function(_0x31217c) {
                    return _0x31217c['nodeName'] && _0x31217c['nodeName']['toLowerCase']() === _0x52ec84;
                };
            },
            'CLASS': function(_0x1e88ca) {
                var _0x355a16 = _0x3a6adf[_0x1e88ca + ' '];
                return _0x355a16 || (_0x355a16 = RegExp('(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])' + _0x1e88ca + '([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)')) && _0x3a6adf(_0x1e88ca, function(_0x304c41) {
                    return _0x355a16['test']('string' == typeof _0x304c41['className'] && _0x304c41['className'] || 'undefined' != typeof _0x304c41['getAttribute'] && _0x304c41['getAttribute']('class') || '');
                });
            },
            'ATTR': function(_0xef9d9e, _0x3fe94b, _0x222b33) {
                return function(_0x2883ff) {
                    _0x2883ff = _0x227aa5['attr'](_0x2883ff, _0xef9d9e);
                    return null == _0x2883ff ? '!=' === _0x3fe94b : !_0x3fe94b || (_0x2883ff += '', '=' === _0x3fe94b ? _0x2883ff === _0x222b33 : '!=' === _0x3fe94b ? _0x2883ff !== _0x222b33 : '^=' === _0x3fe94b ? _0x222b33 && 0x0 === _0x2883ff['indexOf'](_0x222b33) : '*=' === _0x3fe94b ? _0x222b33 && -0x1 < _0x2883ff['indexOf'](_0x222b33) : '$=' === _0x3fe94b ? _0x222b33 && _0x2883ff['slice'](-_0x222b33['length']) === _0x222b33 : '~=' === _0x3fe94b ? -0x1 < (' ' + _0x2883ff['replace'](_0x176d5d, ' ') + ' ')['indexOf'](_0x222b33) : '|=' === _0x3fe94b && (_0x2883ff === _0x222b33 || _0x2883ff['slice'](0x0, _0x222b33['length'] + 0x1) === _0x222b33 + '-'));
                };
            },
            'CHILD': function(_0x7a25df, _0x1054be, _0x25ecb3, _0x4edb0f, _0x593e9a) {
                var _0x5c4566 = 'nth' !== _0x7a25df['slice'](0x0, 0x3),
                    _0x29912c = 'last' !== _0x7a25df['slice'](-0x4),
                    _0x1200bd = 'of-type' === _0x1054be;
                return 0x1 === _0x4edb0f && 0x0 === _0x593e9a ? function(_0x5c9c1a) {
                    return !!_0x5c9c1a['parentNode'];
                } : function(_0x4e4280, _0x5c81c5, _0x40fda8) {
                    var _0x199bf0, _0x14288d, _0x2da2b3, _0x120415, _0x26e468, _0x5a2993;
                    _0x5c81c5 = _0x5c4566 !== _0x29912c ? 'nextSibling' : 'previousSibling';
                    var _0x164c76 = _0x4e4280['parentNode'],
                        _0xf02d1 = _0x1200bd && _0x4e4280['nodeName']['toLowerCase']();
                    _0x40fda8 = !_0x40fda8 && !_0x1200bd;
                    var _0x4397bc = !0x1;
                    if (_0x164c76) {
                        if (_0x5c4566) {
                            for (; _0x5c81c5;) {
                                for (_0x120415 = _0x4e4280; _0x120415 = _0x120415[_0x5c81c5];)
                                    if (_0x1200bd ? _0x120415['nodeName']['toLowerCase']() === _0xf02d1 : 0x1 === _0x120415['nodeType']) return !0x1;
                                _0x5a2993 = _0x5c81c5 = 'only' === _0x7a25df && !_0x5a2993 && 'nextSibling';
                            }
                            return !0x0;
                        }
                        if (_0x5a2993 = [_0x29912c ? _0x164c76['firstChild'] : _0x164c76['lastChild']], _0x29912c && _0x40fda8) {
                            _0x120415 = _0x164c76;
                            _0x2da2b3 = _0x120415[_0x187ba2] || (_0x120415[_0x187ba2] = {});
                            _0x14288d = _0x2da2b3[_0x120415['uniqueID']] || (_0x2da2b3[_0x120415['uniqueID']] = {});
                            _0x199bf0 = _0x14288d[_0x7a25df] || [];
                            _0x4397bc = (_0x26e468 = _0x199bf0[0x0] === _0x212e5e && _0x199bf0[0x1]) && _0x199bf0[0x2];
                            for (_0x120415 = _0x26e468 && _0x164c76['childNodes'][_0x26e468]; _0x120415 = ++_0x26e468 && _0x120415 && _0x120415[_0x5c81c5] || (_0x4397bc = _0x26e468 = 0x0) || _0x5a2993['pop']();)
                                if (0x1 === _0x120415['nodeType'] && ++_0x4397bc && _0x120415 === _0x4e4280) {
                                    _0x14288d[_0x7a25df] = [_0x212e5e, _0x26e468, _0x4397bc];
                                    break;
                                }
                        } else if (_0x40fda8 && (_0x120415 = _0x4e4280, _0x2da2b3 = _0x120415[_0x187ba2] || (_0x120415[_0x187ba2] = {}), _0x14288d = _0x2da2b3[_0x120415['uniqueID']] || (_0x2da2b3[_0x120415['uniqueID']] = {}), _0x199bf0 = _0x14288d[_0x7a25df] || [], _0x26e468 = _0x199bf0[0x0] === _0x212e5e && _0x199bf0[0x1], _0x4397bc = _0x26e468), !0x1 === _0x4397bc)
                            for (;
                                (_0x120415 = ++_0x26e468 && _0x120415 && _0x120415[_0x5c81c5] || (_0x4397bc = _0x26e468 = 0x0) || _0x5a2993['pop']()) && (!(_0x1200bd ? _0x120415['nodeName']['toLowerCase']() === _0xf02d1 : 0x1 === _0x120415['nodeType']) || !++_0x4397bc || !(_0x40fda8 && (_0x2da2b3 = _0x120415[_0x187ba2] || (_0x120415[_0x187ba2] = {}), _0x14288d = _0x2da2b3[_0x120415['uniqueID']] || (_0x2da2b3[_0x120415['uniqueID']] = {}), _0x14288d[_0x7a25df] = [_0x212e5e, _0x4397bc]), _0x120415 === _0x4e4280)););
                        return _0x4397bc -= _0x593e9a, _0x4397bc === _0x4edb0f || 0x0 === _0x4397bc % _0x4edb0f && 0x0 <= _0x4397bc / _0x4edb0f;
                    }
                };
            },
            'PSEUDO': function(_0x34bac2, _0x4f6968) {
                var _0x1693ac, _0x585327 = _0x398be['pseudos'][_0x34bac2] || _0x398be['setFilters'][_0x34bac2['toLowerCase']()] || _0x227aa5['error']('unsupported pseudo: ' + _0x34bac2);
                return _0x585327[_0x187ba2] ? _0x585327(_0x4f6968) : 0x1 < _0x585327['length'] ? (_0x1693ac = [_0x34bac2, _0x34bac2, '', _0x4f6968], _0x398be['setFilters']['hasOwnProperty'](_0x34bac2['toLowerCase']()) ? _0x59a74f(function(_0x1229d7, _0x2350d1) {
                    for (var _0x8f284a, _0x24781e = _0x585327(_0x1229d7, _0x4f6968), _0x436359 = _0x24781e['length']; _0x436359--;) _0x8f284a = _0x4400ef(_0x1229d7, _0x24781e[_0x436359]), _0x1229d7[_0x8f284a] = !(_0x2350d1[_0x8f284a] = _0x24781e[_0x436359]);
                }) : function(_0x15f7e0) {
                    return _0x585327(_0x15f7e0, 0x0, _0x1693ac);
                }) : _0x585327;
            }
        },
        'pseudos': {
            'not': _0x59a74f(function(_0x498535) {
                var _0x18f30d = [],
                    _0x547229 = [],
                    _0x4d131b = _0x1482d8(_0x498535['replace'](_0x47cd5c, '$1'));
                return _0x4d131b[_0x187ba2] ? _0x59a74f(function(_0x1af60a, _0x5f3b60, _0x27cea9, _0x5c414e) {
                    var _0x14c957;
                    _0x27cea9 = _0x4d131b(_0x1af60a, null, _0x5c414e, []);
                    for (_0x5c414e = _0x1af60a['length']; _0x5c414e--;)(_0x14c957 = _0x27cea9[_0x5c414e]) && (_0x1af60a[_0x5c414e] = !(_0x5f3b60[_0x5c414e] = _0x14c957));
                }) : function(_0x398740, _0x5c032a, _0xe6235d) {
                    return _0x18f30d[0x0] = _0x398740, _0x4d131b(_0x18f30d, null, _0xe6235d, _0x547229), _0x18f30d[0x0] = null, !_0x547229['pop']();
                };
            }),
            'has': _0x59a74f(function(_0x3b91a9) {
                return function(_0x19a25e) {
                    return 0x0 < _0x227aa5(_0x3b91a9, _0x19a25e)['length'];
                };
            }),
            'contains': _0x59a74f(function(_0x4633c5) {
                return _0x4633c5 = _0x4633c5['replace'](_0x3c7a28, _0x326953),
                    function(_0x82c692) {
                        return -0x1 < (_0x82c692['textContent'] || _0x82c692['innerText'] || _0x16e484(_0x82c692))['indexOf'](_0x4633c5);
                    };
            }),
            'lang': _0x59a74f(function(_0x32f05d) {
                return _0x44bcd0['test'](_0x32f05d || '') || _0x227aa5['error']('unsupported lang: ' + _0x32f05d), _0x32f05d = _0x32f05d['replace'](_0x3c7a28, _0x326953)['toLowerCase'](),
                    function(_0x59904d) {
                        var _0x243aee;
                        do
                            if (_0x243aee = _0xd3b329 ? _0x59904d['lang'] : _0x59904d['getAttribute']('xml:lang') || _0x59904d['getAttribute']('lang')) return _0x243aee = _0x243aee['toLowerCase'](), _0x243aee === _0x32f05d || 0x0 === _0x243aee['indexOf'](_0x32f05d + '-'); while ((_0x59904d = _0x59904d['parentNode']) && 0x1 === _0x59904d['nodeType']);
                        return !0x1;
                    };
            }),
            'target': function(_0x166748) {
                var _0x1886f3 = _0x181ae0['location'] && _0x181ae0['location']['hash'];
                return _0x1886f3 && _0x1886f3['slice'](0x1) === _0x166748['id'];
            },
            'root': function(_0x23df8f) {
                return _0x23df8f === _0x2ce0f7;
            },
            'focus': function(_0x288b5c) {
                return _0x288b5c === _0x425c27['activeElement'] && (!_0x425c27['hasFocus'] || _0x425c27['hasFocus']()) && !(!_0x288b5c['type'] && !_0x288b5c['href'] && !~_0x288b5c['tabIndex']);
            },
            'enabled': _0x16caf1(!0x1),
            'disabled': _0x16caf1(!0x0),
            'checked': function(_0x141e00) {
                var _0x410616 = _0x141e00['nodeName']['toLowerCase']();
                return 'input' === _0x410616 && !!_0x141e00['checked'] || 'option' === _0x410616 && !!_0x141e00['selected'];
            },
            'selected': function(_0x15809b) {
                return _0x15809b['parentNode'] && _0x15809b['parentNode']['selectedIndex'], !0x0 === _0x15809b['selected'];
            },
            'empty': function(_0x1d1209) {
                for (_0x1d1209 = _0x1d1209['firstChild']; _0x1d1209; _0x1d1209 = _0x1d1209['nextSibling'])
                    if (0x6 > _0x1d1209['nodeType']) return !0x1;
                return !0x0;
            },
            'parent': function(_0x1d202c) {
                return !_0x398be['pseudos']['empty'](_0x1d202c);
            },
            'header': function(_0x44ed55) {
                return _0x4a8066['test'](_0x44ed55['nodeName']);
            },
            'input': function(_0xee3f6e) {
                return _0x12b98d['test'](_0xee3f6e['nodeName']);
            },
            'button': function(_0x487f9e) {
                var _0x54bf3f = _0x487f9e['nodeName']['toLowerCase']();
                return 'input' === _0x54bf3f && 'button' === _0x487f9e['type'] || 'button' === _0x54bf3f;
            },
            'text': function(_0x7242af) {
                var _0x4386ab;
                return 'input' === _0x7242af['nodeName']['toLowerCase']() && 'text' === _0x7242af['type'] && (null == (_0x4386ab = _0x7242af['getAttribute']('type')) || 'text' === _0x4386ab['toLowerCase']());
            },
            'first': _0x523824(function() {
                return [0x0];
            }),
            'last': _0x523824(function(_0x3e506d, _0xee3721) {
                return [_0xee3721 - 0x1];
            }),
            'eq': _0x523824(function(_0x4b439c, _0x33d100, _0x4c6ded) {
                return [0x0 > _0x4c6ded ? _0x4c6ded + _0x33d100 : _0x4c6ded];
            }),
            'even': _0x523824(function(_0x25aa25, _0x40d0a0) {
                for (var _0x5b4467 = 0x0; _0x5b4467 < _0x40d0a0; _0x5b4467 += 0x2) _0x25aa25['push'](_0x5b4467);
                return _0x25aa25;
            }),
            'odd': _0x523824(function(_0x17e2bb, _0x53ae2e) {
                for (var _0x1a429c = 0x1; _0x1a429c < _0x53ae2e; _0x1a429c += 0x2) _0x17e2bb['push'](_0x1a429c);
                return _0x17e2bb;
            }),
            'lt': _0x523824(function(_0x49d758, _0xab249, _0x121662) {
                for (_0xab249 = 0x0 > _0x121662 ? _0x121662 + _0xab249 : _0x121662; 0x0 <= --_0xab249;) _0x49d758['push'](_0xab249);
                return _0x49d758;
            }),
            'gt': _0x523824(function(_0x25eb80, _0x291c0c, _0x44732f) {
                for (_0x44732f = 0x0 > _0x44732f ? _0x44732f + _0x291c0c : _0x44732f; ++_0x44732f < _0x291c0c;) _0x25eb80['push'](_0x44732f);
                return _0x25eb80;
            })
        }
    };
    _0x398be['pseudos']['nth'] = _0x398be['pseudos']['eq'];
    for (_0x49c4c2 in {
            'radio': !0x0,
            'checkbox': !0x0,
            'file': !0x0,
            'password': !0x0,
            'image': !0x0
        }) _0x398be['pseudos'][_0x49c4c2] = _0x434791(_0x49c4c2);
    for (_0x49c4c2 in {
            'submit': !0x0,
            'reset': !0x0
        }) _0x398be['pseudos'][_0x49c4c2] = _0x5687fe(_0x49c4c2);
    _0x159f6e['prototype'] = _0x398be['filters'] = _0x398be['pseudos'];
    _0x398be['setFilters'] = new _0x159f6e();
    _0x475749 = _0x227aa5['tokenize'] = function(_0x2c1efc, _0x56ef85) {
        var _0x2ae7fd, _0x31a188, _0x3917c4, _0x28d382, _0xedfd1, _0x2acb7d, _0x47227a;
        if (_0xedfd1 = _0x3a8547[_0x2c1efc + ' ']) return _0x56ef85 ? 0x0 : _0xedfd1['slice'](0x0);
        _0xedfd1 = _0x2c1efc;
        _0x2acb7d = [];
        for (_0x47227a = _0x398be['preFilter']; _0xedfd1;) {
            _0x2ae7fd && !(_0x31a188 = _0x4929c8['exec'](_0xedfd1)) || (_0x31a188 && (_0xedfd1 = _0xedfd1['slice'](_0x31a188[0x0]['length']) || _0xedfd1), _0x2acb7d['push'](_0x3917c4 = []));
            _0x2ae7fd = !0x1;
            (_0x31a188 = _0x2fd1f4['exec'](_0xedfd1)) && (_0x2ae7fd = _0x31a188['shift'](), _0x3917c4['push']({
                'value': _0x2ae7fd,
                'type': _0x31a188[0x0]['replace'](_0x47cd5c, ' ')
            }), _0xedfd1 = _0xedfd1['slice'](_0x2ae7fd['length']));
            for (_0x28d382 in _0x398be['filter']) !(_0x31a188 = _0x4d91ae[_0x28d382]['exec'](_0xedfd1)) || _0x47227a[_0x28d382] && !(_0x31a188 = _0x47227a[_0x28d382](_0x31a188)) || (_0x2ae7fd = _0x31a188['shift'](), _0x3917c4['push']({
                'value': _0x2ae7fd,
                'type': _0x28d382,
                'matches': _0x31a188
            }), _0xedfd1 = _0xedfd1['slice'](_0x2ae7fd['length']));
            if (!_0x2ae7fd) break;
        }
        return _0x56ef85 ? _0xedfd1['length'] : _0xedfd1 ? _0x227aa5['error'](_0x2c1efc) : _0x3a8547(_0x2c1efc, _0x2acb7d)['slice'](0x0);
    };
    _0x4cc3b6 = (_0x1482d8 = _0x227aa5['compile'] = function(_0x4740eb, _0x5a4977) {
        var _0x2e03d9, _0x282075 = [],
            _0x57d238 = [],
            _0x1d7a52 = _0x38c152[_0x4740eb + ' '];
        if (!_0x1d7a52) {
            _0x5a4977 || (_0x5a4977 = _0x475749(_0x4740eb));
            for (_0x2e03d9 = _0x5a4977['length']; _0x2e03d9--;) _0x1d7a52 = _0x352d48(_0x5a4977[_0x2e03d9]), _0x1d7a52[_0x187ba2] ? _0x282075['push'](_0x1d7a52) : _0x57d238['push'](_0x1d7a52);
            _0x2e03d9 = _0x38c152;
            var _0x195675 = 0x0 < _0x282075['length'],
                _0x57da11 = 0x0 < _0x57d238['length'],
                _0x1d7a52 = function(_0x2a855a, _0x2ea8b3, _0x32d1b4, _0x23053d, _0x4d40a7) {
                    var _0x29b913, _0x3709e3, _0x5b535f, _0x181614 = 0x0,
                        _0x1b01de = '0',
                        _0x3dce11 = _0x2a855a && [],
                        _0x246e45 = [],
                        _0x4d2035 = _0x2e4992,
                        _0x45154e = _0x2a855a || _0x57da11 && _0x398be['find']['TAG']('*', _0x4d40a7),
                        _0x49bdb3 = _0x212e5e += null == _0x4d2035 ? 0x1 : Math['random']() || 0.1,
                        _0x235ad5 = _0x45154e['length'];
                    for (_0x4d40a7 && (_0x2e4992 = _0x2ea8b3 === _0x425c27 || _0x2ea8b3 || _0x4d40a7); _0x1b01de !== _0x235ad5 && null != (_0x29b913 = _0x45154e[_0x1b01de]); _0x1b01de++) {
                        if (_0x57da11 && _0x29b913) {
                            _0x3709e3 = 0x0;
                            for (_0x2ea8b3 || _0x29b913['ownerDocument'] === _0x425c27 || (_0xe41a91(_0x29b913), _0x32d1b4 = !_0xd3b329); _0x5b535f = _0x57d238[_0x3709e3++];)
                                if (_0x5b535f(_0x29b913, _0x2ea8b3 || _0x425c27, _0x32d1b4)) {
                                    _0x23053d['push'](_0x29b913);
                                    break;
                                }
                            _0x4d40a7 && (_0x212e5e = _0x49bdb3);
                        }
                        _0x195675 && ((_0x29b913 = !_0x5b535f && _0x29b913) && _0x181614--, _0x2a855a && _0x3dce11['push'](_0x29b913));
                    }
                    if (_0x181614 += _0x1b01de, _0x195675 && _0x1b01de !== _0x181614) {
                        for (_0x3709e3 = 0x0; _0x5b535f = _0x282075[_0x3709e3++];) _0x5b535f(_0x3dce11, _0x246e45, _0x2ea8b3, _0x32d1b4);
                        if (_0x2a855a) {
                            if (0x0 < _0x181614)
                                for (; _0x1b01de--;) _0x3dce11[_0x1b01de] || _0x246e45[_0x1b01de] || (_0x246e45[_0x1b01de] = _0x4cdb91['call'](_0x23053d));
                            _0x246e45 = _0x4e5d68(_0x246e45);
                        }
                        _0x3ac621['apply'](_0x23053d, _0x246e45);
                        _0x4d40a7 && !_0x2a855a && 0x0 < _0x246e45['length'] && 0x1 < _0x181614 + _0x282075['length'] && _0x227aa5['uniqueSort'](_0x23053d);
                    }
                    return _0x4d40a7 && (_0x212e5e = _0x49bdb3, _0x2e4992 = _0x4d2035), _0x3dce11;
                },
                _0x1d7a52 = _0x195675 ? _0x59a74f(_0x1d7a52) : _0x1d7a52,
                _0x1d7a52 = _0x2e03d9(_0x4740eb, _0x1d7a52);
            _0x1d7a52['selector'] = _0x4740eb;
        }
        return _0x1d7a52;
    }, _0x1bc3f0 = _0x227aa5['select'] = function(_0x570c3d, _0x3db54c, _0x3be599, _0x1fb9dd) {
        var _0x559c43, _0x2999e7, _0x4e46f1, _0x4504b7, _0x4dfd74, _0x5d23b3 = 'function' == typeof _0x570c3d && _0x570c3d,
            _0x4c7cfd = !_0x1fb9dd && _0x475749(_0x570c3d = _0x5d23b3['selector'] || _0x570c3d);
        if (_0x3be599 = _0x3be599 || [], 0x1 === _0x4c7cfd['length']) {
            if (_0x2999e7 = _0x4c7cfd[0x0] = _0x4c7cfd[0x0]['slice'](0x0), 0x2 < _0x2999e7['length'] && 'ID' === (_0x4e46f1 = _0x2999e7[0x0])['type'] && 0x9 === _0x3db54c['nodeType'] && _0xd3b329 && _0x398be['relative'][_0x2999e7[0x1]['type']]) {
                if (_0x3db54c = (_0x398be['find']['ID'](_0x4e46f1['matches'][0x0]['replace'](_0x3c7a28, _0x326953), _0x3db54c) || [])[0x0], !_0x3db54c) return _0x3be599;
                _0x5d23b3 && (_0x3db54c = _0x3db54c['parentNode']);
                _0x570c3d = _0x570c3d['slice'](_0x2999e7['shift']()['value']['length']);
            }
            for (_0x559c43 = _0x4d91ae['needsContext']['test'](_0x570c3d) ? 0x0 : _0x2999e7['length']; _0x559c43-- && !(_0x4e46f1 = _0x2999e7[_0x559c43], _0x398be['relative'][_0x4504b7 = _0x4e46f1['type']]);)
                if ((_0x4dfd74 = _0x398be['find'][_0x4504b7]) && (_0x1fb9dd = _0x4dfd74(_0x4e46f1['matches'][0x0]['replace'](_0x3c7a28, _0x326953), _0x183831['test'](_0x2999e7[0x0]['type']) && _0x22872f(_0x3db54c['parentNode']) || _0x3db54c))) {
                    if (_0x2999e7['splice'](_0x559c43, 0x1), _0x570c3d = _0x1fb9dd['length'] && _0x5e4ddd(_0x2999e7), !_0x570c3d) return _0x3ac621['apply'](_0x3be599, _0x1fb9dd), _0x3be599;
                    break;
                }
        }
        return (_0x5d23b3 || _0x1482d8(_0x570c3d, _0x4c7cfd))(_0x1fb9dd, _0x3db54c, !_0xd3b329, _0x3be599, !_0x3db54c || _0x183831['test'](_0x570c3d) && _0x22872f(_0x3db54c['parentNode']) || _0x3db54c), _0x3be599;
    }, _0x23f74e['sortStable'] = _0x187ba2['split']('')['sort'](_0x5d103b)['join']('') === _0x187ba2, _0x23f74e['detectDuplicates'] = !!_0x4caa1f, _0xe41a91(), _0x23f74e['sortDetached'] = _0x3597a5(function(_0x4f862f) {
        return 0x1 & _0x4f862f['compareDocumentPosition'](_0x425c27['createElement']('fieldset'));
    }), _0x3597a5(function(_0x37883f) {
        return _0x37883f['innerHTML'] = '<a href=\x27#\x27></a>', '#' === _0x37883f['firstChild']['getAttribute']('href');
    }) || _0x848dd2('type|href|height|width', function(_0x34a025, _0x628373, _0x29d4ac) {
        if (!_0x29d4ac) return _0x34a025['getAttribute'](_0x628373, 'type' === _0x628373['toLowerCase']() ? 0x1 : 0x2);
    }), _0x23f74e['attributes'] && _0x3597a5(function(_0x5e01ba) {
        return _0x5e01ba['innerHTML'] = '<input/>', _0x5e01ba['firstChild']['setAttribute']('value', ''), '' === _0x5e01ba['firstChild']['getAttribute']('value');
    }) || _0x848dd2('value', function(_0xef0244, _0x5a5ca8, _0x26adc3) {
        if (!_0x26adc3 && 'input' === _0xef0244['nodeName']['toLowerCase']()) return _0xef0244['defaultValue'];
    }), _0x3597a5(function(_0x2aaa61) {
        return null == _0x2aaa61['getAttribute']('disabled');
    }) || _0x848dd2('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function(_0xf0901e, _0x565f08, _0x2f77a0) {
        var _0x9b4abb;
        if (!_0x2f77a0) return !0x0 === _0xf0901e[_0x565f08] ? _0x565f08['toLowerCase']() : (_0x9b4abb = _0xf0901e['getAttributeNode'](_0x565f08)) && _0x9b4abb['specified'] ? _0x9b4abb['value'] : null;
    }), _0x227aa5);
    _0x2139f7['find'] = _0x4cc3b6;
    _0x2139f7['expr'] = _0x4cc3b6['selectors'];
    _0x2139f7['expr'][':'] = _0x2139f7['expr']['pseudos'];
    _0x2139f7['uniqueSort'] = _0x2139f7['unique'] = _0x4cc3b6['uniqueSort'];
    _0x2139f7['text'] = _0x4cc3b6['getText'];
    _0x2139f7['isXMLDoc'] = _0x4cc3b6['isXML'];
    _0x2139f7['contains'] = _0x4cc3b6['contains'];
    _0x2139f7['escapeSelector'] = _0x4cc3b6['escape'];
    var _0x1aec4e = function(_0x8f458a, _0x51ecab, _0x33f904) {
            for (var _0x191830 = [], _0xa95331 = void 0x0 !== _0x33f904;
                (_0x8f458a = _0x8f458a[_0x51ecab]) && 0x9 !== _0x8f458a['nodeType'];)
                if (0x1 === _0x8f458a['nodeType']) {
                    if (_0xa95331 && _0x2139f7(_0x8f458a)['is'](_0x33f904)) break;
                    _0x191830['push'](_0x8f458a);
                }
            return _0x191830;
        },
        _0x3e40af = function(_0x517c45, _0xab2d96) {
            for (var _0x308885 = []; _0x517c45; _0x517c45 = _0x517c45['nextSibling']) 0x1 === _0x517c45['nodeType'] && _0x517c45 !== _0xab2d96 && _0x308885['push'](_0x517c45);
            return _0x308885;
        },
        _0x26e75f = _0x2139f7['expr']['match']['needsContext'],
        _0x1693c2 = /^<([a-z][^\/\0>: \t\r\n\f]*)[ \t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        _0x2608eb = /^.[^:#\[\.,]*$/;
    _0x2139f7['filter'] = function(_0x31a995, _0x3fcee9, _0x44e686) {
        var _0x261ca9 = _0x3fcee9[0x0];
        return _0x44e686 && (_0x31a995 = ':not(' + _0x31a995 + ')'), 0x1 === _0x3fcee9['length'] && 0x1 === _0x261ca9['nodeType'] ? _0x2139f7['find']['matchesSelector'](_0x261ca9, _0x31a995) ? [_0x261ca9] : [] : _0x2139f7['find']['matches'](_0x31a995, _0x2139f7['grep'](_0x3fcee9, function(_0x382aa6) {
            return 0x1 === _0x382aa6['nodeType'];
        }));
    };
    _0x2139f7['fn']['extend']({
        'find': function(_0x575ab1) {
            var _0x216980, _0x2d1906, _0x846e02 = this['length'],
                _0x40d877 = this;
            if ('string' != typeof _0x575ab1) return this['pushStack'](_0x2139f7(_0x575ab1)['filter'](function() {
                for (_0x216980 = 0x0; _0x216980 < _0x846e02; _0x216980++)
                    if (_0x2139f7['contains'](_0x40d877[_0x216980], this)) return !0x0;
            }));
            _0x2d1906 = this['pushStack']([]);
            for (_0x216980 = 0x0; _0x216980 < _0x846e02; _0x216980++) _0x2139f7['find'](_0x575ab1, _0x40d877[_0x216980], _0x2d1906);
            return 0x1 < _0x846e02 ? _0x2139f7['uniqueSort'](_0x2d1906) : _0x2d1906;
        },
        'filter': function(_0x299c0c) {
            return this['pushStack'](_0x11be12(this, _0x299c0c || [], !0x1));
        },
        'not': function(_0x17618e) {
            return this['pushStack'](_0x11be12(this, _0x17618e || [], !0x0));
        },
        'is': function(_0x4acabe) {
            return !!_0x11be12(this, 'string' == typeof _0x4acabe && _0x26e75f['test'](_0x4acabe) ? _0x2139f7(_0x4acabe) : _0x4acabe || [], !0x1)['length'];
        }
    });
    var _0xe12b8d, _0x282133 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_0x2139f7['fn']['init'] = function(_0x1bd131, _0x88f759, _0x590ef9) {
        var _0x4cd5a4, _0x457f57;
        if (!_0x1bd131) return this;
        if (_0x590ef9 = _0x590ef9 || _0xe12b8d, 'string' == typeof _0x1bd131) {
            if (_0x4cd5a4 = '<' === _0x1bd131[0x0] && '>' === _0x1bd131[_0x1bd131['length'] - 0x1] && 0x3 <= _0x1bd131['length'] ? [null, _0x1bd131, null] : _0x282133['exec'](_0x1bd131), !_0x4cd5a4 || !_0x4cd5a4[0x1] && _0x88f759) return !_0x88f759 || _0x88f759['jquery'] ? (_0x88f759 || _0x590ef9)['find'](_0x1bd131) : this['constructor'](_0x88f759)['find'](_0x1bd131);
            if (_0x4cd5a4[0x1]) {
                if (_0x88f759 = _0x88f759 instanceof _0x2139f7 ? _0x88f759[0x0] : _0x88f759, _0x2139f7['merge'](this, _0x2139f7['parseHTML'](_0x4cd5a4[0x1], _0x88f759 && _0x88f759['nodeType'] ? _0x88f759['ownerDocument'] || _0x88f759 : _0x175e87, !0x0)), _0x1693c2['test'](_0x4cd5a4[0x1]) && _0x2139f7['isPlainObject'](_0x88f759))
                    for (_0x4cd5a4 in _0x88f759) _0x2139f7['isFunction'](this[_0x4cd5a4]) ? this[_0x4cd5a4](_0x88f759[_0x4cd5a4]) : this['attr'](_0x4cd5a4, _0x88f759[_0x4cd5a4]);
                return this;
            }
            return _0x457f57 = _0x175e87['getElementById'](_0x4cd5a4[0x2]), _0x457f57 && (this[0x0] = _0x457f57, this['length'] = 0x1), this;
        }
        return _0x1bd131['nodeType'] ? (this[0x0] = _0x1bd131, this['length'] = 0x1, this) : _0x2139f7['isFunction'](_0x1bd131) ? void 0x0 !== _0x590ef9['ready'] ? _0x590ef9['ready'](_0x1bd131) : _0x1bd131(_0x2139f7) : _0x2139f7['makeArray'](_0x1bd131, this);
    })['prototype'] = _0x2139f7['fn'];
    _0xe12b8d = _0x2139f7(_0x175e87);
    var _0x36f77c = /^(?:parents|prev(?:Until|All))/,
        _0x577245 = {
            'children': !0x0,
            'contents': !0x0,
            'next': !0x0,
            'prev': !0x0
        };
    _0x2139f7['fn']['extend']({
        'has': function(_0x3da961) {
            var _0x40926a = _0x2139f7(_0x3da961, this),
                _0x3ccc88 = _0x40926a['length'];
            return this['filter'](function() {
                for (var _0xad9e62 = 0x0; _0xad9e62 < _0x3ccc88; _0xad9e62++)
                    if (_0x2139f7['contains'](this, _0x40926a[_0xad9e62])) return !0x0;
            });
        },
        'closest': function(_0x593bbe, _0xa65206) {
            var _0x1c65f8, _0x4ce510 = 0x0,
                _0xff3e5a = this['length'],
                _0x3162e3 = [],
                _0x1cf452 = 'string' != typeof _0x593bbe && _0x2139f7(_0x593bbe);
            if (!_0x26e75f['test'](_0x593bbe))
                for (; _0x4ce510 < _0xff3e5a; _0x4ce510++)
                    for (_0x1c65f8 = this[_0x4ce510]; _0x1c65f8 && _0x1c65f8 !== _0xa65206; _0x1c65f8 = _0x1c65f8['parentNode'])
                        if (0xb > _0x1c65f8['nodeType'] && (_0x1cf452 ? -0x1 < _0x1cf452['index'](_0x1c65f8) : 0x1 === _0x1c65f8['nodeType'] && _0x2139f7['find']['matchesSelector'](_0x1c65f8, _0x593bbe))) {
                            _0x3162e3['push'](_0x1c65f8);
                            break;
                        }
            return this['pushStack'](0x1 < _0x3162e3['length'] ? _0x2139f7['uniqueSort'](_0x3162e3) : _0x3162e3);
        },
        'index': function(_0x36b85b) {
            return _0x36b85b ? 'string' == typeof _0x36b85b ? _0x497165['call'](_0x2139f7(_0x36b85b), this[0x0]) : _0x497165['call'](this, _0x36b85b['jquery'] ? _0x36b85b[0x0] : _0x36b85b) : this[0x0] && this[0x0]['parentNode'] ? this['first']()['prevAll']()['length'] : -0x1;
        },
        'add': function(_0x1e9057, _0x48ff9f) {
            return this['pushStack'](_0x2139f7['uniqueSort'](_0x2139f7['merge'](this['get'](), _0x2139f7(_0x1e9057, _0x48ff9f))));
        },
        'addBack': function(_0xe004ed) {
            return this['add'](null == _0xe004ed ? this['prevObject'] : this['prevObject']['filter'](_0xe004ed));
        }
    });
    _0x2139f7['each']({
        'parent': function(_0x2d15c8) {
            return (_0x2d15c8 = _0x2d15c8['parentNode']) && 0xb !== _0x2d15c8['nodeType'] ? _0x2d15c8 : null;
        },
        'parents': function(_0x2f9b06) {
            return _0x1aec4e(_0x2f9b06, 'parentNode');
        },
        'parentsUntil': function(_0x4ccf3b, _0x51e86c, _0xe8cc89) {
            return _0x1aec4e(_0x4ccf3b, 'parentNode', _0xe8cc89);
        },
        'next': function(_0x1bbd49) {
            return _0xc8f7bc(_0x1bbd49, 'nextSibling');
        },
        'prev': function(_0x117245) {
            return _0xc8f7bc(_0x117245, 'previousSibling');
        },
        'nextAll': function(_0x1658b3) {
            return _0x1aec4e(_0x1658b3, 'nextSibling');
        },
        'prevAll': function(_0x4e7ad8) {
            return _0x1aec4e(_0x4e7ad8, 'previousSibling');
        },
        'nextUntil': function(_0x235afe, _0x24a4df, _0xc556f0) {
            return _0x1aec4e(_0x235afe, 'nextSibling', _0xc556f0);
        },
        'prevUntil': function(_0x114482, _0xb1ec1, _0x536318) {
            return _0x1aec4e(_0x114482, 'previousSibling', _0x536318);
        },
        'siblings': function(_0x3b5559) {
            return _0x3e40af((_0x3b5559['parentNode'] || {})['firstChild'], _0x3b5559);
        },
        'children': function(_0x134e6b) {
            return _0x3e40af(_0x134e6b['firstChild']);
        },
        'contents': function(_0x5b1dfe) {
            return _0x443dae(_0x5b1dfe, 'iframe') ? _0x5b1dfe['contentDocument'] : (_0x443dae(_0x5b1dfe, 'template') && (_0x5b1dfe = _0x5b1dfe['content'] || _0x5b1dfe), _0x2139f7['merge']([], _0x5b1dfe['childNodes']));
        }
    }, function(_0x52b3f1, _0x4678d5) {
        _0x2139f7['fn'][_0x52b3f1] = function(_0x50953d, _0x51855b) {
            var _0x3c47c8 = _0x2139f7['map'](this, _0x4678d5, _0x50953d);
            return 'Until' !== _0x52b3f1['slice'](-0x5) && (_0x51855b = _0x50953d), _0x51855b && 'string' == typeof _0x51855b && (_0x3c47c8 = _0x2139f7['filter'](_0x51855b, _0x3c47c8)), 0x1 < this['length'] && (_0x577245[_0x52b3f1] || _0x2139f7['uniqueSort'](_0x3c47c8), _0x36f77c['test'](_0x52b3f1) && _0x3c47c8['reverse']()), this['pushStack'](_0x3c47c8);
        };
    });
    var _0x18f593 = /[^ \t\r\n\f]+/g;
    _0x2139f7['Callbacks'] = function(_0xab0eb6) {
        var _0x131587;
        if ('string' == typeof _0xab0eb6) {
            var _0x4c2417 = {};
            _0x131587 = (_0x2139f7['each'](_0xab0eb6['match'](_0x18f593) || [], function(_0x58b089, _0x2554de) {
                _0x4c2417[_0x2554de] = !0x0;
            }), _0x4c2417);
        } else _0x131587 = _0x2139f7['extend']({}, _0xab0eb6);
        _0xab0eb6 = _0x131587;
        var _0x46a29e, _0x1246af, _0x439068, _0x38287a, _0x38ffe3 = [],
            _0x519c42 = [],
            _0x21ec22 = -0x1,
            _0x1da594 = function() {
                _0x38287a = _0x38287a || _0xab0eb6['once'];
                for (_0x439068 = _0x46a29e = !0x0; _0x519c42['length']; _0x21ec22 = -0x1)
                    for (_0x1246af = _0x519c42['shift'](); ++_0x21ec22 < _0x38ffe3['length'];) !0x1 === _0x38ffe3[_0x21ec22]['apply'](_0x1246af[0x0], _0x1246af[0x1]) && _0xab0eb6['stopOnFalse'] && (_0x21ec22 = _0x38ffe3['length'], _0x1246af = !0x1);
                _0xab0eb6['memory'] || (_0x1246af = !0x1);
                _0x46a29e = !0x1;
                _0x38287a && (_0x38ffe3 = _0x1246af ? [] : '');
            },
            _0x5ce4c4 = {
                'add': function() {
                    return _0x38ffe3 && (_0x1246af && !_0x46a29e && (_0x21ec22 = _0x38ffe3['length'] - 0x1, _0x519c42['push'](_0x1246af)), function _0x2dc8a5(_0x610233) {
                        _0x2139f7['each'](_0x610233, function(_0x52c68f, _0x339526) {
                            _0x2139f7['isFunction'](_0x339526) ? _0xab0eb6['unique'] && _0x5ce4c4['has'](_0x339526) || _0x38ffe3['push'](_0x339526) : _0x339526 && _0x339526['length'] && 'string' !== _0x2139f7['type'](_0x339526) && _0x2dc8a5(_0x339526);
                        });
                    }(arguments), _0x1246af && !_0x46a29e && _0x1da594()), this;
                },
                'remove': function() {
                    return _0x2139f7['each'](arguments, function(_0x1542ac, _0x15e71b) {
                        for (var _0x4c7773; - 0x1 < (_0x4c7773 = _0x2139f7['inArray'](_0x15e71b, _0x38ffe3, _0x4c7773));) _0x38ffe3['splice'](_0x4c7773, 0x1), _0x4c7773 <= _0x21ec22 && _0x21ec22--;
                    }), this;
                },
                'has': function(_0x1aa4fa) {
                    return _0x1aa4fa ? -0x1 < _0x2139f7['inArray'](_0x1aa4fa, _0x38ffe3) : 0x0 < _0x38ffe3['length'];
                },
                'empty': function() {
                    return _0x38ffe3 && (_0x38ffe3 = []), this;
                },
                'disable': function() {
                    return _0x38287a = _0x519c42 = [], _0x38ffe3 = _0x1246af = '', this;
                },
                'disabled': function() {
                    return !_0x38ffe3;
                },
                'lock': function() {
                    return _0x38287a = _0x519c42 = [], _0x1246af || _0x46a29e || (_0x38ffe3 = _0x1246af = ''), this;
                },
                'locked': function() {
                    return !!_0x38287a;
                },
                'fireWith': function(_0x49b844, _0x49986d) {
                    return _0x38287a || (_0x49986d = _0x49986d || [], _0x49986d = [_0x49b844, _0x49986d['slice'] ? _0x49986d['slice']() : _0x49986d], _0x519c42['push'](_0x49986d), _0x46a29e || _0x1da594()), this;
                },
                'fire': function() {
                    return _0x5ce4c4['fireWith'](this, arguments), this;
                },
                'fired': function() {
                    return !!_0x439068;
                }
            };
        return _0x5ce4c4;
    };
    _0x2139f7['extend']({
        'Deferred': function(_0x52f2cd) {
            var _0x123300 = [
                    ['notify', 'progress', _0x2139f7['Callbacks']('memory'), _0x2139f7['Callbacks']('memory'), 0x2],
                    ['resolve', 'done', _0x2139f7['Callbacks']('once memory'), _0x2139f7['Callbacks']('once memory'), 0x0, 'resolved'],
                    ['reject', 'fail', _0x2139f7['Callbacks']('once memory'), _0x2139f7['Callbacks']('once memory'), 0x1, 'rejected']
                ],
                _0x22d832 = 'pending',
                _0x3b4484 = {
                    'state': function() {
                        return _0x22d832;
                    },
                    'always': function() {
                        return _0x527d4f['done'](arguments)['fail'](arguments), this;
                    },
                    'catch': function(_0x5d5690) {
                        return _0x3b4484['then'](null, _0x5d5690);
                    },
                    'pipe': function() {
                        var _0x384649 = arguments;
                        return _0x2139f7['Deferred'](function(_0x3b70dd) {
                            _0x2139f7['each'](_0x123300, function(_0x46c8ce, _0x32fd59) {
                                var _0x18773b = _0x2139f7['isFunction'](_0x384649[_0x32fd59[0x4]]) && _0x384649[_0x32fd59[0x4]];
                                _0x527d4f[_0x32fd59[0x1]](function() {
                                    var _0x439f5c = _0x18773b && _0x18773b['apply'](this, arguments);
                                    _0x439f5c && _0x2139f7['isFunction'](_0x439f5c['promise']) ? _0x439f5c['promise']()['progress'](_0x3b70dd['notify'])['done'](_0x3b70dd['resolve'])['fail'](_0x3b70dd['reject']) : _0x3b70dd[_0x32fd59[0x0] + 'With'](this, _0x18773b ? [_0x439f5c] : arguments);
                                });
                            });
                            _0x384649 = null;
                        })['promise']();
                    },
                    'then': function(_0x1654da, _0x32dfe0, _0x4555f1) {
                        function _0x169ece(_0x53c881, _0x38d443, _0x4e77f6, _0x51e531) {
                            return function() {
                                var _0x1b5220 = this,
                                    _0x111b95 = arguments,
                                    _0x119dd1 = function() {
                                        var _0x141150, _0x4fb223;
                                        if (!(_0x53c881 < _0x410185)) {
                                            if (_0x141150 = _0x4e77f6['apply'](_0x1b5220, _0x111b95), _0x141150 === _0x38d443['promise']()) throw new TypeError('Thenable self-resolution');
                                            _0x4fb223 = _0x141150 && ('object' == typeof _0x141150 || 'function' == typeof _0x141150) && _0x141150['then'];
                                            _0x2139f7['isFunction'](_0x4fb223) ? _0x51e531 ? _0x4fb223['call'](_0x141150, _0x169ece(_0x410185, _0x38d443, _0x2d0e41, _0x51e531), _0x169ece(_0x410185, _0x38d443, _0x401840, _0x51e531)) : (_0x410185++, _0x4fb223['call'](_0x141150, _0x169ece(_0x410185, _0x38d443, _0x2d0e41, _0x51e531), _0x169ece(_0x410185, _0x38d443, _0x401840, _0x51e531), _0x169ece(_0x410185, _0x38d443, _0x2d0e41, _0x38d443['notifyWith']))) : (_0x4e77f6 !== _0x2d0e41 && (_0x1b5220 = void 0x0, _0x111b95 = [_0x141150]), (_0x51e531 || _0x38d443['resolveWith'])(_0x1b5220, _0x111b95));
                                        }
                                    },
                                    _0xd5a4 = _0x51e531 ? _0x119dd1 : function() {
                                        try {
                                            _0x119dd1();
                                        } catch (_0x1bef9a) {
                                            _0x2139f7['Deferred']['exceptionHook'] && _0x2139f7['Deferred']['exceptionHook'](_0x1bef9a, _0xd5a4['stackTrace']), _0x53c881 + 0x1 >= _0x410185 && (_0x4e77f6 !== _0x401840 && (_0x1b5220 = void 0x0, _0x111b95 = [_0x1bef9a]), _0x38d443['rejectWith'](_0x1b5220, _0x111b95));
                                        }
                                    };
                                _0x53c881 ? _0xd5a4() : (_0x2139f7['Deferred']['getStackHook'] && (_0xd5a4['stackTrace'] = _0x2139f7['Deferred']['getStackHook']()), _0x73c481['setTimeout'](_0xd5a4));
                            };
                        }
                        var _0x410185 = 0x0;
                        return _0x2139f7['Deferred'](function(_0x1f149c) {
                            _0x123300[0x0][0x3]['add'](_0x169ece(0x0, _0x1f149c, _0x2139f7['isFunction'](_0x4555f1) ? _0x4555f1 : _0x2d0e41, _0x1f149c['notifyWith']));
                            _0x123300[0x1][0x3]['add'](_0x169ece(0x0, _0x1f149c, _0x2139f7['isFunction'](_0x1654da) ? _0x1654da : _0x2d0e41));
                            _0x123300[0x2][0x3]['add'](_0x169ece(0x0, _0x1f149c, _0x2139f7['isFunction'](_0x32dfe0) ? _0x32dfe0 : _0x401840));
                        })['promise']();
                    },
                    'promise': function(_0x490f15) {
                        return null != _0x490f15 ? _0x2139f7['extend'](_0x490f15, _0x3b4484) : _0x3b4484;
                    }
                },
                _0x527d4f = {};
            return _0x2139f7['each'](_0x123300, function(_0x1ab9f7, _0x10de75) {
                var _0x4ec4d6 = _0x10de75[0x2],
                    _0x4c5ea3 = _0x10de75[0x5];
                _0x3b4484[_0x10de75[0x1]] = _0x4ec4d6['add'];
                _0x4c5ea3 && _0x4ec4d6['add'](function() {
                    _0x22d832 = _0x4c5ea3;
                }, _0x123300[0x3 - _0x1ab9f7][0x2]['disable'], _0x123300[0x0][0x2]['lock']);
                _0x4ec4d6['add'](_0x10de75[0x3]['fire']);
                _0x527d4f[_0x10de75[0x0]] = function() {
                    return _0x527d4f[_0x10de75[0x0] + 'With'](this === _0x527d4f ? void 0x0 : this, arguments), this;
                };
                _0x527d4f[_0x10de75[0x0] + 'With'] = _0x4ec4d6['fireWith'];
            }), _0x3b4484['promise'](_0x527d4f), _0x52f2cd && _0x52f2cd['call'](_0x527d4f, _0x527d4f), _0x527d4f;
        },
        'when': function(_0x4a6904) {
            var _0x462255 = arguments['length'],
                _0x1cbadf = _0x462255,
                _0x2998d1 = Array(_0x1cbadf),
                _0x10e236 = _0x3a69aa['call'](arguments),
                _0x12cf4f = _0x2139f7['Deferred'](),
                _0x560992 = function(_0x41e052) {
                    return function(_0x5ad62c) {
                        _0x2998d1[_0x41e052] = this;
                        _0x10e236[_0x41e052] = 0x1 < arguments['length'] ? _0x3a69aa['call'](arguments) : _0x5ad62c;
                        --_0x462255 || _0x12cf4f['resolveWith'](_0x2998d1, _0x10e236);
                    };
                };
            if (0x1 >= _0x462255 && (_0x35a097(_0x4a6904, _0x12cf4f['done'](_0x560992(_0x1cbadf))['resolve'], _0x12cf4f['reject'], !_0x462255), 'pending' === _0x12cf4f['state']() || _0x2139f7['isFunction'](_0x10e236[_0x1cbadf] && _0x10e236[_0x1cbadf]['then']))) return _0x12cf4f['then']();
            for (; _0x1cbadf--;) _0x35a097(_0x10e236[_0x1cbadf], _0x560992(_0x1cbadf), _0x12cf4f['reject']);
            return _0x12cf4f['promise']();
        }
    });
    var _0x58b415 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _0x2139f7['Deferred']['exceptionHook'] = function(_0x594040, _0x2c2bb7) {
        _0x73c481['console'] && _0x73c481['console']['warn'] && _0x594040 && _0x58b415['test'](_0x594040['name']) && _0x73c481['console']['warn']('jQuery.Deferred exception: ' + _0x594040['message'], _0x594040['stack'], _0x2c2bb7);
    };
    _0x2139f7['readyException'] = function(_0x37be90) {
        _0x73c481['setTimeout'](function() {
            throw _0x37be90;
        });
    };
    var _0x19ca5b = _0x2139f7['Deferred']();
    _0x2139f7['fn']['ready'] = function(_0x3cfc66) {
        return _0x19ca5b['then'](_0x3cfc66)['catch'](function(_0x4ed3ed) {
            _0x2139f7['readyException'](_0x4ed3ed);
        }), this;
    };
    _0x2139f7['extend']({
        'isReady': !0x1,
        'readyWait': 0x1,
        'ready': function(_0x4e7f53) {
            (!0x0 === _0x4e7f53 ? --_0x2139f7['readyWait'] : _0x2139f7['isReady']) || (_0x2139f7['isReady'] = !0x0, !0x0 !== _0x4e7f53 && 0x0 < --_0x2139f7['readyWait'] || _0x19ca5b['resolveWith'](_0x175e87, [_0x2139f7]));
        }
    });
    _0x2139f7['ready']['then'] = _0x19ca5b['then'];
    'complete' === _0x175e87['readyState'] || 'loading' !== _0x175e87['readyState'] && !_0x175e87['documentElement']['doScroll'] ? _0x73c481['setTimeout'](_0x2139f7['ready']) : (_0x175e87['addEventListener']('DOMContentLoaded', _0xbf322f), _0x73c481['addEventListener']('load', _0xbf322f));
    var _0x4c2afe = function(_0x57db49, _0x4fda01, _0x3bd613, _0xd5e828, _0x185f10, _0x5c3e52, _0x10c9cd) {
            var _0x332e3a = 0x0,
                _0x1de330 = _0x57db49['length'],
                _0x17e541 = null == _0x3bd613;
            if ('object' === _0x2139f7['type'](_0x3bd613))
                for (_0x332e3a in (_0x185f10 = !0x0, _0x3bd613)) _0x4c2afe(_0x57db49, _0x4fda01, _0x332e3a, _0x3bd613[_0x332e3a], !0x0, _0x5c3e52, _0x10c9cd);
            else if (void 0x0 !== _0xd5e828 && (_0x185f10 = !0x0, _0x2139f7['isFunction'](_0xd5e828) || (_0x10c9cd = !0x0), _0x17e541 && (_0x10c9cd ? (_0x4fda01['call'](_0x57db49, _0xd5e828), _0x4fda01 = null) : (_0x17e541 = _0x4fda01, _0x4fda01 = function(_0x205a2d, _0x2e3b9a, _0x4afcd9) {
                    return _0x17e541['call'](_0x2139f7(_0x205a2d), _0x4afcd9);
                })), _0x4fda01))
                for (; _0x332e3a < _0x1de330; _0x332e3a++) _0x4fda01(_0x57db49[_0x332e3a], _0x3bd613, _0x10c9cd ? _0xd5e828 : _0xd5e828['call'](_0x57db49[_0x332e3a], _0x332e3a, _0x4fda01(_0x57db49[_0x332e3a], _0x3bd613)));
            return _0x185f10 ? _0x57db49 : _0x17e541 ? _0x4fda01['call'](_0x57db49) : _0x1de330 ? _0x4fda01(_0x57db49[0x0], _0x3bd613) : _0x5c3e52;
        },
        _0x916fc0 = function(_0x2dbb69) {
            return 0x1 === _0x2dbb69['nodeType'] || 0x9 === _0x2dbb69['nodeType'] || !+_0x2dbb69['nodeType'];
        };
    _0x1c03e0['uid'] = 0x1;
    _0x1c03e0['prototype'] = {
        'cache': function(_0x4395b6) {
            var _0x579c32 = _0x4395b6[this['expando']];
            return _0x579c32 || (_0x579c32 = {}, _0x916fc0(_0x4395b6) && (_0x4395b6['nodeType'] ? _0x4395b6[this['expando']] = _0x579c32 : Object['defineProperty'](_0x4395b6, this['expando'], {
                'value': _0x579c32,
                'configurable': !0x0
            }))), _0x579c32;
        },
        'set': function(_0x56f0b2, _0x591e63, _0xe36bc7) {
            var _0x2d90e1;
            _0x56f0b2 = this['cache'](_0x56f0b2);
            if ('string' == typeof _0x591e63) _0x56f0b2[_0x2139f7['camelCase'](_0x591e63)] = _0xe36bc7;
            else
                for (_0x2d90e1 in _0x591e63) _0x56f0b2[_0x2139f7['camelCase'](_0x2d90e1)] = _0x591e63[_0x2d90e1];
            return _0x56f0b2;
        },
        'get': function(_0x6adc81, _0x520b05) {
            return void 0x0 === _0x520b05 ? this['cache'](_0x6adc81) : _0x6adc81[this['expando']] && _0x6adc81[this['expando']][_0x2139f7['camelCase'](_0x520b05)];
        },
        'access': function(_0x446b71, _0xb09421, _0x4f5cde) {
            return void 0x0 === _0xb09421 || _0xb09421 && 'string' == typeof _0xb09421 && void 0x0 === _0x4f5cde ? this['get'](_0x446b71, _0xb09421) : (this['set'](_0x446b71, _0xb09421, _0x4f5cde), void 0x0 !== _0x4f5cde ? _0x4f5cde : _0xb09421);
        },
        'remove': function(_0x15010f, _0x10d54a) {
            var _0x1a8f9e, _0x41d3eb = _0x15010f[this['expando']];
            if (void 0x0 !== _0x41d3eb) {
                if (void 0x0 !== _0x10d54a) {
                    Array['isArray'](_0x10d54a) ? _0x10d54a = _0x10d54a['map'](_0x2139f7['camelCase']) : (_0x10d54a = _0x2139f7['camelCase'](_0x10d54a), _0x10d54a = _0x10d54a in _0x41d3eb ? [_0x10d54a] : _0x10d54a['match'](_0x18f593) || []);
                    for (_0x1a8f9e = _0x10d54a['length']; _0x1a8f9e--;) delete _0x41d3eb[_0x10d54a[_0x1a8f9e]];
                }(void 0x0 === _0x10d54a || _0x2139f7['isEmptyObject'](_0x41d3eb)) && (_0x15010f['nodeType'] ? _0x15010f[this['expando']] = void 0x0 : delete _0x15010f[this['expando']]);
            }
        },
        'hasData': function(_0x5a7021) {
            _0x5a7021 = _0x5a7021[this['expando']];
            return void 0x0 !== _0x5a7021 && !_0x2139f7['isEmptyObject'](_0x5a7021);
        }
    };
    var _0x2c5ff7 = new _0x1c03e0(),
        _0x108b92 = new _0x1c03e0(),
        _0x47f69d = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _0x31191d = /[A-Z]/g;
    _0x2139f7['extend']({
        'hasData': function(_0x552a45) {
            return _0x108b92['hasData'](_0x552a45) || _0x2c5ff7['hasData'](_0x552a45);
        },
        'data': function(_0x50c695, _0x2b94e6, _0x16b2ab) {
            return _0x108b92['access'](_0x50c695, _0x2b94e6, _0x16b2ab);
        },
        'removeData': function(_0x25e325, _0x4a3ee4) {
            _0x108b92['remove'](_0x25e325, _0x4a3ee4);
        },
        '_data': function(_0xe8bcb8, _0x5cd26b, _0x2f50bd) {
            return _0x2c5ff7['access'](_0xe8bcb8, _0x5cd26b, _0x2f50bd);
        },
        '_removeData': function(_0x3d3855, _0x4c69d1) {
            _0x2c5ff7['remove'](_0x3d3855, _0x4c69d1);
        }
    });
    _0x2139f7['fn']['extend']({
        'data': function(_0x196020, _0x4520a2) {
            var _0x4b5b12, _0x5bcda7, _0x2ca2cb, _0x1a21d5 = this[0x0],
                _0x10985a = _0x1a21d5 && _0x1a21d5['attributes'];
            if (void 0x0 === _0x196020) {
                if (this['length'] && (_0x2ca2cb = _0x108b92['get'](_0x1a21d5), 0x1 === _0x1a21d5['nodeType'] && !_0x2c5ff7['get'](_0x1a21d5, 'hasDataAttrs'))) {
                    for (_0x4b5b12 = _0x10985a['length']; _0x4b5b12--;) _0x10985a[_0x4b5b12] && (_0x5bcda7 = _0x10985a[_0x4b5b12]['name'], 0x0 === _0x5bcda7['indexOf']('data-') && (_0x5bcda7 = _0x2139f7['camelCase'](_0x5bcda7['slice'](0x5)), _0x3fa05f(_0x1a21d5, _0x5bcda7, _0x2ca2cb[_0x5bcda7])));
                    _0x2c5ff7['set'](_0x1a21d5, 'hasDataAttrs', !0x0);
                }
                return _0x2ca2cb;
            }
            return 'object' == typeof _0x196020 ? this['each'](function() {
                _0x108b92['set'](this, _0x196020);
            }) : _0x4c2afe(this, function(_0x429591) {
                var _0x465f8a;
                if (_0x1a21d5 && void 0x0 === _0x429591) {
                    if ((_0x465f8a = _0x108b92['get'](_0x1a21d5, _0x196020), void 0x0 !== _0x465f8a) || (_0x465f8a = _0x3fa05f(_0x1a21d5, _0x196020), void 0x0 !== _0x465f8a)) return _0x465f8a;
                } else this['each'](function() {
                    _0x108b92['set'](this, _0x196020, _0x429591);
                });
            }, null, _0x4520a2, 0x1 < arguments['length'], null, !0x0);
        },
        'removeData': function(_0x40e0e9) {
            return this['each'](function() {
                _0x108b92['remove'](this, _0x40e0e9);
            });
        }
    });
    _0x2139f7['extend']({
        'queue': function(_0x2eaa90, _0x43e845, _0x11b4ae) {
            var _0x4d96c3;
            if (_0x2eaa90) return _0x43e845 = (_0x43e845 || 'fx') + 'queue', _0x4d96c3 = _0x2c5ff7['get'](_0x2eaa90, _0x43e845), _0x11b4ae && (!_0x4d96c3 || Array['isArray'](_0x11b4ae) ? _0x4d96c3 = _0x2c5ff7['access'](_0x2eaa90, _0x43e845, _0x2139f7['makeArray'](_0x11b4ae)) : _0x4d96c3['push'](_0x11b4ae)), _0x4d96c3 || [];
        },
        'dequeue': function(_0x231a31, _0x415f69) {
            _0x415f69 = _0x415f69 || 'fx';
            var _0x506742 = _0x2139f7['queue'](_0x231a31, _0x415f69),
                _0x5ea55f = _0x506742['length'],
                _0x3046c0 = _0x506742['shift'](),
                _0x3db324 = _0x2139f7['_queueHooks'](_0x231a31, _0x415f69),
                _0x4441be = function() {
                    _0x2139f7['dequeue'](_0x231a31, _0x415f69);
                };
            'inprogress' === _0x3046c0 && (_0x3046c0 = _0x506742['shift'](), _0x5ea55f--);
            _0x3046c0 && ('fx' === _0x415f69 && _0x506742['unshift']('inprogress'), delete _0x3db324['stop'], _0x3046c0['call'](_0x231a31, _0x4441be, _0x3db324));
            !_0x5ea55f && _0x3db324 && _0x3db324['empty']['fire']();
        },
        '_queueHooks': function(_0x28ebe9, _0x567d9a) {
            var _0x4a5442 = _0x567d9a + 'queueHooks';
            return _0x2c5ff7['get'](_0x28ebe9, _0x4a5442) || _0x2c5ff7['access'](_0x28ebe9, _0x4a5442, {
                'empty': _0x2139f7['Callbacks']('once memory')['add'](function() {
                    _0x2c5ff7['remove'](_0x28ebe9, [_0x567d9a + 'queue', _0x4a5442]);
                })
            });
        }
    });
    _0x2139f7['fn']['extend']({
        'queue': function(_0x33dea4, _0x244923) {
            var _0x16a9e0 = 0x2;
            return 'string' != typeof _0x33dea4 && (_0x244923 = _0x33dea4, _0x33dea4 = 'fx', _0x16a9e0--), arguments['length'] < _0x16a9e0 ? _0x2139f7['queue'](this[0x0], _0x33dea4) : void 0x0 === _0x244923 ? this : this['each'](function() {
                var _0x17a853 = _0x2139f7['queue'](this, _0x33dea4, _0x244923);
                _0x2139f7['_queueHooks'](this, _0x33dea4);
                'fx' === _0x33dea4 && 'inprogress' !== _0x17a853[0x0] && _0x2139f7['dequeue'](this, _0x33dea4);
            });
        },
        'dequeue': function(_0x59c42e) {
            return this['each'](function() {
                _0x2139f7['dequeue'](this, _0x59c42e);
            });
        },
        'clearQueue': function(_0xd7c09f) {
            return this['queue'](_0xd7c09f || 'fx', []);
        },
        'promise': function(_0x7dac33, _0x1a5276) {
            var _0x3fca85, _0x3dffa0 = 0x1,
                _0x49b4a1 = _0x2139f7['Deferred'](),
                _0x1d4ae7 = this,
                _0x5ccb95 = this['length'],
                _0x250b65 = function() {
                    --_0x3dffa0 || _0x49b4a1['resolveWith'](_0x1d4ae7, [_0x1d4ae7]);
                };
            'string' != typeof _0x7dac33 && (_0x1a5276 = _0x7dac33, _0x7dac33 = void 0x0);
            for (_0x7dac33 = _0x7dac33 || 'fx'; _0x5ccb95--;)(_0x3fca85 = _0x2c5ff7['get'](_0x1d4ae7[_0x5ccb95], _0x7dac33 + 'queueHooks')) && _0x3fca85['empty'] && (_0x3dffa0++, _0x3fca85['empty']['add'](_0x250b65));
            return _0x250b65(), _0x49b4a1['promise'](_0x1a5276);
        }
    });
    var _0x5d9e71 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ['source'],
        _0x277eb1 = RegExp('^(?:([+-])=|)(' + _0x5d9e71 + ')([a-z%]*)$', 'i'),
        _0x1430a7 = ['Top', 'Right', 'Bottom', 'Left'],
        _0x41a80d = function(_0x545306, _0x4923e3) {
            return _0x545306 = _0x4923e3 || _0x545306, 'none' === _0x545306['style']['display'] || '' === _0x545306['style']['display'] && _0x2139f7['contains'](_0x545306['ownerDocument'], _0x545306) && 'none' === _0x2139f7['css'](_0x545306, 'display');
        },
        _0x3152ae = function(_0xbc7614, _0x5a5561, _0x11b233, _0x56bc53) {
            var _0xf38fba, _0x422e19 = {};
            for (_0xf38fba in _0x5a5561) _0x422e19[_0xf38fba] = _0xbc7614['style'][_0xf38fba], _0xbc7614['style'][_0xf38fba] = _0x5a5561[_0xf38fba];
            _0x11b233 = _0x11b233['apply'](_0xbc7614, _0x56bc53 || []);
            for (_0xf38fba in _0x5a5561) _0xbc7614['style'][_0xf38fba] = _0x422e19[_0xf38fba];
            return _0x11b233;
        },
        _0x518a87 = {};
    _0x2139f7['fn']['extend']({
        'show': function() {
            return _0x34b295(this, !0x0);
        },
        'hide': function() {
            return _0x34b295(this);
        },
        'toggle': function(_0x45b5c6) {
            return 'boolean' == typeof _0x45b5c6 ? _0x45b5c6 ? this['show']() : this['hide']() : this['each'](function() {
                _0x41a80d(this) ? _0x2139f7(this)['show']() : _0x2139f7(this)['hide']();
            });
        }
    });
    var _0x2a4ece = /^(?:checkbox|radio)$/i,
        _0x5f0ecc = /<([a-z][^\/\0> \t\r\n\f]+)/i,
        _0x53fafb = /^$|\/(?:java|ecma)script/i,
        _0x57e4f1 = {
            'option': [0x1, '<select multiple=\x27multiple\x27>', '</select>'],
            'thead': [0x1, '<table>', '</table>'],
            'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
            'tr': [0x2, '<table><tbody>', '</tbody></table>'],
            'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
            '_default': [0x0, '', '']
        };
    _0x57e4f1['optgroup'] = _0x57e4f1['option'];
    _0x57e4f1['tbody'] = _0x57e4f1['tfoot'] = _0x57e4f1['colgroup'] = _0x57e4f1['caption'] = _0x57e4f1['thead'];
    _0x57e4f1['th'] = _0x57e4f1['td'];
    var _0x8e7318 = /<|&#?\w+;/,
        _0x2a4490 = _0x175e87['createDocumentFragment']()['appendChild'](_0x175e87['createElement']('div')),
        _0x2598dc = _0x175e87['createElement']('input');
    _0x2598dc['setAttribute']('type', 'radio');
    _0x2598dc['setAttribute']('checked', 'checked');
    _0x2598dc['setAttribute']('name', 't');
    _0x2a4490['appendChild'](_0x2598dc);
    _0x11c3a0['checkClone'] = _0x2a4490['cloneNode'](!0x0)['cloneNode'](!0x0)['lastChild']['checked'];
    _0x2a4490['innerHTML'] = '<textarea>x</textarea>';
    _0x11c3a0['noCloneChecked'] = !!_0x2a4490['cloneNode'](!0x0)['lastChild']['defaultValue'];
    !0x0;
    var _0x505235 = _0x175e87['documentElement'],
        _0x5394dd = /^key/,
        _0x5c76ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _0x1de06e = /^([^.]*)(?:\.(.+)|)/;
    _0x2139f7['event'] = {
        'global': {},
        'add': function(_0x31edd8, _0x48ba5d, _0x215bc3, _0x50efa7, _0x353e5a) {
            var _0x523ef2, _0x5e96ba, _0x4e4061, _0x40b19b, _0x100a53, _0x299502, _0x3db06, _0x3a33a8, _0x1da794, _0x3e4708;
            if (_0x100a53 = _0x2c5ff7['get'](_0x31edd8)) {
                _0x215bc3['handler'] && (_0x523ef2 = _0x215bc3, _0x215bc3 = _0x523ef2['handler'], _0x353e5a = _0x523ef2['selector']);
                _0x353e5a && _0x2139f7['find']['matchesSelector'](_0x505235, _0x353e5a);
                _0x215bc3['guid'] || (_0x215bc3['guid'] = _0x2139f7['guid']++);
                (_0x40b19b = _0x100a53['events']) || (_0x40b19b = _0x100a53['events'] = {});
                (_0x5e96ba = _0x100a53['handle']) || (_0x5e96ba = _0x100a53['handle'] = function(_0x318a6c) {
                    return 'undefined' != typeof _0x2139f7 && _0x2139f7['event']['triggered'] !== _0x318a6c['type'] ? _0x2139f7['event']['dispatch']['apply'](_0x31edd8, arguments) : void 0x0;
                });
                _0x48ba5d = (_0x48ba5d || '')['match'](_0x18f593) || [''];
                for (_0x100a53 = _0x48ba5d['length']; _0x100a53--;) _0x4e4061 = _0x1de06e['exec'](_0x48ba5d[_0x100a53]) || [], _0x1da794 = _0x3e4708 = _0x4e4061[0x1], _0x4e4061 = (_0x4e4061[0x2] || '')['split']('.')['sort'](), _0x1da794 && (_0x3db06 = _0x2139f7['event']['special'][_0x1da794] || {}, _0x1da794 = (_0x353e5a ? _0x3db06['delegateType'] : _0x3db06['bindType']) || _0x1da794, _0x3db06 = _0x2139f7['event']['special'][_0x1da794] || {}, _0x299502 = _0x2139f7['extend']({
                    'type': _0x1da794,
                    'origType': _0x3e4708,
                    'data': _0x50efa7,
                    'handler': _0x215bc3,
                    'guid': _0x215bc3['guid'],
                    'selector': _0x353e5a,
                    'needsContext': _0x353e5a && _0x2139f7['expr']['match']['needsContext']['test'](_0x353e5a),
                    'namespace': _0x4e4061['join']('.')
                }, _0x523ef2), (_0x3a33a8 = _0x40b19b[_0x1da794]) || (_0x3a33a8 = _0x40b19b[_0x1da794] = [], _0x3a33a8['delegateCount'] = 0x0, _0x3db06['setup'] && !0x1 !== _0x3db06['setup']['call'](_0x31edd8, _0x50efa7, _0x4e4061, _0x5e96ba) || _0x31edd8['addEventListener'] && _0x31edd8['addEventListener'](_0x1da794, _0x5e96ba)), _0x3db06['add'] && (_0x3db06['add']['call'](_0x31edd8, _0x299502), _0x299502['handler']['guid'] || (_0x299502['handler']['guid'] = _0x215bc3['guid'])), _0x353e5a ? _0x3a33a8['splice'](_0x3a33a8['delegateCount']++, 0x0, _0x299502) : _0x3a33a8['push'](_0x299502), _0x2139f7['event']['global'][_0x1da794] = !0x0);
            }
        },
        'remove': function(_0x7c87d1, _0x3b16b6, _0x39a2c4, _0x41ea76, _0x28fb56) {
            var _0x4036de, _0x5d0f77, _0x18a2e5, _0x18323a, _0x1027c4, _0x48951c, _0x5916d1, _0x1c5dba, _0x2c2ffb, _0x3a9ef7, _0x108652, _0x10d12a = _0x2c5ff7['hasData'](_0x7c87d1) && _0x2c5ff7['get'](_0x7c87d1);
            if (_0x10d12a && (_0x18323a = _0x10d12a['events'])) {
                _0x3b16b6 = (_0x3b16b6 || '')['match'](_0x18f593) || [''];
                for (_0x1027c4 = _0x3b16b6['length']; _0x1027c4--;)
                    if (_0x18a2e5 = _0x1de06e['exec'](_0x3b16b6[_0x1027c4]) || [], _0x2c2ffb = _0x108652 = _0x18a2e5[0x1], _0x3a9ef7 = (_0x18a2e5[0x2] || '')['split']('.')['sort'](), _0x2c2ffb) {
                        _0x5916d1 = _0x2139f7['event']['special'][_0x2c2ffb] || {};
                        _0x2c2ffb = (_0x41ea76 ? _0x5916d1['delegateType'] : _0x5916d1['bindType']) || _0x2c2ffb;
                        _0x1c5dba = _0x18323a[_0x2c2ffb] || [];
                        _0x18a2e5 = _0x18a2e5[0x2] && RegExp('(^|\x5c.)' + _0x3a9ef7['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)');
                        for (_0x5d0f77 = _0x4036de = _0x1c5dba['length']; _0x4036de--;) _0x48951c = _0x1c5dba[_0x4036de], !_0x28fb56 && _0x108652 !== _0x48951c['origType'] || _0x39a2c4 && _0x39a2c4['guid'] !== _0x48951c['guid'] || _0x18a2e5 && !_0x18a2e5['test'](_0x48951c['namespace']) || _0x41ea76 && _0x41ea76 !== _0x48951c['selector'] && ('**' !== _0x41ea76 || !_0x48951c['selector']) || (_0x1c5dba['splice'](_0x4036de, 0x1), _0x48951c['selector'] && _0x1c5dba['delegateCount']--, _0x5916d1['remove'] && _0x5916d1['remove']['call'](_0x7c87d1, _0x48951c));
                        _0x5d0f77 && !_0x1c5dba['length'] && (_0x5916d1['teardown'] && !0x1 !== _0x5916d1['teardown']['call'](_0x7c87d1, _0x3a9ef7, _0x10d12a['handle']) || _0x2139f7['removeEvent'](_0x7c87d1, _0x2c2ffb, _0x10d12a['handle']), delete _0x18323a[_0x2c2ffb]);
                    } else
                        for (_0x2c2ffb in _0x18323a) _0x2139f7['event']['remove'](_0x7c87d1, _0x2c2ffb + _0x3b16b6[_0x1027c4], _0x39a2c4, _0x41ea76, !0x0);
                _0x2139f7['isEmptyObject'](_0x18323a) && _0x2c5ff7['remove'](_0x7c87d1, 'handle events');
            }
        },
        'dispatch': function(_0x20897e) {
            var _0x268bda = _0x2139f7['event']['fix'](_0x20897e),
                _0x4719ef, _0x32f649, _0x298408, _0xd66ca6, _0x195fa2, _0x1c4465, _0x120ada = Array(arguments['length']);
            _0x32f649 = (_0x2c5ff7['get'](this, 'events') || {})[_0x268bda['type']] || [];
            var _0x5905e8 = _0x2139f7['event']['special'][_0x268bda['type']] || {};
            _0x120ada[0x0] = _0x268bda;
            for (_0x4719ef = 0x1; _0x4719ef < arguments['length']; _0x4719ef++) _0x120ada[_0x4719ef] = arguments[_0x4719ef];
            if (_0x268bda['delegateTarget'] = this, !_0x5905e8['preDispatch'] || !0x1 !== _0x5905e8['preDispatch']['call'](this, _0x268bda)) {
                _0x1c4465 = _0x2139f7['event']['handlers']['call'](this, _0x268bda, _0x32f649);
                for (_0x4719ef = 0x0;
                    (_0xd66ca6 = _0x1c4465[_0x4719ef++]) && !_0x268bda['isPropagationStopped']();) {
                    _0x268bda['currentTarget'] = _0xd66ca6['elem'];
                    for (_0x32f649 = 0x0;
                        (_0x195fa2 = _0xd66ca6['handlers'][_0x32f649++]) && !_0x268bda['isImmediatePropagationStopped']();) _0x268bda['rnamespace'] && !_0x268bda['rnamespace']['test'](_0x195fa2['namespace']) || (_0x268bda['handleObj'] = _0x195fa2, _0x268bda['data'] = _0x195fa2['data'], _0x298408 = ((_0x2139f7['event']['special'][_0x195fa2['origType']] || {})['handle'] || _0x195fa2['handler'])['apply'](_0xd66ca6['elem'], _0x120ada), void 0x0 !== _0x298408 && !0x1 === (_0x268bda['result'] = _0x298408) && (_0x268bda['preventDefault'](), _0x268bda['stopPropagation']()));
                }
                return _0x5905e8['postDispatch'] && _0x5905e8['postDispatch']['call'](this, _0x268bda), _0x268bda['result'];
            }
        },
        'handlers': function(_0x2efe2a, _0x20f7b2) {
            var _0x503d4f, _0x59e15b, _0x2df16b, _0x1e3311, _0x23454e, _0x1c22f0 = [],
                _0x5e0477 = _0x20f7b2['delegateCount'],
                _0x88263b = _0x2efe2a['target'];
            if (_0x5e0477 && _0x88263b['nodeType'] && !('click' === _0x2efe2a['type'] && 0x1 <= _0x2efe2a['button']))
                for (; _0x88263b !== this; _0x88263b = _0x88263b['parentNode'] || this)
                    if (0x1 === _0x88263b['nodeType'] && ('click' !== _0x2efe2a['type'] || !0x0 !== _0x88263b['disabled'])) {
                        _0x1e3311 = [];
                        _0x23454e = {};
                        for (_0x503d4f = 0x0; _0x503d4f < _0x5e0477; _0x503d4f++) _0x59e15b = _0x20f7b2[_0x503d4f], _0x2df16b = _0x59e15b['selector'] + ' ', void 0x0 === _0x23454e[_0x2df16b] && (_0x23454e[_0x2df16b] = _0x59e15b['needsContext'] ? -0x1 < _0x2139f7(_0x2df16b, this)['index'](_0x88263b) : _0x2139f7['find'](_0x2df16b, this, null, [_0x88263b])['length']), _0x23454e[_0x2df16b] && _0x1e3311['push'](_0x59e15b);
                        _0x1e3311['length'] && _0x1c22f0['push']({
                            'elem': _0x88263b,
                            'handlers': _0x1e3311
                        });
                    }
            return _0x88263b = this, _0x5e0477 < _0x20f7b2['length'] && _0x1c22f0['push']({
                'elem': _0x88263b,
                'handlers': _0x20f7b2['slice'](_0x5e0477)
            }), _0x1c22f0;
        },
        'addProp': function(_0x374750, _0x202012) {
            Object['defineProperty'](_0x2139f7['Event']['prototype'], _0x374750, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': _0x2139f7['isFunction'](_0x202012) ? function() {
                    if (this['originalEvent']) return _0x202012(this['originalEvent']);
                } : function() {
                    if (this['originalEvent']) return this['originalEvent'][_0x374750];
                },
                'set': function(_0x4410a0) {
                    Object['defineProperty'](this, _0x374750, {
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0,
                        'value': _0x4410a0
                    });
                }
            });
        },
        'fix': function(_0x4fb8af) {
            return _0x4fb8af[_0x2139f7['expando']] ? _0x4fb8af : new _0x2139f7['Event'](_0x4fb8af);
        },
        'special': {
            'load': {
                'noBubble': !0x0
            },
            'focus': {
                'trigger': function() {
                    if (this !== _0x410285() && this['focus']) return this['focus'](), !0x1;
                },
                'delegateType': 'focusin'
            },
            'blur': {
                'trigger': function() {
                    if (this === _0x410285() && this['blur']) return this['blur'](), !0x1;
                },
                'delegateType': 'focusout'
            },
            'click': {
                'trigger': function() {
                    if ('checkbox' === this['type'] && this['click'] && _0x443dae(this, 'input')) return this['click'](), !0x1;
                },
                '_default': function(_0x4b109b) {
                    return _0x443dae(_0x4b109b['target'], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function(_0x40b7db) {
                    void 0x0 !== _0x40b7db['result'] && _0x40b7db['originalEvent'] && (_0x40b7db['originalEvent']['returnValue'] = _0x40b7db['result']);
                }
            }
        }
    };
    _0x2139f7['removeEvent'] = function(_0x33eb90, _0x42c556, _0x13923d) {
        _0x33eb90['removeEventListener'] && _0x33eb90['removeEventListener'](_0x42c556, _0x13923d);
    };
    _0x2139f7['Event'] = function(_0x55cd86, _0x221a30) {
        return this instanceof _0x2139f7['Event'] ? (_0x55cd86 && _0x55cd86['type'] ? (this['originalEvent'] = _0x55cd86, this['type'] = _0x55cd86['type'], this['isDefaultPrevented'] = _0x55cd86['defaultPrevented'] || void 0x0 === _0x55cd86['defaultPrevented'] && !0x1 === _0x55cd86['returnValue'] ? _0x5319f1 : _0x5caf16, this['target'] = _0x55cd86['target'] && 0x3 === _0x55cd86['target']['nodeType'] ? _0x55cd86['target']['parentNode'] : _0x55cd86['target'], this['currentTarget'] = _0x55cd86['currentTarget'], this['relatedTarget'] = _0x55cd86['relatedTarget']) : this['type'] = _0x55cd86, _0x221a30 && _0x2139f7['extend'](this, _0x221a30), this['timeStamp'] = _0x55cd86 && _0x55cd86['timeStamp'] || _0x2139f7['now'](), void(this[_0x2139f7['expando']] = !0x0)) : new _0x2139f7['Event'](_0x55cd86, _0x221a30);
    };
    _0x2139f7['Event']['prototype'] = {
        'constructor': _0x2139f7['Event'],
        'isDefaultPrevented': _0x5caf16,
        'isPropagationStopped': _0x5caf16,
        'isImmediatePropagationStopped': _0x5caf16,
        'isSimulated': !0x1,
        'preventDefault': function() {
            var _0x19c7d3 = this['originalEvent'];
            this['isDefaultPrevented'] = _0x5319f1;
            _0x19c7d3 && !this['isSimulated'] && _0x19c7d3['preventDefault']();
        },
        'stopPropagation': function() {
            var _0x1f653a = this['originalEvent'];
            this['isPropagationStopped'] = _0x5319f1;
            _0x1f653a && !this['isSimulated'] && _0x1f653a['stopPropagation']();
        },
        'stopImmediatePropagation': function() {
            var _0x508950 = this['originalEvent'];
            this['isImmediatePropagationStopped'] = _0x5319f1;
            _0x508950 && !this['isSimulated'] && _0x508950['stopImmediatePropagation']();
            this['stopPropagation']();
        }
    };
    _0x2139f7['each']({
        'altKey': !0x0,
        'bubbles': !0x0,
        'cancelable': !0x0,
        'changedTouches': !0x0,
        'ctrlKey': !0x0,
        'detail': !0x0,
        'eventPhase': !0x0,
        'metaKey': !0x0,
        'pageX': !0x0,
        'pageY': !0x0,
        'shiftKey': !0x0,
        'view': !0x0,
        'char': !0x0,
        'charCode': !0x0,
        'key': !0x0,
        'keyCode': !0x0,
        'button': !0x0,
        'buttons': !0x0,
        'clientX': !0x0,
        'clientY': !0x0,
        'offsetX': !0x0,
        'offsetY': !0x0,
        'pointerId': !0x0,
        'pointerType': !0x0,
        'screenX': !0x0,
        'screenY': !0x0,
        'targetTouches': !0x0,
        'toElement': !0x0,
        'touches': !0x0,
        'which': function(_0x3df98f) {
            var _0x32bb4f = _0x3df98f['button'];
            return null == _0x3df98f['which'] && _0x5394dd['test'](_0x3df98f['type']) ? null != _0x3df98f['charCode'] ? _0x3df98f['charCode'] : _0x3df98f['keyCode'] : !_0x3df98f['which'] && void 0x0 !== _0x32bb4f && _0x5c76ee['test'](_0x3df98f['type']) ? 0x1 & _0x32bb4f ? 0x1 : 0x2 & _0x32bb4f ? 0x3 : 0x4 & _0x32bb4f ? 0x2 : 0x0 : _0x3df98f['which'];
        }
    }, _0x2139f7['event']['addProp']);
    _0x2139f7['each']({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': 'pointerover',
        'pointerleave': 'pointerout'
    }, function(_0x283f17, _0x576647) {
        _0x2139f7['event']['special'][_0x283f17] = {
            'delegateType': _0x576647,
            'bindType': _0x576647,
            'handle': function(_0x221e13) {
                var _0x155c2f, _0x20e3ef = _0x221e13['relatedTarget'],
                    _0x1248f7 = _0x221e13['handleObj'];
                return _0x20e3ef && (_0x20e3ef === this || _0x2139f7['contains'](this, _0x20e3ef)) || (_0x221e13['type'] = _0x1248f7['origType'], _0x155c2f = _0x1248f7['handler']['apply'](this, arguments), _0x221e13['type'] = _0x576647), _0x155c2f;
            }
        };
    });
    _0x2139f7['fn']['extend']({
        'on': function(_0x4b985c, _0x5617b8, _0x52aedb, _0x8799bc) {
            return _0x4a9974(this, _0x4b985c, _0x5617b8, _0x52aedb, _0x8799bc);
        },
        'one': function(_0xcf65c2, _0x45e58d, _0x462f54, _0x598cf9) {
            return _0x4a9974(this, _0xcf65c2, _0x45e58d, _0x462f54, _0x598cf9, 0x1);
        },
        'off': function(_0x3af885, _0x3fdde4, _0x41418f) {
            var _0x2f2ae4, _0x32eabd;
            if (_0x3af885 && _0x3af885['preventDefault'] && _0x3af885['handleObj']) return _0x2f2ae4 = _0x3af885['handleObj'], _0x2139f7(_0x3af885['delegateTarget'])['off'](_0x2f2ae4['namespace'] ? _0x2f2ae4['origType'] + '.' + _0x2f2ae4['namespace'] : _0x2f2ae4['origType'], _0x2f2ae4['selector'], _0x2f2ae4['handler']), this;
            if ('object' == typeof _0x3af885) {
                for (_0x32eabd in _0x3af885) this['off'](_0x32eabd, _0x3fdde4, _0x3af885[_0x32eabd]);
                return this;
            }
            return !0x1 !== _0x3fdde4 && 'function' != typeof _0x3fdde4 || (_0x41418f = _0x3fdde4, _0x3fdde4 = void 0x0), !0x1 === _0x41418f && (_0x41418f = _0x5caf16), this['each'](function() {
                _0x2139f7['event']['remove'](this, _0x3af885, _0x41418f, _0x3fdde4);
            });
        }
    });
    var _0x4fea7f = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0> \t\r\n\f]*)[^>]*)\/>/gi,
        _0x5b30de = /<script|<style|<link/i,
        _0x1e60bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _0x1ed651 = /^true\/(.*)/,
        _0x26742f = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    _0x2139f7['extend']({
        'htmlPrefilter': function(_0x39a264) {
            return _0x39a264['replace'](_0x4fea7f, '<$1></$2>');
        },
        'clone': function(_0x5d4cbb, _0x45b658, _0x480066) {
            var _0xf5faca, _0x2fc9cf, _0x33077e, _0x4826c3, _0x469750 = _0x5d4cbb['cloneNode'](!0x0),
                _0x5ebf61 = _0x2139f7['contains'](_0x5d4cbb['ownerDocument'], _0x5d4cbb);
            if (!_0x11c3a0['noCloneChecked'] && !(0x1 !== _0x5d4cbb['nodeType'] && 0xb !== _0x5d4cbb['nodeType'] || _0x2139f7['isXMLDoc'](_0x5d4cbb))) {
                _0x4826c3 = _0x18f449(_0x469750);
                _0x33077e = _0x18f449(_0x5d4cbb);
                _0xf5faca = 0x0;
                for (_0x2fc9cf = _0x33077e['length']; _0xf5faca < _0x2fc9cf; _0xf5faca++) {
                    var _0x4d7d33 = _0x33077e[_0xf5faca],
                        _0x26a2a4 = _0x4826c3[_0xf5faca],
                        _0x104a01 = _0x26a2a4['nodeName']['toLowerCase']();
                    'input' === _0x104a01 && _0x2a4ece['test'](_0x4d7d33['type']) ? _0x26a2a4['checked'] = _0x4d7d33['checked'] : 'input' !== _0x104a01 && 'textarea' !== _0x104a01 || (_0x26a2a4['defaultValue'] = _0x4d7d33['defaultValue']);
                }
            }
            if (_0x45b658)
                if (_0x480066) {
                    _0x33077e = _0x33077e || _0x18f449(_0x5d4cbb);
                    _0x4826c3 = _0x4826c3 || _0x18f449(_0x469750);
                    _0xf5faca = 0x0;
                    for (_0x2fc9cf = _0x33077e['length']; _0xf5faca < _0x2fc9cf; _0xf5faca++) _0x16b4d2(_0x33077e[_0xf5faca], _0x4826c3[_0xf5faca]);
                } else _0x16b4d2(_0x5d4cbb, _0x469750);
            return _0x4826c3 = _0x18f449(_0x469750, 'script'), 0x0 < _0x4826c3['length'] && _0x20fbbc(_0x4826c3, !_0x5ebf61 && _0x18f449(_0x5d4cbb, 'script')), _0x469750;
        },
        'cleanData': function(_0x5cb965) {
            for (var _0x5e3530, _0x19d4b3, _0x4e3140, _0x480397 = _0x2139f7['event']['special'], _0x48e4cd = 0x0; void 0x0 !== (_0x19d4b3 = _0x5cb965[_0x48e4cd]); _0x48e4cd++)
                if (_0x916fc0(_0x19d4b3)) {
                    if (_0x5e3530 = _0x19d4b3[_0x2c5ff7['expando']]) {
                        if (_0x5e3530['events'])
                            for (_0x4e3140 in _0x5e3530['events']) _0x480397[_0x4e3140] ? _0x2139f7['event']['remove'](_0x19d4b3, _0x4e3140) : _0x2139f7['removeEvent'](_0x19d4b3, _0x4e3140, _0x5e3530['handle']);
                        _0x19d4b3[_0x2c5ff7['expando']] = void 0x0;
                    }
                    _0x19d4b3[_0x108b92['expando']] && (_0x19d4b3[_0x108b92['expando']] = void 0x0);
                }
        }
    });
    _0x2139f7['fn']['extend']({
        'detach': function(_0x54aa2c) {
            return _0x297409(this, _0x54aa2c, !0x0);
        },
        'remove': function(_0x5864d3) {
            return _0x297409(this, _0x5864d3);
        },
        'text': function(_0xe2948f) {
            return _0x4c2afe(this, function(_0x4158df) {
                return void 0x0 === _0x4158df ? _0x2139f7['text'](this) : this['empty']()['each'](function() {
                    0x1 !== this['nodeType'] && 0xb !== this['nodeType'] && 0x9 !== this['nodeType'] || (this['textContent'] = _0x4158df);
                });
            }, null, _0xe2948f, arguments['length']);
        },
        'append': function() {
            return _0x3c3d66(this, arguments, function(_0x3a74d7) {
                (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) && _0x3c654e(this, _0x3a74d7)['appendChild'](_0x3a74d7);
            });
        },
        'prepend': function() {
            return _0x3c3d66(this, arguments, function(_0x1ece5e) {
                if (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) {
                    var _0x52c720 = _0x3c654e(this, _0x1ece5e);
                    _0x52c720['insertBefore'](_0x1ece5e, _0x52c720['firstChild']);
                }
            });
        },
        'before': function() {
            return _0x3c3d66(this, arguments, function(_0x512e73) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x512e73, this);
            });
        },
        'after': function() {
            return _0x3c3d66(this, arguments, function(_0x5d930) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x5d930, this['nextSibling']);
            });
        },
        'empty': function() {
            for (var _0x104ef1, _0x5d454e = 0x0; null != (_0x104ef1 = this[_0x5d454e]); _0x5d454e++) 0x1 === _0x104ef1['nodeType'] && (_0x2139f7['cleanData'](_0x18f449(_0x104ef1, !0x1)), _0x104ef1['textContent'] = '');
            return this;
        },
        'clone': function(_0x5c1439, _0x183b9d) {
            return _0x5c1439 = null != _0x5c1439 && _0x5c1439, _0x183b9d = null == _0x183b9d ? _0x5c1439 : _0x183b9d, this['map'](function() {
                return _0x2139f7['clone'](this, _0x5c1439, _0x183b9d);
            });
        },
        'html': function(_0x13b49a) {
            return _0x4c2afe(this, function(_0xfbaeac) {
                var _0x3921d3 = this[0x0] || {},
                    _0x2a5fde = 0x0,
                    _0x48bd78 = this['length'];
                if (void 0x0 === _0xfbaeac && 0x1 === _0x3921d3['nodeType']) return _0x3921d3['innerHTML'];
                if ('string' == typeof _0xfbaeac && !_0x5b30de['test'](_0xfbaeac) && !_0x57e4f1[(_0x5f0ecc['exec'](_0xfbaeac) || ['', ''])[0x1]['toLowerCase']()]) {
                    _0xfbaeac = _0x2139f7['htmlPrefilter'](_0xfbaeac);
                    try {
                        for (; _0x2a5fde < _0x48bd78; _0x2a5fde++) _0x3921d3 = this[_0x2a5fde] || {}, 0x1 === _0x3921d3['nodeType'] && (_0x2139f7['cleanData'](_0x18f449(_0x3921d3, !0x1)), _0x3921d3['innerHTML'] = _0xfbaeac);
                        _0x3921d3 = 0x0;
                    } catch (_0xe7fa4e) {}
                }
                _0x3921d3 && this['empty']()['append'](_0xfbaeac);
            }, null, _0x13b49a, arguments['length']);
        },
        'replaceWith': function() {
            var _0xfc3ce5 = [];
            return _0x3c3d66(this, arguments, function(_0x3c5736) {
                var _0x48c145 = this['parentNode'];
                0x0 > _0x2139f7['inArray'](this, _0xfc3ce5) && (_0x2139f7['cleanData'](_0x18f449(this)), _0x48c145 && _0x48c145['replaceChild'](_0x3c5736, this));
            }, _0xfc3ce5);
        }
    });
    _0x2139f7['each']({
        'appendTo': 'append',
        'prependTo': 'prepend',
        'insertBefore': 'before',
        'insertAfter': 'after',
        'replaceAll': 'replaceWith'
    }, function(_0x37677c, _0x15811c) {
        _0x2139f7['fn'][_0x37677c] = function(_0x5b167a) {
            for (var _0x1153de = [], _0x3ab4cf = _0x2139f7(_0x5b167a), _0x400462 = _0x3ab4cf['length'] - 0x1, _0x1c983f = 0x0; _0x1c983f <= _0x400462; _0x1c983f++) _0x5b167a = _0x1c983f === _0x400462 ? this : this['clone'](!0x0), _0x2139f7(_0x3ab4cf[_0x1c983f])[_0x15811c](_0x5b167a), _0x1551e8['apply'](_0x1153de, _0x5b167a['get']());
            return this['pushStack'](_0x1153de);
        };
    });
    var _0x28b577 = /^margin/,
        _0x37f1e9 = RegExp('^(' + _0x5d9e71 + ')(?!px)[a-z%]+$', 'i'),
        _0x415977 = function(_0x112df6) {
            var _0x347370 = _0x112df6['ownerDocument']['defaultView'];
            return _0x347370 && _0x347370['opener'] || (_0x347370 = _0x73c481), _0x347370['getComputedStyle'](_0x112df6);
        },
        _0x4f1ad7 = function() {
            if (_0x1e8ebe) {
                _0x1e8ebe['style']['cssText'] = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%';
                _0x1e8ebe['innerHTML'] = '';
                _0x505235['appendChild'](_0x4724bb);
                var _0x7ebc30 = _0x73c481['getComputedStyle'](_0x1e8ebe);
                _0x36f720 = '1%' !== _0x7ebc30['top'];
                _0x2ca92c = '2px' === _0x7ebc30['marginLeft'];
                _0x150cd0 = '4px' === _0x7ebc30['width'];
                _0x1e8ebe['style']['marginRight'] = '50%';
                _0x4ac708 = '4px' === _0x7ebc30['marginRight'];
                _0x505235['removeChild'](_0x4724bb);
                _0x1e8ebe = null;
            }
        },
        _0x36f720, _0x150cd0, _0x4ac708, _0x2ca92c, _0x4724bb = _0x175e87['createElement']('div'),
        _0x1e8ebe = _0x175e87['createElement']('div');
    _0x1e8ebe['style'] && (_0x1e8ebe['style']['backgroundClip'] = 'content-box', _0x1e8ebe['cloneNode'](!0x0)['style']['backgroundClip'] = '', _0x11c3a0['clearCloneStyle'] = 'content-box' === _0x1e8ebe['style']['backgroundClip'], _0x4724bb['style']['cssText'] = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x4724bb['appendChild'](_0x1e8ebe), _0x2139f7['extend'](_0x11c3a0, {
        'pixelPosition': function() {
            return _0x4f1ad7(), _0x36f720;
        },
        'boxSizingReliable': function() {
            return _0x4f1ad7(), _0x150cd0;
        },
        'pixelMarginRight': function() {
            return _0x4f1ad7(), _0x4ac708;
        },
        'reliableMarginLeft': function() {
            return _0x4f1ad7(), _0x2ca92c;
        }
    }));
    !0x0;
    var _0x1c3f93 = /^(none|table(?!-c[ea]).+)/,
        _0x1176e8 = /^--/,
        _0x4160f3 = {
            'position': 'absolute',
            'visibility': 'hidden',
            'display': 'block'
        },
        _0x82d947 = {
            'letterSpacing': '0',
            'fontWeight': '400'
        },
        _0x4d24ea = ['Webkit', 'Moz', 'ms'],
        _0x44b449 = _0x175e87['createElement']('div')['style'];
    _0x2139f7['extend']({
        'cssHooks': {
            'opacity': {
                'get': function(_0x3a17b2, _0x233eeb) {
                    if (_0x233eeb) {
                        var _0x2ce5e3 = _0x20837e(_0x3a17b2, 'opacity');
                        return '' === _0x2ce5e3 ? '1' : _0x2ce5e3;
                    }
                }
            }
        },
        'cssNumber': {
            'animationIterationCount': !0x0,
            'columnCount': !0x0,
            'fillOpacity': !0x0,
            'flexGrow': !0x0,
            'flexShrink': !0x0,
            'fontWeight': !0x0,
            'lineHeight': !0x0,
            'opacity': !0x0,
            'order': !0x0,
            'orphans': !0x0,
            'widows': !0x0,
            'zIndex': !0x0,
            'zoom': !0x0
        },
        'cssProps': {
            'float': 'cssFloat'
        },
        'style': function(_0x52053d, _0x82a76c, _0x4564a9, _0x48c859) {
            if (_0x52053d && 0x3 !== _0x52053d['nodeType'] && 0x8 !== _0x52053d['nodeType'] && _0x52053d['style']) {
                var _0xd4ff4f, _0x562b50, _0x530cb8, _0x19fb3c = _0x2139f7['camelCase'](_0x82a76c),
                    _0x50670c = _0x1176e8['test'](_0x82a76c),
                    _0x22b46c = _0x52053d['style'];
                return _0x50670c || (_0x82a76c = _0x399a6e(_0x19fb3c)), _0x530cb8 = _0x2139f7['cssHooks'][_0x82a76c] || _0x2139f7['cssHooks'][_0x19fb3c], void 0x0 === _0x4564a9 ? _0x530cb8 && 'get' in _0x530cb8 && void 0x0 !== (_0xd4ff4f = _0x530cb8['get'](_0x52053d, !0x1, _0x48c859)) ? _0xd4ff4f : _0x22b46c[_0x82a76c] : (_0x562b50 = typeof _0x4564a9, 'string' === _0x562b50 && (_0xd4ff4f = _0x277eb1['exec'](_0x4564a9)) && _0xd4ff4f[0x1] && (_0x4564a9 = _0x3b83d0(_0x52053d, _0x82a76c, _0xd4ff4f), _0x562b50 = 'number'), null != _0x4564a9 && _0x4564a9 === _0x4564a9 && ('number' === _0x562b50 && (_0x4564a9 += _0xd4ff4f && _0xd4ff4f[0x3] || (_0x2139f7['cssNumber'][_0x19fb3c] ? '' : 'px')), _0x11c3a0['clearCloneStyle'] || '' !== _0x4564a9 || 0x0 !== _0x82a76c['indexOf']('background') || (_0x22b46c[_0x82a76c] = 'inherit'), _0x530cb8 && 'set' in _0x530cb8 && void 0x0 === (_0x4564a9 = _0x530cb8['set'](_0x52053d, _0x4564a9, _0x48c859)) || (_0x50670c ? _0x22b46c['setProperty'](_0x82a76c, _0x4564a9) : _0x22b46c[_0x82a76c] = _0x4564a9)), void 0x0);
            }
        },
        'css': function(_0x525e0d, _0x46b9ef, _0x3d23f3, _0x4fb23d) {
            var _0x2f180c, _0x4ad5e6, _0x1aedab, _0x3a9640 = _0x2139f7['camelCase'](_0x46b9ef);
            return _0x1176e8['test'](_0x46b9ef) || (_0x46b9ef = _0x399a6e(_0x3a9640)), _0x1aedab = _0x2139f7['cssHooks'][_0x46b9ef] || _0x2139f7['cssHooks'][_0x3a9640], _0x1aedab && 'get' in _0x1aedab && (_0x2f180c = _0x1aedab['get'](_0x525e0d, !0x0, _0x3d23f3)), void 0x0 === _0x2f180c && (_0x2f180c = _0x20837e(_0x525e0d, _0x46b9ef, _0x4fb23d)), 'normal' === _0x2f180c && _0x46b9ef in _0x82d947 && (_0x2f180c = _0x82d947[_0x46b9ef]), '' === _0x3d23f3 || _0x3d23f3 ? (_0x4ad5e6 = parseFloat(_0x2f180c), !0x0 === _0x3d23f3 || isFinite(_0x4ad5e6) ? _0x4ad5e6 || 0x0 : _0x2f180c) : _0x2f180c;
        }
    });
    _0x2139f7['each'](['height', 'width'], function(_0x491baf, _0x3fb139) {
        _0x2139f7['cssHooks'][_0x3fb139] = {
            'get': function(_0x241aca, _0x4cfa41, _0x4ed188) {
                if (_0x4cfa41) return !_0x1c3f93['test'](_0x2139f7['css'](_0x241aca, 'display')) || _0x241aca['getClientRects']()['length'] && _0x241aca['getBoundingClientRect']()['width'] ? _0x3f89d9(_0x241aca, _0x3fb139, _0x4ed188) : _0x3152ae(_0x241aca, _0x4160f3, function() {
                    return _0x3f89d9(_0x241aca, _0x3fb139, _0x4ed188);
                });
            },
            'set': function(_0x1e29da, _0x531d12, _0x4619d1) {
                var _0x8cfc7f, _0x552526 = _0x4619d1 && _0x415977(_0x1e29da);
                _0x4619d1 = _0x4619d1 && _0x3f5eb7(_0x1e29da, _0x3fb139, _0x4619d1, 'border-box' === _0x2139f7['css'](_0x1e29da, 'boxSizing', !0x1, _0x552526), _0x552526);
                return _0x4619d1 && (_0x8cfc7f = _0x277eb1['exec'](_0x531d12)) && 'px' !== (_0x8cfc7f[0x3] || 'px') && (_0x1e29da['style'][_0x3fb139] = _0x531d12, _0x531d12 = _0x2139f7['css'](_0x1e29da, _0x3fb139)), _0x22e993(_0x1e29da, _0x531d12, _0x4619d1);
            }
        };
    });
    _0x2139f7['cssHooks']['marginLeft'] = _0x5242f6(_0x11c3a0['reliableMarginLeft'], function(_0x5cb063, _0x2e9f8c) {
        if (_0x2e9f8c) return (parseFloat(_0x20837e(_0x5cb063, 'marginLeft')) || _0x5cb063['getBoundingClientRect']()['left'] - _0x3152ae(_0x5cb063, {
            'marginLeft': 0x0
        }, function() {
            return _0x5cb063['getBoundingClientRect']()['left'];
        })) + 'px';
    });
    _0x2139f7['each']({
        'margin': '',
        'padding': '',
        'border': 'Width'
    }, function(_0x2e03aa, _0x130572) {
        _0x2139f7['cssHooks'][_0x2e03aa + _0x130572] = {
            'expand': function(_0x3c83ac) {
                var _0x2a7652 = 0x0,
                    _0xb8a3eb = {};
                for (_0x3c83ac = 'string' == typeof _0x3c83ac ? _0x3c83ac['split'](' ') : [_0x3c83ac]; 0x4 > _0x2a7652; _0x2a7652++) _0xb8a3eb[_0x2e03aa + _0x1430a7[_0x2a7652] + _0x130572] = _0x3c83ac[_0x2a7652] || _0x3c83ac[_0x2a7652 - 0x2] || _0x3c83ac[0x0];
                return _0xb8a3eb;
            }
        };
        _0x28b577['test'](_0x2e03aa) || (_0x2139f7['cssHooks'][_0x2e03aa + _0x130572]['set'] = _0x22e993);
    });
    _0x2139f7['fn']['extend']({
        'css': function(_0xfac164, _0x36bf3e) {
            return _0x4c2afe(this, function(_0x4bec30, _0x89aff2, _0x40ece5) {
                var _0x1b2563, _0x2f9d43 = {},
                    _0x5ced30 = 0x0;
                if (Array['isArray'](_0x89aff2)) {
                    _0x40ece5 = _0x415977(_0x4bec30);
                    for (_0x1b2563 = _0x89aff2['length']; _0x5ced30 < _0x1b2563; _0x5ced30++) _0x2f9d43[_0x89aff2[_0x5ced30]] = _0x2139f7['css'](_0x4bec30, _0x89aff2[_0x5ced30], !0x1, _0x40ece5);
                    return _0x2f9d43;
                }
                return void 0x0 !== _0x40ece5 ? _0x2139f7['style'](_0x4bec30, _0x89aff2, _0x40ece5) : _0x2139f7['css'](_0x4bec30, _0x89aff2);
            }, _0xfac164, _0x36bf3e, 0x1 < arguments['length']);
        }
    });
    _0x2139f7['Tween'] = _0x3540df;
    _0x3540df['prototype'] = {
        'constructor': _0x3540df,
        'init': function(_0xb311e5, _0x1c4486, _0x252b50, _0x80efbe, _0x509fb0, _0x5e16ae) {
            this['elem'] = _0xb311e5;
            this['prop'] = _0x252b50;
            this['easing'] = _0x509fb0 || _0x2139f7['easing']['_default'];
            this['options'] = _0x1c4486;
            this['start'] = this['now'] = this['cur']();
            this['end'] = _0x80efbe;
            this['unit'] = _0x5e16ae || (_0x2139f7['cssNumber'][_0x252b50] ? '' : 'px');
        },
        'cur': function() {
            var _0x44c683 = _0x3540df['propHooks'][this['prop']];
            return _0x44c683 && _0x44c683['get'] ? _0x44c683['get'](this) : _0x3540df['propHooks']['_default']['get'](this);
        },
        'run': function(_0x35cd94) {
            var _0x301978, _0x5f0229 = _0x3540df['propHooks'][this['prop']];
            return this['options']['duration'] ? this['pos'] = _0x301978 = _0x2139f7['easing'][this['easing']](_0x35cd94, this['options']['duration'] * _0x35cd94, 0x0, 0x1, this['options']['duration']) : this['pos'] = _0x301978 = _0x35cd94, this['now'] = (this['end'] - this['start']) * _0x301978 + this['start'], this['options']['step'] && this['options']['step']['call'](this['elem'], this['now'], this), _0x5f0229 && _0x5f0229['set'] ? _0x5f0229['set'](this) : _0x3540df['propHooks']['_default']['set'](this), this;
        }
    };
    _0x3540df['prototype']['init']['prototype'] = _0x3540df['prototype'];
    _0x3540df['propHooks'] = {
        '_default': {
            'get': function(_0x52add6) {
                var _0x2f3246;
                return 0x1 !== _0x52add6['elem']['nodeType'] || null != _0x52add6['elem'][_0x52add6['prop']] && null == _0x52add6['elem']['style'][_0x52add6['prop']] ? _0x52add6['elem'][_0x52add6['prop']] : (_0x2f3246 = _0x2139f7['css'](_0x52add6['elem'], _0x52add6['prop'], ''), _0x2f3246 && 'auto' !== _0x2f3246 ? _0x2f3246 : 0x0);
            },
            'set': function(_0x33e8b9) {
                _0x2139f7['fx']['step'][_0x33e8b9['prop']] ? _0x2139f7['fx']['step'][_0x33e8b9['prop']](_0x33e8b9) : 0x1 !== _0x33e8b9['elem']['nodeType'] || null == _0x33e8b9['elem']['style'][_0x2139f7['cssProps'][_0x33e8b9['prop']]] && !_0x2139f7['cssHooks'][_0x33e8b9['prop']] ? _0x33e8b9['elem'][_0x33e8b9['prop']] = _0x33e8b9['now'] : _0x2139f7['style'](_0x33e8b9['elem'], _0x33e8b9['prop'], _0x33e8b9['now'] + _0x33e8b9['unit']);
            }
        }
    };
    _0x3540df['propHooks']['scrollTop'] = _0x3540df['propHooks']['scrollLeft'] = {
        'set': function(_0x53d295) {
            _0x53d295['elem']['nodeType'] && _0x53d295['elem']['parentNode'] && (_0x53d295['elem'][_0x53d295['prop']] = _0x53d295['now']);
        }
    };
    _0x2139f7['easing'] = {
        'linear': function(_0x485fea) {
            return _0x485fea;
        },
        'swing': function(_0x2e13b5) {
            return 0.5 - Math['cos'](_0x2e13b5 * Math['PI']) / 0x2;
        },
        '_default': 'swing'
    };
    _0x2139f7['fx'] = _0x3540df['prototype']['init'];
    _0x2139f7['fx']['step'] = {};
    var _0xefbd34, _0xa6bac1, _0x1a2f3d = /^(?:toggle|show|hide)$/,
        _0x5baefe = /queueHooks$/;
    _0x2139f7['Animation'] = _0x2139f7['extend'](_0x131ec1, {
        'tweeners': {
            '*': [function(_0x441067, _0x270bae) {
                var _0x221f42 = this['createTween'](_0x441067, _0x270bae);
                return _0x3b83d0(_0x221f42['elem'], _0x441067, _0x277eb1['exec'](_0x270bae), _0x221f42), _0x221f42;
            }]
        },
        'tweener': function(_0x539a0a, _0x32d856) {
            _0x2139f7['isFunction'](_0x539a0a) ? (_0x32d856 = _0x539a0a, _0x539a0a = ['*']) : _0x539a0a = _0x539a0a['match'](_0x18f593);
            for (var _0x2e6f68, _0xc7cc78 = 0x0, _0x5de16e = _0x539a0a['length']; _0xc7cc78 < _0x5de16e; _0xc7cc78++) _0x2e6f68 = _0x539a0a[_0xc7cc78], _0x131ec1['tweeners'][_0x2e6f68] = _0x131ec1['tweeners'][_0x2e6f68] || [], _0x131ec1['tweeners'][_0x2e6f68]['unshift'](_0x32d856);
        },
        'prefilters': [function(_0x3cecd4, _0x5d22b4, _0x4a0b92) {
            var _0x480b9e, _0x27262d, _0x58e335, _0x4a76b4, _0x39e907, _0x41ba5b, _0x379c88, _0x56f837, _0x2029de = 'width' in _0x5d22b4 || 'height' in _0x5d22b4,
                _0x336535 = this,
                _0xeb38c8 = {},
                _0x4fcd09 = _0x3cecd4['style'],
                _0x2b966d = _0x3cecd4['nodeType'] && _0x41a80d(_0x3cecd4),
                _0x9c1eb1 = _0x2c5ff7['get'](_0x3cecd4, 'fxshow');
            _0x4a0b92['queue'] || (_0x4a76b4 = _0x2139f7['_queueHooks'](_0x3cecd4, 'fx'), null == _0x4a76b4['unqueued'] && (_0x4a76b4['unqueued'] = 0x0, _0x39e907 = _0x4a76b4['empty']['fire'], _0x4a76b4['empty']['fire'] = function() {
                _0x4a76b4['unqueued'] || _0x39e907();
            }), _0x4a76b4['unqueued']++, _0x336535['always'](function() {
                _0x336535['always'](function() {
                    _0x4a76b4['unqueued']--;
                    _0x2139f7['queue'](_0x3cecd4, 'fx')['length'] || _0x4a76b4['empty']['fire']();
                });
            }));
            for (_0x480b9e in _0x5d22b4)
                if (_0x27262d = _0x5d22b4[_0x480b9e], _0x1a2f3d['test'](_0x27262d)) {
                    if (delete _0x5d22b4[_0x480b9e], _0x58e335 = _0x58e335 || 'toggle' === _0x27262d, _0x27262d === (_0x2b966d ? 'hide' : 'show')) {
                        if ('show' !== _0x27262d || !_0x9c1eb1 || void 0x0 === _0x9c1eb1[_0x480b9e]) continue;
                        _0x2b966d = !0x0;
                    }
                    _0xeb38c8[_0x480b9e] = _0x9c1eb1 && _0x9c1eb1[_0x480b9e] || _0x2139f7['style'](_0x3cecd4, _0x480b9e);
                }
            if (_0x41ba5b = !_0x2139f7['isEmptyObject'](_0x5d22b4), _0x41ba5b || !_0x2139f7['isEmptyObject'](_0xeb38c8))
                for (_0x480b9e in (_0x2029de && 0x1 === _0x3cecd4['nodeType'] && (_0x4a0b92['overflow'] = [_0x4fcd09['overflow'], _0x4fcd09['overflowX'], _0x4fcd09['overflowY']], _0x379c88 = _0x9c1eb1 && _0x9c1eb1['display'], null == _0x379c88 && (_0x379c88 = _0x2c5ff7['get'](_0x3cecd4, 'display')), _0x56f837 = _0x2139f7['css'](_0x3cecd4, 'display'), 'none' === _0x56f837 && (_0x379c88 ? _0x56f837 = _0x379c88 : (_0x34b295([_0x3cecd4], !0x0), _0x379c88 = _0x3cecd4['style']['display'] || _0x379c88, _0x56f837 = _0x2139f7['css'](_0x3cecd4, 'display'), _0x34b295([_0x3cecd4]))), ('inline' === _0x56f837 || 'inline-block' === _0x56f837 && null != _0x379c88) && 'none' === _0x2139f7['css'](_0x3cecd4, 'float') && (_0x41ba5b || (_0x336535['done'](function() {
                        _0x4fcd09['display'] = _0x379c88;
                    }), null == _0x379c88 && (_0x56f837 = _0x4fcd09['display'], _0x379c88 = 'none' === _0x56f837 ? '' : _0x56f837)), _0x4fcd09['display'] = 'inline-block')), _0x4a0b92['overflow'] && (_0x4fcd09['overflow'] = 'hidden', _0x336535['always'](function() {
                        _0x4fcd09['overflow'] = _0x4a0b92['overflow'][0x0];
                        _0x4fcd09['overflowX'] = _0x4a0b92['overflow'][0x1];
                        _0x4fcd09['overflowY'] = _0x4a0b92['overflow'][0x2];
                    })), _0x41ba5b = !0x1, _0xeb38c8)) _0x41ba5b || (_0x9c1eb1 ? 'hidden' in _0x9c1eb1 && (_0x2b966d = _0x9c1eb1['hidden']) : _0x9c1eb1 = _0x2c5ff7['access'](_0x3cecd4, 'fxshow', {
                    'display': _0x379c88
                }), _0x58e335 && (_0x9c1eb1['hidden'] = !_0x2b966d), _0x2b966d && _0x34b295([_0x3cecd4], !0x0), _0x336535['done'](function() {
                    _0x2b966d || _0x34b295([_0x3cecd4]);
                    _0x2c5ff7['remove'](_0x3cecd4, 'fxshow');
                    for (_0x480b9e in _0xeb38c8) _0x2139f7['style'](_0x3cecd4, _0x480b9e, _0xeb38c8[_0x480b9e]);
                })), _0x41ba5b = _0x22fddc(_0x2b966d ? _0x9c1eb1[_0x480b9e] : 0x0, _0x480b9e, _0x336535), _0x480b9e in _0x9c1eb1 || (_0x9c1eb1[_0x480b9e] = _0x41ba5b['start'], _0x2b966d && (_0x41ba5b['end'] = _0x41ba5b['start'], _0x41ba5b['start'] = 0x0));
        }],
        'prefilter': function(_0x5cd09f, _0xa59f8b) {
            _0xa59f8b ? _0x131ec1['prefilters']['unshift'](_0x5cd09f) : _0x131ec1['prefilters']['push'](_0x5cd09f);
        }
    });
    _0x2139f7['speed'] = function(_0x39ae58, _0x2adef2, _0x26fa56) {
        var _0x75e5cb = _0x39ae58 && 'object' == typeof _0x39ae58 ? _0x2139f7['extend']({}, _0x39ae58) : {
            'complete': _0x26fa56 || !_0x26fa56 && _0x2adef2 || _0x2139f7['isFunction'](_0x39ae58) && _0x39ae58,
            'duration': _0x39ae58,
            'easing': _0x26fa56 && _0x2adef2 || _0x2adef2 && !_0x2139f7['isFunction'](_0x2adef2) && _0x2adef2
        };
        return _0x2139f7['fx']['off'] ? _0x75e5cb['duration'] = 0x0 : 'number' != typeof _0x75e5cb['duration'] && (_0x75e5cb['duration'] in _0x2139f7['fx']['speeds'] ? _0x75e5cb['duration'] = _0x2139f7['fx']['speeds'][_0x75e5cb['duration']] : _0x75e5cb['duration'] = _0x2139f7['fx']['speeds']['_default']), null != _0x75e5cb['queue'] && !0x0 !== _0x75e5cb['queue'] || (_0x75e5cb['queue'] = 'fx'), _0x75e5cb['old'] = _0x75e5cb['complete'], _0x75e5cb['complete'] = function() {
            _0x2139f7['isFunction'](_0x75e5cb['old']) && _0x75e5cb['old']['call'](this);
            _0x75e5cb['queue'] && _0x2139f7['dequeue'](this, _0x75e5cb['queue']);
        }, _0x75e5cb;
    };
    _0x2139f7['fn']['extend']({
        'fadeTo': function(_0x96554c, _0x12c855, _0x11bce5, _0x265631) {
            return this['filter'](_0x41a80d)['css']('opacity', 0x0)['show']()['end']()['animate']({
                'opacity': _0x12c855
            }, _0x96554c, _0x11bce5, _0x265631);
        },
        'animate': function(_0x373431, _0x143f14, _0x4600cf, _0x3a975f) {
            var _0x26c496 = _0x2139f7['isEmptyObject'](_0x373431),
                _0x2cca37 = _0x2139f7['speed'](_0x143f14, _0x4600cf, _0x3a975f);
            _0x143f14 = function() {
                var _0x16bcb1 = _0x131ec1(this, _0x2139f7['extend']({}, _0x373431), _0x2cca37);
                (_0x26c496 || _0x2c5ff7['get'](this, 'finish')) && _0x16bcb1['stop'](!0x0);
            };
            return _0x143f14['finish'] = _0x143f14, _0x26c496 || !0x1 === _0x2cca37['queue'] ? this['each'](_0x143f14) : this['queue'](_0x2cca37['queue'], _0x143f14);
        },
        'stop': function(_0x58b9c2, _0x598654, _0x22391a) {
            var _0x1af053 = function(_0x2a9ba9) {
                var _0x2c4a98 = _0x2a9ba9['stop'];
                delete _0x2a9ba9['stop'];
                _0x2c4a98(_0x22391a);
            };
            return 'string' != typeof _0x58b9c2 && (_0x22391a = _0x598654, _0x598654 = _0x58b9c2, _0x58b9c2 = void 0x0), _0x598654 && !0x1 !== _0x58b9c2 && this['queue'](_0x58b9c2 || 'fx', []), this['each'](function() {
                var _0x39f3fb = !0x0,
                    _0x202cf8 = null != _0x58b9c2 && _0x58b9c2 + 'queueHooks',
                    _0x1ea8a1 = _0x2139f7['timers'],
                    _0x34a4c0 = _0x2c5ff7['get'](this);
                if (_0x202cf8) _0x34a4c0[_0x202cf8] && _0x34a4c0[_0x202cf8]['stop'] && _0x1af053(_0x34a4c0[_0x202cf8]);
                else
                    for (_0x202cf8 in _0x34a4c0) _0x34a4c0[_0x202cf8] && _0x34a4c0[_0x202cf8]['stop'] && _0x5baefe['test'](_0x202cf8) && _0x1af053(_0x34a4c0[_0x202cf8]);
                for (_0x202cf8 = _0x1ea8a1['length']; _0x202cf8--;) _0x1ea8a1[_0x202cf8]['elem'] !== this || null != _0x58b9c2 && _0x1ea8a1[_0x202cf8]['queue'] !== _0x58b9c2 || (_0x1ea8a1[_0x202cf8]['anim']['stop'](_0x22391a), _0x39f3fb = !0x1, _0x1ea8a1['splice'](_0x202cf8, 0x1));
                !_0x39f3fb && _0x22391a || _0x2139f7['dequeue'](this, _0x58b9c2);
            });
        },
        'finish': function(_0x3b3cd8) {
            return !0x1 !== _0x3b3cd8 && (_0x3b3cd8 = _0x3b3cd8 || 'fx'), this['each'](function() {
                var _0x260914, _0x405989 = _0x2c5ff7['get'](this),
                    _0xb7d202 = _0x405989[_0x3b3cd8 + 'queue'];
                _0x260914 = _0x405989[_0x3b3cd8 + 'queueHooks'];
                var _0x4d7b0b = _0x2139f7['timers'],
                    _0x12caa9 = _0xb7d202 ? _0xb7d202['length'] : 0x0;
                _0x405989['finish'] = !0x0;
                _0x2139f7['queue'](this, _0x3b3cd8, []);
                _0x260914 && _0x260914['stop'] && _0x260914['stop']['call'](this, !0x0);
                for (_0x260914 = _0x4d7b0b['length']; _0x260914--;) _0x4d7b0b[_0x260914]['elem'] === this && _0x4d7b0b[_0x260914]['queue'] === _0x3b3cd8 && (_0x4d7b0b[_0x260914]['anim']['stop'](!0x0), _0x4d7b0b['splice'](_0x260914, 0x1));
                for (_0x260914 = 0x0; _0x260914 < _0x12caa9; _0x260914++) _0xb7d202[_0x260914] && _0xb7d202[_0x260914]['finish'] && _0xb7d202[_0x260914]['finish']['call'](this);
                delete _0x405989['finish'];
            });
        }
    });
    _0x2139f7['each'](['toggle', 'show', 'hide'], function(_0x2ba7c7, _0x50099d) {
        var _0x2079fc = _0x2139f7['fn'][_0x50099d];
        _0x2139f7['fn'][_0x50099d] = function(_0x423633, _0x36a3aa, _0x22b273) {
            return null == _0x423633 || 'boolean' == typeof _0x423633 ? _0x2079fc['apply'](this, arguments) : this['animate'](_0x299c43(_0x50099d, !0x0), _0x423633, _0x36a3aa, _0x22b273);
        };
    });
    _0x2139f7['each']({
        'slideDown': _0x299c43('show'),
        'slideUp': _0x299c43('hide'),
        'slideToggle': _0x299c43('toggle'),
        'fadeIn': {
            'opacity': 'show'
        },
        'fadeOut': {
            'opacity': 'hide'
        },
        'fadeToggle': {
            'opacity': 'toggle'
        }
    }, function(_0x7635b3, _0x2cb21b) {
        _0x2139f7['fn'][_0x7635b3] = function(_0x282c86, _0x238cbd, _0x5c1f86) {
            return this['animate'](_0x2cb21b, _0x282c86, _0x238cbd, _0x5c1f86);
        };
    });
    _0x2139f7['timers'] = [];
    _0x2139f7['fx']['tick'] = function() {
        var _0x2059af, _0x520d41 = 0x0,
            _0x559cef = _0x2139f7['timers'];
        for (_0xefbd34 = _0x2139f7['now'](); _0x520d41 < _0x559cef['length']; _0x520d41++) _0x2059af = _0x559cef[_0x520d41], _0x2059af() || _0x559cef[_0x520d41] !== _0x2059af || _0x559cef['splice'](_0x520d41--, 0x1);
        _0x559cef['length'] || _0x2139f7['fx']['stop']();
        _0xefbd34 = void 0x0;
    };
    _0x2139f7['fx']['timer'] = function(_0x39d934) {
        _0x2139f7['timers']['push'](_0x39d934);
        _0x2139f7['fx']['start']();
    };
    _0x2139f7['fx']['interval'] = 0xd;
    _0x2139f7['fx']['start'] = function() {
        _0xa6bac1 || (_0xa6bac1 = !0x0, _0x508fd7());
    };
    _0x2139f7['fx']['stop'] = function() {
        _0xa6bac1 = null;
    };
    _0x2139f7['fx']['speeds'] = {
        'slow': 0x258,
        'fast': 0xc8,
        '_default': 0x190
    };
    _0x2139f7['fn']['delay'] = function(_0x249606, _0x408b5a) {
        return _0x249606 = _0x2139f7['fx'] ? _0x2139f7['fx']['speeds'][_0x249606] || _0x249606 : _0x249606, _0x408b5a = _0x408b5a || 'fx', this['queue'](_0x408b5a, function(_0x3be667, _0x41e08d) {
            var _0x474ec1 = _0x73c481['setTimeout'](_0x3be667, _0x249606);
            _0x41e08d['stop'] = function() {
                _0x73c481['clearTimeout'](_0x474ec1);
            };
        });
    };
    var _0x357d7c = _0x175e87['createElement']('input'),
        _0x567659 = _0x175e87['createElement']('select')['appendChild'](_0x175e87['createElement']('option'));
    _0x357d7c['type'] = 'checkbox';
    _0x11c3a0['checkOn'] = '' !== _0x357d7c['value'];
    _0x11c3a0['optSelected'] = _0x567659['selected'];
    _0x357d7c = _0x175e87['createElement']('input');
    _0x357d7c['value'] = 't';
    _0x357d7c['type'] = 'radio';
    _0x11c3a0['radioValue'] = 't' === _0x357d7c['value'];
    var _0x3326dd, _0x1902cf = _0x2139f7['expr']['attrHandle'];
    _0x2139f7['fn']['extend']({
        'attr': function(_0xc3045a, _0x1992f4) {
            return _0x4c2afe(this, _0x2139f7['attr'], _0xc3045a, _0x1992f4, 0x1 < arguments['length']);
        },
        'removeAttr': function(_0x2f826f) {
            return this['each'](function() {
                _0x2139f7['removeAttr'](this, _0x2f826f);
            });
        }
    });
    _0x2139f7['extend']({
        'attr': function(_0x2a9969, _0x4dd78f, _0x376f85) {
            var _0x5ca2c3, _0x584e62, _0x5d13ba = _0x2a9969['nodeType'];
            if (0x3 !== _0x5d13ba && 0x8 !== _0x5d13ba && 0x2 !== _0x5d13ba) return 'undefined' == typeof _0x2a9969['getAttribute'] ? _0x2139f7['prop'](_0x2a9969, _0x4dd78f, _0x376f85) : (0x1 === _0x5d13ba && _0x2139f7['isXMLDoc'](_0x2a9969) || (_0x584e62 = _0x2139f7['attrHooks'][_0x4dd78f['toLowerCase']()] || (_0x2139f7['expr']['match']['bool']['test'](_0x4dd78f) ? _0x3326dd : void 0x0)), void 0x0 !== _0x376f85 ? null === _0x376f85 ? void _0x2139f7['removeAttr'](_0x2a9969, _0x4dd78f) : _0x584e62 && 'set' in _0x584e62 && void 0x0 !== (_0x5ca2c3 = _0x584e62['set'](_0x2a9969, _0x376f85, _0x4dd78f)) ? _0x5ca2c3 : (_0x2a9969['setAttribute'](_0x4dd78f, _0x376f85 + ''), _0x376f85) : _0x584e62 && 'get' in _0x584e62 && null !== (_0x5ca2c3 = _0x584e62['get'](_0x2a9969, _0x4dd78f)) ? _0x5ca2c3 : (_0x5ca2c3 = _0x2139f7['find']['attr'](_0x2a9969, _0x4dd78f), null == _0x5ca2c3 ? void 0x0 : _0x5ca2c3));
        },
        'attrHooks': {
            'type': {
                'set': function(_0x2f12fd, _0x2edba8) {
                    if (!_0x11c3a0['radioValue'] && 'radio' === _0x2edba8 && _0x443dae(_0x2f12fd, 'input')) {
                        var _0x487a77 = _0x2f12fd['value'];
                        return _0x2f12fd['setAttribute']('type', _0x2edba8), _0x487a77 && (_0x2f12fd['value'] = _0x487a77), _0x2edba8;
                    }
                }
            }
        },
        'removeAttr': function(_0x3f26e6, _0x49fdaa) {
            var _0x491119, _0x226115 = 0x0,
                _0x1dac59 = _0x49fdaa && _0x49fdaa['match'](_0x18f593);
            if (_0x1dac59 && 0x1 === _0x3f26e6['nodeType'])
                for (; _0x491119 = _0x1dac59[_0x226115++];) _0x3f26e6['removeAttribute'](_0x491119);
        }
    });
    _0x3326dd = {
        'set': function(_0x1c6c32, _0x4b364e, _0x398c66) {
            return !0x1 === _0x4b364e ? _0x2139f7['removeAttr'](_0x1c6c32, _0x398c66) : _0x1c6c32['setAttribute'](_0x398c66, _0x398c66), _0x398c66;
        }
    };
    _0x2139f7['each'](_0x2139f7['expr']['match']['bool']['source']['match'](/\w+/g), function(_0x2c56ba, _0x1c1efd) {
        var _0x400d30 = _0x1902cf[_0x1c1efd] || _0x2139f7['find']['attr'];
        _0x1902cf[_0x1c1efd] = function(_0x4730d9, _0x1d8303, _0x9f2537) {
            var _0x28e8a5, _0x13747a, _0x3a1134 = _0x1d8303['toLowerCase']();
            return _0x9f2537 || (_0x13747a = _0x1902cf[_0x3a1134], _0x1902cf[_0x3a1134] = _0x28e8a5, _0x28e8a5 = null != _0x400d30(_0x4730d9, _0x1d8303, _0x9f2537) ? _0x3a1134 : null, _0x1902cf[_0x3a1134] = _0x13747a), _0x28e8a5;
        };
    });
    var _0x3a4769 = /^(?:input|select|textarea|button)$/i,
        _0x1639ab = /^(?:a|area)$/i;
    _0x2139f7['fn']['extend']({
        'prop': function(_0x21a11d, _0xfeb29f) {
            return _0x4c2afe(this, _0x2139f7['prop'], _0x21a11d, _0xfeb29f, 0x1 < arguments['length']);
        },
        'removeProp': function(_0x2c15d) {
            return this['each'](function() {
                delete this[_0x2139f7['propFix'][_0x2c15d] || _0x2c15d];
            });
        }
    });
    _0x2139f7['extend']({
        'prop': function(_0x4d1171, _0x26e78d, _0x2f3025) {
            var _0x5aed7d, _0x51ad3b, _0x239127 = _0x4d1171['nodeType'];
            if (0x3 !== _0x239127 && 0x8 !== _0x239127 && 0x2 !== _0x239127) return 0x1 === _0x239127 && _0x2139f7['isXMLDoc'](_0x4d1171) || (_0x26e78d = _0x2139f7['propFix'][_0x26e78d] || _0x26e78d, _0x51ad3b = _0x2139f7['propHooks'][_0x26e78d]), void 0x0 !== _0x2f3025 ? _0x51ad3b && 'set' in _0x51ad3b && void 0x0 !== (_0x5aed7d = _0x51ad3b['set'](_0x4d1171, _0x2f3025, _0x26e78d)) ? _0x5aed7d : _0x4d1171[_0x26e78d] = _0x2f3025 : _0x51ad3b && 'get' in _0x51ad3b && null !== (_0x5aed7d = _0x51ad3b['get'](_0x4d1171, _0x26e78d)) ? _0x5aed7d : _0x4d1171[_0x26e78d];
        },
        'propHooks': {
            'tabIndex': {
                'get': function(_0x21486a) {
                    var _0x5b4f11 = _0x2139f7['find']['attr'](_0x21486a, 'tabindex');
                    return _0x5b4f11 ? parseInt(_0x5b4f11, 0xa) : _0x3a4769['test'](_0x21486a['nodeName']) || _0x1639ab['test'](_0x21486a['nodeName']) && _0x21486a['href'] ? 0x0 : -0x1;
                }
            }
        },
        'propFix': {
            'for': 'htmlFor',
            'class': 'className'
        }
    });
    _0x11c3a0['optSelected'] || (_0x2139f7['propHooks']['selected'] = {
        'get': function(_0x4739db) {
            _0x4739db = _0x4739db['parentNode'];
            return _0x4739db && _0x4739db['parentNode'] && _0x4739db['parentNode']['selectedIndex'], null;
        },
        'set': function(_0x37ba65) {
            _0x37ba65 = _0x37ba65['parentNode'];
            _0x37ba65 && (_0x37ba65['selectedIndex'], _0x37ba65['parentNode'] && _0x37ba65['parentNode']['selectedIndex']);
        }
    });
    _0x2139f7['each']('tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable' ['split'](' '), function() {
        _0x2139f7['propFix'][this['toLowerCase']()] = this;
    });
    _0x2139f7['fn']['extend']({
        'addClass': function(_0x22f9bb) {
            var _0x32f2a5, _0xee2e40, _0x2da9d3, _0x8b7066, _0x514da5, _0x3f71c4, _0x35bc33 = 0x0;
            if (_0x2139f7['isFunction'](_0x22f9bb)) return this['each'](function(_0x405d14) {
                _0x2139f7(this)['addClass'](_0x22f9bb['call'](this, _0x405d14, _0x2e68fd(this)));
            });
            if ('string' == typeof _0x22f9bb && _0x22f9bb)
                for (_0x32f2a5 = _0x22f9bb['match'](_0x18f593) || []; _0xee2e40 = this[_0x35bc33++];)
                    if (_0x8b7066 = _0x2e68fd(_0xee2e40), _0x2da9d3 = 0x1 === _0xee2e40['nodeType'] && ' ' + _0x5f58a0(_0x8b7066) + ' ') {
                        for (_0x3f71c4 = 0x0; _0x514da5 = _0x32f2a5[_0x3f71c4++];) 0x0 > _0x2da9d3['indexOf'](' ' + _0x514da5 + ' ') && (_0x2da9d3 += _0x514da5 + ' ');
                        _0x2da9d3 = _0x5f58a0(_0x2da9d3);
                        _0x8b7066 !== _0x2da9d3 && _0xee2e40['setAttribute']('class', _0x2da9d3);
                    }
            return this;
        },
        'removeClass': function(_0x58ea7d) {
            var _0x559baa, _0x54a0c4, _0x29cf42, _0x59663d, _0x22c2f8, _0x858e06, _0x5313f2 = 0x0;
            if (_0x2139f7['isFunction'](_0x58ea7d)) return this['each'](function(_0x195592) {
                _0x2139f7(this)['removeClass'](_0x58ea7d['call'](this, _0x195592, _0x2e68fd(this)));
            });
            if (!arguments['length']) return this['attr']('class', '');
            if ('string' == typeof _0x58ea7d && _0x58ea7d)
                for (_0x559baa = _0x58ea7d['match'](_0x18f593) || []; _0x54a0c4 = this[_0x5313f2++];)
                    if (_0x59663d = _0x2e68fd(_0x54a0c4), _0x29cf42 = 0x1 === _0x54a0c4['nodeType'] && ' ' + _0x5f58a0(_0x59663d) + ' ') {
                        for (_0x858e06 = 0x0; _0x22c2f8 = _0x559baa[_0x858e06++];)
                            for (; - 0x1 < _0x29cf42['indexOf'](' ' + _0x22c2f8 + ' ');) _0x29cf42 = _0x29cf42['replace'](' ' + _0x22c2f8 + ' ', ' ');
                        _0x29cf42 = _0x5f58a0(_0x29cf42);
                        _0x59663d !== _0x29cf42 && _0x54a0c4['setAttribute']('class', _0x29cf42);
                    }
            return this;
        },
        'toggleClass': function(_0x2e1e86, _0x53e8e3) {
            var _0x390132 = typeof _0x2e1e86;
            return 'boolean' == typeof _0x53e8e3 && 'string' === _0x390132 ? _0x53e8e3 ? this['addClass'](_0x2e1e86) : this['removeClass'](_0x2e1e86) : _0x2139f7['isFunction'](_0x2e1e86) ? this['each'](function(_0x1d7e09) {
                _0x2139f7(this)['toggleClass'](_0x2e1e86['call'](this, _0x1d7e09, _0x2e68fd(this), _0x53e8e3), _0x53e8e3);
            }) : this['each'](function() {
                var _0x15470f, _0x5a3c8a, _0x4d9cf5, _0x1498b1;
                if ('string' === _0x390132) {
                    _0x5a3c8a = 0x0;
                    _0x4d9cf5 = _0x2139f7(this);
                    for (_0x1498b1 = _0x2e1e86['match'](_0x18f593) || []; _0x15470f = _0x1498b1[_0x5a3c8a++];) _0x4d9cf5['hasClass'](_0x15470f) ? _0x4d9cf5['removeClass'](_0x15470f) : _0x4d9cf5['addClass'](_0x15470f);
                } else void 0x0 !== _0x2e1e86 && 'boolean' !== _0x390132 || (_0x15470f = _0x2e68fd(this), _0x15470f && _0x2c5ff7['set'](this, '__className__', _0x15470f), this['setAttribute'] && this['setAttribute']('class', _0x15470f || !0x1 === _0x2e1e86 ? '' : _0x2c5ff7['get'](this, '__className__') || ''));
            });
        },
        'hasClass': function(_0x412a07) {
            var _0x58d2eb, _0x26cc26 = 0x0;
            for (_0x412a07 = ' ' + _0x412a07 + ' '; _0x58d2eb = this[_0x26cc26++];)
                if (0x1 === _0x58d2eb['nodeType'] && -0x1 < (' ' + _0x5f58a0(_0x2e68fd(_0x58d2eb)) + ' ')['indexOf'](_0x412a07)) return !0x0;
            return !0x1;
        }
    });
    var _0xfde454 = /\r/g;
    _0x2139f7['fn']['extend']({
        'val': function(_0x2129d2) {
            var _0x172a02, _0x598548, _0x4688c8, _0x289a15 = this[0x0];
            if (arguments['length']) return _0x4688c8 = _0x2139f7['isFunction'](_0x2129d2), this['each'](function(_0x4f6637) {
                var _0x5c17a8;
                0x1 === this['nodeType'] && (_0x5c17a8 = _0x4688c8 ? _0x2129d2['call'](this, _0x4f6637, _0x2139f7(this)['val']()) : _0x2129d2, null == _0x5c17a8 ? _0x5c17a8 = '' : 'number' == typeof _0x5c17a8 ? _0x5c17a8 += '' : Array['isArray'](_0x5c17a8) && (_0x5c17a8 = _0x2139f7['map'](_0x5c17a8, function(_0x1aff8a) {
                    return null == _0x1aff8a ? '' : _0x1aff8a + '';
                })), _0x172a02 = _0x2139f7['valHooks'][this['type']] || _0x2139f7['valHooks'][this['nodeName']['toLowerCase']()], _0x172a02 && 'set' in _0x172a02 && void 0x0 !== _0x172a02['set'](this, _0x5c17a8, 'value') || (this['value'] = _0x5c17a8));
            });
            if (_0x289a15) return _0x172a02 = _0x2139f7['valHooks'][_0x289a15['type']] || _0x2139f7['valHooks'][_0x289a15['nodeName']['toLowerCase']()], _0x172a02 && 'get' in _0x172a02 && void 0x0 !== (_0x598548 = _0x172a02['get'](_0x289a15, 'value')) ? _0x598548 : (_0x598548 = _0x289a15['value'], 'string' == typeof _0x598548 ? _0x598548['replace'](_0xfde454, '') : null == _0x598548 ? '' : _0x598548);
        }
    });
    _0x2139f7['extend']({
        'valHooks': {
            'option': {
                'get': function(_0x268ce7) {
                    var _0x2a5983 = _0x2139f7['find']['attr'](_0x268ce7, 'value');
                    return null != _0x2a5983 ? _0x2a5983 : _0x5f58a0(_0x2139f7['text'](_0x268ce7));
                }
            },
            'select': {
                'get': function(_0x1ff434) {
                    var _0x49457d, _0x4d918c, _0x1e22f0 = _0x1ff434['options'],
                        _0x5bc8bf = _0x1ff434['selectedIndex'],
                        _0x189b6b = 'select-one' === _0x1ff434['type'],
                        _0x45e7ae = _0x189b6b ? null : [],
                        _0x3a7981 = _0x189b6b ? _0x5bc8bf + 0x1 : _0x1e22f0['length'];
                    for (_0x4d918c = 0x0 > _0x5bc8bf ? _0x3a7981 : _0x189b6b ? _0x5bc8bf : 0x0; _0x4d918c < _0x3a7981; _0x4d918c++)
                        if (_0x49457d = _0x1e22f0[_0x4d918c], (_0x49457d['selected'] || _0x4d918c === _0x5bc8bf) && !_0x49457d['disabled'] && (!_0x49457d['parentNode']['disabled'] || !_0x443dae(_0x49457d['parentNode'], 'optgroup'))) {
                            if (_0x1ff434 = _0x2139f7(_0x49457d)['val'](), _0x189b6b) return _0x1ff434;
                            _0x45e7ae['push'](_0x1ff434);
                        }
                    return _0x45e7ae;
                },
                'set': function(_0x3847bf, _0x2de2ff) {
                    for (var _0x51bc8b, _0x5db0b9, _0x4ec9a4 = _0x3847bf['options'], _0x9eead7 = _0x2139f7['makeArray'](_0x2de2ff), _0x42fafa = _0x4ec9a4['length']; _0x42fafa--;) _0x5db0b9 = _0x4ec9a4[_0x42fafa], (_0x5db0b9['selected'] = -0x1 < _0x2139f7['inArray'](_0x2139f7['valHooks']['option']['get'](_0x5db0b9), _0x9eead7)) && (_0x51bc8b = !0x0);
                    return _0x51bc8b || (_0x3847bf['selectedIndex'] = -0x1), _0x9eead7;
                }
            }
        }
    });
    _0x2139f7['each'](['radio', 'checkbox'], function() {
        _0x2139f7['valHooks'][this] = {
            'set': function(_0x4b9a80, _0xa826cf) {
                if (Array['isArray'](_0xa826cf)) return _0x4b9a80['checked'] = -0x1 < _0x2139f7['inArray'](_0x2139f7(_0x4b9a80)['val'](), _0xa826cf);
            }
        };
        _0x11c3a0['checkOn'] || (_0x2139f7['valHooks'][this]['get'] = function(_0x41f852) {
            return null === _0x41f852['getAttribute']('value') ? 'on' : _0x41f852['value'];
        });
    });
    var _0x39f6a9 = /^(?:focusinfocus|focusoutblur)$/;
    _0x2139f7['extend'](_0x2139f7['event'], {
        'trigger': function(_0x3fc655, _0x4f4f35, _0x313904, _0x117550) {
            var _0x123685, _0x3cf3c0, _0x3cc5df, _0x5b6f3c, _0x1f400e, _0x268d76, _0x1ebd10, _0x3e8154 = [_0x313904 || _0x175e87],
                _0x277f73 = _0x45ab80['call'](_0x3fc655, 'type') ? _0x3fc655['type'] : _0x3fc655;
            _0x123685 = _0x45ab80['call'](_0x3fc655, 'namespace') ? _0x3fc655['namespace']['split']('.') : [];
            if (_0x3cf3c0 = _0x3cc5df = _0x313904 = _0x313904 || _0x175e87, 0x3 !== _0x313904['nodeType'] && 0x8 !== _0x313904['nodeType'] && !_0x39f6a9['test'](_0x277f73 + _0x2139f7['event']['triggered']) && (-0x1 < _0x277f73['indexOf']('.') && (_0x123685 = _0x277f73['split']('.'), _0x277f73 = _0x123685['shift'](), _0x123685['sort']()), _0x1f400e = 0x0 > _0x277f73['indexOf'](':') && 'on' + _0x277f73, _0x3fc655 = _0x3fc655[_0x2139f7['expando']] ? _0x3fc655 : new _0x2139f7['Event'](_0x277f73, 'object' == typeof _0x3fc655 && _0x3fc655), _0x3fc655['isTrigger'] = _0x117550 ? 0x2 : 0x3, _0x3fc655['namespace'] = _0x123685['join']('.'), _0x3fc655['rnamespace'] = _0x3fc655['namespace'] ? RegExp('(^|\x5c.)' + _0x123685['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null, _0x3fc655['result'] = void 0x0, _0x3fc655['target'] || (_0x3fc655['target'] = _0x313904), _0x4f4f35 = null == _0x4f4f35 ? [_0x3fc655] : _0x2139f7['makeArray'](_0x4f4f35, [_0x3fc655]), _0x1ebd10 = _0x2139f7['event']['special'][_0x277f73] || {}, _0x117550 || !_0x1ebd10['trigger'] || !0x1 !== _0x1ebd10['trigger']['apply'](_0x313904, _0x4f4f35))) {
                if (!_0x117550 && !_0x1ebd10['noBubble'] && !_0x2139f7['isWindow'](_0x313904)) {
                    _0x5b6f3c = _0x1ebd10['delegateType'] || _0x277f73;
                    for (_0x39f6a9['test'](_0x5b6f3c + _0x277f73) || (_0x3cf3c0 = _0x3cf3c0['parentNode']); _0x3cf3c0; _0x3cf3c0 = _0x3cf3c0['parentNode']) _0x3e8154['push'](_0x3cf3c0), _0x3cc5df = _0x3cf3c0;
                    _0x3cc5df === (_0x313904['ownerDocument'] || _0x175e87) && _0x3e8154['push'](_0x3cc5df['defaultView'] || _0x3cc5df['parentWindow'] || _0x73c481);
                }
                for (_0x123685 = 0x0;
                    (_0x3cf3c0 = _0x3e8154[_0x123685++]) && !_0x3fc655['isPropagationStopped']();) _0x3fc655['type'] = 0x1 < _0x123685 ? _0x5b6f3c : _0x1ebd10['bindType'] || _0x277f73, (_0x268d76 = (_0x2c5ff7['get'](_0x3cf3c0, 'events') || {})[_0x3fc655['type']] && _0x2c5ff7['get'](_0x3cf3c0, 'handle')) && _0x268d76['apply'](_0x3cf3c0, _0x4f4f35), (_0x268d76 = _0x1f400e && _0x3cf3c0[_0x1f400e]) && _0x268d76['apply'] && _0x916fc0(_0x3cf3c0) && (_0x3fc655['result'] = _0x268d76['apply'](_0x3cf3c0, _0x4f4f35), !0x1 === _0x3fc655['result'] && _0x3fc655['preventDefault']());
                return _0x3fc655['type'] = _0x277f73, _0x117550 || _0x3fc655['isDefaultPrevented']() || _0x1ebd10['_default'] && !0x1 !== _0x1ebd10['_default']['apply'](_0x3e8154['pop'](), _0x4f4f35) || !_0x916fc0(_0x313904) || _0x1f400e && _0x2139f7['isFunction'](_0x313904[_0x277f73]) && !_0x2139f7['isWindow'](_0x313904) && (_0x3cc5df = _0x313904[_0x1f400e], _0x3cc5df && (_0x313904[_0x1f400e] = null), _0x2139f7['event']['triggered'] = _0x277f73, _0x313904[_0x277f73](), _0x2139f7['event']['triggered'] = void 0x0, _0x3cc5df && (_0x313904[_0x1f400e] = _0x3cc5df)), _0x3fc655['result'];
            }
        },
        'simulate': function(_0x4136b6, _0x4db239, _0x26f64f) {
            _0x4136b6 = _0x2139f7['extend'](new _0x2139f7['Event'](), _0x26f64f, {
                'type': _0x4136b6,
                'isSimulated': !0x0
            });
            _0x2139f7['event']['trigger'](_0x4136b6, null, _0x4db239);
        }
    });
    _0x2139f7['fn']['extend']({
        'trigger': function(_0x1ba0f4, _0x1f5491) {
            return this['each'](function() {
                _0x2139f7['event']['trigger'](_0x1ba0f4, _0x1f5491, this);
            });
        },
        'triggerHandler': function(_0x30d563, _0x16502c) {
            var _0x1459e8 = this[0x0];
            if (_0x1459e8) return _0x2139f7['event']['trigger'](_0x30d563, _0x16502c, _0x1459e8, !0x0);
        }
    });
    _0x2139f7['each']('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu' ['split'](' '), function(_0x1c814c, _0x8d916f) {
        _0x2139f7['fn'][_0x8d916f] = function(_0x6b12c9, _0x32162d) {
            return 0x0 < arguments['length'] ? this['on'](_0x8d916f, null, _0x6b12c9, _0x32162d) : this['trigger'](_0x8d916f);
        };
    });
    _0x2139f7['fn']['extend']({
        'hover': function(_0x11e933, _0x540708) {
            return this['mouseenter'](_0x11e933)['mouseleave'](_0x540708 || _0x11e933);
        }
    });
    _0x11c3a0['focusin'] = 'onfocusin' in _0x73c481;
    _0x11c3a0['focusin'] || _0x2139f7['each']({
        'focus': 'focusin',
        'blur': 'focusout'
    }, function(_0x59ff92, _0x41eff7) {
        var _0xe7ae04 = function(_0x1e7b34) {
            _0x2139f7['event']['simulate'](_0x41eff7, _0x1e7b34['target'], _0x2139f7['event']['fix'](_0x1e7b34));
        };
        _0x2139f7['event']['special'][_0x41eff7] = {
            'setup': function() {
                var _0x9ca902 = this['ownerDocument'] || this,
                    _0x2c4828 = _0x2c5ff7['access'](_0x9ca902, _0x41eff7);
                _0x2c4828 || _0x9ca902['addEventListener'](_0x59ff92, _0xe7ae04, !0x0);
                _0x2c5ff7['access'](_0x9ca902, _0x41eff7, (_0x2c4828 || 0x0) + 0x1);
            },
            'teardown': function() {
                var _0x101e70 = this['ownerDocument'] || this,
                    _0x230ef6 = _0x2c5ff7['access'](_0x101e70, _0x41eff7) - 0x1;
                _0x230ef6 ? _0x2c5ff7['access'](_0x101e70, _0x41eff7, _0x230ef6) : (_0x101e70['removeEventListener'](_0x59ff92, _0xe7ae04, !0x0), _0x2c5ff7['remove'](_0x101e70, _0x41eff7));
            }
        };
    });
    var _0x194534 = _0x73c481['location'],
        _0x35dfc0 = _0x2139f7['now'](),
        _0x4ae298 = /\?/;
    _0x2139f7['parseXML'] = function(_0x5c0962) {
        var _0x5b8513;
        if (!_0x5c0962 || 'string' != typeof _0x5c0962) return null;
        try {
            _0x5b8513 = new _0x73c481['DOMParser']()['parseFromString'](_0x5c0962, 'text/xml');
        } catch (_0x9b3cb6) {
            _0x5b8513 = void 0x0;
        }
        return _0x5b8513 && !_0x5b8513['getElementsByTagName']('parsererror')['length'] || _0x2139f7['error']('Invalid XML: ' + _0x5c0962), _0x5b8513;
    };
    var _0x1d60cd = /\[\]$/,
        _0x2b72d8 = /\r?\n/g,
        _0x419487 = /^(?:submit|button|image|reset|file)$/i,
        _0x23f231 = /^(?:input|select|textarea|keygen)/i;
    _0x2139f7['param'] = function(_0x3cfcb6, _0x12bf13) {
        var _0xb43d3, _0x1aa9f0 = [],
            _0x544353 = function(_0x2b14a9, _0x3fb476) {
                var _0x31c6fd = _0x2139f7['isFunction'](_0x3fb476) ? _0x3fb476() : _0x3fb476;
                _0x1aa9f0[_0x1aa9f0['length']] = encodeURIComponent(_0x2b14a9) + '=' + encodeURIComponent(null == _0x31c6fd ? '' : _0x31c6fd);
            };
        if (Array['isArray'](_0x3cfcb6) || _0x3cfcb6['jquery'] && !_0x2139f7['isPlainObject'](_0x3cfcb6)) _0x2139f7['each'](_0x3cfcb6, function() {
            _0x544353(this['name'], this['value']);
        });
        else
            for (_0xb43d3 in _0x3cfcb6) _0x1a9296(_0xb43d3, _0x3cfcb6[_0xb43d3], _0x12bf13, _0x544353);
        return _0x1aa9f0['join']('&');
    };
    _0x2139f7['fn']['extend']({
        'serialize': function() {
            return _0x2139f7['param'](this['serializeArray']());
        },
        'serializeArray': function() {
            return this['map'](function() {
                var _0xb98f9c = _0x2139f7['prop'](this, 'elements');
                return _0xb98f9c ? _0x2139f7['makeArray'](_0xb98f9c) : this;
            })['filter'](function() {
                var _0x340f86 = this['type'];
                return this['name'] && !_0x2139f7(this)['is'](':disabled') && _0x23f231['test'](this['nodeName']) && !_0x419487['test'](_0x340f86) && (this['checked'] || !_0x2a4ece['test'](_0x340f86));
            })['map'](function(_0xea4deb, _0x2afb08) {
                var _0x5ee6ce = _0x2139f7(this)['val']();
                return null == _0x5ee6ce ? null : Array['isArray'](_0x5ee6ce) ? _0x2139f7['map'](_0x5ee6ce, function(_0x2f48cd) {
                    return {
                        'name': _0x2afb08['name'],
                        'value': _0x2f48cd['replace'](_0x2b72d8, '\x0d\x0a')
                    };
                }) : {
                    'name': _0x2afb08['name'],
                    'value': _0x5ee6ce['replace'](_0x2b72d8, '\x0d\x0a')
                };
            })['get']();
        }
    });
    var _0x35bfb4 = /%20/g,
        _0x616165 = /#.*$/,
        _0x18aef1 = /([?&])_=[^&]*/,
        _0x41f982 = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _0x4cbff2 = /^(?:GET|HEAD)$/,
        _0x454b01 = /^\/\//,
        _0x1a6bbd = {},
        _0x2ab5ff = {},
        _0x48ad08 = '*/' ['concat']('*'),
        _0x192232 = _0x175e87['createElement']('a');
    _0x192232['href'] = _0x194534['href'];
    _0x2139f7['extend']({
        'active': 0x0,
        'lastModified': {},
        'etag': {},
        'ajaxSettings': {
            'url': _0x194534['href'],
            'type': 'GET',
            'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/ ['test'](_0x194534['protocol']),
            'global': !0x0,
            'processData': !0x0,
            'async': !0x0,
            'contentType': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accepts': {
                '*': _0x48ad08,
                'text': 'text/plain',
                'html': 'text/html',
                'xml': 'application/xml, text/xml',
                'json': 'application/json, text/javascript'
            },
            'contents': {
                'xml': /\bxml\b/,
                'html': /\bhtml/,
                'json': /\bjson\b/
            },
            'responseFields': {
                'xml': 'responseXML',
                'text': 'responseText',
                'json': 'responseJSON'
            },
            'converters': {
                '* text': String,
                'text html': !0x0,
                'text json': JSON['parse'],
                'text xml': _0x2139f7['parseXML']
            },
            'flatOptions': {
                'url': !0x0,
                'context': !0x0
            }
        },
        'ajaxSetup': function(_0x1ef394, _0x359336) {
            return _0x359336 ? _0x4b6b0e(_0x4b6b0e(_0x1ef394, _0x2139f7['ajaxSettings']), _0x359336) : _0x4b6b0e(_0x2139f7['ajaxSettings'], _0x1ef394);
        },
        'ajaxPrefilter': _0x37c251(_0x1a6bbd),
        'ajaxTransport': _0x37c251(_0x2ab5ff),
        'ajax': function(_0x538ce3, _0x648525) {
            function _0xf5b805(_0x1062ad, _0x4b5702, _0xb15b5, _0x2a282d) {
                var _0x2570c2, _0xc61c75, _0x315e31, _0x281e57, _0x734d4b = _0x4b5702;
                if (!_0x24124b) {
                    _0x24124b = !0x0;
                    _0x1d87d0 && _0x73c481['clearTimeout'](_0x1d87d0);
                    _0x1410de = void 0x0;
                    _0xe7106b = _0x2a282d || '';
                    _0x30ea7a['readyState'] = 0x0 < _0x1062ad ? 0x4 : 0x0;
                    _0x2a282d = 0xc8 <= _0x1062ad && 0x12c > _0x1062ad || 0x130 === _0x1062ad;
                    if (_0xb15b5) {
                        _0x315e31 = _0x51a770;
                        for (var _0x486fd9 = _0x30ea7a, _0x1da0ae, _0x1c5e0d, _0xbbf54e, _0x5b1637, _0x3891f6 = _0x315e31['contents'], _0x4e942f = _0x315e31['dataTypes'];
                            '*' === _0x4e942f[0x0];) _0x4e942f['shift'](), void 0x0 === _0x1da0ae && (_0x1da0ae = _0x315e31['mimeType'] || _0x486fd9['getResponseHeader']('Content-Type'));
                        if (_0x1da0ae)
                            for (_0x1c5e0d in _0x3891f6)
                                if (_0x3891f6[_0x1c5e0d] && _0x3891f6[_0x1c5e0d]['test'](_0x1da0ae)) {
                                    _0x4e942f['unshift'](_0x1c5e0d);
                                    break;
                                }
                        if (_0x4e942f[0x0] in _0xb15b5) _0xbbf54e = _0x4e942f[0x0];
                        else {
                            for (_0x1c5e0d in _0xb15b5) {
                                if (!_0x4e942f[0x0] || _0x315e31['converters'][_0x1c5e0d + ' ' + _0x4e942f[0x0]]) {
                                    _0xbbf54e = _0x1c5e0d;
                                    break;
                                }
                                _0x5b1637 || (_0x5b1637 = _0x1c5e0d);
                            }
                            _0xbbf54e = _0xbbf54e || _0x5b1637;
                        }
                        _0xb15b5 = _0xbbf54e ? (_0xbbf54e !== _0x4e942f[0x0] && _0x4e942f['unshift'](_0xbbf54e), _0xb15b5[_0xbbf54e]) : void 0x0;
                        _0x315e31 = _0xb15b5;
                    }
                    var _0x192196;
                    _0x1c0862: {
                        _0xb15b5 = _0x51a770;_0x1da0ae = _0x315e31;_0x1c5e0d = _0x30ea7a;_0xbbf54e = _0x2a282d;
                        var _0x2a618f, _0x525c50, _0x2d1722;_0x315e31 = {};_0x486fd9 = _0xb15b5['dataTypes']['slice']();
                        if (_0x486fd9[0x1])
                            for (_0x2a618f in _0xb15b5['converters']) _0x315e31[_0x2a618f['toLowerCase']()] = _0xb15b5['converters'][_0x2a618f];
                        for (_0x5b1637 = _0x486fd9['shift'](); _0x5b1637;)
                            if (_0xb15b5['responseFields'][_0x5b1637] && (_0x1c5e0d[_0xb15b5['responseFields'][_0x5b1637]] = _0x1da0ae), !_0x2d1722 && _0xbbf54e && _0xb15b5['dataFilter'] && (_0x1da0ae = _0xb15b5['dataFilter'](_0x1da0ae, _0xb15b5['dataType'])), _0x2d1722 = _0x5b1637, _0x5b1637 = _0x486fd9['shift']())
                                if ('*' === _0x5b1637) _0x5b1637 = _0x2d1722;
                                else if ('*' !== _0x2d1722 && _0x2d1722 !== _0x5b1637) {
                            if (_0x2a618f = _0x315e31[_0x2d1722 + ' ' + _0x5b1637] || _0x315e31['* ' + _0x5b1637], !_0x2a618f)
                                for (_0x192196 in _0x315e31)
                                    if (_0x525c50 = _0x192196['split'](' '), _0x525c50[0x1] === _0x5b1637 && (_0x2a618f = _0x315e31[_0x2d1722 + ' ' + _0x525c50[0x0]] || _0x315e31['* ' + _0x525c50[0x0]])) {
                                        !0x0 === _0x2a618f ? _0x2a618f = _0x315e31[_0x192196] : !0x0 !== _0x315e31[_0x192196] && (_0x5b1637 = _0x525c50[0x0], _0x486fd9['unshift'](_0x525c50[0x1]));
                                        break;
                                    }
                            if (!0x0 !== _0x2a618f)
                                if (_0x2a618f && _0xb15b5['throws']) _0x1da0ae = _0x2a618f(_0x1da0ae);
                                else try {
                                    _0x1da0ae = _0x2a618f(_0x1da0ae);
                                } catch (_0x54e09a) {
                                    _0x192196 = {
                                        'state': 'parsererror',
                                        'error': _0x2a618f ? _0x54e09a : 'No conversion from ' + _0x2d1722 + ' to ' + _0x5b1637
                                    };
                                    break _0x1c0862;
                                }
                        }
                        _0x192196 = {
                            'state': 'success',
                            'data': _0x1da0ae
                        };
                    }
                    _0x315e31 = _0x192196;
                    _0x2a282d ? (_0x51a770['ifModified'] && (_0x281e57 = _0x30ea7a['getResponseHeader']('Last-Modified'), _0x281e57 && (_0x2139f7['lastModified'][_0x2ba4c8] = _0x281e57), _0x281e57 = _0x30ea7a['getResponseHeader']('etag'), _0x281e57 && (_0x2139f7['etag'][_0x2ba4c8] = _0x281e57)), 0xcc === _0x1062ad || 'HEAD' === _0x51a770['type'] ? _0x734d4b = 'nocontent' : 0x130 === _0x1062ad ? _0x734d4b = 'notmodified' : (_0x734d4b = _0x315e31['state'], _0x2570c2 = _0x315e31['data'], _0xc61c75 = _0x315e31['error'], _0x2a282d = !_0xc61c75)) : (_0xc61c75 = _0x734d4b, !_0x1062ad && _0x734d4b || (_0x734d4b = 'error', 0x0 > _0x1062ad && (_0x1062ad = 0x0)));
                    _0x30ea7a['status'] = _0x1062ad;
                    _0x30ea7a['statusText'] = (_0x4b5702 || _0x734d4b) + '';
                    _0x2a282d ? _0x5091da['resolveWith'](_0x9910dc, [_0x2570c2, _0x734d4b, _0x30ea7a]) : _0x5091da['rejectWith'](_0x9910dc, [_0x30ea7a, _0x734d4b, _0xc61c75]);
                    _0x30ea7a['statusCode'](_0x1b3c7a);
                    _0x1b3c7a = void 0x0;
                    _0x4f5c5b && _0x34799f['trigger'](_0x2a282d ? 'ajaxSuccess' : 'ajaxError', [_0x30ea7a, _0x51a770, _0x2a282d ? _0x2570c2 : _0xc61c75]);
                    _0x200096['fireWith'](_0x9910dc, [_0x30ea7a, _0x734d4b]);
                    _0x4f5c5b && (_0x34799f['trigger']('ajaxComplete', [_0x30ea7a, _0x51a770]), --_0x2139f7['active'] || _0x2139f7['event']['trigger']('ajaxStop'));
                }
            }
            'object' == typeof _0x538ce3 && (_0x648525 = _0x538ce3, _0x538ce3 = void 0x0);
            _0x648525 = _0x648525 || {};
            var _0x1410de, _0x2ba4c8, _0xe7106b, _0x27fa2f, _0x1d87d0, _0x3e05f3, _0x24124b, _0x4f5c5b, _0x2ba663, _0x5e46d1, _0x51a770 = _0x2139f7['ajaxSetup']({}, _0x648525),
                _0x9910dc = _0x51a770['context'] || _0x51a770,
                _0x34799f = _0x51a770['context'] && (_0x9910dc['nodeType'] || _0x9910dc['jquery']) ? _0x2139f7(_0x9910dc) : _0x2139f7['event'],
                _0x5091da = _0x2139f7['Deferred'](),
                _0x200096 = _0x2139f7['Callbacks']('once memory'),
                _0x1b3c7a = _0x51a770['statusCode'] || {},
                _0x5a62a5 = {},
                _0x4d14c4 = {},
                _0x5f43f6 = 'canceled',
                _0x30ea7a = {
                    'readyState': 0x0,
                    'getResponseHeader': function(_0x5010ea) {
                        var _0x376bbf;
                        if (_0x24124b) {
                            if (!_0x27fa2f)
                                for (_0x27fa2f = {}; _0x376bbf = _0x41f982['exec'](_0xe7106b);) _0x27fa2f[_0x376bbf[0x1]['toLowerCase']()] = _0x376bbf[0x2];
                            _0x376bbf = _0x27fa2f[_0x5010ea['toLowerCase']()];
                        }
                        return null == _0x376bbf ? null : _0x376bbf;
                    },
                    'getAllResponseHeaders': function() {
                        return _0x24124b ? _0xe7106b : null;
                    },
                    'setRequestHeader': function(_0x46b340, _0x34f7ca) {
                        return null == _0x24124b && (_0x46b340 = _0x4d14c4[_0x46b340['toLowerCase']()] = _0x4d14c4[_0x46b340['toLowerCase']()] || _0x46b340, _0x5a62a5[_0x46b340] = _0x34f7ca), this;
                    },
                    'overrideMimeType': function(_0x25b727) {
                        return null == _0x24124b && (_0x51a770['mimeType'] = _0x25b727), this;
                    },
                    'statusCode': function(_0x3cf16d) {
                        var _0x4e62c2;
                        if (_0x3cf16d)
                            if (_0x24124b) _0x30ea7a['always'](_0x3cf16d[_0x30ea7a['status']]);
                            else
                                for (_0x4e62c2 in _0x3cf16d) _0x1b3c7a[_0x4e62c2] = [_0x1b3c7a[_0x4e62c2], _0x3cf16d[_0x4e62c2]];
                        return this;
                    },
                    'abort': function(_0x38872d) {
                        _0x38872d = _0x38872d || _0x5f43f6;
                        return _0x1410de && _0x1410de['abort'](_0x38872d), _0xf5b805(0x0, _0x38872d), this;
                    }
                };
            if (_0x5091da['promise'](_0x30ea7a), _0x51a770['url'] = ((_0x538ce3 || _0x51a770['url'] || _0x194534['href']) + '')['replace'](_0x454b01, _0x194534['protocol'] + '//'), _0x51a770['type'] = _0x648525['method'] || _0x648525['type'] || _0x51a770['method'] || _0x51a770['type'], _0x51a770['dataTypes'] = (_0x51a770['dataType'] || '*')['toLowerCase']()['match'](_0x18f593) || [''], null == _0x51a770['crossDomain']) {
                _0x3e05f3 = _0x175e87['createElement']('a');
                try {
                    _0x3e05f3['href'] = _0x51a770['url'], _0x3e05f3['href'] = _0x3e05f3['href'], _0x51a770['crossDomain'] = _0x192232['protocol'] + '//' + _0x192232['host'] != _0x3e05f3['protocol'] + '//' + _0x3e05f3['host'];
                } catch (_0x2b91c2) {
                    _0x51a770['crossDomain'] = !0x0;
                }
            }
            if (_0x51a770['data'] && _0x51a770['processData'] && 'string' != typeof _0x51a770['data'] && (_0x51a770['data'] = _0x2139f7['param'](_0x51a770['data'], _0x51a770['traditional'])), _0x3fc78f(_0x1a6bbd, _0x51a770, _0x648525, _0x30ea7a), _0x24124b) return _0x30ea7a;
            (_0x4f5c5b = _0x2139f7['event'] && _0x51a770['global']) && 0x0 === _0x2139f7['active']++ && _0x2139f7['event']['trigger']('ajaxStart');
            _0x51a770['type'] = _0x51a770['type']['toUpperCase']();
            _0x51a770['hasContent'] = !_0x4cbff2['test'](_0x51a770['type']);
            _0x2ba4c8 = _0x51a770['url']['replace'](_0x616165, '');
            _0x51a770['hasContent'] ? _0x51a770['data'] && _0x51a770['processData'] && 0x0 === (_0x51a770['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && (_0x51a770['data'] = _0x51a770['data']['replace'](_0x35bfb4, '+')) : (_0x5e46d1 = _0x51a770['url']['slice'](_0x2ba4c8['length']), _0x51a770['data'] && (_0x2ba4c8 += (_0x4ae298['test'](_0x2ba4c8) ? '&' : '?') + _0x51a770['data'], delete _0x51a770['data']), !0x1 === _0x51a770['cache'] && (_0x2ba4c8 = _0x2ba4c8['replace'](_0x18aef1, '$1'), _0x5e46d1 = (_0x4ae298['test'](_0x2ba4c8) ? '&' : '?') + '_=' + _0x35dfc0++ + _0x5e46d1), _0x51a770['url'] = _0x2ba4c8 + _0x5e46d1);
            _0x51a770['ifModified'] && (_0x2139f7['lastModified'][_0x2ba4c8] && _0x30ea7a['setRequestHeader']('If-Modified-Since', _0x2139f7['lastModified'][_0x2ba4c8]), _0x2139f7['etag'][_0x2ba4c8] && _0x30ea7a['setRequestHeader']('If-None-Match', _0x2139f7['etag'][_0x2ba4c8]));
            (_0x51a770['data'] && _0x51a770['hasContent'] && !0x1 !== _0x51a770['contentType'] || _0x648525['contentType']) && _0x30ea7a['setRequestHeader']('Content-Type', _0x51a770['contentType']);
            _0x30ea7a['setRequestHeader']('Accept', _0x51a770['dataTypes'][0x0] && _0x51a770['accepts'][_0x51a770['dataTypes'][0x0]] ? _0x51a770['accepts'][_0x51a770['dataTypes'][0x0]] + ('*' !== _0x51a770['dataTypes'][0x0] ? ', ' + _0x48ad08 + '; q=0.01' : '') : _0x51a770['accepts']['*']);
            for (_0x2ba663 in _0x51a770['headers']) _0x30ea7a['setRequestHeader'](_0x2ba663, _0x51a770['headers'][_0x2ba663]);
            if (_0x51a770['beforeSend'] && (!0x1 === _0x51a770['beforeSend']['call'](_0x9910dc, _0x30ea7a, _0x51a770) || _0x24124b)) return _0x30ea7a['abort']();
            if (_0x5f43f6 = 'abort', _0x200096['add'](_0x51a770['complete']), _0x30ea7a['done'](_0x51a770['success']), _0x30ea7a['fail'](_0x51a770['error']), _0x1410de = _0x3fc78f(_0x2ab5ff, _0x51a770, _0x648525, _0x30ea7a)) {
                if (_0x30ea7a['readyState'] = 0x1, _0x4f5c5b && _0x34799f['trigger']('ajaxSend', [_0x30ea7a, _0x51a770]), _0x24124b) return _0x30ea7a;
                _0x51a770['async'] && 0x0 < _0x51a770['timeout'] && (_0x1d87d0 = _0x73c481['setTimeout'](function() {
                    _0x30ea7a['abort']('timeout');
                }, _0x51a770['timeout']));
                try {
                    _0x24124b = !0x1, _0x1410de['send'](_0x5a62a5, _0xf5b805);
                } catch (_0x30c1a9) {
                    if (_0x24124b) throw _0x30c1a9;
                    _0xf5b805(-0x1, _0x30c1a9);
                }
            } else _0xf5b805(-0x1, 'No Transport');
            return _0x30ea7a;
        },
        'getJSON': function(_0x191256, _0x157c40, _0x3c6e6d) {
            return _0x2139f7['get'](_0x191256, _0x157c40, _0x3c6e6d, 'json');
        },
        'getScript': function(_0x91dd8b, _0x63f454) {
            return _0x2139f7['get'](_0x91dd8b, void 0x0, _0x63f454, 'script');
        }
    });
    _0x2139f7['each'](['get', 'post'], function(_0x5eacad, _0x2f4ee2) {
        _0x2139f7[_0x2f4ee2] = function(_0x29b304, _0x4eab69, _0x57ef3d, _0x49b4da) {
            return _0x2139f7['isFunction'](_0x4eab69) && (_0x49b4da = _0x49b4da || _0x57ef3d, _0x57ef3d = _0x4eab69, _0x4eab69 = void 0x0), _0x2139f7['ajax'](_0x2139f7['extend']({
                'url': _0x29b304,
                'type': _0x2f4ee2,
                'dataType': _0x49b4da,
                'data': _0x4eab69,
                'success': _0x57ef3d
            }, _0x2139f7['isPlainObject'](_0x29b304) && _0x29b304));
        };
    });
    _0x2139f7['_evalUrl'] = function(_0xc2fdc9) {
        return _0x2139f7['ajax']({
            'url': _0xc2fdc9,
            'type': 'GET',
            'dataType': 'script',
            'cache': !0x0,
            'async': !0x1,
            'global': !0x1,
            'throws': !0x0
        });
    };
    _0x2139f7['fn']['extend']({
        'wrapAll': function(_0x9f1815) {
            var _0x512a72;
            return this[0x0] && (_0x2139f7['isFunction'](_0x9f1815) && (_0x9f1815 = _0x9f1815['call'](this[0x0])), _0x512a72 = _0x2139f7(_0x9f1815, this[0x0]['ownerDocument'])['eq'](0x0)['clone'](!0x0), this[0x0]['parentNode'] && _0x512a72['insertBefore'](this[0x0]), _0x512a72['map'](function() {
                for (var _0x36abb0 = this; _0x36abb0['firstElementChild'];) _0x36abb0 = _0x36abb0['firstElementChild'];
                return _0x36abb0;
            })['append'](this)), this;
        },
        'wrapInner': function(_0x2d059b) {
            return _0x2139f7['isFunction'](_0x2d059b) ? this['each'](function(_0x2d3983) {
                _0x2139f7(this)['wrapInner'](_0x2d059b['call'](this, _0x2d3983));
            }) : this['each'](function() {
                var _0x4a23c6 = _0x2139f7(this),
                    _0x351baa = _0x4a23c6['contents']();
                _0x351baa['length'] ? _0x351baa['wrapAll'](_0x2d059b) : _0x4a23c6['append'](_0x2d059b);
            });
        },
        'wrap': function(_0x8a1d2) {
            var _0x57afa4 = _0x2139f7['isFunction'](_0x8a1d2);
            return this['each'](function(_0x53c707) {
                _0x2139f7(this)['wrapAll'](_0x57afa4 ? _0x8a1d2['call'](this, _0x53c707) : _0x8a1d2);
            });
        },
        'unwrap': function(_0xfde1c2) {
            return this['parent'](_0xfde1c2)['not']('body')['each'](function() {
                _0x2139f7(this)['replaceWith'](this['childNodes']);
            }), this;
        }
    });
    _0x2139f7['expr']['pseudos']['hidden'] = function(_0x53308e) {
        return !_0x2139f7['expr']['pseudos']['visible'](_0x53308e);
    };
    _0x2139f7['expr']['pseudos']['visible'] = function(_0x92b2f8) {
        return !(!_0x92b2f8['offsetWidth'] && !_0x92b2f8['offsetHeight'] && !_0x92b2f8['getClientRects']()['length']);
    };
    _0x2139f7['ajaxSettings']['xhr'] = function() {
        try {
            return new _0x73c481['XMLHttpRequest']();
        } catch (_0x19d455) {}
    };
    var _0x2cb00b = {
            '0': 0xc8,
            1223: 0xcc
        },
        _0x1ecf84 = _0x2139f7['ajaxSettings']['xhr']();
    _0x11c3a0['cors'] = !!_0x1ecf84 && 'withCredentials' in _0x1ecf84;
    _0x11c3a0['ajax'] = _0x1ecf84 = !!_0x1ecf84;
    _0x2139f7['ajaxTransport'](function(_0x41d061) {
        var _0x1bdc31, _0x4bc5cb;
        if (_0x11c3a0['cors'] || _0x1ecf84 && !_0x41d061['crossDomain']) return {
            'send': function(_0x2c95d2, _0xc69f5) {
                var _0x380f88, _0x24a932 = _0x41d061['xhr']();
                if (_0x24a932['open'](_0x41d061['type'], _0x41d061['url'], _0x41d061['async'], _0x41d061['username'], _0x41d061['password']), _0x41d061['xhrFields'])
                    for (_0x380f88 in _0x41d061['xhrFields']) _0x24a932[_0x380f88] = _0x41d061['xhrFields'][_0x380f88];
                _0x41d061['mimeType'] && _0x24a932['overrideMimeType'] && _0x24a932['overrideMimeType'](_0x41d061['mimeType']);
                _0x41d061['crossDomain'] || _0x2c95d2['X-Requested-With'] || (_0x2c95d2['X-Requested-With'] = 'XMLHttpRequest');
                for (_0x380f88 in _0x2c95d2) _0x24a932['setRequestHeader'](_0x380f88, _0x2c95d2[_0x380f88]);
                _0x1bdc31 = function(_0xdf368c) {
                    return function() {
                        _0x1bdc31 && (_0x1bdc31 = _0x4bc5cb = _0x24a932['onload'] = _0x24a932['onerror'] = _0x24a932['onabort'] = _0x24a932['onreadystatechange'] = null, 'abort' === _0xdf368c ? _0x24a932['abort']() : 'error' === _0xdf368c ? 'number' != typeof _0x24a932['status'] ? _0xc69f5(0x0, 'error') : _0xc69f5(_0x24a932['status'], _0x24a932['statusText']) : _0xc69f5(_0x2cb00b[_0x24a932['status']] || _0x24a932['status'], _0x24a932['statusText'], 'text' !== (_0x24a932['responseType'] || 'text') || 'string' != typeof _0x24a932['responseText'] ? {
                            'binary': _0x24a932['response']
                        } : {
                            'text': _0x24a932['responseText']
                        }, _0x24a932['getAllResponseHeaders']()));
                    };
                };
                _0x24a932['onload'] = _0x1bdc31();
                _0x4bc5cb = _0x24a932['onerror'] = _0x1bdc31('error');
                void 0x0 !== _0x24a932['onabort'] ? _0x24a932['onabort'] = _0x4bc5cb : _0x24a932['onreadystatechange'] = function() {
                    0x4 === _0x24a932['readyState'] && _0x73c481['setTimeout'](function() {
                        _0x1bdc31 && _0x4bc5cb();
                    });
                };
                _0x1bdc31 = _0x1bdc31('abort');
                try {
                    _0x24a932['send'](_0x41d061['hasContent'] && _0x41d061['data'] || null);
                } catch (_0x56b42a) {
                    if (_0x1bdc31) throw _0x56b42a;
                }
            },
            'abort': function() {
                _0x1bdc31 && _0x1bdc31();
            }
        };
    });
    _0x2139f7['ajaxPrefilter'](function(_0x56f440) {
        _0x56f440['crossDomain'] && (_0x56f440['contents']['script'] = !0x1);
    });
    _0x2139f7['ajaxSetup']({
        'accepts': {
            'script': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        'contents': {
            'script': /\b(?:java|ecma)script\b/
        },
        'converters': {
            'text script': function(_0x55d5e4) {
                return _0x2139f7['globalEval'](_0x55d5e4), _0x55d5e4;
            }
        }
    });
    _0x2139f7['ajaxPrefilter']('script', function(_0x2edaa1) {
        void 0x0 === _0x2edaa1['cache'] && (_0x2edaa1['cache'] = !0x1);
        _0x2edaa1['crossDomain'] && (_0x2edaa1['type'] = 'GET');
    });
    _0x2139f7['ajaxTransport']('script', function(_0x2c882a) {
        if (_0x2c882a['crossDomain']) {
            var _0x1b8de9, _0x4c9601;
            return {
                'send': function(_0x10f4ea, _0x2691c5) {
                    _0x1b8de9 = _0x2139f7('<script>')['prop']({
                        'charset': _0x2c882a['scriptCharset'],
                        'src': _0x2c882a['url']
                    })['on']('load error', _0x4c9601 = function(_0x5e2e86) {
                        _0x1b8de9['remove']();
                        _0x4c9601 = null;
                        _0x5e2e86 && _0x2691c5('error' === _0x5e2e86['type'] ? 0x194 : 0xc8, _0x5e2e86['type']);
                    });
                    _0x175e87['head']['appendChild'](_0x1b8de9[0x0]);
                },
                'abort': function() {
                    _0x4c9601 && _0x4c9601();
                }
            };
        }
    });
    var _0xdfb259 = [],
        _0x510b2f = /(=)\?(?=&|$)|\?\?/;
    _0x2139f7['ajaxSetup']({
        'jsonp': 'callback',
        'jsonpCallback': function() {
            var _0x237765 = _0xdfb259['pop']() || _0x2139f7['expando'] + '_' + _0x35dfc0++;
            return this[_0x237765] = !0x0, _0x237765;
        }
    });
    _0x2139f7['ajaxPrefilter']('json jsonp', function(_0x5b432e, _0x3f9c1d, _0x46301c) {
        var _0x27e5c0, _0x2c0ae3, _0x240c82, _0x3d0c42 = !0x1 !== _0x5b432e['jsonp'] && (_0x510b2f['test'](_0x5b432e['url']) ? 'url' : 'string' == typeof _0x5b432e['data'] && 0x0 === (_0x5b432e['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && _0x510b2f['test'](_0x5b432e['data']) && 'data');
        if (_0x3d0c42 || 'jsonp' === _0x5b432e['dataTypes'][0x0]) return _0x27e5c0 = _0x5b432e['jsonpCallback'] = _0x2139f7['isFunction'](_0x5b432e['jsonpCallback']) ? _0x5b432e['jsonpCallback']() : _0x5b432e['jsonpCallback'], _0x3d0c42 ? _0x5b432e[_0x3d0c42] = _0x5b432e[_0x3d0c42]['replace'](_0x510b2f, '$1' + _0x27e5c0) : !0x1 !== _0x5b432e['jsonp'] && (_0x5b432e['url'] += (_0x4ae298['test'](_0x5b432e['url']) ? '&' : '?') + _0x5b432e['jsonp'] + '=' + _0x27e5c0), _0x5b432e['converters']['script json'] = function() {
            return _0x240c82 || _0x2139f7['error'](_0x27e5c0 + ' was not called'), _0x240c82[0x0];
        }, _0x5b432e['dataTypes'][0x0] = 'json', _0x2c0ae3 = _0x73c481[_0x27e5c0], _0x73c481[_0x27e5c0] = function() {
            _0x240c82 = arguments;
        }, _0x46301c['always'](function() {
            void 0x0 === _0x2c0ae3 ? _0x2139f7(_0x73c481)['removeProp'](_0x27e5c0) : _0x73c481[_0x27e5c0] = _0x2c0ae3;
            _0x5b432e[_0x27e5c0] && (_0x5b432e['jsonpCallback'] = _0x3f9c1d['jsonpCallback'], _0xdfb259['push'](_0x27e5c0));
            _0x240c82 && _0x2139f7['isFunction'](_0x2c0ae3) && _0x2c0ae3(_0x240c82[0x0]);
            _0x240c82 = _0x2c0ae3 = void 0x0;
        }), 'script';
    });
    var _0x34aa1c = _0x11c3a0,
        _0x3ae7c4, _0x56d38a = _0x175e87['implementation']['createHTMLDocument']('')['body'];
    _0x3ae7c4 = (_0x56d38a['innerHTML'] = '<form></form><form></form>', 0x2 === _0x56d38a['childNodes']['length']);
    _0x34aa1c['createHTMLDocument'] = _0x3ae7c4;
    _0x2139f7['parseHTML'] = function(_0x3615df, _0x1e6c2c, _0x5aa4e7) {
        if ('string' != typeof _0x3615df) return [];
        'boolean' == typeof _0x1e6c2c && (_0x5aa4e7 = _0x1e6c2c, _0x1e6c2c = !0x1);
        var _0x20642e, _0x2c29ad, _0x365b6e;
        return _0x1e6c2c || (_0x11c3a0['createHTMLDocument'] ? (_0x1e6c2c = _0x175e87['implementation']['createHTMLDocument'](''), _0x20642e = _0x1e6c2c['createElement']('base'), _0x20642e['href'] = _0x175e87['location']['href'], _0x1e6c2c['head']['appendChild'](_0x20642e)) : _0x1e6c2c = _0x175e87), _0x2c29ad = _0x1693c2['exec'](_0x3615df), _0x365b6e = !_0x5aa4e7 && [], _0x2c29ad ? [_0x1e6c2c['createElement'](_0x2c29ad[0x1])] : (_0x2c29ad = _0x1ba964([_0x3615df], _0x1e6c2c, _0x365b6e), _0x365b6e && _0x365b6e['length'] && _0x2139f7(_0x365b6e)['remove'](), _0x2139f7['merge']([], _0x2c29ad['childNodes']));
    };
    _0x2139f7['fn']['load'] = function(_0xee87cb, _0x39e53d, _0x35a6cd) {
        var _0x44b9f1, _0x58fca7, _0x43179d, _0x5d7fbe = this,
            _0x558501 = _0xee87cb['indexOf'](' ');
        return -0x1 < _0x558501 && (_0x44b9f1 = _0x5f58a0(_0xee87cb['slice'](_0x558501)), _0xee87cb = _0xee87cb['slice'](0x0, _0x558501)), _0x2139f7['isFunction'](_0x39e53d) ? (_0x35a6cd = _0x39e53d, _0x39e53d = void 0x0) : _0x39e53d && 'object' == typeof _0x39e53d && (_0x58fca7 = 'POST'), 0x0 < _0x5d7fbe['length'] && _0x2139f7['ajax']({
            'url': _0xee87cb,
            'type': _0x58fca7 || 'GET',
            'dataType': 'html',
            'data': _0x39e53d
        })['done'](function(_0x459de3) {
            _0x43179d = arguments;
            _0x5d7fbe['html'](_0x44b9f1 ? _0x2139f7('<div>')['append'](_0x2139f7['parseHTML'](_0x459de3))['find'](_0x44b9f1) : _0x459de3);
        })['always'](_0x35a6cd && function(_0x84bff4, _0x273ef1) {
            _0x5d7fbe['each'](function() {
                _0x35a6cd['apply'](this, _0x43179d || [_0x84bff4['responseText'], _0x273ef1, _0x84bff4]);
            });
        }), this;
    };
    _0x2139f7['each']('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend' ['split'](' '), function(_0x57da0b, _0x4732a7) {
        _0x2139f7['fn'][_0x4732a7] = function(_0x2a1db5) {
            return this['on'](_0x4732a7, _0x2a1db5);
        };
    });
    _0x2139f7['expr']['pseudos']['animated'] = function(_0x381e75) {
        return _0x2139f7['grep'](_0x2139f7['timers'], function(_0x58f24d) {
            return _0x381e75 === _0x58f24d['elem'];
        })['length'];
    };
    _0x2139f7['offset'] = {
        'setOffset': function(_0x4d2f49, _0x32c86b, _0x72e927) {
            var _0x11ab57, _0x264dbb, _0x21d9b2, _0x229940, _0x3d643e, _0x3f0042, _0x578363 = _0x2139f7['css'](_0x4d2f49, 'position'),
                _0x33b624 = _0x2139f7(_0x4d2f49),
                _0x67c62a = {};
            'static' === _0x578363 && (_0x4d2f49['style']['position'] = 'relative');
            _0x3d643e = _0x33b624['offset']();
            _0x21d9b2 = _0x2139f7['css'](_0x4d2f49, 'top');
            _0x3f0042 = _0x2139f7['css'](_0x4d2f49, 'left');
            ('absolute' === _0x578363 || 'fixed' === _0x578363) && -0x1 < (_0x21d9b2 + _0x3f0042)['indexOf']('auto') ? (_0x11ab57 = _0x33b624['position'](), _0x229940 = _0x11ab57['top'], _0x264dbb = _0x11ab57['left']) : (_0x229940 = parseFloat(_0x21d9b2) || 0x0, _0x264dbb = parseFloat(_0x3f0042) || 0x0);
            _0x2139f7['isFunction'](_0x32c86b) && (_0x32c86b = _0x32c86b['call'](_0x4d2f49, _0x72e927, _0x2139f7['extend']({}, _0x3d643e)));
            null != _0x32c86b['top'] && (_0x67c62a['top'] = _0x32c86b['top'] - _0x3d643e['top'] + _0x229940);
            null != _0x32c86b['left'] && (_0x67c62a['left'] = _0x32c86b['left'] - _0x3d643e['left'] + _0x264dbb);
            'using' in _0x32c86b ? _0x32c86b['using']['call'](_0x4d2f49, _0x67c62a) : _0x33b624['css'](_0x67c62a);
        }
    };
    _0x2139f7['fn']['extend']({
        'offset': function(_0x1e11fe) {
            if (arguments['length']) return void 0x0 === _0x1e11fe ? this : this['each'](function(_0x5d50d4) {
                _0x2139f7['offset']['setOffset'](this, _0x1e11fe, _0x5d50d4);
            });
            var _0x313938, _0x545e5b, _0x5cc0dd, _0x4d7d56, _0x4f67eb = this[0x0];
            if (_0x4f67eb) return _0x4f67eb['getClientRects']()['length'] ? (_0x5cc0dd = _0x4f67eb['getBoundingClientRect'](), _0x313938 = _0x4f67eb['ownerDocument'], _0x545e5b = _0x313938['documentElement'], _0x4d7d56 = _0x313938['defaultView'], {
                'top': _0x5cc0dd['top'] + _0x4d7d56['pageYOffset'] - _0x545e5b['clientTop'],
                'left': _0x5cc0dd['left'] + _0x4d7d56['pageXOffset'] - _0x545e5b['clientLeft']
            }) : {
                'top': 0x0,
                'left': 0x0
            };
        },
        'position': function() {
            if (this[0x0]) {
                var _0xb57846, _0x1f16ef, _0x14962f = this[0x0],
                    _0x25660d = {
                        'top': 0x0,
                        'left': 0x0
                    };
                return 'fixed' === _0x2139f7['css'](_0x14962f, 'position') ? _0x1f16ef = _0x14962f['getBoundingClientRect']() : (_0xb57846 = this['offsetParent'](), _0x1f16ef = this['offset'](), _0x443dae(_0xb57846[0x0], 'html') || (_0x25660d = _0xb57846['offset']()), _0x25660d = {
                    'top': _0x25660d['top'] + _0x2139f7['css'](_0xb57846[0x0], 'borderTopWidth', !0x0),
                    'left': _0x25660d['left'] + _0x2139f7['css'](_0xb57846[0x0], 'borderLeftWidth', !0x0)
                }), {
                    'top': _0x1f16ef['top'] - _0x25660d['top'] - _0x2139f7['css'](_0x14962f, 'marginTop', !0x0),
                    'left': _0x1f16ef['left'] - _0x25660d['left'] - _0x2139f7['css'](_0x14962f, 'marginLeft', !0x0)
                };
            }
        },
        'offsetParent': function() {
            return this['map'](function() {
                for (var _0x1c894e = this['offsetParent']; _0x1c894e && 'static' === _0x2139f7['css'](_0x1c894e, 'position');) _0x1c894e = _0x1c894e['offsetParent'];
                return _0x1c894e || _0x505235;
            });
        }
    });
    _0x2139f7['each']({
        'scrollLeft': 'pageXOffset',
        'scrollTop': 'pageYOffset'
    }, function(_0x29b7f7, _0x227765) {
        var _0x9c541f = 'pageYOffset' === _0x227765;
        _0x2139f7['fn'][_0x29b7f7] = function(_0x415c68) {
            return _0x4c2afe(this, function(_0x1627aa, _0x34389f, _0x11d68f) {
                var _0x2ad525;
                return _0x2139f7['isWindow'](_0x1627aa) ? _0x2ad525 = _0x1627aa : 0x9 === _0x1627aa['nodeType'] && (_0x2ad525 = _0x1627aa['defaultView']), void 0x0 === _0x11d68f ? _0x2ad525 ? _0x2ad525[_0x227765] : _0x1627aa[_0x34389f] : void(_0x2ad525 ? _0x2ad525['scrollTo'](_0x9c541f ? _0x2ad525['pageXOffset'] : _0x11d68f, _0x9c541f ? _0x11d68f : _0x2ad525['pageYOffset']) : _0x1627aa[_0x34389f] = _0x11d68f);
            }, _0x29b7f7, _0x415c68, arguments['length']);
        };
    });
    _0x2139f7['each'](['top', 'left'], function(_0x5bfb66, _0x18ed3e) {
        _0x2139f7['cssHooks'][_0x18ed3e] = _0x5242f6(_0x11c3a0['pixelPosition'], function(_0x1bcfc8, _0x11fb4e) {
            if (_0x11fb4e) return _0x11fb4e = _0x20837e(_0x1bcfc8, _0x18ed3e), _0x37f1e9['test'](_0x11fb4e) ? _0x2139f7(_0x1bcfc8)['position']()[_0x18ed3e] + 'px' : _0x11fb4e;
        });
    });
    _0x2139f7['each']({
        'Height': 'height',
        'Width': 'width'
    }, function(_0x360684, _0x36e3fc) {
        _0x2139f7['each']({
            'padding': 'inner' + _0x360684,
            'content': _0x36e3fc,
            '': 'outer' + _0x360684
        }, function(_0x128a5e, _0x3980c7) {
            _0x2139f7['fn'][_0x3980c7] = function(_0x382a07, _0x5bc07a) {
                var _0x9c51a7 = arguments['length'] && (_0x128a5e || 'boolean' != typeof _0x382a07),
                    _0xbeb4cc = _0x128a5e || (!0x0 === _0x382a07 || !0x0 === _0x5bc07a ? 'margin' : 'border');
                return _0x4c2afe(this, function(_0x2b7f80, _0x168e6e, _0x2ae71d) {
                    var _0x1eae07;
                    return _0x2139f7['isWindow'](_0x2b7f80) ? 0x0 === _0x3980c7['indexOf']('outer') ? _0x2b7f80['inner' + _0x360684] : _0x2b7f80['document']['documentElement']['client' + _0x360684] : 0x9 === _0x2b7f80['nodeType'] ? (_0x1eae07 = _0x2b7f80['documentElement'], Math['max'](_0x2b7f80['body']['scroll' + _0x360684], _0x1eae07['scroll' + _0x360684], _0x2b7f80['body']['offset' + _0x360684], _0x1eae07['offset' + _0x360684], _0x1eae07['client' + _0x360684])) : void 0x0 === _0x2ae71d ? _0x2139f7['css'](_0x2b7f80, _0x168e6e, _0xbeb4cc) : _0x2139f7['style'](_0x2b7f80, _0x168e6e, _0x2ae71d, _0xbeb4cc);
                }, _0x36e3fc, _0x9c51a7 ? _0x382a07 : void 0x0, _0x9c51a7);
            };
        });
    });
    _0x2139f7['fn']['extend']({
        'bind': function(_0x5464ee, _0x1945e8, _0x3a9c2b) {
            return this['on'](_0x5464ee, null, _0x1945e8, _0x3a9c2b);
        },
        'unbind': function(_0x462ab2, _0x1628d5) {
            return this['off'](_0x462ab2, null, _0x1628d5);
        },
        'delegate': function(_0x445107, _0x379603, _0x8c9029, _0x5a0e8d) {
            return this['on'](_0x379603, _0x445107, _0x8c9029, _0x5a0e8d);
        },
        'undelegate': function(_0xa01ef4, _0x220e9c, _0x3d4095) {
            return 0x1 === arguments['length'] ? this['off'](_0xa01ef4, '**') : this['off'](_0x220e9c, _0xa01ef4 || '**', _0x3d4095);
        }
    });
    _0x2139f7['holdReady'] = function(_0x2e43fd) {
        _0x2e43fd ? _0x2139f7['readyWait']++ : _0x2139f7['ready'](!0x0);
    };
    _0x2139f7['isArray'] = Array['isArray'];
    _0x2139f7['parseJSON'] = JSON['parse'];
    _0x2139f7['nodeName'] = _0x443dae;
    'function' == typeof define && define['amd'] && define('jquery', [], function() {
        return _0x2139f7;
    });
    var _0x40bf8a = _0x73c481['jQuery'],
        _0xcb2cc8 = _0x73c481['$'];
    return _0x2139f7['noConflict'] = function(_0x6cd5f3) {
        return _0x73c481['$'] === _0x2139f7 && (_0x73c481['$'] = _0xcb2cc8), _0x6cd5f3 && _0x73c481['jQuery'] === _0x2139f7 && (_0x73c481['jQuery'] = _0x40bf8a), _0x2139f7;
    }, _0x1d619b || (_0x73c481['jQuery'] = _0x73c481['$'] = _0x2139f7), _0x2139f7;
});

function getInternetExplorerVersion() {
    var _0x2a324f = -0x1;
    'Microsoft Internet Explorer' == navigator['appName'] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/ ['exec'](navigator['userAgent']) && (_0x2a324f = parseFloat(RegExp['$1']));
    return _0x2a324f;
}
var ie = getInternetExplorerVersion();

function getQueryVariable(_0x4c6095) {
    for (var _0x1d599c = window['location']['search']['substring'](0x1)['split']('&'), _0x39a340 = 0x0; _0x39a340 < _0x1d599c['length']; _0x39a340++) {
        var _0x320a20 = _0x1d599c[_0x39a340]['split']('=');
        if (decodeURIComponent(_0x320a20[0x0]) == _0x4c6095) return decodeURIComponent(_0x320a20[0x1]);
    }
};
this['jukebox'] = {};
jukebox['Player'] = function(_0x4f1dc1, _0x344820) {
    this['id'] = ++jukebox['__jukeboxId'];
    this['origin'] = _0x344820 || null;
    this['settings'] = {};
    for (var _0x7916da in this['defaults']) this['settings'][_0x7916da] = this['defaults'][_0x7916da];
    if ('[object Object]' === Object['prototype']['toString']['call'](_0x4f1dc1))
        for (var _0xa555bb in _0x4f1dc1) this['settings'][_0xa555bb] = _0x4f1dc1[_0xa555bb];
    '[object Function]' === Object['prototype']['toString']['call'](jukebox['Manager']) && (jukebox['Manager'] = new jukebox['Manager']());
    this['resource'] = this['isPlaying'] = null;
    this['resource'] = '[object Object]' === Object['prototype']['toString']['call'](jukebox['Manager']) ? jukebox['Manager']['getPlayableResource'](this['settings']['resources']) : this['settings']['resources'][0x0] || null;
    if (null === this['resource']) throw 'Your browser can\x27t playback the given resources - or you have missed to include jukebox.Manager';
    this['__init']();
    return this;
};
jukebox['__jukeboxId'] = 0x0;
jukebox['Player']['prototype'] = {
    'defaults': {
        'resources': [],
        'autoplay': !0x1,
        'spritemap': {},
        'flashMediaElement': './swf/FlashMediaElement.swf',
        'timeout': 0x3e8
    },
    '__addToManager': function() {
        !0x0 !== this['__wasAddedToManager'] && (jukebox['Manager']['add'](this), this['__wasAddedToManager'] = !0x0);
    },
    '__init': function() {
        var _0x100524 = this,
            _0x5644eb = this['settings'],
            _0x2b9d2a = {},
            _0x30b04d;
        jukebox['Manager'] && void 0x0 !== jukebox['Manager']['features'] && (_0x2b9d2a = jukebox['Manager']['features']);
        if (!0x0 === _0x2b9d2a['html5audio']) {
            this['context'] = new Audio();
            this['context']['src'] = this['resource'];
            if (null === this['origin']) {
                var _0x1871e7 = function(_0x529cdc) {
                    _0x100524['__addToManager'](_0x529cdc);
                };
                this['context']['addEventListener']('canplaythrough', _0x1871e7, !0x0);
                window['setTimeout'](function() {
                    _0x100524['context']['removeEventListener']('canplaythrough', _0x1871e7, !0x0);
                    _0x1871e7('timeout');
                }, _0x5644eb['timeout']);
            }
            this['context']['autobuffer'] = !0x0;
            this['context']['preload'] = !0x0;
            for (_0x30b04d in this['HTML5API']) this[_0x30b04d] = this['HTML5API'][_0x30b04d];
            0x1 < _0x2b9d2a['channels'] ? !0x0 === _0x5644eb['autoplay'] ? this['context']['autoplay'] = !0x0 : void 0x0 !== _0x5644eb['spritemap'][_0x5644eb['autoplay']] && this['play'](_0x5644eb['autoplay']) : 0x1 === _0x2b9d2a['channels'] && void 0x0 !== _0x5644eb['spritemap'][_0x5644eb['autoplay']] && (this['backgroundMusic'] = _0x5644eb['spritemap'][_0x5644eb['autoplay']], this['backgroundMusic']['started'] = Date['now'] ? Date['now']() : +new Date(), this['play'](_0x5644eb['autoplay']));
            0x1 == _0x2b9d2a['channels'] && !0x0 !== _0x5644eb['canPlayBackground'] && (window['addEventListener']('pagehide', function() {
                null !== _0x100524['isPlaying'] && (_0x100524['pause'](), _0x100524['__wasAutoPaused'] = !0x0);
            }), window['addEventListener']('pageshow', function() {
                _0x100524['__wasAutoPaused'] && (_0x100524['resume'](), delete _0x100524['_wasAutoPaused']);
            }));
        } else if (!0x0 === _0x2b9d2a['flashaudio']) {
            for (_0x30b04d in this['FLASHAPI']) this[_0x30b04d] = this['FLASHAPI'][_0x30b04d];
            _0x2b9d2a = ['id=jukebox-flashstream-' + this['id'], 'autoplay=' + _0x5644eb['autoplay'], 'file=' + window['encodeURIComponent'](this['resource'])];
            this['__initFlashContext'](_0x2b9d2a);
            !0x0 === _0x5644eb['autoplay'] ? this['play'](0x0) : _0x5644eb['spritemap'][_0x5644eb['autoplay']] && this['play'](_0x5644eb['autoplay']);
        } else throw 'Your Browser does not support Flash Audio or HTML5 Audio.';
    },
    '__initFlashContext': function(_0x3b0b3c) {
        var _0x24d25a, _0x5cb9e7 = this['settings']['flashMediaElement'],
            _0x367b91, _0x146905 = {
                'flashvars': _0x3b0b3c['join']('&'),
                'quality': 'high',
                'bgcolor': '#000000',
                'wmode': 'transparent',
                'allowscriptaccess': 'always',
                'allowfullscreen': 'true'
            };
        if (navigator['userAgent']['match'](/MSIE/)) {
            _0x24d25a = document['createElement']('div');
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x24d25a);
            var _0x2d00c6 = document['createElement']('object');
            _0x2d00c6['id'] = 'jukebox-flashstream-' + this['id'];
            _0x2d00c6['setAttribute']('type', 'application/x-shockwave-flash');
            _0x2d00c6['setAttribute']('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
            _0x2d00c6['setAttribute']('width', '0');
            _0x2d00c6['setAttribute']('height', '0');
            _0x146905['movie'] = _0x5cb9e7 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            _0x146905['flashvars'] = _0x3b0b3c['join']('&amp;');
            for (_0x367b91 in _0x146905) _0x3b0b3c = document['createElement']('param'), _0x3b0b3c['setAttribute']('name', _0x367b91), _0x3b0b3c['setAttribute']('value', _0x146905[_0x367b91]), _0x2d00c6['appendChild'](_0x3b0b3c);
            _0x24d25a['outerHTML'] = _0x2d00c6['outerHTML'];
            this['context'] = document['getElementById']('jukebox-flashstream-' + this['id']);
        } else {
            _0x24d25a = document['createElement']('embed');
            _0x24d25a['id'] = 'jukebox-flashstream-' + this['id'];
            _0x24d25a['setAttribute']('type', 'application/x-shockwave-flash');
            _0x24d25a['setAttribute']('width', '100');
            _0x24d25a['setAttribute']('height', '100');
            _0x146905['play'] = !0x1;
            _0x146905['loop'] = !0x1;
            _0x146905['src'] = _0x5cb9e7 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            for (_0x367b91 in _0x146905) _0x24d25a['setAttribute'](_0x367b91, _0x146905[_0x367b91]);
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x24d25a);
            this['context'] = _0x24d25a;
        }
    },
    'backgroundHackForiOS': function() {
        if (void 0x0 !== this['backgroundMusic']) {
            var _0x39f9b1 = Date['now'] ? Date['now']() : +new Date();
            void 0x0 === this['backgroundMusic']['started'] ? (this['backgroundMusic']['started'] = _0x39f9b1, this['setCurrentTime'](this['backgroundMusic']['start'])) : (this['backgroundMusic']['lastPointer'] = (_0x39f9b1 - this['backgroundMusic']['started']) / 0x3e8 % (this['backgroundMusic']['end'] - this['backgroundMusic']['start']) + this['backgroundMusic']['start'], this['play'](this['backgroundMusic']['lastPointer']));
        }
    },
    'play': function(_0x22ed2f, _0x5f5c5b) {
        if (null !== this['isPlaying'] && !0x0 !== _0x5f5c5b) void 0x0 !== jukebox['Manager'] && jukebox['Manager']['addToQueue'](_0x22ed2f, this['id']);
        else {
            var _0x2fc213 = this['settings']['spritemap'],
                _0xeae2f4;
            if (void 0x0 !== _0x2fc213[_0x22ed2f]) _0xeae2f4 = _0x2fc213[_0x22ed2f]['start'];
            else if ('number' === typeof _0x22ed2f) {
                _0xeae2f4 = _0x22ed2f;
                for (var _0x5d0182 in _0x2fc213)
                    if (_0xeae2f4 >= _0x2fc213[_0x5d0182]['start'] && _0xeae2f4 <= _0x2fc213[_0x5d0182]['end']) {
                        _0x22ed2f = _0x5d0182;
                        break;
                    }
            }
            void 0x0 !== _0xeae2f4 && '[object Object]' === Object['prototype']['toString']['call'](_0x2fc213[_0x22ed2f]) && (this['isPlaying'] = this['settings']['spritemap'][_0x22ed2f], this['context']['play'] && this['context']['play'](), this['wasReady'] = this['setCurrentTime'](_0xeae2f4));
        }
    },
    'stop': function() {
        this['__lastPosition'] = 0x0;
        this['isPlaying'] = null;
        this['backgroundMusic'] ? this['backgroundHackForiOS']() : this['context']['pause']();
        return !0x0;
    },
    'pause': function() {
        this['isPlaying'] = null;
        this['__lastPosition'] = this['getCurrentTime']();
        this['context']['pause']();
        return this['__lastPosition'];
    },
    'resume': function(_0x1b878c) {
        _0x1b878c = 'number' === typeof _0x1b878c ? _0x1b878c : this['__lastPosition'];
        if (null !== _0x1b878c) return this['play'](_0x1b878c), this['__lastPosition'] = null, !0x0;
        this['context']['play']();
        return !0x1;
    },
    'HTML5API': {
        'getVolume': function() {
            return this['context']['volume'] || 0x1;
        },
        'setVolume': function(_0x2d1e74) {
            this['context']['volume'] = _0x2d1e74;
            return 0.0001 > Math['abs'](this['context']['volume'] - _0x2d1e74) ? !0x0 : !0x1;
        },
        'getCurrentTime': function() {
            return this['context']['currentTime'] || 0x0;
        },
        'setCurrentTime': function(_0x29b9fe) {
            try {
                return this['context']['currentTime'] = _0x29b9fe, !0x0;
            } catch (_0x410570) {
                return !0x1;
            }
        }
    },
    'FLASHAPI': {
        'getVolume': function() {
            return this['context'] && 'function' === typeof this['context']['getVolume'] ? this['context']['getVolume']() : 0x1;
        },
        'setVolume': function(_0x450237) {
            return this['context'] && 'function' === typeof this['context']['setVolume'] ? (this['context']['setVolume'](_0x450237), !0x0) : !0x1;
        },
        'getCurrentTime': function() {
            return this['context'] && 'function' === typeof this['context']['getCurrentTime'] ? this['context']['getCurrentTime']() : 0x0;
        },
        'setCurrentTime': function(_0x316ad5) {
            return this['context'] && 'function' === typeof this['context']['setCurrentTime'] ? this['context']['setCurrentTime'](_0x316ad5) : !0x1;
        }
    }
};
if (void 0x0 === this['jukebox']) throw 'jukebox.Manager requires jukebox.Player (Player.js) to run properly.';
jukebox['Manager'] = function(_0x1c0593) {
    this['features'] = {};
    this['codecs'] = {};
    this['__players'] = {};
    this['__playersLength'] = 0x0;
    this['__clones'] = {};
    this['__queue'] = [];
    this['settings'] = {};
    for (var _0xe03d86 in this['defaults']) this['settings'][_0xe03d86] = this['defaults'][_0xe03d86];
    if ('[object Object]' === Object['prototype']['toString']['call'](_0x1c0593))
        for (var _0x4de160 in _0x1c0593) this['settings'][_0x4de160] = _0x1c0593[_0x4de160];
    this['__detectFeatures']();
    jukebox['Manager']['__initialized'] = !0x1 === this['settings']['useGameLoop'] ? window['setInterval'](function() {
        jukebox['Manager']['loop']();
    }, 0x14) : !0x0;
};
jukebox['Manager']['prototype'] = {
    'defaults': {
        'useFlash': !0x1,
        'useGameLoop': !0x1
    },
    '__detectFeatures': function() {
        var _0x23fdd9 = window['Audio'] && new Audio();
        if (_0x23fdd9 && _0x23fdd9['canPlayType'] && !0x1 === this['settings']['useFlash']) {
            for (var _0x5edae2 = [{
                    'e': '3gp',
                    'm': ['audio/3gpp', 'audio/amr']
                }, {
                    'e': 'aac',
                    'm': ['audio/aac', 'audio/aacp']
                }, {
                    'e': 'amr',
                    'm': ['audio/amr', 'audio/3gpp']
                }, {
                    'e': 'caf',
                    'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff; codecs=\x22IMA-ADPCM, ADPCM\x22']
                }, {
                    'e': 'm4a',
                    'm': 'audio/mp4{audio/mp4; codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a' ['split']('{')
                }, {
                    'e': 'mp3',
                    'm': ['audio/mp3', 'audio/mpeg', 'audio/mpeg; codecs=\x22mp3\x22', 'audio/MPA', 'audio/mpa-robust']
                }, {
                    'e': 'mpga',
                    'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
                }, {
                    'e': 'mp4',
                    'm': ['audio/mp4', 'video/mp4']
                }, {
                    'e': 'ogg',
                    'm': ['application/ogg', 'audio/ogg', 'audio/ogg; codecs=\x22theora, vorbis\x22', 'video/ogg', 'video/ogg; codecs=\x22theora, vorbis\x22']
                }, {
                    'e': 'wav',
                    'm': ['audio/wave', 'audio/wav', 'audio/wav; codecs=\x221\x22', 'audio/x-wav', 'audio/x-pn-wav']
                }, {
                    'e': 'webm',
                    'm': ['audio/webm', 'audio/webm; codecs=\x22vorbis\x22', 'video/webm']
                }], _0x27443b, _0x2a0cf3, _0x39c3d0 = 0x0, _0x9255fc = _0x5edae2['length']; _0x39c3d0 < _0x9255fc; _0x39c3d0++)
                if (_0x2a0cf3 = _0x5edae2[_0x39c3d0]['e'], _0x5edae2[_0x39c3d0]['m']['length'] && 'object' === typeof _0x5edae2[_0x39c3d0]['m'])
                    for (var _0xb17d1c = 0x0, _0x29ef5a = _0x5edae2[_0x39c3d0]['m']['length']; _0xb17d1c < _0x29ef5a; _0xb17d1c++)
                        if (_0x27443b = _0x5edae2[_0x39c3d0]['m'][_0xb17d1c], '' !== _0x23fdd9['canPlayType'](_0x27443b)) {
                            this['codecs'][_0x2a0cf3] = _0x27443b;
                            break;
                        } else this['codecs'][_0x2a0cf3] || (this['codecs'][_0x2a0cf3] = !0x1);
            this['features']['html5audio'] = !(!this['codecs']['mp3'] && !this['codecs']['ogg'] && !this['codecs']['webm'] && !this['codecs']['wav']);
            this['features']['channels'] = 0x8;
            _0x23fdd9['volume'] = 0.1337;
            this['features']['volume'] = !!(0.0001 > Math['abs'](_0x23fdd9['volume'] - 0.1337));
            navigator['userAgent']['match'](/iPhone|iPod|iPad/i) && (this['features']['channels'] = 0x1);
        }
        this['features']['flashaudio'] = !!navigator['mimeTypes']['application/x-shockwave-flash'] || !!navigator['plugins']['Shockwave Flash'] || !0x1;
        if (window['ActiveXObject']) try {
            new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this['features']['flashaudio'] = !0x0;
        } catch (_0x190bfa) {}!0x0 === this['settings']['useFlash'] && (this['features']['flashaudio'] = !0x0);
        !0x0 === this['features']['flashaudio'] && !this['features']['html5audio'] && (this['codecs']['mp3'] = 'audio/mp3', this['codecs']['mpga'] = 'audio/mpeg', this['codecs']['mp4'] = 'audio/mp4', this['codecs']['m4a'] = 'audio/mp4', this['codecs']['3gp'] = 'audio/3gpp', this['codecs']['amr'] = 'audio/amr', this['features']['volume'] = !0x0, this['features']['channels'] = 0x1);
    },
    '__getPlayerById': function(_0x377127) {
        return this['__players'] && void 0x0 !== this['__players'][_0x377127] ? this['__players'][_0x377127] : null;
    },
    '__getClone': function(_0xab063e, _0x218681) {
        for (var _0x3eaf39 in this['__clones']) {
            var _0x90925f = this['__clones'][_0x3eaf39];
            if (null === _0x90925f['isPlaying'] && _0x90925f['origin'] === _0xab063e) return _0x90925f;
        }
        if ('[object Object]' === Object['prototype']['toString']['call'](_0x218681)) {
            _0x3eaf39 = {};
            for (var _0x4c6cf5 in _0x218681) _0x3eaf39[_0x4c6cf5] = _0x218681[_0x4c6cf5];
            _0x3eaf39['autoplay'] = !0x1;
            _0x4c6cf5 = new jukebox['Player'](_0x3eaf39, _0xab063e);
            _0x4c6cf5['isClone'] = !0x0;
            _0x4c6cf5['wasReady'] = !0x1;
            return this['__clones'][_0x4c6cf5['id']] = _0x4c6cf5;
        }
        return null;
    },
    'loop': function() {
        if (0x0 !== this['__playersLength'])
            if (this['__queue']['length'] && this['__playersLength'] < this['features']['channels']) {
                var _0x3aa268 = this['__queue'][0x0],
                    _0x2a6ade = this['__getPlayerById'](_0x3aa268['origin']);
                if (null !== _0x2a6ade) {
                    var _0x2d5edf = this['__getClone'](_0x3aa268['origin'], _0x2a6ade['settings']);
                    null !== _0x2d5edf && (!0x0 === this['features']['volume'] && (_0x2a6ade = this['__players'][_0x3aa268['origin']]) && _0x2d5edf['setVolume'](_0x2a6ade['getVolume']()), this['add'](_0x2d5edf), _0x2d5edf['play'](_0x3aa268['pointer'], !0x0));
                }
                this['__queue']['splice'](0x0, 0x1);
            } else
                for (_0x2d5edf in (this['__queue']['length'] && 0x1 === this['features']['channels'] && (_0x3aa268 = this['__queue'][0x0], _0x2a6ade = this['__getPlayerById'](_0x3aa268['origin']), null !== _0x2a6ade && _0x2a6ade['play'](_0x3aa268['pointer'], !0x0), this['__queue']['splice'](0x0, 0x1)), this['__players'])) _0x3aa268 = this['__players'][_0x2d5edf], _0x2a6ade = _0x3aa268['getCurrentTime']() || 0x0, _0x3aa268['isPlaying'] && !0x1 === _0x3aa268['wasReady'] ? _0x3aa268['wasReady'] = _0x3aa268['setCurrentTime'](_0x3aa268['isPlaying']['start']) : _0x3aa268['isPlaying'] && !0x0 === _0x3aa268['wasReady'] ? _0x2a6ade > _0x3aa268['isPlaying']['end'] && (!0x0 === _0x3aa268['isPlaying']['loop'] ? _0x3aa268['play'](_0x3aa268['isPlaying']['start'], !0x0) : _0x3aa268['stop']()) : _0x3aa268['isClone'] && null === _0x3aa268['isPlaying'] ? this['remove'](_0x3aa268) : void 0x0 !== _0x3aa268['backgroundMusic'] && null === _0x3aa268['isPlaying'] && _0x2a6ade > _0x3aa268['backgroundMusic']['end'] && _0x3aa268['backgroundHackForiOS']();
    },
    'getPlayableResource': function(_0x21feac) {
        '[object Array]' !== Object['prototype']['toString']['call'](_0x21feac) && (_0x21feac = [_0x21feac]);
        for (var _0x417ecf = 0x0, _0x498e19 = _0x21feac['length']; _0x417ecf < _0x498e19; _0x417ecf++) {
            var _0x23de42 = _0x21feac[_0x417ecf],
                _0x55658a = _0x23de42['match'](/\.([^\.]*)$/)[0x1];
            if (_0x55658a && this['codecs'][_0x55658a]) return _0x23de42;
        }
        return null;
    },
    'add': function(_0x150072) {
        return _0x150072 instanceof jukebox['Player'] && void 0x0 === this['__players'][_0x150072['id']] ? (this['__playersLength']++, this['__players'][_0x150072['id']] = _0x150072, !0x0) : !0x1;
    },
    'remove': function(_0x4cb3e1) {
        return _0x4cb3e1 instanceof jukebox['Player'] && void 0x0 !== this['__players'][_0x4cb3e1['id']] ? (this['__playersLength']--, delete this['__players'][_0x4cb3e1['id']], !0x0) : !0x1;
    },
    'addToQueue': function(_0x2ffc52, _0x4f2410) {
        return ('string' === typeof _0x2ffc52 || 'number' === typeof _0x2ffc52) && void 0x0 !== this['__players'][_0x4f2410] ? (this['__queue']['push']({
            'pointer': _0x2ffc52,
            'origin': _0x4f2410
        }), !0x0) : !0x1;
    }
};
(function() {
    var _0x113a72 = function() {
        this['init']();
    };
    _0x113a72['prototype'] = {
        'init': function() {
            var _0x4c6c5b = this || _0x367b4e;
            _0x4c6c5b['_counter'] = 0x3e8;
            _0x4c6c5b['_html5AudioPool'] = [];
            _0x4c6c5b['html5PoolSize'] = 0xa;
            _0x4c6c5b['_codecs'] = {};
            _0x4c6c5b['_howls'] = [];
            _0x4c6c5b['_muted'] = !0x1;
            _0x4c6c5b['_volume'] = 0x1;
            _0x4c6c5b['_canPlayEvent'] = 'canplaythrough';
            _0x4c6c5b['_navigator'] = 'undefined' !== typeof window && window['navigator'] ? window['navigator'] : null;
            _0x4c6c5b['masterGain'] = null;
            _0x4c6c5b['noAudio'] = !0x1;
            _0x4c6c5b['usingWebAudio'] = !0x0;
            _0x4c6c5b['autoSuspend'] = !0x1;
            _0x4c6c5b['ctx'] = null;
            _0x4c6c5b['autoUnlock'] = !0x0;
            _0x4c6c5b['_setup']();
            return _0x4c6c5b;
        },
        'volume': function(_0xf6d261) {
            var _0x4805a7 = this || _0x367b4e;
            _0xf6d261 = parseFloat(_0xf6d261);
            _0x4805a7['ctx'] || _0x43285c();
            if ('undefined' !== typeof _0xf6d261 && 0x0 <= _0xf6d261 && 0x1 >= _0xf6d261) {
                _0x4805a7['_volume'] = _0xf6d261;
                if (_0x4805a7['_muted']) return _0x4805a7;
                _0x4805a7['usingWebAudio'] && _0x4805a7['masterGain']['gain']['setValueAtTime'](_0xf6d261, _0x367b4e['ctx']['currentTime']);
                for (var _0x431d25 = 0x0; _0x431d25 < _0x4805a7['_howls']['length']; _0x431d25++)
                    if (!_0x4805a7['_howls'][_0x431d25]['_webAudio'])
                        for (var _0x6c25e3 = _0x4805a7['_howls'][_0x431d25]['_getSoundIds'](), _0x584eca = 0x0; _0x584eca < _0x6c25e3['length']; _0x584eca++) {
                            var _0x8e5540 = _0x4805a7['_howls'][_0x431d25]['_soundById'](_0x6c25e3[_0x584eca]);
                            _0x8e5540 && _0x8e5540['_node'] && (_0x8e5540['_node']['volume'] = _0x8e5540['_volume'] * _0xf6d261);
                        }
                return _0x4805a7;
            }
            return _0x4805a7['_volume'];
        },
        'mute': function(_0x428450) {
            var _0x233fe7 = this || _0x367b4e;
            _0x233fe7['ctx'] || _0x43285c();
            _0x233fe7['_muted'] = _0x428450;
            _0x233fe7['usingWebAudio'] && _0x233fe7['masterGain']['gain']['setValueAtTime'](_0x428450 ? 0x0 : _0x233fe7['_volume'], _0x367b4e['ctx']['currentTime']);
            for (var _0x9a4c4c = 0x0; _0x9a4c4c < _0x233fe7['_howls']['length']; _0x9a4c4c++)
                if (!_0x233fe7['_howls'][_0x9a4c4c]['_webAudio'])
                    for (var _0xf00be1 = _0x233fe7['_howls'][_0x9a4c4c]['_getSoundIds'](), _0x4d2d21 = 0x0; _0x4d2d21 < _0xf00be1['length']; _0x4d2d21++) {
                        var _0x9c7ee = _0x233fe7['_howls'][_0x9a4c4c]['_soundById'](_0xf00be1[_0x4d2d21]);
                        _0x9c7ee && _0x9c7ee['_node'] && (_0x9c7ee['_node']['muted'] = _0x428450 ? !0x0 : _0x9c7ee['_muted']);
                    }
            return _0x233fe7;
        },
        'unload': function() {
            for (var _0x2f7f75 = this || _0x367b4e, _0x276e73 = _0x2f7f75['_howls']['length'] - 0x1; 0x0 <= _0x276e73; _0x276e73--) _0x2f7f75['_howls'][_0x276e73]['unload']();
            _0x2f7f75['usingWebAudio'] && (_0x2f7f75['ctx'] && 'undefined' !== typeof _0x2f7f75['ctx']['close']) && (_0x2f7f75['ctx']['close'](), _0x2f7f75['ctx'] = null, _0x43285c());
            return _0x2f7f75;
        },
        'codecs': function(_0x58cd36) {
            return (this || _0x367b4e)['_codecs'][_0x58cd36['replace'](/^x-/, '')];
        },
        '_setup': function() {
            var _0x210dbf = this || _0x367b4e;
            _0x210dbf['state'] = _0x210dbf['ctx'] ? _0x210dbf['ctx']['state'] || 'suspended' : 'suspended';
            _0x210dbf['_autoSuspend']();
            if (!_0x210dbf['usingWebAudio'])
                if ('undefined' !== typeof Audio) try {
                    var _0x35d6c1 = new Audio();
                    'undefined' === typeof _0x35d6c1['oncanplaythrough'] && (_0x210dbf['_canPlayEvent'] = 'canplay');
                } catch (_0x486f8f) {
                    _0x210dbf['noAudio'] = !0x0;
                } else _0x210dbf['noAudio'] = !0x0;
            try {
                _0x35d6c1 = new Audio(), _0x35d6c1['muted'] && (_0x210dbf['noAudio'] = !0x0);
            } catch (_0x364c55) {}
            _0x210dbf['noAudio'] || _0x210dbf['_setupCodecs']();
            return _0x210dbf;
        },
        '_setupCodecs': function() {
            var _0x5188f0 = this || _0x367b4e,
                _0x14797b = null;
            try {
                _0x14797b = 'undefined' !== typeof Audio ? new Audio() : null;
            } catch (_0x55b71d) {
                return _0x5188f0;
            }
            if (!_0x14797b || 'function' !== typeof _0x14797b['canPlayType']) return _0x5188f0;
            var _0x1a8de8 = _0x14797b['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                _0xfd5a48 = _0x5188f0['_navigator'] && _0x5188f0['_navigator']['userAgent']['match'](/OPR\/([0-6].)/g),
                _0xfd5a48 = _0xfd5a48 && 0x21 > parseInt(_0xfd5a48[0x0]['split']('/')[0x1], 0xa);
            _0x5188f0['_codecs'] = {
                'mp3': !(_0xfd5a48 || !_0x1a8de8 && !_0x14797b['canPlayType']('audio/mp3;')['replace'](/^no$/, '')),
                'mpeg': !!_0x1a8de8,
                'opus': !!_0x14797b['canPlayType']('audio/ogg; codecs=\x22opus\x22')['replace'](/^no$/, ''),
                'ogg': !!_0x14797b['canPlayType']('audio/ogg; codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'oga': !!_0x14797b['canPlayType']('audio/ogg; codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'wav': !!_0x14797b['canPlayType']('audio/wav; codecs=\x221\x22')['replace'](/^no$/, ''),
                'aac': !!_0x14797b['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                'caf': !!_0x14797b['canPlayType']('audio/x-caf;')['replace'](/^no$/, ''),
                'm4a': !!(_0x14797b['canPlayType']('audio/x-m4a;') || _0x14797b['canPlayType']('audio/m4a;') || _0x14797b['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'mp4': !!(_0x14797b['canPlayType']('audio/x-mp4;') || _0x14797b['canPlayType']('audio/mp4;') || _0x14797b['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'weba': !!_0x14797b['canPlayType']('audio/webm; codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'webm': !!_0x14797b['canPlayType']('audio/webm; codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'dolby': !!_0x14797b['canPlayType']('audio/mp4; codecs=\x22ec-3\x22')['replace'](/^no$/, ''),
                'flac': !!(_0x14797b['canPlayType']('audio/x-flac;') || _0x14797b['canPlayType']('audio/flac;'))['replace'](/^no$/, '')
            };
            return _0x5188f0;
        },
        '_unlockAudio': function() {
            var _0x264b9 = this || _0x367b4e;
            if (!_0x264b9['_audioUnlocked'] && _0x264b9['ctx']) {
                _0x264b9['_audioUnlocked'] = !0x1;
                _0x264b9['autoUnlock'] = !0x1;
                !_0x264b9['_mobileUnloaded'] && 0xac44 !== _0x264b9['ctx']['sampleRate'] && (_0x264b9['_mobileUnloaded'] = !0x0, _0x264b9['unload']());
                _0x264b9['ctx'] || _0x43285c();
                _0x264b9['ctx'] && (_0x264b9['_scratchBuffer'] = _0x264b9['ctx']['createBuffer'](0x1, 0x1, 0x5622));
                var _0x36e57f = function() {
                    for (var _0x48b752 = 0x0; _0x48b752 < _0x264b9['html5PoolSize']; _0x48b752++) try {
                        var _0x1b0ad = new Audio();
                        _0x1b0ad['_unlocked'] = !0x0;
                        _0x264b9['_releaseHtml5Audio'](_0x1b0ad);
                    } catch (_0x2fdf1a) {
                        _0x264b9['noAudio'] = !0x0;
                    }
                    for (_0x48b752 = 0x0; _0x48b752 < _0x264b9['_howls']['length']; _0x48b752++)
                        if (!_0x264b9['_howls'][_0x48b752]['_webAudio'])
                            for (var _0x1b0ad = _0x264b9['_howls'][_0x48b752]['_getSoundIds'](), _0x251e99 = 0x0; _0x251e99 < _0x1b0ad['length']; _0x251e99++) {
                                var _0x4221e0 = _0x264b9['_howls'][_0x48b752]['_soundById'](_0x1b0ad[_0x251e99]);
                                _0x4221e0 && (_0x4221e0['_node'] && !_0x4221e0['_node']['_unlocked']) && (_0x4221e0['_node']['_unlocked'] = !0x0, _0x4221e0['_node']['load']());
                            }
                    _0x264b9['_autoResume']();
                    _0x264b9['ctx'] || _0x43285c();
                    var _0x278584 = _0x264b9['ctx']['createBufferSource']();
                    _0x278584['buffer'] = _0x264b9['_scratchBuffer'];
                    _0x278584['connect'](_0x264b9['ctx']['destination']);
                    'undefined' === typeof _0x278584['start'] ? _0x278584['noteOn'](0x0) : _0x278584['start'](0x0);
                    'function' === typeof _0x264b9['ctx']['resume'] && _0x264b9['ctx']['resume']();
                    _0x278584['onended'] = function() {
                        _0x278584['disconnect'](0x0);
                        _0x264b9['_audioUnlocked'] = !0x0;
                        document['removeEventListener']('touchstart', _0x36e57f, !0x0);
                        document['removeEventListener']('touchend', _0x36e57f, !0x0);
                        document['removeEventListener']('click', _0x36e57f, !0x0);
                        for (var _0x3032bf = 0x0; _0x3032bf < _0x264b9['_howls']['length']; _0x3032bf++) _0x264b9['_howls'][_0x3032bf]['_emit']('unlock');
                    };
                };
                document['addEventListener']('touchstart', _0x36e57f, !0x0);
                document['addEventListener']('touchend', _0x36e57f, !0x0);
                document['addEventListener']('click', _0x36e57f, !0x0);
                return _0x264b9;
            }
        },
        '_obtainHtml5Audio': function() {
            var _0x23914f = this || _0x367b4e;
            if (_0x23914f['_html5AudioPool']['length']) return _0x23914f['_html5AudioPool']['pop']();
            (_0x23914f = new Audio()['play']()) && ('undefined' !== typeof Promise && (_0x23914f instanceof Promise || 'function' === typeof _0x23914f['then'])) && _0x23914f['catch'](function() {
                console['warn']('HTML5 Audio pool exhausted, returning potentially locked audio object.');
            });
            return new Audio();
        },
        '_releaseHtml5Audio': function(_0x1a14d7) {
            var _0x507b17 = this || _0x367b4e;
            _0x1a14d7['_unlocked'] && _0x507b17['_html5AudioPool']['push'](_0x1a14d7);
            return _0x507b17;
        },
        '_autoSuspend': function() {
            var _0x129a11 = this;
            if (_0x129a11['autoSuspend'] && _0x129a11['ctx'] && 'undefined' !== typeof _0x129a11['ctx']['suspend'] && _0x367b4e['usingWebAudio']) {
                for (var _0x4041b2 = 0x0; _0x4041b2 < _0x129a11['_howls']['length']; _0x4041b2++)
                    if (_0x129a11['_howls'][_0x4041b2]['_webAudio'])
                        for (var _0x4af54a = 0x0; _0x4af54a < _0x129a11['_howls'][_0x4041b2]['_sounds']['length']; _0x4af54a++)
                            if (!_0x129a11['_howls'][_0x4041b2]['_sounds'][_0x4af54a]['_paused']) return _0x129a11;
                _0x129a11['_suspendTimer'] && clearTimeout(_0x129a11['_suspendTimer']);
                _0x129a11['_suspendTimer'] = setTimeout(function() {
                    _0x129a11['autoSuspend'] && (_0x129a11['_suspendTimer'] = null, _0x129a11['state'] = 'suspending', _0x129a11['ctx']['suspend']()['then'](function() {
                        _0x129a11['state'] = 'suspended';
                        _0x129a11['_resumeAfterSuspend'] && (delete _0x129a11['_resumeAfterSuspend'], _0x129a11['_autoResume']());
                    }));
                }, 0x7530);
                return _0x129a11;
            }
        },
        '_autoResume': function() {
            var _0x43ced6 = this;
            if (_0x43ced6['ctx'] && 'undefined' !== typeof _0x43ced6['ctx']['resume'] && _0x367b4e['usingWebAudio']) return 'running' === _0x43ced6['state'] && _0x43ced6['_suspendTimer'] ? (clearTimeout(_0x43ced6['_suspendTimer']), _0x43ced6['_suspendTimer'] = null) : 'suspended' === _0x43ced6['state'] ? (_0x43ced6['ctx']['resume']()['then'](function() {
                _0x43ced6['state'] = 'running';
                for (var _0x4fb0c6 = 0x0; _0x4fb0c6 < _0x43ced6['_howls']['length']; _0x4fb0c6++) _0x43ced6['_howls'][_0x4fb0c6]['_emit']('resume');
            }), _0x43ced6['_suspendTimer'] && (clearTimeout(_0x43ced6['_suspendTimer']), _0x43ced6['_suspendTimer'] = null)) : 'suspending' === _0x43ced6['state'] && (_0x43ced6['_resumeAfterSuspend'] = !0x0), _0x43ced6;
        }
    };
    var _0x367b4e = new _0x113a72(),
        _0xd628e6 = function(_0x3ee258) {
            !_0x3ee258['src'] || 0x0 === _0x3ee258['src']['length'] ? console['error']('An array of source files must be passed with any new Howl.') : this['init'](_0x3ee258);
        };
    _0xd628e6['prototype'] = {
        'init': function(_0xc037ea) {
            var _0x2d7aec = this;
            _0x367b4e['ctx'] || _0x43285c();
            _0x2d7aec['_autoplay'] = _0xc037ea['autoplay'] || !0x1;
            _0x2d7aec['_format'] = 'string' !== typeof _0xc037ea['format'] ? _0xc037ea['format'] : [_0xc037ea['format']];
            _0x2d7aec['_html5'] = _0xc037ea['html5'] || !0x1;
            _0x2d7aec['_muted'] = _0xc037ea['mute'] || !0x1;
            _0x2d7aec['_loop'] = _0xc037ea['loop'] || !0x1;
            _0x2d7aec['_pool'] = _0xc037ea['pool'] || 0x5;
            _0x2d7aec['_preload'] = 'boolean' === typeof _0xc037ea['preload'] ? _0xc037ea['preload'] : !0x0;
            _0x2d7aec['_rate'] = _0xc037ea['rate'] || 0x1;
            _0x2d7aec['_sprite'] = _0xc037ea['sprite'] || {};
            _0x2d7aec['_src'] = 'string' !== typeof _0xc037ea['src'] ? _0xc037ea['src'] : [_0xc037ea['src']];
            _0x2d7aec['_volume'] = void 0x0 !== _0xc037ea['volume'] ? _0xc037ea['volume'] : 0x1;
            _0x2d7aec['_xhrWithCredentials'] = _0xc037ea['xhrWithCredentials'] || !0x1;
            _0x2d7aec['_duration'] = 0x0;
            _0x2d7aec['_state'] = 'unloaded';
            _0x2d7aec['_sounds'] = [];
            _0x2d7aec['_endTimers'] = {};
            _0x2d7aec['_queue'] = [];
            _0x2d7aec['_playLock'] = !0x1;
            _0x2d7aec['_onend'] = _0xc037ea['onend'] ? [{
                'fn': _0xc037ea['onend']
            }] : [];
            _0x2d7aec['_onfade'] = _0xc037ea['onfade'] ? [{
                'fn': _0xc037ea['onfade']
            }] : [];
            _0x2d7aec['_onload'] = _0xc037ea['onload'] ? [{
                'fn': _0xc037ea['onload']
            }] : [];
            _0x2d7aec['_onloaderror'] = _0xc037ea['onloaderror'] ? [{
                'fn': _0xc037ea['onloaderror']
            }] : [];
            _0x2d7aec['_onplayerror'] = _0xc037ea['onplayerror'] ? [{
                'fn': _0xc037ea['onplayerror']
            }] : [];
            _0x2d7aec['_onpause'] = _0xc037ea['onpause'] ? [{
                'fn': _0xc037ea['onpause']
            }] : [];
            _0x2d7aec['_onplay'] = _0xc037ea['onplay'] ? [{
                'fn': _0xc037ea['onplay']
            }] : [];
            _0x2d7aec['_onstop'] = _0xc037ea['onstop'] ? [{
                'fn': _0xc037ea['onstop']
            }] : [];
            _0x2d7aec['_onmute'] = _0xc037ea['onmute'] ? [{
                'fn': _0xc037ea['onmute']
            }] : [];
            _0x2d7aec['_onvolume'] = _0xc037ea['onvolume'] ? [{
                'fn': _0xc037ea['onvolume']
            }] : [];
            _0x2d7aec['_onrate'] = _0xc037ea['onrate'] ? [{
                'fn': _0xc037ea['onrate']
            }] : [];
            _0x2d7aec['_onseek'] = _0xc037ea['onseek'] ? [{
                'fn': _0xc037ea['onseek']
            }] : [];
            _0x2d7aec['_onunlock'] = _0xc037ea['onunlock'] ? [{
                'fn': _0xc037ea['onunlock']
            }] : [];
            _0x2d7aec['_onresume'] = [];
            _0x2d7aec['_webAudio'] = _0x367b4e['usingWebAudio'] && !_0x2d7aec['_html5'];
            'undefined' !== typeof _0x367b4e['ctx'] && (_0x367b4e['ctx'] && _0x367b4e['autoUnlock']) && _0x367b4e['_unlockAudio']();
            _0x367b4e['_howls']['push'](_0x2d7aec);
            _0x2d7aec['_autoplay'] && _0x2d7aec['_queue']['push']({
                'event': 'play',
                'action': function() {
                    _0x2d7aec['play']();
                }
            });
            _0x2d7aec['_preload'] && _0x2d7aec['load']();
            return _0x2d7aec;
        },
        'load': function() {
            var _0x287451 = null;
            if (_0x367b4e['noAudio']) this['_emit']('loaderror', null, 'No audio support.');
            else {
                'string' === typeof this['_src'] && (this['_src'] = [this['_src']]);
                for (var _0x2fd00d = 0x0; _0x2fd00d < this['_src']['length']; _0x2fd00d++) {
                    var _0x177a6f, _0x37efbd;
                    if (this['_format'] && this['_format'][_0x2fd00d]) _0x177a6f = this['_format'][_0x2fd00d];
                    else {
                        _0x37efbd = this['_src'][_0x2fd00d];
                        if ('string' !== typeof _0x37efbd) {
                            this['_emit']('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                            continue;
                        }(_0x177a6f = /^data:audio\/([^;,]+);/i ['exec'](_0x37efbd)) || (_0x177a6f = /\.([^.]+)$/ ['exec'](_0x37efbd['split']('?', 0x1)[0x0]));
                        _0x177a6f && (_0x177a6f = _0x177a6f[0x1]['toLowerCase']());
                    }
                    _0x177a6f || console['warn']('No file extension was found. Consider using the \x22format\x22 property or specify an extension.');
                    if (_0x177a6f && _0x367b4e['codecs'](_0x177a6f)) {
                        _0x287451 = this['_src'][_0x2fd00d];
                        break;
                    }
                }
                if (_0x287451) {
                    this['_src'] = _0x287451;
                    this['_state'] = 'loading';
                    'https:' === window['location']['protocol'] && 'http:' === _0x287451['slice'](0x0, 0x5) && (this['_html5'] = !0x0, this['_webAudio'] = !0x1);
                    new _0x21075d(this);
                    if (this['_webAudio']) {
                        var _0x47fdab = this,
                            _0x72c1ed = _0x47fdab['_src'];
                        if (_0x4fd31a[_0x72c1ed]) _0x47fdab['_duration'] = _0x4fd31a[_0x72c1ed]['duration'], _0x4e824b(_0x47fdab);
                        else if (/^data:[^;]+;base64,/ ['test'](_0x72c1ed)) {
                            _0x287451 = atob(_0x72c1ed['split'](',')[0x1]);
                            _0x2fd00d = new Uint8Array(_0x287451['length']);
                            for (_0x177a6f = 0x0; _0x177a6f < _0x287451['length']; ++_0x177a6f) _0x2fd00d[_0x177a6f] = _0x287451['charCodeAt'](_0x177a6f);
                            _0x369d07(_0x2fd00d['buffer'], _0x47fdab);
                        } else {
                            var _0x1be31e = new XMLHttpRequest();
                            _0x1be31e['open']('GET', _0x72c1ed, !0x0);
                            _0x1be31e['withCredentials'] = _0x47fdab['_xhrWithCredentials'];
                            _0x1be31e['responseType'] = 'arraybuffer';
                            _0x1be31e['onload'] = function() {
                                var _0x240634 = (_0x1be31e['status'] + '')[0x0];
                                '0' !== _0x240634 && '2' !== _0x240634 && '3' !== _0x240634 ? _0x47fdab['_emit']('loaderror', null, 'Failed loading audio file with status: ' + _0x1be31e['status'] + '.') : _0x369d07(_0x1be31e['response'], _0x47fdab);
                            };
                            _0x1be31e['onerror'] = function() {
                                _0x47fdab['_webAudio'] && (_0x47fdab['_html5'] = !0x0, _0x47fdab['_webAudio'] = !0x1, _0x47fdab['_sounds'] = [], delete _0x4fd31a[_0x72c1ed], _0x47fdab['load']());
                            };
                            try {
                                _0x1be31e['send']();
                            } catch (_0x39b1e7) {
                                _0x1be31e['onerror']();
                            }
                        }
                    }
                    return this;
                }
                this['_emit']('loaderror', null, 'No codec support for selected audio sources.');
            }
        },
        'play': function(_0x3da0c9, _0x5eb25f) {
            var _0x356a73 = this,
                _0x2c1c21 = null;
            if ('number' === typeof _0x3da0c9) _0x2c1c21 = _0x3da0c9, _0x3da0c9 = null;
            else {
                if ('string' === typeof _0x3da0c9 && 'loaded' === _0x356a73['_state'] && !_0x356a73['_sprite'][_0x3da0c9]) return null;
                if ('undefined' === typeof _0x3da0c9 && (_0x3da0c9 = '__default', !_0x356a73['_playLock'])) {
                    for (var _0x350b9b = 0x0, _0x416cfe = 0x0; _0x416cfe < _0x356a73['_sounds']['length']; _0x416cfe++) _0x356a73['_sounds'][_0x416cfe]['_paused'] && !_0x356a73['_sounds'][_0x416cfe]['_ended'] && (_0x350b9b++, _0x2c1c21 = _0x356a73['_sounds'][_0x416cfe]['_id']);
                    0x1 === _0x350b9b ? _0x3da0c9 = null : _0x2c1c21 = null;
                }
            }
            var _0x546efe = _0x2c1c21 ? _0x356a73['_soundById'](_0x2c1c21) : _0x356a73['_inactiveSound']();
            if (!_0x546efe) return null;
            _0x2c1c21 && !_0x3da0c9 && (_0x3da0c9 = _0x546efe['_sprite'] || '__default');
            if ('loaded' !== _0x356a73['_state']) {
                _0x546efe['_sprite'] = _0x3da0c9;
                _0x546efe['_ended'] = !0x1;
                var _0xa6e09e = _0x546efe['_id'];
                _0x356a73['_queue']['push']({
                    'event': 'play',
                    'action': function() {
                        _0x356a73['play'](_0xa6e09e);
                    }
                });
                return _0xa6e09e;
            }
            if (_0x2c1c21 && !_0x546efe['_paused']) return _0x5eb25f || _0x356a73['_loadQueue']('play'), _0x546efe['_id'];
            _0x356a73['_webAudio'] && _0x367b4e['_autoResume']();
            var _0x2b7be8 = Math['max'](0x0, 0x0 < _0x546efe['_seek'] ? _0x546efe['_seek'] : _0x356a73['_sprite'][_0x3da0c9][0x0] / 0x3e8),
                _0x557cde = Math['max'](0x0, (_0x356a73['_sprite'][_0x3da0c9][0x0] + _0x356a73['_sprite'][_0x3da0c9][0x1]) / 0x3e8 - _0x2b7be8),
                _0x35980f = 0x3e8 * _0x557cde / Math['abs'](_0x546efe['_rate']),
                _0x1bd83d = _0x356a73['_sprite'][_0x3da0c9][0x0] / 0x3e8,
                _0x7c115e = (_0x356a73['_sprite'][_0x3da0c9][0x0] + _0x356a73['_sprite'][_0x3da0c9][0x1]) / 0x3e8,
                _0x90d9a = !(!_0x546efe['_loop'] && !_0x356a73['_sprite'][_0x3da0c9][0x2]);
            _0x546efe['_sprite'] = _0x3da0c9;
            _0x546efe['_ended'] = !0x1;
            var _0x54c03d = function() {
                _0x546efe['_paused'] = !0x1;
                _0x546efe['_seek'] = _0x2b7be8;
                _0x546efe['_start'] = _0x1bd83d;
                _0x546efe['_stop'] = _0x7c115e;
                _0x546efe['_loop'] = _0x90d9a;
            };
            if (_0x2b7be8 >= _0x7c115e) _0x356a73['_ended'](_0x546efe);
            else {
                var _0x71999f = _0x546efe['_node'];
                if (_0x356a73['_webAudio']) _0x2c1c21 = function() {
                    _0x356a73['_playLock'] = !0x1;
                    _0x54c03d();
                    _0x356a73['_refreshBuffer'](_0x546efe);
                    _0x71999f['gain']['setValueAtTime'](_0x546efe['_muted'] || _0x356a73['_muted'] ? 0x0 : _0x546efe['_volume'], _0x367b4e['ctx']['currentTime']);
                    _0x546efe['_playStart'] = _0x367b4e['ctx']['currentTime'];
                    'undefined' === typeof _0x71999f['bufferSource']['start'] ? _0x546efe['_loop'] ? _0x71999f['bufferSource']['noteGrainOn'](0x0, _0x2b7be8, 0x15180) : _0x71999f['bufferSource']['noteGrainOn'](0x0, _0x2b7be8, _0x557cde) : _0x546efe['_loop'] ? _0x71999f['bufferSource']['start'](0x0, _0x2b7be8, 0x15180) : _0x71999f['bufferSource']['start'](0x0, _0x2b7be8, _0x557cde);
                    Infinity !== _0x35980f && (_0x356a73['_endTimers'][_0x546efe['_id']] = setTimeout(_0x356a73['_ended']['bind'](_0x356a73, _0x546efe), _0x35980f));
                    _0x5eb25f || setTimeout(function() {
                        _0x356a73['_emit']('play', _0x546efe['_id']);
                        _0x356a73['_loadQueue']();
                    }, 0x0);
                }, 'running' === _0x367b4e['state'] ? _0x2c1c21() : (_0x356a73['_playLock'] = !0x0, _0x356a73['once']('resume', _0x2c1c21), _0x356a73['_clearTimer'](_0x546efe['_id']));
                else {
                    var _0x2942c3 = function() {
                        _0x71999f['currentTime'] = _0x2b7be8;
                        _0x71999f['muted'] = _0x546efe['_muted'] || _0x356a73['_muted'] || _0x367b4e['_muted'] || _0x71999f['muted'];
                        _0x71999f['volume'] = _0x546efe['_volume'] * _0x367b4e['volume']();
                        _0x71999f['playbackRate'] = _0x546efe['_rate'];
                        try {
                            var _0x42534a = _0x71999f['play']();
                            _0x42534a && 'undefined' !== typeof Promise && (_0x42534a instanceof Promise || 'function' === typeof _0x42534a['then']) ? (_0x356a73['_playLock'] = !0x0, _0x54c03d(), _0x42534a['then'](function() {
                                _0x356a73['_playLock'] = !0x1;
                                _0x71999f['_unlocked'] = !0x0;
                                _0x5eb25f || (_0x356a73['_emit']('play', _0x546efe['_id']), _0x356a73['_loadQueue']());
                            })['catch'](function() {
                                _0x356a73['_playLock'] = !0x1;
                                _0x356a73['_emit']('playerror', _0x546efe['_id'], 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.');
                                _0x546efe['_ended'] = !0x0;
                                _0x546efe['_paused'] = !0x0;
                            })) : _0x5eb25f || (_0x356a73['_playLock'] = !0x1, _0x54c03d(), _0x356a73['_emit']('play', _0x546efe['_id']), _0x356a73['_loadQueue']());
                            _0x71999f['playbackRate'] = _0x546efe['_rate'];
                            _0x71999f['paused'] ? _0x356a73['_emit']('playerror', _0x546efe['_id'], 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.') : '__default' !== _0x3da0c9 || _0x546efe['_loop'] ? _0x356a73['_endTimers'][_0x546efe['_id']] = setTimeout(_0x356a73['_ended']['bind'](_0x356a73, _0x546efe), _0x35980f) : (_0x356a73['_endTimers'][_0x546efe['_id']] = function() {
                                _0x356a73['_ended'](_0x546efe);
                                _0x71999f['removeEventListener']('ended', _0x356a73['_endTimers'][_0x546efe['_id']], !0x1);
                            }, _0x71999f['addEventListener']('ended', _0x356a73['_endTimers'][_0x546efe['_id']], !0x1));
                        } catch (_0x1f55d7) {
                            _0x356a73['_emit']('playerror', _0x546efe['_id'], _0x1f55d7);
                        }
                    };
                    'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x71999f['src'] && (_0x71999f['src'] = _0x356a73['_src'], _0x71999f['load']());
                    _0x2c1c21 = window && window['ejecta'] || !_0x71999f['readyState'] && _0x367b4e['_navigator']['isCocoonJS'];
                    if (0x3 <= _0x71999f['readyState'] || _0x2c1c21) _0x2942c3();
                    else {
                        _0x356a73['_playLock'] = !0x0;
                        var _0x4bd1fc = function() {
                            _0x2942c3();
                            _0x71999f['removeEventListener'](_0x367b4e['_canPlayEvent'], _0x4bd1fc, !0x1);
                        };
                        _0x71999f['addEventListener'](_0x367b4e['_canPlayEvent'], _0x4bd1fc, !0x1);
                        _0x356a73['_clearTimer'](_0x546efe['_id']);
                    }
                }
                return _0x546efe['_id'];
            }
        },
        'pause': function(_0x3f50e1, _0x4f8673) {
            var _0x4c6484 = this;
            if ('loaded' !== _0x4c6484['_state'] || _0x4c6484['_playLock']) return _0x4c6484['_queue']['push']({
                'event': 'pause',
                'action': function() {
                    _0x4c6484['pause'](_0x3f50e1);
                }
            }), _0x4c6484;
            for (var _0x8f0f50 = _0x4c6484['_getSoundIds'](_0x3f50e1), _0x457bfe = 0x0; _0x457bfe < _0x8f0f50['length']; _0x457bfe++) {
                _0x4c6484['_clearTimer'](_0x8f0f50[_0x457bfe]);
                var _0x1b3056 = _0x4c6484['_soundById'](_0x8f0f50[_0x457bfe]);
                if (_0x1b3056 && !_0x1b3056['_paused'] && (_0x1b3056['_seek'] = _0x4c6484['seek'](_0x8f0f50[_0x457bfe]), _0x1b3056['_rateSeek'] = 0x0, _0x1b3056['_paused'] = !0x0, _0x4c6484['_stopFade'](_0x8f0f50[_0x457bfe]), _0x1b3056['_node']))
                    if (_0x4c6484['_webAudio']) {
                        if (!_0x1b3056['_node']['bufferSource']) continue;
                        'undefined' === typeof _0x1b3056['_node']['bufferSource']['stop'] ? _0x1b3056['_node']['bufferSource']['noteOff'](0x0) : _0x1b3056['_node']['bufferSource']['stop'](0x0);
                        _0x4c6484['_cleanBuffer'](_0x1b3056['_node']);
                    } else(!isNaN(_0x1b3056['_node']['duration']) || Infinity === _0x1b3056['_node']['duration']) && _0x1b3056['_node']['pause']();
                _0x4f8673 || _0x4c6484['_emit']('pause', _0x1b3056 ? _0x1b3056['_id'] : null);
            }
            return _0x4c6484;
        },
        'stop': function(_0x2d099e, _0x511e7c) {
            var _0x5c056f = this;
            if ('loaded' !== _0x5c056f['_state'] || _0x5c056f['_playLock']) return _0x5c056f['_queue']['push']({
                'event': 'stop',
                'action': function() {
                    _0x5c056f['stop'](_0x2d099e);
                }
            }), _0x5c056f;
            for (var _0x541aec = _0x5c056f['_getSoundIds'](_0x2d099e), _0x58b0fe = 0x0; _0x58b0fe < _0x541aec['length']; _0x58b0fe++) {
                _0x5c056f['_clearTimer'](_0x541aec[_0x58b0fe]);
                var _0x5c2e1a = _0x5c056f['_soundById'](_0x541aec[_0x58b0fe]);
                if (_0x5c2e1a) {
                    _0x5c2e1a['_seek'] = _0x5c2e1a['_start'] || 0x0;
                    _0x5c2e1a['_rateSeek'] = 0x0;
                    _0x5c2e1a['_paused'] = !0x0;
                    _0x5c2e1a['_ended'] = !0x0;
                    _0x5c056f['_stopFade'](_0x541aec[_0x58b0fe]);
                    if (_0x5c2e1a['_node'])
                        if (_0x5c056f['_webAudio']) _0x5c2e1a['_node']['bufferSource'] && ('undefined' === typeof _0x5c2e1a['_node']['bufferSource']['stop'] ? _0x5c2e1a['_node']['bufferSource']['noteOff'](0x0) : _0x5c2e1a['_node']['bufferSource']['stop'](0x0), _0x5c056f['_cleanBuffer'](_0x5c2e1a['_node']));
                        else if (!isNaN(_0x5c2e1a['_node']['duration']) || Infinity === _0x5c2e1a['_node']['duration']) _0x5c2e1a['_node']['currentTime'] = _0x5c2e1a['_start'] || 0x0, _0x5c2e1a['_node']['pause'](), Infinity === _0x5c2e1a['_node']['duration'] && _0x5c056f['_clearSound'](_0x5c2e1a['_node']);
                    _0x511e7c || _0x5c056f['_emit']('stop', _0x5c2e1a['_id']);
                }
            }
            return _0x5c056f;
        },
        'mute': function(_0x5a0dc9, _0x4a27a5) {
            var _0x474718 = this;
            if ('loaded' !== _0x474718['_state'] || _0x474718['_playLock']) return _0x474718['_queue']['push']({
                'event': 'mute',
                'action': function() {
                    _0x474718['mute'](_0x5a0dc9, _0x4a27a5);
                }
            }), _0x474718;
            if ('undefined' === typeof _0x4a27a5)
                if ('boolean' === typeof _0x5a0dc9) _0x474718['_muted'] = _0x5a0dc9;
                else return _0x474718['_muted'];
            for (var _0x258fee = _0x474718['_getSoundIds'](_0x4a27a5), _0x3502a9 = 0x0; _0x3502a9 < _0x258fee['length']; _0x3502a9++) {
                var _0x38e046 = _0x474718['_soundById'](_0x258fee[_0x3502a9]);
                _0x38e046 && (_0x38e046['_muted'] = _0x5a0dc9, _0x38e046['_interval'] && _0x474718['_stopFade'](_0x38e046['_id']), _0x474718['_webAudio'] && _0x38e046['_node'] ? _0x38e046['_node']['gain']['setValueAtTime'](_0x5a0dc9 ? 0x0 : _0x38e046['_volume'], _0x367b4e['ctx']['currentTime']) : _0x38e046['_node'] && (_0x38e046['_node']['muted'] = _0x367b4e['_muted'] ? !0x0 : _0x5a0dc9), _0x474718['_emit']('mute', _0x38e046['_id']));
            }
            return _0x474718;
        },
        'volume': function() {
            var _0x4cd189 = this,
                _0x4e1285 = arguments,
                _0x457e27, _0x5ad1c5;
            if (0x0 === _0x4e1285['length']) return _0x4cd189['_volume'];
            0x1 === _0x4e1285['length'] || 0x2 === _0x4e1285['length'] && 'undefined' === typeof _0x4e1285[0x1] ? 0x0 <= _0x4cd189['_getSoundIds']()['indexOf'](_0x4e1285[0x0]) ? _0x5ad1c5 = parseInt(_0x4e1285[0x0], 0xa) : _0x457e27 = parseFloat(_0x4e1285[0x0]) : 0x2 <= _0x4e1285['length'] && (_0x457e27 = parseFloat(_0x4e1285[0x0]), _0x5ad1c5 = parseInt(_0x4e1285[0x1], 0xa));
            var _0x1668b6;
            if ('undefined' !== typeof _0x457e27 && 0x0 <= _0x457e27 && 0x1 >= _0x457e27) {
                if ('loaded' !== _0x4cd189['_state'] || _0x4cd189['_playLock']) return _0x4cd189['_queue']['push']({
                    'event': 'volume',
                    'action': function() {
                        _0x4cd189['volume']['apply'](_0x4cd189, _0x4e1285);
                    }
                }), _0x4cd189;
                'undefined' === typeof _0x5ad1c5 && (_0x4cd189['_volume'] = _0x457e27);
                _0x5ad1c5 = _0x4cd189['_getSoundIds'](_0x5ad1c5);
                for (var _0x5be5d8 = 0x0; _0x5be5d8 < _0x5ad1c5['length']; _0x5be5d8++)
                    if (_0x1668b6 = _0x4cd189['_soundById'](_0x5ad1c5[_0x5be5d8])) _0x1668b6['_volume'] = _0x457e27, _0x4e1285[0x2] || _0x4cd189['_stopFade'](_0x5ad1c5[_0x5be5d8]), _0x4cd189['_webAudio'] && _0x1668b6['_node'] && !_0x1668b6['_muted'] ? _0x1668b6['_node']['gain']['setValueAtTime'](_0x457e27, _0x367b4e['ctx']['currentTime']) : _0x1668b6['_node'] && !_0x1668b6['_muted'] && (_0x1668b6['_node']['volume'] = _0x457e27 * _0x367b4e['volume']()), _0x4cd189['_emit']('volume', _0x1668b6['_id']);
            } else return (_0x1668b6 = _0x5ad1c5 ? _0x4cd189['_soundById'](_0x5ad1c5) : _0x4cd189['_sounds'][0x0]) ? _0x1668b6['_volume'] : 0x0;
            return _0x4cd189;
        },
        'fade': function(_0x31fe92, _0x536a80, _0x536097, _0x247e69) {
            var _0xae9e2 = this;
            if ('loaded' !== _0xae9e2['_state'] || _0xae9e2['_playLock']) return _0xae9e2['_queue']['push']({
                'event': 'fade',
                'action': function() {
                    _0xae9e2['fade'](_0x31fe92, _0x536a80, _0x536097, _0x247e69);
                }
            }), _0xae9e2;
            _0x31fe92 = parseFloat(_0x31fe92);
            _0x536a80 = parseFloat(_0x536a80);
            _0x536097 = parseFloat(_0x536097);
            _0xae9e2['volume'](_0x31fe92, _0x247e69);
            for (var _0x5706fb = _0xae9e2['_getSoundIds'](_0x247e69), _0x70f987 = 0x0; _0x70f987 < _0x5706fb['length']; _0x70f987++) {
                var _0x209342 = _0xae9e2['_soundById'](_0x5706fb[_0x70f987]);
                if (_0x209342) {
                    _0x247e69 || _0xae9e2['_stopFade'](_0x5706fb[_0x70f987]);
                    if (_0xae9e2['_webAudio'] && !_0x209342['_muted']) {
                        var _0x16af4e = _0x367b4e['ctx']['currentTime'],
                            _0x16ce19 = _0x16af4e + _0x536097 / 0x3e8;
                        _0x209342['_volume'] = _0x31fe92;
                        _0x209342['_node']['gain']['setValueAtTime'](_0x31fe92, _0x16af4e);
                        _0x209342['_node']['gain']['linearRampToValueAtTime'](_0x536a80, _0x16ce19);
                    }
                    _0xae9e2['_startFadeInterval'](_0x209342, _0x31fe92, _0x536a80, _0x536097, _0x5706fb[_0x70f987], 'undefined' === typeof _0x247e69);
                }
            }
            return _0xae9e2;
        },
        '_startFadeInterval': function(_0x3d71ee, _0x49d010, _0x2bfd3c, _0x335570, _0x54f0e2, _0x4f4218) {
            var _0x204197 = this,
                _0x375e26 = _0x49d010,
                _0xbdc807 = _0x2bfd3c - _0x49d010;
            _0x54f0e2 = Math['abs'](_0xbdc807 / 0.01);
            _0x54f0e2 = Math['max'](0x4, 0x0 < _0x54f0e2 ? _0x335570 / _0x54f0e2 : _0x335570);
            var _0x18ea12 = Date['now']();
            _0x3d71ee['_fadeTo'] = _0x2bfd3c;
            _0x3d71ee['_interval'] = setInterval(function() {
                var _0x504162 = (Date['now']() - _0x18ea12) / _0x335570;
                _0x18ea12 = Date['now']();
                _0x375e26 += _0xbdc807 * _0x504162;
                _0x375e26 = Math['max'](0x0, _0x375e26);
                _0x375e26 = Math['min'](0x1, _0x375e26);
                _0x375e26 = Math['round'](0x64 * _0x375e26) / 0x64;
                _0x204197['_webAudio'] ? _0x3d71ee['_volume'] = _0x375e26 : _0x204197['volume'](_0x375e26, _0x3d71ee['_id'], !0x0);
                _0x4f4218 && (_0x204197['_volume'] = _0x375e26);
                if (_0x2bfd3c < _0x49d010 && _0x375e26 <= _0x2bfd3c || _0x2bfd3c > _0x49d010 && _0x375e26 >= _0x2bfd3c) clearInterval(_0x3d71ee['_interval']), _0x3d71ee['_interval'] = null, _0x3d71ee['_fadeTo'] = null, _0x204197['volume'](_0x2bfd3c, _0x3d71ee['_id']), _0x204197['_emit']('fade', _0x3d71ee['_id']);
            }, _0x54f0e2);
        },
        '_stopFade': function(_0x5d4129) {
            var _0x4b937f = this['_soundById'](_0x5d4129);
            _0x4b937f && _0x4b937f['_interval'] && (this['_webAudio'] && _0x4b937f['_node']['gain']['cancelScheduledValues'](_0x367b4e['ctx']['currentTime']), clearInterval(_0x4b937f['_interval']), _0x4b937f['_interval'] = null, this['volume'](_0x4b937f['_fadeTo'], _0x5d4129), _0x4b937f['_fadeTo'] = null, this['_emit']('fade', _0x5d4129));
            return this;
        },
        'loop': function() {
            var _0x5a92f6 = arguments,
                _0x4570ae, _0x5dceae;
            if (0x0 === _0x5a92f6['length']) return this['_loop'];
            if (0x1 === _0x5a92f6['length'])
                if ('boolean' === typeof _0x5a92f6[0x0]) this['_loop'] = _0x4570ae = _0x5a92f6[0x0];
                else return (_0x5a92f6 = this['_soundById'](parseInt(_0x5a92f6[0x0], 0xa))) ? _0x5a92f6['_loop'] : !0x1;
            else 0x2 === _0x5a92f6['length'] && (_0x4570ae = _0x5a92f6[0x0], _0x5dceae = parseInt(_0x5a92f6[0x1], 0xa));
            _0x5dceae = this['_getSoundIds'](_0x5dceae);
            for (var _0x56ca20 = 0x0; _0x56ca20 < _0x5dceae['length']; _0x56ca20++)
                if (_0x5a92f6 = this['_soundById'](_0x5dceae[_0x56ca20]))
                    if (_0x5a92f6['_loop'] = _0x4570ae, this['_webAudio'] && (_0x5a92f6['_node'] && _0x5a92f6['_node']['bufferSource']) && (_0x5a92f6['_node']['bufferSource']['loop'] = _0x4570ae)) _0x5a92f6['_node']['bufferSource']['loopStart'] = _0x5a92f6['_start'] || 0x0, _0x5a92f6['_node']['bufferSource']['loopEnd'] = _0x5a92f6['_stop'];
            return this;
        },
        'rate': function() {
            var _0x43a08b = this,
                _0x412bb2 = arguments,
                _0x322be4, _0x47a9d2;
            0x0 === _0x412bb2['length'] ? _0x47a9d2 = _0x43a08b['_sounds'][0x0]['_id'] : 0x1 === _0x412bb2['length'] ? 0x0 <= _0x43a08b['_getSoundIds']()['indexOf'](_0x412bb2[0x0]) ? _0x47a9d2 = parseInt(_0x412bb2[0x0], 0xa) : _0x322be4 = parseFloat(_0x412bb2[0x0]) : 0x2 === _0x412bb2['length'] && (_0x322be4 = parseFloat(_0x412bb2[0x0]), _0x47a9d2 = parseInt(_0x412bb2[0x1], 0xa));
            var _0x8db82f;
            if ('number' === typeof _0x322be4) {
                if ('loaded' !== _0x43a08b['_state'] || _0x43a08b['_playLock']) return _0x43a08b['_queue']['push']({
                    'event': 'rate',
                    'action': function() {
                        _0x43a08b['rate']['apply'](_0x43a08b, _0x412bb2);
                    }
                }), _0x43a08b;
                'undefined' === typeof _0x47a9d2 && (_0x43a08b['_rate'] = _0x322be4);
                _0x47a9d2 = _0x43a08b['_getSoundIds'](_0x47a9d2);
                for (var _0x445510 = 0x0; _0x445510 < _0x47a9d2['length']; _0x445510++)
                    if (_0x8db82f = _0x43a08b['_soundById'](_0x47a9d2[_0x445510])) {
                        _0x43a08b['playing'](_0x47a9d2[_0x445510]) && (_0x8db82f['_rateSeek'] = _0x43a08b['seek'](_0x47a9d2[_0x445510]), _0x8db82f['_playStart'] = _0x43a08b['_webAudio'] ? _0x367b4e['ctx']['currentTime'] : _0x8db82f['_playStart']);
                        _0x8db82f['_rate'] = _0x322be4;
                        _0x43a08b['_webAudio'] && _0x8db82f['_node'] && _0x8db82f['_node']['bufferSource'] ? _0x8db82f['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x322be4, _0x367b4e['ctx']['currentTime']) : _0x8db82f['_node'] && (_0x8db82f['_node']['playbackRate'] = _0x322be4);
                        var _0x39f0e8 = _0x43a08b['seek'](_0x47a9d2[_0x445510]),
                            _0x39f0e8 = 0x3e8 * ((_0x43a08b['_sprite'][_0x8db82f['_sprite']][0x0] + _0x43a08b['_sprite'][_0x8db82f['_sprite']][0x1]) / 0x3e8 - _0x39f0e8) / Math['abs'](_0x8db82f['_rate']);
                        if (_0x43a08b['_endTimers'][_0x47a9d2[_0x445510]] || !_0x8db82f['_paused']) _0x43a08b['_clearTimer'](_0x47a9d2[_0x445510]), _0x43a08b['_endTimers'][_0x47a9d2[_0x445510]] = setTimeout(_0x43a08b['_ended']['bind'](_0x43a08b, _0x8db82f), _0x39f0e8);
                        _0x43a08b['_emit']('rate', _0x8db82f['_id']);
                    }
            } else return (_0x8db82f = _0x43a08b['_soundById'](_0x47a9d2)) ? _0x8db82f['_rate'] : _0x43a08b['_rate'];
            return _0x43a08b;
        },
        'seek': function() {
            var _0x586b8d = this,
                _0x4efaa8 = arguments,
                _0x50f0af, _0x2d84c3;
            0x0 === _0x4efaa8['length'] ? _0x2d84c3 = _0x586b8d['_sounds'][0x0]['_id'] : 0x1 === _0x4efaa8['length'] ? 0x0 <= _0x586b8d['_getSoundIds']()['indexOf'](_0x4efaa8[0x0]) ? _0x2d84c3 = parseInt(_0x4efaa8[0x0], 0xa) : _0x586b8d['_sounds']['length'] && (_0x2d84c3 = _0x586b8d['_sounds'][0x0]['_id'], _0x50f0af = parseFloat(_0x4efaa8[0x0])) : 0x2 === _0x4efaa8['length'] && (_0x50f0af = parseFloat(_0x4efaa8[0x0]), _0x2d84c3 = parseInt(_0x4efaa8[0x1], 0xa));
            if ('undefined' === typeof _0x2d84c3) return _0x586b8d;
            if ('loaded' !== _0x586b8d['_state'] || _0x586b8d['_playLock']) return _0x586b8d['_queue']['push']({
                'event': 'seek',
                'action': function() {
                    _0x586b8d['seek']['apply'](_0x586b8d, _0x4efaa8);
                }
            }), _0x586b8d;
            var _0x1228c0 = _0x586b8d['_soundById'](_0x2d84c3);
            if (_0x1228c0)
                if ('number' === typeof _0x50f0af && 0x0 <= _0x50f0af) {
                    var _0x372627 = _0x586b8d['playing'](_0x2d84c3);
                    _0x372627 && _0x586b8d['pause'](_0x2d84c3, !0x0);
                    _0x1228c0['_seek'] = _0x50f0af;
                    _0x1228c0['_ended'] = !0x1;
                    _0x586b8d['_clearTimer'](_0x2d84c3);
                    !_0x586b8d['_webAudio'] && (_0x1228c0['_node'] && !isNaN(_0x1228c0['_node']['duration'])) && (_0x1228c0['_node']['currentTime'] = _0x50f0af);
                    var _0xa5ec99 = function() {
                        _0x586b8d['_emit']('seek', _0x2d84c3);
                        _0x372627 && _0x586b8d['play'](_0x2d84c3, !0x0);
                    };
                    if (_0x372627 && !_0x586b8d['_webAudio']) {
                        var _0x53ec21 = function() {
                            _0x586b8d['_playLock'] ? setTimeout(_0x53ec21, 0x0) : _0xa5ec99();
                        };
                        setTimeout(_0x53ec21, 0x0);
                    } else _0xa5ec99();
                } else return _0x586b8d['_webAudio'] ? (_0x50f0af = _0x586b8d['playing'](_0x2d84c3) ? _0x367b4e['ctx']['currentTime'] - _0x1228c0['_playStart'] : 0x0, _0x1228c0['_seek'] + ((_0x1228c0['_rateSeek'] ? _0x1228c0['_rateSeek'] - _0x1228c0['_seek'] : 0x0) + _0x50f0af * Math['abs'](_0x1228c0['_rate']))) : _0x1228c0['_node']['currentTime'];
            return _0x586b8d;
        },
        'playing': function(_0x5f0c33) {
            if ('number' === typeof _0x5f0c33) return (_0x5f0c33 = this['_soundById'](_0x5f0c33)) ? !_0x5f0c33['_paused'] : !0x1;
            for (_0x5f0c33 = 0x0; _0x5f0c33 < this['_sounds']['length']; _0x5f0c33++)
                if (!this['_sounds'][_0x5f0c33]['_paused']) return !0x0;
            return !0x1;
        },
        'duration': function(_0x4cde65) {
            var _0x3bdf2a = this['_duration'];
            (_0x4cde65 = this['_soundById'](_0x4cde65)) && (_0x3bdf2a = this['_sprite'][_0x4cde65['_sprite']][0x1] / 0x3e8);
            return _0x3bdf2a;
        },
        'state': function() {
            return this['_state'];
        },
        'unload': function() {
            for (var _0x30ac37 = this['_sounds'], _0x53dd2b = 0x0; _0x53dd2b < _0x30ac37['length']; _0x53dd2b++) _0x30ac37[_0x53dd2b]['_paused'] || this['stop'](_0x30ac37[_0x53dd2b]['_id']), this['_webAudio'] || (this['_clearSound'](_0x30ac37[_0x53dd2b]['_node']), _0x30ac37[_0x53dd2b]['_node']['removeEventListener']('error', _0x30ac37[_0x53dd2b]['_errorFn'], !0x1), _0x30ac37[_0x53dd2b]['_node']['removeEventListener'](_0x367b4e['_canPlayEvent'], _0x30ac37[_0x53dd2b]['_loadFn'], !0x1), _0x367b4e['_releaseHtml5Audio'](_0x30ac37[_0x53dd2b]['_node'])), delete _0x30ac37[_0x53dd2b]['_node'], this['_clearTimer'](_0x30ac37[_0x53dd2b]['_id']);
            _0x53dd2b = _0x367b4e['_howls']['indexOf'](this);
            0x0 <= _0x53dd2b && _0x367b4e['_howls']['splice'](_0x53dd2b, 0x1);
            _0x30ac37 = !0x0;
            for (_0x53dd2b = 0x0; _0x53dd2b < _0x367b4e['_howls']['length']; _0x53dd2b++)
                if (_0x367b4e['_howls'][_0x53dd2b]['_src'] === this['_src'] || 0x0 <= this['_src']['indexOf'](_0x367b4e['_howls'][_0x53dd2b]['_src'])) {
                    _0x30ac37 = !0x1;
                    break;
                }
            _0x4fd31a && _0x30ac37 && delete _0x4fd31a[this['_src']];
            _0x367b4e['noAudio'] = !0x1;
            this['_state'] = 'unloaded';
            this['_sounds'] = [];
            return null;
        },
        'on': function(_0x4605b2, _0x2fab33, _0x163eb9, _0x184cb2) {
            _0x4605b2 = this['_on' + _0x4605b2];
            'function' === typeof _0x2fab33 && _0x4605b2['push'](_0x184cb2 ? {
                'id': _0x163eb9,
                'fn': _0x2fab33,
                'once': _0x184cb2
            } : {
                'id': _0x163eb9,
                'fn': _0x2fab33
            });
            return this;
        },
        'off': function(_0x58bb87, _0x288de9, _0x59afc5) {
            var _0x1130c2 = this['_on' + _0x58bb87],
                _0x2da090 = 0x0;
            'number' === typeof _0x288de9 && (_0x59afc5 = _0x288de9, _0x288de9 = null);
            if (_0x288de9 || _0x59afc5)
                for (_0x2da090 = 0x0; _0x2da090 < _0x1130c2['length']; _0x2da090++) {
                    if (_0x58bb87 = _0x59afc5 === _0x1130c2[_0x2da090]['id'], _0x288de9 === _0x1130c2[_0x2da090]['fn'] && _0x58bb87 || !_0x288de9 && _0x58bb87) {
                        _0x1130c2['splice'](_0x2da090, 0x1);
                        break;
                    }
                } else if (_0x58bb87) this['_on' + _0x58bb87] = [];
                else {
                    _0x288de9 = Object['keys'](this);
                    for (_0x2da090 = 0x0; _0x2da090 < _0x288de9['length']; _0x2da090++) 0x0 === _0x288de9[_0x2da090]['indexOf']('_on') && Array['isArray'](this[_0x288de9[_0x2da090]]) && (this[_0x288de9[_0x2da090]] = []);
                }
            return this;
        },
        'once': function(_0x5b90d3, _0x592135, _0x20d09b) {
            this['on'](_0x5b90d3, _0x592135, _0x20d09b, 0x1);
            return this;
        },
        '_emit': function(_0x3b8430, _0x2b7f5b, _0x357557) {
            for (var _0x4f3341 = this['_on' + _0x3b8430], _0x117771 = _0x4f3341['length'] - 0x1; 0x0 <= _0x117771; _0x117771--)
                if (!_0x4f3341[_0x117771]['id'] || _0x4f3341[_0x117771]['id'] === _0x2b7f5b || 'load' === _0x3b8430) setTimeout(function(_0x277707) {
                    _0x277707['call'](this, _0x2b7f5b, _0x357557);
                }['bind'](this, _0x4f3341[_0x117771]['fn']), 0x0), _0x4f3341[_0x117771]['once'] && this['off'](_0x3b8430, _0x4f3341[_0x117771]['fn'], _0x4f3341[_0x117771]['id']);
            this['_loadQueue'](_0x3b8430);
            return this;
        },
        '_loadQueue': function(_0x17d47b) {
            if (0x0 < this['_queue']['length']) {
                var _0xf9a5fe = this['_queue'][0x0];
                _0xf9a5fe['event'] === _0x17d47b && (this['_queue']['shift'](), this['_loadQueue']());
                _0x17d47b || _0xf9a5fe['action']();
            }
            return this;
        },
        '_ended': function(_0x4e8f6f) {
            var _0x4a95e9 = _0x4e8f6f['_sprite'];
            if (!this['_webAudio'] && _0x4e8f6f['_node'] && !_0x4e8f6f['_node']['paused'] && !_0x4e8f6f['_node']['ended'] && _0x4e8f6f['_node']['currentTime'] < _0x4e8f6f['_stop']) return setTimeout(this['_ended']['bind'](this, _0x4e8f6f), 0x64), this;
            _0x4a95e9 = !(!_0x4e8f6f['_loop'] && !this['_sprite'][_0x4a95e9][0x2]);
            this['_emit']('end', _0x4e8f6f['_id']);
            !this['_webAudio'] && _0x4a95e9 && this['stop'](_0x4e8f6f['_id'], !0x0)['play'](_0x4e8f6f['_id']);
            if (this['_webAudio'] && _0x4a95e9) {
                this['_emit']('play', _0x4e8f6f['_id']);
                _0x4e8f6f['_seek'] = _0x4e8f6f['_start'] || 0x0;
                _0x4e8f6f['_rateSeek'] = 0x0;
                _0x4e8f6f['_playStart'] = _0x367b4e['ctx']['currentTime'];
                var _0x3b6846 = 0x3e8 * (_0x4e8f6f['_stop'] - _0x4e8f6f['_start']) / Math['abs'](_0x4e8f6f['_rate']);
                this['_endTimers'][_0x4e8f6f['_id']] = setTimeout(this['_ended']['bind'](this, _0x4e8f6f), _0x3b6846);
            }
            this['_webAudio'] && !_0x4a95e9 && (_0x4e8f6f['_paused'] = !0x0, _0x4e8f6f['_ended'] = !0x0, _0x4e8f6f['_seek'] = _0x4e8f6f['_start'] || 0x0, _0x4e8f6f['_rateSeek'] = 0x0, this['_clearTimer'](_0x4e8f6f['_id']), this['_cleanBuffer'](_0x4e8f6f['_node']), _0x367b4e['_autoSuspend']());
            !this['_webAudio'] && !_0x4a95e9 && this['stop'](_0x4e8f6f['_id'], !0x0);
            return this;
        },
        '_clearTimer': function(_0x1bfb5a) {
            if (this['_endTimers'][_0x1bfb5a]) {
                if ('function' !== typeof this['_endTimers'][_0x1bfb5a]) clearTimeout(this['_endTimers'][_0x1bfb5a]);
                else {
                    var _0x421605 = this['_soundById'](_0x1bfb5a);
                    _0x421605 && _0x421605['_node'] && _0x421605['_node']['removeEventListener']('ended', this['_endTimers'][_0x1bfb5a], !0x1);
                }
                delete this['_endTimers'][_0x1bfb5a];
            }
            return this;
        },
        '_soundById': function(_0x31881d) {
            for (var _0x36ee32 = 0x0; _0x36ee32 < this['_sounds']['length']; _0x36ee32++)
                if (_0x31881d === this['_sounds'][_0x36ee32]['_id']) return this['_sounds'][_0x36ee32];
            return null;
        },
        '_inactiveSound': function() {
            this['_drain']();
            for (var _0x41801e = 0x0; _0x41801e < this['_sounds']['length']; _0x41801e++)
                if (this['_sounds'][_0x41801e]['_ended']) return this['_sounds'][_0x41801e]['reset']();
            return new _0x21075d(this);
        },
        '_drain': function() {
            var _0x5ced0b = this['_pool'],
                _0x2f08aa = 0x0,
                _0x24210a = 0x0;
            if (!(this['_sounds']['length'] < _0x5ced0b)) {
                for (_0x24210a = 0x0; _0x24210a < this['_sounds']['length']; _0x24210a++) this['_sounds'][_0x24210a]['_ended'] && _0x2f08aa++;
                for (_0x24210a = this['_sounds']['length'] - 0x1; 0x0 <= _0x24210a && !(_0x2f08aa <= _0x5ced0b); _0x24210a--) this['_sounds'][_0x24210a]['_ended'] && (this['_webAudio'] && this['_sounds'][_0x24210a]['_node'] && this['_sounds'][_0x24210a]['_node']['disconnect'](0x0), this['_sounds']['splice'](_0x24210a, 0x1), _0x2f08aa--);
            }
        },
        '_getSoundIds': function(_0x3d15c8) {
            if ('undefined' === typeof _0x3d15c8) {
                _0x3d15c8 = [];
                for (var _0x39457 = 0x0; _0x39457 < this['_sounds']['length']; _0x39457++) _0x3d15c8['push'](this['_sounds'][_0x39457]['_id']);
                return _0x3d15c8;
            }
            return [_0x3d15c8];
        },
        '_refreshBuffer': function(_0x27ebeb) {
            _0x367b4e['ctx'] || _0x43285c();
            _0x27ebeb['_node']['bufferSource'] = _0x367b4e['ctx']['createBufferSource']();
            _0x27ebeb['_node']['bufferSource']['buffer'] = _0x4fd31a[this['_src']];
            _0x27ebeb['_panner'] ? _0x27ebeb['_node']['bufferSource']['connect'](_0x27ebeb['_panner']) : _0x27ebeb['_node']['bufferSource']['connect'](_0x27ebeb['_node']);
            if (_0x27ebeb['_node']['bufferSource']['loop'] = _0x27ebeb['_loop']) _0x27ebeb['_node']['bufferSource']['loopStart'] = _0x27ebeb['_start'] || 0x0, _0x27ebeb['_node']['bufferSource']['loopEnd'] = _0x27ebeb['_stop'] || 0x0;
            _0x27ebeb['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x27ebeb['_rate'], _0x367b4e['ctx']['currentTime']);
            return this;
        },
        '_cleanBuffer': function(_0x238f04) {
            var _0x41f4ef = _0x367b4e['_navigator'] && 0x0 <= _0x367b4e['_navigator']['vendor']['indexOf']('Apple');
            if (_0x367b4e['_scratchBuffer'] && _0x238f04['bufferSource'] && (_0x238f04['bufferSource']['onended'] = null, _0x238f04['bufferSource']['disconnect'](0x0), _0x41f4ef)) try {
                _0x238f04['bufferSource']['buffer'] = _0x367b4e['_scratchBuffer'];
            } catch (_0x3fdd20) {}
            _0x238f04['bufferSource'] = null;
            return this;
        },
        '_clearSound': function(_0x197d23) {
            /MSIE |Trident\// ['test'](_0x367b4e['_navigator'] && _0x367b4e['_navigator']['userAgent']) || (_0x197d23['src'] = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
        }
    };
    var _0x21075d = function(_0x5c1cdf) {
        this['_parent'] = _0x5c1cdf;
        this['init']();
    };
    _0x21075d['prototype'] = {
        'init': function() {
            var _0x2f075c = this['_parent'];
            this['_muted'] = _0x2f075c['_muted'];
            this['_loop'] = _0x2f075c['_loop'];
            this['_volume'] = _0x2f075c['_volume'];
            this['_rate'] = _0x2f075c['_rate'];
            this['_seek'] = 0x0;
            this['_ended'] = this['_paused'] = !0x0;
            this['_sprite'] = '__default';
            this['_id'] = ++_0x367b4e['_counter'];
            _0x2f075c['_sounds']['push'](this);
            this['create']();
            return this;
        },
        'create': function() {
            var _0x58d174 = this['_parent'],
                _0x25baa3 = _0x367b4e['_muted'] || this['_muted'] || this['_parent']['_muted'] ? 0x0 : this['_volume'];
            _0x58d174['_webAudio'] ? (_0x367b4e['ctx'] || _0x43285c(), this['_node'] = 'undefined' === typeof _0x367b4e['ctx']['createGain'] ? _0x367b4e['ctx']['createGainNode']() : _0x367b4e['ctx']['createGain'](), this['_node']['gain']['setValueAtTime'](_0x25baa3, _0x367b4e['ctx']['currentTime']), this['_node']['paused'] = !0x0, this['_node']['connect'](_0x367b4e['masterGain'])) : (this['_node'] = _0x367b4e['_obtainHtml5Audio'](), this['_errorFn'] = this['_errorListener']['bind'](this), this['_node']['addEventListener']('error', this['_errorFn'], !0x1), this['_loadFn'] = this['_loadListener']['bind'](this), this['_node']['addEventListener'](_0x367b4e['_canPlayEvent'], this['_loadFn'], !0x1), this['_node']['src'] = _0x58d174['_src'], this['_node']['preload'] = 'auto', this['_node']['volume'] = _0x25baa3 * _0x367b4e['volume'](), this['_node']['load']());
            return this;
        },
        'reset': function() {
            var _0x34a4fc = this['_parent'];
            this['_muted'] = _0x34a4fc['_muted'];
            this['_loop'] = _0x34a4fc['_loop'];
            this['_volume'] = _0x34a4fc['_volume'];
            this['_rate'] = _0x34a4fc['_rate'];
            this['_rateSeek'] = this['_seek'] = 0x0;
            this['_ended'] = this['_paused'] = !0x0;
            this['_sprite'] = '__default';
            this['_id'] = ++_0x367b4e['_counter'];
            return this;
        },
        '_errorListener': function() {
            this['_parent']['_emit']('loaderror', this['_id'], this['_node']['error'] ? this['_node']['error']['code'] : 0x0);
            this['_node']['removeEventListener']('error', this['_errorFn'], !0x1);
        },
        '_loadListener': function() {
            var _0x511ea6 = this['_parent'];
            _0x511ea6['_duration'] = Math['ceil'](0xa * this['_node']['duration']) / 0xa;
            0x0 === Object['keys'](_0x511ea6['_sprite'])['length'] && (_0x511ea6['_sprite'] = {
                '__default': [0x0, 0x3e8 * _0x511ea6['_duration']]
            });
            'loaded' !== _0x511ea6['_state'] && (_0x511ea6['_state'] = 'loaded', _0x511ea6['_emit']('load'), _0x511ea6['_loadQueue']());
            this['_node']['removeEventListener'](_0x367b4e['_canPlayEvent'], this['_loadFn'], !0x1);
        }
    };
    var _0x4fd31a = {},
        _0x369d07 = function(_0x28096f, _0x3b149c) {
            var _0x135ef8 = function() {
                    _0x3b149c['_emit']('loaderror', null, 'Decoding audio data failed.');
                },
                _0x243227 = function(_0x549ab0) {
                    _0x549ab0 && 0x0 < _0x3b149c['_sounds']['length'] ? (_0x4fd31a[_0x3b149c['_src']] = _0x549ab0, _0x4e824b(_0x3b149c, _0x549ab0)) : _0x135ef8();
                };
            'undefined' !== typeof Promise && 0x1 === _0x367b4e['ctx']['decodeAudioData']['length'] ? _0x367b4e['ctx']['decodeAudioData'](_0x28096f)['then'](_0x243227)['catch'](_0x135ef8) : _0x367b4e['ctx']['decodeAudioData'](_0x28096f, _0x243227, _0x135ef8);
        },
        _0x4e824b = function(_0x2dcd95, _0x4c63b4) {
            _0x4c63b4 && !_0x2dcd95['_duration'] && (_0x2dcd95['_duration'] = _0x4c63b4['duration']);
            0x0 === Object['keys'](_0x2dcd95['_sprite'])['length'] && (_0x2dcd95['_sprite'] = {
                '__default': [0x0, 0x3e8 * _0x2dcd95['_duration']]
            });
            'loaded' !== _0x2dcd95['_state'] && (_0x2dcd95['_state'] = 'loaded', _0x2dcd95['_emit']('load'), _0x2dcd95['_loadQueue']());
        },
        _0x43285c = function() {
            if (_0x367b4e['usingWebAudio']) {
                try {
                    'undefined' !== typeof AudioContext ? _0x367b4e['ctx'] = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x367b4e['ctx'] = new webkitAudioContext() : _0x367b4e['usingWebAudio'] = !0x1;
                } catch (_0x6ffa25) {
                    _0x367b4e['usingWebAudio'] = !0x1;
                }
                _0x367b4e['ctx'] || (_0x367b4e['usingWebAudio'] = !0x1);
                var _0x50a6a2 = /iP(hone|od|ad)/ ['test'](_0x367b4e['_navigator'] && _0x367b4e['_navigator']['platform']),
                    _0x138a87 = _0x367b4e['_navigator'] && _0x367b4e['_navigator']['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/),
                    _0x138a87 = _0x138a87 ? parseInt(_0x138a87[0x1], 0xa) : null;
                if (_0x50a6a2 && (_0x138a87 && 0x9 > _0x138a87) && (_0x50a6a2 = /safari/ ['test'](_0x367b4e['_navigator'] && _0x367b4e['_navigator']['userAgent']['toLowerCase']()), _0x367b4e['_navigator'] && _0x367b4e['_navigator']['standalone'] && !_0x50a6a2 || _0x367b4e['_navigator'] && !_0x367b4e['_navigator']['standalone'] && !_0x50a6a2)) _0x367b4e['usingWebAudio'] = !0x1;
                _0x367b4e['usingWebAudio'] && (_0x367b4e['masterGain'] = 'undefined' === typeof _0x367b4e['ctx']['createGain'] ? _0x367b4e['ctx']['createGainNode']() : _0x367b4e['ctx']['createGain'](), _0x367b4e['masterGain']['gain']['setValueAtTime'](_0x367b4e['_muted'] ? 0x0 : 0x1, _0x367b4e['ctx']['currentTime']), _0x367b4e['masterGain']['connect'](_0x367b4e['ctx']['destination']));
                _0x367b4e['_setup']();
            }
        };
    'function' === typeof define && define['amd'] && define([], function() {
        return {
            'Howler': _0x367b4e,
            'Howl': _0xd628e6
        };
    });
    'undefined' !== typeof exports && (exports['Howler'] = _0x367b4e, exports['Howl'] = _0xd628e6);
    'undefined' !== typeof window ? (window['HowlerGlobal'] = _0x113a72, window['Howler'] = _0x367b4e, window['Howl'] = _0xd628e6, window['Sound'] = _0x21075d) : 'undefined' !== typeof global && (global['HowlerGlobal'] = _0x113a72, global['Howler'] = _0x367b4e, global['Howl'] = _0xd628e6, global['Sound'] = _0x21075d);
}());
(function() {
    HowlerGlobal['prototype']['_pos'] = [0x0, 0x0, 0x0];
    HowlerGlobal['prototype']['_orientation'] = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0];
    HowlerGlobal['prototype']['stereo'] = function(_0x162f43) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        for (var _0xf3ff43 = this['_howls']['length'] - 0x1; 0x0 <= _0xf3ff43; _0xf3ff43--) this['_howls'][_0xf3ff43]['stereo'](_0x162f43);
        return this;
    };
    HowlerGlobal['prototype']['pos'] = function(_0x36cc3e, _0x3ac1dc, _0x475a2f) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        _0x3ac1dc = 'number' !== typeof _0x3ac1dc ? this['_pos'][0x1] : _0x3ac1dc;
        _0x475a2f = 'number' !== typeof _0x475a2f ? this['_pos'][0x2] : _0x475a2f;
        if ('number' === typeof _0x36cc3e) this['_pos'] = [_0x36cc3e, _0x3ac1dc, _0x475a2f], 'undefined' !== typeof this['ctx']['listener']['positionX'] ? (this['ctx']['listener']['positionX']['setTargetAtTime'](this['_pos'][0x0], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionY']['setTargetAtTime'](this['_pos'][0x1], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionZ']['setTargetAtTime'](this['_pos'][0x2], Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setPosition'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2]);
        else return this['_pos'];
        return this;
    };
    HowlerGlobal['prototype']['orientation'] = function(_0x17e7ab, _0x1764fc, _0xa302d3, _0x493353, _0x41ff41, _0x2ac636) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        var _0x4ca44f = this['_orientation'];
        _0x1764fc = 'number' !== typeof _0x1764fc ? _0x4ca44f[0x1] : _0x1764fc;
        _0xa302d3 = 'number' !== typeof _0xa302d3 ? _0x4ca44f[0x2] : _0xa302d3;
        _0x493353 = 'number' !== typeof _0x493353 ? _0x4ca44f[0x3] : _0x493353;
        _0x41ff41 = 'number' !== typeof _0x41ff41 ? _0x4ca44f[0x4] : _0x41ff41;
        _0x2ac636 = 'number' !== typeof _0x2ac636 ? _0x4ca44f[0x5] : _0x2ac636;
        if ('number' === typeof _0x17e7ab) this['_orientation'] = [_0x17e7ab, _0x1764fc, _0xa302d3, _0x493353, _0x41ff41, _0x2ac636], 'undefined' !== typeof this['ctx']['listener']['forwardX'] ? (this['ctx']['listener']['forwardX']['setTargetAtTime'](_0x17e7ab, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardY']['setTargetAtTime'](_0x1764fc, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardZ']['setTargetAtTime'](_0xa302d3, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upX']['setTargetAtTime'](_0x17e7ab, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upY']['setTargetAtTime'](_0x1764fc, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upZ']['setTargetAtTime'](_0xa302d3, Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setOrientation'](_0x17e7ab, _0x1764fc, _0xa302d3, _0x493353, _0x41ff41, _0x2ac636);
        else return _0x4ca44f;
        return this;
    };
    var _0x4be5af = Howl['prototype']['init'];
    Howl['prototype']['init'] = function(_0x35a2c6) {
        this['_orientation'] = _0x35a2c6['orientation'] || [0x1, 0x0, 0x0];
        this['_stereo'] = _0x35a2c6['stereo'] || null;
        this['_pos'] = _0x35a2c6['pos'] || null;
        this['_pannerAttr'] = {
            'coneInnerAngle': 'undefined' !== typeof _0x35a2c6['coneInnerAngle'] ? _0x35a2c6['coneInnerAngle'] : 0x168,
            'coneOuterAngle': 'undefined' !== typeof _0x35a2c6['coneOuterAngle'] ? _0x35a2c6['coneOuterAngle'] : 0x168,
            'coneOuterGain': 'undefined' !== typeof _0x35a2c6['coneOuterGain'] ? _0x35a2c6['coneOuterGain'] : 0x0,
            'distanceModel': 'undefined' !== typeof _0x35a2c6['distanceModel'] ? _0x35a2c6['distanceModel'] : 'inverse',
            'maxDistance': 'undefined' !== typeof _0x35a2c6['maxDistance'] ? _0x35a2c6['maxDistance'] : 0x2710,
            'panningModel': 'undefined' !== typeof _0x35a2c6['panningModel'] ? _0x35a2c6['panningModel'] : 'HRTF',
            'refDistance': 'undefined' !== typeof _0x35a2c6['refDistance'] ? _0x35a2c6['refDistance'] : 0x1,
            'rolloffFactor': 'undefined' !== typeof _0x35a2c6['rolloffFactor'] ? _0x35a2c6['rolloffFactor'] : 0x1
        };
        this['_onstereo'] = _0x35a2c6['onstereo'] ? [{
            'fn': _0x35a2c6['onstereo']
        }] : [];
        this['_onpos'] = _0x35a2c6['onpos'] ? [{
            'fn': _0x35a2c6['onpos']
        }] : [];
        this['_onorientation'] = _0x35a2c6['onorientation'] ? [{
            'fn': _0x35a2c6['onorientation']
        }] : [];
        return _0x4be5af['call'](this, _0x35a2c6);
    };
    Howl['prototype']['stereo'] = function(_0x37ca79, _0x22bec2) {
        var _0x3e46d2 = this;
        if (!_0x3e46d2['_webAudio']) return _0x3e46d2;
        if ('loaded' !== _0x3e46d2['_state']) return _0x3e46d2['_queue']['push']({
            'event': 'stereo',
            'action': function() {
                _0x3e46d2['stereo'](_0x37ca79, _0x22bec2);
            }
        }), _0x3e46d2;
        var _0x5a38cb = 'undefined' === typeof Howler['ctx']['createStereoPanner'] ? 'spatial' : 'stereo';
        if ('undefined' === typeof _0x22bec2)
            if ('number' === typeof _0x37ca79) _0x3e46d2['_stereo'] = _0x37ca79, _0x3e46d2['_pos'] = [_0x37ca79, 0x0, 0x0];
            else return _0x3e46d2['_stereo'];
        for (var _0x4828ba = _0x3e46d2['_getSoundIds'](_0x22bec2), _0x51cf15 = 0x0; _0x51cf15 < _0x4828ba['length']; _0x51cf15++) {
            var _0x522e83 = _0x3e46d2['_soundById'](_0x4828ba[_0x51cf15]);
            if (_0x522e83)
                if ('number' === typeof _0x37ca79) _0x522e83['_stereo'] = _0x37ca79, _0x522e83['_pos'] = [_0x37ca79, 0x0, 0x0], _0x522e83['_node'] && (_0x522e83['_pannerAttr']['panningModel'] = 'equalpower', (!_0x522e83['_panner'] || !_0x522e83['_panner']['pan']) && _0x17bbf4(_0x522e83, _0x5a38cb), 'spatial' === _0x5a38cb ? 'undefined' !== typeof _0x522e83['_panner']['positionX'] ? (_0x522e83['_panner']['positionX']['setValueAtTime'](_0x37ca79, Howler['ctx']['currentTime']), _0x522e83['_panner']['positionY']['setValueAtTime'](0x0, Howler['ctx']['currentTime']), _0x522e83['_panner']['positionZ']['setValueAtTime'](0x0, Howler['ctx']['currentTime'])) : _0x522e83['_panner']['setPosition'](_0x37ca79, 0x0, 0x0) : _0x522e83['_panner']['pan']['setValueAtTime'](_0x37ca79, Howler['ctx']['currentTime'])), _0x3e46d2['_emit']('stereo', _0x522e83['_id']);
                else return _0x522e83['_stereo'];
        }
        return _0x3e46d2;
    };
    Howl['prototype']['pos'] = function(_0x325359, _0x5f286e, _0x3c8c72, _0x5bbfb1) {
        var _0x440126 = this;
        if (!_0x440126['_webAudio']) return _0x440126;
        if ('loaded' !== _0x440126['_state']) return _0x440126['_queue']['push']({
            'event': 'pos',
            'action': function() {
                _0x440126['pos'](_0x325359, _0x5f286e, _0x3c8c72, _0x5bbfb1);
            }
        }), _0x440126;
        _0x5f286e = 'number' !== typeof _0x5f286e ? 0x0 : _0x5f286e;
        _0x3c8c72 = 'number' !== typeof _0x3c8c72 ? -0.5 : _0x3c8c72;
        if ('undefined' === typeof _0x5bbfb1)
            if ('number' === typeof _0x325359) _0x440126['_pos'] = [_0x325359, _0x5f286e, _0x3c8c72];
            else return _0x440126['_pos'];
        for (var _0x12f4f5 = _0x440126['_getSoundIds'](_0x5bbfb1), _0x162401 = 0x0; _0x162401 < _0x12f4f5['length']; _0x162401++) {
            var _0x370507 = _0x440126['_soundById'](_0x12f4f5[_0x162401]);
            if (_0x370507)
                if ('number' === typeof _0x325359) _0x370507['_pos'] = [_0x325359, _0x5f286e, _0x3c8c72], _0x370507['_node'] && ((!_0x370507['_panner'] || _0x370507['_panner']['pan']) && _0x17bbf4(_0x370507, 'spatial'), 'undefined' !== typeof _0x370507['_panner']['positionX'] ? (_0x370507['_panner']['positionX']['setValueAtTime'](_0x325359, Howler['ctx']['currentTime']), _0x370507['_panner']['positionY']['setValueAtTime'](_0x5f286e, Howler['ctx']['currentTime']), _0x370507['_panner']['positionZ']['setValueAtTime'](_0x3c8c72, Howler['ctx']['currentTime'])) : _0x370507['_panner']['setPosition'](_0x325359, _0x5f286e, _0x3c8c72)), _0x440126['_emit']('pos', _0x370507['_id']);
                else return _0x370507['_pos'];
        }
        return _0x440126;
    };
    Howl['prototype']['orientation'] = function(_0x4c5d5d, _0x38488e, _0x521cbc, _0x50d4ce) {
        var _0x56ddc6 = this;
        if (!_0x56ddc6['_webAudio']) return _0x56ddc6;
        if ('loaded' !== _0x56ddc6['_state']) return _0x56ddc6['_queue']['push']({
            'event': 'orientation',
            'action': function() {
                _0x56ddc6['orientation'](_0x4c5d5d, _0x38488e, _0x521cbc, _0x50d4ce);
            }
        }), _0x56ddc6;
        _0x38488e = 'number' !== typeof _0x38488e ? _0x56ddc6['_orientation'][0x1] : _0x38488e;
        _0x521cbc = 'number' !== typeof _0x521cbc ? _0x56ddc6['_orientation'][0x2] : _0x521cbc;
        if ('undefined' === typeof _0x50d4ce)
            if ('number' === typeof _0x4c5d5d) _0x56ddc6['_orientation'] = [_0x4c5d5d, _0x38488e, _0x521cbc];
            else return _0x56ddc6['_orientation'];
        for (var _0x2e3d34 = _0x56ddc6['_getSoundIds'](_0x50d4ce), _0x3281ea = 0x0; _0x3281ea < _0x2e3d34['length']; _0x3281ea++) {
            var _0x488cad = _0x56ddc6['_soundById'](_0x2e3d34[_0x3281ea]);
            if (_0x488cad)
                if ('number' === typeof _0x4c5d5d) _0x488cad['_orientation'] = [_0x4c5d5d, _0x38488e, _0x521cbc], _0x488cad['_node'] && (_0x488cad['_panner'] || (_0x488cad['_pos'] || (_0x488cad['_pos'] = _0x56ddc6['_pos'] || [0x0, 0x0, -0.5]), _0x17bbf4(_0x488cad, 'spatial')), 'undefined' !== typeof _0x488cad['_panner']['orientationX'] ? (_0x488cad['_panner']['orientationX']['setValueAtTime'](_0x4c5d5d, Howler['ctx']['currentTime']), _0x488cad['_panner']['orientationY']['setValueAtTime'](_0x38488e, Howler['ctx']['currentTime']), _0x488cad['_panner']['orientationZ']['setValueAtTime'](_0x521cbc, Howler['ctx']['currentTime'])) : _0x488cad['_panner']['setOrientation'](_0x4c5d5d, _0x38488e, _0x521cbc)), _0x56ddc6['_emit']('orientation', _0x488cad['_id']);
                else return _0x488cad['_orientation'];
        }
        return _0x56ddc6;
    };
    Howl['prototype']['pannerAttr'] = function() {
        var _0x231fc7 = arguments,
            _0x1c7c1e, _0x21aa2b;
        if (!this['_webAudio']) return this;
        if (0x0 === _0x231fc7['length']) return this['_pannerAttr'];
        if (0x1 === _0x231fc7['length'])
            if ('object' === typeof _0x231fc7[0x0]) _0x1c7c1e = _0x231fc7[0x0], 'undefined' === typeof _0x21aa2b && (_0x1c7c1e['pannerAttr'] || (_0x1c7c1e['pannerAttr'] = {
                'coneInnerAngle': _0x1c7c1e['coneInnerAngle'],
                'coneOuterAngle': _0x1c7c1e['coneOuterAngle'],
                'coneOuterGain': _0x1c7c1e['coneOuterGain'],
                'distanceModel': _0x1c7c1e['distanceModel'],
                'maxDistance': _0x1c7c1e['maxDistance'],
                'refDistance': _0x1c7c1e['refDistance'],
                'rolloffFactor': _0x1c7c1e['rolloffFactor'],
                'panningModel': _0x1c7c1e['panningModel']
            }), this['_pannerAttr'] = {
                'coneInnerAngle': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['coneInnerAngle'] ? _0x1c7c1e['pannerAttr']['coneInnerAngle'] : this['_coneInnerAngle'],
                'coneOuterAngle': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['coneOuterAngle'] ? _0x1c7c1e['pannerAttr']['coneOuterAngle'] : this['_coneOuterAngle'],
                'coneOuterGain': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['coneOuterGain'] ? _0x1c7c1e['pannerAttr']['coneOuterGain'] : this['_coneOuterGain'],
                'distanceModel': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['distanceModel'] ? _0x1c7c1e['pannerAttr']['distanceModel'] : this['_distanceModel'],
                'maxDistance': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['maxDistance'] ? _0x1c7c1e['pannerAttr']['maxDistance'] : this['_maxDistance'],
                'refDistance': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['refDistance'] ? _0x1c7c1e['pannerAttr']['refDistance'] : this['_refDistance'],
                'rolloffFactor': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['rolloffFactor'] ? _0x1c7c1e['pannerAttr']['rolloffFactor'] : this['_rolloffFactor'],
                'panningModel': 'undefined' !== typeof _0x1c7c1e['pannerAttr']['panningModel'] ? _0x1c7c1e['pannerAttr']['panningModel'] : this['_panningModel']
            });
            else return (_0x231fc7 = this['_soundById'](parseInt(_0x231fc7[0x0], 0xa))) ? _0x231fc7['_pannerAttr'] : this['_pannerAttr'];
        else 0x2 === _0x231fc7['length'] && (_0x1c7c1e = _0x231fc7[0x0], _0x21aa2b = parseInt(_0x231fc7[0x1], 0xa));
        _0x21aa2b = this['_getSoundIds'](_0x21aa2b);
        for (var _0x24ff1d = 0x0; _0x24ff1d < _0x21aa2b['length']; _0x24ff1d++)
            if (_0x231fc7 = this['_soundById'](_0x21aa2b[_0x24ff1d])) {
                var _0x1a5a8b = _0x231fc7['_pannerAttr'],
                    _0x1a5a8b = {
                        'coneInnerAngle': 'undefined' !== typeof _0x1c7c1e['coneInnerAngle'] ? _0x1c7c1e['coneInnerAngle'] : _0x1a5a8b['coneInnerAngle'],
                        'coneOuterAngle': 'undefined' !== typeof _0x1c7c1e['coneOuterAngle'] ? _0x1c7c1e['coneOuterAngle'] : _0x1a5a8b['coneOuterAngle'],
                        'coneOuterGain': 'undefined' !== typeof _0x1c7c1e['coneOuterGain'] ? _0x1c7c1e['coneOuterGain'] : _0x1a5a8b['coneOuterGain'],
                        'distanceModel': 'undefined' !== typeof _0x1c7c1e['distanceModel'] ? _0x1c7c1e['distanceModel'] : _0x1a5a8b['distanceModel'],
                        'maxDistance': 'undefined' !== typeof _0x1c7c1e['maxDistance'] ? _0x1c7c1e['maxDistance'] : _0x1a5a8b['maxDistance'],
                        'refDistance': 'undefined' !== typeof _0x1c7c1e['refDistance'] ? _0x1c7c1e['refDistance'] : _0x1a5a8b['refDistance'],
                        'rolloffFactor': 'undefined' !== typeof _0x1c7c1e['rolloffFactor'] ? _0x1c7c1e['rolloffFactor'] : _0x1a5a8b['rolloffFactor'],
                        'panningModel': 'undefined' !== typeof _0x1c7c1e['panningModel'] ? _0x1c7c1e['panningModel'] : _0x1a5a8b['panningModel']
                    },
                    _0x3df1ee = _0x231fc7['_panner'];
                _0x3df1ee ? (_0x3df1ee['coneInnerAngle'] = _0x1a5a8b['coneInnerAngle'], _0x3df1ee['coneOuterAngle'] = _0x1a5a8b['coneOuterAngle'], _0x3df1ee['coneOuterGain'] = _0x1a5a8b['coneOuterGain'], _0x3df1ee['distanceModel'] = _0x1a5a8b['distanceModel'], _0x3df1ee['maxDistance'] = _0x1a5a8b['maxDistance'], _0x3df1ee['refDistance'] = _0x1a5a8b['refDistance'], _0x3df1ee['rolloffFactor'] = _0x1a5a8b['rolloffFactor'], _0x3df1ee['panningModel'] = _0x1a5a8b['panningModel']) : (_0x231fc7['_pos'] || (_0x231fc7['_pos'] = this['_pos'] || [0x0, 0x0, -0.5]), _0x17bbf4(_0x231fc7, 'spatial'));
            }
        return this;
    };
    var _0x4d9e4e = Sound['prototype']['init'];
    Sound['prototype']['init'] = function() {
        var _0x3d53a1 = this['_parent'];
        this['_orientation'] = _0x3d53a1['_orientation'];
        this['_stereo'] = _0x3d53a1['_stereo'];
        this['_pos'] = _0x3d53a1['_pos'];
        this['_pannerAttr'] = _0x3d53a1['_pannerAttr'];
        _0x4d9e4e['call'](this);
        this['_stereo'] ? _0x3d53a1['stereo'](this['_stereo']) : this['_pos'] && _0x3d53a1['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']);
    };
    var _0x5c1f96 = Sound['prototype']['reset'];
    Sound['prototype']['reset'] = function() {
        var _0x9c9bb = this['_parent'];
        this['_orientation'] = _0x9c9bb['_orientation'];
        this['_stereo'] = _0x9c9bb['_stereo'];
        this['_pos'] = _0x9c9bb['_pos'];
        this['_pannerAttr'] = _0x9c9bb['_pannerAttr'];
        this['_stereo'] ? _0x9c9bb['stereo'](this['_stereo']) : this['_pos'] ? _0x9c9bb['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']) : this['_panner'] && (this['_panner']['disconnect'](0x0), this['_panner'] = void 0x0, _0x9c9bb['_refreshBuffer'](this));
        return _0x5c1f96['call'](this);
    };
    var _0x17bbf4 = function(_0x14a67c, _0x36c41c) {
        'spatial' === (_0x36c41c || 'spatial') ? (_0x14a67c['_panner'] = Howler['ctx']['createPanner'](), _0x14a67c['_panner']['coneInnerAngle'] = _0x14a67c['_pannerAttr']['coneInnerAngle'], _0x14a67c['_panner']['coneOuterAngle'] = _0x14a67c['_pannerAttr']['coneOuterAngle'], _0x14a67c['_panner']['coneOuterGain'] = _0x14a67c['_pannerAttr']['coneOuterGain'], _0x14a67c['_panner']['distanceModel'] = _0x14a67c['_pannerAttr']['distanceModel'], _0x14a67c['_panner']['maxDistance'] = _0x14a67c['_pannerAttr']['maxDistance'], _0x14a67c['_panner']['refDistance'] = _0x14a67c['_pannerAttr']['refDistance'], _0x14a67c['_panner']['rolloffFactor'] = _0x14a67c['_pannerAttr']['rolloffFactor'], _0x14a67c['_panner']['panningModel'] = _0x14a67c['_pannerAttr']['panningModel'], 'undefined' !== typeof _0x14a67c['_panner']['positionX'] ? (_0x14a67c['_panner']['positionX']['setValueAtTime'](_0x14a67c['_pos'][0x0], Howler['ctx']['currentTime']), _0x14a67c['_panner']['positionY']['setValueAtTime'](_0x14a67c['_pos'][0x1], Howler['ctx']['currentTime']), _0x14a67c['_panner']['positionZ']['setValueAtTime'](_0x14a67c['_pos'][0x2], Howler['ctx']['currentTime'])) : _0x14a67c['_panner']['setPosition'](_0x14a67c['_pos'][0x0], _0x14a67c['_pos'][0x1], _0x14a67c['_pos'][0x2]), 'undefined' !== typeof _0x14a67c['_panner']['orientationX'] ? (_0x14a67c['_panner']['orientationX']['setValueAtTime'](_0x14a67c['_orientation'][0x0], Howler['ctx']['currentTime']), _0x14a67c['_panner']['orientationY']['setValueAtTime'](_0x14a67c['_orientation'][0x1], Howler['ctx']['currentTime']), _0x14a67c['_panner']['orientationZ']['setValueAtTime'](_0x14a67c['_orientation'][0x2], Howler['ctx']['currentTime'])) : _0x14a67c['_panner']['setOrientation'](_0x14a67c['_orientation'][0x0], _0x14a67c['_orientation'][0x1], _0x14a67c['_orientation'][0x2])) : (_0x14a67c['_panner'] = Howler['ctx']['createStereoPanner'](), _0x14a67c['_panner']['pan']['setValueAtTime'](_0x14a67c['_stereo'], Howler['ctx']['currentTime']));
        _0x14a67c['_panner']['connect'](_0x14a67c['_node']);
        _0x14a67c['_paused'] || _0x14a67c['_parent']['pause'](_0x14a67c['_id'], !0x0)['play'](_0x14a67c['_id'], !0x0);
    };
}());
! function(_0x45631b, _0x771f78) {
    'object' == typeof exports && 'undefined' != typeof module ? _0x771f78() : 'function' == typeof define && define['amd'] ? define(_0x771f78) : _0x771f78();
}(0x0, function() {
    function _0x566eb9(_0x10f935) {
        var _0x2b381b = this['constructor'];
        return this['then'](function(_0xa398) {
            return _0x2b381b['resolve'](_0x10f935())['then'](function() {
                return _0xa398;
            });
        }, function(_0x2ddc15) {
            return _0x2b381b['resolve'](_0x10f935())['then'](function() {
                return _0x2b381b['reject'](_0x2ddc15);
            });
        });
    }

    function _0x393dfc() {}

    function _0x195d4a(_0x565dac) {
        if (!(this instanceof _0x195d4a)) throw new TypeError('Promises must be constructed via new');
        if ('function' != typeof _0x565dac) throw new TypeError('not a function');
        this['_state'] = 0x0;
        this['_handled'] = !0x1;
        this['_value'] = void 0x0;
        this['_deferreds'] = [];
        _0x5697cb(_0x565dac, this);
    }

    function _0x516378(_0x1ab872, _0x15d200) {
        for (; 0x3 === _0x1ab872['_state'];) _0x1ab872 = _0x1ab872['_value'];
        0x0 !== _0x1ab872['_state'] ? (_0x1ab872['_handled'] = !0x0, _0x195d4a['_immediateFn'](function() {
            var _0xd8d791 = 0x1 === _0x1ab872['_state'] ? _0x15d200['onFulfilled'] : _0x15d200['onRejected'];
            if (null !== _0xd8d791) {
                var _0x27de05;
                try {
                    _0x27de05 = _0xd8d791(_0x1ab872['_value']);
                } catch (_0x44da4b) {
                    return void _0x52cd58(_0x15d200['promise'], _0x44da4b);
                }
                _0x5c7938(_0x15d200['promise'], _0x27de05);
            } else(0x1 === _0x1ab872['_state'] ? _0x5c7938 : _0x52cd58)(_0x15d200['promise'], _0x1ab872['_value']);
        })) : _0x1ab872['_deferreds']['push'](_0x15d200);
    }

    function _0x5c7938(_0x99c6df, _0x20a301) {
        try {
            if (_0x20a301 === _0x99c6df) throw new TypeError('A promise cannot be resolved with itself.');
            if (_0x20a301 && ('object' == typeof _0x20a301 || 'function' == typeof _0x20a301)) {
                var _0x9594db = _0x20a301['then'];
                if (_0x20a301 instanceof _0x195d4a) return _0x99c6df['_state'] = 0x3, _0x99c6df['_value'] = _0x20a301, void _0x275fcc(_0x99c6df);
                if ('function' == typeof _0x9594db) return void _0x5697cb(function() {
                    _0x9594db['apply'](_0x20a301, arguments);
                }, _0x99c6df);
            }
            _0x99c6df['_state'] = 0x1;
            _0x99c6df['_value'] = _0x20a301;
            _0x275fcc(_0x99c6df);
        } catch (_0xe3c2d5) {
            _0x52cd58(_0x99c6df, _0xe3c2d5);
        }
    }

    function _0x52cd58(_0x76a09d, _0x5d720d) {
        _0x76a09d['_state'] = 0x2;
        _0x76a09d['_value'] = _0x5d720d;
        _0x275fcc(_0x76a09d);
    }

    function _0x275fcc(_0x31c64e) {
        0x2 === _0x31c64e['_state'] && 0x0 === _0x31c64e['_deferreds']['length'] && _0x195d4a['_immediateFn'](function() {
            _0x31c64e['_handled'] || _0x195d4a['_unhandledRejectionFn'](_0x31c64e['_value']);
        });
        for (var _0x430561 = 0x0, _0x1c475a = _0x31c64e['_deferreds']['length']; _0x1c475a > _0x430561; _0x430561++) _0x516378(_0x31c64e, _0x31c64e['_deferreds'][_0x430561]);
        _0x31c64e['_deferreds'] = null;
    }

    function _0x5697cb(_0x11f83d, _0x2d09fd) {
        var _0x331656 = !0x1;
        try {
            _0x11f83d(function(_0x2b2a02) {
                _0x331656 || (_0x331656 = !0x0, _0x5c7938(_0x2d09fd, _0x2b2a02));
            }, function(_0x4e5163) {
                _0x331656 || (_0x331656 = !0x0, _0x52cd58(_0x2d09fd, _0x4e5163));
            });
        } catch (_0x2acf06) {
            _0x331656 || (_0x331656 = !0x0, _0x52cd58(_0x2d09fd, _0x2acf06));
        }
    }
    var _0x355041 = setTimeout;
    _0x195d4a['prototype']['catch'] = function(_0x4ebb38) {
        return this['then'](null, _0x4ebb38);
    };
    _0x195d4a['prototype']['then'] = function(_0x251b17, _0x2c1963) {
        var _0x3e1805 = new this['constructor'](_0x393dfc);
        return _0x516378(this, new function(_0x4973a4, _0x2d4450, _0x307c0b) {
            this['onFulfilled'] = 'function' == typeof _0x4973a4 ? _0x4973a4 : null;
            this['onRejected'] = 'function' == typeof _0x2d4450 ? _0x2d4450 : null;
            this['promise'] = _0x307c0b;
        }(_0x251b17, _0x2c1963, _0x3e1805)), _0x3e1805;
    };
    _0x195d4a['prototype']['finally'] = _0x566eb9;
    _0x195d4a['all'] = function(_0x1d718f) {
        return new _0x195d4a(function(_0x355804, _0x3a8643) {
            function _0x42075c(_0x405efc, _0x550f20) {
                try {
                    if (_0x550f20 && ('object' == typeof _0x550f20 || 'function' == typeof _0x550f20)) {
                        var _0x25a61c = _0x550f20['then'];
                        if ('function' == typeof _0x25a61c) return void _0x25a61c['call'](_0x550f20, function(_0xe6fab7) {
                            _0x42075c(_0x405efc, _0xe6fab7);
                        }, _0x3a8643);
                    }
                    _0x3a5000[_0x405efc] = _0x550f20;
                    0x0 == --_0x16cf03 && _0x355804(_0x3a5000);
                } catch (_0x290153) {
                    _0x3a8643(_0x290153);
                }
            }
            if (!_0x1d718f || 'undefined' == typeof _0x1d718f['length']) throw new TypeError('Promise.all accepts an array');
            var _0x3a5000 = Array['prototype']['slice']['call'](_0x1d718f);
            if (0x0 === _0x3a5000['length']) return _0x355804([]);
            for (var _0x16cf03 = _0x3a5000['length'], _0x261a68 = 0x0; _0x3a5000['length'] > _0x261a68; _0x261a68++) _0x42075c(_0x261a68, _0x3a5000[_0x261a68]);
        });
    };
    _0x195d4a['resolve'] = function(_0x2a059a) {
        return _0x2a059a && 'object' == typeof _0x2a059a && _0x2a059a['constructor'] === _0x195d4a ? _0x2a059a : new _0x195d4a(function(_0x30ca54) {
            _0x30ca54(_0x2a059a);
        });
    };
    _0x195d4a['reject'] = function(_0x3dfba7) {
        return new _0x195d4a(function(_0x4a11a6, _0xe1f28f) {
            _0xe1f28f(_0x3dfba7);
        });
    };
    _0x195d4a['race'] = function(_0x3040d5) {
        return new _0x195d4a(function(_0x4a5f2f, _0x417db2) {
            for (var _0x37e70d = 0x0, _0x71e0b3 = _0x3040d5['length']; _0x71e0b3 > _0x37e70d; _0x37e70d++) _0x3040d5[_0x37e70d]['then'](_0x4a5f2f, _0x417db2);
        });
    };
    _0x195d4a['_immediateFn'] = 'function' == typeof setImmediate && function(_0xb8c28e) {
        setImmediate(_0xb8c28e);
    } || function(_0x722a9f) {
        _0x355041(_0x722a9f, 0x0);
    };
    _0x195d4a['_unhandledRejectionFn'] = function(_0x49df26) {
        void 0x0 !== console && console && console['warn']('Possible Unhandled Promise Rejection:', _0x49df26);
    };
    var _0x2d9a6c = function() {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if ('undefined' != typeof global) return global;
        throw Error('unable to locate global object');
    }();
    'Promise' in _0x2d9a6c ? _0x2d9a6c['Promise']['prototype']['finally'] || (_0x2d9a6c['Promise']['prototype']['finally'] = _0x566eb9) : _0x2d9a6c['Promise'] = _0x195d4a;
});
(function() {
    function _0x4ae6bd(_0x43b422, _0x2fc828) {
        document['addEventListener'] ? _0x43b422['addEventListener']('scroll', _0x2fc828, !0x1) : _0x43b422['attachEvent']('scroll', _0x2fc828);
    }

    function _0x4db523(_0x22b777) {
        this['a'] = document['createElement']('div');
        this['a']['setAttribute']('aria-hidden', 'true');
        this['a']['appendChild'](document['createTextNode'](_0x22b777));
        this['b'] = document['createElement']('span');
        this['c'] = document['createElement']('span');
        this['h'] = document['createElement']('span');
        this['f'] = document['createElement']('span');
        this['g'] = -0x1;
        this['b']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
        this['c']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
        this['f']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
        this['h']['style']['cssText'] = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;';
        this['b']['appendChild'](this['h']);
        this['c']['appendChild'](this['f']);
        this['a']['appendChild'](this['b']);
        this['a']['appendChild'](this['c']);
    }

    function _0x50ad68(_0x13d3b9, _0xec4581) {
        _0x13d3b9['a']['style']['cssText'] = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0xec4581 + ';';
    }

    function _0x319dd9(_0x413d2e) {
        var _0x3c88a5 = _0x413d2e['a']['offsetWidth'],
            _0x3ab9a2 = _0x3c88a5 + 0x64;
        _0x413d2e['f']['style']['width'] = _0x3ab9a2 + 'px';
        _0x413d2e['c']['scrollLeft'] = _0x3ab9a2;
        _0x413d2e['b']['scrollLeft'] = _0x413d2e['b']['scrollWidth'] + 0x64;
        return _0x413d2e['g'] !== _0x3c88a5 ? (_0x413d2e['g'] = _0x3c88a5, !0x0) : !0x1;
    }

    function _0x319c9f(_0x412c1, _0x18a25b) {
        function _0x48a830() {
            var _0x5b5086 = _0x2920d4;
            _0x319dd9(_0x5b5086) && _0x5b5086['a']['parentNode'] && _0x18a25b(_0x5b5086['g']);
        }
        var _0x2920d4 = _0x412c1;
        _0x4ae6bd(_0x412c1['b'], _0x48a830);
        _0x4ae6bd(_0x412c1['c'], _0x48a830);
        _0x319dd9(_0x412c1);
    }

    function _0x1c6950(_0x3c2018, _0x15ba9b) {
        var _0x54bee9 = _0x15ba9b || {};
        this['family'] = _0x3c2018;
        this['style'] = _0x54bee9['style'] || 'normal';
        this['weight'] = _0x54bee9['weight'] || 'normal';
        this['stretch'] = _0x54bee9['stretch'] || 'normal';
    }

    function _0x3d329c() {
        null === _0x2ce93b && (_0x2ce93b = !!document['fonts']);
        return _0x2ce93b;
    }

    function _0x361819() {
        if (null === _0x2d6497) {
            var _0x30d92b = document['createElement']('div');
            try {
                _0x30d92b['style']['font'] = 'condensed 100px sans-serif';
            } catch (_0x30dcd3) {}
            _0x2d6497 = '' !== _0x30d92b['style']['font'];
        }
        return _0x2d6497;
    }

    function _0x146406(_0x53bc2d, _0x4829d9) {
        return [_0x53bc2d['style'], _0x53bc2d['weight'], _0x361819() ? _0x53bc2d['stretch'] : '', '100px', _0x4829d9]['join'](' ');
    }
    var _0x23a717 = null,
        _0x446ac7 = null,
        _0x2d6497 = null,
        _0x2ce93b = null;
    _0x1c6950['prototype']['load'] = function(_0x33ab3a, _0x5bc6ad) {
        var _0x575029 = this,
            _0x2224b3 = _0x33ab3a || 'BESbswy',
            _0x9b85cf = 0x0,
            _0x57dd7d = _0x5bc6ad || 0xbb8,
            _0x10f0e3 = new Date()['getTime']();
        return new Promise(function(_0x3822b8, _0x18c56d) {
            var _0x16c543;
            if (_0x16c543 = _0x3d329c()) null === _0x446ac7 && (_0x3d329c() && /Apple/ ['test'](window['navigator']['vendor']) ? (_0x16c543 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x446ac7 = !!_0x16c543 && 0x25b > parseInt(_0x16c543[0x1], 0xa)) : _0x446ac7 = !0x1), _0x16c543 = !_0x446ac7;
            if (_0x16c543) {
                _0x16c543 = new Promise(function(_0x5f29f9, _0x5cc179) {
                    function _0x56df45() {
                        new Date()['getTime']() - _0x10f0e3 >= _0x57dd7d ? _0x5cc179(Error('' + _0x57dd7d + 'ms timeout exceeded')) : document['fonts']['load'](_0x146406(_0x575029, '\x22' + _0x575029['family'] + '\x22'), _0x2224b3)['then'](function(_0x4eca74) {
                            0x1 <= _0x4eca74['length'] ? _0x5f29f9() : setTimeout(_0x56df45, 0x19);
                        }, _0x5cc179);
                    }
                    _0x56df45();
                });
                var _0x301c92 = new Promise(function(_0x180107, _0x549d01) {
                    _0x9b85cf = setTimeout(function() {
                        _0x549d01(Error('' + _0x57dd7d + 'ms timeout exceeded'));
                    }, _0x57dd7d);
                });
                Promise['race']([_0x301c92, _0x16c543])['then'](function() {
                    clearTimeout(_0x9b85cf);
                    _0x3822b8(_0x575029);
                }, _0x18c56d);
            } else {
                var _0x2b7a78 = function() {
                    function _0x4618af() {
                        var _0x5f124c;
                        if (_0x5f124c = -0x1 != _0x2cf9e5 && -0x1 != _0x4f6737 || -0x1 != _0x2cf9e5 && -0x1 != _0x12120b || -0x1 != _0x4f6737 && -0x1 != _0x12120b)(_0x5f124c = _0x2cf9e5 != _0x4f6737 && _0x2cf9e5 != _0x12120b && _0x4f6737 != _0x12120b) || (null === _0x23a717 && (_0x5f124c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x23a717 = !!_0x5f124c && (0x218 > parseInt(_0x5f124c[0x1], 0xa) || 0x218 === parseInt(_0x5f124c[0x1], 0xa) && 0xb >= parseInt(_0x5f124c[0x2], 0xa))), _0x5f124c = _0x23a717 && (_0x2cf9e5 == _0x739b2b && _0x4f6737 == _0x739b2b && _0x12120b == _0x739b2b || _0x2cf9e5 == _0x24bff0 && _0x4f6737 == _0x24bff0 && _0x12120b == _0x24bff0 || _0x2cf9e5 == _0x37fae2 && _0x4f6737 == _0x37fae2 && _0x12120b == _0x37fae2)), _0x5f124c = !_0x5f124c;
                        _0x5f124c && (_0x121aea['parentNode'] && _0x121aea['parentNode']['removeChild'](_0x121aea), clearTimeout(_0x9b85cf), _0x3822b8(_0x575029));
                    }

                    function _0x2b44fe() {
                        if (new Date()['getTime']() - _0x10f0e3 >= _0x57dd7d) _0x121aea['parentNode'] && _0x121aea['parentNode']['removeChild'](_0x121aea), _0x18c56d(Error('' + _0x57dd7d + 'ms timeout exceeded'));
                        else {
                            var _0x34f878 = document['hidden'];
                            if (!0x0 === _0x34f878 || void 0x0 === _0x34f878) _0x2cf9e5 = _0xd584ba['a']['offsetWidth'], _0x4f6737 = _0x46513e['a']['offsetWidth'], _0x12120b = _0x5ab26f['a']['offsetWidth'], _0x4618af();
                            _0x9b85cf = setTimeout(_0x2b44fe, 0x32);
                        }
                    }
                    var _0xd584ba = new _0x4db523(_0x2224b3),
                        _0x46513e = new _0x4db523(_0x2224b3),
                        _0x5ab26f = new _0x4db523(_0x2224b3),
                        _0x2cf9e5 = -0x1,
                        _0x4f6737 = -0x1,
                        _0x12120b = -0x1,
                        _0x739b2b = -0x1,
                        _0x24bff0 = -0x1,
                        _0x37fae2 = -0x1,
                        _0x121aea = document['createElement']('div');
                    _0x121aea['dir'] = 'ltr';
                    _0x50ad68(_0xd584ba, _0x146406(_0x575029, 'sans-serif'));
                    _0x50ad68(_0x46513e, _0x146406(_0x575029, 'serif'));
                    _0x50ad68(_0x5ab26f, _0x146406(_0x575029, 'monospace'));
                    _0x121aea['appendChild'](_0xd584ba['a']);
                    _0x121aea['appendChild'](_0x46513e['a']);
                    _0x121aea['appendChild'](_0x5ab26f['a']);
                    document['body']['appendChild'](_0x121aea);
                    _0x739b2b = _0xd584ba['a']['offsetWidth'];
                    _0x24bff0 = _0x46513e['a']['offsetWidth'];
                    _0x37fae2 = _0x5ab26f['a']['offsetWidth'];
                    _0x2b44fe();
                    _0x319c9f(_0xd584ba, function(_0x1c2aa0) {
                        _0x2cf9e5 = _0x1c2aa0;
                        _0x4618af();
                    });
                    _0x50ad68(_0xd584ba, _0x146406(_0x575029, '\x22' + _0x575029['family'] + '\x22,sans-serif'));
                    _0x319c9f(_0x46513e, function(_0x1f2788) {
                        _0x4f6737 = _0x1f2788;
                        _0x4618af();
                    });
                    _0x50ad68(_0x46513e, _0x146406(_0x575029, '\x22' + _0x575029['family'] + '\x22,serif'));
                    _0x319c9f(_0x5ab26f, function(_0x486e8b) {
                        _0x12120b = _0x486e8b;
                        _0x4618af();
                    });
                    _0x50ad68(_0x5ab26f, _0x146406(_0x575029, '\x22' + _0x575029['family'] + '\x22,monospace'));
                };
                document['body'] ? _0x2b7a78() : document['addEventListener'] ? document['addEventListener']('DOMContentLoaded', function _0x413510() {
                    document['removeEventListener']('DOMContentLoaded', _0x413510);
                    _0x2b7a78();
                }) : document['attachEvent']('onreadystatechange', function _0x4fa1cb() {
                    if ('interactive' == document['readyState'] || 'complete' == document['readyState']) document['detachEvent']('onreadystatechange', _0x4fa1cb), _0x2b7a78();
                });
            }
        });
    };
    'object' === typeof module ? module['exports'] = _0x1c6950 : (window['FontFaceObserver'] = _0x1c6950, window['FontFaceObserver']['prototype']['load'] = _0x1c6950['prototype']['load']);
}());

(function(_0x1a4744) {
    Number['prototype']['map'] = function(_0x50e27d, _0x2a162a, _0x318cc4, _0x1f048d) {
        return _0x318cc4 + (_0x1f048d - _0x318cc4) * ((this - _0x50e27d) / (_0x2a162a - _0x50e27d));
    };
    Number['prototype']['limit'] = function(_0x1fbda9, _0x334c7b) {
        return Math['min'](_0x334c7b, Math['max'](_0x1fbda9, this));
    };
    Number['prototype']['round'] = function(_0x3dfd07) {
        _0x3dfd07 = Math['pow'](0xa, _0x3dfd07 || 0x0);
        return Math['round'](this * _0x3dfd07) / _0x3dfd07;
    };
    Number['prototype']['floor'] = function() {
        return Math['floor'](this);
    };
    Number['prototype']['ceil'] = function() {
        return Math['ceil'](this);
    };
    Number['prototype']['toInt'] = function() {
        return this | 0x0;
    };
    Number['prototype']['toRad'] = function() {
        return this / 0xb4 * Math['PI'];
    };
    Number['prototype']['toDeg'] = function() {
        return 0xb4 * this / Math['PI'];
    };
    Array['prototype']['erase'] = function(_0x4cd343) {
        for (var _0xc76731 = this['length']; _0xc76731--;) this[_0xc76731] === _0x4cd343 && this['splice'](_0xc76731, 0x1);
        return this;
    };
    Array['prototype']['random'] = function() {
        return this[Math['floor'](Math['random']() * this['length'])];
    };
    Function['prototype']['bind'] = Function['prototype']['bind'] || function(_0x464cdf) {
        if ('function' !== typeof this) throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        var _0x3039b6 = Array['prototype']['slice']['call'](arguments, 0x1),
            _0x3bd86f = this,
            _0x424aca = function() {},
            _0xfeb995 = function() {
                return _0x3bd86f['apply'](this instanceof _0x424aca && _0x464cdf ? this : _0x464cdf, _0x3039b6['concat'](Array['prototype']['slice']['call'](arguments)));
            };
        _0x424aca['prototype'] = this['prototype'];
        _0xfeb995['prototype'] = new _0x424aca();
        return _0xfeb995;
    };
    _0x1a4744['ig'] = {
        'game': null,
        'debug': null,
        'version': '2.20',
        'global': _0x1a4744,
        'modules': {},
        'resources': [],
        'ready': !0x1,
        'baked': !0x1,
        'nocache': '',
        'ua': {},
        'prefix': _0x1a4744['ImpactPrefix'] || '',
        'lib': 'lib/',
        '_current': null,
        '_loadQueue': [],
        '_waitForOnload': 0x0,
        '$': function(_0x489c52) {
            return '#' == _0x489c52['charAt'](0x0) ? document['getElementById'](_0x489c52['substr'](0x1)) : document['getElementsByTagName'](_0x489c52);
        },
        '$new': function(_0x4abd01) {
            return document['createElement'](_0x4abd01);
        },
        'copy': function(_0x5a85ee) {
            if (!_0x5a85ee || 'object' != typeof _0x5a85ee || _0x5a85ee instanceof HTMLElement || _0x5a85ee instanceof ig['Class']) return _0x5a85ee;
            if (_0x5a85ee instanceof Array)
                for (var _0x56e2a2 = [], _0x293e4e = 0x0, _0x361b79 = _0x5a85ee['length']; _0x293e4e < _0x361b79; _0x293e4e++) _0x56e2a2[_0x293e4e] = ig['copy'](_0x5a85ee[_0x293e4e]);
            else
                for (_0x293e4e in (_0x56e2a2 = {}, _0x5a85ee)) _0x56e2a2[_0x293e4e] = ig['copy'](_0x5a85ee[_0x293e4e]);
            return _0x56e2a2;
        },
        'merge': function(_0x563721, _0x5a3e21) {
            for (var _0x123879 in _0x5a3e21) {
                var _0x40ab1a = _0x5a3e21[_0x123879];
                if ('object' != typeof _0x40ab1a || _0x40ab1a instanceof HTMLElement || _0x40ab1a instanceof ig['Class'] || null === _0x40ab1a) _0x563721[_0x123879] = _0x40ab1a;
                else {
                    if (!_0x563721[_0x123879] || 'object' != typeof _0x563721[_0x123879]) _0x563721[_0x123879] = _0x40ab1a instanceof Array ? [] : {};
                    ig['merge'](_0x563721[_0x123879], _0x40ab1a);
                }
            }
            return _0x563721;
        },
        'ksort': function(_0x332337) {
            if (!_0x332337 || 'object' != typeof _0x332337) return [];
            var _0xbf0a37 = [],
                _0x434359 = [],
                _0x236f14;
            for (_0x236f14 in _0x332337) _0xbf0a37['push'](_0x236f14);
            _0xbf0a37['sort']();
            for (_0x236f14 = 0x0; _0x236f14 < _0xbf0a37['length']; _0x236f14++) _0x434359['push'](_0x332337[_0xbf0a37[_0x236f14]]);
            return _0x434359;
        },
        'setVendorAttribute': function(_0x53a798, _0x15d09e, _0x1e6d3d) {
            var _0x3a523b = _0x15d09e['charAt'](0x0)['toUpperCase']() + _0x15d09e['substr'](0x1);
            _0x53a798[_0x15d09e] = 'undefined' !== typeof _0x53a798['imageSmoothingEnabled'] ? _0x53a798['ms' + _0x3a523b] = _0x53a798['moz' + _0x3a523b] = _0x53a798['o' + _0x3a523b] = _0x1e6d3d : _0x53a798['ms' + _0x3a523b] = _0x53a798['moz' + _0x3a523b] = _0x53a798['webkit' + _0x3a523b] = _0x53a798['o' + _0x3a523b] = _0x1e6d3d;
        },
        'getVendorAttribute': function(_0x3c2cdf, _0x4aa736) {
            var _0x5b1535 = _0x4aa736['charAt'](0x0)['toUpperCase']() + _0x4aa736['substr'](0x1);
            return 'undefined' !== typeof _0x3c2cdf['imageSmoothingEnabled'] ? _0x3c2cdf[_0x4aa736] || _0x3c2cdf['ms' + _0x5b1535] || _0x3c2cdf['moz' + _0x5b1535] || _0x3c2cdf['o' + _0x5b1535] : _0x3c2cdf[_0x4aa736] || _0x3c2cdf['ms' + _0x5b1535] || _0x3c2cdf['moz' + _0x5b1535] || _0x3c2cdf['webkit' + _0x5b1535] || _0x3c2cdf['o' + _0x5b1535];
        },
        'normalizeVendorAttribute': function(_0x26543d, _0x5a895a) {
            var _0x35e158 = ig['getVendorAttribute'](_0x26543d, _0x5a895a);
            !_0x26543d[_0x5a895a] && _0x35e158 && (_0x26543d[_0x5a895a] = _0x35e158);
        },
        'getImagePixels': function(_0x855066, _0x843313, _0x1ef7ec, _0x5252ca, _0x43687c) {
            var _0xb572fb = ig['$new']('canvas');
            _0xb572fb['width'] = _0x855066['width'];
            _0xb572fb['height'] = _0x855066['height'];
            var _0x49968a = _0xb572fb['getContext']('2d');
            ig['System']['SCALE']['CRISP'](_0xb572fb, _0x49968a);
            var _0x3bff24 = ig['getVendorAttribute'](_0x49968a, 'backingStorePixelRatio') || 0x1;
            ig['normalizeVendorAttribute'](_0x49968a, 'getImageDataHD');
            var _0x1d92dc = _0x855066['width'] / _0x3bff24,
                _0x35421b = _0x855066['height'] / _0x3bff24;
            _0xb572fb['width'] = Math['ceil'](_0x1d92dc);
            _0xb572fb['height'] = Math['ceil'](_0x35421b);
            _0x49968a['drawImage'](_0x855066, 0x0, 0x0, _0x1d92dc, _0x35421b);
            return 0x1 === _0x3bff24 ? _0x49968a['getImageData'](_0x843313, _0x1ef7ec, _0x5252ca, _0x43687c) : _0x49968a['getImageDataHD'](_0x843313, _0x1ef7ec, _0x5252ca, _0x43687c);
        },
        'module': function(_0xe5bdab) {
            if (ig['_current']) throw 'Module \x27' + ig['_current']['name'] + '\x27 defines nothing';
            if (ig['modules'][_0xe5bdab] && ig['modules'][_0xe5bdab]['body']) throw 'Module \x27' + _0xe5bdab + '\x27 is already defined';
            ig['_current'] = {
                'name': _0xe5bdab,
                'requires': [],
                'loaded': !0x1,
                'body': null
            };
            ig['modules'][_0xe5bdab] = ig['_current'];
            ig['_loadQueue']['push'](ig['_current']);
            return ig;
        },
        'requires': function() {
            ig['_current']['requires'] = Array['prototype']['slice']['call'](arguments);
            return ig;
        },
        'defines': function(_0xd4738) {
            ig['_current']['body'] = _0xd4738;
            ig['_current'] = null;
            ig['_initDOMReady']();
        },
        'addResource': function(_0x2570ed) {
            ig['resources']['push'](_0x2570ed);
        },
        'setNocache': function(_0x9ce824) {
            ig['nocache'] = _0x9ce824 ? '?' + Date['now']() : '';
        },
        'log': function() {},
        'assert': function() {},
        'show': function() {},
        'mark': function() {},
        '_loadScript': function(_0xaacf37, _0x92748a) {
            ig['modules'][_0xaacf37] = {
                'name': _0xaacf37,
                'requires': [],
                'loaded': !0x1,
                'body': null
            };
            ig['_waitForOnload']++;
            var _0x560fe0 = ig['prefix'] + ig['lib'] + _0xaacf37['replace'](/\./g, '/') + '.js' + ig['nocache'],
                _0x345819 = ig['$new']('script');
            _0x345819['type'] = 'text/javascript';
            _0x345819['src'] = _0x560fe0;
            _0x345819['onload'] = function() {
                ig['_waitForOnload']--;
                ig['_execModules']();
            };
            _0x345819['onerror'] = function() {
                throw 'Failed to load module ' + _0xaacf37 + ' at ' + _0x560fe0 + ' required from ' + _0x92748a;
            };
            ig['$']('head')[0x0]['appendChild'](_0x345819);
        },
        '_execModules': function() {
            for (var _0x3fe83d = !0x1, _0x529bf9 = 0x0; _0x529bf9 < ig['_loadQueue']['length']; _0x529bf9++) {
                for (var _0x12aa72 = ig['_loadQueue'][_0x529bf9], _0x5cc0f5 = !0x0, _0x28d914 = 0x0; _0x28d914 < _0x12aa72['requires']['length']; _0x28d914++) {
                    var _0x604666 = _0x12aa72['requires'][_0x28d914];
                    ig['modules'][_0x604666] ? ig['modules'][_0x604666]['loaded'] || (_0x5cc0f5 = !0x1) : (_0x5cc0f5 = !0x1, ig['_loadScript'](_0x604666, _0x12aa72['name']));
                }
                _0x5cc0f5 && _0x12aa72['body'] && (ig['_loadQueue']['splice'](_0x529bf9, 0x1), _0x12aa72['loaded'] = !0x0, _0x12aa72['body'](), _0x3fe83d = !0x0, _0x529bf9--);
            }
            if (_0x3fe83d) ig['_execModules']();
            else if (!ig['baked'] && 0x0 == ig['_waitForOnload'] && 0x0 != ig['_loadQueue']['length']) {
                _0x3fe83d = [];
                for (_0x529bf9 = 0x0; _0x529bf9 < ig['_loadQueue']['length']; _0x529bf9++) {
                    _0x5cc0f5 = [];
                    _0x604666 = ig['_loadQueue'][_0x529bf9]['requires'];
                    for (_0x28d914 = 0x0; _0x28d914 < _0x604666['length']; _0x28d914++) _0x12aa72 = ig['modules'][_0x604666[_0x28d914]], (!_0x12aa72 || !_0x12aa72['loaded']) && _0x5cc0f5['push'](_0x604666[_0x28d914]);
                    _0x3fe83d['push'](ig['_loadQueue'][_0x529bf9]['name'] + ' (requires: ' + _0x5cc0f5['join'](', ') + ')');
                }
                throw 'Unresolved (or circular?) dependencies. Most likely there\x27s a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\x0a' + _0x3fe83d['join']('\x0a');
            }
        },
        '_DOMReady': function() {
            if (!ig['modules']['dom.ready']['loaded']) {
                if (!document['body']) return setTimeout(ig['_DOMReady'], 0xd);
                ig['modules']['dom.ready']['loaded'] = !0x0;
                ig['_waitForOnload']--;
                ig['_execModules']();
            }
            return 0x0;
        },
        '_boot': function() {
            document['location']['href']['match'](/\?nocache/) && ig['setNocache'](!0x0);
            ig['ua']['pixelRatio'] = _0x1a4744['devicePixelRatio'] || 0x1;
            ig['ua']['viewport'] = {
                'width': _0x1a4744['innerWidth'],
                'height': _0x1a4744['innerHeight']
            };
            ig['ua']['screen'] = {
                'width': _0x1a4744['screen']['availWidth'] * ig['ua']['pixelRatio'],
                'height': _0x1a4744['screen']['availHeight'] * ig['ua']['pixelRatio']
            };
            ig['ua']['iPhone'] = /iPhone/i ['test'](navigator['userAgent']);
            ig['ua']['iPhone4'] = ig['ua']['iPhone'] && 0x2 == ig['ua']['pixelRatio'];
            ig['ua']['iPad'] = /iPad/i ['test'](navigator['userAgent']);
            ig['ua']['android'] = /android/i ['test'](navigator['userAgent']);
            ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
            ig['ua']['is_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i ['test'](navigator['userAgent']);
            ig['ua']['is_safari_or_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit/i ['test'](navigator['userAgent']);
            ig['ua']['iOS'] = ig['ua']['iPhone'] || ig['ua']['iPad'];
            ig['ua']['iOS6_tag'] = /OS 6_/i ['test'](navigator['userAgent']);
            ig['ua']['iOS6'] = (ig['ua']['iPhone'] || ig['ua']['iPad']) && ig['ua']['iOS6_tag'];
            ig['ua']['iOSgt5'] = ig['ua']['iOS'] && 0x5 < parseInt(navigator['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)[0x1]);
            ig['ua']['HTCONE'] = /HTC_One/i ['test'](navigator['userAgent']);
            ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
            ig['ua']['Kindle'] = /Silk/i ['test'](navigator['userAgent']);
            ig['ua']['touchDevice'] = 'ontouchstart' in _0x1a4744 || _0x1a4744['navigator']['msMaxTouchPoints'];
            ig['ua']['mobile'] = true;ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['iOS6'] || ig['ua']['winPhone'] || ig['ua']['Kindle'] || /mobile/i ['test'](navigator['userAgent']);
        },
        '_initDOMReady': function() {
            ig['modules']['dom.ready'] ? ig['_execModules']() : (ig['_boot'](), ig['modules']['dom.ready'] = {
                'requires': [],
                'loaded': !0x1,
                'body': null
            }, ig['_waitForOnload']++, 'complete' === document['readyState'] ? ig['_DOMReady']() : (document['addEventListener']('DOMContentLoaded', ig['_DOMReady'], !0x1), _0x1a4744['addEventListener']('load', ig['_DOMReady'], !0x1)));
        }
    };
    ig['normalizeVendorAttribute'](_0x1a4744, 'requestAnimationFrame');
    if (_0x1a4744['requestAnimationFrame']) {
        var _0x3cd69a = 0x1,
            _0x2b6ed8 = {};
        _0x1a4744['ig']['setAnimation'] = function(_0x930d4f, _0x5d3f47) {
            var _0x51d16a = _0x3cd69a++;
            _0x2b6ed8[_0x51d16a] = !0x0;
            var _0x58030d = function() {
                _0x2b6ed8[_0x51d16a] && (_0x1a4744['requestAnimationFrame'](_0x58030d, _0x5d3f47), _0x930d4f());
            };
            _0x1a4744['requestAnimationFrame'](_0x58030d, _0x5d3f47);
            return _0x51d16a;
        };
        _0x1a4744['ig']['clearAnimation'] = function(_0x389400) {
            delete _0x2b6ed8[_0x389400];
        };
    } else _0x1a4744['ig']['setAnimation'] = function(_0x21697a) {
        return _0x1a4744['setInterval'](_0x21697a, 0x3e8 / 0x3c);
    }, _0x1a4744['ig']['clearAnimation'] = function(_0x3de8e9) {
        _0x1a4744['clearInterval'](_0x3de8e9);
    };
    var _0x1a378b = !0x1,
        _0x441fd5 = /xyz/ ['test'](function() {
            xyz;
        }) ? /\bparent\b/ : /.*/,
        _0x240d35 = 0x0;
    _0x1a4744['ig']['Class'] = function() {};
    var _0x5ea0b7 = function(_0xce7a8a) {
        var _0x23abb4 = this['prototype'],
            _0x2046b1 = {},
            _0x8de0f1;
        for (_0x8de0f1 in _0xce7a8a) 'function' == typeof _0xce7a8a[_0x8de0f1] && 'function' == typeof _0x23abb4[_0x8de0f1] && _0x441fd5['test'](_0xce7a8a[_0x8de0f1]) ? (_0x2046b1[_0x8de0f1] = _0x23abb4[_0x8de0f1], _0x23abb4[_0x8de0f1] = function(_0xd70a90, _0x7140e6) {
            return function() {
                var _0x4dca4e = this['parent'];
                this['parent'] = _0x2046b1[_0xd70a90];
                var _0x48728a = _0x7140e6['apply'](this, arguments);
                this['parent'] = _0x4dca4e;
                return _0x48728a;
            };
        }(_0x8de0f1, _0xce7a8a[_0x8de0f1])) : _0x23abb4[_0x8de0f1] = _0xce7a8a[_0x8de0f1];
    };
    _0x1a4744['ig']['Class']['extend'] = function(_0x2c700b) {
        function _0x38cfd4() {
            if (!_0x1a378b) {
                if (this['staticInstantiate']) {
                    var _0x408b54 = this['staticInstantiate']['apply'](this, arguments);
                    if (_0x408b54) return _0x408b54;
                }
                for (var _0x41a995 in this) 'object' == typeof this[_0x41a995] && (this[_0x41a995] = ig['copy'](this[_0x41a995]));
                this['init'] && this['init']['apply'](this, arguments);
            }
            return this;
        }
        var _0x2ae7b2 = this['prototype'];
        _0x1a378b = !0x0;
        var _0x5671fd = new this();
        _0x1a378b = !0x1;
        for (var _0x3450e0 in _0x2c700b) _0x5671fd[_0x3450e0] = 'function' == typeof _0x2c700b[_0x3450e0] && 'function' == typeof _0x2ae7b2[_0x3450e0] && _0x441fd5['test'](_0x2c700b[_0x3450e0]) ? function(_0x201bb7, _0x2faf1d) {
            return function() {
                var _0xa09a5 = this['parent'];
                this['parent'] = _0x2ae7b2[_0x201bb7];
                var _0x1d56fc = _0x2faf1d['apply'](this, arguments);
                this['parent'] = _0xa09a5;
                return _0x1d56fc;
            };
        }(_0x3450e0, _0x2c700b[_0x3450e0]) : _0x2c700b[_0x3450e0];
        _0x38cfd4['prototype'] = _0x5671fd;
        _0x38cfd4['prototype']['constructor'] = _0x38cfd4;
        _0x38cfd4['extend'] = _0x1a4744['ig']['Class']['extend'];
        _0x38cfd4['inject'] = _0x5ea0b7;
        _0x38cfd4['classId'] = _0x5671fd['classId'] = ++_0x240d35;
        return _0x38cfd4;
    };
    _0x1a4744['ImpactMixin'] && ig['merge'](ig, _0x1a4744['ImpactMixin']);
}(window));
ig['baked'] = !0x0;
ig['module']('impact.image')['defines'](function() {
    ig['Image'] = ig['Class']['extend']({
        'data': null,
        'width': 0x0,
        'height': 0x0,
        'loaded': !0x1,
        'failed': !0x1,
        'loadCallback': null,
        'path': '',
        'staticInstantiate': function(_0x2a02c2) {
            return ig['Image']['cache'][_0x2a02c2] || null;
        },
        'init': function(_0x2557ba) {
            this['path'] = _0x2557ba;
            this['load']();
        },
        'load': function(_0x1bc3d9) {
            this['loaded'] ? _0x1bc3d9 && _0x1bc3d9(this['path'], !0x0) : (!this['loaded'] && ig['ready'] ? (this['loadCallback'] = _0x1bc3d9 || null, this['data'] = new Image(), this['data']['onload'] = this['onload']['bind'](this), this['data']['onerror'] = this['onerror']['bind'](this), this['data']['src'] = ig['prefix'] + this['path'] + ig['nocache']) : ig['addResource'](this), ig['Image']['cache'][this['path']] = this);
        },
        'reload': function() {
            this['loaded'] = !0x1;
            this['data'] = new Image();
            this['data']['onload'] = this['onload']['bind'](this);
            this['data']['src'] = this['path'] + '?' + Date['now']();
        },
        'onload': function() {
            this['width'] = this['data']['width'];
            this['height'] = this['data']['height'];
            this['loaded'] = !0x0;
            0x1 != ig['system']['scale'] && this['resize'](ig['system']['scale']);
            this['loadCallback'] && this['loadCallback'](this['path'], !0x0);
        },
        'onerror': function() {
            this['failed'] = !0x0;
            this['loadCallback'] && this['loadCallback'](this['path'], !0x1);
        },
        'resize': function(_0x4775e5) {
            var _0x523a44 = ig['getImagePixels'](this['data'], 0x0, 0x0, this['width'], this['height']),
                _0x143caf = this['width'] * _0x4775e5,
                _0x2004a5 = this['height'] * _0x4775e5,
                _0x16803c = ig['$new']('canvas');
            _0x16803c['width'] = _0x143caf;
            _0x16803c['height'] = _0x2004a5;
            for (var _0xd1518b = _0x16803c['getContext']('2d'), _0x4a86b7 = _0xd1518b['getImageData'](0x0, 0x0, _0x143caf, _0x2004a5), _0x261ba2 = 0x0; _0x261ba2 < _0x2004a5; _0x261ba2++)
                for (var _0x2083fb = 0x0; _0x2083fb < _0x143caf; _0x2083fb++) {
                    var _0x15f221 = 0x4 * (Math['floor'](_0x261ba2 / _0x4775e5) * this['width'] + Math['floor'](_0x2083fb / _0x4775e5)),
                        _0x235d71 = 0x4 * (_0x261ba2 * _0x143caf + _0x2083fb);
                    _0x4a86b7['data'][_0x235d71] = _0x523a44['data'][_0x15f221];
                    _0x4a86b7['data'][_0x235d71 + 0x1] = _0x523a44['data'][_0x15f221 + 0x1];
                    _0x4a86b7['data'][_0x235d71 + 0x2] = _0x523a44['data'][_0x15f221 + 0x2];
                    _0x4a86b7['data'][_0x235d71 + 0x3] = _0x523a44['data'][_0x15f221 + 0x3];
                }
            _0xd1518b['putImageData'](_0x4a86b7, 0x0, 0x0);
            this['data'] = _0x16803c;
        },
        'draw': function(_0xdd5d5d, _0x35aa27, _0x5c753c, _0x218afc, _0xccda72, _0x42440d) {
            if (this['loaded']) {
                var _0x2e19f6 = ig['system']['scale'];
                _0xccda72 = (_0xccda72 ? _0xccda72 : this['width']) * _0x2e19f6;
                _0x42440d = (_0x42440d ? _0x42440d : this['height']) * _0x2e19f6;
                ig['system']['context']['drawImage'](this['data'], _0x5c753c ? _0x5c753c * _0x2e19f6 : 0x0, _0x218afc ? _0x218afc * _0x2e19f6 : 0x0, _0xccda72, _0x42440d, ig['system']['getDrawPos'](_0xdd5d5d), ig['system']['getDrawPos'](_0x35aa27), _0xccda72, _0x42440d);
                ig['Image']['drawCount']++;
            }
        },
        'drawTile': function(_0x16df19, _0x203bb8, _0x31d8da, _0x22f108, _0x47d344, _0x5f4e36, _0x4daff1) {
            _0x47d344 = _0x47d344 ? _0x47d344 : _0x22f108;
            if (this['loaded'] && !(_0x22f108 > this['width'] || _0x47d344 > this['height'])) {
                var _0x4b5de1 = ig['system']['scale'],
                    _0x505631 = Math['floor'](_0x22f108 * _0x4b5de1),
                    _0xe62479 = Math['floor'](_0x47d344 * _0x4b5de1),
                    _0x44ae43 = _0x5f4e36 ? -0x1 : 0x1,
                    _0x38ec03 = _0x4daff1 ? -0x1 : 0x1;
                if (_0x5f4e36 || _0x4daff1) ig['system']['context']['save'](), ig['system']['context']['scale'](_0x44ae43, _0x38ec03);
                ig['system']['context']['drawImage'](this['data'], Math['floor'](_0x31d8da * _0x22f108) % this['width'] * _0x4b5de1, Math['floor'](_0x31d8da * _0x22f108 / this['width']) * _0x47d344 * _0x4b5de1, _0x505631, _0xe62479, ig['system']['getDrawPos'](_0x16df19) * _0x44ae43 - (_0x5f4e36 ? _0x505631 : 0x0), ig['system']['getDrawPos'](_0x203bb8) * _0x38ec03 - (_0x4daff1 ? _0xe62479 : 0x0), _0x505631, _0xe62479);
                (_0x5f4e36 || _0x4daff1) && ig['system']['context']['restore']();
                ig['Image']['drawCount']++;
            }
        }
    });
    ig['Image']['drawCount'] = 0x0;
    ig['Image']['cache'] = {};
    ig['Image']['reloadCache'] = function() {
        for (var _0x74dd52 in ig['Image']['cache']) ig['Image']['cache'][_0x74dd52]['reload']();
    };
});
ig['baked'] = !0x0;
ig['module']('impact.font')['requires']('impact.image')['defines'](function() {
    ig['Font'] = ig['Image']['extend']({
        'widthMap': [],
        'indices': [],
        'firstChar': 0x20,
        'alpha': 0x1,
        'letterSpacing': 0x1,
        'lineSpacing': 0x0,
        'onload': function(_0x32ac9d) {
            this['_loadMetrics'](this['data']);
            this['parent'](_0x32ac9d);
        },
        'widthForString': function(_0x328072) {
            if (-0x1 !== _0x328072['indexOf']('\x0a')) {
                _0x328072 = _0x328072['split']('\x0a');
                for (var _0x2d9593 = 0x0, _0x70cd0a = 0x0; _0x70cd0a < _0x328072['length']; _0x70cd0a++) _0x2d9593 = Math['max'](_0x2d9593, this['_widthForLine'](_0x328072[_0x70cd0a]));
                return _0x2d9593;
            }
            return this['_widthForLine'](_0x328072);
        },
        '_widthForLine': function(_0x131667) {
            for (var _0x2c8719 = 0x0, _0x2f153f = 0x0; _0x2f153f < _0x131667['length']; _0x2f153f++) _0x2c8719 += this['widthMap'][_0x131667['charCodeAt'](_0x2f153f) - this['firstChar']] + this['letterSpacing'];
            return _0x2c8719;
        },
        'heightForString': function(_0x5d6e42) {
            return _0x5d6e42['split']('\x0a')['length'] * (this['height'] + this['lineSpacing']);
        },
        'draw': function(_0x229461, _0x3e60f4, _0x5beaa4, _0x14a512) {
            'string' != typeof _0x229461 && (_0x229461 = _0x229461['toString']());
            if (-0x1 !== _0x229461['indexOf']('\x0a')) {
                _0x229461 = _0x229461['split']('\x0a');
                for (var _0x45a5eb = this['height'] + this['lineSpacing'], _0x23a2a0 = 0x0; _0x23a2a0 < _0x229461['length']; _0x23a2a0++) this['draw'](_0x229461[_0x23a2a0], _0x3e60f4, _0x5beaa4 + _0x23a2a0 * _0x45a5eb, _0x14a512);
            } else {
                if (_0x14a512 == ig['Font']['ALIGN']['RIGHT'] || _0x14a512 == ig['Font']['ALIGN']['CENTER']) _0x23a2a0 = this['_widthForLine'](_0x229461), _0x3e60f4 -= _0x14a512 == ig['Font']['ALIGN']['CENTER'] ? _0x23a2a0 / 0x2 : _0x23a2a0;
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
                for (_0x23a2a0 = 0x0; _0x23a2a0 < _0x229461['length']; _0x23a2a0++) _0x14a512 = _0x229461['charCodeAt'](_0x23a2a0), _0x3e60f4 += this['_drawChar'](_0x14a512 - this['firstChar'], _0x3e60f4, _0x5beaa4);
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1);
                ig['Image']['drawCount'] += _0x229461['length'];
            }
        },
        '_drawChar': function(_0x511f96, _0x2e0a1d, _0x31a266) {
            if (!this['loaded'] || 0x0 > _0x511f96 || _0x511f96 >= this['indices']['length']) return 0x0;
            var _0xb20f39 = ig['system']['scale'],
                _0x4a6942 = this['widthMap'][_0x511f96] * _0xb20f39,
                _0x5bc60a = (this['height'] - 0x2) * _0xb20f39;
            ig['system']['context']['drawImage'](this['data'], this['indices'][_0x511f96] * _0xb20f39, 0x0, _0x4a6942, _0x5bc60a, ig['system']['getDrawPos'](_0x2e0a1d), ig['system']['getDrawPos'](_0x31a266), _0x4a6942, _0x5bc60a);
            return this['widthMap'][_0x511f96] + this['letterSpacing'];
        },
        '_loadMetrics': function(_0x58986f) {
            this['height'] = _0x58986f['height'] - 0x1;
            this['widthMap'] = [];
            this['indices'] = [];
            for (var _0x187b33 = ig['getImagePixels'](_0x58986f, 0x0, _0x58986f['height'] - 0x1, _0x58986f['width'], 0x1), _0x323fba = 0x0, _0x2c7ea6 = 0x0, _0x193796 = 0x0; _0x193796 < _0x58986f['width']; _0x193796++) {
                var _0x43a252 = 0x4 * _0x193796 + 0x3;
                0x7f < _0x187b33['data'][_0x43a252] ? _0x2c7ea6++ : 0x80 > _0x187b33['data'][_0x43a252] && _0x2c7ea6 && (this['widthMap']['push'](_0x2c7ea6), this['indices']['push'](_0x193796 - _0x2c7ea6), _0x323fba++, _0x2c7ea6 = 0x0);
            }
            this['widthMap']['push'](_0x2c7ea6);
            this['indices']['push'](_0x193796 - _0x2c7ea6);
        }
    });
    ig['Font']['ALIGN'] = {
        'LEFT': 0x0,
        'RIGHT': 0x1,
        'CENTER': 0x2
    };
});
ig['baked'] = !0x0;
ig['module']('impact.sound')['defines'](function() {
    ig['SoundManager'] = ig['Class']['extend']({
        'clips': {},
        'volume': 0x1,
        'format': null,
        'init': function() {
            if (!ig['Sound']['enabled'] || !window['Audio']) ig['Sound']['enabled'] = !0x1;
            else {
                for (var _0xf5be6a = new Audio(), _0x29e64c = 0x0; _0x29e64c < ig['Sound']['use']['length']; _0x29e64c++) {
                    var _0x578606 = ig['Sound']['use'][_0x29e64c];
                    if (_0xf5be6a['canPlayType'](_0x578606['mime'])) {
                        this['format'] = _0x578606;
                        break;
                    }
                }
                this['format'] || (ig['Sound']['enabled'] = !0x1);
            }
        },
        'load': function(_0x18e7fd, _0x2d113a, _0x5d4c3c) {
            var _0x4e69fe = ig['prefix'] + _0x18e7fd['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
            if (this['clips'][_0x18e7fd]) {
                if (_0x2d113a && this['clips'][_0x18e7fd]['length'] < ig['Sound']['channels'])
                    for (_0x2d113a = this['clips'][_0x18e7fd]['length']; _0x2d113a < ig['Sound']['channels']; _0x2d113a++) {
                        var _0x544e80 = new Audio(_0x4e69fe);
                        _0x544e80['load']();
                        this['clips'][_0x18e7fd]['push'](_0x544e80);
                    }
                return this['clips'][_0x18e7fd][0x0];
            }
            var _0x186528 = new Audio(_0x4e69fe);
            _0x5d4c3c && (_0x186528['addEventListener']('canplaythrough', function _0x5da35b(_0x11ed0c) {
                _0x186528['removeEventListener']('canplaythrough', _0x5da35b, !0x1);
                _0x5d4c3c(_0x18e7fd, !0x0, _0x11ed0c);
            }, !0x1), _0x186528['addEventListener']('error', function(_0x41b28c) {
                _0x5d4c3c(_0x18e7fd, !0x1, _0x41b28c);
            }, !0x1));
            _0x186528['preload'] = 'auto';
            _0x186528['load']();
            this['clips'][_0x18e7fd] = [_0x186528];
            if (_0x2d113a)
                for (_0x2d113a = 0x1; _0x2d113a < ig['Sound']['channels']; _0x2d113a++) _0x544e80 = new Audio(_0x4e69fe), _0x544e80['load'](), this['clips'][_0x18e7fd]['push'](_0x544e80);
            return _0x186528;
        },
        'get': function(_0x4a6eb4) {
            _0x4a6eb4 = this['clips'][_0x4a6eb4];
            for (var _0x6bfa55 = 0x0, _0x4d5a0c; _0x4d5a0c = _0x4a6eb4[_0x6bfa55++];)
                if (_0x4d5a0c['paused'] || _0x4d5a0c['ended']) return _0x4d5a0c['ended'] && (_0x4d5a0c['currentTime'] = 0x0), _0x4d5a0c;
            _0x4a6eb4[0x0]['pause']();
            _0x4a6eb4[0x0]['currentTime'] = 0x0;
            return _0x4a6eb4[0x0];
        }
    });
    ig['Music'] = ig['Class']['extend']({
        'tracks': [],
        'namedTracks': {},
        'currentTrack': null,
        'currentIndex': 0x0,
        'random': !0x1,
        '_volume': 0x1,
        '_loop': !0x1,
        '_fadeInterval': 0x0,
        '_fadeTimer': null,
        '_endedCallbackBound': null,
        'init': function() {
            this['_endedCallbackBound'] = this['_endedCallback']['bind'](this);
            Object['defineProperty'] ? (Object['defineProperty'](this, 'volume', {
                'get': this['getVolume']['bind'](this),
                'set': this['setVolume']['bind'](this)
            }), Object['defineProperty'](this, 'loop', {
                'get': this['getLooping']['bind'](this),
                'set': this['setLooping']['bind'](this)
            })) : this['__defineGetter__'] && (this['__defineGetter__']('volume', this['getVolume']['bind'](this)), this['__defineSetter__']('volume', this['setVolume']['bind'](this)), this['__defineGetter__']('loop', this['getLooping']['bind'](this)), this['__defineSetter__']('loop', this['setLooping']['bind'](this)));
        },
        'add': function(_0x21b651, _0x395d0f) {
            if (ig['Sound']['enabled']) {
                var _0x38de97 = ig['soundManager']['load'](_0x21b651 instanceof ig['Sound'] ? _0x21b651['path'] : _0x21b651, !0x1);
                _0x38de97['loop'] = this['_loop'];
                _0x38de97['volume'] = this['_volume'];
                _0x38de97['addEventListener']('ended', this['_endedCallbackBound'], !0x1);
                this['tracks']['push'](_0x38de97);
                _0x395d0f && (this['namedTracks'][_0x395d0f] = _0x38de97);
                this['currentTrack'] || (this['currentTrack'] = _0x38de97);
            }
        },
        'next': function() {
            this['tracks']['length'] && (this['stop'](), this['currentIndex'] = this['random'] ? Math['floor'](Math['random']() * this['tracks']['length']) : (this['currentIndex'] + 0x1) % this['tracks']['length'], this['currentTrack'] = this['tracks'][this['currentIndex']], this['play']());
        },
        'pause': function() {
            this['currentTrack'] && this['currentTrack']['pause']();
        },
        'stop': function() {
            this['currentTrack'] && (this['currentTrack']['pause'](), this['currentTrack']['currentTime'] = 0x0);
        },
        'play': function(_0x14f8a0) {
            if (_0x14f8a0 && this['namedTracks'][_0x14f8a0]) _0x14f8a0 = this['namedTracks'][_0x14f8a0], _0x14f8a0 != this['currentTrack'] && (this['stop'](), this['currentTrack'] = _0x14f8a0);
            else if (!this['currentTrack']) return;
            this['currentTrack']['play']();
        },
        'getLooping': function() {
            return this['_loop'];
        },
        'setLooping': function(_0x5db9f4) {
            this['_loop'] = _0x5db9f4;
            for (var _0x2f57ba in this['tracks']) this['tracks'][_0x2f57ba]['loop'] = _0x5db9f4;
        },
        'getVolume': function() {
            return this['_volume'];
        },
        'setVolume': function(_0x4379d5) {
            this['_volume'] = _0x4379d5['limit'](0x0, 0x1);
            for (var _0x59bbea in this['tracks']) this['tracks'][_0x59bbea]['volume'] = this['_volume'];
        },
        'fadeOut': function(_0x4420d9) {
            this['currentTrack'] && (clearInterval(this['_fadeInterval']), this['fadeTimer'] = new ig['Timer'](_0x4420d9), this['_fadeInterval'] = setInterval(this['_fadeStep']['bind'](this), 0x32));
        },
        '_fadeStep': function() {
            var _0x3b58b4 = this['fadeTimer']['delta']()['map'](-this['fadeTimer']['target'], 0x0, 0x1, 0x0)['limit'](0x0, 0x1) * this['_volume'];
            0.01 >= _0x3b58b4 ? (this['stop'](), this['currentTrack']['volume'] = this['_volume'], clearInterval(this['_fadeInterval'])) : this['currentTrack']['volume'] = _0x3b58b4;
        },
        '_endedCallback': function() {
            this['_loop'] ? this['play']() : this['next']();
        }
    });
    ig['Sound'] = ig['Class']['extend']({
        'path': '',
        'volume': 0x1,
        'currentClip': null,
        'multiChannel': !0x0,
        'init': function(_0x471b39, _0x452f2d) {
            this['path'] = _0x471b39;
            this['multiChannel'] = !0x1 !== _0x452f2d;
            this['load']();
        },
        'load': function(_0x96c489) {
            ig['Sound']['enabled'] ? ig['ready'] ? ig['soundManager']['load'](this['path'], this['multiChannel'], _0x96c489) : ig['addResource'](this) : _0x96c489 && _0x96c489(this['path'], !0x0);
        },
        'play': function() {
            ig['Sound']['enabled'] && (this['currentClip'] = ig['soundManager']['get'](this['path']), this['currentClip']['volume'] = ig['soundManager']['volume'] * this['volume'], this['currentClip']['play']());
        },
        'stop': function() {
            this['currentClip'] && (this['currentClip']['pause'](), this['currentClip']['currentTime'] = 0x0);
        }
    });
    ig['Sound']['FORMAT'] = {
        'MP3': {
            'ext': 'mp3',
            'mime': 'audio/mpeg'
        },
        'M4A': {
            'ext': 'm4a',
            'mime': 'audio/mp4; codecs=mp4a'
        },
        'OGG': {
            'ext': 'ogg',
            'mime': 'audio/ogg; codecs=vorbis'
        },
        'WEBM': {
            'ext': 'webm',
            'mime': 'audio/webm; codecs=vorbis'
        },
        'CAF': {
            'ext': 'caf',
            'mime': 'audio/x-caf'
        }
    };
    ig['Sound']['use'] = [ig['Sound']['FORMAT']['OGG'], ig['Sound']['FORMAT']['MP3']];
    ig['Sound']['channels'] = 0x4;
    ig['Sound']['enabled'] = !0x0;
});
ig['baked'] = !0x0;
ig['module']('impact.loader')['requires']('impact.image', 'impact.font', 'impact.sound')['defines'](function() {
    ig['Loader'] = ig['Class']['extend']({
        'resources': [],
        'gameClass': null,
        'status': 0x0,
        'done': !0x1,
        '_unloaded': [],
        '_drawStatus': 0x0,
        '_intervalId': 0x0,
        '_loadCallbackBound': null,
        'init': function(_0x1d42f9, _0x28706a) {
            this['gameClass'] = _0x1d42f9;
            this['resources'] = _0x28706a;
            this['_loadCallbackBound'] = this['_loadCallback']['bind'](this);
            for (var _0x434cdd = 0x0; _0x434cdd < this['resources']['length']; _0x434cdd++) this['_unloaded']['push'](this['resources'][_0x434cdd]['path']);
        },
        'load': function() {
            ig['system']['clear']('#000');
            if (this['resources']['length']) {
                for (var _0x59e90e = 0x0; _0x59e90e < this['resources']['length']; _0x59e90e++) this['loadResource'](this['resources'][_0x59e90e]);
                this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
            } else this['end']();
        },
        'loadResource': function(_0x533b9c) {
            _0x533b9c['load'](this['_loadCallbackBound']);
        },
        'end': function() {
            this['done'] || (this['done'] = !0x0, clearInterval(this['_intervalId']));
        },
        'draw': function() {},
        '_loadCallback': function(_0x1f7128, _0x3465bf) {
            if (_0x3465bf) this['_unloaded']['erase'](_0x1f7128);
            else throw 'Failed to load resource: ' + _0x1f7128;
            this['status'] = 0x1 - this['_unloaded']['length'] / this['resources']['length'];
            0x0 == this['_unloaded']['length'] && setTimeout(this['end']['bind'](this), 0xfa);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.timer')['defines'](function() {
    ig['Timer'] = ig['Class']['extend']({
        'target': 0x0,
        'base': 0x0,
        'last': 0x0,
        'pausedAt': 0x0,
        'init': function(_0x35277d) {
            this['last'] = this['base'] = ig['Timer']['time'];
            this['target'] = _0x35277d || 0x0;
        },
        'set': function(_0x7cdc2a) {
            this['target'] = _0x7cdc2a || 0x0;
            this['base'] = ig['Timer']['time'];
            this['pausedAt'] = 0x0;
        },
        'reset': function() {
            this['base'] = ig['Timer']['time'];
            this['pausedAt'] = 0x0;
        },
        'tick': function() {
            var _0x342425 = ig['Timer']['time'] - this['last'];
            this['last'] = ig['Timer']['time'];
            return this['pausedAt'] ? 0x0 : _0x342425;
        },
        'delta': function() {
            return (this['pausedAt'] || ig['Timer']['time']) - this['base'] - this['target'];
        },
        'pause': function() {
            this['pausedAt'] || (this['pausedAt'] = ig['Timer']['time']);
        },
        'unpause': function() {
            this['pausedAt'] && (this['base'] += ig['Timer']['time'] - this['pausedAt'], this['pausedAt'] = 0x0);
        }
    });
    ig['Timer']['_last'] = 0x0;
    ig['Timer']['time'] = Number['MIN_VALUE'];
    ig['Timer']['timeScale'] = 0x1;
    ig['Timer']['maxStep'] = 0.05;
    ig['Timer']['step'] = function() {
        var _0x5062cb = Date['now']();
        ig['Timer']['time'] += Math['min']((_0x5062cb - ig['Timer']['_last']) / 0x3e8, ig['Timer']['maxStep']) * ig['Timer']['timeScale'];
        ig['Timer']['_last'] = _0x5062cb;
    };
});
ig['baked'] = !0x0;
ig['module']('impact.system')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['System'] = ig['Class']['extend']({
        'fps': 0x1e,
        'width': 0x140,
        'height': 0xf0,
        'realWidth': 0x140,
        'realHeight': 0xf0,
        'scale': 0x1,
        'tick': 0x0,
        'animationId': 0x0,
        'newGameClass': null,
        'running': !0x1,
        'delegate': null,
        'clock': null,
        'canvas': null,
        'context': null,
        'init': function(_0x22cc12, _0x13067d, _0x311be1, _0x17d2a3, _0x3eed73) {
            this['fps'] = _0x13067d;
            this['clock'] = new ig['Timer']();
            this['canvas'] = ig['$'](_0x22cc12);
            this['resize'](_0x311be1, _0x17d2a3, _0x3eed73);
            this['context'] = this['canvas']['getContext']('2d');
            this['getDrawPos'] = ig['System']['drawMode'];
            0x1 != this['scale'] && (ig['System']['scaleMode'] = ig['System']['SCALE']['CRISP']);
            ig['System']['scaleMode'](this['canvas'], this['context']);
        },
        'resize': function(_0x5ef47f, _0x3c82bd, _0x31ba1d) {
            this['width'] = _0x5ef47f;
            this['height'] = _0x3c82bd;
            this['scale'] = _0x31ba1d || this['scale'];
            this['realWidth'] = this['width'] * this['scale'];
            this['realHeight'] = this['height'] * this['scale'];
            this['canvas']['width'] = this['realWidth'];
            this['canvas']['height'] = this['realHeight'];
        },
        'setGame': function(_0x5d7e00) {
            this['running'] ? this['newGameClass'] = _0x5d7e00 : this['setGameNow'](_0x5d7e00);
        },
        'setGameNow': function(_0x1eab3b) {
            ig['game'] = new _0x1eab3b();
            ig['system']['setDelegate'](ig['game']);
        },
        'setDelegate': function(_0x452062) {
            if ('function' == typeof _0x452062['run']) this['delegate'] = _0x452062, this['startRunLoop']();
            else throw 'System.setDelegate: No run() function in object';
        },
        'stopRunLoop': function() {
            ig['clearAnimation'](this['animationId']);
            this['running'] = !0x1;
        },
        'startRunLoop': function() {
            this['stopRunLoop']();
            this['animationId'] = ig['setAnimation'](this['run']['bind'](this), this['canvas']);
            this['running'] = !0x0;
        },
        'clear': function(_0x56304e) {
            this['context']['fillStyle'] = _0x56304e;
            this['context']['fillRect'](0x0, 0x0, this['realWidth'], this['realHeight']);
        },
        'run': function() {
            ig['Timer']['step']();
            this['tick'] = this['clock']['tick']();
            this['delegate']['run']();
            ig['input']['clearPressed']();
            this['newGameClass'] && (this['setGameNow'](this['newGameClass']), this['newGameClass'] = null);
        },
        'getDrawPos': null
    });
    ig['System']['DRAW'] = {
        'AUTHENTIC': function(_0x17c81d) {
            return Math['round'](_0x17c81d) * this['scale'];
        },
        'SMOOTH': function(_0x42a88a) {
            return Math['round'](_0x42a88a * this['scale']);
        },
        'SUBPIXEL': function(_0x19a8e0) {
            return _0x19a8e0 * this['scale'];
        }
    };
    ig['System']['drawMode'] = ig['System']['DRAW']['SMOOTH'];
    ig['System']['SCALE'] = {
        'CRISP': function(_0x392f36, _0x49bb7c) {
            ig['setVendorAttribute'](_0x49bb7c, 'imageSmoothingEnabled', !0x1);
            _0x392f36['style']['imageRendering'] = '-moz-crisp-edges';
            _0x392f36['style']['imageRendering'] = '-o-crisp-edges';
            _0x392f36['style']['imageRendering'] = '-webkit-optimize-contrast';
            _0x392f36['style']['imageRendering'] = 'crisp-edges';
            _0x392f36['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x5e45b0, _0x1082c0) {
            ig['setVendorAttribute'](_0x1082c0, 'imageSmoothingEnabled', !0x0);
            _0x5e45b0['style']['imageRendering'] = '';
            _0x5e45b0['style']['msInterpolationMode'] = '';
        }
    };
    ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH'];
});
ig['baked'] = !0x0;
ig['module']('impact.input')['defines'](function() {
    ig['KEY'] = {
        'MOUSE1': -0x1,
        'MOUSE2': -0x3,
        'MWHEEL_UP': -0x4,
        'MWHEEL_DOWN': -0x5,
        'BACKSPACE': 0x8,
        'TAB': 0x9,
        'ENTER': 0xd,
        'PAUSE': 0x13,
        'CAPS': 0x14,
        'ESC': 0x1b,
        'SPACE': 0x20,
        'PAGE_UP': 0x21,
        'PAGE_DOWN': 0x22,
        'END': 0x23,
        'HOME': 0x24,
        'LEFT_ARROW': 0x25,
        'UP_ARROW': 0x26,
        'RIGHT_ARROW': 0x27,
        'DOWN_ARROW': 0x28,
        'INSERT': 0x2d,
        'DELETE': 0x2e,
        '_0': 0x30,
        '_1': 0x31,
        '_2': 0x32,
        '_3': 0x33,
        '_4': 0x34,
        '_5': 0x35,
        '_6': 0x36,
        '_7': 0x37,
        '_8': 0x38,
        '_9': 0x39,
        'A': 0x41,
        'B': 0x42,
        'C': 0x43,
        'D': 0x44,
        'E': 0x45,
        'F': 0x46,
        'G': 0x47,
        'H': 0x48,
        'I': 0x49,
        'J': 0x4a,
        'K': 0x4b,
        'L': 0x4c,
        'M': 0x4d,
        'N': 0x4e,
        'O': 0x4f,
        'P': 0x50,
        'Q': 0x51,
        'R': 0x52,
        'S': 0x53,
        'T': 0x54,
        'U': 0x55,
        'V': 0x56,
        'W': 0x57,
        'X': 0x58,
        'Y': 0x59,
        'Z': 0x5a,
        'NUMPAD_0': 0x60,
        'NUMPAD_1': 0x61,
        'NUMPAD_2': 0x62,
        'NUMPAD_3': 0x63,
        'NUMPAD_4': 0x64,
        'NUMPAD_5': 0x65,
        'NUMPAD_6': 0x66,
        'NUMPAD_7': 0x67,
        'NUMPAD_8': 0x68,
        'NUMPAD_9': 0x69,
        'MULTIPLY': 0x6a,
        'ADD': 0x6b,
        'SUBSTRACT': 0x6d,
        'DECIMAL': 0x6e,
        'DIVIDE': 0x6f,
        'F1': 0x70,
        'F2': 0x71,
        'F3': 0x72,
        'F4': 0x73,
        'F5': 0x74,
        'F6': 0x75,
        'F7': 0x76,
        'F8': 0x77,
        'F9': 0x78,
        'F10': 0x79,
        'F11': 0x7a,
        'F12': 0x7b,
        'SHIFT': 0x10,
        'CTRL': 0x11,
        'ALT': 0x12,
        'PLUS': 0xbb,
        'COMMA': 0xbc,
        'MINUS': 0xbd,
        'PERIOD': 0xbe
    };
    ig['Input'] = ig['Class']['extend']({
        'bindings': {},
        'actions': {},
        'presses': {},
        'locks': {},
        'delayedKeyup': {},
        'isUsingMouse': !0x1,
        'isUsingKeyboard': !0x1,
        'isUsingAccelerometer': !0x1,
        'mouse': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        },
        'initMouse': function() {
            if (!this['isUsingMouse']) {
                this['isUsingMouse'] = !0x0;
                var _0x53d719 = this['mousewheel']['bind'](this);
                ig['system']['canvas']['addEventListener']('mousewheel', _0x53d719, !0x1);
                ig['system']['canvas']['addEventListener']('DOMMouseScroll', _0x53d719, !0x1);
                ig['system']['canvas']['addEventListener']('contextmenu', this['contextmenu']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mousedown', this['keydown']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mouseup', this['keyup']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mousemove', this['mousemove']['bind'](this), !0x1);
                ig['ua']['touchDevice'] && (ig['system']['canvas']['addEventListener']('touchstart', this['keydown']['bind'](this), !0x1), 
				ig['system']['canvas']['addEventListener']('touchend', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerDown', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['style']['msTouchAction'] = 'none');
            }
        },
        'initKeyboard': function() {
            this['isUsingKeyboard'] || (this['isUsingKeyboard'] = !0x0, window['addEventListener']('keydown', this['keydown']['bind'](this), !0x1), window['addEventListener']('keyup', this['keyup']['bind'](this), !0x1));
        },
        'initAccelerometer': function() {
            this['isUsingAccelerometer'] || window['addEventListener']('devicemotion', this['devicemotion']['bind'](this), !0x1);
        },
        'mousewheel': function(_0x311719) {
            var _0x12d18a = this['bindings'][0x0 < (_0x311719['wheelDelta'] ? _0x311719['wheelDelta'] : -0x1 * _0x311719['detail']) ? ig['KEY']['MWHEEL_UP'] : ig['KEY']['MWHEEL_DOWN']];
            _0x12d18a && (this['actions'][_0x12d18a] = !0x0, this['presses'][_0x12d18a] = !0x0, this['delayedKeyup'][_0x12d18a] = !0x0, _0x311719['stopPropagation'](), _0x311719['preventDefault']());
        },
        'mousemove': function(_0x3425ee) {
            var _0xb55369 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0xb55369 = ig['system']['scale'] * (_0xb55369 / ig['system']['realWidth']),
                _0x1da84f = {
                    'left': 0x0,
                    'top': 0x0
                };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x1da84f = ig['system']['canvas']['getBoundingClientRect']());
            _0x3425ee = _0x3425ee['touches'] ? _0x3425ee['touches'][0x0] : _0x3425ee;
            this['mouse']['x'] = (_0x3425ee['clientX'] - _0x1da84f['left']) / _0xb55369;
            this['mouse']['y'] = (_0x3425ee['clientY'] - _0x1da84f['top']) / _0xb55369;
        },
        'contextmenu': function(_0x1124a6) {
            this['bindings'][ig['KEY']['MOUSE2']] && (_0x1124a6['stopPropagation'](), _0x1124a6['preventDefault']());
        },
        'keydown': function(_0x4f926b) {
            var _0x5a9a20 = _0x4f926b['target']['tagName'];
            if (!('INPUT' == _0x5a9a20 || 'TEXTAREA' == _0x5a9a20))
                if (_0x5a9a20 = 'keydown' == _0x4f926b['type'] ? _0x4f926b['keyCode'] : 0x2 == _0x4f926b['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], ('touchstart' == _0x4f926b['type'] || 'mousedown' == _0x4f926b['type']) && this['mousemove'](_0x4f926b), _0x5a9a20 = this['bindings'][_0x5a9a20]) this['actions'][_0x5a9a20] = !0x0, this['locks'][_0x5a9a20] || (this['presses'][_0x5a9a20] = !0x0, this['locks'][_0x5a9a20] = !0x0), _0x4f926b['stopPropagation'](), _0x4f926b['preventDefault']();
        },
        'keyup': function(_0x188c3f) {
            var _0x3a921b = _0x188c3f['target']['tagName'];
            if (!('INPUT' == _0x3a921b || 'TEXTAREA' == _0x3a921b))
                if (_0x3a921b = this['bindings']['keyup' == _0x188c3f['type'] ? _0x188c3f['keyCode'] : 0x2 == _0x188c3f['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) this['delayedKeyup'][_0x3a921b] = !0x0, _0x188c3f['stopPropagation'](), _0x188c3f['preventDefault']();
        },
        'devicemotion': function(_0x30fb69) {
            this['accel'] = _0x30fb69['accelerationIncludingGravity'];
        },
        'bind': function(_0x1850ba, _0x5b78d5) {
            0x0 > _0x1850ba ? this['initMouse']() : 0x0 < _0x1850ba && this['initKeyboard']();
            this['bindings'][_0x1850ba] = _0x5b78d5;
        },
        'bindTouch': function(_0x14acce, _0x521661) {
            var _0x5c32a5 = ig['$'](_0x14acce),
                _0x1c8856 = this;
            _0x5c32a5['addEventListener']('touchstart', function(_0x33fdf8) {
                _0x1c8856['touchStart'](_0x33fdf8, _0x521661);
            }, !0x1);
            _0x5c32a5['addEventListener']('touchend', function(_0x4f87d2) {
                _0x1c8856['touchEnd'](_0x4f87d2, _0x521661);
            }, !0x1);
            _0x5c32a5['addEventListener']('MSPointerDown', function(_0x2e8a10) {
                _0x1c8856['touchStart'](_0x2e8a10, _0x521661);
            }, !0x1);
            _0x5c32a5['addEventListener']('MSPointerUp', function(_0x58566c) {
                _0x1c8856['touchEnd'](_0x58566c, _0x521661);
            }, !0x1);
        },
        'unbind': function(_0x451637) {
            this['delayedKeyup'][this['bindings'][_0x451637]] = !0x0;
            this['bindings'][_0x451637] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {};
            this['actions'] = {};
            this['presses'] = {};
            this['locks'] = {};
            this['delayedKeyup'] = {};
        },
        'state': function(_0x1ea040) {
            return this['actions'][_0x1ea040];
        },
        'pressed': function(_0xf363d9) {
            return this['presses'][_0xf363d9];
        },
        'released': function(_0x39067a) {
            return !!this['delayedKeyup'][_0x39067a];
        },
        'clearPressed': function() {
            for (var _0x20c52e in this['delayedKeyup']) this['actions'][_0x20c52e] = !0x1, this['locks'][_0x20c52e] = !0x1;
            this['delayedKeyup'] = {};
            this['presses'] = {};
        },
        'touchStart': function(_0x7c58a, _0x2ff100) {
            this['actions'][_0x2ff100] = !0x0;
            this['presses'][_0x2ff100] = !0x0;
            _0x7c58a['stopPropagation']();
            _0x7c58a['preventDefault']();
            return !0x1;
        },
        'touchEnd': function(_0x3e4916, _0x56e5eb) {
            this['delayedKeyup'][_0x56e5eb] = !0x0;
            _0x3e4916['stopPropagation']();
            _0x3e4916['preventDefault']();
            return !0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.impact')['requires']('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound')['defines'](function() {
    ig['main'] = function(_0x1cbd01, _0x208600, _0x2efb64, _0x3c94c5, _0x401780, _0x5584b5, _0x589646) {
        ig['system'] = new ig['System'](_0x1cbd01, _0x2efb64, _0x3c94c5, _0x401780, _0x5584b5 || 0x1);
        ig['input'] = new ig['Input']();
        ig['soundManager'] = new ig['SoundManager']();
        ig['music'] = new ig['Music']();
        ig['ready'] = !0x0;
        new(_0x589646 || ig['Loader'])(_0x208600, ig['resources'])['load']();
    };
});
ig['baked'] = !0x0;
ig['module']('impact.animation')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['AnimationSheet'] = ig['Class']['extend']({
        'width': 0x8,
        'height': 0x8,
        'image': null,
        'init': function(_0x3e718e, _0x3bf98f, _0x204fa7) {
            this['width'] = _0x3bf98f;
            this['height'] = _0x204fa7;
            this['image'] = new ig['Image'](_0x3e718e);
        }
    });
    ig['Animation'] = ig['Class']['extend']({
        'sheet': null,
        'timer': null,
        'sequence': [],
        'flip': {
            'x': !0x1,
            'y': !0x1
        },
        'pivot': {
            'x': 0x0,
            'y': 0x0
        },
        'frame': 0x0,
        'tile': 0x0,
        'loopCount': 0x0,
        'alpha': 0x1,
        'angle': 0x0,
        'init': function(_0x124d1d, _0x175d85, _0xfc3988, _0x43071f) {
            this['sheet'] = _0x124d1d;
            this['pivot'] = {
                'x': _0x124d1d['width'] / 0x2,
                'y': _0x124d1d['height'] / 0x2
            };
            this['timer'] = new ig['Timer']();
            this['frameTime'] = _0x175d85;
            this['sequence'] = _0xfc3988;
            this['stop'] = !!_0x43071f;
            this['tile'] = this['sequence'][0x0];
        },
        'rewind': function() {
            this['timer']['set']();
            this['frame'] = this['loopCount'] = 0x0;
            this['tile'] = this['sequence'][0x0];
            return this;
        },
        'gotoFrame': function(_0x393092) {
            this['timer']['set'](this['frameTime'] * -_0x393092 - 0.0001);
            this['update']();
        },
        'gotoRandomFrame': function() {
            this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
        },
        'update': function() {
            var _0x524917 = Math['floor'](this['timer']['delta']() / this['frameTime']);
            this['loopCount'] = Math['floor'](_0x524917 / this['sequence']['length']);
            this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0x524917 % this['sequence']['length'];
            this['tile'] = this['sequence'][this['frame']];
        },
        'draw': function(_0x59af5e, _0x3ddd0a) {
            var _0x5163f5 = Math['max'](this['sheet']['width'], this['sheet']['height']);
            _0x59af5e > ig['system']['width'] || (_0x3ddd0a > ig['system']['height'] || 0x0 > _0x59af5e + _0x5163f5 || 0x0 > _0x3ddd0a + _0x5163f5) || (0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']), 0x0 == this['angle'] ? this['sheet']['image']['drawTile'](_0x59af5e, _0x3ddd0a, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']) : (ig['system']['context']['save'](), ig['system']['context']['translate'](ig['system']['getDrawPos'](_0x59af5e + this['pivot']['x']), ig['system']['getDrawPos'](_0x3ddd0a + this['pivot']['y'])), ig['system']['context']['rotate'](this['angle']), this['sheet']['image']['drawTile'](-this['pivot']['x'], -this['pivot']['y'], this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']), ig['system']['context']['restore']()), 0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1));
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.entity')['requires']('impact.animation', 'impact.impact')['defines'](function() {
    ig['Entity'] = ig['Class']['extend']({
        'id': 0x0,
        'settings': {},
        'size': {
            'x': 0x10,
            'y': 0x10
        },
        'offset': {
            'x': 0x0,
            'y': 0x0
        },
        'pos': {
            'x': 0x0,
            'y': 0x0
        },
        'last': {
            'x': 0x0,
            'y': 0x0
        },
        'vel': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0
        },
        'friction': {
            'x': 0x0,
            'y': 0x0
        },
        'maxVel': {
            'x': 0x64,
            'y': 0x64
        },
        'zIndex': 0x0,
        'gravityFactor': 0x1,
        'standing': !0x1,
        'bounciness': 0x0,
        'minBounceVelocity': 0x28,
        'anims': {},
        'animSheet': null,
        'currentAnim': null,
        'health': 0xa,
        'type': 0x0,
        'checkAgainst': 0x0,
        'collides': 0x0,
        '_killed': !0x1,
        'slopeStanding': {
            'min': 0x2c['toRad'](),
            'max': 0x88['toRad']()
        },
        'init': function(_0xf4573e, _0x407ccb, _0x214f63) {
            this['id'] = ++ig['Entity']['_lastId'];
            this['pos']['x'] = this['last']['x'] = _0xf4573e;
            this['pos']['y'] = this['last']['y'] = _0x407ccb;
            ig['merge'](this, _0x214f63);
        },
        'reset': function(_0x582a6b, _0x4f9db6, _0x32f2e9) {
            var _0x4bcdad = this['constructor']['prototype'];
            this['pos']['x'] = _0x582a6b;
            this['pos']['y'] = _0x4f9db6;
            this['last']['x'] = _0x582a6b;
            this['last']['y'] = _0x4f9db6;
            this['vel']['x'] = _0x4bcdad['vel']['x'];
            this['vel']['y'] = _0x4bcdad['vel']['y'];
            this['accel']['x'] = _0x4bcdad['accel']['x'];
            this['accel']['y'] = _0x4bcdad['accel']['y'];
            this['health'] = _0x4bcdad['health'];
            this['_killed'] = _0x4bcdad['_killed'];
            this['standing'] = _0x4bcdad['standing'];
            this['type'] = _0x4bcdad['type'];
            this['checkAgainst'] = _0x4bcdad['checkAgainst'];
            this['collides'] = _0x4bcdad['collides'];
            ig['merge'](this, _0x32f2e9);
        },
        'addAnim': function(_0x3cee1e, _0x53963c, _0x3f9c5d, _0x2e9b9c) {
            if (!this['animSheet']) throw 'No animSheet to add the animation ' + _0x3cee1e + ' to.';
            _0x53963c = new ig['Animation'](this['animSheet'], _0x53963c, _0x3f9c5d, _0x2e9b9c);
            this['anims'][_0x3cee1e] = _0x53963c;
            this['currentAnim'] || (this['currentAnim'] = _0x53963c);
            return _0x53963c;
        },
        'update': function() {
            this['last']['x'] = this['pos']['x'];
            this['last']['y'] = this['pos']['y'];
            this['vel']['y'] += ig['game']['gravity'] * ig['system']['tick'] * this['gravityFactor'];
            this['vel']['x'] = this['getNewVelocity'](this['vel']['x'], this['accel']['x'], this['friction']['x'], this['maxVel']['x']);
            this['vel']['y'] = this['getNewVelocity'](this['vel']['y'], this['accel']['y'], this['friction']['y'], this['maxVel']['y']);
            var _0x346a3a = ig['game']['collisionMap']['trace'](this['pos']['x'], this['pos']['y'], this['vel']['x'] * ig['system']['tick'], this['vel']['y'] * ig['system']['tick'], this['size']['x'], this['size']['y']);
            this['handleMovementTrace'](_0x346a3a);
            this['currentAnim'] && this['currentAnim']['update']();
        },
        'getNewVelocity': function(_0x406d26, _0x549d73, _0xdd1ae7, _0x592da0) {
            return _0x549d73 ? (_0x406d26 + _0x549d73 * ig['system']['tick'])['limit'](-_0x592da0, _0x592da0) : _0xdd1ae7 ? (_0x549d73 = _0xdd1ae7 * ig['system']['tick'], 0x0 < _0x406d26 - _0x549d73 ? _0x406d26 - _0x549d73 : 0x0 > _0x406d26 + _0x549d73 ? _0x406d26 + _0x549d73 : 0x0) : _0x406d26['limit'](-_0x592da0, _0x592da0);
        },
        'handleMovementTrace': function(_0x411b9d) {
            this['standing'] = !0x1;
            _0x411b9d['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
            _0x411b9d['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x411b9d['collision']['slope']) {
                var _0x5ef928 = _0x411b9d['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0x1e9a9c = this['vel']['x'] * _0x5ef928['nx'] + this['vel']['y'] * _0x5ef928['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x5ef928['nx'] * _0x1e9a9c) * this['bounciness'];
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x5ef928['ny'] * _0x1e9a9c) * this['bounciness'];
                } else _0x1e9a9c = (this['vel']['x'] * _0x5ef928['x'] + this['vel']['y'] * _0x5ef928['y']) / (_0x5ef928['x'] * _0x5ef928['x'] + _0x5ef928['y'] * _0x5ef928['y']), this['vel']['x'] = _0x5ef928['x'] * _0x1e9a9c, this['vel']['y'] = _0x5ef928['y'] * _0x1e9a9c, _0x5ef928 = Math['atan2'](_0x5ef928['x'], _0x5ef928['y']), _0x5ef928 > this['slopeStanding']['min'] && _0x5ef928 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos'] = _0x411b9d['pos'];
        },
        'draw': function() {
            this['currentAnim'] && this['currentAnim']['draw'](this['pos']['x'] - this['offset']['x'] - ig['game']['_rscreen']['x'], this['pos']['y'] - this['offset']['y'] - ig['game']['_rscreen']['y']);
        },
        'kill': function() {
            ig['game']['removeEntity'](this);
        },
        'receiveDamage': function(_0x53d63b) {
            this['health'] -= _0x53d63b;
            0x0 >= this['health'] && this['kill']();
        },
        'touches': function(_0x27ec12) {
            return !(this['pos']['x'] >= _0x27ec12['pos']['x'] + _0x27ec12['size']['x'] || this['pos']['x'] + this['size']['x'] <= _0x27ec12['pos']['x'] || this['pos']['y'] >= _0x27ec12['pos']['y'] + _0x27ec12['size']['y'] || this['pos']['y'] + this['size']['y'] <= _0x27ec12['pos']['y']);
        },
        'distanceTo': function(_0x235c17) {
            var _0x3b9149 = this['pos']['x'] + this['size']['x'] / 0x2 - (_0x235c17['pos']['x'] + _0x235c17['size']['x'] / 0x2);
            _0x235c17 = this['pos']['y'] + this['size']['y'] / 0x2 - (_0x235c17['pos']['y'] + _0x235c17['size']['y'] / 0x2);
            return Math['sqrt'](_0x3b9149 * _0x3b9149 + _0x235c17 * _0x235c17);
        },
        'angleTo': function(_0x119ad9) {
            return Math['atan2'](_0x119ad9['pos']['y'] + _0x119ad9['size']['y'] / 0x2 - (this['pos']['y'] + this['size']['y'] / 0x2), _0x119ad9['pos']['x'] + _0x119ad9['size']['x'] / 0x2 - (this['pos']['x'] + this['size']['x'] / 0x2));
        },
        'check': function() {},
        'collideWith': function() {},
        'ready': function() {},
        'erase': function() {}
    });
    ig['Entity']['_lastId'] = 0x0;
    ig['Entity']['COLLIDES'] = {
        'NEVER': 0x0,
        'LITE': 0x1,
        'PASSIVE': 0x2,
        'ACTIVE': 0x4,
        'FIXED': 0x8
    };
    ig['Entity']['TYPE'] = {
        'NONE': 0x0,
        'A': 0x1,
        'B': 0x2,
        'BOTH': 0x3
    };
    ig['Entity']['checkPair'] = function(_0x2bf6d0, _0x227321) {
        _0x2bf6d0['checkAgainst'] & _0x227321['type'] && _0x2bf6d0['check'](_0x227321);
        _0x227321['checkAgainst'] & _0x2bf6d0['type'] && _0x227321['check'](_0x2bf6d0);
        _0x2bf6d0['collides'] && (_0x227321['collides'] && _0x2bf6d0['collides'] + _0x227321['collides'] > ig['Entity']['COLLIDES']['ACTIVE']) && ig['Entity']['solveCollision'](_0x2bf6d0, _0x227321);
    };
    ig['Entity']['solveCollision'] = function(_0x5ab817, _0x34c1f2) {
        var _0x52a8e1 = null;
        if (_0x5ab817['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x34c1f2['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x52a8e1 = _0x5ab817;
        else if (_0x34c1f2['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x5ab817['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x52a8e1 = _0x34c1f2;
        _0x5ab817['last']['x'] + _0x5ab817['size']['x'] > _0x34c1f2['last']['x'] && _0x5ab817['last']['x'] < _0x34c1f2['last']['x'] + _0x34c1f2['size']['x'] ? (_0x5ab817['last']['y'] < _0x34c1f2['last']['y'] ? ig['Entity']['seperateOnYAxis'](_0x5ab817, _0x34c1f2, _0x52a8e1) : ig['Entity']['seperateOnYAxis'](_0x34c1f2, _0x5ab817, _0x52a8e1), _0x5ab817['collideWith'](_0x34c1f2, 'y'), _0x34c1f2['collideWith'](_0x5ab817, 'y')) : _0x5ab817['last']['y'] + _0x5ab817['size']['y'] > _0x34c1f2['last']['y'] && _0x5ab817['last']['y'] < _0x34c1f2['last']['y'] + _0x34c1f2['size']['y'] && (_0x5ab817['last']['x'] < _0x34c1f2['last']['x'] ? ig['Entity']['seperateOnXAxis'](_0x5ab817, _0x34c1f2, _0x52a8e1) : ig['Entity']['seperateOnXAxis'](_0x34c1f2, _0x5ab817, _0x52a8e1), _0x5ab817['collideWith'](_0x34c1f2, 'x'), _0x34c1f2['collideWith'](_0x5ab817, 'x'));
    };
    ig['Entity']['seperateOnXAxis'] = function(_0x315f04, _0x53f0bb, _0x5bc12d) {
        var _0x43f9e3 = _0x315f04['pos']['x'] + _0x315f04['size']['x'] - _0x53f0bb['pos']['x'];
        _0x5bc12d ? (_0x5bc12d['vel']['x'] = -_0x5bc12d['vel']['x'] * _0x5bc12d['bounciness'] + (_0x315f04 === _0x5bc12d ? _0x53f0bb : _0x315f04)['vel']['x'], _0x53f0bb = ig['game']['collisionMap']['trace'](_0x5bc12d['pos']['x'], _0x5bc12d['pos']['y'], _0x5bc12d == _0x315f04 ? -_0x43f9e3 : _0x43f9e3, 0x0, _0x5bc12d['size']['x'], _0x5bc12d['size']['y']), _0x5bc12d['pos']['x'] = _0x53f0bb['pos']['x']) : (_0x5bc12d = (_0x315f04['vel']['x'] - _0x53f0bb['vel']['x']) / 0x2, _0x315f04['vel']['x'] = -_0x5bc12d, _0x53f0bb['vel']['x'] = _0x5bc12d, _0x5bc12d = ig['game']['collisionMap']['trace'](_0x315f04['pos']['x'], _0x315f04['pos']['y'], -_0x43f9e3 / 0x2, 0x0, _0x315f04['size']['x'], _0x315f04['size']['y']), _0x315f04['pos']['x'] = Math['floor'](_0x5bc12d['pos']['x']), _0x315f04 = ig['game']['collisionMap']['trace'](_0x53f0bb['pos']['x'], _0x53f0bb['pos']['y'], _0x43f9e3 / 0x2, 0x0, _0x53f0bb['size']['x'], _0x53f0bb['size']['y']), _0x53f0bb['pos']['x'] = Math['ceil'](_0x315f04['pos']['x']));
    };
    ig['Entity']['seperateOnYAxis'] = function(_0x20d4bd, _0x237c2c, _0x59f2a2) {
        var _0x88174f = _0x20d4bd['pos']['y'] + _0x20d4bd['size']['y'] - _0x237c2c['pos']['y'];
        if (_0x59f2a2) {
            _0x237c2c = _0x20d4bd === _0x59f2a2 ? _0x237c2c : _0x20d4bd;
            _0x59f2a2['vel']['y'] = -_0x59f2a2['vel']['y'] * _0x59f2a2['bounciness'] + _0x237c2c['vel']['y'];
            var _0x31b056 = 0x0;
            _0x59f2a2 == _0x20d4bd && Math['abs'](_0x59f2a2['vel']['y'] - _0x237c2c['vel']['y']) < _0x59f2a2['minBounceVelocity'] && (_0x59f2a2['standing'] = !0x0, _0x31b056 = _0x237c2c['vel']['x'] * ig['system']['tick']);
            _0x20d4bd = ig['game']['collisionMap']['trace'](_0x59f2a2['pos']['x'], _0x59f2a2['pos']['y'], _0x31b056, _0x59f2a2 == _0x20d4bd ? -_0x88174f : _0x88174f, _0x59f2a2['size']['x'], _0x59f2a2['size']['y']);
            _0x59f2a2['pos']['y'] = _0x20d4bd['pos']['y'];
            _0x59f2a2['pos']['x'] = _0x20d4bd['pos']['x'];
        } else ig['game']['gravity'] && (_0x237c2c['standing'] || 0x0 < _0x20d4bd['vel']['y']) ? (_0x59f2a2 = ig['game']['collisionMap']['trace'](_0x20d4bd['pos']['x'], _0x20d4bd['pos']['y'], 0x0, -(_0x20d4bd['pos']['y'] + _0x20d4bd['size']['y'] - _0x237c2c['pos']['y']), _0x20d4bd['size']['x'], _0x20d4bd['size']['y']), _0x20d4bd['pos']['y'] = _0x59f2a2['pos']['y'], 0x0 < _0x20d4bd['bounciness'] && _0x20d4bd['vel']['y'] > _0x20d4bd['minBounceVelocity'] ? _0x20d4bd['vel']['y'] *= -_0x20d4bd['bounciness'] : (_0x20d4bd['standing'] = !0x0, _0x20d4bd['vel']['y'] = 0x0)) : (_0x59f2a2 = (_0x20d4bd['vel']['y'] - _0x237c2c['vel']['y']) / 0x2, _0x20d4bd['vel']['y'] = -_0x59f2a2, _0x237c2c['vel']['y'] = _0x59f2a2, _0x31b056 = _0x237c2c['vel']['x'] * ig['system']['tick'], _0x59f2a2 = ig['game']['collisionMap']['trace'](_0x20d4bd['pos']['x'], _0x20d4bd['pos']['y'], _0x31b056, -_0x88174f / 0x2, _0x20d4bd['size']['x'], _0x20d4bd['size']['y']), _0x20d4bd['pos']['y'] = _0x59f2a2['pos']['y'], _0x20d4bd = ig['game']['collisionMap']['trace'](_0x237c2c['pos']['x'], _0x237c2c['pos']['y'], 0x0, _0x88174f / 0x2, _0x237c2c['size']['x'], _0x237c2c['size']['y']), _0x237c2c['pos']['y'] = _0x20d4bd['pos']['y']);
    };
});
ig['baked'] = !0x0;
ig['module']('impact.map')['defines'](function() {
    ig['Map'] = ig['Class']['extend']({
        'tilesize': 0x8,
        'width': 0x1,
        'height': 0x1,
        'data': [
            []
        ],
        'name': null,
        'init': function(_0x139aaf, _0x4fc6bd) {
            this['tilesize'] = _0x139aaf;
            this['data'] = _0x4fc6bd;
            this['height'] = _0x4fc6bd['length'];
            this['width'] = _0x4fc6bd[0x0]['length'];
            this['pxWidth'] = this['width'] * this['tilesize'];
            this['pxHeight'] = this['height'] * this['tilesize'];
        },
        'getTile': function(_0x5f5986, _0x286380) {
            var _0x37ea94 = Math['floor'](_0x5f5986 / this['tilesize']),
                _0x5b2dab = Math['floor'](_0x286380 / this['tilesize']);
            return 0x0 <= _0x37ea94 && _0x37ea94 < this['width'] && 0x0 <= _0x5b2dab && _0x5b2dab < this['height'] ? this['data'][_0x5b2dab][_0x37ea94] : 0x0;
        },
        'setTile': function(_0x4cd8cc, _0x459193, _0xa711ad) {
            _0x4cd8cc = Math['floor'](_0x4cd8cc / this['tilesize']);
            _0x459193 = Math['floor'](_0x459193 / this['tilesize']);
            0x0 <= _0x4cd8cc && _0x4cd8cc < this['width'] && (0x0 <= _0x459193 && _0x459193 < this['height']) && (this['data'][_0x459193][_0x4cd8cc] = _0xa711ad);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.collision-map')['requires']('impact.map')['defines'](function() {
    ig['CollisionMap'] = ig['Map']['extend']({
        'lastSlope': 0x1,
        'tiledef': null,
        'init': function(_0x19099e, _0x9a4234, _0x2a6282) {
            this['parent'](_0x19099e, _0x9a4234);
            this['tiledef'] = _0x2a6282 || ig['CollisionMap']['defaultTileDef'];
            for (var _0x2abbdb in this['tiledef']) _0x2abbdb | 0x0 > this['lastSlope'] && (this['lastSlope'] = _0x2abbdb | 0x0);
        },
        'trace': function(_0x2c8d12, _0x510a16, _0x33b273, _0x44807d, _0x4c51c8, _0x44deea) {
            var _0x40a8c1 = {
                    'collision': {
                        'x': !0x1,
                        'y': !0x1,
                        'slope': !0x1
                    },
                    'pos': {
                        'x': _0x2c8d12,
                        'y': _0x510a16
                    },
                    'tile': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                _0x3d488a = Math['ceil'](Math['max'](Math['abs'](_0x33b273), Math['abs'](_0x44807d)) / this['tilesize']);
            if (0x1 < _0x3d488a)
                for (var _0x44e46f = _0x33b273 / _0x3d488a, _0x157c84 = _0x44807d / _0x3d488a, _0x36ac76 = 0x0; _0x36ac76 < _0x3d488a && (_0x44e46f || _0x157c84) && !(this['_traceStep'](_0x40a8c1, _0x2c8d12, _0x510a16, _0x44e46f, _0x157c84, _0x4c51c8, _0x44deea, _0x33b273, _0x44807d, _0x36ac76), _0x2c8d12 = _0x40a8c1['pos']['x'], _0x510a16 = _0x40a8c1['pos']['y'], _0x40a8c1['collision']['x'] && (_0x33b273 = _0x44e46f = 0x0), _0x40a8c1['collision']['y'] && (_0x44807d = _0x157c84 = 0x0), _0x40a8c1['collision']['slope']); _0x36ac76++);
            else this['_traceStep'](_0x40a8c1, _0x2c8d12, _0x510a16, _0x33b273, _0x44807d, _0x4c51c8, _0x44deea, _0x33b273, _0x44807d, 0x0);
            return _0x40a8c1;
        },
        '_traceStep': function(_0x66bbe8, _0x384701, _0x911645, _0x1632a1, _0x57816a, _0x548e8a, _0x1921db, _0x2bf9dc, _0x58a231, _0x305c1a) {
            _0x66bbe8['pos']['x'] += _0x1632a1;
            _0x66bbe8['pos']['y'] += _0x57816a;
            var _0x542165 = 0x0;
            if (_0x1632a1) {
                var _0x554459 = 0x0 < _0x1632a1 ? _0x548e8a : 0x0,
                    _0x4c4535 = 0x0 > _0x1632a1 ? this['tilesize'] : 0x0,
                    _0x542165 = Math['max'](Math['floor'](_0x911645 / this['tilesize']), 0x0),
                    _0x4efdf4 = Math['min'](Math['ceil']((_0x911645 + _0x1921db) / this['tilesize']), this['height']);
                _0x1632a1 = Math['floor']((_0x66bbe8['pos']['x'] + _0x554459) / this['tilesize']);
                var _0x502680 = Math['floor']((_0x384701 + _0x554459) / this['tilesize']);
                if (0x0 < _0x305c1a || _0x1632a1 == _0x502680 || 0x0 > _0x502680 || _0x502680 >= this['width']) _0x502680 = -0x1;
                if (0x0 <= _0x1632a1 && _0x1632a1 < this['width'])
                    for (var _0x14c0d1 = _0x542165; _0x14c0d1 < _0x4efdf4 && !(-0x1 != _0x502680 && (_0x542165 = this['data'][_0x14c0d1][_0x502680], 0x1 < _0x542165 && _0x542165 <= this['lastSlope'] && this['_checkTileDef'](_0x66bbe8, _0x542165, _0x384701, _0x911645, _0x2bf9dc, _0x58a231, _0x548e8a, _0x1921db, _0x502680, _0x14c0d1))); _0x14c0d1++)
                        if (_0x542165 = this['data'][_0x14c0d1][_0x1632a1], 0x1 == _0x542165 || _0x542165 > this['lastSlope'] || 0x1 < _0x542165 && this['_checkTileDef'](_0x66bbe8, _0x542165, _0x384701, _0x911645, _0x2bf9dc, _0x58a231, _0x548e8a, _0x1921db, _0x1632a1, _0x14c0d1)) {
                            if (0x1 < _0x542165 && _0x542165 <= this['lastSlope'] && _0x66bbe8['collision']['slope']) break;
                            _0x66bbe8['collision']['x'] = !0x0;
                            _0x66bbe8['tile']['x'] = _0x542165;
                            _0x384701 = _0x66bbe8['pos']['x'] = _0x1632a1 * this['tilesize'] - _0x554459 + _0x4c4535;
                            _0x2bf9dc = 0x0;
                            break;
                        }
            }
            if (_0x57816a) {
                _0x554459 = 0x0 < _0x57816a ? _0x1921db : 0x0;
                _0x57816a = 0x0 > _0x57816a ? this['tilesize'] : 0x0;
                _0x542165 = Math['max'](Math['floor'](_0x66bbe8['pos']['x'] / this['tilesize']), 0x0);
                _0x4c4535 = Math['min'](Math['ceil']((_0x66bbe8['pos']['x'] + _0x548e8a) / this['tilesize']), this['width']);
                _0x14c0d1 = Math['floor']((_0x66bbe8['pos']['y'] + _0x554459) / this['tilesize']);
                _0x4efdf4 = Math['floor']((_0x911645 + _0x554459) / this['tilesize']);
                if (0x0 < _0x305c1a || _0x14c0d1 == _0x4efdf4 || 0x0 > _0x4efdf4 || _0x4efdf4 >= this['height']) _0x4efdf4 = -0x1;
                if (0x0 <= _0x14c0d1 && _0x14c0d1 < this['height'])
                    for (_0x1632a1 = _0x542165; _0x1632a1 < _0x4c4535 && !(-0x1 != _0x4efdf4 && (_0x542165 = this['data'][_0x4efdf4][_0x1632a1], 0x1 < _0x542165 && _0x542165 <= this['lastSlope'] && this['_checkTileDef'](_0x66bbe8, _0x542165, _0x384701, _0x911645, _0x2bf9dc, _0x58a231, _0x548e8a, _0x1921db, _0x1632a1, _0x4efdf4))); _0x1632a1++)
                        if (_0x542165 = this['data'][_0x14c0d1][_0x1632a1], 0x1 == _0x542165 || _0x542165 > this['lastSlope'] || 0x1 < _0x542165 && this['_checkTileDef'](_0x66bbe8, _0x542165, _0x384701, _0x911645, _0x2bf9dc, _0x58a231, _0x548e8a, _0x1921db, _0x1632a1, _0x14c0d1)) {
                            if (0x1 < _0x542165 && _0x542165 <= this['lastSlope'] && _0x66bbe8['collision']['slope']) break;
                            _0x66bbe8['collision']['y'] = !0x0;
                            _0x66bbe8['tile']['y'] = _0x542165;
                            _0x66bbe8['pos']['y'] = _0x14c0d1 * this['tilesize'] - _0x554459 + _0x57816a;
                            break;
                        }
            }
        },
        '_checkTileDef': function(_0x53d4c1, _0x405f9f, _0x870899, _0xcdf670, _0x4cf9e1, _0x5bc8fb, _0x2e5731, _0x2f95a4, _0x135131, _0x2b38b4) {
            var _0x357da7 = this['tiledef'][_0x405f9f];
            if (!_0x357da7) return !0x1;
            _0x405f9f = (_0x357da7[0x2] - _0x357da7[0x0]) * this['tilesize'];
            var _0x3c89b1 = (_0x357da7[0x3] - _0x357da7[0x1]) * this['tilesize'],
                _0x188220 = _0x357da7[0x4];
            _0x2e5731 = _0x870899 + _0x4cf9e1 + (0x0 > _0x3c89b1 ? _0x2e5731 : 0x0) - (_0x135131 + _0x357da7[0x0]) * this['tilesize'];
            _0x2f95a4 = _0xcdf670 + _0x5bc8fb + (0x0 < _0x405f9f ? _0x2f95a4 : 0x0) - (_0x2b38b4 + _0x357da7[0x1]) * this['tilesize'];
            if (0x0 < _0x405f9f * _0x2f95a4 - _0x3c89b1 * _0x2e5731) {
                if (0x0 > _0x4cf9e1 * -_0x3c89b1 + _0x5bc8fb * _0x405f9f) return _0x188220;
                _0x135131 = Math['sqrt'](_0x405f9f * _0x405f9f + _0x3c89b1 * _0x3c89b1);
                _0x2b38b4 = _0x3c89b1 / _0x135131;
                _0x135131 = -_0x405f9f / _0x135131;
                var _0x527d8b = _0x2e5731 * _0x2b38b4 + _0x2f95a4 * _0x135131,
                    _0x357da7 = _0x2b38b4 * _0x527d8b,
                    _0x527d8b = _0x135131 * _0x527d8b;
                if (_0x357da7 * _0x357da7 + _0x527d8b * _0x527d8b >= _0x4cf9e1 * _0x4cf9e1 + _0x5bc8fb * _0x5bc8fb) return _0x188220 || 0.5 > _0x405f9f * (_0x2f95a4 - _0x5bc8fb) - _0x3c89b1 * (_0x2e5731 - _0x4cf9e1);
                _0x53d4c1['pos']['x'] = _0x870899 + _0x4cf9e1 - _0x357da7;
                _0x53d4c1['pos']['y'] = _0xcdf670 + _0x5bc8fb - _0x527d8b;
                _0x53d4c1['collision']['slope'] = {
                    'x': _0x405f9f,
                    'y': _0x3c89b1,
                    'nx': _0x2b38b4,
                    'ny': _0x135131
                };
                return !0x0;
            }
            return !0x1;
        }
    });
    var _0xb57067 = 0x1 / 0x3,
        _0x3e5be1 = 0x2 / 0x3;
    ig['CollisionMap']['defaultTileDef'] = {
        5: [0x0, 0x1, 0x1, _0x3e5be1, !0x0],
        6: [0x0, _0x3e5be1, 0x1, _0xb57067, !0x0],
        7: [0x0, _0xb57067, 0x1, 0x0, !0x0],
        3: [0x0, 0x1, 0x1, 0.5, !0x0],
        4: [0x0, 0.5, 0x1, 0x0, !0x0],
        2: [0x0, 0x1, 0x1, 0x0, !0x0],
        10: [0.5, 0x1, 0x1, 0x0, !0x0],
        21: [0x0, 0x1, 0.5, 0x0, !0x0],
        32: [_0x3e5be1, 0x1, 0x1, 0x0, !0x0],
        43: [_0xb57067, 0x1, _0x3e5be1, 0x0, !0x0],
        54: [0x0, 0x1, _0xb57067, 0x0, !0x0],
        27: [0x0, 0x0, 0x1, _0xb57067, !0x0],
        28: [0x0, _0xb57067, 0x1, _0x3e5be1, !0x0],
        29: [0x0, _0x3e5be1, 0x1, 0x1, !0x0],
        25: [0x0, 0x0, 0x1, 0.5, !0x0],
        26: [0x0, 0.5, 0x1, 0x1, !0x0],
        24: [0x0, 0x0, 0x1, 0x1, !0x0],
        11: [0x0, 0x0, 0.5, 0x1, !0x0],
        22: [0.5, 0x0, 0x1, 0x1, !0x0],
        33: [0x0, 0x0, _0xb57067, 0x1, !0x0],
        44: [_0xb57067, 0x0, _0x3e5be1, 0x1, !0x0],
        55: [_0x3e5be1, 0x0, 0x1, 0x1, !0x0],
        16: [0x1, _0xb57067, 0x0, 0x0, !0x0],
        17: [0x1, _0x3e5be1, 0x0, _0xb57067, !0x0],
        18: [0x1, 0x1, 0x0, _0x3e5be1, !0x0],
        14: [0x1, 0.5, 0x0, 0x0, !0x0],
        15: [0x1, 0x1, 0x0, 0.5, !0x0],
        13: [0x1, 0x1, 0x0, 0x0, !0x0],
        8: [0.5, 0x1, 0x0, 0x0, !0x0],
        19: [0x1, 0x1, 0.5, 0x0, !0x0],
        30: [_0xb57067, 0x1, 0x0, 0x0, !0x0],
        41: [_0x3e5be1, 0x1, _0xb57067, 0x0, !0x0],
        52: [0x1, 0x1, _0x3e5be1, 0x0, !0x0],
        38: [0x1, _0x3e5be1, 0x0, 0x1, !0x0],
        39: [0x1, _0xb57067, 0x0, _0x3e5be1, !0x0],
        40: [0x1, 0x0, 0x0, _0xb57067, !0x0],
        36: [0x1, 0.5, 0x0, 0x1, !0x0],
        37: [0x1, 0x0, 0x0, 0.5, !0x0],
        35: [0x1, 0x0, 0x0, 0x1, !0x0],
        9: [0x1, 0x0, 0.5, 0x1, !0x0],
        20: [0.5, 0x0, 0x0, 0x1, !0x0],
        31: [0x1, 0x0, _0x3e5be1, 0x1, !0x0],
        42: [_0x3e5be1, 0x0, _0xb57067, 0x1, !0x0],
        53: [_0xb57067, 0x0, 0x0, 0x1, !0x0],
        12: [0x0, 0x0, 0x1, 0x0, !0x1],
        23: [0x1, 0x1, 0x0, 0x1, !0x1],
        34: [0x1, 0x0, 0x1, 0x1, !0x1],
        45: [0x0, 0x1, 0x0, 0x0, !0x1]
    };
    ig['CollisionMap']['staticNoCollision'] = {
        'trace': function(_0x331715, _0x2fda24, _0x535c60, _0x4dd71c) {
            return {
                'collision': {
                    'x': !0x1,
                    'y': !0x1,
                    'slope': !0x1
                },
                'pos': {
                    'x': _0x331715 + _0x535c60,
                    'y': _0x2fda24 + _0x4dd71c
                },
                'tile': {
                    'x': 0x0,
                    'y': 0x0
                }
            };
        }
    };
});
ig['baked'] = !0x0;
ig['module']('impact.background-map')['requires']('impact.map', 'impact.image')['defines'](function() {
    ig['BackgroundMap'] = ig['Map']['extend']({
        'tiles': null,
        'scroll': {
            'x': 0x0,
            'y': 0x0
        },
        'distance': 0x1,
        'repeat': !0x1,
        'tilesetName': '',
        'foreground': !0x1,
        'enabled': !0x0,
        'preRender': !0x1,
        'preRenderedChunks': null,
        'chunkSize': 0x200,
        'debugChunks': !0x1,
        'anims': {},
        'init': function(_0x110a41, _0x172349, _0x115565) {
            this['parent'](_0x110a41, _0x172349);
            this['setTileset'](_0x115565);
        },
        'setTileset': function(_0x5e1c6d) {
            this['tilesetName'] = _0x5e1c6d instanceof ig['Image'] ? _0x5e1c6d['path'] : _0x5e1c6d;
            this['tiles'] = new ig['Image'](this['tilesetName']);
            this['preRenderedChunks'] = null;
        },
        'setScreenPos': function(_0x412167, _0x52e425) {
            this['scroll']['x'] = _0x412167 / this['distance'];
            this['scroll']['y'] = _0x52e425 / this['distance'];
        },
        'preRenderMapToChunks': function() {
            var _0x210bd0 = this['width'] * this['tilesize'] * ig['system']['scale'],
                _0x4a6fd2 = this['height'] * this['tilesize'] * ig['system']['scale'];
            this['chunkSize'] = Math['min'](Math['max'](_0x210bd0, _0x4a6fd2), this['chunkSize']);
            var _0x380a37 = Math['ceil'](_0x210bd0 / this['chunkSize']),
                _0x23ebfe = Math['ceil'](_0x4a6fd2 / this['chunkSize']);
            this['preRenderedChunks'] = [];
            for (var _0x8deef1 = 0x0; _0x8deef1 < _0x23ebfe; _0x8deef1++) {
                this['preRenderedChunks'][_0x8deef1] = [];
                for (var _0x4dc68c = 0x0; _0x4dc68c < _0x380a37; _0x4dc68c++) this['preRenderedChunks'][_0x8deef1][_0x4dc68c] = this['preRenderChunk'](_0x4dc68c, _0x8deef1, _0x4dc68c == _0x380a37 - 0x1 ? _0x210bd0 - _0x4dc68c * this['chunkSize'] : this['chunkSize'], _0x8deef1 == _0x23ebfe - 0x1 ? _0x4a6fd2 - _0x8deef1 * this['chunkSize'] : this['chunkSize']);
            }
        },
        'preRenderChunk': function(_0x5ea22c, _0x55e5d7, _0x2f4139, _0x59f108) {
            var _0x42cce7 = _0x2f4139 / this['tilesize'] / ig['system']['scale'] + 0x1,
                _0x3c049a = _0x59f108 / this['tilesize'] / ig['system']['scale'] + 0x1,
                _0x2d54e5 = _0x5ea22c * this['chunkSize'] / ig['system']['scale'] % this['tilesize'],
                _0x15a1d7 = _0x55e5d7 * this['chunkSize'] / ig['system']['scale'] % this['tilesize'];
            _0x5ea22c = Math['floor'](_0x5ea22c * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
            _0x55e5d7 = Math['floor'](_0x55e5d7 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
            var _0x11b0b0 = ig['$new']('canvas');
            _0x11b0b0['width'] = _0x2f4139;
            _0x11b0b0['height'] = _0x59f108;
            _0x11b0b0['retinaResolutionEnabled'] = !0x1;
            _0x59f108 = _0x11b0b0['getContext']('2d');
            ig['System']['scaleMode'](_0x11b0b0, _0x59f108);
            _0x2f4139 = ig['system']['context'];
            ig['system']['context'] = _0x59f108;
            for (_0x59f108 = 0x0; _0x59f108 < _0x42cce7; _0x59f108++)
                for (var _0x5d2b78 = 0x0; _0x5d2b78 < _0x3c049a; _0x5d2b78++)
                    if (_0x59f108 + _0x5ea22c < this['width'] && _0x5d2b78 + _0x55e5d7 < this['height']) {
                        var _0x3c440c = this['data'][_0x5d2b78 + _0x55e5d7][_0x59f108 + _0x5ea22c];
                        _0x3c440c && this['tiles']['drawTile'](_0x59f108 * this['tilesize'] - _0x2d54e5, _0x5d2b78 * this['tilesize'] - _0x15a1d7, _0x3c440c - 0x1, this['tilesize']);
                    }
            ig['system']['context'] = _0x2f4139;
            return _0x11b0b0;
        },
        'draw': function() {
            this['tiles']['loaded'] && this['enabled'] && (this['preRender'] ? this['drawPreRendered']() : this['drawTiled']());
        },
        'drawPreRendered': function() {
            this['preRenderedChunks'] || this['preRenderMapToChunks']();
            var _0x123ca1 = ig['system']['getDrawPos'](this['scroll']['x']),
                _0x3f4c67 = ig['system']['getDrawPos'](this['scroll']['y']);
            if (this['repeat']) var _0x247e3b = this['width'] * this['tilesize'] * ig['system']['scale'],
                _0x123ca1 = (_0x123ca1 % _0x247e3b + _0x247e3b) % _0x247e3b,
                _0x247e3b = this['height'] * this['tilesize'] * ig['system']['scale'],
                _0x3f4c67 = (_0x3f4c67 % _0x247e3b + _0x247e3b) % _0x247e3b;
            var _0x247e3b = Math['max'](Math['floor'](_0x123ca1 / this['chunkSize']), 0x0),
                _0x2ded8d = Math['max'](Math['floor'](_0x3f4c67 / this['chunkSize']), 0x0),
                _0x1cd33 = Math['ceil']((_0x123ca1 + ig['system']['realWidth']) / this['chunkSize']),
                _0x4503fb = Math['ceil']((_0x3f4c67 + ig['system']['realHeight']) / this['chunkSize']),
                _0x353b0f = this['preRenderedChunks'][0x0]['length'],
                _0xde7d80 = this['preRenderedChunks']['length'];
            this['repeat'] || (_0x1cd33 = Math['min'](_0x1cd33, _0x353b0f), _0x4503fb = Math['min'](_0x4503fb, _0xde7d80));
            for (var _0x3efd69 = 0x0; _0x2ded8d < _0x4503fb; _0x2ded8d++) {
                for (var _0x471090 = 0x0, _0x3db73e = _0x247e3b; _0x3db73e < _0x1cd33; _0x3db73e++) {
                    var _0x1f8b23 = this['preRenderedChunks'][_0x2ded8d % _0xde7d80][_0x3db73e % _0x353b0f],
                        _0x33cc6f = -_0x123ca1 + _0x3db73e * this['chunkSize'] - _0x471090,
                        _0x793c58 = -_0x3f4c67 + _0x2ded8d * this['chunkSize'] - _0x3efd69;
                    ig['system']['context']['drawImage'](_0x1f8b23, _0x33cc6f, _0x793c58);
                    ig['Image']['drawCount']++;
                    this['debugChunks'] && (ig['system']['context']['strokeStyle'] = '#f0f', ig['system']['context']['strokeRect'](_0x33cc6f, _0x793c58, this['chunkSize'], this['chunkSize']));
                    this['repeat'] && (_0x1f8b23['width'] < this['chunkSize'] && _0x33cc6f + _0x1f8b23['width'] < ig['system']['realWidth']) && (_0x471090 += this['chunkSize'] - _0x1f8b23['width'], _0x1cd33++);
                }
                this['repeat'] && (_0x1f8b23['height'] < this['chunkSize'] && _0x793c58 + _0x1f8b23['height'] < ig['system']['realHeight']) && (_0x3efd69 += this['chunkSize'] - _0x1f8b23['height'], _0x4503fb++);
            }
        },
        'drawTiled': function() {
            for (var _0x579e81 = 0x0, _0x5e1de9 = null, _0x1c8a95 = (this['scroll']['x'] / this['tilesize'])['toInt'](), _0x3d123f = (this['scroll']['y'] / this['tilesize'])['toInt'](), _0x599511 = this['scroll']['x'] % this['tilesize'], _0x316859 = this['scroll']['y'] % this['tilesize'], _0x3cc86a = -_0x599511 - this['tilesize'], _0x599511 = ig['system']['width'] + this['tilesize'] - _0x599511, _0x3a4d1b = ig['system']['height'] + this['tilesize'] - _0x316859, _0x428b8f = -0x1, _0x316859 = -_0x316859 - this['tilesize']; _0x316859 < _0x3a4d1b; _0x428b8f++, _0x316859 += this['tilesize']) {
                var _0x428bf6 = _0x428b8f + _0x3d123f;
                if (_0x428bf6 >= this['height'] || 0x0 > _0x428bf6) {
                    if (!this['repeat']) continue;
                    _0x428bf6 = (_0x428bf6 % this['height'] + this['height']) % this['height'];
                }
                for (var _0x57cedf = -0x1, _0x4bf12c = _0x3cc86a; _0x4bf12c < _0x599511; _0x57cedf++, _0x4bf12c += this['tilesize']) {
                    _0x579e81 = _0x57cedf + _0x1c8a95;
                    if (_0x579e81 >= this['width'] || 0x0 > _0x579e81) {
                        if (!this['repeat']) continue;
                        _0x579e81 = (_0x579e81 % this['width'] + this['width']) % this['width'];
                    }
                    if (_0x579e81 = this['data'][_0x428bf6][_0x579e81])(_0x5e1de9 = this['anims'][_0x579e81 - 0x1]) ? _0x5e1de9['draw'](_0x4bf12c, _0x316859) : this['tiles']['drawTile'](_0x4bf12c, _0x316859, _0x579e81 - 0x1, this['tilesize']);
                }
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.game')['requires']('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')['defines'](function() {
    ig['Game'] = ig['Class']['extend']({
        'clearColor': '#000000',
        'gravity': 0x0,
        'screen': {
            'x': 0x0,
            'y': 0x0
        },
        '_rscreen': {
            'x': 0x0,
            'y': 0x0
        },
        'entities': [],
        'namedEntities': {},
        'collisionMap': ig['CollisionMap']['staticNoCollision'],
        'backgroundMaps': [],
        'backgroundAnims': {},
        'autoSort': !0x1,
        'sortBy': null,
        'cellSize': 0x40,
        '_deferredKill': [],
        '_levelToLoad': null,
        '_doSortEntities': !0x1,
        'staticInstantiate': function() {
            this['sortBy'] = this['sortBy'] || ig['Game']['SORT']['Z_INDEX'];
            ig['game'] = this;
            return null;
        },
        'loadLevel': function(_0x38d0a9) {
            this['screen'] = {
                'x': 0x0,
                'y': 0x0
            };
            this['entities'] = [];
            this['namedEntities'] = {};
            for (var _0xa6048b = 0x0; _0xa6048b < _0x38d0a9['entities']['length']; _0xa6048b++) {
                var _0x233e8c = _0x38d0a9['entities'][_0xa6048b];
                this['spawnEntity'](_0x233e8c['type'], _0x233e8c['x'], _0x233e8c['y'], _0x233e8c['settings']);
            }
            this['sortEntities']();
            this['collisionMap'] = ig['CollisionMap']['staticNoCollision'];
            this['backgroundMaps'] = [];
            for (_0xa6048b = 0x0; _0xa6048b < _0x38d0a9['layer']['length']; _0xa6048b++)
                if (_0x233e8c = _0x38d0a9['layer'][_0xa6048b], 'collision' == _0x233e8c['name']) this['collisionMap'] = new ig['CollisionMap'](_0x233e8c['tilesize'], _0x233e8c['data']);
                else {
                    var _0x2a377c = new ig['BackgroundMap'](_0x233e8c['tilesize'], _0x233e8c['data'], _0x233e8c['tilesetName']);
                    _0x2a377c['anims'] = this['backgroundAnims'][_0x233e8c['tilesetName']] || {};
                    _0x2a377c['repeat'] = _0x233e8c['repeat'];
                    _0x2a377c['distance'] = _0x233e8c['distance'];
                    _0x2a377c['foreground'] = !!_0x233e8c['foreground'];
                    _0x2a377c['preRender'] = !!_0x233e8c['preRender'];
                    _0x2a377c['name'] = _0x233e8c['name'];
                    this['backgroundMaps']['push'](_0x2a377c);
                }
            for (_0xa6048b = 0x0; _0xa6048b < this['entities']['length']; _0xa6048b++) this['entities'][_0xa6048b]['ready']();
        },
        'loadLevelDeferred': function(_0x29b672) {
            this['_levelToLoad'] = _0x29b672;
        },
        'getMapByName': function(_0x132601) {
            if ('collision' == _0x132601) return this['collisionMap'];
            for (var _0x153feb = 0x0; _0x153feb < this['backgroundMaps']['length']; _0x153feb++)
                if (this['backgroundMaps'][_0x153feb]['name'] == _0x132601) return this['backgroundMaps'][_0x153feb];
            return null;
        },
        'getEntityByName': function(_0x3723bb) {
            return this['namedEntities'][_0x3723bb];
        },
        'getEntitiesByType': function(_0x1dd8c2) {
            _0x1dd8c2 = 'string' === typeof _0x1dd8c2 ? ig['global'][_0x1dd8c2] : _0x1dd8c2;
            for (var _0x24eddb = [], _0x45d457 = 0x0; _0x45d457 < this['entities']['length']; _0x45d457++) {
                var _0x53052f = this['entities'][_0x45d457];
                _0x53052f instanceof _0x1dd8c2 && !_0x53052f['_killed'] && _0x24eddb['push'](_0x53052f);
            }
            return _0x24eddb;
        },
        'spawnEntity': function(_0x38b61f, _0x344628, _0xc525d, _0x2cf257) {
            var _0x3f627c = 'string' === typeof _0x38b61f ? ig['global'][_0x38b61f] : _0x38b61f;
            if (!_0x3f627c) throw 'Can\x27t spawn entity of type ' + _0x38b61f;
            _0x38b61f = new _0x3f627c(_0x344628, _0xc525d, _0x2cf257 || {});
            this['entities']['push'](_0x38b61f);
            _0x38b61f['name'] && (this['namedEntities'][_0x38b61f['name']] = _0x38b61f);
            return _0x38b61f;
        },
        'sortEntities': function() {
            this['entities']['sort'](this['sortBy']);
        },
        'sortEntitiesDeferred': function() {
            this['_doSortEntities'] = !0x0;
        },
        'removeEntity': function(_0x1c55e3) {
            _0x1c55e3['name'] && delete this['namedEntities'][_0x1c55e3['name']];
            _0x1c55e3['_killed'] = !0x0;
            _0x1c55e3['type'] = ig['Entity']['TYPE']['NONE'];
            _0x1c55e3['checkAgainst'] = ig['Entity']['TYPE']['NONE'];
            _0x1c55e3['collides'] = ig['Entity']['COLLIDES']['NEVER'];
            this['_deferredKill']['push'](_0x1c55e3);
        },
        'run': function() {
            this['update']();
            this['draw']();
        },
        'update': function() {
            this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']), this['_levelToLoad'] = null);
            this['updateEntities']();
            this['checkEntities']();
            for (var _0x3e2357 = 0x0; _0x3e2357 < this['_deferredKill']['length']; _0x3e2357++) this['_deferredKill'][_0x3e2357]['erase'](), this['entities']['erase'](this['_deferredKill'][_0x3e2357]);
            this['_deferredKill'] = [];
            if (this['_doSortEntities'] || this['autoSort']) this['sortEntities'](), this['_doSortEntities'] = !0x1;
            for (var _0x39bd80 in this['backgroundAnims']) {
                var _0x3e2357 = this['backgroundAnims'][_0x39bd80],
                    _0x1d4340;
                for (_0x1d4340 in _0x3e2357) _0x3e2357[_0x1d4340]['update']();
            }
        },
        'updateEntities': function() {
            for (var _0x9064fb = 0x0; _0x9064fb < this['entities']['length']; _0x9064fb++) {
                var _0x101e88 = this['entities'][_0x9064fb];
                _0x101e88['_killed'] || _0x101e88['update']();
            }
        },
        'draw': function() {
            this['clearColor'] && ig['system']['clear'](this['clearColor']);
            this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'];
            this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
            var _0x17a601;
            for (_0x17a601 = 0x0; _0x17a601 < this['backgroundMaps']['length']; _0x17a601++) {
                var _0x282d98 = this['backgroundMaps'][_0x17a601];
                if (_0x282d98['foreground']) break;
                _0x282d98['setScreenPos'](this['screen']['x'], this['screen']['y']);
                _0x282d98['draw']();
            }
            this['drawEntities']();
            for (_0x17a601; _0x17a601 < this['backgroundMaps']['length']; _0x17a601++) _0x282d98 = this['backgroundMaps'][_0x17a601], _0x282d98['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x282d98['draw']();
        },
        'drawEntities': function() {
            for (var _0x24600a = 0x0; _0x24600a < this['entities']['length']; _0x24600a++) this['entities'][_0x24600a]['draw']();
        },
        'checkEntities': function() {
            for (var _0x979ede = {}, _0x2c9a04 = 0x0; _0x2c9a04 < this['entities']['length']; _0x2c9a04++) {
                var _0x153c1f = this['entities'][_0x2c9a04];
                if (!(_0x153c1f['type'] == ig['Entity']['TYPE']['NONE'] && _0x153c1f['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x153c1f['collides'] == ig['Entity']['COLLIDES']['NEVER']))
                    for (var _0x2ca68b = {}, _0x4e7f86 = Math['floor'](_0x153c1f['pos']['y'] / this['cellSize']), _0x11aeb4 = Math['floor']((_0x153c1f['pos']['x'] + _0x153c1f['size']['x']) / this['cellSize']) + 0x1, _0x40aed5 = Math['floor']((_0x153c1f['pos']['y'] + _0x153c1f['size']['y']) / this['cellSize']) + 0x1, _0x2af33a = Math['floor'](_0x153c1f['pos']['x'] / this['cellSize']); _0x2af33a < _0x11aeb4; _0x2af33a++)
                        for (var _0x2eca28 = _0x4e7f86; _0x2eca28 < _0x40aed5; _0x2eca28++)
                            if (_0x979ede[_0x2af33a])
                                if (_0x979ede[_0x2af33a][_0x2eca28]) {
                                    for (var _0x4499f4 = _0x979ede[_0x2af33a][_0x2eca28], _0x5bf4ff = 0x0; _0x5bf4ff < _0x4499f4['length']; _0x5bf4ff++) _0x153c1f['touches'](_0x4499f4[_0x5bf4ff]) && !_0x2ca68b[_0x4499f4[_0x5bf4ff]['id']] && (_0x2ca68b[_0x4499f4[_0x5bf4ff]['id']] = !0x0, ig['Entity']['checkPair'](_0x153c1f, _0x4499f4[_0x5bf4ff]));
                                    _0x4499f4['push'](_0x153c1f);
                                } else _0x979ede[_0x2af33a][_0x2eca28] = [_0x153c1f];
                else _0x979ede[_0x2af33a] = {}, _0x979ede[_0x2af33a][_0x2eca28] = [_0x153c1f];
            }
        }
    });
    ig['Game']['SORT'] = {
        'Z_INDEX': function(_0x5ef8ca, _0x3645e9) {
            return _0x5ef8ca['zIndex'] - _0x3645e9['zIndex'];
        },
        'POS_X': function(_0x23c41f, _0x57078f) {
            return _0x23c41f['pos']['x'] + _0x23c41f['size']['x'] - (_0x57078f['pos']['x'] + _0x57078f['size']['x']);
        },
        'POS_Y': function(_0x12a75d, _0x3b2e03) {
            return _0x12a75d['pos']['y'] + _0x12a75d['size']['y'] - (_0x3b2e03['pos']['y'] + _0x3b2e03['size']['y']);
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.user-agent-patch')['defines'](function() {
    ig['ua']['touchDevice'] = 'ontouchstart' in window || window['navigator']['msMaxTouchPoints'] || window['navigator']['maxTouchPoints'];
    ig['ua']['is_mac'] = 'MacIntel' === navigator['platform'];
    ig['ua']['iOS'] = ig['ua']['touchDevice'] && ig['ua']['is_mac'] || ig['ua']['iOS'];
    ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['mobile'];
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.webkit-image-smoothing-patch')['defines'](function() {
    ig['System'] && (ig['System']['SCALE'] = {
        'CRISP': function(_0x411c4b, _0x15cf93) {
            _0x15cf93['imageSmoothingEnabled'] = _0x15cf93['msImageSmoothingEnabled'] = _0x15cf93['mozImageSmoothingEnabled'] = _0x15cf93['oImageSmoothingEnabled'] = !0x1;
            _0x411c4b['style']['imageRendering'] = '-moz-crisp-edges';
            _0x411c4b['style']['imageRendering'] = '-o-crisp-edges';
            _0x411c4b['style']['imageRendering'] = '-webkit-optimize-contrast';
            _0x411c4b['style']['imageRendering'] = 'crisp-edges';
            _0x411c4b['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x515475, _0x141aae) {
            _0x141aae['imageSmoothingEnabled'] = _0x141aae['msImageSmoothingEnabled'] = _0x141aae['oImageSmoothingEnabled'] = !0x0;
            _0x515475['style']['imageRendering'] = '';
            _0x515475['style']['msInterpolationMode'] = '';
        }
    }, ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH']);
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.windowfocus-onMouseDown-patch')['requires']('impact.input')['defines'](function() {
    var _0x5b39fd = !0x1;
    try {
        _0x5b39fd = window['self'] !== window['top'], !0x1 === _0x5b39fd && (_0x5b39fd = 0x0 < window['frames']['length']);
    } catch (_0x446b89) {
        _0x5b39fd = !0x0;
    }
    ig['Input']['inject']({
        'keydown': function(_0x53b9e2) {
            var _0x44f423 = _0x53b9e2['target']['tagName'];
            if (!('INPUT' == _0x44f423 || 'TEXTAREA' == _0x44f423))
                if (_0x44f423 = 'keydown' == _0x53b9e2['type'] ? _0x53b9e2['keyCode'] : 0x2 == _0x53b9e2['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], _0x5b39fd && 0x0 > _0x44f423 && window['focus'](), ('touchstart' == _0x53b9e2['type'] || 'mousedown' == _0x53b9e2['type']) && this['mousemove'](_0x53b9e2), _0x44f423 = this['bindings'][_0x44f423]) this['actions'][_0x44f423] = !0x0, this['locks'][_0x44f423] || (this['presses'][_0x44f423] = !0x0, this['locks'][_0x44f423] = !0x0), _0x53b9e2['stopPropagation'](), _0x53b9e2['preventDefault']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.input-patch')['requires']('impact.input')['defines'](function() {
    ig['Input']['inject']({
        'mousemove': function(_0x55d004) {
            var _0x4ef9c3 = ig['system']['scale'] * (ig['system']['realWidth'] / ig['system']['realWidth']),
                _0x484542 = {
                    'left': 0x0,
                    'top': 0x0
                };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x484542 = ig['system']['canvas']['getBoundingClientRect']());
            _0x55d004 = _0x55d004['touches'] ? _0x55d004['touches'][0x0] : _0x55d004;
            this['mouse']['x'] = (_0x55d004['clientX'] - _0x484542['left']) / _0x4ef9c3;
            this['mouse']['y'] = (_0x55d004['clientY'] - _0x484542['top']) / _0x4ef9c3;
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x14ae34) {}
        },
        'keyup': function(_0x49dc7c) {
            var _0x41977f = _0x49dc7c['target']['tagName'];
            if (!('INPUT' == _0x41977f || 'TEXTAREA' == _0x41977f))
                if (_0x41977f = this['bindings']['keyup' == _0x49dc7c['type'] ? _0x49dc7c['keyCode'] : 0x2 == _0x49dc7c['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) {
                    this['delayedKeyup'][_0x41977f] = !0x0;
                    _0x49dc7c['stopPropagation']();
                    _0x49dc7c['preventDefault']();
                    if (ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
                    try {
                        ig['soundHandler']['unlockWebAudio']();
                    } catch (_0x391090) {}
                }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.font.font-info')['requires']('impact.impact')['defines'](function() {
    ig['FontInfo'] = ig['Class']['extend']({
        'fonts': [{
            'name': 'montserrat',
            'source': 'fonts/montserrat'
        }, {
            'name': 'fulboargenta',
            'source': 'fonts/fulbo-argenta'
        }],
        'init': function() {
            this['registerCssFont']();
        },
        'registerCssFont': function() {
            if (0x0 < this['fonts']['length']) {
                var _0x2a657b = document['createElement']('style');
                _0x2a657b['type'] = 'text/css';
                for (var _0x368dd3 = '', _0x52329b = 0x0; _0x52329b < this['fonts']['length']; _0x52329b++) var _0x54fcc5 = this['fonts'][_0x52329b],
                    _0x368dd3 = _0x368dd3 + ('@font-face {font-family: \x27' + _0x54fcc5['name'] + '\x27;src: url(\x27' + _0x54fcc5['source'] + '.eot\x27);src: url(\x27' + _0x54fcc5['source'] + '.eot?#iefix\x27) format(\x27embedded-opentype\x27),url(\x27' + _0x54fcc5['source'] + '.woff2\x27) format(\x27woff2\x27),url(\x27' + _0x54fcc5['source'] + '.woff\x27) format(\x27woff\x27),url(\x27' + _0x54fcc5['source'] + '.ttf\x27) format(\x27truetype\x27),url(\x27' + _0x54fcc5['source'] + '.svg#svgFontName\x27) format(\x27svg\x27)}');
                _0x2a657b['appendChild'](document['createTextNode'](_0x368dd3));
                document['head']['appendChild'](_0x2a657b);
            }
        },
        'isValid': function() {
            for (var _0x528ad7 = 0x0; _0x528ad7 < this['fonts']['length']; _0x528ad7++)
                if (!this['_isValidName'](this['fonts'][_0x528ad7]['source'])) return !0x1;
            return !0x0;
        },
        '_isValidName': function(_0x509792) {
            return -0x1 == _0x509792['search'](/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.font.font-loader')['requires']('impact.impact', 'plugins.font.font-info', 'impact.loader')['defines'](function() {
    ig['FontLoader'] = ig['Class']['extend']({
        'fontInfo': new ig['FontInfo'](),
        'onload': !0x1,
        'onerror': !0x1,
        'init': function(_0x2cd2f4, _0x18d99f) {
            this['onload'] = _0x2cd2f4;
            this['onerror'] = _0x18d99f;
        },
        'load': function() {
            this['fontInfo']['isValid']() ? this['_loadByLib']() : console['error']('Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path');
        },
        '_loadByLib': function() {
            for (var _0x2952e8 = [], _0x84ac90 = 0x0; _0x84ac90 < this['fontInfo']['fonts']['length']; _0x84ac90++) {
                var _0x1eb080 = new FontFaceObserver(this['fontInfo']['fonts'][_0x84ac90]['name']);
                _0x2952e8['push'](_0x1eb080['load']());
            }
            Promise['all'](_0x2952e8)['then'](this['onload'])['catch'](this['onerror']);
        }
    });
    ig['Loader']['inject']({
        'parentLoad': !0x1,
        'load': function() {
            this['parentLoad'] = this['parent'];
            new ig['FontLoader'](this['onFontLoad']['bind'](this), this['onFontError']['bind'](this))['load']();
        },
        'onFontLoad': function() {
            this['parentLoad']();
        },
        'onFontError': function() {
            console['error']('Font is not loaded');
            this['parentLoad']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.dom-handler')['defines'](function() {
    ig['DomHandler'] = ig['Class']['extend']({
        'JQUERYAVAILABLE': !0x1,
        'init': function() {
            this['JQUERYAVAILABLE'] = this['_jqueryAvailable']();
        },
        '_jqueryAvailable': function() {
            return 'undefined' !== typeof jQuery;
        },
        'addEvent': function(_0x3de2dd, _0x4e1c2e, _0x5695a9, _0x46f955) {
            if (this['JQUERYAVAILABLE']) _0x3de2dd['on'](_0x4e1c2e, _0x5695a9);
            else _0x3de2dd['addEventListener'](_0x4e1c2e, _0x5695a9, _0x46f955);
        },
        'create': function(_0x11b737) {
            return this['JQUERYAVAILABLE'] ? $('<' + _0x11b737 + '>') : ig['$new'](_0x11b737);
        },
        'getElementByClass': function(_0x45d86e) {
            return this['JQUERYAVAILABLE'] ? $('.' + _0x45d86e) : document['getElementsByClassName'](_0x45d86e);
        },
        'getElementById': function(_0x388079) {
            return this['JQUERYAVAILABLE'] ? 0x0 < $(_0x388079)['length'] ? $(_0x388079) : null : ig['$'](_0x388079);
        },
        'appendChild': function(_0x4835fb, _0x37da2d) {
            this['JQUERYAVAILABLE'] ? _0x4835fb['append'](_0x37da2d) : _0x4835fb['appendChild'](_0x37da2d);
        },
        'appendToBody': function(_0x56c7ef) {
            this['JQUERYAVAILABLE'] ? $('body')['append'](_0x56c7ef) : document['body']['appendChild'](_0x56c7ef);
        },
        'resize': function(_0x232622, _0x2f8f95, _0xaafb8f) {
            if (this['JQUERYAVAILABLE']) _0x232622['width'](_0x2f8f95['toFixed'](0x2)), _0x232622['height'](_0xaafb8f['toFixed'](0x2));
            else {
                var _0xe10be4 = _0x232622['style']['visibility'];
                _0x2f8f95 = 'width:' + _0x2f8f95['toFixed'](0x2) + 'px; height:' + _0xaafb8f['toFixed'](0x2) + 'px;';
                this['attr'](_0x232622, 'style', _0x2f8f95);
                _0x232622['style']['visibility'] = _0xe10be4;
            }
        },
        'resizeOffsetLeft': function(_0x136bda, _0x2ca506, _0x1b800f, _0x15a350) {
            if (this['JQUERYAVAILABLE']) _0x136bda['width'](_0x2ca506['toFixed'](0x2)), _0x136bda['height'](_0x1b800f['toFixed'](0x2)), _0x136bda['css']('left', _0x15a350);
            else {
                var _0x2ca98b = _0x136bda['style']['visibility'];
                _0x2ca506 = 'width:' + _0x2ca506['toFixed'](0x2) + 'px; height:' + _0x1b800f['toFixed'](0x2) + 'px; left: ' + _0x15a350['toFixed'](0x2) + 'px;';
                this['attr'](_0x136bda, 'style', _0x2ca506);
                _0x136bda['style']['visibility'] = _0x2ca98b;
            }
        },
        'resizeOffset': function(_0x2fe565, _0x20d741, _0x51b634, _0x3a446f, _0x4d1d69) {
            if (this['JQUERYAVAILABLE']) _0x2fe565['width'](_0x20d741['toFixed'](0x2)), _0x2fe565['height'](_0x51b634['toFixed'](0x2)), _0x2fe565['css']('left', _0x3a446f), _0x2fe565['css']('top', _0x4d1d69);
            else {
                var _0x439cb8 = _0x2fe565['style']['visibility'];
                _0x20d741 = 'width:' + _0x20d741['toFixed'](0x2) + 'px; height:' + _0x51b634['toFixed'](0x2) + 'px; left: ' + _0x3a446f['toFixed'](0x2) + 'px; top: ' + _0x4d1d69['toFixed'](0x2) + 'px;';
                this['attr'](_0x2fe565, 'style', _0x20d741);
                _0x2fe565['style']['visibility'] = _0x439cb8;
            }
        },
        'css': function(_0x1d27b4, _0x94ab36) {
            if (this['JQUERYAVAILABLE']) _0x1d27b4['css'](_0x94ab36);
            else {
                var _0x51a994 = '',
                    _0x10acc9;
                for (_0x10acc9 in _0x94ab36) _0x51a994 += _0x10acc9 + ':' + _0x94ab36[_0x10acc9] + ';';
                this['attr'](_0x1d27b4, 'style', _0x51a994);
            }
        },
        'getOffsets': function(_0x148a19) {
            return this['JQUERYAVAILABLE'] ? (_0x148a19 = _0x148a19['offset'](), {
                'left': _0x148a19['left'],
                'top': _0x148a19['top']
            }) : {
                'left': _0x148a19['offsetLeft'],
                'top': _0x148a19['offsetTop']
            };
        },
        'attr': function(_0x331706, _0x1b6ac1, _0x50a695) {
            if ('undefined' === typeof _0x50a695) return this['JQUERYAVAILABLE'] ? _0x331706['attr'](_0x1b6ac1) : _0x331706['getAttribute'](_0x1b6ac1);
            this['JQUERYAVAILABLE'] ? _0x331706['attr'](_0x1b6ac1, _0x50a695) : _0x331706['setAttribute'](_0x1b6ac1, _0x50a695);
        },
        'show': function(_0x10c510) {
            _0x10c510 && 'undefined' !== typeof _0x10c510 && (this['JQUERYAVAILABLE'] ? (_0x10c510['show'](), _0x10c510['css']('visibility', 'visible')) : _0x10c510 && (_0x10c510['style'] ? _0x10c510['style']['visibility'] = 'visible' : _0x10c510[0x0] && (_0x10c510[0x0]['style']['visibility'] = 'visible')));
        },
        'hide': function(_0x5d835e) {
            _0x5d835e && 'undefined' !== typeof _0x5d835e && (this['JQUERYAVAILABLE'] ? (_0x5d835e['hide'](), _0x5d835e['css']('visibility', 'hidden')) : _0x5d835e && (_0x5d835e['style'] ? _0x5d835e['style']['visibility'] = 'hidden' : _0x5d835e[0x0] && (_0x5d835e[0x0]['style']['visibility'] = 'hidden')));
        },
        'getQueryVariable': function(_0x3c5e82) {
            for (var _0x694e1d = window['location']['search']['substring'](0x1)['split']('&'), _0x1bc5ba = 0x0; _0x1bc5ba < _0x694e1d['length']; _0x1bc5ba++) {
                var _0x20be36 = _0x694e1d[_0x1bc5ba]['split']('=');
                if (decodeURIComponent(_0x20be36[0x0]) == _0x3c5e82) return decodeURIComponent(_0x20be36[0x1]);
            }
        },
        'forcedDeviceDetection': function() {
            var _0x338492 = this['getQueryVariable']('device');
            if (_0x338492) switch (_0x338492) {
                case 'mobile':
                    console['log']('serving mobile version ...');
                    ig['ua']['mobile'] = !0x0;
                    break;
                case 'desktop':
                    console['log']('serving desktop version ...');
                    ig['ua']['mobile'] = !0x1;
                    break;
                default:
                    console['log']('serving universal version ...');
            } else console['log']('serving universal version ...');
        },
        'forcedDeviceRotation': function() {
            var _0x2f99a8 = this['getQueryVariable']('force-rotate');
            if (_0x2f99a8) switch (_0x2f99a8) {
                case 'portrait':
                    console['log']('force rotate to portrait');
                    window['orientation'] = 0x0;
                    break;
                case 'landscape':
                    console['log']('force rotate to horizontal');
                    window['orientation'] = 0x5a;
                    break;
                default:
                    alert('wrong command/type in param force-rotate. Defaulting value to portrait'), window['orientation'] = 0x0;
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.data.vector')['defines'](function() {
    Vector2 = function(_0x48b05b, _0x36602b) {
        this['x'] = _0x48b05b || 0x0;
        this['y'] = _0x36602b || 0x0;
    };
    Vector2['prototype'] = {
        'valType': 'number',
        'neg': function() {
            this['x'] = -this['x'];
            this['y'] = -this['y'];
            return this;
        },
        'row': function(_0x423037) {
            typeof _0x423037 === this['valType'] && (this['y'] = _0x423037);
            return this['y'];
        },
        'col': function(_0x50c373) {
            typeof _0x50c373 === this['valType'] && (this['x'] = _0x50c373);
            return this['x'];
        },
        'add': function(_0x9acb0e) {
            _0x9acb0e instanceof Vector2 ? (this['x'] += _0x9acb0e['x'], this['y'] += _0x9acb0e['y']) : (this['x'] += _0x9acb0e, this['y'] += _0x9acb0e);
            return this;
        },
        'sub': function(_0x2bfde2) {
            _0x2bfde2 instanceof Vector2 ? (this['x'] -= _0x2bfde2['x'], this['y'] -= _0x2bfde2['y']) : (this['x'] -= _0x2bfde2, this['y'] -= _0x2bfde2);
            return this;
        },
        'mul': function(_0x1be7f7) {
            _0x1be7f7 instanceof Vector2 ? (this['x'] *= _0x1be7f7['x'], this['y'] *= _0x1be7f7['y']) : (this['x'] *= _0x1be7f7, this['y'] *= _0x1be7f7);
            return this;
        },
        'div': function(_0xdc8fcf) {
            _0xdc8fcf instanceof Vector2 ? (0x0 != _0xdc8fcf['x'] && (this['x'] /= _0xdc8fcf['x']), 0x0 != _0xdc8fcf['y'] && (this['y'] /= _0xdc8fcf['y'])) : 0x0 != _0xdc8fcf && (this['x'] /= _0xdc8fcf, this['y'] /= _0xdc8fcf);
            return this;
        },
        'equals': function(_0x42648c) {
            return this['x'] == _0x42648c['x'] && this['y'] == _0x42648c['y'];
        },
        'dot': function(_0x2c1e69) {
            return this['x'] * _0x2c1e69['x'] + this['y'] * _0x2c1e69['y'];
        },
        'cross': function(_0x283b63) {
            return this['x'] * _0x283b63['y'] - this['y'] * _0x283b63['x'];
        },
        'length': function() {
            return Math['sqrt'](this['dot'](this));
        },
        'norm': function() {
            return this['divide'](this['length']());
        },
        'min': function() {
            return Math['min'](this['x'], this['y']);
        },
        'max': function() {
            return Math['max'](this['x'], this['y']);
        },
        'toAngles': function() {
            return -Math['atan2'](-this['y'], this['x']);
        },
        'angleTo': function(_0x5087f6) {
            return Math['acos'](this['dot'](_0x5087f6) / (this['length']() * _0x5087f6['length']()));
        },
        'toArray': function(_0xa035f8) {
            return [this['x'], this['y']]['slice'](0x0, _0xa035f8 || 0x2);
        },
        'clone': function() {
            return new Vector2(this['x'], this['y']);
        },
        'set': function(_0x4c9fb6, _0x2d54a8) {
            this['x'] = _0x4c9fb6;
            this['y'] = _0x2d54a8;
            return this;
        },
        'unit': function() {
            var _0x11c53c = this['length']();
            if (0x0 < _0x11c53c) return new Vector2(this['x'] / _0x11c53c, this['y'] / _0x11c53c);
            throw 'Divide by 0 error in unitVector function of vector:' + this;
        },
        'turnRight': function() {
            var _0xf45a19 = this['x'];
            this['x'] = -this['y'];
            this['y'] = _0xf45a19;
            return this;
        },
        'turnLeft': function() {
            var _0x3d56fa = this['x'];
            this['x'] = this['y'];
            this['y'] = -_0x3d56fa;
            return this;
        },
        'rotate': function(_0x37c9ff) {
            var _0x2d05a1 = this['clone']();
            this['x'] = _0x2d05a1['x'] * Math['cos'](_0x37c9ff) - _0x2d05a1['y'] * Math['sin'](_0x37c9ff);
            this['y'] = _0x2d05a1['x'] * Math['sin'](_0x37c9ff) + _0x2d05a1['y'] * Math['cos'](_0x37c9ff);
            return this;
        }
    };
    Vector2['negative'] = function(_0xe70250) {
        return new Vector2(-_0xe70250['x'], -_0xe70250['y']);
    };
    Vector2['add'] = function(_0x3b779a, _0x344f37) {
        return _0x344f37 instanceof Vector2 ? new Vector2(_0x3b779a['x'] + _0x344f37['x'], _0x3b779a['y'] + _0x344f37['y']) : new Vector2(_0x3b779a['x'] + v, _0x3b779a['y'] + v);
    };
    Vector2['subtract'] = function(_0x153012, _0x4470f1) {
        return _0x4470f1 instanceof Vector2 ? new Vector2(_0x153012['x'] - _0x4470f1['x'], _0x153012['y'] - _0x4470f1['y']) : new Vector2(_0x153012['x'] - v, _0x153012['y'] - v);
    };
    Vector2['multiply'] = function(_0x57d586, _0x40802d) {
        return _0x40802d instanceof Vector2 ? new Vector2(_0x57d586['x'] * _0x40802d['x'], _0x57d586['y'] * _0x40802d['y']) : new Vector2(_0x57d586['x'] * v, _0x57d586['y'] * v);
    };
    Vector2['divide'] = function(_0x36f1ec, _0x5708b0) {
        return _0x5708b0 instanceof Vector2 ? new Vector2(_0x36f1ec['x'] / _0x5708b0['x'], _0x36f1ec['y'] / _0x5708b0['y']) : new Vector2(_0x36f1ec['x'] / v, _0x36f1ec['y'] / v);
    };
    Vector2['equals'] = function(_0x58f14e, _0x5dd8c4) {
        return _0x58f14e['x'] == _0x5dd8c4['x'] && _0x58f14e['y'] == _0x5dd8c4['y'];
    };
    Vector2['dot'] = function(_0x495804, _0x5356f8) {
        return _0x495804['x'] * _0x5356f8['x'] + _0x495804['y'] * _0x5356f8['y'];
    };
    Vector2['cross'] = function(_0xefa9d9, _0x54b746) {
        return _0xefa9d9['x'] * _0x54b746['y'] - _0xefa9d9['y'] * _0x54b746['x'];
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.size-handler')['requires']('plugins.data.vector')['defines'](function() {
    ig['SizeHandler'] = ig['Class']['extend']({
        'portraitMode': !0x1,
        'disableStretchToFitOnMobileFlag': !0x1,
        'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
        'enableScalingLimitsOnMobileFlag': !0x1,
        'minScalingOnMobile': 0x0,
        'maxScalingOnMobile': 0x1,
        'enableStretchToFitOnDesktopFlag': !0x1,
        'enableScalingLimitsOnDesktopFlag': !0x1,
        'minScalingOnDesktop': 0x0,
        'maxScalingOnDesktop': 0x1,
        'desktop': {
            'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
            'actualResolution': new Vector2(0x3c0, 0x21c)
        },
        'mobile': {
            'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
            'actualResolution': new Vector2(0x3c0, 0x21c)
        },
        'windowSize': new Vector2(window['innerWidth'], window['innerHeight']),
        'scaleRatioMultiplier': new Vector2(0x1, 0x1),
        'sizeRatio': new Vector2(0x1, 0x1),
        'scale': 0x1,
        'domHandler': null,
        'dynamicClickableEntityDivs': {},
        'coreDivsToResize': ['#canvas', '#play', '#orientate'],
        'adsToResize': {
            
        },
        'init': function(_0x4638b2) {
            this['domHandler'] = _0x4638b2;
            if ('undefined' === typeof _0x4638b2) throw 'undefined Dom Handler for Size Handler';
            this['sizeCalcs']();
            this['eventListenerSetup']();
            this['samsungFix']();
        },
        'sizeCalcs': function() {
            this['windowSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
            if (ig['ua']['mobile']) {
                this['mobile']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
                var _0x1d5f8a = new Vector2(this['mobile']['actualResolution']['x'], this['mobile']['actualResolution']['y']);
                this['scaleRatioMultiplier'] = new Vector2(this['mobile']['actualSize']['x'] / _0x1d5f8a['x'], this['mobile']['actualSize']['y'] / _0x1d5f8a['y']);
                if (this['disableStretchToFitOnMobileFlag']) {
                    var _0x4810df = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']);
                    this['enableScalingLimitsOnMobileFlag'] && (_0x4810df = _0x4810df['limit'](this['minScalingOnMobile'], this['maxScalingOnMobile']));
                    this['mobile']['actualSize']['x'] = _0x1d5f8a['x'] * _0x4810df;
                    this['mobile']['actualSize']['y'] = _0x1d5f8a['y'] * _0x4810df;
                    this['scaleRatioMultiplier']['x'] = _0x4810df;
                    this['scaleRatioMultiplier']['y'] = _0x4810df;
                } else this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1;
            } else this['desktop']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']), _0x1d5f8a = new Vector2(this['desktop']['actualResolution']['x'], this['desktop']['actualResolution']['y']), this['scaleRatioMultiplier'] = new Vector2(this['desktop']['actualSize']['x'] / _0x1d5f8a['x'], this['desktop']['actualSize']['y'] / _0x1d5f8a['y']), this['enableStretchToFitOnDesktopFlag'] ? (this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1) : (_0x4810df = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']), this['enableScalingLimitsOnDesktopFlag'] && (_0x4810df = _0x4810df['limit'](this['minScalingOnDesktop'], this['maxScalingOnDesktop'])), this['desktop']['actualSize']['x'] = _0x1d5f8a['x'] * _0x4810df, this['desktop']['actualSize']['y'] = _0x1d5f8a['y'] * _0x4810df, this['scaleRatioMultiplier']['x'] = _0x4810df, this['scaleRatioMultiplier']['y'] = _0x4810df);
        },
        'resizeLayers': function() {
            for (var _0x4983c9 = 0x0; _0x4983c9 < this['coreDivsToResize']['length']; _0x4983c9++) {
                var _0x4b0908 = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0x4983c9]);
                if (ig['ua']['mobile'])
                    if (this['disableStretchToFitOnMobileFlag']) {
                        var _0x5d2976 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['x'] / 0x2),
                            _0x3c4fba = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['y'] / 0x2);
                        0x0 > _0x5d2976 && (_0x5d2976 = 0x0);
                        0x0 > _0x3c4fba && (_0x3c4fba = 0x0);
                        ig['domHandler']['resizeOffset'](_0x4b0908, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']), _0x5d2976, _0x3c4fba);
                        var _0x1d5ce3 = !0x1;
                        if (_0x1d5ce3 = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'])
                            if (this['enableStretchToFitOnAntiPortraitModeFlag']) ig['domHandler']['resizeOffset'](_0x4b0908, Math['floor'](window['innerWidth']), Math['floor'](window['innerHeight']), 0x0, 0x0);
                            else {
                                var _0x1d5ce3 = new Vector2(window['innerWidth'] / this['mobile']['actualResolution']['y'], window['innerHeight'] / this['mobile']['actualResolution']['x']),
                                    _0x5d2976 = Math['min'](_0x1d5ce3['x'], _0x1d5ce3['y']),
                                    _0x1d5ce3 = this['mobile']['actualResolution']['y'] * _0x5d2976,
                                    _0x7123 = this['mobile']['actualResolution']['x'] * _0x5d2976,
                                    _0x5d2976 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - _0x1d5ce3 / 0x2),
                                    _0x3c4fba = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - _0x7123 / 0x2);
                                0x0 > _0x5d2976 && (_0x5d2976 = 0x0);
                                0x0 > _0x3c4fba && (_0x3c4fba = 0x0);
                                ig['domHandler']['resizeOffset'](_0x4b0908, Math['floor'](_0x1d5ce3), Math['floor'](_0x7123), _0x5d2976, _0x3c4fba);
                            }
                    } else ig['domHandler']['resize'](_0x4b0908, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']));
                else this['enableStretchToFitOnDesktopFlag'] ? ig['domHandler']['resize'](_0x4b0908, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y'])) : (_0x5d2976 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2), _0x3c4fba = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2), 0x0 > _0x5d2976 && (_0x5d2976 = 0x0), 0x0 > _0x3c4fba && (_0x3c4fba = 0x0), ig['domHandler']['resizeOffset'](_0x4b0908, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x5d2976, _0x3c4fba));
            }
            for (var _0x333dd2 in this['adsToResize']) _0x4983c9 = ig['domHandler']['getElementById']('#' + _0x333dd2), _0x4b0908 = ig['domHandler']['getElementById']('#' + _0x333dd2 + '-Box'), _0x1d5ce3 = (window['innerWidth'] - this['adsToResize'][_0x333dd2]['box-width']) / 0x2 + 'px', _0x5d2976 = (window['innerHeight'] - this['adsToResize'][_0x333dd2]['box-height']) / 0x2 + 'px', _0x4983c9 && ig['domHandler']['css'](_0x4983c9, {
                'width': window['innerWidth'],
                'height': window['innerHeight']
            }), _0x4b0908 && ig['domHandler']['css'](_0x4b0908, {
                'left': _0x1d5ce3,
                'top': _0x5d2976
            });
            _0x4983c9 = ig['domHandler']['getElementById']('#canvas');
            _0x4b0908 = ig['domHandler']['getOffsets'](_0x4983c9);
            _0x4983c9 = _0x4b0908['left'];
            _0x4b0908 = _0x4b0908['top'];
            _0x1d5ce3 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            for (_0x333dd2 in this['dynamicClickableEntityDivs']) {
                _0x5d2976 = ig['domHandler']['getElementById']('#' + _0x333dd2);
                if (ig['ua']['mobile']) {
                    var _0x7123 = this['dynamicClickableEntityDivs'][_0x333dd2]['entity_pos_x'],
                        _0x5d3170 = this['dynamicClickableEntityDivs'][_0x333dd2]['entity_pos_y'],
                        _0x3b1de9 = this['dynamicClickableEntityDivs'][_0x333dd2]['width'],
                        _0x3c4fba = this['dynamicClickableEntityDivs'][_0x333dd2]['height'];
                    this['disableStretchToFitOnMobileFlag'] ? (_0x7123 = Math['floor'](_0x4983c9 + _0x7123 * this['scaleRatioMultiplier']['x']) + 'px', _0x5d3170 = Math['floor'](_0x4b0908 + _0x5d3170 * this['scaleRatioMultiplier']['y']) + 'px', _0x3b1de9 = Math['floor'](_0x3b1de9 * this['scaleRatioMultiplier']['x']) + 'px', _0x3c4fba = Math['floor'](_0x3c4fba * this['scaleRatioMultiplier']['y']) + 'px') : (_0x7123 = Math['floor'](_0x7123 * this['sizeRatio']['x']) + 'px', _0x5d3170 = Math['floor'](_0x5d3170 * this['sizeRatio']['y']) + 'px', _0x3b1de9 = Math['floor'](_0x3b1de9 * this['sizeRatio']['x']) + 'px', _0x3c4fba = Math['floor'](_0x3c4fba * this['sizeRatio']['y']) + 'px');
                } else _0x7123 = this['dynamicClickableEntityDivs'][_0x333dd2]['entity_pos_x'], _0x5d3170 = this['dynamicClickableEntityDivs'][_0x333dd2]['entity_pos_y'], _0x3b1de9 = this['dynamicClickableEntityDivs'][_0x333dd2]['width'], _0x3c4fba = this['dynamicClickableEntityDivs'][_0x333dd2]['height'], this['enableStretchToFitOnDesktopFlag'] ? (_0x7123 = Math['floor'](_0x7123 * this['sizeRatio']['x']) + 'px', _0x5d3170 = Math['floor'](_0x5d3170 * this['sizeRatio']['y']) + 'px', _0x3b1de9 = Math['floor'](_0x3b1de9 * this['sizeRatio']['x']) + 'px', _0x3c4fba = Math['floor'](_0x3c4fba * this['sizeRatio']['y']) + 'px') : (_0x7123 = Math['floor'](_0x4983c9 + _0x7123 * this['scaleRatioMultiplier']['x']) + 'px', _0x5d3170 = Math['floor'](_0x4b0908 + _0x5d3170 * this['scaleRatioMultiplier']['y']) + 'px', _0x3b1de9 = Math['floor'](_0x3b1de9 * this['scaleRatioMultiplier']['x']) + 'px', _0x3c4fba = Math['floor'](_0x3c4fba * this['scaleRatioMultiplier']['y']) + 'px');
                ig['domHandler']['css'](_0x5d2976, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x7123,
                    'top': _0x5d3170,
                    'width': _0x3b1de9,
                    'height': _0x3c4fba,
                    'z-index': 0x3
                });
                this['dynamicClickableEntityDivs'][_0x333dd2]['font-size'] && ig['domHandler']['css'](_0x5d2976, {
                    'font-size': this['dynamicClickableEntityDivs'][_0x333dd2]['font-size'] * _0x1d5ce3 + 'px'
                });
            }
            $('#ajaxbar')['width'](this['windowSize']['x']);
            $('#ajaxbar')['height'](this['windowSize']['y']);
        },
        'resize': function() {
            this['sizeCalcs']();
            this['resizeLayers']();
        },
        'reorient': function() {
            console['log']('changing orientation ...');
            if (ig['ua']['mobile']) {
                var _0x3dc221 = !0x1,
                    _0x3dc221 = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'],
                    _0x25ed4a = this['domHandler']['getElementById']('#orientate'),
                    _0x15f6a0 = this['domHandler']['getElementById']('#game');
                _0x3dc221 ? (this['domHandler']['show'](_0x25ed4a), this['domHandler']['hide'](_0x15f6a0), console['log']('portrait' + window['innerWidth'] + ',' + window['innerHeight'])) : (this['domHandler']['show'](_0x15f6a0), this['domHandler']['hide'](_0x25ed4a), console['log']('landscape' + window['innerWidth'] + ',' + window['innerHeight']));
            }
            ig['ua']['mobile'] ? (this['resize'](), this['resizeAds']()) : this['resize']();
        },
        'resizeAds': function() {
            for (var _0x4b7b8a in this['adsToResize']) {
                var _0x2f47a3 = ig['domHandler']['getElementById']('#' + _0x4b7b8a),
                    _0x44aaa7 = ig['domHandler']['getElementById']('#' + _0x4b7b8a + '-Box'),
                    _0x781d9 = (window['innerWidth'] - this['adsToResize'][_0x4b7b8a]['box-width']) / 0x2 + 'px',
                    _0x467c74 = (window['innerHeight'] - this['adsToResize'][_0x4b7b8a]['box-height']) / 0x2 + 'px';
                _0x2f47a3 && ig['domHandler']['css'](_0x2f47a3, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                });
                _0x44aaa7 && ig['domHandler']['css'](_0x44aaa7, {
                    'left': _0x781d9,
                    'top': _0x467c74
                });
            }
        },
        'samsungFix': function() {
            ig['ua']['android'] && (!(4.2 > parseFloat(navigator['userAgent']['slice'](navigator['userAgent']['indexOf']('Android') + 0x8, navigator['userAgent']['indexOf']('Android') + 0xb))) && !(0x0 > navigator['userAgent']['indexOf']('GT')) && !(0x0 < navigator['userAgent']['indexOf']('Chrome')) && !(0x0 < navigator['userAgent']['indexOf']('Firefox'))) && (document['addEventListener']('touchstart', function(_0x4e4991) {
                _0x4e4991['preventDefault']();
                return !0x1;
            }, !0x1), document['addEventListener']('touchmove', function(_0x3f5e3b) {
                _0x3f5e3b['preventDefault']();
                return !0x1;
            }, !0x1), document['addEventListener']('touchend', function(_0x5989dd) {
                _0x5989dd['preventDefault']();
                return !0x1;
            }, !0x1));
        },
        'orientationInterval': null,
        'orientationTimeout': null,
        'orientationHandler': function() {
            this['reorient']();
            window['scrollTo'](0x0, 0x1);
        },
        'orientationDelayHandler': function() {
            null == this['orientationInterval'] && (this['orientationInterval'] = window['setInterval'](this['orientationHandler']['bind'](this), 0x64));
            null == this['orientationTimeout'] && (this['orientationTimeout'] = window['setTimeout'](function() {
                this['clearAllIntervals']();
            }['bind'](this), 0x7d0));
        },
        'clearAllIntervals': function() {
            window['clearInterval'](this['orientationInterval']);
            this['orientationInterval'] = null;
            window['clearTimeout'](this['orientationTimeout']);
            this['orientationTimeout'] = null;
        },
        'eventListenerSetup': function() {
            ig['ua']['iOS'] ? (window['addEventListener']('orientationchange', this['orientationDelayHandler']['bind'](this)), window['addEventListener']('resize', this['orientationDelayHandler']['bind'](this))) : (window['addEventListener']('orientationchange', this['orientationHandler']['bind'](this)), window['addEventListener']('resize', this['orientationHandler']['bind'](this)));
            document['ontouchmove'] = function(_0x527025) {
                window['scrollTo'](0x0, 0x1);
                _0x527025['preventDefault']();
            };
            this['chromePullDownRefreshFix']();
        },
        'chromePullDownRefreshFix': function() {
            var _0x745e64 = window['chrome'] || navigator['userAgent']['match']('CriOS'),
                _0x46f5fe = 'ontouchstart' in document['documentElement'];
            if (_0x745e64 && _0x46f5fe) {
                var _0x527c8b = _0x745e64 = !0x1,
                    _0x33584d = 0x0,
                    _0x918793 = !0x1;
                try {
                    CSS['supports']('overscroll-behavior-y', 'contain') && (_0x745e64 = !0x0);
                } catch (_0x1aa56f) {}
                try {
                    if (_0x745e64) return document['body']['style']['overscrollBehaviorY'] = 'contain';
                } catch (_0x33a9c8) {}
                _0x745e64 = document['head'] || document['body'];
                _0x46f5fe = document['createElement']('style');
                _0x46f5fe['type'] = 'text/css';
                _0x46f5fe['styleSheet'] ? _0x46f5fe['styleSheet']['cssText'] = '\x0a      ::-webkit-scrollbar {\x0a        width: 500x;\x0a      }\x0a      ::-webkit-scrollbar-thumb {\x0a        border-radius: 500px;\x0a        background-color: rgba(0, 0, 0, 0.2);\x0a      }\x0a      body {\x0a        -webkit-overflow-scrolling: auto!important;\x0a      }\x0a    ' : _0x46f5fe['appendChild'](document['createTextNode']('\x0a      ::-webkit-scrollbar {\x0a        width: 500px;\x0a      }\x0a      ::-webkit-scrollbar-thumb {\x0a        border-radius: 500px;\x0a        background-color: rgba(0, 0, 0, 0.2);\x0a      }\x0a      body {\x0a        -webkit-overflow-scrolling: auto!important;\x0a      }\x0a    '));
                _0x745e64['appendChild'](_0x46f5fe);
                try {
                    addEventListener('test', null, {
                        get 'passive' () {
                            _0x527c8b = !0x0;
                        }
                    });
                } catch (_0x4dfc9c) {}
                document['addEventListener']('touchstart', function(_0x4c4fce) {
                    0x1 === _0x4c4fce['touches']['length'] && (_0x33584d = _0x4c4fce['touches'][0x0]['clientY'], _0x918793 = 0x0 === window['pageYOffset']);
                }, !!_0x527c8b && {
                    'passive': !0x0
                });
                document['addEventListener']('touchmove', function(_0x5384e9) {
                    var _0x46023b;
                    if (_0x46023b = _0x918793) {
                        _0x918793 = !0x1;
                        _0x46023b = _0x5384e9['touches'][0x0]['clientY'];
                        var _0x75ad38 = _0x46023b - _0x33584d;
                        _0x46023b = (_0x33584d = _0x46023b, 0x0 < _0x75ad38);
                    }
                    if (_0x46023b) return _0x5384e9['preventDefault']();
                }, !!_0x527c8b && {
                    'passive': !0x1
                });
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.api-handler')['defines'](function() {
    ig['ApiHandler'] = ig['Class']['extend']({
        'apiAvailable': {
            
        },
        'run': function(_0x410f93, _0xf488f7) {
            if (this['apiAvailable'][_0x410f93]) this['apiAvailable'][_0x410f93](_0xf488f7);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-player')['defines'](function() {
    SoundPlayer = ig['Class']['extend']({
        'tagName': 'SoundPlayer',
        'stayMuteFlag': !0x1,
        'debug': !0x1,
        'init': function() {
            this['debug'] && console['log'](this['tagName']);
        },
        'play': function(_0x217ff2) {
            this['debug'] && console['log']('play sound ', _0x217ff2);
        },
        'stop': function() {
            this['debug'] && console['log']('stop sound ');
        },
        'volume': function() {
            this['debug'] && console['log']('set volume');
        },
        'mute': function(_0x18f7f3) {
            this['debug'] && console['log']('mute');
            'undefined' === typeof _0x18f7f3 ? this['stayMuteFlag'] = !0x0 : _0x18f7f3 && (this['stayMuteFlag'] = !0x0);
        },
        'unmute': function(_0x4270c3) {
            this['debug'] && console['log']('unmute');
            'undefined' === typeof _0x4270c3 ? this['stayMuteFlag'] = !0x1 : _0x4270c3 && (this['stayMuteFlag'] = !0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactMusicPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x4677f6, _0x38b0f2) {
            this['parent'](_0x4677f6, _0x38b0f2);
            for (var _0x161efc in _0x4677f6) this['soundList'][_0x161efc] = _0x161efc, ig['music']['add'](_0x4677f6[_0x161efc]['path'] + '.*', _0x161efc);
            _0x38b0f2 && _0x38b0f2['loop'] && (ig['music']['loop'] = _0x38b0f2['loop']);
        },
        'play': function(_0x38a9a1) {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, 'undefined' === typeof _0x38a9a1 ? ig['music']['play'](_0x38a9a1) : ig['music']['play']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            ig['music']['pause']();
        },
        'volume': function(_0x18b220) {
            console['log']('impactmusic:', _0x18b220);
            ig['music']['volume'] = 0x0 > _0x18b220 ? 0x0 : isNaN(_0x18b220) ? 0x1 : 0x1 < _0x18b220 ? 0x1 : _0x18b220;
        },
        'getVolume': function() {
            return ig['music']['volume'];
        },
        'mute': function(_0x22d4e9) {
            this['parent'](_0x22d4e9);
            this['bgmPlaying'] && this['stop']();
        },
        'unmute': function(_0x242874) {
            this['parent'](_0x242874);
            this['play']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-sound-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactSoundPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactSoundPlayer',
        'soundList': {},
        'init': function(_0x5ce40b, _0x585921) {
            this['parent'](_0x5ce40b, _0x585921);
            for (var _0x731bdb in _0x5ce40b) {
                var _0x33de22 = new ig['Sound'](_0x5ce40b[_0x731bdb]['path'] + '.*');
                this['soundList'][_0x731bdb] = _0x33de22;
            }
        },
        'play': function(_0x16c9ab) {
            this['stayMuteFlag'] || ('object' === typeof _0x16c9ab ? (console['log'](_0x16c9ab + ' exists'), _0x16c9ab['play']()) : 'string' === typeof _0x16c9ab && this['soundList'][_0x16c9ab]['play']());
        },
        'stop': function(_0x2a68fa) {
            this['parent'](_0x2a68fa);
            _0x2a68fa['stop']();
        },
        'volume': function(_0x170049) {
            ig['soundManager']['volume'] = 0x0 > _0x170049 ? 0x0 : isNaN(_0x170049) ? 0x1 : 0x1 < _0x170049 ? 0x1 : _0x170049;
        },
        'getVolume': function() {
            return ig['soundManager']['volume'];
        },
        'mute': function(_0x1dc3ff) {
            this['parent'](_0x1dc3ff);
            ig['Sound']['enabled'] = !0x1;
        },
        'unmute': function(_0x57311d) {
            this['parent'](_0x57311d);
            ig['Sound']['enabled'] = !0x0;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerPlayer',
        'soundList': {},
        'init': function(_0x378944, _0x258eb1) {
            this['parent'](_0x378944, _0x258eb1);
            for (var _0x474224 in _0x378944) {
                var _0x40f334 = _0x378944[_0x474224]['path'],
                    _0x40f334 = new Howl({
                        'src': [_0x40f334 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x40f334 + '.' + ig['Sound']['FORMAT']['MP3']['ext']]
                    });
                this['soundList'][_0x474224] = _0x40f334;
            }
        },
        'play': function(_0x44d21a) {
            if (Howler['ctx'] && 'running' !== Howler['ctx']['state']) return Howler['ctx']['resume']();
            this['stayMuteFlag'] || ('object' === typeof _0x44d21a ? _0x44d21a['play']() : 'string' === typeof _0x44d21a && this['soundList'][_0x44d21a]['play']());
        },
        'stop': function(_0x227cd1) {
            this['parent'](_0x227cd1);
            'object' === typeof _0x227cd1 ? _0x227cd1['stop']() : 'string' === typeof _0x227cd1 && this['soundList'][_0x227cd1]['stop']();
        },
        'volume': function(_0x54a260) {
            for (var _0x54c32d in this['soundList']) {
                if (0x0 > _0x54a260) {
                    this['soundList'][_0x54c32d]['volume'](0x0);
                    break;
                }
                isNaN(_0x54a260) ? this['soundList'][_0x54c32d]['volume'](0x1) : 0x1 < _0x54a260 ? this['soundList'][_0x54c32d]['volume'](0x1) : this['soundList'][_0x54c32d]['volume'](_0x54a260);
            }
        },
        'getVolume': function() {
            for (var _0x9a1036 in this['soundList']) return this['soundList'][_0x9a1036]['volume']();
        },
        'mute': function(_0x130ec5) {
            this['parent'](_0x130ec5);
            Howler['mute'](!0x0);
        },
        'unmute': function(_0x25758a) {
            this['parent'](_0x25758a);
            Howler['mute'](!0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerMusicPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x2d7543, _0x1c0dde) {
            this['parent'](_0x2d7543, _0x1c0dde);
            for (var _0x776684 in _0x2d7543) {
                var _0x2cce60 = _0x2d7543[_0x776684]['path'],
                    _0x2cce60 = new Howl({
                        'src': [_0x2cce60 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x2cce60 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                        'loop': !0x0,
                        'autoplay': !0x1,
                        'onend': function() {}['bind'](this)
                    });
                this['soundList'][_0x776684] = _0x2cce60;
            }
        },
        'play': function(_0x560aeb) {
            if (!this['stayMuteFlag'] && !this['bgmPlaying'])
                if ('object' === typeof _0x560aeb) this['bgmPlaying'] = !0x0, _0x560aeb['play']();
                else if ('string' === typeof _0x560aeb) this['bgmPlaying'] = !0x0, this['soundList'][_0x560aeb]['play']();
            else
                for (var _0x55625f in this['soundList']) {
                    this['soundList'][_0x55625f]['play']();
                    this['bgmPlaying'] = !0x0;
                    break;
                }
        },
        'stop': function(_0x264ea9) {
            this['parent'](_0x264ea9);
            if (this['bgmPlaying']) {
                for (var _0x2b4ef2 in this['soundList']) this['soundList'][_0x2b4ef2]['stop']();
                this['bgmPlaying'] = !0x1;
            }
        },
        'volume': function(_0x3ed1cc) {
            console['log']('howler', _0x3ed1cc);
            for (var _0x10ddbc in this['soundList']) {
                if (0x0 > _0x3ed1cc) {
                    this['soundList'][_0x10ddbc]['volume'](0x0);
                    break;
                }
                isNaN(_0x3ed1cc) ? this['soundList'][_0x10ddbc]['volume'](0x1) : 0x1 < _0x3ed1cc ? this['soundList'][_0x10ddbc]['volume'](0x1) : this['soundList'][_0x10ddbc]['volume'](_0x3ed1cc);
            }
        },
        'getVolume': function() {
            for (var _0x43a71c in this['soundList']) return this['soundList'][_0x43a71c]['volume']();
        },
        'mute': function(_0x329b36) {
            this['parent'](_0x329b36);
            Howler['mute'](!0x0);
        },
        'unmute': function(_0x4b51aa) {
            this['parent'](_0x4b51aa);
            Howler['mute'](!0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.jukebox-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    JukeboxPlayer = SoundPlayer['extend']({
        'tagName': 'JukeboxPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'jukeboxPlayer': null,
        'pausePosition': 0x0,
        'premuteVolume': 0x0,
        'minVolume': 0.001,
        'init': function(_0x38c590, _0xe01db4) {
            this['parent'](_0x38c590, _0xe01db4);
            for (var _0x5417db in _0x38c590) {
                this['soundList'][_0x5417db] = _0x5417db;
                var _0xb57dca = _0x38c590[_0x5417db]['path'];
                this['jukeboxPlayer'] = new jukebox['Player']({
                    'resources': [_0xb57dca + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0xb57dca + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                    'autoplay': !0x1,
                    'spritemap': {
                        'music': {
                            'start': _0x38c590[_0x5417db]['startMp3'],
                            'end': _0x38c590[_0x5417db]['endMp3'],
                            'loop': !0x0
                        }
                    }
                });
            }
        },
        'play': function() {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, this['pausePosition'] ? (console['log']('resume'), this['jukeboxPlayer']['resume'](this['pausePosition'])) : (console['log']('play'), this['jukeboxPlayer']['play'](this['jukeboxPlayer']['settings']['spritemap']['music']['start'], !0x0)), this['premuteVolume'] = this['getVolume']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            this['pausePosition'] = this['jukeboxPlayer']['pause']();
        },
        'volume': function(_0x2d49ee) {
            console['log']('jukebox:', _0x2d49ee);
            0x0 >= _0x2d49ee ? this['jukeboxPlayer']['setVolume'](this['minVolume']) : isNaN(_0x2d49ee) ? this['jukeboxPlayer']['setVolume'](0x1) : 0x1 < _0x2d49ee ? this['jukeboxPlayer']['setVolume'](0x1) : this['jukeboxPlayer']['setVolume'](_0x2d49ee);
        },
        'getVolume': function() {
            return this['jukeboxPlayer']['getVolume']();
        },
        'mute': function(_0x17c5ae) {
            this['parent'](_0x17c5ae);
            this['bgmPlaying'] && (console['log']('jukebox', this['premuteVolume']), this['stayMuteFlag'] || (this['premuteVolume'] = this['getVolume']()), this['jukeboxPlayer']['pause'](), this['jukeboxPlayer']['setVolume'](this['minVolume']));
        },
        'unmute': function(_0x5c66ed) {
            this['parent'](_0x5c66ed);
            this['stayMuteFlag'] || (console['log']('jukebox', this['premuteVolume']), this['jukeboxPlayer']['setVolume'](this['premuteVolume']), this['jukeboxPlayer']['resume']());
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.webaudio-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    WebaudioMusicPlayer = SoundPlayer['extend']({
        'tagName': 'WebaudioMusicPlayer',
        'bgmPlaying': !0x1,
        'isSupported': !0x1,
        'muteFlag': !0x1,
        'pausedTime': 0x0,
        'webaudio': null,
        'useHTML5Audio': !0x1,
        'audio': null,
        'inactiveAudio': null,
        'codecs': null,
        'reinitOnPlay': !0x1,
        'inputList': null,
        '_volume': 0x1,
        'soundList': {},
        'init': function(_0x141d74) {
            this['webaudio'] = {
                'compatibility': {},
                'gainNode': null,
                'buffer': null,
                'source_loop': {},
                'source_once': {}
            };
            try {
                Howler && Howler['ctx'] ? this['webaudio']['context'] = Howler['ctx'] : ig && ig['webaudio_ctx'] ? this['webaudio']['context'] = ig['webaudio_ctx'] : (this['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'], this['webaudio']['context'] = new this['AudioContext'](), ig['webaudio_ctx'] = this['webaudio']['context']), this['isSupported'] = !0x0;
            } catch (_0x583a33) {
                console['log']('Web Audio API not supported in this browser.'), this['webaudio'] = null, this['useHTML5Audio'] = !0x0;
            }
            if (this['useHTML5Audio'])
                if ('undefined' !== typeof Audio) try {
                    new Audio();
                } catch (_0x325fce) {
                    this['useHTML5Audio'] = !0x1;
                } else this['useHTML5Audio'] = !0x1;
            this['useHTML5Audio'] && (this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x141d74));
            if (!this['isSupported']) return null;
            this['webaudio'] && (this['inputList'] = _0x141d74, this['initWebAudio'](_0x141d74));
        },
        'initWebAudio': function(_0x37809b) {
            ig['ua']['iOS'] && this['initIOSWebAudioUnlock']();
            this['webaudio']['gainNode'] = 'undefined' === typeof this['webaudio']['context']['createGain'] ? this['webaudio']['context']['createGainNode']() : this['webaudio']['context']['createGain']();
            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
            this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
            this['webaudio']['buffer'] = null;
            var _0x5b2ce8 = 'start',
                _0x574309 = 'stop',
                _0xf0d960 = this['webaudio']['context']['createBufferSource']();
            'function' !== typeof _0xf0d960['start'] && (_0x5b2ce8 = 'noteOn');
            this['webaudio']['compatibility']['start'] = _0x5b2ce8;
            'function' !== typeof _0xf0d960['stop'] && (_0x574309 = 'noteOff');
            this['webaudio']['compatibility']['stop'] = _0x574309;
            for (var _0x5c1eca in _0x37809b) {
                this['soundList'][_0x5c1eca] = _0x5c1eca;
                var _0x574309 = _0x37809b[_0x5c1eca]['path'],
                    _0x5b2ce8 = _0x574309 + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                    _0x3ada47 = _0x574309 + '.' + ig['Sound']['FORMAT']['OGG']['ext'];
                ig['ua']['mobile'] ? (_0x3ada47 = _0x5b2ce8) : (_0x574309 = navigator['userAgent']['toLowerCase'](), -0x1 != _0x574309['indexOf']('safari') && -0x1 >= _0x574309['indexOf']('chrome') && (_0x3ada47 = _0x5b2ce8), _0x574309['indexOf']('win64') && (_0x3ada47 = _0x5b2ce8));
                var _0x370a5b = new XMLHttpRequest();
                _0x370a5b['open']('GET', _0x3ada47, !0x0);
                _0x370a5b['responseType'] = 'arraybuffer';
                _0x370a5b['onload'] = function() {
                    this['webaudio']['context']['decodeAudioData'](_0x370a5b['response'], function(_0x38af7c) {
                        this['webaudio']['buffer'] = _0x38af7c;
                        this['webaudio']['source_loop'] = {};
                        this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                    }['bind'](this), function() {
                        console['log']('Error decoding audio \x22' + _0x3ada47 + '\x22.');
                    });
                }['bind'](this);
                _0x370a5b['send']();
                if (0x4 == _0x370a5b['readyState'] && 'undefined' !== typeof Audio) {
                    this['useHTML5Audio'] = !0x0;
                    try {
                        new Audio();
                    } catch (_0x384972) {
                        this['useHTML5Audio'] = !0x1;
                    }
                    this['useHTML5Audio'] && (console['log']('Using HTML5 Audio'), this['webaudio'] = null, this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x37809b));
                }
                break;
            }
        },
        'initIOSWebAudioUnlock': function() {
            if (this['webaudio']) {
                webaudio = this['webaudio'];
                var _0x9430c2 = function() {
                    var _0xa94838 = webaudio['context'],
                        _0x298a51 = _0xa94838['createBuffer'](0x1, 0x1, 0x5622),
                        _0x4ae088 = _0xa94838['createBufferSource']();
                    _0x4ae088['buffer'] = _0x298a51;
                    _0x4ae088['connect'](_0xa94838['destination']);
                    'undefined' === typeof _0x4ae088['start'] ? _0x4ae088['noteOn'](0x0) : _0x4ae088['start'](0x0);
                    setTimeout(function() {
                        (_0x4ae088['playbackState'] === _0x4ae088['PLAYING_STATE'] || _0x4ae088['playbackState'] === _0x4ae088['FINISHED_STATE']) && window['removeEventListener']('touchend', _0x9430c2, !0x1);
                    }['bind'](this), 0x0);
                };
                window['addEventListener']('touchend', _0x9430c2, !0x1);
            }
        },
        'initHTML5Audio': function(_0x4f04e9) {
            if (this['useHTML5Audio'] && this['audio']) {
                var _0x297e6f = this['audio'];
                this['codecs'] = {};
                this['codecs'] = {
                    'mp3': !!_0x297e6f['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                    'opus': !!_0x297e6f['canPlayType']('audio/ogg; codecs=\x22opus\x22')['replace'](/^no$/, ''),
                    'ogg': !!_0x297e6f['canPlayType']('audio/ogg; codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'wav': !!_0x297e6f['canPlayType']('audio/wav; codecs=\x221\x22')['replace'](/^no$/, ''),
                    'aac': !!_0x297e6f['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                    'm4a': !!(_0x297e6f['canPlayType']('audio/x-m4a;') || _0x297e6f['canPlayType']('audio/m4a;') || _0x297e6f['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'mp4': !!(_0x297e6f['canPlayType']('audio/x-mp4;') || _0x297e6f['canPlayType']('audio/mp4;') || _0x297e6f['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'weba': !!_0x297e6f['canPlayType']('audio/webm; codecs=\x22vorbis\x22')['replace'](/^no$/, '')
                };
                this['is'] = {
                    'ff': Boolean(null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']())),
                    'ie': Boolean(document['all'] && !window['opera']),
                    'opera': Boolean(window['opera']),
                    'chrome': Boolean(window['chrome']),
                    'safari': Boolean(!window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()) && window['getComputedStyle'] && !window['globalStorage'] && !window['opera'])
                };
                this['playDelay'] = -0x3c;
                this['stopDelay'] = 0x1e;
                this['is']['chrome'] && (this['playDelay'] = -0x19);
                this['is']['chrome'] && (this['stopDelay'] = 0x19);
                this['is']['ff'] && (this['playDelay'] = -0x19);
                this['is']['ff'] && (this['stopDelay'] = 0x55);
                this['is']['opera'] && (this['playDelay'] = 0x5);
                this['is']['opera'] && (this['stopDelay'] = 0x0);
                for (var _0x6fc346 in _0x4f04e9) {
                    this['soundList'][_0x6fc346] = _0x6fc346;
                    var _0x5642d2 = _0x4f04e9[_0x6fc346]['path'],
                        _0x297e6f = _0x5642d2 + '.' + ig['Sound']['FORMAT']['OGG']['ext'],
                        _0x5642d2 = _0x5642d2 + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                        _0x573ad9 = null;
                    this['codecs'][ig['Sound']['FORMAT']['OGG']['ext']['toLowerCase']()] ? _0x573ad9 = _0x297e6f : this['codecs'][ig['Sound']['FORMAT']['MP3']['ext']['toLowerCase']()] && (_0x573ad9 = _0x5642d2);
                    if (_0x573ad9) {
                        ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x573ad9 = _0x5642d2) : (_0x4f04e9 = navigator['userAgent']['toLowerCase'](), -0x1 != _0x4f04e9['indexOf']('safari') && -0x1 >= _0x4f04e9['indexOf']('chrome') && (_0x573ad9 = _0x5642d2));
                        this['audio']['addEventListener']('error', function() {
                            this['audio']['error'] && 0x4 === this['audio']['error']['code'] && (this['isSupported'] = !0x1);
                        }, !0x1);
                        this['audio']['src'] = _0x573ad9;
                        this['audio']['_pos'] = 0x0;
                        this['audio']['preload'] = 'auto';
                        this['audio']['volume'] = this['_volume'];
                        this['inactiveAudio'] = new Audio();
                        this['inactiveAudio']['src'] = _0x573ad9;
                        this['inactiveAudio']['_pos'] = 0x0;
                        this['inactiveAudio']['preload'] = 'auto';
                        this['inactiveAudio']['volume'] = this['_volume'];
                        this['inactiveAudio']['load']();
                        var _0x3b8831 = function() {
                            this['_duration'] = this['audio']['duration'];
                            this['_loaded'] || (this['_loaded'] = !0x0);
                            this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                            this['audio']['removeEventListener']('canplaythrough', _0x3b8831, !0x1);
                        }['bind'](this);
                        this['audio']['addEventListener']('canplaythrough', _0x3b8831, !0x1);
                        this['audio']['load']();
                        break;
                    }
                }
            }
        },
        'play': function(_0x40caff, _0x4d5b84) {
            if (this['isSupported'])
                if (this['bgmPlaying'] = !0x0, this['webaudio']) {
                    if (!_0x4d5b84 && this['reinitOnPlay'] && this['webaudio']['source_loop']['buffer'] == this['webaudio']['buffer']) {
                        if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                        try {
                            this['webaudio']['context']['close']();
                            this['webaudio']['context'] = new this['AudioContext']();
                            this['webaudio']['gainNode'] = this['webaudio']['context']['createGain']();
                            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
                            this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
                            var _0x1ded02 = 'start',
                                _0x235659 = 'stop',
                                _0x2f418c = this['webaudio']['context']['createBufferSource']();
                            'function' !== typeof _0x2f418c['start'] && (_0x1ded02 = 'noteOn');
                            this['webaudio']['compatibility']['start'] = _0x1ded02;
                            'function' !== typeof _0x2f418c['stop'] && (_0x235659 = 'noteOff');
                            this['webaudio']['compatibility']['stop'] = _0x235659;
                            this['webaudio']['source_loop'] = {};
                            this['play'](null, !0x0);
                        } catch (_0x48fb59) {}
                    }
                    if (this['webaudio']['buffer']) {
                        if (!this['muteFlag'] && (this['bgmPlaying'] = !0x0, !this['webaudio']['source_loop']['_playing'])) {
                            this['webaudio']['source_loop'] = this['webaudio']['context']['createBufferSource']();
                            this['webaudio']['source_loop']['buffer'] = this['webaudio']['buffer'];
                            this['webaudio']['source_loop']['loop'] = !0x0;
                            this['webaudio']['source_loop']['connect'](this['webaudio']['gainNode']);
                            if (null == _0x40caff || isNaN(_0x40caff)) _0x40caff = 0x0, this['pausedTime'] && (_0x40caff = this['pausedTime']);
                            this['webaudio']['source_loop']['_startTime'] = this['webaudio']['context']['currentTime'];
                            if ('noteOn' === this['webaudio']['compatibility']['start']) this['webaudio']['source_once'] = this['webaudio']['context']['createBufferSource'](), this['webaudio']['source_once']['buffer'] = this['webaudio']['buffer'], this['webaudio']['source_once']['connect'](this['webaudio']['gainNode']), this['webaudio']['source_once']['noteGrainOn'](0x0, _0x40caff, this['webaudio']['buffer']['duration'] - _0x40caff), this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](this['webaudio']['context']['currentTime'] + (this['webaudio']['buffer']['duration'] - _0x40caff));
                            else this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](0x0, _0x40caff);
                            this['webaudio']['source_loop']['_playing'] = !0x0;
                        }
                    } else this['bgmPlaying'] = !0x0;
                } else if (this['audio']) {
                var _0x1fd2c9 = this['audio'];
                if (!this['muteFlag'])
                    if (this['bgmPlaying'] = !0x0, isNaN(_0x40caff) && (_0x40caff = 0x0, this['pausedTime'] && (_0x40caff = this['pausedTime'])), _0x1ded02 = this['_duration'] - _0x40caff, this['_onEndTimer'] && (clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null), this['_onEndTimer'] = setTimeout(function() {
                            this['audio']['currentTime'] = 0x0;
                            this['audio']['pause']();
                            this['pausedTime'] = 0x0;
                            if (this['inactiveAudio']) {
                                var _0x2e097e = this['audio'];
                                this['audio'] = this['inactiveAudio'];
                                this['inactiveAudio'] = _0x2e097e;
                            }
                            this['play']();
                        }['bind'](this), 0x3e8 * _0x1ded02 + this['playDelay']), 0x4 === _0x1fd2c9['readyState'] || !_0x1fd2c9['readyState'] && navigator['isCocoonJS']) _0x1fd2c9['readyState'] = 0x4, _0x1fd2c9['currentTime'] = _0x40caff, _0x1fd2c9['muted'] = this['muteFlag'] || _0x1fd2c9['muted'], _0x1fd2c9['volume'] = this['_volume'], setTimeout(function() {
                        _0x1fd2c9['play']();
                    }, 0x0);
                    else {
                        clearTimeout(this['_onEndTimer']);
                        this['_onEndTimer'] = null;
                        var _0x61d596 = function() {
                            typeof('function' == this['play']) && (this['play'](), _0x1fd2c9['removeEventListener']('canplaythrough', _0x61d596, !0x1));
                        }['bind'](this);
                        _0x1fd2c9['addEventListener']('canplaythrough', _0x61d596, !0x1);
                    }
            }
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            if (this['isSupported'])
                if (this['webaudio']) {
                    if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                } else if (this['audio']) {
                var _0x1e7c0b = this['audio'];
                0x4 == _0x1e7c0b['readyState'] && (this['pausedTime'] = _0x1e7c0b['currentTime'], _0x1e7c0b['currentTime'] = 0x0, _0x1e7c0b['pause'](), clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null);
            }
        },
        'volume': function(_0x3d0e74) {
            if (isNaN(_0x3d0e74) || null == _0x3d0e74) return this['getVolume']();
            this['isSupported'] && (this['_volume'] = _0x3d0e74, 0x0 > this['_volume'] ? this['_volume'] = 0x0 : 0x1 < this['_volume'] && (this['_volume'] = 0x1), this['webaudio'] ? this['webaudio']['gainNode'] && (this['webaudio']['gainNode']['gain']['value'] = this['_volume']) : this['audio'] && (this['audio']['volume'] = this['_volume'], this['inactiveAudio'] && (this['inactiveAudio']['volume'] = this['_volume'])));
        },
        'getVolume': function() {
            return !this['isSupported'] ? 0x0 : this['_volume'];
        },
        'mute': function(_0x169136) {
            this['parent'](_0x169136);
            !0x1 == this['muteFlag'] && (this['muteFlag'] = !0x0, this['bgmPlaying'] && (this['stop'](), this['bgmPlaying'] = !0x0));
        },
        'unmute': function(_0x1d143d) {
            this['parent'](_0x1d143d);
            !this['stayMuteFlag'] && !0x0 == this['muteFlag'] && (this['muteFlag'] = !0x1, this['bgmPlaying'] && this['play']());
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-info')['defines'](function() {
    SoundInfo = ig['Class']['extend']({
        'FORMATS': {
            'OGG': '.ogg',
            'MP3': '.mp3'
        },
        'sfx': {
            'miffiopeningSound': {
                'path': 'sounds/opening/miffiopening'
            },
            'staticSound': {
                'path': 'sounds/play/static'
            },
            'openingSound': {
                'path': 'sounds/opening/opening'
            },
            'click': {
                'path': 'sounds/click'
            },
            'jump': {
                'path': 'sounds/jump'
            },
            'step': {
                'path': 'sounds/step'
            },
            'thump': {
                'path': 'sounds/thump'
            },
            'fight': {
                'path': 'sounds/fight'
            },
            'bear': {
                'path': 'sounds/bear'
            },
            'speedUp': {
                'path': 'sounds/boost'
            },
            'shield': {
                'path': 'sounds/shield'
            }
        },
        'bgm': {
            'background': {
                'path': 'sounds/bgm',
                'startOgg': 0x0,
                'endOgg': 21.463,
                'startMp3': 0x0,
                'endMp3': 21.463
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-handler')['requires']('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info')['defines'](function() {
    ig['SoundHandler'] = ig['Class']['extend']({
        'bgmPlayer': null,
        'sfxPlayer': null,
        'focusBlurMute': !0x1,
        'soundInfo': new SoundInfo(),
        'init': function() {
            console['log']('Initiating sound handler');
            ig['ua']['mobile'] ? (this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new JukeboxPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }))) : (this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new ImpactMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            })));
            this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']);
        },
        'unlockWebAudio': function() {
            Howler && (Howler['ctx'] && 'running' !== Howler['ctx']['state'] && Howler['ctx']['resume'](), Howler['_audioUnlocked'] || 'function' === typeof Howler['_unlockAudio'] && Howler['_unlockAudio']());
            ig && ig['webaudio_ctx'] && ig['webaudio_ctx']['state'] && 'running' !== ig['webaudio_ctx']['state'] && ig['webaudio_ctx']['resume']();
            this['bgmPlayer']['webaudio'] && this['bgmPlayer']['webaudio']['context'] && this['bgmPlayer']['webaudio']['context']['state'] && 'running' !== this['bgmPlayer']['webaudio']['context']['state'] && this['bgmPlayer']['webaudio']['context']['resume']();
        },
        'checkBGM': function() {
            return this['bgmPlayer']['stayMuteFlag'];
        },
        'checkSFX': function() {
            return this['sfxPlayer']['stayMuteFlag'];
        },
        'muteSFX': function(_0x43673c) {
            this['sfxPlayer'] && this['sfxPlayer']['mute'](_0x43673c);
        },
        'muteBGM': function(_0x9103bd) {
            this['bgmPlayer'] && this['bgmPlayer']['mute'](_0x9103bd);
        },
        'unmuteSFX': function(_0x1560c6) {
            this['sfxPlayer'] && this['sfxPlayer']['unmute'](_0x1560c6);
        },
        'unmuteBGM': function(_0x534b1b) {
            this['bgmPlayer'] && this['bgmPlayer']['unmute'](_0x534b1b);
        },
        'muteAll': function(_0x24b297) {
            this['muteSFX'](_0x24b297);
            this['muteBGM'](_0x24b297);
        },
        'unmuteAll': function(_0xc08414) {
            (this['unlockWebAudio'](), this['unmuteSFX'](_0xc08414), this['unmuteBGM'](_0xc08414));
        },
        'forceMuteAll': function() {
            this['focusBlurMute'] || this['muteAll'](!0x1);
            this['focusBlurMute'] = !0x0;
        },
        'forceUnMuteAll': function() {
            this['focusBlurMute'] && (this['unmuteAll'](!0x1), this['focusBlurMute'] = !0x1);
        },
        'saveVolume': function() {
            this['sfxPlayer'] && ig['game']['io']['storageSet']('soundVolume', this['sfxPlayer']['getVolume']());
            this['bgmPlayer'] && ig['game']['io']['storageSet']('musicVolume', this['bgmPlayer']['getVolume']());
        },
        'forceLoopBGM': function() {
            var _0x4b37c0;
            if (!this['focusBlurMute'] && this['bgmPlayer']['bgmPlaying'] && this['bgmPlayer']) {
                var _0x297fd2 = this['bgmPlayer']['jukeboxPlayer'];
                if (_0x297fd2) {
                    null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']());
                    _0x4b37c0 = Boolean(window['chrome']);
                    !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']());
                    var _0x1f95a3 = 0.1;
                    ig['ua']['mobile'] && (_0x1f95a3 = 0.115, ig['ua']['android'] && (_0x1f95a3 = 0.45, _0x4b37c0 && (_0x1f95a3 = 0.3)));
                    _0x297fd2['settings']['spritemap']['music'] && (_0x4b37c0 = _0x297fd2['settings']['spritemap']['music']['end'] - _0x1f95a3, _0x297fd2['getCurrentTime']() >= _0x4b37c0 && (_0x4b37c0 = _0x297fd2['settings']['spritemap']['music']['start'], ig['ua']['android'] ? this['forcelooped'] || (_0x297fd2['play'](_0x4b37c0, !0x0), this['forcelooped'] = !0x0, setTimeout(function() {
                        ig['soundHandler']['forcelooped'] = !0x1;
                    }, _0x1f95a3)) : _0x297fd2['setCurrentTime'](_0x4b37c0)));
                } else 'ImpactMusicPlayer' == this['bgmPlayer']['tagName'] && (null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']()), _0x4b37c0 = Boolean(window['chrome']), !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()), _0x1f95a3 = 0.1, ig['ua']['mobile'] && (_0x1f95a3 = 0.115, ig['ua']['android'] && (_0x1f95a3 = 0.45, _0x4b37c0 && (_0x1f95a3 = 0.3))), _0x297fd2 = 0x0, 'mp3' == ig['soundManager']['format']['ext'] && (_0x297fd2 = 0.05), ig['music']['currentTrack'] && (_0x4b37c0 = ig['music']['currentTrack']['duration'] - _0x1f95a3, ig['music']['currentTrack']['currentTime'] >= _0x4b37c0 && (ig['ua']['android'] ? this['forcelooped'] || (ig['music']['currentTrack']['pause'](), ig['music']['currentTrack']['currentTime'] = _0x297fd2, ig['music']['currentTrack']['play'](), this['forcelooped'] = !0x0, setTimeout(function() {
                    ig['soundHandler']['forcelooped'] = !0x1;
                }, _0x1f95a3)) : ig['music']['currentTrack']['currentTime'] = _0x297fd2)));
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.visibility-handler')['requires']('plugins.audio.sound-handler')['defines'](function() {
    ig['VisibilityHandler'] = ig['Class']['extend']({
        'version': '1.0.2',
        'config': {
            'allowResumeWithoutFocus': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            },
            'handlerDelay': {
                'desktop': 0x0,
                'mobile': {
                    'kaios': 0x0,
                    'default': 0x0
                }
            },
            'autoFocusOnResume': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            },
            'autoFocusAfterResume': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            }
        },
        'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
        'browserPrefix': null,
        'hiddenPropertyName': null,
        'visibilityEventName': null,
        'visibilityStateName': null,
        'isShowingOverlay': !0x1,
        'isFocused': !0x1,
        'isPaused': !0x1,
        'init': function() {
            this['initVisibilityHandler']();
            this['initFocusHandler']();
            this['initPageTransitionHandler']();
            ig['visibilityHandler'] = this;
        },
        'pauseHandler': function() {
            ig['game'] && ig['game']['pauseGame']();
            ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
        },
        'resumeHandler': function() {
            ig['game'] && ig['game']['resumeGame']();
            ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
        },
        'initVisibilityHandler': function() {
            this['browserPrefix'] = this['getBrowserPrefix']();
            this['hiddenPropertyName'] = this['getHiddenPropertyName'](this['browserPrefix']);
            this['visibilityEventName'] = this['getVisibilityEventName'](this['browserPrefix']);
            this['visibilityStateName'] = this['getVisibilityStateName'](this['browserPrefix']);
            this['visibilityEventName'] && document['addEventListener'](this['visibilityEventName'], this['onChange']['bind'](this), !0x0);
        },
        'initFocusHandler': function() {
            window['addEventListener']('blur', this['onChange']['bind'](this), !0x0);
            document['addEventListener']('blur', this['onChange']['bind'](this), !0x0);
            document['addEventListener']('focusout', this['onChange']['bind'](this), !0x0);
            window['addEventListener']('focus', this['onChange']['bind'](this), !0x0);
            document['addEventListener']('focus', this['onChange']['bind'](this), !0x0);
            document['addEventListener']('focusin', this['onChange']['bind'](this), !0x0);
        },
        'initPageTransitionHandler': function() {
            window['addEventListener']('pagehide', this['onChange']['bind'](this), !0x0);
            window['addEventListener']('pageshow', this['onChange']['bind'](this), !0x0);
        },
        'getBrowserPrefix': function() {
            var _0x471e1b = null;
            this['browserPrefixes']['forEach'](function(_0x3c6f7c) {
                if (this['getHiddenPropertyName'](_0x3c6f7c) in document) return _0x471e1b = _0x3c6f7c;
            }['bind'](this));
            return _0x471e1b;
        },
        'getHiddenPropertyName': function(_0x23c855) {
            return _0x23c855 ? _0x23c855 + 'Hidden' : 'hidden';
        },
        'getVisibilityEventName': function(_0x48182d) {
            return (_0x48182d ? _0x48182d : '') + 'visibilitychange';
        },
        'getVisibilityStateName': function(_0x2c6ba8) {
            return _0x2c6ba8 ? _0x2c6ba8 + 'VisibilityState' : 'visibilityState';
        },
        'hasView': function() {
            return !(document[this['hiddenPropertyName']] || 'visible' !== document[this['visibilityStateName']]);
        },
        'hasFocus': function() {
            return document['hasFocus']() || this['isFocused'];
        },
        'onOverlayShow': function() {
            this['systemPaused']();
            this['isShowingOverlay'] = !0x0;
        },
        'onOverlayHide': function() {
            this['isShowingOverlay'] = !0x1;
            this['systemResumed']();
        },
        'systemPaused': function() {
            if (this['isPaused']) return !0x1;
            this['pauseHandler']();
            return this['isPaused'] = !0x0;
        },
        'systemResumed': function() {
            if (!this['isPaused'] || !this['hasView']() || this['isShowingOverlay']) return !0x1;
            if (!this['hasFocus']())
                if (ig['ua']['mobile'])
                    if (this['isKaiOS']()) {
                        if (!this['config']['allowResumeWithoutFocus']['mobile']['kaios']) return !0x1;
                    } else {
                        if (!this['config']['allowResumeWithoutFocus']['mobile']['default']) return !0x1;
                    }
            else if (!this['config']['allowResumeWithoutFocus']['desktop']) return !0x1;
            this['focusOnResume']();
            this['resumeHandler']();
            this['focusAfterResume']();
            this['isPaused'] = !0x1;
            return !0x0;
        },
        'isKaiOS': function() {
            return /KAIOS/ ['test'](navigator['userAgent']) || !0x1;
        },
        'focusOnResume': function() {
            var _0x3ab399 = !0x1;
            return _0x3ab399 = ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusOnResume']['mobile']['kaios'] : this['config']['autoFocusOnResume']['mobile']['default'] : this['config']['autoFocusOnResume']['desktop'];
        },
        'focusAfterResume': function() {
            var _0x117160 = !0x1;
            return _0x117160 = ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusAfterResume']['mobile']['kaios'] : this['config']['autoFocusAfterResume']['mobile']['default'] : this['config']['autoFocusAfterResume']['desktop'];
        },
        'focus': function(_0xffe88b) {
            window['focus'] && _0xffe88b && window['focus']();
        },
        'handleDelayedEvent': function(_0x360478) {
            if (!this['hasView']() || 'pause' === _0x360478['type'] || 'pageHide' === _0x360478['type'] || 'blur' === _0x360478['type'] || 'focusout' === _0x360478['type']) {
                if ('blur' === _0x360478['type'] || 'focusout' === _0x360478['type']) this['isFocused'] = !0x1;
                return this['systemPaused'](_0x360478);
            }
            if ('focus' === _0x360478['type'] || 'focusin' === _0x360478['type']) this['isFocused'] = !0x0;
            return this['systemResumed'](_0x360478);
        },
        'startDelayedEventHandler': function(_0x287d1c) {
            ig['ua']['mobile'] ? this['isKaiOS']() ? 0x0 < this['config']['handlerDelay']['mobile']['kaios'] ? window['setTimeout'](function(_0x557c70) {
                this['handleDelayedEvent'](_0x557c70);
            }['bind'](this, _0x287d1c), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x287d1c) : 0x0 < this['config']['handlerDelay']['mobile']['default'] ? window['setTimeout'](function(_0x1161ba) {
                this['handleDelayedEvent'](_0x1161ba);
            }['bind'](this, _0x287d1c), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x287d1c) : 0x0 < this['config']['handlerDelay']['desktop'] ? window['setTimeout'](function(_0x4f1448) {
                this['handleDelayedEvent'](_0x4f1448);
            }['bind'](this, _0x287d1c), this['config']['handlerDelay']['desktop']) : this['handleDelayedEvent'](_0x287d1c);
        },
        'onChange': function(_0x3836da) {
            this['startDelayedEventHandler'](_0x3836da);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x3d2cfa) {
            return null !== this['get'](_0x3d2cfa);
        },
        'initUnset': function(_0x5f5374, _0x49ea49) {
            null === this['get'](_0x5f5374) && this['set'](_0x5f5374, _0x49ea49);
        },
        'get': function(_0x389fd3) {
            if (!this['isCapable']()) return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x389fd3));
            } catch (_0x2ba424) {
                return window['localStorage']['getItem'](_0x389fd3);
            }
        },
        'getInt': function(_0x59c1ca) {
            return ~~this['get'](_0x59c1ca);
        },
        'getFloat': function(_0x378c75) {
            return parseFloat(this['get'](_0x378c75));
        },
        'getBool': function(_0x368b26) {
            return !!this['get'](_0x368b26);
        },
        'key': function(_0x55e51f) {
            return this['isCapable']() ? window['localStorage']['key'](_0x55e51f) : null;
        },
        'set': function(_0x43bc4a, _0x4aef29) {
            if (!this['isCapable']()) return null;
            try {
                window['localStorage']['setItem'](_0x43bc4a, JSON['stringify'](_0x4aef29));
            } catch (_0x39f115) {
                console['log'](_0x39f115);
            }
        },
        'setHighest': function(_0x238975, _0x574e7e) {
            _0x574e7e > this['getFloat'](_0x238975) && this['set'](_0x238975, _0x574e7e);
        },
        'remove': function(_0x4f68dc) {
            if (!this['isCapable']()) return null;
            window['localStorage']['removeItem'](_0x4f68dc);
        },
        'clear': function() {
            if (!this['isCapable']()) return null;
            window['localStorage']['clear']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.mouse')['defines'](function() {
    Mouse = ig['Class']['extend']({
        'pos': new Vector2(0x0, 0x0),
        'bindings': {
            'click': [ig['KEY']['MOUSE1']]
        },
        'init': function() {
            ig['input']['initMouse']();
            for (var _0x5dec6d in this['bindings']) {
                this[_0x5dec6d] = _0x5dec6d;
                for (var _0x39aaa8 = 0x0; _0x39aaa8 < this['bindings'][_0x5dec6d]['length']; _0x39aaa8++) ig['input']['bind'](this['bindings'][_0x5dec6d][_0x39aaa8], _0x5dec6d);
            }
        },
        'getPos': function() {
            this['pos']['set'](ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'] / ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'] / ig['sizeHandler']['scaleRatioMultiplier']['y']);
            return this['pos'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.keyboard')['defines'](function() {
    Keyboard = ig['Class']['extend']({
        'bindings': {
            'jump': [ig['KEY']['W'], ig['KEY']['UP_ARROW']],
            'moveright': [ig['KEY']['D'], ig['KEY']['RIGHT_ARROW']],
            'moveleft': [ig['KEY']['A'], ig['KEY']['LEFT_ARROW']],
            'shoot': [ig['KEY']['S'], ig['KEY']['DOWN_ARROW'], ig['KEY']['SPACE']]
        },
        'init': function() {
            for (var _0x350d74 in this['bindings']) {
                this[_0x350d74] = _0x350d74;
                for (var _0x5c8ff9 = 0x0; _0x5c8ff9 < this['bindings'][_0x350d74]['length']; _0x5c8ff9++) ig['input']['bind'](this['bindings'][_0x350d74][_0x5c8ff9], _0x350d74);
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad-input')['defines'](function() {
    ig['PADKEY'] = {
        'BUTTON_0': 0x0,
        'PADBUTTON_1': 0x1,
        'BUTTON_2': 0x2,
        'BUTTON_3': 0x3,
        'BUTTON_LEFT_BUMPER': 0x4,
        'BUTTON_RIGHT_BUMPER': 0x5,
        'BUTTON_LEFT_TRIGGER': 0x6,
        'BUTTON_RIGHT_TRIGGER': 0x7,
        'BUTTON_LEFT_JOYSTICK': 0xa,
        'BUTTON_RIGHT_JOYSTICK': 0xb,
        'BUTTON_DPAD_UP': 0xc,
        'BUTTON_DPAD_DOWN': 0xd,
        'BUTTON_DPAD_LEFT': 0xe,
        'BUTTON_DPAD_RIGHT': 0xf,
        'BUTTON_MENU': 0x10,
        'AXIS_LEFT_JOYSTICK_X': 0x0,
        'AXIS_LEFT_JOYSTICK_Y': 0x1,
        'AXIS_RIGHT_JOYSTICK_X': 0x2,
        'AXIS_RIGHT_JOYSTICK_Y': 0x3
    };
    ig['GamepadInput'] = ig['Class']['extend']({
        'isInit': !0x1,
        'isSupported': !0x1,
        'list': [],
        'bindings': {},
        'states': {},
        'presses': {},
        'releases': {},
        'downLocks': {},
        'upLocks': {},
        'leftStick': {
            'x': 0x0,
            'y': 0x0
        },
        'rightStick': {
            'x': 0x0,
            'y': 0x0
        },
        'start': function() {
            if (!this['isInit']) {
                this['isInit'] = !0x0;
                var _0x3f3ddf = navigator['getGamepads'] || navigator['webkitGetGamepads'];
                _0x3f3ddf && (!navigator['getGamepads'] && navigator['webkitGetGamepads'] && (navigator['getGamepads'] = navigator['webkitGetGamepads']), this['list'] = navigator['getGamepads']());
                this['isSupported'] = _0x3f3ddf;
            }
        },
        'isAvailable': function() {
            return this['isInit'] && this['isSupported'];
        },
        'buttonPressed': function(_0x2283bd) {
            return 'object' == typeof _0x2283bd ? _0x2283bd['pressed'] : 0x1 == _0x2283bd;
        },
        'buttonDown': function(_0x3f5d39) {
            if (_0x3f5d39 = this['bindings'][_0x3f5d39]) this['states'][_0x3f5d39] = !0x0, this['downLocks'][_0x3f5d39] || (this['presses'][_0x3f5d39] = !0x0, this['downLocks'][_0x3f5d39] = !0x0);
        },
        'buttonUp': function(_0xc8c170) {
            if ((_0xc8c170 = this['bindings'][_0xc8c170]) && this['downLocks'][_0xc8c170] && !this['upLocks'][_0xc8c170]) this['states'][_0xc8c170] = !0x1, this['releases'][_0xc8c170] = !0x0, this['upLocks'][_0xc8c170] = !0x0;
        },
        'clearPressed': function() {
            for (var _0x1f8107 in this['releases']) this['states'][_0x1f8107] = !0x1, this['downLocks'][_0x1f8107] = !0x1;
            this['releases'] = {};
            this['presses'] = {};
            this['upLocks'] = {};
        },
        'bind': function(_0x485da3, _0x410c04) {
            this['bindings'][_0x485da3] = _0x410c04;
        },
        'unbind': function(_0x25e20a) {
            this['releases'][this['bindings'][_0x25e20a]] = !0x0;
            this['bindings'][_0x25e20a] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {};
            this['states'] = {};
            this['presses'] = {};
            this['releases'] = {};
            this['downLocks'] = {};
            this['upLocks'] = {};
        },
        'state': function(_0x1bba32) {
            return this['states'][_0x1bba32];
        },
        'pressed': function(_0x23a4db) {
            return this['presses'][_0x23a4db];
        },
        'released': function(_0x4431b3) {
            return this['releases'][_0x4431b3];
        },
        'clamp': function(_0x228e70, _0x310100, _0x32fc24) {
            return _0x228e70 < _0x310100 ? _0x310100 : _0x228e70 > _0x32fc24 ? _0x32fc24 : _0x228e70;
        },
        'pollGamepads': function() {
            if (this['isSupported']) {
                this['leftStick']['x'] = 0x0;
                this['leftStick']['y'] = 0x0;
                this['rightStick']['x'] = 0x0;
                this['rightStick']['y'] = 0x0;
                this['list'] = navigator['getGamepads']();
                for (var _0x29a187 in this['bindings']) {
                    for (var _0x15dc90 = !0x1, _0x481b2c = 0x0; _0x481b2c < this['list']['length']; _0x481b2c++) {
                        var _0x309cf2 = this['list'][_0x481b2c];
                        if (_0x309cf2 && _0x309cf2['buttons'] && this['buttonPressed'](_0x309cf2['buttons'][_0x29a187])) {
                            _0x15dc90 = !0x0;
                            break;
                        }
                    }
                    _0x15dc90 ? this['buttonDown'](_0x29a187) : this['buttonUp'](_0x29a187);
                }
                for (_0x481b2c = 0x0; _0x481b2c < this['list']['length']; _0x481b2c++)
                    if ((_0x309cf2 = this['list'][_0x481b2c]) && _0x309cf2['axes']) {
                        _0x29a187 = _0x309cf2['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_X']];
                        var _0x15dc90 = _0x309cf2['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_Y']],
                            _0x321e14 = _0x309cf2['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_X']],
                            _0x309cf2 = _0x309cf2['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_Y']];
                        this['leftStick']['x'] += isNaN(_0x29a187) ? 0x0 : _0x29a187;
                        this['leftStick']['y'] += isNaN(_0x15dc90) ? 0x0 : _0x15dc90;
                        this['rightStick']['x'] += isNaN(_0x321e14) ? 0x0 : _0x321e14;
                        this['rightStick']['y'] += isNaN(_0x309cf2) ? 0x0 : _0x309cf2;
                    }
                0x0 < this['list']['length'] && (this['leftStick']['x'] = this['clamp'](this['leftStick']['x'], -0x1, 0x1), this['leftStick']['y'] = this['clamp'](this['leftStick']['y'], -0x1, 0x1), this['rightStick']['x'] = this['clamp'](this['rightStick']['x'], -0x1, 0x1), this['rightStick']['y'] = this['clamp'](this['rightStick']['y'], -0x1, 0x1));
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad')['requires']('plugins.io.gamepad-input')['defines'](function() {
    Gamepad = ig['Class']['extend']({
        'bindings': {
            'padJump': [ig['PADKEY']['BUTTON_0']]
        },
        'init': function() {
            ig['gamepadInput']['start']();
            for (var _0x3565dd in this['bindings'])
                for (var _0x1b14e0 = 0x0; _0x1b14e0 < this['bindings'][_0x3565dd]['length']; _0x1b14e0++) ig['gamepadInput']['bind'](this['bindings'][_0x3565dd][_0x1b14e0], _0x3565dd);
        },
        'press': function() {},
        'held': function() {},
        'release': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch')['defines'](function() {
    Multitouch = ig['Class']['extend']({
        'init': function() {
            ig['multitouchInput']['start']();
        },
        'getTouchesPos': function() {
            if (ig['ua']['mobile']) {
                if (0x0 < ig['multitouchInput']['touches']['length']) {
                    for (var _0x158294 = [], _0x50a5db = 0x0; _0x50a5db < ig['multitouchInput']['touches']['length']; _0x50a5db++) {
                        var _0x1ad4c9 = ig['multitouchInput']['touches'][_0x50a5db];
                        _0x158294['push']({
                            'x': _0x1ad4c9['x'],
                            'y': _0x1ad4c9['y']
                        });
                    }
                    return _0x158294;
                }
                return null;
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch-input')['defines'](function() {
    ig['MultitouchInput'] = ig['Class']['extend']({
        'isStart': !0x1,
        'touches': [],
        'multitouchCapable': !0x1,
        'lastEventUp': null,
        'start': function() {
            this['isStart'] || (this['isStart'] = !0x0, navigator['maxTouchPoints'] && 0x1 < navigator['maxTouchPoints'] && (this['multitouchCapable'] = !0x0), ig['ua']['touchDevice'] && (window['navigator']['msPointerEnabled'] && (ig['system']['canvas']['addEventListener']('MSPointerDown', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['touchmove']['bind'](this), !0x1), ig['system']['canvas']['style']['msContentZooming'] = 'none', ig['system']['canvas']['style']['msTouchAction'] = 'none'), ig['system']['canvas']['addEventListener']('touchstart', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['touchmove']['bind'](this), !0x1)));
        },
        'touchmove': function(_0x20f6cb) {
            if (ig['ua']['touchDevice']) {
                var _0x45582f = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x1591e7 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                    _0x45582f = ig['system']['scale'] * (_0x45582f / ig['system']['realWidth']),
                    _0x1591e7 = ig['system']['scale'] * (_0x1591e7 / ig['system']['realHeight']);
                if (_0x20f6cb['touches']) {
                    for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                    !this['multitouchCapable'] && 0x1 < _0x20f6cb['touches']['length'] && (this['multitouchCapable'] = !0x0);
                    var _0x365bdf = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0x365bdf = ig['system']['canvas']['getBoundingClientRect']());
                    for (var _0x1882e4 = 0x0; _0x1882e4 < _0x20f6cb['touches']['length']; _0x1882e4++) {
                        var _0x4d99c1 = _0x20f6cb['touches'][_0x1882e4];
                        _0x4d99c1 && this['touches']['push']({
                            'x': (_0x4d99c1['clientX'] - _0x365bdf['left']) / _0x45582f,
                            'y': (_0x4d99c1['clientY'] - _0x365bdf['top']) / _0x1591e7
                        });
                    }
                } else this['windowMove'](_0x20f6cb);
            }
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x525bf3) {}
        },
        'touchdown': function(_0x175f86) {
            var _0x2bb838 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0x34eea9 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x2bb838 = ig['system']['scale'] * (_0x2bb838 / ig['system']['realWidth']),
                _0x34eea9 = ig['system']['scale'] * (_0x34eea9 / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled']) this['windowKeyDown'](_0x175f86);
            else if (ig['ua']['touchDevice'] && _0x175f86['touches']) {
                for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                !this['multitouchCapable'] && 0x1 < _0x175f86['touches']['length'] && (this['multitouchCapable'] = !0x0);
                var _0x565ca9 = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x565ca9 = ig['system']['canvas']['getBoundingClientRect']());
                for (var _0x324aa1 = 0x0; _0x324aa1 < _0x175f86['touches']['length']; _0x324aa1++) {
                    var _0x5d117d = _0x175f86['touches'][_0x324aa1];
                    _0x5d117d && this['touches']['push']({
                        'x': (_0x5d117d['clientX'] - _0x565ca9['left']) / _0x2bb838,
                        'y': (_0x5d117d['clientY'] - _0x565ca9['top']) / _0x34eea9
                    });
                }
            }
        },
        'touchup': function(_0x4659b8) {
            var _0x1eb2da = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
            parseInt(ig['system']['canvas']['offsetHeight']);
            _0x1eb2da = ig['system']['scale'] * (_0x1eb2da / ig['system']['realWidth']);
            if (window['navigator']['msPointerEnabled']) this['windowKeyUp'](_0x4659b8);
            else {
                this['lastEventUp'] = _0x4659b8;
                var _0x44849f = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x44849f = ig['system']['canvas']['getBoundingClientRect']());
                if (ig['ua']['touchDevice']) {
                    _0x4659b8 = (_0x4659b8['changedTouches'][0x0]['clientX'] - _0x44849f['left']) / _0x1eb2da;
                    for (_0x1eb2da = 0x0; _0x1eb2da < this['touches']['length']; _0x1eb2da++) this['touches'][_0x1eb2da]['x'] >= _0x4659b8 - 0x28 && this['touches'][_0x1eb2da]['x'] <= _0x4659b8 + 0x28 && this['touches']['splice'](_0x1eb2da, 0x1);
                }
            }
            ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x5d480d) {}
        },
        'windowKeyDown': function(_0x4f18d2) {
            var _0x373239 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0x3527cc = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x373239 = ig['system']['scale'] * (_0x373239 / ig['system']['realWidth']),
                _0x3527cc = ig['system']['scale'] * (_0x3527cc / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled']) {
                var _0x1535bc = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x1535bc = ig['system']['canvas']['getBoundingClientRect']());
                _0x4f18d2 = _0x4f18d2['changedTouches'] ? _0x4f18d2['changedTouches'] : [_0x4f18d2];
                for (var _0x2ae1a1 = 0x0; _0x2ae1a1 < _0x4f18d2['length']; ++_0x2ae1a1) {
                    for (var _0x2c13b0 = _0x4f18d2[_0x2ae1a1], _0x57e9ca = 'undefined' != typeof _0x2c13b0['identifier'] ? _0x2c13b0['identifier'] : 'undefined' != typeof _0x2c13b0['pointerId'] ? _0x2c13b0['pointerId'] : 0x1, _0x21d567 = (_0x2c13b0['clientX'] - _0x1535bc['left']) / _0x373239, _0x2c13b0 = (_0x2c13b0['clientY'] - _0x1535bc['top']) / _0x3527cc, _0x44dbd0 = 0x0; _0x44dbd0 < this['touches']['length']; ++_0x44dbd0) this['touches'][_0x44dbd0]['identifier'] == _0x57e9ca && this['touches']['splice'](_0x44dbd0, 0x1);
                    this['touches']['push']({
                        'x': _0x21d567,
                        'y': _0x2c13b0,
                        'identifier': _0x57e9ca
                    });
                }
                for (_0x373239 = 0x0; _0x373239 < this['touches']['length']; _0x373239++);
            }
        },
        'windowKeyUp': function(_0x410f13) {
            _0x410f13 = 'undefined' != typeof _0x410f13['identifier'] ? _0x410f13['identifier'] : 'undefined' != typeof _0x410f13['pointerId'] ? _0x410f13['pointerId'] : 0x1;
            for (var _0x4fbf97 = 0x0; _0x4fbf97 < this['touches']['length']; ++_0x4fbf97) this['touches'][_0x4fbf97]['identifier'] == _0x410f13 && this['touches']['splice'](_0x4fbf97, 0x1);
            for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
            ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x3914a4) {}
        },
        'windowMove': function(_0x5cd735) {
            var _0x5b5fb5 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0x584cf7 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x5b5fb5 = ig['system']['scale'] * (_0x5b5fb5 / ig['system']['realWidth']),
                _0x584cf7 = ig['system']['scale'] * (_0x584cf7 / ig['system']['realHeight']),
                _0x51ec99 = {
                    'left': 0x0,
                    'top': 0x0
                };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x51ec99 = ig['system']['canvas']['getBoundingClientRect']());
            if (window['navigator']['msPointerEnabled'])
                for (var _0x668d23 = 'undefined' != typeof _0x5cd735['identifier'] ? _0x5cd735['identifier'] : 'undefined' != typeof _0x5cd735['pointerId'] ? _0x5cd735['pointerId'] : 0x1, _0xed3c53 = 0x0; _0xed3c53 < this['touches']['length']; ++_0xed3c53)
                    if (this['touches'][_0xed3c53]['identifier'] == _0x668d23) {
                        var _0x3ba8a0 = (_0x5cd735['clientY'] - _0x51ec99['top']) / _0x584cf7;
                        this['touches'][_0xed3c53]['x'] = (_0x5cd735['clientX'] - _0x51ec99['left']) / _0x5b5fb5;
                        this['touches'][_0xed3c53]['y'] = _0x3ba8a0;
                    }
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x45dd3d) {}
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.fake-storage')['requires']('impact.game')['defines'](function() {
    ig['FakeStorage'] = ig['Class']['extend']({
        'tempData': {},
        'init': function() {
            ig['FakeStorage']['instance'] = this;
        },
        'initUnset': function(_0x36a6f6, _0xa561eb) {
            null === this['get'](_0x36a6f6) && this['set'](_0x36a6f6, _0xa561eb);
        },
        'set': function(_0x3200bf, _0x4217e3) {
            this['tempData'][_0x3200bf] = JSON['stringify'](_0x4217e3);
        },
        'setHighest': function(_0x2c4d41, _0x4ca5fe) {
            _0x4ca5fe > this['getFloat'](_0x2c4d41) && this['set'](_0x2c4d41, _0x4ca5fe);
        },
        'get': function(_0xaceb62) {
            return 'undefined' == typeof this['tempData'][_0xaceb62] ? null : JSON['parse'](this['tempData'][_0xaceb62]);
        },
        'getInt': function(_0x1165db) {
            return ~~this['get'](_0x1165db);
        },
        'getFloat': function(_0xbcb09d) {
            return parseFloat(this['get'](_0xbcb09d));
        },
        'getBool': function(_0x3ab649) {
            return !!this['get'](_0x3ab649);
        },
        'isSet': function(_0x57d7e4) {
            return null !== this['get'](_0x57d7e4);
        },
        'remove': function(_0x25b7e4) {
            delete this['tempData'][_0x25b7e4];
        },
        'clear': function() {
            this['tempData'] = {};
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.io-manager')['requires']('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage')['defines'](function() {
    IoManager = ig['Class']['extend']({
        'storage': null,
        'localStorageSupport': !0x1,
        'mouse': null,
        'keyboard': null,
        'multitouch': null,
        'gamepad': null,
        'init': function() {
            ig['multitouchInput'] = new ig['MultitouchInput']();
            ig['gamepadInput'] = new ig['GamepadInput']();
            this['unbindAll']();
            this['initStorage']();
            this['initMouse']();
            this['initKeyboard']();
        },
        'unbindAll': function() {
            ig['input']['unbindAll']();
            ig['gamepadInput']['unbindAll']();
        },
        'initStorage': function() {
            try {
                window['localStorage']['setItem']('test', 'test'), this['storage'] = new ig['Storage']();
            } catch (_0x3aff62) {
                console['log']('using fake storage'), this['storage'] = new ig['FakeStorage']();
            } finally {
                window['localStorage']['removeItem']('test');
            }
        },
        'initMouse': function() {
            this['mouse'] = new Mouse();
        },
        'initKeyboard': function() {
            this['keyboard'] = new Keyboard();
        },
        'initMultitouch': function() {
            this['multitouch'] = new Multitouch();
        },
        'initGamepad': function() {
            this['gamepad'] = new Gamepad();
        },
        'press': function(_0x1a00ed) {
            return ig['input']['pressed'](_0x1a00ed) || this['gamepad'] && this['gamepad']['press'](_0x1a00ed) ? !0x0 : !0x1;
        },
        'held': function(_0x357b02) {
            return ig['input']['state'](_0x357b02) || this['gamepad'] && this['gamepad']['state'](_0x357b02) ? !0x0 : !0x1;
        },
        'release': function(_0x399d5a) {
            return ig['input']['released'](_0x399d5a) || this['gamepad'] && this['gamepad']['released'](_0x399d5a) ? !0x0 : !0x1;
        },
        'getClickPos': function() {
            return this['mouse']['getPos']();
        },
        'getTouchesPos': function() {
            return this['multitouch']['getTouchesPos']();
        },
        'checkOverlap': function(_0x322630, _0x4916a9, _0x39f9bf, _0x56bf2c, _0x3c23c6) {
            return _0x322630['x'] > _0x4916a9 + _0x56bf2c || _0x322630['x'] < _0x4916a9 || _0x322630['y'] > _0x39f9bf + _0x3c23c6 || _0x322630['y'] < _0x39f9bf ? !0x1 : !0x0;
        },
        '_supportsLocalStorage': function() {
            try {
                return localStorage['setItem']('test', 'test'), localStorage['removeItem']('test'), this['localStorageSupport'] = 'localStorage' in window && null !== window['localStorage'];
            } catch (_0x47fa9a) {
                return this['localStorageSupport'];
            }
        },
        'storageIsSet': function(_0x576a72) {
            return !this['localStorageSupport'] ? null : this['storage']['isSet'](_0x576a72);
        },
        'storageGet': function(_0x1db139) {
            return !this['localStorageSupport'] ? null : this['storage']['get'](_0x1db139);
        },
        'storageSet': function(_0xe5966c, _0x177111) {
            if (!this['localStorageSupport']) return null;
            this['storage']['set'](_0xe5966c, _0x177111);
        },
        'assert': function(_0x350d0f, _0x21ce72, _0x3db818) {
            if (_0x21ce72 !== _0x3db818) throw 'actualValue:' + _0x21ce72 + ' not equal to testValue:' + _0x3db818 + ' at ' + _0x350d0f;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage-manager')['requires']('impact.game', 'plugins.io.io-manager')['defines'](function() {
    ig['Game']['prototype']['name'] = 'MJS-Game';
    ig['Game']['prototype']['version'] = '1.0';
    ig['Game']['prototype']['sessionData'] = {};
    ig['Game']['prototype']['initData'] = function() {
        return this['sessionData'] = {
            'sound': 0.5,
            'music': 0.5,
            'level': 0x1,
            'score': 0x0
        };
    };
    ig['Game']['prototype']['setupStorageManager'] = function() {
        'undefined' === typeof this['name'] ? console['error']('Cannot found Game Name, Storage Manager Cancelled.') : 'undefined' === typeof this['version'] ? console['error']('Cannot found Game Version, Storage Manager Cancelled.') : (this['io'] || (this['io'] = new IoManager(), console['log']('IO Manager doesn\x27t existed. Initialize...')), console['log']('Plug in Storage Manager'), this['storage'] = this['io']['storage'], this['storageName'] = this['name'] + '-v' + this['version'], this['loadAll']());
    };
    ig['Game']['prototype']['loadAll'] = function() {
        var _0x4d71a3 = this['storage']['get'](this['storageName']);
        if (null === _0x4d71a3 || 'undefined' === typeof _0x4d71a3) _0x4d71a3 = this['initData']();
        this['sessionData'] = _0x4d71a3;
        this['storage']['set'](this['storageName'], _0x4d71a3);
    };
    ig['Game']['prototype']['saveAll'] = function() {
        var _0x5a4a90 = this['storage']['get'](this['storageName']),
            _0x5a4a90 = this['sessionData'];
        this['storage']['set'](this['storageName'], _0x5a4a90);
    };
    ig['Game']['prototype']['load'] = function(_0x4b5426) {
        var _0x2df88c = this['storage']['get'](this['storageName']);
        this['sessionData'][_0x4b5426] = _0x2df88c[_0x4b5426];
        return _0x2df88c[_0x4b5426];
    };
    ig['Game']['prototype']['save'] = function(_0x1ab182, _0x4ad3d) {
        var _0x3175a4 = this['storage']['get'](this['storageName']);
        _0x3175a4[_0x1ab182] = _0x4ad3d;
        this['sessionData'][_0x1ab182] = _0x4ad3d;
        this['storage']['set'](this['storageName'], _0x3175a4);
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.splash-loader')['requires']('impact.loader', 'impact.animation')['defines'](function() {
    ig['SplashLoader'] = ig['Loader']['extend']({
        'tapToStartDivId': 'tap-to-start',
        'background': new ig['Image']('images/bg.png'),
        'frameBG': new ig['Image']('images/slider-bg.png'),
        'frameFill': new ig['Image']('images/slider-bar.png'),
        'logo': new ig['Image']('images/logo.png'),
        'resources': [new ig['Image']('images/btn-play.png'), new ig['Image']('images/btn-settings.png'), new ig['Image']('images/btn-moregames.png'), new ig['Image']('images/btn-expand.png'), new ig['Image']('images/btn-shrink.png'), new ig['Image']('images/music-icon.png'), new ig['Image']('images/sound-icon.png'), new ig['Image']('images/text-settings.png'), new ig['Image']('images/btn-ok.png'), new ig['Image']('images/btn-home.png'), new ig['Image']('images/btn-retry.png'), new ig['Image']('images/gameover-icon.png'), new ig['Image']('images/text-gameover.png'), new ig['Image']('images/btn-paused.png'), new ig['Image']('images/btn-resume.png'), new ig['Image']('images/text-paused.png')],
        'init': function(_0x171254, _0xee41c0) {
            this['parent'](_0x171254, _0xee41c0);
        },
        'end': function() {
            this['parent']();
            this['_drawStatus'] = 0x1;
            this['draw']();
            ig['system']['setGame'](MyGame);
        },
        'tapToStartDiv': function(_0x38a957) {
            this['desktopCoverDIV'] = document['getElementById'](this['tapToStartDivId']);
            if (!this['desktopCoverDIV']) {
                this['desktopCoverDIV'] = document['createElement']('div');
                this['desktopCoverDIV']['id'] = this['tapToStartDivId'];
                this['desktopCoverDIV']['setAttribute']('class', 'play');
                this['desktopCoverDIV']['setAttribute']('style', 'position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;');
                this['desktopCoverDIV']['innerHTML'] = '<div style=\x27color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);\x27><div style=\x27padding:20px 50px; font-family: montserrat;\x27>' + _STRINGS['Splash']['TapToStart'] + '</div></div>';
                (document['getElementById']('play')['parentNode'] || document['getElementById']('ajaxbar'))['appendChild'](this['desktopCoverDIV']);
                try {
                    'undefined' !== typeof ig['sizeHandler'] ? 'undefined' !== typeof ig['sizeHandler']['coreDivsToResize'] && (ig['sizeHandler']['coreDivsToResize']['push']('#' + this['tapToStartDivId']), 'function' === typeof ig['sizeHandler']['reorient'] && ig['sizeHandler']['reorient']()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize['push'](this['tapToStartDivId']), 'function' === typeof sizeHandler && sizeHandler());
                } catch (_0x3803c7) {
                    console['log'](_0x3803c7);
                }
                this['desktopCoverDIV']['addEventListener']('click', function() {
                    ig['soundHandler']['unlockWebAudio']();
                    this['setAttribute']('style', 'visibility: hidden;');
                    'function' === typeof _0x38a957 && _0x38a957();
                });
            }
        },
        'drawCheck': 0x0,
        'draw': function() {
            this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5;
            this['drawBG']();
            var _0x21399e = ig['system']['context'];
            _0x21399e['save']();
            var _0x297de1 = 0.5 * (ig['system']['height'] + this['logo']['height']) + 0x23;
            _0x21399e['drawImage'](this['frameBG']['data'], 0.5 * (ig['system']['width'] - this['frameBG']['width']), _0x297de1, this['frameBG']['width'], this['frameBG']['height']);
            0x0 >= this['_drawStatus'] ? this['_drawStatus'] : 0x1 < this['_drawStatus'] && (this['_drawStatus'] = 0x1);
            var _0x1b1c7b = this['_drawStatus'] * this['frameFill']['width'],
                _0x36dc53 = this['frameFill']['height'];
            !(0x0 >= _0x1b1c7b) && !(0x0 >= _0x36dc53) && (_0x21399e['drawImage'](this['frameFill']['data'], 0x0, 0x0, _0x1b1c7b, _0x36dc53, 0.5 * (ig['system']['width'] - this['frameFill']['width']), _0x297de1 + (this['frameBG']['height'] - this['frameFill']['height']) / 0x2, _0x1b1c7b, _0x36dc53), _0x21399e['restore'](), this['drawTitle'](), ig['system']['context']['save'](), ig['system']['context']['font'] = '27px fulboargenta', ig['system']['context']['fillText']('preload fulboargenta', -0x64, -0x64), ig['system']['context']['restore']());
        },
        'drawBG': function() {
            this['background']['draw'](0x0, 0x0);
        },
        'drawTitle': function() {
            this['logo']['draw']((ig['system']['width'] - this['logo']['width']) / 0x2, (ig['system']['height'] - this['logo']['height']) / 0x2 - 0x46);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.tween')['requires']('impact.entity')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x4d422f) {
        for (var _0x164c55 = 0x0; _0x164c55 < this['length']; ++_0x164c55)
            if (this[_0x164c55] === _0x4d422f) return _0x164c55;
        return -0x1;
    });
    ig['Entity']['prototype']['tweens'] = [];
    ig['Entity']['prototype']['_preTweenUpdate'] = ig['Entity']['prototype']['update'];
    ig['Entity']['prototype']['update'] = function() {
        this['_preTweenUpdate']();
        if (0x0 < this['tweens']['length']) {
            for (var _0x468b42 = [], _0x36ab73 = 0x0; _0x36ab73 < this['tweens']['length']; _0x36ab73++) this['tweens'][_0x36ab73]['update'](), this['tweens'][_0x36ab73]['complete'] || _0x468b42['push'](this['tweens'][_0x36ab73]);
            this['tweens'] = _0x468b42;
        }
    };
    ig['Entity']['prototype']['tween'] = function(_0x117392, _0xf71903, _0x4e261f) {
        _0x117392 = new ig['Tween'](this, _0x117392, _0xf71903, _0x4e261f);
        this['tweens']['push'](_0x117392);
        return _0x117392;
    };
    ig['Entity']['prototype']['pauseTweens'] = function() {
        for (var _0xb6b462 = 0x0; _0xb6b462 < this['tweens']['length']; _0xb6b462++) this['tweens'][_0xb6b462]['pause']();
    };
    ig['Entity']['prototype']['resumeTweens'] = function() {
        for (var _0x3f7f3b = 0x0; _0x3f7f3b < this['tweens']['length']; _0x3f7f3b++) this['tweens'][_0x3f7f3b]['resume']();
    };
    ig['Entity']['prototype']['stopTweens'] = function(_0x29a0ca) {
        for (var _0x346681 = 0x0; _0x346681 < this['tweens']['length']; _0x346681++) this['tweens'][_0x346681]['stop'](_0x29a0ca);
    };
    ig['Tween'] = function(_0x5c81ba, _0x40c3ac, _0x8ec5f8, _0x47e5c9) {
        var _0x132d61 = {},
            _0x3dacd7 = {},
            _0x293d62 = {},
            _0x1cf7fc = 0x0,
            _0x1956e7 = !0x1,
            _0x54da66 = !0x1,
            _0x4af64e = !0x1;
        this['duration'] = _0x8ec5f8;
        this['paused'] = this['complete'] = !0x1;
        this['easing'] = ig['Tween']['Easing']['Linear']['EaseNone'];
        this['onComplete'] = !0x1;
        this['loop'] = this['delay'] = 0x0;
        this['loopCount'] = -0x1;
        ig['merge'](this, _0x47e5c9);
        this['loopNum'] = this['loopCount'];
        this['chain'] = function(_0x32bc25) {
            _0x4af64e = _0x32bc25;
        };
        this['initEnd'] = function(_0x2e6212, _0x2cea8f, _0xb995e2) {
            if ('object' !== typeof _0x2cea8f[_0x2e6212]) _0xb995e2[_0x2e6212] = _0x2cea8f[_0x2e6212];
            else
                for (subprop in _0x2cea8f[_0x2e6212]) _0xb995e2[_0x2e6212] || (_0xb995e2[_0x2e6212] = {}), this['initEnd'](subprop, _0x2cea8f[_0x2e6212], _0xb995e2[_0x2e6212]);
        };
        this['initStart'] = function(_0x490342, _0x3f3887, _0x1043b5, _0x3aa7ae) {
            if ('object' !== typeof _0x1043b5[_0x490342]) 'undefined' !== typeof _0x3f3887[_0x490342] && (_0x3aa7ae[_0x490342] = _0x1043b5[_0x490342]);
            else
                for (subprop in _0x1043b5[_0x490342]) _0x3aa7ae[_0x490342] || (_0x3aa7ae[_0x490342] = {}), 'undefined' !== typeof _0x3f3887[_0x490342] && this['initStart'](subprop, _0x3f3887[_0x490342], _0x1043b5[_0x490342], _0x3aa7ae[_0x490342]);
        };
        this['start'] = function() {
            this['paused'] = this['complete'] = !0x1;
            this['loopNum'] = this['loopCount'];
            _0x1cf7fc = 0x0; - 0x1 == _0x5c81ba['tweens']['indexOf'](this) && _0x5c81ba['tweens']['push'](this);
            _0x54da66 = !0x0;
            _0x1956e7 = new ig['Timer']();
            for (var _0x48f168 in _0x40c3ac) this['initEnd'](_0x48f168, _0x40c3ac, _0x3dacd7);
            for (_0x48f168 in _0x3dacd7) this['initStart'](_0x48f168, _0x3dacd7, _0x5c81ba, _0x132d61), this['initDelta'](_0x48f168, _0x293d62, _0x5c81ba, _0x3dacd7);
        };
        this['initDelta'] = function(_0x50b4ae, _0x1c7ffa, _0x204e63, _0x3ac08f) {
            if ('object' !== typeof _0x3ac08f[_0x50b4ae]) _0x1c7ffa[_0x50b4ae] = _0x3ac08f[_0x50b4ae] - _0x204e63[_0x50b4ae];
            else
                for (subprop in _0x3ac08f[_0x50b4ae]) _0x1c7ffa[_0x50b4ae] || (_0x1c7ffa[_0x50b4ae] = {}), this['initDelta'](subprop, _0x1c7ffa[_0x50b4ae], _0x204e63[_0x50b4ae], _0x3ac08f[_0x50b4ae]);
        };
        this['propUpdate'] = function(_0x5c6c2c, _0x3ab67f, _0xd81974, _0x44cada, _0x3fde85) {
            if ('object' !== typeof _0xd81974[_0x5c6c2c]) _0x3ab67f[_0x5c6c2c] = 'undefined' != typeof _0xd81974[_0x5c6c2c] ? _0xd81974[_0x5c6c2c] + _0x44cada[_0x5c6c2c] * _0x3fde85 : _0x3ab67f[_0x5c6c2c];
            else
                for (subprop in _0xd81974[_0x5c6c2c]) this['propUpdate'](subprop, _0x3ab67f[_0x5c6c2c], _0xd81974[_0x5c6c2c], _0x44cada[_0x5c6c2c], _0x3fde85);
        };
        this['propSet'] = function(_0x24b948, _0xca3518, _0x58cf70) {
            if ('object' !== typeof _0xca3518[_0x24b948]) _0x58cf70[_0x24b948] = _0xca3518[_0x24b948];
            else
                for (subprop in _0xca3518[_0x24b948]) _0x58cf70[_0x24b948] || (_0x58cf70[_0x24b948] = {}), this['propSet'](subprop, _0xca3518[_0x24b948], _0x58cf70[_0x24b948]);
        };
        this['update'] = function() {
            if (!_0x54da66) return !0x1;
            if (this['delay']) {
                if (_0x1956e7['delta']() < this['delay']) return;
                this['delay'] = 0x0;
                _0x1956e7['reset']();
            }
            if (this['paused'] || this['complete']) return !0x1;
            var _0x39ad22 = (_0x1956e7['delta']() + _0x1cf7fc) / this['duration'],
                _0x39ad22 = 0x1 < _0x39ad22 ? 0x1 : _0x39ad22,
                _0x2ac0e7 = this['easing'](_0x39ad22);
            for (property in _0x293d62) this['propUpdate'](property, _0x5c81ba, _0x132d61, _0x293d62, _0x2ac0e7);
            if (0x1 <= _0x39ad22) {
                if (0x0 == this['loopNum'] || !this['loop']) {
                    this['complete'] = !0x0;
                    if (this['onComplete']) this['onComplete']();
                    _0x4af64e && _0x4af64e['start']();
                    return !0x1;
                }
                if (this['loop'] == ig['Tween']['Loop']['Revert']) {
                    for (property in _0x132d61) this['propSet'](property, _0x132d61, _0x5c81ba);
                    _0x1cf7fc = 0x0;
                    _0x1956e7['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
                } else if (this['loop'] == ig['Tween']['Loop']['Reverse']) {
                    _0x39ad22 = {};
                    _0x2ac0e7 = {};
                    ig['merge'](_0x39ad22, _0x3dacd7);
                    ig['merge'](_0x2ac0e7, _0x132d61);
                    ig['merge'](_0x132d61, _0x39ad22);
                    ig['merge'](_0x3dacd7, _0x2ac0e7);
                    for (property in _0x3dacd7) this['initDelta'](property, _0x293d62, _0x5c81ba, _0x3dacd7);
                    _0x1cf7fc = 0x0;
                    _0x1956e7['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
                }
            }
        };
        this['pause'] = function() {
            this['paused'] = !0x0;
            _0x1956e7 && _0x1956e7['delta'] && (_0x1cf7fc += _0x1956e7['delta']());
        };
        this['resume'] = function() {
            this['paused'] = !0x1;
            _0x1956e7 && _0x1956e7['reset'] && _0x1956e7['reset']();
        };
        this['stop'] = function(_0x4d0775) {
            _0x4d0775 && (this['loop'] = this['complete'] = this['paused'] = !0x1, _0x1cf7fc += _0x8ec5f8, this['update']());
            this['complete'] = !0x0;
        };
    };
    ig['Tween']['Loop'] = {
        'Revert': 0x1,
        'Reverse': 0x2
    };
    ig['Tween']['Easing'] = {
        'Linear': {},
        'Quadratic': {},
        'Cubic': {},
        'Quartic': {},
        'Quintic': {},
        'Sinusoidal': {},
        'Exponential': {},
        'Circular': {},
        'Elastic': {},
        'Back': {},
        'Bounce': {}
    };
    ig['Tween']['Easing']['Linear']['EaseNone'] = function(_0x7b2f27) {
        return _0x7b2f27;
    };
    ig['Tween']['Easing']['Quadratic']['EaseIn'] = function(_0x7860f3) {
        return _0x7860f3 * _0x7860f3;
    };
    ig['Tween']['Easing']['Quadratic']['EaseOut'] = function(_0x3d51f9) {
        return -_0x3d51f9 * (_0x3d51f9 - 0x2);
    };
    ig['Tween']['Easing']['Quadratic']['EaseInOut'] = function(_0x491a9e) {
        return 0x1 > (_0x491a9e *= 0x2) ? 0.5 * _0x491a9e * _0x491a9e : -0.5 * (--_0x491a9e * (_0x491a9e - 0x2) - 0x1);
    };
    ig['Tween']['Easing']['Cubic']['EaseIn'] = function(_0x3e6f59) {
        return _0x3e6f59 * _0x3e6f59 * _0x3e6f59;
    };
    ig['Tween']['Easing']['Cubic']['EaseOut'] = function(_0x204a9a) {
        return --_0x204a9a * _0x204a9a * _0x204a9a + 0x1;
    };
    ig['Tween']['Easing']['Cubic']['EaseInOut'] = function(_0x116878) {
        return 0x1 > (_0x116878 *= 0x2) ? 0.5 * _0x116878 * _0x116878 * _0x116878 : 0.5 * ((_0x116878 -= 0x2) * _0x116878 * _0x116878 + 0x2);
    };
    ig['Tween']['Easing']['Quartic']['EaseIn'] = function(_0x4055ce) {
        return _0x4055ce * _0x4055ce * _0x4055ce * _0x4055ce;
    };
    ig['Tween']['Easing']['Quartic']['EaseOut'] = function(_0xac3c43) {
        return -(--_0xac3c43 * _0xac3c43 * _0xac3c43 * _0xac3c43 - 0x1);
    };
    ig['Tween']['Easing']['Quartic']['EaseInOut'] = function(_0x19273e) {
        return 0x1 > (_0x19273e *= 0x2) ? 0.5 * _0x19273e * _0x19273e * _0x19273e * _0x19273e : -0.5 * ((_0x19273e -= 0x2) * _0x19273e * _0x19273e * _0x19273e - 0x2);
    };
    ig['Tween']['Easing']['Quintic']['EaseIn'] = function(_0x18fdd1) {
        return _0x18fdd1 * _0x18fdd1 * _0x18fdd1 * _0x18fdd1 * _0x18fdd1;
    };
    ig['Tween']['Easing']['Quintic']['EaseOut'] = function(_0x5d76a4) {
        return (_0x5d76a4 -= 0x1) * _0x5d76a4 * _0x5d76a4 * _0x5d76a4 * _0x5d76a4 + 0x1;
    };
    ig['Tween']['Easing']['Quintic']['EaseInOut'] = function(_0x460a8b) {
        return 0x1 > (_0x460a8b *= 0x2) ? 0.5 * _0x460a8b * _0x460a8b * _0x460a8b * _0x460a8b * _0x460a8b : 0.5 * ((_0x460a8b -= 0x2) * _0x460a8b * _0x460a8b * _0x460a8b * _0x460a8b + 0x2);
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseIn'] = function(_0x54cf3a) {
        return -Math['cos'](_0x54cf3a * Math['PI'] / 0x2) + 0x1;
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseOut'] = function(_0x58e4e8) {
        return Math['sin'](_0x58e4e8 * Math['PI'] / 0x2);
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseInOut'] = function(_0x19b988) {
        return -0.5 * (Math['cos'](Math['PI'] * _0x19b988) - 0x1);
    };
    ig['Tween']['Easing']['Exponential']['EaseIn'] = function(_0x58f898) {
        return 0x0 == _0x58f898 ? 0x0 : Math['pow'](0x2, 0xa * (_0x58f898 - 0x1));
    };
    ig['Tween']['Easing']['Exponential']['EaseOut'] = function(_0x16459c) {
        return 0x1 == _0x16459c ? 0x1 : -Math['pow'](0x2, -0xa * _0x16459c) + 0x1;
    };
    ig['Tween']['Easing']['Exponential']['EaseInOut'] = function(_0x2a3772) {
        return 0x0 == _0x2a3772 ? 0x0 : 0x1 == _0x2a3772 ? 0x1 : 0x1 > (_0x2a3772 *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x2a3772 - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x2a3772 - 0x1)) + 0x2);
    };
    ig['Tween']['Easing']['Circular']['EaseIn'] = function(_0x5d928c) {
        return -(Math['sqrt'](0x1 - _0x5d928c * _0x5d928c) - 0x1);
    };
    ig['Tween']['Easing']['Circular']['EaseOut'] = function(_0x47073b) {
        return Math['sqrt'](0x1 - --_0x47073b * _0x47073b);
    };
    ig['Tween']['Easing']['Circular']['EaseInOut'] = function(_0x224b73) {
        return 0x1 > (_0x224b73 /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0x224b73 * _0x224b73) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0x224b73 -= 0x2) * _0x224b73) + 0x1);
    };
    ig['Tween']['Easing']['Elastic']['EaseIn'] = function(_0x81b2cd) {
        var _0x385a50, _0x439338 = 0.1,
            _0x286a32 = 0.4;
        if (0x0 == _0x81b2cd) return 0x0;
        if (0x1 == _0x81b2cd) return 0x1;
        _0x286a32 || (_0x286a32 = 0.3);
        !_0x439338 || 0x1 > _0x439338 ? (_0x439338 = 0x1, _0x385a50 = _0x286a32 / 0x4) : _0x385a50 = _0x286a32 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x439338);
        return -(_0x439338 * Math['pow'](0x2, 0xa * (_0x81b2cd -= 0x1)) * Math['sin']((_0x81b2cd - _0x385a50) * 0x2 * Math['PI'] / _0x286a32));
    };
    ig['Tween']['Easing']['Elastic']['EaseOut'] = function(_0xe39af0) {
        var _0x9f1366, _0x6ee1be = 0.1,
            _0x313c17 = 0.4;
        if (0x0 == _0xe39af0) return 0x0;
        if (0x1 == _0xe39af0) return 0x1;
        _0x313c17 || (_0x313c17 = 0.3);
        !_0x6ee1be || 0x1 > _0x6ee1be ? (_0x6ee1be = 0x1, _0x9f1366 = _0x313c17 / 0x4) : _0x9f1366 = _0x313c17 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x6ee1be);
        return _0x6ee1be * Math['pow'](0x2, -0xa * _0xe39af0) * Math['sin']((_0xe39af0 - _0x9f1366) * 0x2 * Math['PI'] / _0x313c17) + 0x1;
    };
    ig['Tween']['Easing']['Elastic']['EaseInOut'] = function(_0x1397f7) {
        var _0x3a206a, _0x1c78cb = 0.1,
            _0x2447d5 = 0.4;
        if (0x0 == _0x1397f7) return 0x0;
        if (0x1 == _0x1397f7) return 0x1;
        _0x2447d5 || (_0x2447d5 = 0.3);
        !_0x1c78cb || 0x1 > _0x1c78cb ? (_0x1c78cb = 0x1, _0x3a206a = _0x2447d5 / 0x4) : _0x3a206a = _0x2447d5 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x1c78cb);
        return 0x1 > (_0x1397f7 *= 0x2) ? -0.5 * _0x1c78cb * Math['pow'](0x2, 0xa * (_0x1397f7 -= 0x1)) * Math['sin']((_0x1397f7 - _0x3a206a) * 0x2 * Math['PI'] / _0x2447d5) : 0.5 * _0x1c78cb * Math['pow'](0x2, -0xa * (_0x1397f7 -= 0x1)) * Math['sin']((_0x1397f7 - _0x3a206a) * 0x2 * Math['PI'] / _0x2447d5) + 0x1;
    };
    ig['Tween']['Easing']['Back']['EaseIn'] = function(_0x46238a) {
        return _0x46238a * _0x46238a * (2.70158 * _0x46238a - 1.70158);
    };
    ig['Tween']['Easing']['Back']['EaseOut'] = function(_0xb851a9) {
        return (_0xb851a9 -= 0x1) * _0xb851a9 * (2.70158 * _0xb851a9 + 1.70158) + 0x1;
    };
    ig['Tween']['Easing']['Back']['EaseInOut'] = function(_0x9da0c2) {
        return 0x1 > (_0x9da0c2 *= 0x2) ? 0.5 * _0x9da0c2 * _0x9da0c2 * (3.5949095 * _0x9da0c2 - 2.5949095) : 0.5 * ((_0x9da0c2 -= 0x2) * _0x9da0c2 * (3.5949095 * _0x9da0c2 + 2.5949095) + 0x2);
    };
    ig['Tween']['Easing']['Bounce']['EaseIn'] = function(_0xdfb2a5) {
        return 0x1 - ig['Tween']['Easing']['Bounce']['EaseOut'](0x1 - _0xdfb2a5);
    };
    ig['Tween']['Easing']['Bounce']['EaseOut'] = function(_0xe86159) {
        return (_0xe86159 /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0xe86159 * _0xe86159 : _0xe86159 < 0x2 / 2.75 ? 7.5625 * (_0xe86159 -= 1.5 / 2.75) * _0xe86159 + 0.75 : _0xe86159 < 2.5 / 2.75 ? 7.5625 * (_0xe86159 -= 2.25 / 2.75) * _0xe86159 + 0.9375 : 7.5625 * (_0xe86159 -= 2.625 / 2.75) * _0xe86159 + 0.984375;
    };
    ig['Tween']['Easing']['Bounce']['EaseInOut'] = function(_0x1d67b0) {
        return 0.5 > _0x1d67b0 ? 0.5 * ig['Tween']['Easing']['Bounce']['EaseIn'](0x2 * _0x1d67b0) : 0.5 * ig['Tween']['Easing']['Bounce']['EaseOut'](0x2 * _0x1d67b0 - 0x1) + 0.5;
    };
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x43ab13, _0x41dbc5) {
            var _0x597ff8 = _0x43ab13['length'] - 0x1,
                _0x2c184d = _0x597ff8 * _0x41dbc5,
                _0x483d0f = Math['floor'](_0x2c184d),
                _0x4119ce = TWEEN['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x41dbc5 ? _0x4119ce(_0x43ab13[0x0], _0x43ab13[0x1], _0x2c184d) : 0x1 < _0x41dbc5 ? _0x4119ce(_0x43ab13[_0x597ff8], _0x43ab13[_0x597ff8 - 0x1], _0x597ff8 - _0x2c184d) : _0x4119ce(_0x43ab13[_0x483d0f], _0x43ab13[_0x483d0f + 0x1 > _0x597ff8 ? _0x597ff8 : _0x483d0f + 0x1], _0x2c184d - _0x483d0f);
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.entity-patch')['requires']('impact.entity')['defines'](function() {
    ig['Entity']['inject']({
        'handleMovementTrace': function(_0x4b471c) {
            this['standing'] = !0x1;
            _0x4b471c['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
            _0x4b471c['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x4b471c['collision']['slope']) {
                var _0x562dc4 = _0x4b471c['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0x4a8b84 = this['vel']['x'] * _0x562dc4['nx'] + this['vel']['y'] * _0x562dc4['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x562dc4['nx'] * _0x4a8b84) * this['bounciness'];
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x562dc4['ny'] * _0x4a8b84) * this['bounciness'];
                } else _0x4a8b84 = (this['vel']['x'] * _0x562dc4['x'] + this['vel']['y'] * _0x562dc4['y']) / (_0x562dc4['x'] * _0x562dc4['x'] + _0x562dc4['y'] * _0x562dc4['y']), this['vel']['x'] = _0x562dc4['x'] * _0x4a8b84, this['vel']['y'] = _0x562dc4['y'] * _0x4a8b84, _0x562dc4 = Math['atan2'](_0x562dc4['x'], _0x562dc4['y']), _0x562dc4 > this['slopeStanding']['min'] && _0x562dc4 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos']['x'] = _0x4b471c['pos']['x'];
            this['pos']['y'] = _0x4b471c['pos']['y'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.tweens-handler')['requires']('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x1e07c2) {
        for (var _0xbde800 = 0x0; _0xbde800 < this['length']; ++_0xbde800)
            if (this[_0xbde800] === _0x1e07c2) return _0xbde800;
        return -0x1;
    });
    ig['TweensHandler'] = ig['Class']['extend']({
        '_tweens': [],
        '_systemPausedTweens': [],
        'init': function() {},
        'getAll': function() {
            return this['_tweens'];
        },
        'removeAll': function() {
            this['_tweens'] = [];
        },
        'add': function(_0x341cf4) {
            this['_tweens']['push'](_0x341cf4);
        },
        'remove': function(_0x4949de) {
            _0x4949de = this['_tweens']['indexOf'](_0x4949de); - 0x1 !== _0x4949de && this['_tweens']['splice'](_0x4949de, 0x1);
        },
        'onSystemPause': function() {
            if (0x0 === this['_tweens']['length']) return !0x1;
            for (var _0x4700de = 0x0, _0x9fded1 = null; _0x4700de < this['_tweens']['length'];) _0x9fded1 = this['_tweens'][_0x4700de], _0x9fded1['_isPlaying'] && (this['_systemPausedTweens']['push'](_0x9fded1), _0x9fded1['pause']()), _0x4700de++;
            return !0x0;
        },
        'onSystemResume': function() {
            if (0x0 === this['_systemPausedTweens']['length']) return !0x1;
            for (var _0x1b57f5 = 0x0; _0x1b57f5 < this['_systemPausedTweens']['length'];) this['_systemPausedTweens'][_0x1b57f5]['resume'](), _0x1b57f5++;
            this['_systemPausedTweens'] = [];
            return !0x0;
        },
        'update': function(_0x459052, _0x9045bb) {
            if (0x0 === this['_tweens']['length']) return !0x1;
            var _0x495229 = 0x0;
            for (_0x459052 = void 0x0 !== _0x459052 ? _0x459052 : ig['game']['tweens']['now'](); _0x495229 < this['_tweens']['length'];) this['_tweens'][_0x495229]['update'](_0x459052) || _0x9045bb ? _0x495229++ : this['_tweens']['splice'](_0x495229, 0x1);
            return !0x0;
        },
        'now': function() {
            return Date['now']();
        }
    });
    ig['TweenDef'] = ig['Class']['extend']({
        '_ent': null,
        '_valuesStart': {},
        '_valuesEnd': {},
        '_valuesStartRepeat': {},
        '_duration': 0x3e8,
        '_repeat': 0x0,
        '_yoyo': !0x1,
        '_isPlaying': !0x1,
        '_reversed': !0x1,
        '_delayTime': 0x0,
        '_startTime': null,
        '_pauseTime': null,
        '_easingFunction': ig['Tween']['Easing']['Linear']['EaseNone'],
        '_interpolationFunction': ig['Tween']['Interpolation']['Linear'],
        '_chainedTweens': [],
        '_onStartCallback': null,
        '_onStartCallbackFired': !0x1,
        '_onUpdateCallback': null,
        '_onCompleteCallback': null,
        '_onStopCallback': null,
        '_onPauseCallback': null,
        '_onResumeCallback': null,
        '_currentElapsed': 0x0,
        'init': function(_0xb347e7) {
            this['_object'] = _0xb347e7;
        },
        'to': function(_0xa0de4d, _0x37759a) {
            this['_valuesEnd'] = _0xa0de4d;
            void 0x0 !== _0x37759a && (this['_duration'] = _0x37759a);
            return this;
        },
        'start': function(_0x589d9f) {
            if (this['_isPlaying']) return this;
            ig['game']['tweens']['add'](this);
            this['_isPlaying'] = !0x0;
            this['_onStartCallbackFired'] = !0x1;
            this['_startTime'] = void 0x0 !== _0x589d9f ? _0x589d9f : ig['game']['tweens']['now']();
            this['_startTime'] += this['_delayTime'];
            for (var _0x4a51cd in this['_valuesEnd']) {
                if (this['_valuesEnd'][_0x4a51cd] instanceof Array) {
                    if (0x0 === this['_valuesEnd'][_0x4a51cd]['length']) continue;
                    this['_valuesEnd'][_0x4a51cd] = [this['_object'][_0x4a51cd]]['concat'](this['_valuesEnd'][_0x4a51cd]);
                }
                void 0x0 !== this['_object'][_0x4a51cd] && (this['_valuesStart'][_0x4a51cd] = this['_object'][_0x4a51cd], !0x1 === this['_valuesStart'][_0x4a51cd] instanceof Array && (this['_valuesStart'][_0x4a51cd] *= 0x1), this['_valuesStartRepeat'][_0x4a51cd] = this['_valuesStart'][_0x4a51cd] || 0x0);
            }
            return this;
        },
        'stop': function() {
            if (!this['_isPlaying']) return this;
            ig['game']['tweens']['remove'](this);
            this['_isPlaying'] = !0x1;
            null !== this['_onStopCallback'] && this['_onStopCallback']['call'](this['_object'], this['_object']);
            this['stopChainedTweens']();
            return this;
        },
        'pause': function() {
            if (!this['_isPlaying']) return this;
            ig['game']['tweens']['remove'](this);
            this['_isPlaying'] = !0x1;
            this['_pauseTime'] = ig['game']['tweens']['now']();
            null !== this['_onPauseCallback'] && this['_onPauseCallback']['call'](this['_object'], this['_object']);
            return this;
        },
        'resume': function() {
            if (this['_isPlaying'] || !this['_pauseTime']) return this;
            var _0x2aeb8e = ig['game']['tweens']['now']() - this['_pauseTime'];
            this['_startTime'] += _0x2aeb8e;
            ig['game']['tweens']['add'](this);
            this['_isPlaying'] = !0x0;
            null !== this['_onResumeCallback'] && this['_onResumeCallback']['call'](this['_object'], this['_object']);
            this['_pauseTime'] = null;
            return this;
        },
        'end': function() {
            this['update'](this['_startTime'] + this['_duration']);
            return this;
        },
        'stopChainedTweens': function() {
            for (var _0x5c0d9d = 0x0, _0x52fb60 = this['_chainedTweens']['length']; _0x5c0d9d < _0x52fb60; _0x5c0d9d++) this['_chainedTweens'][_0x5c0d9d]['stop']();
        },
        'delay': function(_0x512c77) {
            this['_delayTime'] = _0x512c77;
            return this;
        },
        'repeat': function(_0x176f2d) {
            this['_repeat'] = _0x176f2d;
            return this;
        },
        'repeatDelay': function(_0x39c5eb) {
            this['_repeatDelayTime'] = _0x39c5eb;
            return this;
        },
        'yoyo': function(_0x487036) {
            this['_yoyo'] = _0x487036;
            return this;
        },
        'easing': function(_0x27a427) {
            this['_easingFunction'] = _0x27a427;
            return this;
        },
        'interpolation': function(_0x2632eb) {
            this['_interpolationFunction'] = _0x2632eb;
            return this;
        },
        'chain': function() {
            this['_chainedTweens'] = arguments;
            return this;
        },
        'onStart': function(_0x516535) {
            this['_onStartCallback'] = _0x516535;
            return this;
        },
        'onUpdate': function(_0x1b0a92) {
            this['_onUpdateCallback'] = _0x1b0a92;
            return this;
        },
        'onComplete': function(_0x2c79c7) {
            this['_onCompleteCallback'] = _0x2c79c7;
            return this;
        },
        'onStop': function(_0x205b90) {
            this['_onStopCallback'] = _0x205b90;
            return this;
        },
        'onPause': function(_0x545ec9) {
            this['_onPauseCallback'] = _0x545ec9;
            return this;
        },
        'onResume': function(_0xac6709) {
            this['_onResumeCallback'] = _0xac6709;
            return this;
        },
        'update': function(_0x510d96) {
            var _0x398423, _0x1e50c4, _0x44f4cc;
            if (_0x510d96 < this['_startTime']) return !0x0;
            !0x1 === this['_onStartCallbackFired'] && (null !== this['_onStartCallback'] && this['_onStartCallback']['call'](this['_object'], this['_object']), this['_onStartCallbackFired'] = !0x0);
            _0x1e50c4 = (_0x510d96 - this['_startTime']) / this['_duration'];
            this['_currentElapsed'] = _0x1e50c4 = 0x1 < _0x1e50c4 ? 0x1 : _0x1e50c4;
            _0x44f4cc = this['_easingFunction'](_0x1e50c4);
            for (_0x398423 in this['_valuesEnd'])
                if (void 0x0 !== this['_valuesStart'][_0x398423]) {
                    var _0x4fbe74 = this['_valuesStart'][_0x398423] || 0x0,
                        _0x9c101a = this['_valuesEnd'][_0x398423];
                    _0x9c101a instanceof Array ? this['_object'][_0x398423] = this['_interpolationFunction'](_0x9c101a, _0x44f4cc) : ('string' === typeof _0x9c101a && (_0x9c101a = '+' === _0x9c101a['charAt'](0x0) || '-' === _0x9c101a['charAt'](0x0) ? _0x4fbe74 + parseFloat(_0x9c101a) : parseFloat(_0x9c101a)), 'number' === typeof _0x9c101a && (this['_object'][_0x398423] = _0x4fbe74 + (_0x9c101a - _0x4fbe74) * _0x44f4cc));
                }
            null !== this['_onUpdateCallback'] && this['_onUpdateCallback']['call'](this['_object'], this['_object'], _0x44f4cc);
            if (0x1 === _0x1e50c4)
                if (0x0 < this['_repeat']) {
                    isFinite(this['_repeat']) && this['_repeat']--;
                    for (_0x398423 in this['_valuesStartRepeat']) 'string' === typeof this['_valuesEnd'][_0x398423] && (this['_valuesStartRepeat'][_0x398423] = _valuesStartRepeat[_0x398423] + parseFloat(_valuesEnd[_0x398423])), this['_yoyo'] && (_0x1e50c4 = this['_valuesStartRepeat'][_0x398423], this['_valuesStartRepeat'][_0x398423] = this['_valuesEnd'][_0x398423], this['_valuesEnd'][_0x398423] = _0x1e50c4), this['_valuesStart'][_0x398423] = this['_valuesStartRepeat'][_0x398423];
                    this['_yoyo'] && (this['_reversed'] = !this['_reversed']);
                    this['_startTime'] = void 0x0 !== this['_repeatDelayTime'] ? _0x510d96 + this['_repeatDelayTime'] : _0x510d96 + this['_delayTime'];
                } else {
                    null !== this['_onCompleteCallback'] && this['_onCompleteCallback']['call'](this['_object'], this['_object']);
                    _0x510d96 = 0x0;
                    for (_0x398423 = this['_chainedTweens']['length']; _0x510d96 < _0x398423; _0x510d96++) this['_chainedTweens'][_0x510d96]['start'](this['_startTime'] + this['_duration']);
                    return !0x1;
                }
            return !0x0;
        }
    });
    var _0xcb1f1 = [0x1];
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x19484c, _0x191f1f) {
            var _0x3cffab = _0x19484c['length'] - 0x1,
                _0x53687f = _0x3cffab * _0x191f1f,
                _0x1da8db = Math['floor'](_0x53687f),
                _0x5982b8 = ig['Tween']['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x191f1f ? _0x5982b8(_0x19484c[0x0], _0x19484c[0x1], _0x53687f) : 0x1 < _0x191f1f ? _0x5982b8(_0x19484c[_0x3cffab], _0x19484c[_0x3cffab - 0x1], _0x3cffab - _0x53687f) : _0x5982b8(_0x19484c[_0x1da8db], _0x19484c[_0x1da8db + 0x1 > _0x3cffab ? _0x3cffab : _0x1da8db + 0x1], _0x53687f - _0x1da8db);
        },
        'Bezier': function(_0x4ef50f, _0x40d4c8) {
            for (var _0x41897d = 0x0, _0x44b500 = _0x4ef50f['length'] - 0x1, _0x19f4f5 = Math['pow'], _0xb80d56 = ig['Tween']['Interpolation']['Utils']['Bernstein'], _0x335f87 = 0x0; _0x335f87 <= _0x44b500; _0x335f87++) _0x41897d += _0x19f4f5(0x1 - _0x40d4c8, _0x44b500 - _0x335f87) * _0x19f4f5(_0x40d4c8, _0x335f87) * _0x4ef50f[_0x335f87] * _0xb80d56(_0x44b500, _0x335f87);
            return _0x41897d;
        },
        'CatmullRom': function(_0x95e415, _0x22c246) {
            var _0x52455a = _0x95e415['length'] - 0x1,
                _0x578b39 = _0x52455a * _0x22c246,
                _0x267c81 = Math['floor'](_0x578b39),
                _0x17bc90 = ig['Tween']['Interpolation']['Utils']['CatmullRom'];
            return _0x95e415[0x0] === _0x95e415[_0x52455a] ? (0x0 > _0x22c246 && (_0x267c81 = Math['floor'](_0x578b39 = _0x52455a * (0x1 + _0x22c246))), _0x17bc90(_0x95e415[(_0x267c81 - 0x1 + _0x52455a) % _0x52455a], _0x95e415[_0x267c81], _0x95e415[(_0x267c81 + 0x1) % _0x52455a], _0x95e415[(_0x267c81 + 0x2) % _0x52455a], _0x578b39 - _0x267c81)) : 0x0 > _0x22c246 ? _0x95e415[0x0] - (_0x17bc90(_0x95e415[0x0], _0x95e415[0x0], _0x95e415[0x1], _0x95e415[0x1], -_0x578b39) - _0x95e415[0x0]) : 0x1 < _0x22c246 ? _0x95e415[_0x52455a] - (_0x17bc90(_0x95e415[_0x52455a], _0x95e415[_0x52455a], _0x95e415[_0x52455a - 0x1], _0x95e415[_0x52455a - 0x1], _0x578b39 - _0x52455a) - _0x95e415[_0x52455a]) : _0x17bc90(_0x95e415[_0x267c81 ? _0x267c81 - 0x1 : 0x0], _0x95e415[_0x267c81], _0x95e415[_0x52455a < _0x267c81 + 0x1 ? _0x52455a : _0x267c81 + 0x1], _0x95e415[_0x52455a < _0x267c81 + 0x2 ? _0x52455a : _0x267c81 + 0x2], _0x578b39 - _0x267c81);
        },
        'Utils': {
            'Linear': function(_0x5b7774, _0x160254, _0x4001eb) {
                return (_0x160254 - _0x5b7774) * _0x4001eb + _0x5b7774;
            },
            'Bernstein': function(_0x3f7918, _0x3ad5f3) {
                var _0x49c540 = ig['Tween']['Interpolation']['Utils']['Factorial'];
                return _0x49c540(_0x3f7918) / _0x49c540(_0x3ad5f3) / _0x49c540(_0x3f7918 - _0x3ad5f3);
            },
            'Factorial': function(_0x29b990) {
                var _0x34511a = 0x1;
                if (_0xcb1f1[_0x29b990]) return _0xcb1f1[_0x29b990];
                for (var _0x3edf59 = _0x29b990; 0x1 < _0x3edf59; _0x3edf59--) _0x34511a *= _0x3edf59;
                return _0xcb1f1[_0x29b990] = _0x34511a;
            },
            'CatmullRom': function(_0x106bc1, _0x19fdeb, _0x50fae3, _0x336baa, _0x1a4f33) {
                _0x106bc1 = 0.5 * (_0x50fae3 - _0x106bc1);
                _0x336baa = 0.5 * (_0x336baa - _0x19fdeb);
                var _0x1c9770 = _0x1a4f33 * _0x1a4f33;
                return (0x2 * _0x19fdeb - 0x2 * _0x50fae3 + _0x106bc1 + _0x336baa) * _0x1a4f33 * _0x1c9770 + (-0x3 * _0x19fdeb + 0x3 * _0x50fae3 - 0x2 * _0x106bc1 - _0x336baa) * _0x1c9770 + _0x106bc1 * _0x1a4f33 + _0x19fdeb;
            }
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.url-parameters')['defines'](function() {
    ig['UrlParameters'] = ig['Class']['extend']({
        'init': function() {
            switch (getQueryVariable('iphone')) {
                case 'true':
                    ig['ua']['iPhone'] = !0x0, console['log']('iPhone mode');
            }
            var _0xa32b3f = getQueryVariable('webview');
            if (_0xa32b3f) switch (_0xa32b3f) {
                case 'true':
                    ig['ua']['is_uiwebview'] = !0x0, console['log']('webview mode');
            }
            if (_0xa32b3f = getQueryVariable('debug')) switch (_0xa32b3f) {
                case 'true':
                    ig['game']['showDebugMenu'](), console['log']('debug mode');
            }
            switch (getQueryVariable('view')) {
                case 'stats':
                    ig['game']['resetPlayerStats'](), ig['game']['endGame']();
            }
            getQueryVariable('ad');
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.director')['requires']('impact.impact')['defines'](function() {
    ig['Director'] = ig['Class']['extend']({
        'init': function(_0x1c0679, _0x152bd6) {
            this['game'] = _0x1c0679;
            this['levels'] = [];
            this['currentLevel'] = 0x0;
            this['append'](_0x152bd6);
        },
        'loadLevel': function(_0x4d050f) {
            for (var _0x3f960d in ig['sizeHandler']['dynamicClickableEntityDivs']) {
                var _0x36c741 = ig['domHandler']['getElementById']('#' + _0x3f960d);
                ig['domHandler']['hide'](_0x36c741);
            }
            this['currentLevel'] = _0x4d050f;
            this['game']['loadLevel'](this['levels'][_0x4d050f]);
            return !0x0;
        },
        'loadLevelWithoutEntities': function(_0x54e6c9) {
            this['currentLevel'] = _0x54e6c9;
            this['game']['loadLevelWithoutEntities'](this['levels'][_0x54e6c9]);
            return !0x0;
        },
        'append': function(_0x32b351) {
            newLevels = [];
            return 'object' === typeof _0x32b351 ? (_0x32b351['constructor'] === []['constructor'] ? newLevels = _0x32b351 : newLevels[0x0] = _0x32b351, this['levels'] = this['levels']['concat'](newLevels), !0x0) : !0x1;
        },
        'nextLevel': function() {
            return this['currentLevel'] + 0x1 < this['levels']['length'] ? this['loadLevel'](this['currentLevel'] + 0x1) : !0x1;
        },
        'previousLevel': function() {
            return 0x0 <= this['currentLevel'] - 0x1 ? this['loadLevel'](this['currentLevel'] - 0x1) : !0x1;
        },
        'jumpTo': function(_0x1f2b89) {
            var _0x28cb03 = null;
            for (i = 0x0; i < this['levels']['length']; i++) this['levels'][i] == _0x1f2b89 && (_0x28cb03 = i);
            return 0x0 <= _0x28cb03 ? this['loadLevel'](_0x28cb03) : !0x1;
        },
        'firstLevel': function() {
            return this['loadLevel'](0x0);
        },
        'lastLevel': function() {
            return this['loadLevel'](this['levels']['length'] - 0x1);
        },
        'reloadLevel': function() {
            return this['loadLevel'](this['currentLevel']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.impact-storage')['requires']('impact.game')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x1faf4a) {
            return null !== this['get'](_0x1faf4a);
        },
        'initUnset': function(_0x435f5d, _0x13fc36) {
            null === this['get'](_0x435f5d) && this['set'](_0x435f5d, _0x13fc36);
        },
        'get': function(_0x24c22c) {
            if (!this['isCapable']()) return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x24c22c));
            } catch (_0x103603) {
                return window['localStorage']['getItem'](_0x24c22c);
            }
        },
        'getInt': function(_0x4e08f4) {
            return ~~this['get'](_0x4e08f4);
        },
        'getFloat': function(_0x2e3564) {
            return parseFloat(this['get'](_0x2e3564));
        },
        'getBool': function(_0x461345) {
            return !!this['get'](_0x461345);
        },
        'key': function(_0xc7b550) {
            return this['isCapable']() ? window['localStorage']['key'](_0xc7b550) : null;
        },
        'set': function(_0x5a5a81, _0xa75171) {
            if (!this['isCapable']()) return null;
            try {
                window['localStorage']['setItem'](_0x5a5a81, JSON['stringify'](_0xa75171));
            } catch (_0x471783) {
                console['log'](_0x471783);
            }
        },
        'setHighest': function(_0x81ee25, _0x1580a1) {
            _0x1580a1 > this['getFloat'](_0x81ee25) && this['set'](_0x81ee25, _0x1580a1);
        },
        'remove': function(_0x48a72b) {
            if (!this['isCapable']()) return null;
            window['localStorage']['removeItem'](_0x48a72b);
        },
        'clear': function() {
            if (!this['isCapable']()) return null;
            window['localStorage']['clear']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.fullscreen')['requires']('impact.entity', 'plugins.handlers.size-handler', 'plugins.director')['defines'](function() {
    ig['Fullscreen'] = {
        'enableFullscreenButton': !0x0,
        '_isEnabled': 'notChecked',
        'isEnabled': function() {
            'notChecked' == this['_isEnabled'] && (this['_isEnabled'] = document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled'] ? !0x0 : !0x1);
            return this['_isEnabled'];
        },
        'isFullscreen': function() {
            return true;
			//ig['Fullscreen']['isEnabled']() && (document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']) ? !0x0 : !0x1;
        },
        'toggleFullscreen': function() {
			gradle.event('btn_share');
            /*ig['Fullscreen']['isFullscreen']() ? ig['Fullscreen']['exitFullscreen']() : ig['Fullscreen']['requestFullscreen']();
            ig['sizeHandler']['orientationDelayHandler']();
            if (ig && ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x4ddbc1) {}*/
        },
        'requestFullscreen': function() {
            /*var _0x3a8048 = document['documentElement'];
            _0x3a8048['requestFullscreen'] ? _0x3a8048['requestFullscreen']() : _0x3a8048['webkitRequestFullscreen'] ? _0x3a8048['webkitRequestFullscreen']() : _0x3a8048['mozRequestFullScreen'] ? _0x3a8048['mozRequestFullScreen']() : _0x3a8048['msRequestFullscreen'] ? _0x3a8048['msRequestFullscreen']() : console['log']('no request fullscreen method available');
			*/
        },
        'exitFullscreen': function() {
			/*
            document['exitFullscreen'] ? document['exitFullscreen']() : document['webkitExitFullscreen'] ? document['webkitExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : console['log']('no exit fullscreen method available');
			*/
        },
        'divs': {}
    };
    ig['Director']['inject']({
        'loadLevel': function(_0x4f1d76) {
            var _0x5c5eaa = ig['Fullscreen']['divs'],
                _0x274778;
            for (_0x274778 in _0x5c5eaa) _0x5c5eaa = ig['domHandler']['getElementById']('#' + _0x274778), ig['domHandler']['hide'](_0x5c5eaa);
            return this['parent'](_0x4f1d76);
        }
    });
    ig['SizeHandler']['inject']({
        'resize': function() {
            this['parent']();
            var _0x8e3b4d = ig['Fullscreen']['divs'],
                _0x5e37b4;
            for (_0x5e37b4 in _0x8e3b4d) {
                var _0x360318 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']),
                    _0x3eeb88 = ig['domHandler']['getElementById']('#' + _0x5e37b4),
                    _0x463c78 = _0x8e3b4d[_0x5e37b4]['entity_pos_x'],
                    _0x2733c3 = _0x8e3b4d[_0x5e37b4]['entity_pos_y'],
                    _0x5acfc8 = _0x8e3b4d[_0x5e37b4]['width'],
                    _0x39d2f1 = _0x8e3b4d[_0x5e37b4]['height'],
                    _0x222f98 = ig['domHandler']['getElementById']('#canvas'),
                    _0x177627 = ig['domHandler']['getOffsets'](_0x222f98);
                ig['ua']['mobile'] ? (_0x222f98 = _0x177627['left'], _0x177627 = _0x177627['top'], ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x463c78 = Math['floor'](_0x222f98 + _0x463c78 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x2733c3 = Math['floor'](_0x177627 + _0x2733c3 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x5acfc8 = Math['floor'](_0x5acfc8 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x39d2f1 = Math['floor'](_0x39d2f1 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x463c78 = Math['floor'](_0x463c78 * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2733c3 = Math['floor'](_0x2733c3 * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x5acfc8 = Math['floor'](_0x5acfc8 * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x39d2f1 = Math['floor'](_0x39d2f1 * ig['sizeHandler']['sizeRatio']['y']) + 'px')) : (_0x222f98 = _0x177627['left'], _0x177627 = _0x177627['top'], _0x463c78 = Math['floor'](_0x222f98 + _0x463c78 * _0x360318) + 'px', _0x2733c3 = Math['floor'](_0x177627 + _0x2733c3 * _0x360318) + 'px', _0x5acfc8 = Math['floor'](_0x5acfc8 * _0x360318) + 'px', _0x39d2f1 = Math['floor'](_0x39d2f1 * _0x360318) + 'px');
                ig['domHandler']['css'](_0x3eeb88, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x463c78,
                    'top': _0x2733c3,
                    'width': _0x5acfc8,
                    'height': _0x39d2f1,
                    'z-index': 0x3
                });
                _0x8e3b4d[_0x5e37b4]['font-size'] && ig['domHandler']['css'](_0x3eeb88, {
                    'font-size': _0x8e3b4d[_0x5e37b4]['font-size'] * _0x360318 + 'px'
                });
            }
        }
    });
    ig['FullscreenButton'] = ig['Entity']['extend']({
        'enterImage': null,
        'exitImage': null,
        'isReady': !0x1,
        'zIndex': 0xf423f,
        'identifier': null,
        'prevPos': {
            'x': 0x0,
            'y': 0x0
        },
        'invisImagePath': 'images/invisible.png',
        'init': function(_0x1f8f57, _0x3feae9, _0x5cd6ea) {
            this['parent'](_0x1f8f57, _0x3feae9, _0x5cd6ea);
            ig['Fullscreen']['isEnabled']() && ig['Fullscreen']['enableFullscreenButton'] ? this['enterImage']['loaded'] ? this['initSize']() : this['enterImage']['loadCallback'] = function() {
                this['initSize']();
            }['bind'](this) : this['kill']();
        },
        'kill': function() {
            this['parent']();
        },
        'destroy': function() {
            this['parent']();
            console['log']('destroy');
        },
        'initSize': function() {
            this['size']['x'] = this['enterImage']['width'];
            this['size']['y'] = this['enterImage']['height'];
            this['createClickableLayer']();
            this['isReady'] = !0x0;
        },
        'createClickableLayer': function() {
			gradle.event('btn_share');
            /*this['identifier'] = 'fullscreen-button-layer';
            var _0x6d4e4e = ig['domHandler']['getElementById']('#' + this['identifier']);
            _0x6d4e4e ? (ig['domHandler']['show'](_0x6d4e4e), ig['domHandler']['attr'](_0x6d4e4e, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this['createClickableOutboundLayer']();*/
        },
        'update': function(_0x43156f, _0x41fe1f) {
            _0x43156f = this['pos']['x'];
            _0x41fe1f = this['pos']['y'];
            this['isReady'] && !(this['prevPos']['x'] === _0x43156f && this['prevPos']['y'] === _0x41fe1f) && (ig['Fullscreen']['divs'][this['identifier']] = {}, ig['Fullscreen']['divs'][this['identifier']]['width'] = this['size']['x'], ig['Fullscreen']['divs'][this['identifier']]['height'] = this['size']['y'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_y'] = this['pos']['y'], this['prevPos']['x'] = _0x43156f, this['prevPos']['y'] = _0x41fe1f);
        },
        'draw': function() {
            this['isReady'] && (ig['Fullscreen']['isFullscreen']() ? this['exitImage']['draw'](this['pos']['x'], this['pos']['y']) : this['enterImage']['draw'](this['pos']['x'], this['pos']['y']));
        },
        'createClickableOutboundLayer': function() {
            var _0x58a2d5 = this['identifier'],
                _0x27239e = this['invisImagePath'],
                _0x30ebdb = ig['domHandler']['create']('div');
            ig['domHandler']['attr'](_0x30ebdb, 'id', _0x58a2d5);
            ig['domHandler']['attr'](_0x30ebdb, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
            var _0x33d152 = ig['domHandler']['create']('a'),
                _0x871dbd = ig['domHandler']['create']('img');
            ig['domHandler']['css'](_0x871dbd, {
                'width': '100%',
                'height': '100%'
            });
            ig['domHandler']['attr'](_0x871dbd, 'src', _0x27239e);
            _0x27239e = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            if (ig['ua']['mobile']) {
                var _0x5712a9 = ig['domHandler']['getElementById']('#canvas'),
                    _0x5712a9 = ig['domHandler']['getOffsets'](_0x5712a9),
                    _0x2e1dce = _0x5712a9['left'],
                    _0x42f8b0 = _0x5712a9['top'];
                console['log'](_0x5712a9['left']);
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x5712a9 = Math['floor'](_0x2e1dce + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x42f8b0 = Math['floor'](_0x42f8b0 + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x2e1dce = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x27239e = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x5712a9 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x42f8b0 = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x2e1dce = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x27239e = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
            } else _0x5712a9 = ig['domHandler']['getElementById']('#canvas'), _0x5712a9 = ig['domHandler']['getOffsets'](_0x5712a9), _0x2e1dce = _0x5712a9['left'], _0x42f8b0 = _0x5712a9['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x5712a9 = Math['floor'](_0x2e1dce + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x42f8b0 = Math['floor'](_0x42f8b0 + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x2e1dce = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x27239e = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x5712a9 = Math['floor'](_0x2e1dce + this['pos']['x'] * _0x27239e) + 'px', _0x42f8b0 = Math['floor'](_0x42f8b0 + this['pos']['y'] * _0x27239e) + 'px', _0x2e1dce = Math['floor'](this['size']['x'] * _0x27239e) + 'px', _0x27239e = Math['floor'](this['size']['y'] * _0x27239e) + 'px');
            ig['domHandler']['css'](_0x30ebdb, {
                'float': 'left',
                'position': 'absolute',
                'left': _0x5712a9,
                'top': _0x42f8b0,
                'width': _0x2e1dce,
                'height': _0x27239e,
                'z-index': 0x3
            });
            ig['domHandler']['addEvent'](_0x30ebdb, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1);
            ig['domHandler']['appendChild'](_0x33d152, _0x871dbd);
            ig['domHandler']['appendChild'](_0x30ebdb, _0x33d152);
            ig['domHandler']['appendToBody'](_0x30ebdb);
            ig['Fullscreen']['divs'][_0x58a2d5] = {};
            ig['Fullscreen']['divs'][_0x58a2d5]['width'] = this['size']['x'];
            ig['Fullscreen']['divs'][_0x58a2d5]['height'] = this['size']['y'];
            ig['Fullscreen']['divs'][_0x58a2d5]['entity_pos_x'] = this['pos']['x'];
            ig['Fullscreen']['divs'][_0x58a2d5]['entity_pos_y'] = this['pos']['y'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.user-agent-patch')['defines'](function() {
    ig['ua']['touchDevice'] = 'ontouchstart' in window || window['navigator']['msMaxTouchPoints'] || window['navigator']['maxTouchPoints'];
    ig['ua']['is_mac'] = 'MacIntel' === navigator['platform'];
    var _0x5cbe53 = ig['ua'],
        _0x2d36b3;
    if (!(_0x2d36b3 = ig['ua']['touchDevice'] && ig['ua']['is_mac'])) _0x2d36b3 = -0x1 !== navigator['userAgent']['toLowerCase']()['indexOf']('ipad'), _0x2d36b3 = !_0x2d36b3 && navigator['userAgent']['match'](/Mac/) && navigator['maxTouchPoints'] && 0x2 < navigator['maxTouchPoints'] ? !0x0 : _0x2d36b3;
    _0x5cbe53['iOS'] = _0x2d36b3 || ig['ua']['iOS'];
    ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['mobile'];
});
ig['baked'] = !0x0;
ig['module']('plugins.data.color-rgb')['defines'](function() {
    ColorRGB = function(_0x2eb2c0, _0x518d39, _0x5c9272, _0x57418b) {
        this['r'] = _0x2eb2c0 || 0x0;
        this['g'] = _0x518d39 || 0x0;
        this['b'] = _0x5c9272 || 0x0;
        this['a'] = _0x57418b || 0x0;
    };
    ColorRGB['prototype'] = {
        'setRandomColor': function() {
            this['r'] = Math['round'](0xff * Math['random']());
            this['g'] = Math['round'](0xff * Math['random']());
            this['b'] = Math['round'](0xff * Math['random']());
        },
        'getStyle': function() {
            return 'rgba(' + this['r'] + ',' + this['g'] + ',' + this['b'] + ',' + this['a'] + ')';
        },
        'getHex': function() {
            for (var _0x3b429d = this['r']['toString'](0x10), _0x89f984 = this['g']['toString'](0x10), _0x4a76c1 = this['b']['toString'](0x10); 0x2 > _0x3b429d['length'];) _0x3b429d = '0' + _0x3b429d;
            for (; 0x2 > _0x89f984['length'];) _0x89f984 = '0' + _0x89f984;
            for (; 0x2 > _0x4a76c1['length'];) _0x4a76c1 = '0' + _0x4a76c1;
            return '#' + _0x3b429d + _0x89f984 + _0x4a76c1;
        },
        'getInvertedColor': function() {
            return new ColorRGB(0xff - this['r'], 0xff - this['g'], 0xff - this['b'], 0xff - this['a']);
        },
        'clone': function() {
            return new ColorRGB(this['r'], this['g'], this['b'], this['a']);
        }
    };
});
this['START_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('plugins.branding.splash')['requires']('impact.impact', 'impact.entity')['defines'](function() {
    ig['BrandingSplash'] = ig['Class']['extend']({
        'init': function() {
            ig['game']['spawnEntity'](EntityBranding, 0x0, 0x0);
            console['log']('spawn branding');
        }
    });
    EntityBranding = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        'splash': new ig['Image']('images/invisible.png'),
        'init': function(_0x2e838e, _0x2c660e, _0x31ae2e) {
            this['parent'](_0x2e838e, _0x2c660e, _0x31ae2e);
            0x140 >= ig['system']['width'] ? (this['size']['x'] = 0x140, this['size']['y'] = 0xc8) : (this['size']['x'] = 0x1e0, this['size']['y'] = 0xf0);
            this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2;
            this['pos']['y'] = -this['size']['y'] - 0xc8;
            this['endPosY'] = (ig['system']['height'] - this['size']['y']) / 0x2;
            _0x2e838e = this['tween']({
                'pos': {
                    'y': this['endPosY']
                }
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Bounce']['EaseIn']
            });
            _0x2c660e = this['tween']({}, 2.5, {
                'onComplete': function() {
                    ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
                }
            });
            _0x2e838e['chain'](_0x2c660e);
            _0x2e838e['start']();
            this['currentAnim'] = this['anims']['idle'];
        },
        'createClickableLayer': function() {
            console['log']('Build clickable layer');
        },
        'doesClickableLayerExist': function(_0x40e667) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x40e667) return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0x23e627, _0x31ec55, _0x438d8f) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x23e627) ? (ig['game']['showOverlay']([_0x23e627]), $('#' + _0x23e627)['find']('[href]')['attr']('href', _0x31ec55)) : this['createClickableOutboundLayer'](_0x23e627, _0x31ec55, 'images/invisible.png', _0x438d8f));
        },
        'createClickableOutboundLayer': function(_0x21fda8, _0x54fedc, _0x10f041, _0x342acf) {
            var _0xcc3808 = ig['$new']('div');
            _0xcc3808['id'] = _0x21fda8;
            document['body']['appendChild'](_0xcc3808);
            _0xcc3808 = $('#' + _0xcc3808['id']);
            _0xcc3808['css']('float', 'left');
            _0xcc3808['css']('position', 'absolute');
            if (ig['ua']['mobile']) {
                var _0x826477 = window['innerHeight'] / mobileHeight,
                    _0x45915a = window['innerWidth'] / mobileWidth;
                _0xcc3808['css']('left', this['pos']['x'] * _0x45915a);
                _0xcc3808['css']('top', this['pos']['y'] * _0x826477);
                _0xcc3808['css']('width', this['size']['x'] * _0x45915a);
                _0xcc3808['css']('height', this['size']['y'] * _0x826477);
            } else _0x826477 = w / 0x2 - destW / 0x2, _0x45915a = h / 0x2 - destH / 0x2, console['log'](_0x826477, _0x45915a), _0xcc3808['css']('left', _0x826477 + this['pos']['x'] * multiplier), _0xcc3808['css']('top', _0x45915a + this['pos']['y'] * multiplier), _0xcc3808['css']('width', this['size']['x'] * multiplier), _0xcc3808['css']('height', this['size']['y'] * multiplier);
            _0x342acf ? _0xcc3808['html']('<a target=\x27_blank\x27 href=\x27' + _0x54fedc + '\x27><img style=\x27width:100%;height:100%\x27 src=\x27' + _0x10f041 + '\x27></a>') : _0xcc3808['html']('<a href=\x27' + _0x54fedc + '\x27><img style=\x27width:100%;height:100%\x27 src=\x27' + _0x10f041 + '\x27></a>');
            dynamicClickableEntityDivs[_0x21fda8] = {};
            dynamicClickableEntityDivs[_0x21fda8]['width'] = this['size']['x'] * multiplier;
            dynamicClickableEntityDivs[_0x21fda8]['height'] = this['size']['y'] * multiplier;
            dynamicClickableEntityDivs[_0x21fda8]['entity_pos_x'] = this['pos']['x'];
            dynamicClickableEntityDivs[_0x21fda8]['entity_pos_y'] = this['pos']['y'];
        },
        'draw': function() {
            ig['system']['context']['fillStyle'] = '#ffffff';
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            ig['system']['context']['fillStyle'] = '#000';
            ig['system']['context']['font'] = '12px Arial';
            ig['system']['context']['textAlign'] = 'left';
            0x140 >= ig['system']['width'] ? ig['system']['context']['fillText']('powered by Gradle', ig['system']['width'] - 0x96, ig['system']['height'] - 0xf) : ig['system']['context']['fillText']('powered by Gradle', ig['system']['width'] - 0xa0, ig['system']['height'] - 0xf);
            this['parent']();
            this['splash'] && ig['system']['context']['drawImage'](this['splash']['data'], 0x0, 0x0, this['splash']['data']['width'], this['splash']['data']['height'], this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
        }
    });
});
this['END_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button')['requires']('impact.entity', 'plugins.data.vector')['defines'](function() {
    EntityButton = ig['Entity']['extend']({
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'type': ig['Entity']['TYPE']['A'],
        'size': new Vector2(0x30, 0x30),
        'fillColor': null,
        'zIndex': 0x17318,
        'init': function(_0x8d6d17, _0x51b94c, _0x25fc14) {
            this['parent'](_0x8d6d17, _0x51b94c, _0x25fc14);
            !ig['global']['wm'] && !isNaN(_0x25fc14['zIndex']) && (this['zIndex'] = _0x25fc14['zIndex']);
            _0x8d6d17 = Math['floor'](0x100 * Math['random']());
            _0x51b94c = Math['floor'](0x100 * Math['random']());
            _0x25fc14 = Math['floor'](0x100 * Math['random']());
            this['fillColor'] = 'rgba(' + _0x8d6d17 + ',' + _0x25fc14 + ',' + _0x51b94c + ',1)';
        },
        'clicked': function() {
            throw 'no implementation on clicked()';
        },
        'clicking': function() {
            throw 'no implementation on clicking()';
        },
        'released': function() {
            throw 'no implementation on released()';
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.clickable-div-layer')['requires']('plugins.data.vector')['defines'](function() {
    ClickableDivLayer = ig['Class']['extend']({
        'pos': new Vector2(0x0, 0x0),
        'size': new Vector2(0x0, 0x0),
        'identifier': null,
        'invisImagePath': 'images/invisible.png',
        'init': function(_0x40e860) {
            this['pos'] = new Vector2(_0x40e860['pos']['x'], _0x40e860['pos']['y']);
            this['size'] = new Vector2(_0x40e860['size']['x'], _0x40e860['size']['y']);
            var _0x275356 = 'more-games',
                _0x4e2c51 = '',
                _0x21ef62 = !0x1;
            _0x40e860['div_layer_name'] && (_0x275356 = _0x40e860['div_layer_name']);
            _0x4e2c51 = gradle.developer_link;
            _0x40e860['newWindow'] && (_0x21ef62 = _0x40e860['newWindow']);
            this['createClickableLayer'](_0x275356, _0x4e2c51, _0x21ef62);
        },
        'createClickableLayer': function(_0x41ae77, _0x78727c, _0x1b2e12) {
            this['identifier'] = _0x41ae77;
            var _0x14e6f9 = ig['domHandler']['getElementById']('#' + _0x41ae77);
            _0x14e6f9 ? (ig['domHandler']['show'](_0x14e6f9), ig['domHandler']['attr'](_0x14e6f9, 'href', _0x78727c)) : this['createClickableOutboundLayer'](_0x41ae77, _0x78727c, this['invisImagePath'], _0x1b2e12);
        },
        'update': function(_0x469aa2, _0x13b941) {
            this['pos']['x'] === _0x469aa2 && this['pos']['y'] === _0x13b941 || (ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']] = {}, ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['width'] = this['size']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['height'] = this['size']['y'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_y'] = this['pos']['y']);
        },
        'createClickableOutboundLayer': function(_0x5d4426, _0x34b07a, _0x1f0205, _0x32a591) {
            var _0x297e4e = ig['domHandler']['create']('div');
            ig['domHandler']['attr'](_0x297e4e, 'id', _0x5d4426);
            var _0x3b91bd = ig['domHandler']['create']('a');
            ig['domHandler']['addEvent'](_0x297e4e, 'mousedown', function(_0x1ac614) {
                _0x1ac614['preventDefault']();
            });
            _0x32a591 ? (ig['domHandler']['attr'](_0x3b91bd, 'href', _0x34b07a), ig['domHandler']['attr'](_0x3b91bd, 'target', '_blank')) : ig['domHandler']['attr'](_0x3b91bd, 'href', _0x34b07a);
            _0x34b07a = ig['domHandler']['create']('img');
            ig['domHandler']['css'](_0x34b07a, {
                'width': '100%',
                'height': '100%'
            });
            ig['domHandler']['attr'](_0x34b07a, 'src', _0x1f0205);
            _0x1f0205 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            if (ig['ua']['mobile']) {
                _0x32a591 = ig['domHandler']['getElementById']('#canvas');
                _0x32a591 = ig['domHandler']['getOffsets'](_0x32a591);
                var _0x998fea = _0x32a591['left'],
                    _0x34dded = _0x32a591['top'];
                console['log'](_0x32a591['left']);
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x32a591 = Math['floor'](_0x998fea + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x34dded = Math['floor'](_0x34dded + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x998fea = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x1f0205 = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x32a591 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x34dded = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x998fea = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1f0205 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
            } else _0x32a591 = ig['domHandler']['getElementById']('#canvas'), _0x32a591 = ig['domHandler']['getOffsets'](_0x32a591), _0x998fea = _0x32a591['left'], _0x34dded = _0x32a591['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x32a591 = Math['floor'](_0x998fea + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x34dded = Math['floor'](_0x34dded + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x998fea = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1f0205 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x32a591 = Math['floor'](_0x998fea + this['pos']['x'] * _0x1f0205) + 'px', _0x34dded = Math['floor'](_0x34dded + this['pos']['y'] * _0x1f0205) + 'px', _0x998fea = Math['floor'](this['size']['x'] * _0x1f0205) + 'px', _0x1f0205 = Math['floor'](this['size']['y'] * _0x1f0205) + 'px');
            ig['domHandler']['css'](_0x297e4e, {
                'float': 'left',
                'position': 'absolute',
                'left': _0x32a591,
                'top': _0x34dded,
                'width': _0x998fea,
                'height': _0x1f0205,
                'z-index': 0x3
            });
            ig['domHandler']['addEvent'](_0x297e4e, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1);
            ig['domHandler']['appendChild'](_0x3b91bd, _0x34b07a);
            ig['domHandler']['appendChild'](_0x297e4e, _0x3b91bd);
            ig['domHandler']['appendToBody'](_0x297e4e);
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x5d4426] = {};
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x5d4426]['width'] = this['size']['x'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x5d4426]['height'] = this['size']['y'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x5d4426]['entity_pos_x'] = this['pos']['x'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x5d4426]['entity_pos_y'] = this['pos']['y'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-branding-logo')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonBrandingLogo = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('images/invisible.png', 1, 1),
        'zIndex': 0x2711,
        'size': {
            'x': 0x40,
            'y': 0x42
        },
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'branding-logo',
        'name': 'brandinglogo',
        'init': function(_0x2d4711, _0x2383a0, _0x50d19d) {
            this['parent'](_0x2d4711, _0x2383a0, _0x50d19d);
            if (!ig['global']['wm']) {
                if ('undefined' == typeof wm)
                    if (_SETTINGS['Branding']['Logo']['Enabled']) this['size']['x'] = 1, this['size']['y'] = 1, this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], _0x50d19d && _0x50d19d['centralize'] && (this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, console['log']('centralize true ... centering branded logo ...'));
                    else {
                        this['kill']();
                        return;
                    }
                this['div_layer_name'] = _0x50d19d['div_layer_name'] ? _0x50d19d['div_layer_name'] : 'branding-logo';
            }
        },
        'show': function() {
            var _0x24d6c9 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['show'](_0x24d6c9);
        },
        'hide': function() {
            var _0x22ad27 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['hide'](_0x22ad27);
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.branding-logo-placeholder')['requires']('impact.entity', 'game.entities.buttons.button-branding-logo')['defines'](function() {
    EntityBrandingLogoPlaceholder = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0, 0, 255, 0.7)',
        'init': function(_0x391c88, _0x1aae33, _0x3caacc) {
            this['parent'](_0x391c88, _0x1aae33, _0x3caacc);
            if (_0x3caacc) switch (console['log']('settings found ... using that div layer name'), _0x391c88 = _0x3caacc['div_layer_name'], console['log']('settings.centralize:', _0x3caacc['centralize']), _0x3caacc['centralize']) {
                case 'true':
                    console['log']('centralize true');
                    centralize = !0x0;
                    break;
                case 'false':
                    console['log']('centralize false');
                    centralize = !0x1;
                    break;
                default:
                    console['log']('default ... centralize false'), centralize = !0x1;
            } else _0x391c88 = 'branding-logo', centralize = !0x1;
            
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-more-games')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonMoreGames = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('images/invisible.png', 0x40, 0x42),
        'size': {
            'x': 0x40,
            'y': 0x42
        },
        'zIndex': 0x2ee,
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'more-games',
        'name': 'moregames',
        'init': function(_0x3fb49a, _0x1d807e, _0x43e151) {
            this['parent'](_0x3fb49a, _0x1d807e, _0x43e151);
            ig['global']['wm'] || (this['div_layer_name'] = _0x43e151['div_layer_name'] ? _0x43e151['div_layer_name'] : 'more-games', _SETTINGS['MoreGames']['Enabled'] ? (this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], 
			this['link'] = gradle.developer_link, _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']());
        },
        'show': function() {
            var _0x1045eb = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0x1045eb && ig['domHandler']['show'](_0x1045eb);
        },
        'hide': function() {
            var _0xeb5f56 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0xeb5f56 && ig['domHandler']['hide'](_0xeb5f56);
        },
        'clicked': function() {
			console.log('more click');
		},
        'clicking': function() {
			console.log('more clicking');
		},
        'released': function() {
			gradle.event('btn_more');
		}
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-shield')['requires']('impact.entity')['defines'](function() {
    EntityOpeningShield = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'move': 0x0,
        'mIconAnim': 0x0,
        'shieldAnim': 0x0,
        'titleAnim': 0x0,
        'shieldImage': new ig['Image']('images/invisible.png'),
        'mIconImage': new ig['Image']('images/invisible.png'),
        'titleImage': new ig['Image']('images/invisible.png'),
        'init': function(_0x18aeb0, _0x6c2327, _0x1baff9) {
            this['parent'](_0x18aeb0, _0x6c2327, _0x1baff9);
        },
        'ready': function() {
            if (!ig['wm'])
                if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                    this['initTimer'] = new ig['Timer'](0.1);
                    try {
                        ig['soundHandler']['playSound'](ig['soundHandler']['SOUNDID']['openingSound']);
                    } catch (_0x50f6fd) {
                        console['log'](_0x50f6fd);
                    }
                } else ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
        },
        'update': function() {
            this['parent']();
            this['updateOriginalShieldOpening']();
        },
        'draw': function() {
            this['parent']();
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawOriginalShieldOpening']());
        },
        'updateOriginalShieldOpening': function() {
            this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null, this['sheildTimer'] = new ig['Timer'](0.05));
            this['sheildTimer'] && 0x0 < this['sheildTimer']['delta']() && (0x3 > this['shieldAnim'] ? (this['shieldAnim']++, this['sheildTimer']['reset']()) : (this['sheildTimer'] = null, this['moveTimer'] = new ig['Timer'](0.001), this['mIconTimer'] = new ig['Timer'](0.05), this['titleTimer'] = new ig['Timer'](0.15)));
            this['moveTimer'] && 0x0 < this['moveTimer']['delta']() && (this['move'] += 0.3, this['moveTimer']['reset']());
            this['mIconTimer'] && 0x0 < this['mIconTimer']['delta']() && (0xc > this['mIconAnim'] ? (this['mIconAnim']++, this['moveTimer']['reset']()) : this['mIconTimer'] = null);
            this['titleTimer'] && 0x0 < this['titleTimer']['delta']() && (0xb > this['titleAnim'] ? (this['titleAnim']++, this['titleTimer']['reset']()) : (this['titleTimer'] = null, this['nextLevelTimer'] = new ig['Timer'](0x1)));
            this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null, ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1);
        },
        'drawOriginalShieldOpening': function() {
            if (this['moveTimer']) {
                var _0x467ed2 = ig['system']['context'];
                _0x467ed2['save']();
                var _0x46e2bd = ig['system']['width'] / 0x2,
                    _0x56ca27 = ig['system']['height'] / 0x2;
                _0x467ed2['translate'](_0x46e2bd, _0x56ca27);
                _0x467ed2['rotate'](this['move'] * Math['PI'] / 0xb4);
                _0x467ed2['beginPath']();
                _0x467ed2['moveTo'](0x0, 0x0);
                for (var _0x2f0d7a = 0x0, _0xe3f729 = 0x1; 0x30 >= _0xe3f729; _0xe3f729 += 0x1) _0x467ed2['lineTo'](0x0 + 0x320 * Math['cos'](0x2 * _0xe3f729 * Math['PI'] / 0x30), 0x0 + 0x320 * Math['sin'](0x2 * _0xe3f729 * Math['PI'] / 0x30)), _0x2f0d7a++, 0x2 == _0x2f0d7a && (_0x2f0d7a = 0x0, _0x467ed2['lineTo'](0x0, 0x0));
                _0x467ed2['translate'](-_0x46e2bd, -_0x56ca27);
                _0x46e2bd = _0x467ed2['createRadialGradient'](_0x46e2bd, _0x56ca27, 0x64, _0x46e2bd, _0x56ca27, 0xfa);
                _0x46e2bd['addColorStop'](0x0, 'rgba(255,255,255,0.1)');
                _0x46e2bd['addColorStop'](0x1, 'rgba(0,0,0,0)');
                _0x467ed2['fillStyle'] = _0x46e2bd;
                _0x467ed2['fill']();
                _0x467ed2['restore']();
            }
            this['shieldImage']['drawTile'](ig['system']['width'] / 0x2 - 0x5b, 0x0 - (0x300 - ig['system']['height']) / 0x2, this['shieldAnim'], 0xb6, 0x300);
            this['moveTimer'] && (this['mIconImage']['drawTile'](ig['system']['width'] / 0x2 - 0x60, ig['system']['height'] / 0x2 - 0x46, this['mIconAnim'], 0xa6, 0xa0), this['titleImage']['drawTile'](ig['system']['width'] / 0x2 - 0xcc, ig['system']['height'] / 0x2 + 0x64, this['titleAnim'], 0x199, 0x4c));
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-miffi')['requires']('impact.entity')['defines'](function() {
    EntityOpeningmiffi = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'miffiAnim': -0x1,
        'miffiImage': new ig['Image']('images/invisible.png'),
        'miffiTitleImage': new ig['Image']('images/invisible.png'),
        'soundKey': 'miffiopeningSound',
        'init': function(_0x440244, _0x40bf4e, _0x3c3f99) {
            this['parent'](_0x440244, _0x40bf4e, _0x3c3f99);
        },
        'ready': function() {
            
        },
        'update': function() {
            this['parent']();
            this['updatemiffiOpening']();
            this['unlockWebAudio']();
        },
        'unlockWebAudio': function() {
            if (ig['input']['released']('click')) try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x52b2a7) {}
        },
        'draw': function() {
            this['parent']();
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawmiffiOpening']());
        },
        'updatemiffiOpening': function() {
            if (!ig['wm'])
                ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
        },
        'drawmiffiOpening': function() {
            var _0x232fa5 = ig['system']['context']['createLinearGradient'](0x0, 0x0, 0x0, ig['system']['height']);
            _0x232fa5['addColorStop'](0x0, '#ffed94');
            _0x232fa5['addColorStop'](0x1, '#ffcd85');
            ig['system']['context']['fillStyle'] = _0x232fa5;
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            0x0 <= this['miffiAnim'] && (this['miffiImage']['drawTile'](ig['system']['width'] / 0x2 - this['miffiImage']['width'] / 0x8, ig['system']['height'] / 0x2 - this['miffiImage']['height'] / 0x4, this['miffiAnim'], 0xda, 0x145), this['miffiTitleImage']['drawTile'](ig['system']['width'] / 0x2 - this['miffiTitleImage']['width'] / 0x2, ig['system']['height'] / 0x2 + this['miffiImage']['height'] / 0x4 + 0xa, this['miffiAnim'], 0x17c, 0x25));
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer')['requires']('impact.entity')['defines'](function() {
    EntityPointer = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['BOTH'],
        'size': new Vector2(0x1, 0x1),
        'isFirstPressed': !0x1,
        'isPressed': !0x1,
        'isReleased': !0x1,
        'isHovering': !0x1,
        'hoveringItem': null,
        'objectArray': [],
        'clickedObjectList': [],
        'ignorePause': !0x0,
        'zIndex': 0x157c,
        'check': function(_0x2e4b38) {
            _0x2e4b38 instanceof EntityPlayer || (_0x2e4b38 instanceof EntityEnemy || _0x2e4b38 instanceof EntityObstacle) || this['objectArray']['push'](_0x2e4b38);
        },
        'clickObject': function(_0x2fff07) {
            this['isFirstPressed'] && 'function' == typeof _0x2fff07['clicked'] && (_0x2fff07['clicked'](), this['addToClickedObjectList'](_0x2fff07));
            this['isPressed'] && !this['isReleased'] && 'function' == typeof _0x2fff07['clicking'] && _0x2fff07['clicking']();
            this['isReleased'] && 'function' == typeof _0x2fff07['released'] && (_0x2fff07['released'](), this['removeFromClickedObjectList'](_0x2fff07));
        },
        'refreshPos': function() {
            this['pos'] = ig['game']['io']['getClickPos']();
        },
        'update': function() {
            this['parent']();
            this['refreshPos']();
            var _0x4995ff = null,
                _0x15fc00 = -0x1;
            for (a = this['objectArray']['length'] - 0x1; - 0x1 < a; a--) this['objectArray'][a]['zIndex'] > _0x15fc00 && (_0x15fc00 = this['objectArray'][a]['zIndex'], _0x4995ff = this['objectArray'][a]);
            if (null != _0x4995ff) null != this['hoveringItem'] ? this['hoveringItem'] != _0x4995ff && ('function' == typeof this['hoveringItem']['leave'] && this['hoveringItem']['leave'](), 'function' == typeof _0x4995ff['over'] && _0x4995ff['over']()) : 'function' == typeof _0x4995ff['over'] && _0x4995ff['over'](), this['hoveringItem'] = _0x4995ff, this['clickObject'](_0x4995ff), this['objectArray'] = [];
            else if (null != this['hoveringItem'] && 'function' == typeof this['hoveringItem']['leave'] && (this['hoveringItem']['leave'](), this['hoveringItem'] = null), this['isReleased']) {
                for (_0x4995ff = 0x0; _0x4995ff < this['clickedObjectList']['length']; _0x4995ff++) _0x15fc00 = this['clickedObjectList'][_0x4995ff], 'function' == typeof _0x15fc00['releasedOutside'] && _0x15fc00['releasedOutside']();
                this['clickedObjectList'] = [];
            }
            this['isFirstPressed'] = ig['input']['pressed']('click');
            this['isReleased'] = ig['input']['released']('click');
            this['isPressed'] = ig['input']['state']('click');
        },
        'addToClickedObjectList': function(_0x1e27a6) {
            this['clickedObjectList']['push'](_0x1e27a6);
        },
        'removeFromClickedObjectList': function(_0x3d5598) {
            for (var _0x31c76a = [], _0x5eb6ac = 0x0; _0x5eb6ac < this['clickedObjectList']['length']; _0x5eb6ac++) {
                var _0x1f8e81 = this['clickedObjectList'][_0x5eb6ac];
                _0x1f8e81 != _0x3d5598 && _0x31c76a['push'](_0x1f8e81);
            }
            this['clickedObjectList'] = _0x31c76a;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer-selector')['requires']('game.entities.pointer')['defines'](function() {
    EntityPointerSelector = EntityPointer['extend']({
        'zIndex': 0x3e8,
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0, 0, 255, 0.7)',
        'size': {
            'x': 0x14,
            'y': 0x14
        },
        'init': function(_0x39f1af, _0x4a19e1, _0x317f96) {
            this['parent'](_0x39f1af, _0x4a19e1, _0x317f96);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.select')['requires']('impact.entity')['defines'](function() {
    EntitySelect = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'checkAgainst': ig['Entity']['TYPE']['A'],
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'canSelect': !0x1,
        'canSelectTimerDuration': 0.35,
        'zIndex': 0x1869f,
        'isHovering': !0x1,
        'isSelected': !0x1,
        'init': function(_0x1d3743, _0x40287f, _0x19794e) {
            this['parent'](_0x1d3743, _0x40287f, _0x19794e);
            this['canSelectTimer'] = new ig['Timer'](this['canSelectTimerDuration']);
        },
        'doesClickableLayerExist': function(_0x12e81d) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x12e81d) return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0xb4ba, _0x34bf09, _0x583dfe) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0xb4ba) ? (ig['game']['showOverlay']([_0xb4ba]), $('#' + _0xb4ba)['find']('[href]')['attr']('href', _0x34bf09)) : this['createClickableOutboundLayer'](_0xb4ba, _0x34bf09, 'images/invisible.png', _0x583dfe));
        },
        'createClickableOutboundLayer': function(_0x43a5e1, _0x5193ab, _0x4bb0fb, _0x56a7dc) {
            var _0x268746 = ig['$new']('div');
            _0x268746['id'] = _0x43a5e1;
            document['body']['appendChild'](_0x268746);
            $('#' + _0x268746['id'])['css']('float', 'left');
            $('#' + _0x268746['id'])['css']('width', this['size']['x'] * multiplier);
            $('#' + _0x268746['id'])['css']('height', this['size']['y'] * multiplier);
            $('#' + _0x268746['id'])['css']('position', 'absolute');
            var _0x4833a4 = w / 0x2 - destW / 0x2,
                _0x1c5345 = h / 0x2 - destH / 0x2;
            w == mobileWidth ? ($('#' + _0x268746['id'])['css']('left', this['pos']['x']), $('#' + _0x268746['id'])['css']('top', this['pos']['y'])) : ($('#' + _0x268746['id'])['css']('left', _0x4833a4 + this['pos']['x'] * multiplier), $('#' + _0x268746['id'])['css']('top', _0x1c5345 + this['pos']['y'] * multiplier));
            _0x56a7dc ? $('#' + _0x268746['id'])['html']('<a target=\x27_blank\x27 href=\x27' + _0x5193ab + '\x27><img style=\x27width:100%;height:100%\x27 src=\x27' + _0x4bb0fb + '\x27></a>') : $('#' + _0x268746['id'])['html']('<a href=\x27' + _0x5193ab + '\x27><img style=\x27width:100%;height:100%\x27 src=\x27' + _0x4bb0fb + '\x27></a>');
            dynamicClickableEntityDivs[_0x43a5e1] = {};
            dynamicClickableEntityDivs[_0x43a5e1]['width'] = $('#' + _0x268746['id'])['width']();
            dynamicClickableEntityDivs[_0x43a5e1]['height'] = $('#' + _0x268746['id'])['height']();
            dynamicClickableEntityDivs[_0x43a5e1]['entity_pos_x'] = this['pos']['x'];
            dynamicClickableEntityDivs[_0x43a5e1]['entity_pos_y'] = this['pos']['y'];
        },
        'hovered': function() {
            this['isHovering'] = !0x0;
            this['dehoverOthers']();
        },
        'dehoverOthers': function() {
            var _0x4debe4 = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x4debe4['length']; i++) _0x4debe4[i] != this && (_0x4debe4[i]['isHovering'] = !0x1);
        },
        'deselectOthers': function() {
            var _0x1e9d26 = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x1e9d26['length']; i++) _0x1e9d26[i] != this && (_0x1e9d26[i]['isSelected'] = !0x1);
        },
        'update': function() {
            this['parent']();
            this['canSelectTimer'] && 0x0 < this['canSelectTimer']['delta']() && (this['canSelect'] = !0x0, this['canSelectTimer'] = null);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.levels.opening')['requires']('impact.image', 'game.entities.opening-miffi')['defines'](function() {
    LevelOpening = {
        'entities': [{
            'type': 'EntityOpeningmiffi',
            'x': 0x208,
            'y': 0xd4
        }],
        'layer': []
    };
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-sound')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonSound = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('images/invisible.png', 1, 1),
        'zIndex': 0x2711,
        'size': {
            'x': 0x32,
            'y': 0x32
        },
        'mutetest': !0x1,
        'name': 'soundtest',
        'init': function(_0x3b61cf, _0x297fdb, _0x460b5e) {
            this['parent'](_0x3b61cf, _0x297fdb, _0x460b5e);
        },
        'draw': function() {
            this['parent']();
            ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], 0x32, 0x32);
        },
        'clicked': function() {
            console['log']('pressed');
            this['mutetest'] ? (console['log']('unmute'), ig['soundHandler']['unmuteAll'](!0x0), this['mutetest'] = !0x1) : (console['log']('mute'), ig['soundHandler']['muteAll'](!0x0), this['mutetest'] = !0x0);
        },
        'clicking': function() {},
        'released': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.test')['requires']('impact.entity')['defines'](function() {
    EntityTest = ig['Entity']['extend']({
        'zIndex': 0x1869f,
        'pos': new Vector2(0x0, 0x0),
        'size': new Vector2(0x14, 0x14),
        'color': new ColorRGB(0x7d, 0xff, 0x7d, 0x1),
        'init': function(_0x109acc, _0x462081, _0x206711) {
            this['parent'](_0x109acc, _0x462081, _0x206711);
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x501428 = ig['system']['context'];
            _0x501428['fillStyle'] = this['color']['getHex']();
            _0x501428['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.test-control')['requires']('impact.entity', 'game.entities.test')['defines'](function() {
    EntityTestControl = ig['Entity']['extend']({
        'zIndex': 0x1869f,
        'size': new Vector2(0x14, 0x14),
        'testEnt': null,
        'tween': null,
        'init': function(_0x2b9bbd, _0x9a4791, _0x49a05b) {
            this['parent'](_0x2b9bbd, _0x9a4791, _0x49a05b);
            ig['global']['wm'] || (ig['game']['testControl'] = this, this['initTestCase3'](), ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
                'enterImage': new ig['Image']('images/enter-fullscreen-transparent.png'),
                'exitImage': new ig['Image']('images/exit-fullscreen-transparent.png')
            }));
        },
        'ready': function() {
            this['parent']();
            console['log']('ready');
        },
        'initTestCase1': function() {
            this['initTestCase1Initialized'] = !0x0;
            this['testEnt'] = ig['game']['spawnEntity'](EntityTest, 0xc8, 0xc8);
            this['tweenSlow'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
                'x': 0x64,
                'y': 0x64
            }, 0x7d0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['interpolation'](ig['Tween']['Interpolation']['Bezier'])['repeat'](0x2)['yoyo'](!0x0);
            this['tweenFast'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
                'x': 0x12c,
                'y': 0x12c
            }, 0x1f4)['repeat'](0x4)['yoyo'](!0x0);
            this['tweenSlow']['chain'](this['tweenFast']);
            this['tweenFast']['chain'](this['tweenSlow']);
            this['tweenFast']['start']();
        },
        'initTestCase2': function() {
            this['initTestCase2Initialized'] = !0x0;
            this['coordsTween'] = new ig['TweenDef']({
                'x': 0x0,
                'y': 0x0
            })['to']({
                'x': 0x64,
                'y': 0x64
            }, 0x3e8)['easing'](ig['Tween']['Easing']['Bounce']['EaseInOut'])['onStart'](function(_0x513b27) {
                console['log']('Start', _0x513b27);
                this['coordsTween']['pause']();
            }['bind'](this))['onUpdate'](function() {
                0.5 <= this['coordsTween']['_currentElapsed'] && this['coordsTween']['stop']();
            }['bind'](this))['onStop'](function(_0x5ed057) {
                console['log']('Stop', _0x5ed057);
            }['bind'](this))['onComplete'](function(_0x401f29) {
                console['log']('Complete', _0x401f29);
            }['bind'](this))['onPause'](function(_0x4f4689) {
                console['log']('Pause', _0x4f4689);
                this['coordsTween']['resume']();
            }['bind'](this))['onResume'](function(_0x9914ba) {
                console['log']('Resume', _0x9914ba);
            }['bind'](this))['start']();
        },
        'initTestCase3': function() {
            this['initTestCase3Initialized'] = !0x0;
            this['spawnTweenEntity']();
            this['spawnTweenControlButtons']();
        },
        'initTestCase4': function() {
            this['initTestCase4Initialized'] = !0x0;
            this['testEntityA'] = ig['game']['spawnEntity'](EntityTest, 0x1c2, 0xc8, {
                'control': this,
                'size': new Vector2(0x14, 0x28)
            });
            this['testEntityB'] = ig['game']['spawnEntity'](EntityTest, 0x1db, 0xc8, {
                'control': this,
                'size': new Vector2(0x28, 0x14)
            });
            this['testEntityB']['color']['r'] = 0xff;
            this['testEntityB']['color']['g'] = 0x0;
            this['testEntityB']['color']['b'] = 0x0;
        },
        'spawnTweenEntity': function() {
            this['tweenEntity'] = ig['game']['spawnEntity'](EntityTest, 0x37f, 0x31, {
                'control': this,
                'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
            });
            this['tweenControl'] = new ig['TweenDef'](this['tweenEntity']['pos'])['to']({
                'y': 0x14a
            }, 0x1388);
        },
        'spawnTweenControlButtons': function() {
            this['tweenControlButtons'] = {
                'start': ig['game']['spawnEntity'](EntityButton, 0x320, 0x32, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                }),
                'stop': ig['game']['spawnEntity'](EntityButton, 0x320, 0x64, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                }),
                'pause': ig['game']['spawnEntity'](EntityButton, 0x320, 0x96, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                }),
                'resume': ig['game']['spawnEntity'](EntityButton, 0x320, 0xc8, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                }),
                'end': ig['game']['spawnEntity'](EntityButton, 0x320, 0xfa, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                }),
                'pGame': ig['game']['spawnEntity'](EntityButton, 0x320, 0x12c, {
                    'control': this,
                    'size': new Vector2(0x44, 0x30),
                    'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
                })
            };
            this['setupTweenControlButtons']();
        },
        'setupTweenControlButtons': function() {
            var _0x103108 = null;
            for (buttonKey in this['tweenControlButtons']) _0x103108 = this['tweenControlButtons'][buttonKey], _0x103108['name'] = buttonKey, _0x103108['backgroundColor'] = _0x103108['color']['getStyle'](), _0x103108['foregroundColor'] = _0x103108['color']['getInvertedColor']()['getStyle'](), _0x103108['draw'] = function() {
                ig['system']['context']['fillStyle'] = this['backgroundColor'];
                ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
                ig['system']['context']['fillStyle'] = this['foregroundColor'];
                ig['system']['context']['font'] = '18px Arial';
                ig['system']['context']['textBaseline'] = 'middle';
                ig['system']['context']['textAlign'] = 'center';
                ig['system']['context']['fillText'](this['name'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.5 * this['size']['y']);
            };
            this['tweenControlButtons']['start']['clicked'] = function() {
                console['log']('start');
                this['control']['tweenControl']['start']();
            };
            this['tweenControlButtons']['start']['clicking'] = function() {};
            this['tweenControlButtons']['start']['released'] = function() {};
            this['tweenControlButtons']['stop']['clicked'] = function() {
                console['log']('stop');
                this['control']['tweenControl']['stop']();
            };
            this['tweenControlButtons']['stop']['clicking'] = function() {};
            this['tweenControlButtons']['stop']['released'] = function() {};
            this['tweenControlButtons']['pause']['clicked'] = function() {
                console['log']('pause');
                this['control']['tweenControl']['pause']();
            };
            this['tweenControlButtons']['pause']['clicking'] = function() {};
            this['tweenControlButtons']['pause']['released'] = function() {};
            this['tweenControlButtons']['resume']['clicked'] = function() {
                console['log']('resume');
                this['control']['tweenControl']['resume']();
            };
            this['tweenControlButtons']['resume']['clicking'] = function() {};
            this['tweenControlButtons']['resume']['released'] = function() {};
            this['tweenControlButtons']['end']['clicked'] = function() {
                console['log']('end');
                this['control']['tweenControl']['end']();
            };
            this['tweenControlButtons']['end']['clicking'] = function() {};
            this['tweenControlButtons']['end']['released'] = function() {};
            this['tweenControlButtons']['pGame']['clicked'] = function() {
                ig['game']['pauseGame']();
            };
            this['tweenControlButtons']['pGame']['clicking'] = function() {};
            this['tweenControlButtons']['pGame']['released'] = function() {};
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            !0x0 === this['testCase3Initialized'] && this['drawTestCase3Info']();
        },
        'drawTestCase3Info': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.levels.test-desktop')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control')['defines'](function() {
    LevelTestDesktop = {
        'entities': [{
            'type': 'EntityBrandingLogoPlaceholder',
            'x': 0x128,
            'y': 0x18c,
            'settings': {
                'div_layer_name': 'layer_mainmenu',
                'centralize': 'true'
            }
        }, {
            'type': 'EntityButtonMoreGames',
            'x': 0x244,
            'y': 0x11c,
            'settings': {
                'div_layer_name': 'layer_moregames_mainmenu'
            }
        }, {
            'type': 'EntityPointer',
            'x': 0x260,
            'y': 0x78
        }, {
            'type': 'EntityButtonSound',
            'x': 0x14c,
            'y': 0x11c
        }, {
            'type': 'EntityTestControl',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': [{
            'name': 'background',
            'width': 0x10,
            'height': 0x9,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/invisible.png',
            'repeat': !0x1,
            'preRender': !0x0,
            'distance': '1',
            'tilesize': 0x3c,
            'foreground': !0x1,
            'data': [
                [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10],
                [0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20],
                [0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30],
                [0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40],
                [0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50],
                [0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60],
                [0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70],
                [0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80],
                [0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig['Image']('images/invisible.png')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.test-mobile')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control')['defines'](function() {
    LevelTestMobile = {
        'entities': [{
            'type': 'EntityBrandingLogoPlaceholder',
            'x': 0xd8,
            'y': 0x224,
            'settings': {
                'div_layer_name': 'layer_mainmenu',
                'centralize': 'true'
            }
        }, {
            'type': 'EntityButtonMoreGames',
            'x': 0xee,
            'y': 0x271,
            'settings': {
                'div_layer_name': 'layer_moregames_mainmenu'
            }
        }, {
            'type': 'EntityPointer',
            'x': 0x1bc,
            'y': 0xc0
        }, {
            'type': 'EntityButtonSound',
            'x': 0xf5,
            'y': 0x1ea
        }, {
            'type': 'EntityTestControl',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': [{
            'name': 'background',
            'width': 0x9,
            'height': 0x10,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/invisible.png',
            'repeat': !0x1,
            'preRender': !0x0,
            'distance': '1',
            'tilesize': 0x3c,
            'foreground': !0x1,
            'data': [
                [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9],
                [0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12],
                [0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b],
                [0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24],
                [0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d],
                [0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36],
                [0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f],
                [0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48],
                [0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51],
                [0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a],
                [0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63],
                [0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c],
                [0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75],
                [0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e],
                [0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87],
                [0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]
            ]
        }]
    };
    LevelTestMobileResources = [new ig['Image']('images/invisible.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.others.Gradle-entity')['requires']('impact.entity')['defines'](function() {
    EntityGradleEntity = ig['Entity']['extend']({
        'idleSheetInfo': null,
        'controller': null,
        'init': function(_0xbc0462, _0x2364f9, _0x12adef) {
            null != this['idleSheetInfo'] && (this['setSpriteSheet']('idle'), this['setSize']('idle'));
            this['parent'](_0xbc0462, _0x2364f9, _0x12adef);
            this['controller'] = _0x12adef['controller'];
        },
        'setSpriteSheet': function(_0x39f143) {
            this[_0x39f143 + 'Sheet'] = new ig['AnimationSheet'](this[_0x39f143 + 'SheetInfo']['sheetImage']['path'], this[_0x39f143 + 'SheetInfo']['sheetImage']['width'] / this[_0x39f143 + 'SheetInfo']['sheetX'], this[_0x39f143 + 'SheetInfo']['sheetImage']['height'] / this[_0x39f143 + 'SheetInfo']['sheetY']);
        },
        'setSize': function(_0x27e71b) {
            this['size']['x'] = this[_0x27e71b + 'SheetInfo']['sheetImage']['width'] / this[_0x27e71b + 'SheetInfo']['sheetX'];
            this['size']['y'] = this[_0x27e71b + 'SheetInfo']['sheetImage']['height'] / this[_0x27e71b + 'SheetInfo']['sheetY'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.backgrounds.bg')['requires']('game.entities.others.Gradle-entity')['defines'](function() {
    EntityBg = EntityGradleEntity['extend']({
        'backgrounds': [{
            'image': new ig['Image']('images/bg.png')
        }, {
            'image': new ig['Image']('images/bg.png')
        }, {
            'image': new ig['Image']('images/bg.png')
        }],
        'init': function(_0x457a5e, _0x1285b8, _0x598989) {
            this['parent'](_0x457a5e, _0x1285b8, _0x598989);
            for (_0x457a5e = 0x0; _0x457a5e < this['backgrounds']['length']; _0x457a5e++) _0x1285b8 = this['backgrounds'][_0x457a5e], _0x1285b8['x'] = _0x457a5e * _0x1285b8['image']['width'], _0x1285b8['y'] = ig['system']['height'] - _0x1285b8['image']['height'];
            this['zIndex'] = 0x1;
        },
        'draw': function() {
            this['parent']();
            this['moveBg']();
        },
        'moveBg': function() {
            if (this['controller']['state'] == states['RUNNING']) {
                for (var _0x84216 = this['controller']['speed'] * ig['system']['tick'], _0x2eea41 = 0x0; _0x2eea41 < this['backgrounds']['length']; _0x2eea41++) {
                    var _0x2fa2d5 = this['backgrounds'][_0x2eea41];
                    _0x2fa2d5['x'] -= _0x84216;
                    _0x2fa2d5['image']['draw'](_0x2fa2d5['x'], _0x2fa2d5['y']);
                }
                for (_0x2eea41 = 0x0; _0x2eea41 < this['backgrounds']['length']; _0x2eea41++) _0x2fa2d5 = this['backgrounds'][_0x2eea41], 0x0 > _0x2fa2d5['x'] + _0x2fa2d5['image']['width'] && (_0x84216 = this['backgrounds'][0x0 == _0x2eea41 ? this['backgrounds']['length'] - 0x1 : _0x2eea41 - 0x1], _0x2fa2d5['x'] = parseInt(_0x84216['x'] + _0x84216['image']['width']) - 0x1);
            } else
                for (_0x2eea41 = 0x0; _0x2eea41 < this['backgrounds']['length']; _0x2eea41++) _0x2fa2d5 = this['backgrounds'][_0x2eea41], _0x2fa2d5['image']['draw'](_0x2fa2d5['x'], _0x2fa2d5['y']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.entity-pool')['requires']('impact.game')['defines'](function() {
    ig['EntityPool'] = {
        'pools': {},
        'mixin': {
            'staticInstantiate': function(_0x4bf8d5, _0x4f3ac3, _0x10a7fe) {
                return ig['EntityPool']['getFromPool'](this['classId'], _0x4bf8d5, _0x4f3ac3, _0x10a7fe);
            },
            'erase': function() {
                ig['EntityPool']['putInPool'](this);
            }
        },
        'enableFor': function(_0x74b51d) {
            _0x74b51d['inject'](this['mixin']);
        },
        'getFromPool': function(_0x252334, _0x37b729, _0x1fbc90, _0x5a1507) {
            _0x252334 = this['pools'][_0x252334];
            if (!_0x252334 || !_0x252334['length']) return null;
            _0x252334 = _0x252334['pop']();
            _0x252334['reset'](_0x37b729, _0x1fbc90, _0x5a1507);
            return _0x252334;
        },
        'putInPool': function(_0x2e8314) {
            this['pools'][_0x2e8314['classId']] ? this['pools'][_0x2e8314['classId']]['push'](_0x2e8314) : this['pools'][_0x2e8314['classId']] = [_0x2e8314];
        },
        'drainPool': function(_0x41406e) {
            delete this['pools'][_0x41406e];
        },
        'drainAllPools': function() {
            this['pools'] = {};
        }
    };
    ig['Game']['inject']({
        'loadLevel': function(_0x3f12fc) {
            ig['EntityPool']['drainAllPools']();
            this['parent'](_0x3f12fc);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.others.particle')['requires']('impact.entity', 'impact.entity-pool')['defines'](function() {
    EntityParticle = ig['Entity']['extend']({
        'controller': null,
        'angle': 0x0,
        'speed': 0x0,
        'lifeTime': 0x0,
        'radius': 0x0,
        'timer': null,
        'image': null,
        'init': function(_0x4e94ea, _0x10e340, _0x2c559d) {
            this['parent'](_0x4e94ea, _0x10e340, _0x2c559d);
            this['setup']();
        },
        'reset': function(_0x3e5547, _0x355e11, _0x24e242) {
            this['parent'](_0x3e5547, _0x355e11, _0x24e242);
            this['setup']();
        },
        'setup': function() {
            this['timer'] = new ig['Timer'](this['lifeTime']);
            this['vel']['x'] = this['speed'] * Math['cos'](this['angle'] * Math['PI'] / 0xb4);
            this['vel']['y'] = this['speed'] * Math['sin'](this['angle'] * Math['PI'] / 0xb4);
        },
        'update': function() {
            this['parent']();
            0x0 <= this['timer']['delta']() && this['kill']();
        },
        'draw': function() {
            this['parent']();
            ig['system']['context']['drawImage'](this['image']['data'], this['pos']['x'] - this['radius'], this['pos']['y'] - this['radius'], 0x2 * this['radius'], 0x2 * this['radius']);
        },
        'kill': function() {
            this['parent']();
            this['controller']['particleDead']();
        }
    });
    ig['EntityPool']['enableFor'](EntityParticle);
});
ig['baked'] = !0x0;
ig['module']('game.entities.others.particle-effect')['requires']('impact.entity', 'game.entities.others.particle')['defines'](function() {
    EntityParticleEffect = ig['Entity']['extend']({
        'minAngle': 0x0,
        'maxAngle': 0x0,
        'minSpeed': 0x0,
        'maxSpeed': 0x0,
        'minLifeTime': 0x0,
        'maxLifeTime': 0x0,
        'duration': 0x0,
        'minCount': 0x0,
        'maxCount': 0x0,
        'emission': 0x0,
        'minRadius': 0x0,
        'maxRadius': 0x0,
        'colors': [],
        'loop': !0x1,
        'timer': null,
        'particles': 0x0,
        'elapsedTime': 0x0,
        'emissionCount': 0x0,
        'particle': null,
        'paused': !0x1,
        'init': function(_0x4f8b9c, _0x44d3e4, _0xb9381c) {
            this['parent'](_0x4f8b9c, _0x44d3e4, _0xb9381c);
            this['loop'] || (this['timer'] = new ig['Timer'](this['duration']));
            this['emissionCount'] = this['emission'] / 0x28;
            0x1 > this['emissionCount'] && (this['emissionCount'] = 0x1);
        },
        'update': function() {
            if (!this['paused']) {
                this['parent']();
                this['elapsedTime'] += ig['system']['tick'];
                for (var _0x124a79 = 0x0; _0x124a79 < this['emissionCount']; _0x124a79++)
                    if (this['particles'] + 0x1 <= this['maxCount']) this['particles']++, this['createParticle']();
                    else break;
                for (_0x124a79 = 0x0; _0x124a79 < this['minCount'] - this['particles']; _0x124a79++) this['particles']++, this['createParticle']();
                !this['loop'] && 0x0 <= this['timer']['delta']() && this['kill']();
            }
        },
        'createParticle': function() {
            var _0x422769 = {};
            _0x422769['angle'] = this['randomIntFromInterval'](this['minAngle'], this['maxAngle']);
            _0x422769['speed'] = this['randomIntFromInterval'](this['minSpeed'], this['maxSpeed']);
            _0x422769['lifeTime'] = this['randomIntFromInterval'](this['minLifeTime'], this['maxLifeTime']);
            _0x422769['radius'] = this['randomIntFromInterval'](this['minRadius'], this['maxRadius']);
            _0x422769['controller'] = this;
            _0x422769['image'] = this['colors'][Math['floor'](Math['random']() * this['colors']['length'])];
            ig['game']['spawnEntity'](EntityParticle, this['pos']['x'], this['pos']['y'], _0x422769);
        },
        'particleDead': function() {
            this['particles']--;
        },
        'randomIntFromInterval': function(_0x4a475a, _0x18d583) {
            return parseFloat((Math['random']() * (_0x18d583 - _0x4a475a) + _0x4a475a)['toFixed'](0x4));
        },
        'pause': function() {
            this['paused'] = !0x0;
            this['timer']['pause']();
        },
        'resume': function() {
            this['paused'] = !0x1;
            this['timer']['unpause']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.player')['requires']('game.entities.others.Gradle-entity', 'game.entities.others.particle-effect')['defines'](function() {
    EntityPlayer = EntityGradleEntity['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'checkAgainst': ig['Entity']['TYPE']['B'],
        'runSheetInfo': {
            'sheetImage': new ig['Image']('images/char-run.png'),
            'sheetX': 0x8,
            'sheetY': 0x1
        },
        'fallSheetInfo': {
            'sheetImage': new ig['Image']('images/char-fall.png'),
            'sheetX': 0x7,
            'sheetY': 0x1
        },
        'isJumping': !0x1,
        'isFallingDown': !0x1,
        'allowJumpOverPlatform': !0x1,
        'jumpSpeed': 0x384,
        'yPosBeforeJump': 0x0,
        'maxJumpHeight': 0x0,
        'timer': 0x0,
        'stopInAir': !0x1,
        'stopInAirTime': 0.1,
        'collideWithPlatform': !0x1,
        'platform': null,
        'tmpPlatforms': [],
        'hitObstacle': !0x1,
        'fallAnimationTimer': 0x0,
        'powerUp': !0x1,
        'powerType': null,
        'shield': new ig['Image']('images/shield-effect.png'),
        'speed': new ig['Image']('images/speed-effect.png'),
        'powerTimer': null,
        'powerAlpha': 0x1,
        'powerTween': null,
        'powerTweenStarted': !0x1,
        'powerLength': 0x0,
        'run': !0x0,
        'shadow': new ig['Image']('images/shadow.png'),
        'shadowInPlatforms': [],
        'offset': {
            'x': 0x20,
            'y': 0x5
        },
        'particleImage1': new ig['Image']('images/particle1.png'),
        'particleImage2': new ig['Image']('images/particle2.png'),
        'particleImage3': new ig['Image']('images/particle3.png'),
        'dust': new ig['Image']('images/dust.png'),
        'particleDust': null,
        'init': function(_0x4b2728, _0x50cbbd, _0x412dac) {
            this['parent'](_0x4b2728, _0x50cbbd, _0x412dac);
            this['setSpriteSheet']('run');
            this['setSpriteSheet']('fall');
            this['setSize']('run');
            this['size']['x'] -= 0x40;
            this['size']['y'] -= 0xa;
            this['anims']['run'] = new ig['Animation'](this['runSheet'], 0.05, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
            this['anims']['jump'] = new ig['Animation'](this['runSheet'], 0x1, [0x0], !0x0);
            this['anims']['fall'] = new ig['Animation'](this['fallSheet'], 0.05, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6], !0x0);
            this['currentAnim'] = this['anims']['run'];
            ig['input']['bind'](ig['KEY']['SPACE'], 'jump');
            this['maxJumpHeight'] = 1.7 * this['size']['y'];
            this['zIndex'] = 0x5;
            this['powerTimer'] = new ig['Timer']();
            this['powerTween'] = this['tween']({
                'powerAlpha': 0x0
            }, 0.3, {
                'loop': ig['Tween']['Loop']['Reverse']
            });
            this['createDust']();
        },
        'draw': function() {
            if (this['powerUp']) {
                0x0 <= this['powerTimer']['delta']() && (this['powerUp'] = !0x1, this['powerTimer']['set'](0x0), this['powerTimer']['pause'](), this['powerTween']['stop'](), this['powerAlpha'] = 0x1, 'SPEED' == this['powerType'] && this['controller']['playerPowerUpSpeedEnd']());
                !this['powerTweenStarted'] && -0x2 <= this['powerTimer']['delta']() && (this['powerTweenStarted'] = !0x0, this['powerTween']['start']());
                var _0x43433b = ig['system']['context'];
                _0x43433b['save']();
                _0x43433b['globalAlpha'] = this['powerAlpha'];
                'SHIELD' == this['powerType'] && this['shield']['draw'](this['pos']['x'] + (this['size']['x'] - this['shield']['width']) / 0x2 - 0xf, this['pos']['y'] + (this['size']['y'] - this['shield']['height']) / 0x2);
                _0x43433b['restore']();
            }
            if (this['controller']['state'] != states['GAME_OVER'] && this['run']) {
                _0x43433b = ig['system']['context'];
                _0x43433b['save']();
                var _0x734ecc = this['shadow']['width'],
                    _0x30a236 = this['pos']['x'] - 0x5;
                if (0x0 < this['shadowInPlatforms']['length'])
                    for (var _0x364cb3 = 0x0; _0x364cb3 < this['shadowInPlatforms']['length']; _0x364cb3++) this['shadowInPlatforms'][_0x364cb3]['pos']['x'] > this['pos']['x'] ? (_0x734ecc = this['pos']['x'] + this['size']['x'] - this['shadowInPlatforms'][_0x364cb3]['pos']['x'], 0x0 > _0x734ecc && (_0x734ecc = 0x0), _0x30a236 = this['shadowInPlatforms'][_0x364cb3]['pos']['x']) : (this['pos']['x'] + this['size']['x'] > this['shadowInPlatforms'][_0x364cb3]['pos']['x'] + this['shadowInPlatforms'][_0x364cb3]['size']['x'] ? (_0x734ecc = this['shadowInPlatforms'][_0x364cb3]['pos']['x'] + this['shadowInPlatforms'][_0x364cb3]['size']['x'] - this['pos']['x'], 0x0 > _0x734ecc && (_0x734ecc = 0x0)) : _0x734ecc = this['size']['x'], _0x30a236 = this['pos']['x']), _0x43433b['drawImage'](this['shadow']['data'], _0x30a236, this['pos']['y'] + this['size']['y'] - 0x5, _0x734ecc, this['shadow']['height']);
                else _0x43433b['drawImage'](this['shadow']['data'], _0x30a236, this['pos']['y'] + this['size']['y'] - 0x5, _0x734ecc, this['shadow']['height']);
                _0x43433b['restore']();
            }
            this['parent']();
        },
        'update': function() {
            this['controller']['state'] == states['GAME_OVER'] ? (this['currentAnim'] = this['anims']['fall']['rewind'](), this['currentAnim']['gotoFrame'](0x3), this['parent']()) : this['controller']['state'] == states['RUNNING'] && (this['parent'](), this['jumping'](), this['falling'](), this['hitObstacle'] && (this['fallAnimationTimer'] += ig['system']['tick'], this['fallAnimationTimer'] > this['anims']['fall']['sequence']['length'] * this['anims']['fall']['frameTime'] && (this['hitObstacle'] = !0x1, this['doRunAnimation']())), this['run'] && ig['soundHandler']['sfxPlayer']['soundList']['step']['_sounds'][0x0]['_ended'] && ig['game']['playSfx']('step'), null != this['particleDust'] && (this['particleDust']['pos']['x'] = this['pos']['x'], this['particleDust']['pos']['y'] = this['pos']['y'] + this['size']['y'] - 0xa), null != this['particleEffect'] && (this['particleEffect']['pos']['x'] = this['pos']['x'], this['particleEffect']['pos']['y'] = this['pos']['y'] + this['size']['y'] - 0xa));
        },
        'doRunAnimation': function() {
            this['hitObstacle'] || (this['currentAnim'] != this['anims']['run'] && (this['currentAnim'] = this['anims']['run']['rewind']()), this['run'] = !0x0);
        },
        'doJump': function() {
            if (!this['hitObstacle'] && !this['isJumping'] && (!this['isFallingDown'] || this['allowJumpOverPlatform'])) this['isJumping'] = !0x0, this['isFallingDown'] = !0x1, this['yPosBeforeJump'] = this['pos']['y'], this['currentAnim'] = this['anims']['jump']['rewind'](), ig['game']['stopSfx']('step'), ig['game']['playSfx']('jump'), this['run'] = !0x1, this['jumpSpeed'] = 0x6a4;
        },
        'jumping': function() {
            this['isJumping'] && (this['pos']['y'] -= this['jumpSpeed'] * ig['system']['tick'], this['jumpSpeed'] -= 0x157c * ig['system']['tick'], 0x0 >= this['jumpSpeed'] && this['doFall']());
        },
        'doFall': function() {
            this['isFallingDown'] || (this['isJumping'] = !0x1, this['isFallingDown'] = !0x0, this['jumpSpeed'] = 0x2bc);
        },
        'falling': function() {
            this['isFallingDown'] && (this['pos']['y'] += this['jumpSpeed'] * ig['system']['tick'], this['jumpSpeed'] += 0x4b0 * ig['system']['tick'], this['pos']['y'] + this['size']['y'] >= ig['system']['height'] - this['controller']['groundHeight'] ? (this['isFallingDown'] = !0x1, this['pos']['y'] = ig['system']['height'] - this['controller']['groundHeight'] - this['size']['y'] - 0xa, this['doRunAnimation']()) : (null != this['platform'] && this['pos']['y'] + this['size']['y'] >= this['platform']['pos']['y'] + this['platform']['offset']['y'] ? (this['pos']['y'] = this['platform']['pos']['y'] + this['platform']['offset']['y'] - this['size']['y'] - 0xa, this['doRunAnimation'](), this['allowJumpOverPlatform'] = !0x0) : (this['hitObstacle'] || (this['currentAnim'] = this['anims']['jump']['rewind']()), this['allowJumpOverPlatform'] = !0x1), this['fallingOverPlatform']()));
        },
        'fallingOverPlatform': function() {
            var _0x232c61 = 0x3 * parseInt(ig['system']['width'] / 0x6d),
                _0x454ce5 = ig['game']['getEntitiesByType']('EntityPlatform');
            _0x232c61 > _0x454ce5['length'] && (_0x232c61 = _0x454ce5['length']);
            this['platform'] = null;
            this['shadowInPlatforms'] = [];
            this['tmpPlatforms'] = [];
            for (var _0x4b35e4 = 0x0; _0x4b35e4 < _0x232c61; _0x4b35e4++) this['pos']['x'] + this['size']['x'] > _0x454ce5[_0x4b35e4]['pos']['x'] && (_0x454ce5[_0x4b35e4]['pos']['x'] + _0x454ce5[_0x4b35e4]['size']['x'] > this['pos']['x'] - 0x14 && this['pos']['y'] + this['size']['y'] <= _0x454ce5[_0x4b35e4]['pos']['y'] + _0x454ce5[_0x4b35e4]['offset']['y']) && (this['tmpPlatforms']['push'](_0x454ce5[_0x4b35e4]), 0xf > _0x454ce5[_0x4b35e4]['pos']['y'] + _0x454ce5[_0x4b35e4]['offset']['y'] - (this['pos']['y'] + this['size']['y']) && this['shadowInPlatforms']['push'](_0x454ce5[_0x4b35e4]));
            _0x232c61 = 0x2710;
            for (_0x4b35e4 = 0x0; _0x4b35e4 < this['tmpPlatforms']['length']; _0x4b35e4++) this['tmpPlatforms'][_0x4b35e4]['pos']['y'] - this['pos']['y'] < _0x232c61 && (_0x232c61 = this['tmpPlatforms'][_0x4b35e4]['pos']['y'] - this['pos']['y'], this['platform'] = this['tmpPlatforms'][_0x4b35e4]);
        },
        'check': function(_0x3bc06c) {
            if (_0x3bc06c instanceof EntityObstacle && this['powerUp'] && 'SHIELD' == this['powerType']) _0x3bc06c['throw']();
            else if (!this['isJumping'] && (_0x3bc06c instanceof EntityObstacle || _0x3bc06c instanceof EntityPowerUp) && _0x3bc06c['pos']['x'] < this['pos']['x'] + this['size']['x'] / 0x2) _0x3bc06c instanceof EntityObstacle ? (this['hitObstacle'] || (this['currentAnim'] = this['anims']['fall']['rewind'](), this['hitObstacle'] = !0x0, this['fallAnimationTimer'] = 0x0), ig['game']['stopSfx']('step'), ig['game']['playSfx']('thump'), this['run'] = !0x1, _0x3bc06c['kill'](), this['controller']['enemyApproaching']()) : (this['powerUp'] = !0x0, this['powerType'] = _0x3bc06c['powerType'], this['powerLength'] = _0x3bc06c['powerLength'], this['powerTimer']['set'](_0x3bc06c['powerLength']), this['powerTimer']['unpause'](), this['powerTween']['stop'](), this['powerTweenStarted'] = !0x1, this['powerAlpha'] = 0x1, null != this['particleEffect'] && this['particleEffect']['kill'](), 'SPEED' == this['powerType'] ? (this['controller']['playerPowerUpSpeed'](), this['createSpeedBoost'](), ig['game']['playSfx']('speedUp')) : (ig['game']['playSfx']('shield'), this['controller']['playerPowerUpSpeedEnd']()), _0x3bc06c['kill']());
        },
        'kill': function() {
            null != this['particleEffect'] && this['particleEffect']['kill']();
            null != this['particleDust'] && this['particleDust']['kill']();
            this['parent']();
        },
        'createSpeedBoost': function() {
            var _0xf18c7a = {
                'minAngle': -0xb4,
                'maxAngle': -0x91,
                'minSpeed': 0x12c,
                'maxSpeed': 0x190,
                'minLifeTime': 0.5,
                'maxLifeTime': 0x1
            };
            _0xf18c7a['duration'] = this['powerLength'];
            _0xf18c7a['minCount'] = 0xa;
            _0xf18c7a['maxCount'] = 0x3c;
            _0xf18c7a['emission'] = 0x1e;
            _0xf18c7a['minRadius'] = 0x2;
            _0xf18c7a['maxRadius'] = 0x8;
            _0xf18c7a['colors'] = [this['particleImage1'], this['particleImage2'], this['particleImage3']];
            this['particleEffect'] = ig['game']['spawnEntity'](EntityParticleEffect, 0x0, 0x0, _0xf18c7a);
        },
        'createDust': function() {
            var _0x3a0289 = {
                'minAngle': -0xb4,
                'maxAngle': -0xa0,
                'minSpeed': 0x32,
                'maxSpeed': 0x64,
                'minLifeTime': 0.5,
                'maxLifeTime': 0x1,
                'duration': 0x2,
                'minCount': 0x5,
                'maxCount': 0xa,
                'emission': 0x5,
                'minRadius': 0x8,
                'maxRadius': 0x10
            };
            _0x3a0289['colors'] = [this['dust']];
            this['particleDust'] = ig['game']['spawnEntity'](EntityParticleEffect, 0x0, 0x0, _0x3a0289);
        },
        'pause': function() {
            this['powerUp'] && null != this['powerTimer'] && this['powerTimer']['pause']();
            null != this['particleEffect'] && this['particleEffect']['pause']();
            null != this['particleDust'] && this['particleDust']['pause']();
        },
        'resume': function() {
            this['powerUp'] && null != this['powerTimer'] && this['powerTimer']['unpause']();
            null != this['particleEffect'] && this['particleEffect']['resume']();
            null != this['particleDust'] && this['particleDust']['resume']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.enemy')['requires']('game.entities.others.Gradle-entity')['defines'](function() {
    EntityEnemy = EntityGradleEntity['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'checkAgainst': ig['Entity']['TYPE']['BOTH'],
        'runSheetInfo': {
            'sheetImage': new ig['Image']('images/bear.png'),
            'sheetX': 0x8,
            'sheetY': 0x1
        },
        'jumpSheetInfo': {
            'sheetImage': new ig['Image']('images/bear-jump.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        },
        'playRoar': !0x1,
        'jumping': !0x1,
        'falling': 0x0,
        'v0': 0x0,
        'a': 0x0,
        'targetY': 0x0,
        'init': function(_0x38b5d3, _0x4147aa, _0x234d9d) {
            this['parent'](_0x38b5d3, _0x4147aa, _0x234d9d);
            this['setSpriteSheet']('run');
            this['setSpriteSheet']('jump');
            this['setSize']('run');
            this['anims']['run'] = new ig['Animation'](this['runSheet'], 0.05, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
            this['anims']['jump'] = new ig['Animation'](this['jumpSheet'], 0x1, [0x0], !0x0);
            this['currentAnim'] = this['anims']['run'];
            this['zIndex'] = 0x5;
        },
        'check': function(_0x2ed7d5) {
            _0x2ed7d5 instanceof EntityObstacle && (_0x2ed7d5['pos']['x'] < this['pos']['x'] + this['size']['x'] / 0x2 && 'function' === typeof _0x2ed7d5['throw']) && _0x2ed7d5['throw']();
        },
        'draw': function() {
            this['parent']();
        },
        'update': function() {
            this['controller']['state'] != states['PAUSED'] && (this['parent'](), 0x0 > this['pos']['x'] + this['size']['x'] && (this['playRoar'] = !0x0), 0x0 < this['pos']['x'] && this['playRoar'] && (this['playRoar'] = !0x1, ig['game']['playSfx']('bear')), this['jumping'] && (this['pos']['y'] -= this['v0'] * ig['system']['tick'], this['v0'] -= this['a'] * ig['system']['tick'], 0x0 >= this['v0'] && (this['falling'] = !0x0)), this['falling'] && this['pos']['y'] >= this['targetY'] && (this['jumping'] = !0x1));
        },
        'jumpTo': function(_0x44fd82) {
            _0x44fd82 = Math['abs']((this['pos']['y'] - _0x44fd82 + 0xe1) / 0.3);
            console['log'](_0x44fd82);
            this['jumping'] = !0x0;
            this['v0'] = _0x44fd82;
            this['a'] = 0x1388;
        },
        'pause': function() {},
        'resume': function() {},
        'jump': function(_0x151c79, _0x3fb0b2, _0x6bdeca) {
            this['currentAnim'] = this['anims']['jump']['rewind']();
            this['targetY'] = _0x3fb0b2;
            this['jumpTo'](_0x3fb0b2 - this['size']['y'] / 0x2);
            this['tween']({
                'pos': {
                    'x': _0x151c79 - 0x14
                }
            }, 0.6, {
                'onComplete': function() {
                    _0x6bdeca && _0x6bdeca();
                }['bind'](this)
            })['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.fight')['requires']('game.entities.others.Gradle-entity', 'impact.entity-pool')['defines'](function() {
    EntityFight = EntityGradleEntity['extend']({
        'fightSheetInfo': {
            'sheetImage': new ig['Image']('images/fight.png'),
            'sheetX': 0x6,
            'sheetY': 0x1
        },
        'visible': !0x0,
        'context': null,
        'callback': null,
        'scale': 0x1,
        'init': function(_0x3bc98f, _0x22fa3d, _0x2631c5) {
            this['parent'](_0x3bc98f, _0x22fa3d, _0x2631c5);
            this['setSpriteSheet']('fight');
            this['setSize']('fight');
            this['anims']['fight'] = new ig['Animation'](this['fightSheet'], 0.05, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]);
            this['context'] = ig['system']['context'];
            this['zIndex'] = 0x5;
        },
        'draw': function() {
            this['controller']['state'] == states['GAME_OVER'] && this['visible'] && (this['parent'](), this['context']['save'](), this['context']['scale'](this['scale'], this['scale']), this['anims']['fight']['update'](), this['anims']['fight']['draw']((this['pos']['x'] + 0.5 * this['size']['x'] * (0x1 - this['scale'])) / this['scale'], (this['pos']['y'] + 0.5 * this['size']['y'] * (0x1 - this['scale'])) / this['scale']), this['context']['restore']());
        },
        'hide': function(_0x562443) {
            this['callback'] = _0x562443;
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                    this['callback'] && this['callback']();
                }['bind'](this)
            })['start']();
        }
    });
    ig['EntityPool']['enableFor'](EntityFight);
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.platform')['requires']('game.entities.others.Gradle-entity', 'impact.entity-pool')['defines'](function() {
    EntityPlatform = EntityGradleEntity['extend']({
        'image': null,
        'tile': null,
        'tileSize': null,
        'offset': {
            'x': 0x0,
            'y': 0x26
        },
        'init': function(_0xc8ab30, _0x2df4ce, _0x21d2aa) {
            this['parent'](_0xc8ab30, _0x2df4ce, _0x21d2aa);
            this['setup'](_0x21d2aa);
        },
        'reset': function(_0x3fa770, _0x9ce1f8, _0xbef919) {
            this['parent'](_0x3fa770, _0x9ce1f8, _0xbef919);
            this['setup'](_0xbef919);
        },
        'setup': function(_0xa664ab) {
            this['image'] = _0xa664ab['image'];
            this['tile'] = _0xa664ab['tile'];
            this['tileSize'] = _0xa664ab['tileSize'];
            this['size']['x'] = this['tileSize'];
            this['size']['y'] = this['tileSize'];
            this['zIndex'] = 0x3;
        },
        'draw': function() {
            this['parent']();
            this['image']['drawTile'](this['pos']['x'], this['pos']['y'], this['tile'], this['tileSize']);
            0x0 > this['pos']['x'] + this['size']['x'] && this['kill']();
        },
        'update': function() {
            this['controller']['state'] == states['RUNNING'] && this['parent']();
        },
        'drawDebug': function() {
            ig['system']['context']['save']();
            ig['system']['context']['fillStyle'] = 'rgba(0,255,0,0.5)';
            ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['tileSize'], this['tileSize']);
            ig['system']['context']['restore']();
        }
    });
    ig['EntityPool']['enableFor'](EntityPlatform);
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.segment-end')['requires']('impact.entity', 'impact.entity-pool')['defines'](function() {
    EntitySegmentEnd = ig['Entity']['extend']({
        '_wmScalable': !0x1,
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(255,0,0,0.5)',
        'size': {
            'x': 0x10,
            'y': 0x10
        },
        'controller': null,
        'platformController': null,
        'init': function(_0x80d490, _0x2a502c, _0x404ae8) {
            this['parent'](_0x80d490, _0x2a502c, _0x404ae8);
        },
        'reset': function(_0x14ab23, _0x264e63, _0x21e825) {
            this['parent'](_0x14ab23, _0x264e63, _0x21e825);
        },
        'draw': function() {
            ig['global']['wm'] || (this['parent'](), 0x0 > this['pos']['x'] + this['size']['x'] && (this['kill'](), this['platformController']['segmentReachedTheEnd']()), this['drawDebug']());
        },
        'update': function() {
            this['controller']['state'] == states['RUNNING'] && this['parent']();
        },
        'drawDebug': function() {
            ig['system']['context']['save']();
            ig['system']['context']['fillStyle'] = this['_wmBoxColor'];
            ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
            ig['system']['context']['restore']();
        }
    });
    ig['EntityPool']['enableFor'](EntitySegmentEnd);
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.obstacle')['requires']('game.entities.others.Gradle-entity')['defines'](function() {
    EntityObstacle = EntityGradleEntity['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'thrownSpeed': 0xc8,
        'up': !0x1,
        'rotationSpeed': 0x2d0,
        'offset': {
            'x': 0xa,
            'y': 0xa
        },
        'init': function(_0x213452, _0x13ba40, _0x1c7318) {
            this['parent'](_0x213452, _0x13ba40, _0x1c7318);
            this['anims']['idle'] = new ig['Animation'](this['idleSheet'], 0x1, [0x0], !0x0);
            this['currentAnim'] = this['anims']['idle'];
            this['size']['x'] -= 0x14;
            this['size']['y'] -= 0x14;
            this['setup'](_0x213452, _0x13ba40, _0x1c7318);
        },
        'reset': function(_0x1285f2, _0x4766ea, _0x362d8c) {
            this['parent'](_0x1285f2, _0x4766ea, _0x362d8c);
            this['setup'](_0x1285f2, _0x4766ea, _0x362d8c);
        },
        'setup': function() {
            this['zIndex'] = 0x4;
            this['type'] = ig['Entity']['TYPE']['B'];
            this['up'] = !0x1;
            this['currentAnim']['angle'] = 0x0;
        },
        'draw': function() {
            this['parent']();
        },
        'update': function() {
            this['controller']['state'] == states['RUNNING'] && (this['parent'](), (0x0 > this['pos']['x'] + this['size']['x'] || this['pos']['y'] > ig['system']['height']) && this['kill'](), this['up'] && (this['pos']['y'] -= ig['system']['tick'] * this['thrownSpeed'], this['currentAnim']['angle'] += this['rotationSpeed']['toRad']() * ig['system']['tick']));
        },
        'throw': function() {
            this['up'] || (this['vel']['x'] = this['controller']['speed'], this['accel']['x'] = -0x4 * this['controller']['speed'], this['up'] = !0x0, this['type'] = ig['Entity']['TYPE']['NONE']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.obs-bone')['requires']('game.entities.games.obstacle', 'impact.entity-pool')['defines'](function() {
    EntityObsBone = EntityObstacle['extend']({
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/obs-bone.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityObsBone);
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.easy-1')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-bone')['defines'](function() {
    LevelEasy1 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x137,
            'y': 0xe4
        }, {
            'type': 'EntityObsBone',
            'x': 0x86,
            'y': 0x19a
        }],
        'layer': [{
            'name': 'helper',
            'width': 0x3,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0],
                [0x1, 0x1, 0x1]
            ]
        }, {
            'name': 'foreground',
            'width': 0x3,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0],
                [0x1, 0x2, 0x3],
                [0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelEasy1Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.obs-stone')['requires']('game.entities.games.obstacle', 'impact.entity-pool')['defines'](function() {
    EntityObsStone = EntityObstacle['extend']({
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/obs-stone.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityObsStone);
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.obs-stump')['requires']('game.entities.games.obstacle', 'impact.entity-pool')['defines'](function() {
    EntityObsStump = EntityObstacle['extend']({
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/obs-stump.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityObsStump);
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.easy-2')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-stone', 'game.entities.games.obs-stump')['defines'](function() {
    LevelEasy2 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x2eb,
            'y': 0xe8
        }, {
            'type': 'EntityObsStone',
            'x': 0x96,
            'y': 0xd6
        }, {
            'type': 'EntityObsStump',
            'x': 0x22a,
            'y': 0x1a2
        }],
        'layer': [{
            'name': 'helper',
            'width': 0x7,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1]
            ]
        }, {
            'name': 'foreground',
            'width': 0x7,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x1, 0x2, 0x3],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x1, 0x2, 0x3, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelEasy2Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.obs-spike')['requires']('game.entities.games.obstacle', 'impact.entity-pool')['defines'](function() {
    EntityObsSpike = EntityObstacle['extend']({
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/obs-spike.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityObsSpike);
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.easy-3')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-spike', 'game.entities.games.obs-bone', 'game.entities.games.obs-stone')['defines'](function() {
    LevelEasy3 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x430,
            'y': 0x0
        }, {
            'type': 'EntityObsSpike',
            'x': 0x166,
            'y': 0x196
        }, {
            'type': 'EntityObsBone',
            'x': 0x2a6,
            'y': 0x19e
        }, {
            'type': 'EntityObsStone',
            'x': 0x37e,
            'y': 0xd6
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xa,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1]
            ]
        }, {
            'name': 'foreground',
            'width': 0xa,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x3, 0x3, 0x3, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x1, 0x2, 0x3, 0x0, 0x0, 0x3, 0x3, 0x3],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelEasy3Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.easy-4')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-spike', 'game.entities.games.obs-stump')['defines'](function() {
    LevelEasy4 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x432,
            'y': 0xac
        }, {
            'type': 'EntityObsSpike',
            'x': 0xf6,
            'y': 0x192
        }, {
            'type': 'EntityObsStump',
            'x': 0x316,
            'y': 0x19e
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xa,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x1, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x1]
            ]
        }, {
            'name': 'foreground',
            'width': 0xa,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x2, 0x3, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelEasy4Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.hard-1')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-bone', 'game.entities.games.obs-stone')['defines'](function() {
    LevelHard1 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x650,
            'y': 0x4
        }, {
            'type': 'EntityObsBone',
            'x': 0x296,
            'y': 0xe2
        }, {
            'type': 'EntityObsStone',
            'x': 0x170,
            'y': -0x10
        }, {
            'type': 'EntityObsStone',
            'x': 0x1d6,
            'y': 0x18e
        }, {
            'type': 'EntityObsBone',
            'x': 0x45a,
            'y': 0x19a
        }, {
            'type': 'EntityObsBone',
            'x': 0x8e,
            'y': 0x19a
        }, {
            'type': 'EntityObsStone',
            'x': 0x638,
            'y': 0x60
        }, {
            'type': 'EntityObsStone',
            'x': 0x31e,
            'y': 0x18e
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0]
            ]
        }, {
            'name': 'foreground',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x3, 0x3, 0x3, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3],
                [0x1, 0x2, 0x3, 0x3, 0x0, 0x0, 0x3, 0x1, 0x2, 0x0, 0x0, 0x0, 0x0, 0x3, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelHard1Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.hard-2')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-stone', 'game.entities.games.obs-spike', 'game.entities.games.obs-bone')['defines'](function() {
    LevelHard2 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x650,
            'y': 0xf0
        }, {
            'type': 'EntityObsStone',
            'x': 0xe2,
            'y': 0x18a
        }, {
            'type': 'EntityObsSpike',
            'x': 0x1e6,
            'y': 0x192
        }, {
            'type': 'EntityObsBone',
            'x': 0x40a,
            'y': 0x19e
        }, {
            'type': 'EntityObsStone',
            'x': 0x52a,
            'y': 0x18e
        }, {
            'type': 'EntityObsBone',
            'x': 0x2fa,
            'y': 0x19a
        }, {
            'type': 'EntityObsStone',
            'x': 0xc2,
            'y': 0xd6
        }, {
            'type': 'EntityObsStone',
            'x': 0x62e,
            'y': 0x18e
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0]
            ]
        }, {
            'name': 'foreground',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x3, 0x0, 0x0, 0x3, 0x0, 0x0, 0x3, 0x0, 0x0, 0x3, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x1, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelHard2Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.hard-3')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-stump', 'game.entities.games.obs-stone', 'game.entities.games.obs-bone', 'game.entities.games.obs-spike')['defines'](function() {
    LevelHard3 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x650,
            'y': 0x0
        }, {
            'type': 'EntityObsStump',
            'x': 0xf2,
            'y': 0x1a2
        }, {
            'type': 'EntityObsStone',
            'x': 0x266,
            'y': 0x18e
        }, {
            'type': 'EntityObsStone',
            'x': 0x13a,
            'y': 0xd6
        }, {
            'type': 'EntityObsBone',
            'x': 0x2aa,
            'y': 0xa
        }, {
            'type': 'EntityObsSpike',
            'x': 0x4ca,
            'y': 0x2
        }, {
            'type': 'EntityObsSpike',
            'x': 0x36e,
            'y': 0xda
        }, {
            'type': 'EntityObsBone',
            'x': 0x38e,
            'y': 0x19e
        }, {
            'type': 'EntityObsStone',
            'x': 0x59a,
            'y': 0x192
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0]
            ]
        }, {
            'name': 'foreground',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x1, 0x2, 0x3, 0x0, 0x0, 0x3, 0x3, 0x1, 0x0, 0x0, 0x1, 0x2, 0x3, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x3, 0x1, 0x2, 0x3, 0x1, 0x0, 0x0, 0x1, 0x2, 0x3, 0x1, 0x2, 0x0, 0x0, 0x3],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelHard3Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.power-up')['requires']('game.entities.others.Gradle-entity')['defines'](function() {
    EntityPowerUp = EntityGradleEntity['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'powerType': null,
        'powerLength': 0x0,
        'init': function(_0x196b55, _0x857677, _0xa476b1) {
            this['parent'](_0x196b55, _0x857677, _0xa476b1);
            this['anims']['idle'] = new ig['Animation'](this['idleSheet'], 0x1, [0x0], !0x0);
            this['currentAnim'] = this['anims']['idle'];
            this['setup'](_0x196b55, _0x857677, _0xa476b1);
        },
        'reset': function(_0x1dfe64, _0x45df2d, _0x26a8c9) {
            this['parent'](_0x1dfe64, _0x45df2d, _0x26a8c9);
            this['setup'](_0x1dfe64, _0x45df2d, _0x26a8c9);
        },
        'setup': function() {
            this['zIndex'] = 0x4;
            this['type'] = ig['Entity']['TYPE']['B'];
        },
        'update': function() {
            this['controller']['state'] == states['RUNNING'] && (this['parent'](), (0x0 > this['pos']['x'] + this['size']['x'] || this['pos']['y'] > ig['system']['height']) && this['kill']());
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.power-up-shield')['requires']('game.entities.games.power-up', 'impact.entity-pool')['defines'](function() {
    EntityPowerUpShield = EntityPowerUp['extend']({
        'powerType': 'SHIELD',
        'powerLength': 0x5,
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/shield.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityPowerUpShield);
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.power-up-1')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.power-up-shield', 'game.entities.games.obs-stone', 'game.entities.games.obs-bone')['defines'](function() {
    LevelPowerUp1 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x650,
            'y': 0xf0
        }, {
            'type': 'EntityPowerUpShield',
            'x': 0x450,
            'y': 0x40
        }, {
            'type': 'EntityObsStone',
            'x': 0xb2,
            'y': 0x18e
        }, {
            'type': 'EntityObsBone',
            'x': 0x3ce,
            'y': 0x19e
        }, {
            'type': 'EntityObsStone',
            'x': 0x52a,
            'y': 0x192
        }, {
            'type': 'EntityObsStone',
            'x': 0x1be,
            'y': 0x18e
        }],
        'layer': [{
            'name': 'foreground',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3, 0x0],
                [0x0, 0x3, 0x0, 0x0, 0x3, 0x0, 0x0, 0x3, 0x0, 0x0, 0x3, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3, 0x3],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }, {
            'name': 'helper',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0]
            ]
        }]
    };
    LevelPowerUp1Resources = [new ig['Image']('images/platform1.png'), new ig['Image']('images/helper.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.games.power-up-speed')['requires']('game.entities.games.power-up', 'impact.entity-pool')['defines'](function() {
    EntityPowerUpSpeed = EntityPowerUp['extend']({
        'powerType': 'SPEED',
        'powerLength': 0x6,
        'idleSheetInfo': {
            'sheetImage': new ig['Image']('images/speed.png'),
            'sheetX': 0x1,
            'sheetY': 0x1
        }
    });
    ig['EntityPool']['enableFor'](EntityPowerUpSpeed);
});
ig['baked'] = !0x0;
ig['module']('game.levels.platforms.power-up-2')['requires']('impact.image', 'game.entities.games.segment-end', 'game.entities.games.obs-stone', 'game.entities.games.power-up-speed', 'game.entities.games.obs-bone', 'game.entities.games.obs-stump')['defines'](function() {
    LevelPowerUp2 = {
        'entities': [{
            'type': 'EntitySegmentEnd',
            'x': 0x650,
            'y': 0x1a0
        }, {
            'type': 'EntityObsStone',
            'x': 0x222,
            'y': 0x192
        }, {
            'type': 'EntityPowerUpSpeed',
            'x': 0x290,
            'y': 0x3c
        }, {
            'type': 'EntityObsBone',
            'x': 0x392,
            'y': 0x19a
        }, {
            'type': 'EntityObsStump',
            'x': 0x4b6,
            'y': 0xe6
        }, {
            'type': 'EntityObsBone',
            'x': 0x26,
            'y': 0x19e
        }],
        'layer': [{
            'name': 'helper',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/helper.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1]
            ]
        }, {
            'name': 'foreground',
            'width': 0xf,
            'height': 0x4,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'images/platform1.png',
            'repeat': !0x1,
            'preRender': !0x1,
            'distance': '1',
            'tilesize': 0x6d,
            'foreground': !0x1,
            'data': [
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3],
                [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x2, 0x0, 0x0, 0x0],
                [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            ]
        }]
    };
    LevelPowerUp2Resources = [new ig['Image']('images/helper.png'), new ig['Image']('images/platform1.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.platform-controller')['requires']('impact.entity', 'game.entities.games.platform', 'game.entities.games.segment-end', 'game.levels.platforms.easy-1', 'game.levels.platforms.easy-2', 'game.levels.platforms.easy-3', 'game.levels.platforms.easy-4', 'game.levels.platforms.hard-1', 'game.levels.platforms.hard-2', 'game.levels.platforms.hard-3', 'game.levels.platforms.power-up-1', 'game.levels.platforms.power-up-2')['defines'](function() {
    EntityPlatformController = ig['Entity']['extend']({
        'initCount': 0x5,
        'controller': null,
        'standbyTime': 0x5,
        'timer': new ig['Timer'](),
        'posX': 0x0,
        'firstTime': !0x0,
        'tracehold': 0x0,
        'levels': [],
        'hardLevels': [],
        'maps': [],
        'foregrounds': [],
        'entities': [],
        'tileset': new ig['Image']('images/platform1.png'),
        'powerUpLevels': [],
        'probabilityPowerUp': 0.3,
        'nextLevelAfter': 0xc8,
        'init': function(_0x3e2367, _0x33d546, _0x5cd6ee) {
            this['parent'](_0x3e2367, _0x33d546, _0x5cd6ee);
            this['tracehold'] = 0x3 * ig['system']['width'];
            this['controller'] = _0x5cd6ee['controller'];
            this['posX'] = ig['system']['width'];
            this['buildSegments']();
            this['spawnPlatform'](0x5);
        },
        'buildSegments': function() {
            this['timer']['set'](this['standbyTime']);
            for (var _0x553fb9 = 0x1; 0x4 >= _0x553fb9; _0x553fb9++) this['levels']['push'](window['LevelEasy' + _0x553fb9]);
            for (_0x553fb9 = 0x1; 0x2 >= _0x553fb9; _0x553fb9++) this['powerUpLevels']['push'](window['LevelPowerUp' + _0x553fb9]);
            this['hardLevels'] = JSON['parse'](JSON['stringify'](this['levels']));
            for (_0x553fb9 = 0x1; 0x3 >= _0x553fb9; _0x553fb9++) this['hardLevels']['push'](window['LevelHard' + _0x553fb9]);
            this['hardLevels'] = this['shuffle'](this['hardLevels']);
        },
        'spawnPlatform': function(_0x241128) {
            if (!this['firstTime'])
                for (var _0x344018 = this['entities']['length'] - 0x1; 0x0 <= _0x344018; _0x344018--)
                    if ('EntitySegmentEnd' == this['entities'][_0x344018]['entityType']) {
                        this['posX'] = this['entities'][_0x344018]['pos']['x'] + this['entities'][_0x344018]['size']['x'];
                        break;
                    }
            this['posX'] < ig['system']['width'] && (this['posX'] = ig['system']['width']);
            if (!(this['posX'] >= this['tracehold'])) {
                this['foregrounds'] = [];
                this['entities'] = [];
                for (var _0x2defd3 = this['posX'], _0x25f8c7 = ig['system']['height'] - this['controller']['groundHeight'], _0x344018 = 0x0; _0x344018 < _0x241128; _0x344018++) {
                    for (var _0x627be = [], _0x627be = Math['random']() <= this['probabilityPowerUp'] ? this['powerUpLevels'] : this['controller']['score'] > this['nextLevelAfter'] ? this['hardLevels'] : this['levels'], _0x4e8b1c = Math['floor'](Math['random']() * _0x627be['length']), _0x2889a7 = _0x627be[_0x4e8b1c]['layer']['filter'](function(_0x4059a2) {
                            return 'foreground' === _0x4059a2['name'];
                        })[0x0], _0x2e1b28 = 0x0; _0x2e1b28 < _0x2889a7['data']['length']; _0x2e1b28++)
                        for (var _0x5abc5e = 0x0; _0x5abc5e < _0x2889a7['data'][_0x2e1b28]['length']; _0x5abc5e++)
                            if (0x0 != _0x2889a7['data'][_0x2e1b28][_0x5abc5e]) {
                                var _0x153ffd = ig['game']['spawnEntity'](EntityPlatform, _0x2defd3 + _0x5abc5e * _0x2889a7['tilesize'], _0x25f8c7 - (_0x2889a7['data']['length'] - _0x2e1b28) * _0x2889a7['tilesize'], {
                                    'image': this['tileset'],
                                    'tile': _0x2889a7['data'][_0x2e1b28][_0x5abc5e] - 0x1,
                                    'tileSize': _0x2889a7['tilesize'],
                                    'entityType': 'EntityPlatform',
                                    'controller': this['controller'],
                                    'platformController': this
                                });
                                this['foregrounds']['push'](_0x153ffd);
                            }
                    for (_0x2e1b28 = 0x0; _0x2e1b28 < _0x627be[_0x4e8b1c]['entities']['length']; _0x2e1b28++) _0x5abc5e = JSON['parse'](JSON['stringify'](_0x627be[_0x4e8b1c]['entities'][_0x2e1b28])), _0x5abc5e['x'] += _0x2defd3, _0x5abc5e['y'] = _0x25f8c7 - _0x2889a7['tilesize'] * _0x2889a7['height'] + _0x5abc5e['y'], _0x5abc5e['controller'] = this['controller'], _0x5abc5e['platformController'] = this, _0x5abc5e['entityType'] = _0x5abc5e['type'], delete _0x5abc5e['type'], _0x5abc5e = ig['game']['spawnEntity'](window[_0x5abc5e['entityType']], _0x5abc5e['x'], _0x5abc5e['y'], _0x5abc5e), this['entities']['push'](_0x5abc5e);
                    _0x2defd3 += _0x2889a7['tilesize'] * _0x2889a7['width'];
                }
                this['firstTime'] || this['moveEntity']();
                this['firstTime'] = !0x1;
                ig['game']['sortEntitiesDeferred']();
            }
        },
        'draw': function() {
            this['parent']();
        },
        'update': function() {
            this['parent']();
            this['timer'] && 0x0 < this['timer']['delta']() && (this['timer'] = null, this['moveEntity']());
        },
        'moveEntity': function() {
            for (var _0x4e704a = 0x0; _0x4e704a < this['foregrounds']['length']; _0x4e704a++) this['foregrounds'][_0x4e704a]['maxVel']['x'] = this['controller']['maxSpeed'], this['foregrounds'][_0x4e704a]['vel']['x'] = -this['controller']['speed'];
            for (_0x4e704a = 0x0; _0x4e704a < this['entities']['length']; _0x4e704a++) this['entities'][_0x4e704a]['maxVel']['x'] = this['controller']['maxSpeed'], this['entities'][_0x4e704a]['vel']['x'] = -this['controller']['speed'];
        },
        'segmentReachedTheEnd': function() {
            this['spawnPlatform'](0x2);
        },
        'stopPlatform': function() {
            this['timer'] && this['timer']['pause']();
        },
        'resumePlatform': function() {
            this['timer'] && this['timer']['unpause']();
        },
        'changeSpeed': function() {
            for (var _0x36228e = ig['game']['getEntitiesByType'](EntityPlatform), _0x2fe019 = 0x0; _0x2fe019 < _0x36228e['length']; _0x2fe019++) _0x36228e[_0x2fe019]['vel']['x'] = -this['controller']['speed'];
            _0x36228e = ig['game']['getEntitiesByType'](EntitySegmentEnd);
            for (_0x2fe019 = 0x0; _0x2fe019 < _0x36228e['length']; _0x2fe019++) _0x36228e[_0x2fe019]['vel']['x'] = -this['controller']['speed'];
            _0x36228e = ig['game']['getEntitiesByType'](EntityObstacle);
            for (_0x2fe019 = 0x0; _0x2fe019 < _0x36228e['length']; _0x2fe019++) _0x36228e[_0x2fe019]['vel']['x'] = -this['controller']['speed'];
            _0x36228e = ig['game']['getEntitiesByType'](EntityPowerUp);
            for (_0x2fe019 = 0x0; _0x2fe019 < _0x36228e['length']; _0x2fe019++) _0x36228e[_0x2fe019]['vel']['x'] = -this['controller']['speed'];
        },
        'clear': function() {
            for (var _0x4fe494 = ig['game']['getEntitiesByType'](EntityPlatform), _0x17eba1 = 0x0; _0x17eba1 < _0x4fe494['length']; _0x17eba1++) _0x4fe494[_0x17eba1]['kill']();
            _0x4fe494 = ig['game']['getEntitiesByType'](EntitySegmentEnd);
            for (_0x17eba1 = 0x0; _0x17eba1 < _0x4fe494['length']; _0x17eba1++) _0x4fe494[_0x17eba1]['kill']();
            _0x4fe494 = ig['game']['getEntitiesByType'](EntityObstacle);
            for (_0x17eba1 = 0x0; _0x17eba1 < _0x4fe494['length']; _0x17eba1++) _0x4fe494[_0x17eba1]['kill']();
            _0x4fe494 = ig['game']['getEntitiesByType'](EntityPowerUp);
            for (_0x17eba1 = 0x0; _0x17eba1 < _0x4fe494['length']; _0x17eba1++) _0x4fe494[_0x17eba1]['kill']();
        },
        'shuffle': function(_0x1a6312) {
            for (var _0x5096fe = _0x1a6312['length'], _0x41cff7, _0x5fbb7; 0x0 !== _0x5096fe;) _0x5fbb7 = Math['floor'](Math['random']() * _0x5096fe), _0x5096fe -= 0x1, _0x41cff7 = _0x1a6312[_0x5096fe], _0x1a6312[_0x5096fe] = _0x1a6312[_0x5fbb7], _0x1a6312[_0x5fbb7] = _0x41cff7;
            return _0x1a6312;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.popup-gameover')['requires']('impact.entity')['defines'](function() {
    EntityPopupGameover = ig['Entity']['extend']({
        'manager': null,
        'buttons': {},
        'visible': !0x1,
        'scale': 0x0,
        'context': null,
        'textPosY': 0x0,
        'init': function(_0x5597e5, _0x5efa56, _0x4be6e2) {
            this['parent'](_0x5597e5, _0x5efa56, _0x4be6e2);
            this['zIndex'] = 0x3e8;
            this['context'] = ig['system']['context'];
            this['spawnContent']();
        },
        'spawnContent': function() {
            var _0x251776 = ig['system']['width'] / 0x2,
                _0x3a55e7 = ig['system']['height'] / 0x2,
                _0x3a55e7 = _0x3a55e7 - 0x60;
            this['title'] = ig['game']['spawnEntity'](EntityTitle, _0x251776, _0x3a55e7, {
                'manager': this,
                'imageName': 'text-gameover',
                'align': 'BOTTOM_MIDDLE',
                'autoShow': !0x1
            });
            this['textPosY'] = _0x3a55e7;
            _0x251776 -= 0x14;
            _0x3a55e7 = ig['system']['height'] / 0x2;
            _0x3a55e7 += 0x60;
            this['buttons']['home'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x251776, _0x3a55e7, {
                'manager': this,
                'imageName': 'btn-home',
                'btnId': 'home',
                'align': 'TOP_RIGHT',
                'autoShow': !0x1
            });
            this['buttons']['retry'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x251776 + 0x28, _0x3a55e7, {
                'manager': this,
                'imageName': 'btn-retry',
                'btnId': 'retry',
                'align': 'TOP_LEFT',
                'autoShow': !0x1
            });
        },
        'draw': function() {
            if (this['visible']) {
                this['parent']();
                this['context']['save']();
                this['context']['scale'](this['scale'], this['scale']);
                var _0x8666ee = ig['system']['width'] / 0x2 / this['scale'],
                    _0x2f908a = (this['textPosY'] + 0x28) / this['scale'];
                this['context']['font'] = '32px fulboargenta, sans-serif';
                this['context']['textAlign'] = 'center';
                this['context']['fillStyle'] = 'rgba(18,58,56,255)';
                this['context']['fillText'](_STRINGS['Game']['Score'], _0x8666ee, _0x2f908a);
                _0x8666ee -= 0x2 / this['scale'];
                _0x2f908a -= 0x2 / this['scale'];
                this['context']['fillStyle'] = 'rgba(255,255,255,255)';
                this['context']['fillText'](_STRINGS['Game']['Score'], _0x8666ee, _0x2f908a);
                this['context']['font'] = '44px fulboargenta, sans-serif';
                _0x8666ee += 0x2 / this['scale'];
                _0x2f908a += 0x2a / this['scale'];
                this['context']['fillStyle'] = 'rgba(18,58,56,255)';
                this['context']['fillText'](this['manager']['score'], _0x8666ee, _0x2f908a);
                _0x8666ee -= 0x2 / this['scale'];
                _0x2f908a -= 0x2 / this['scale'];
                this['context']['fillStyle'] = 'rgba(255,255,255,255)';
                this['context']['fillText'](this['manager']['score'], _0x8666ee, _0x2f908a);
                this['context']['font'] = '32px fulboargenta, sans-serif';
                _0x8666ee += 0x2 / this['scale'];
                _0x2f908a += 0x2f / this['scale'];
                this['context']['fillStyle'] = 'rgba(18,58,56,255)';
                this['context']['fillText'](_STRINGS['Game']['HighScore'], _0x8666ee, _0x2f908a);
                _0x8666ee -= 0x2 / this['scale'];
                _0x2f908a -= 0x2 / this['scale'];
                this['context']['fillStyle'] = 'rgba(255,255,255,255)';
                this['context']['fillText'](_STRINGS['Game']['HighScore'], _0x8666ee, _0x2f908a);
                this['context']['font'] = '44px fulboargenta, sans-serif';
                _0x8666ee += 0x2 / this['scale'];
                _0x2f908a += 0x2a / this['scale'];
                this['context']['fillStyle'] = 'rgba(18,58,56,255)';
                this['context']['fillText'](ig['game']['sessionData']['highScore'], _0x8666ee, _0x2f908a);
                _0x8666ee -= 0x2 / this['scale'];
                _0x2f908a -= 0x2 / this['scale'];
                this['context']['fillStyle'] = 'rgba(255,255,255,255)';
                this['context']['fillText'](ig['game']['sessionData']['highScore'], _0x8666ee, _0x2f908a);
                this['context']['restore']();
            }
        },
        'show': function() {
            for (var _0xb08fea in this['buttons']) this['buttons']['hasOwnProperty'](_0xb08fea) && this['buttons'][_0xb08fea]['show']();
            this['title']['show']();
            this['visible'] = !0x0;
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
        },
        'hide': function(_0x178f0e) {
            for (var _0xb5a73a in this['buttons']) this['buttons']['hasOwnProperty'](_0xb5a73a) && this['buttons'][_0xb5a73a]['hide']();
            this['title']['hide'](function() {
                _0x178f0e && _0x178f0e();
            }['bind'](this));
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                }['bind'](this)
            })['start']();
        },
        'onButtonReleased': function(_0x2ccdb4) {
            switch (_0x2ccdb4) {
                case 'home':
                    this['hide'](function() {
                        this['homeRun']();
                    }['bind'](this));
                    break;
                case 'retry':
					gradle.event('btn_retry');
                    this['hide'](function() {
						this['reloadRun']();
                    }['bind'](this));
            }
        },
        'homeRun': function() {
            this['homeGame']();
        },
        'homeGame': function() {
            ig['game']['director']['jumpTo'](LevelHome);
        },
        'reloadRun': function() {
            this['reloadGame']();
        },
        'reloadGame': function() {
            ig['game']['director']['reloadLevel']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-hover-clicked')['requires']('impact.entity', 'game.entities.buttons.button')['defines'](function() {
    EntityButtonHoverClicked = EntityButton['extend']({
        'btnId': '',
        'manager': null,
        'imageName': '',
        'image': null,
        'context': null,
        'align': 'CENTER',
        'visible': !0x1,
        'scale': 0x0,
        'autoShow': !0x0,
        'centerDst': {
            'x': 0x0,
            'y': 0x0
        },
        'isPopUp': !0x1,
        'oldZIndex': -0x1,
        'pressed': !0x1,
        'disabled': !0x1,
        'init': function(_0x5e7edd, _0x32dbb4, _0x1f734c) {
            this['parent'](_0x5e7edd, _0x32dbb4, _0x1f734c);
            this['btnId'] = _0x1f734c['btnId'];
            this['manager'] = _0x1f734c['manager'];
            this['imageName'] = _0x1f734c['imageName'];
            this['image'] = new ig['Image']('images/' + this['imageName'] + '.png');
            this['size']['x'] = this['image']['width'];
            this['size']['y'] = this['image']['height'];
            this['setAlign']();
            this['context'] = ig['system']['context'];
            this['oldZIndex'] = this['zIndex'] = this['manager']['zIndex'] + 0x1;
            this['autoShow'] ? this['show']() : this['zIndex'] = -0x1;
            'function' == typeof this['manager']['getCenter'] && (this['centerDst']['x'] = this['pos']['x'] + this['size']['x'] / 0x2 - this['manager']['getCenter']()['x'], this['centerDst']['y'] = this['pos']['y'] + this['size']['y'] / 0x2 - this['manager']['getCenter']()['y'], this['isPopUp'] = !0x0);
        },
        'setAlign': function() {
            switch (this['align']) {
                case 'CENTER':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'TOP_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    break;
                case 'TOP_MIDDLE':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    break;
                case 'CENTER_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'CENTER_LEFT':
                    this['pos']['y'] -= this['image']['height'] / 0x2;
            }
        },
        'checkRelease': function() {
            ig['input']['released']('click') && this['released']();
        },
        'clicked': function() {
            !this['disabled'] && (!this['pressed'] && this['visible']) && (this['pressed'] = !0x0, this['scale'] = 0.8);
        },
        'clicking': function() {},
        'released': function() {
            this['pressed'] && (this['pressed'] = !0x1, this['visible'] && 'function' === typeof this['manager']['onButtonReleased'] && (this['scale'] = 0x1, this['manager']['onButtonReleased'](this['btnId']), ig['game']['playSfx']('click')));
        },
        'over': function() {},
        'leave': function() {},
        'draw': function() {
            if (this['visible']) {
                this['parent']();
                this['context']['save']();
                this['context']['scale'](this['scale'], this['scale']);
                if (this['isPopUp']) {
                    var _0x32eaa3 = (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'],
                        _0x25a1b0 = (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'],
                        _0x32eaa3 = _0x32eaa3 - this['centerDst']['x'] * (0x1 - this['manager']['scale']) / this['scale'],
                        _0x25a1b0 = _0x25a1b0 - this['centerDst']['y'] * (0x1 - this['manager']['scale']) / this['scale'];
                    this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], _0x32eaa3, _0x25a1b0, this['image']['width'], this['image']['height']);
                } else this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'], (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'], this['image']['width'], this['image']['height']);
                this['context']['restore']();
                this['checkRelease']();
            }
        },
        'setImage': function(_0x5657e7) {
            this['image'] = new ig['Image']('images/' + _0x5657e7 + '.png');
        },
        'hide': function() {
            this['disabled'] = !0x0;
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                    this['zIndex'] = -0x1;
                    ig['game']['sortEntitiesDeferred']();
                }['bind'](this)
            })['start']();
        },
        'show': function() {
            this['zIndex'] = this['oldZIndex'];
            this['visible'] = !0x0;
            ig['game']['sortEntitiesDeferred']();
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {
                    this['disabled'] = !0x1;
                }['bind'](this)
            })['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.others.title')['requires']('impact.entity')['defines'](function() {
    EntityTitle = ig['Entity']['extend']({
        'manager': null,
        'imageName': '',
        'image': null,
        'context': null,
        'visible': !0x1,
        'scale': 0x0,
        'autoShow': !0x0,
        'align': 'TOP_LEFT',
        'centerDst': {
            'x': 0x0,
            'y': 0x0
        },
        'isPopUp': !0x1,
        'init': function(_0x42699b, _0x43c7ef, _0xc637e5) {
            this['parent'](_0x42699b, _0x43c7ef, _0xc637e5);
            this['manager'] = _0xc637e5['manager'];
            this['imageName'] = _0xc637e5['imageName'];
            this['image'] = new ig['Image']('images/' + this['imageName'] + '.png');
            this['size']['x'] = this['image']['width'];
            this['size']['y'] = this['image']['height'];
            this['context'] = ig['system']['context'];
            this['setAlign']();
            this['zIndex'] = this['manager']['zIndex'] + 0x1;
            this['autoShow'] && this['show']();
            'function' == typeof this['manager']['getCenter'] && (this['centerDst']['x'] = this['pos']['x'] + this['size']['x'] / 0x2 - this['manager']['getCenter']()['x'], this['centerDst']['y'] = this['pos']['y'] + this['size']['y'] / 0x2 - this['manager']['getCenter']()['y'], this['isPopUp'] = !0x0);
        },
        'setAlign': function() {
            switch (this['align']) {
                case 'CENTER':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'TOP_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    break;
                case 'TOP_MIDDLE':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    break;
                case 'CENTER_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'CENTER_LEFT':
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'BOTTOM_MIDDLE':
                    this['pos']['x'] -= this['image']['width'] / 0x2, this['pos']['y'] -= this['image']['height'];
            }
        },
        'draw': function() {
            if (this['visible']) {
                this['parent']();
                this['context']['save']();
                this['context']['scale'](this['scale'], this['scale']);
                if (this['isPopUp']) {
                    var _0x1a878b = (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'],
                        _0xe8d291 = (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'],
                        _0x1a878b = _0x1a878b - this['centerDst']['x'] * (0x1 - this['manager']['scale']) / this['scale'],
                        _0xe8d291 = _0xe8d291 - this['centerDst']['y'] * (0x1 - this['manager']['scale']) / this['scale'];
                    this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], _0x1a878b, _0xe8d291, this['image']['width'], this['image']['height']);
                } else this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'], (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'], this['image']['width'], this['image']['height']);
                this['context']['restore']();
            }
        },
        'hide': function() {
            this['hide'](null);
        },
        'hide': function(_0x3f6043) {
            this['callback'] = _0x3f6043;
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                    this['callback'] && this['callback']();
                }['bind'](this)
            })['start']();
        },
        'show': function() {
            this['visible'] = !0x0;
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.slider')['requires']('impact.entity')['defines'](function() {
    EntitySlider = ig['Entity']['extend']({
        'manager': null,
        'iconName': '',
        'icon': {
            'image': null,
            'pos': {
                'x': 0x0,
                'y': 0x0
            },
            'offset': {
                'x': -0x34,
                'y': 0x0
            }
        },
        'actualSize': {
            'x': 0x0,
            'y': 0x0
        },
        'align': 'center middle',
        'value': 0.5,
        'type': ig['Entity']['TYPE']['A'],
        'enabled': !0x0,
        'updatingValue': !0x1,
        'pointer': null,
        'slide': {
            'min': 0x0,
            'max': 0x0,
            'length': 0x0
        },
        'bar': {
            'image': new ig['Image']('images/slider-bg.png'),
            'pos': {
                'x': 0x0,
                'y': 0x0
            }
        },
        'fill': {
            'image': new ig['Image']('images/slider-bar.png'),
            'pos': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x0,
                'y': 0x0
            },
            'offset': {
                'x': 0x0,
                'y': -0x1
            }
        },
        'knob': {
            'image': new ig['Image']('images/slider-knob.png'),
            'pos': {
                'x': 0x0,
                'y': 0x0
            },
            'margin': {
                'min': 0x9,
                'max': 0x9
            }
        },
        'init': function(_0x226fb7, _0x1ef09a, _0x36b4db) {
            this['parent'](_0x226fb7, _0x1ef09a, _0x36b4db);
            ig['global']['wm'] || (this['context'] = ig['system']['context'], this['icon']['image'] = new ig['Image']('images/' + this['iconName'] + '.png'), this['initSize'](), this['initPos'](), this['initSlide']());
        },
        'initSize': function() {
            this['size']['x'] = this['bar']['image']['width'];
            this['size']['y'] = this['knob']['image']['height'];
            this['fill']['size']['y'] = this['fill']['image']['height'];
            this['actualSize']['x'] = this['size']['x'] - this['icon']['offset']['x'];
            this['actualSize']['y'] = this['icon']['image']['height'];
        },
        'initPos': function() {
            this['pos']['x'] += (this['actualSize']['x'] - this['size']['x']) / 0x2;
            this['pos']['y'] += (this['actualSize']['y'] - this['size']['y']) / 0x2;
            this['updateAlign']();
            this['bar']['pos']['x'] = this['pos']['x'];
            this['bar']['pos']['y'] = this['pos']['y'] + (this['size']['y'] - this['bar']['image']['height']) / 0x2;
            this['fill']['pos']['x'] = this['bar']['pos']['x'] + (this['bar']['image']['width'] - this['fill']['image']['width']) / 0x2 + this['fill']['offset']['x'];
            this['fill']['pos']['y'] = this['bar']['pos']['y'] + (this['bar']['image']['height'] - this['fill']['image']['height']) / 0x2 + this['fill']['offset']['y'];
            this['knob']['pos']['x'] = this['fill']['pos']['x'] + this['fill']['size']['x'] - this['knob']['image']['width'] / 0x2;
            this['knob']['pos']['y'] = this['fill']['pos']['y'] + (this['fill']['image']['height'] - this['knob']['image']['height']) / 0x2;
            this['icon']['pos']['x'] = this['pos']['x'] + this['icon']['offset']['x'];
            this['icon']['pos']['y'] = this['pos']['y'] + (this['size']['y'] - this['icon']['image']['height']) / 0x2 + this['icon']['offset']['y'];
        },
        'initSlide': function() {
            this['slide']['min'] = this['fill']['pos']['x'] + this['knob']['margin']['min'];
            this['slide']['max'] = this['fill']['pos']['x'] + this['fill']['image']['width'] - this['knob']['margin']['max'];
            this['slide']['length'] = this['slide']['max'] - this['slide']['min'];
            this['knob']['pos']['x'] = this['slide']['min'] + this['slide']['length'] * this['value'] - this['knob']['image']['width'] / 0x2;
            this['fill']['size']['x'] = this['knob']['pos']['x'] - this['fill']['pos']['x'] + this['knob']['image']['width'] / 0x2;
        },
        'updateAlign': function() {
            var _0x501c1b = this['align']['split'](' ');
            switch (_0x501c1b[0x0]) {
                case 'center':
                    this['pos']['x'] -= this['size']['x'] / 0x2;
                    break;
                case 'right':
                    this['pos']['x'] -= this['size']['x'];
            }
            switch (_0x501c1b[0x1]) {
                case 'middle':
                    this['pos']['y'] -= this['size']['y'] / 0x2;
                    break;
                case 'bottom':
                    this['pos']['y'] -= this['size']['y'];
            }
        },
        'update': function() {
            this['pressed'] && (this['checkRelease'](), this['updateValue']());
            this['parent']();
        },
        'updateValue': function() {
            var _0x285a83 = this['pointer']['pos']['x'] - this['slide']['min'];
            0x0 > _0x285a83 ? _0x285a83 = 0x0 : _0x285a83 > this['slide']['length'] && (_0x285a83 = this['slide']['length']);
            var _0x3f4c2c = _0x285a83 / this['slide']['length'];
            this['value'] !== _0x3f4c2c && (this['value'] = _0x3f4c2c, this['manager']['onSliderChanged'](this['index'], this['value']));
            this['knob']['pos']['x'] = this['slide']['min'] + _0x285a83 - this['knob']['image']['width'] / 0x2;
            this['fill']['size']['x'] = this['knob']['pos']['x'] - this['fill']['pos']['x'] + this['knob']['image']['width'] / 0x2;
        },
        'checkRelease': function() {
            ig['input']['released']('click') && this['released']();
        },
        'draw': function() {
            this['context']['save']();
            this['context']['drawImage'](this['bar']['image']['data'], this['pos']['x'], this['pos']['y']);
            this['fill']['size']['x'] && this['context']['drawImage'](this['fill']['image']['data'], 0x0, 0x0, this['fill']['size']['x'], this['fill']['size']['y'], this['fill']['pos']['x'], this['fill']['pos']['y'], this['fill']['size']['x'], this['fill']['size']['y']);
            this['context']['drawImage'](this['knob']['image']['data'], this['knob']['pos']['x'], this['knob']['pos']['y']);
            this['context']['drawImage'](this['icon']['image']['data'], this['icon']['pos']['x'], this['icon']['pos']['y']);
            this['context']['restore']();
        },
        'clicked': function() {
            console['log']('clicked');
            this['enabled'] && (this['pressed'] = !0x0);
        },
        'released': function() {
            this['pressed'] && (this['pressed'] = !0x1, this['manager']['onSliderReleased'](this['index'], this['value']));
        },
        'releasedOutside': function() {
            this['released']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.settings-slider')['requires']('game.entities.ui.slider')['defines'](function() {
    EntitySettingsSlider = EntitySlider['extend']({
        'visible': !0x1,
        'scale': 0x0,
        'center': {
            'parent': {},
            'bar': {},
            'fill': {},
            'knob': {},
            'icon': {}
        },
        'translate': {
            'bar': {},
            'fill': {},
            'knob': {},
            'icon': {}
        },
        'autoShow': !0x0,
        'init': function(_0x2dcb73, _0x41e0c7, _0x104791) {
            this['parent'](_0x2dcb73, _0x41e0c7, _0x104791);
            this['initTranslate']();
            this['autoShow'] && this['show']();
        },
        'initSlide': function() {
            this['parent']();
            this['translate']['knob']['x'] = this['knob']['pos']['x'] - this['center']['parent']['x'] + this['knob']['image']['width'] / 0x2;
        },
        'initTranslate': function() {
            this['center']['parent'] = this['manager']['getCenter']();
            this['center']['bar']['x'] = -this['bar']['image']['width'] / 0x2;
            this['center']['bar']['y'] = -this['bar']['image']['height'] / 0x2;
            this['center']['fill']['x'] = -this['fill']['image']['width'] / 0x2;
            this['center']['fill']['y'] = -this['fill']['image']['height'] / 0x2;
            this['center']['knob']['x'] = -this['knob']['image']['width'] / 0x2;
            this['center']['knob']['y'] = -this['knob']['image']['height'] / 0x2;
            this['center']['icon']['x'] = -this['icon']['image']['width'] / 0x2;
            this['center']['icon']['y'] = -this['icon']['image']['height'] / 0x2;
            this['translate']['bar']['x'] = this['bar']['pos']['x'] - this['center']['parent']['x'] + this['bar']['image']['width'] / 0x2;
            this['translate']['bar']['y'] = this['bar']['pos']['y'] - this['center']['parent']['y'] + this['bar']['image']['height'] / 0x2;
            this['translate']['fill']['x'] = this['fill']['pos']['x'] - this['center']['parent']['x'] + this['fill']['image']['width'] / 0x2;
            this['translate']['fill']['y'] = this['fill']['pos']['y'] - this['center']['parent']['y'] + this['fill']['image']['height'] / 0x2;
            this['translate']['knob']['x'] = this['knob']['pos']['x'] - this['center']['parent']['x'] + this['knob']['image']['width'] / 0x2;
            this['translate']['knob']['y'] = this['knob']['pos']['y'] - this['center']['parent']['y'] + this['knob']['image']['height'] / 0x2;
            this['translate']['icon']['x'] = this['icon']['pos']['x'] - this['center']['parent']['x'] + this['icon']['image']['width'] / 0x2;
            this['translate']['icon']['y'] = this['icon']['pos']['y'] - this['center']['parent']['y'] + this['icon']['image']['height'] / 0x2;
        },
        'draw': function() {
            this['visible'] && (this['drawBar'](), this['drawFill'](), this['drawKnob'](), this['drawIcon']());
        },
        'drawBar': function() {
            this['context']['save']();
            this['context']['translate'](this['center']['parent']['x'], this['center']['parent']['y']);
            this['context']['scale'](this['scale'], 0x1);
            this['context']['translate'](this['translate']['bar']['x'], this['translate']['bar']['y']);
            this['context']['drawImage'](this['bar']['image']['data'], this['center']['bar']['x'], this['center']['bar']['y']);
            this['context']['restore']();
        },
        'drawFill': function() {
            this['fill']['size']['x'] && (this['context']['save'](), this['context']['translate'](this['center']['parent']['x'], this['center']['parent']['y']), this['context']['scale'](this['scale'], 0x1), this['context']['translate'](this['translate']['fill']['x'], this['translate']['fill']['y']), this['context']['drawImage'](this['fill']['image']['data'], 0x0, 0x0, this['fill']['size']['x'], this['fill']['size']['y'], this['center']['fill']['x'], this['center']['fill']['y'], this['fill']['size']['x'], this['fill']['size']['y']), this['context']['restore']());
        },
        'drawKnob': function() {
            this['context']['save']();
            this['context']['translate'](this['center']['parent']['x'], this['center']['parent']['y']);
            this['context']['scale'](this['scale'], 0x1);
            this['context']['translate'](this['translate']['knob']['x'], this['translate']['knob']['y']);
            this['context']['drawImage'](this['knob']['image']['data'], this['center']['knob']['x'], this['center']['knob']['y']);
            this['context']['restore']();
        },
        'drawIcon': function() {
            this['context']['save']();
            this['context']['translate'](this['center']['parent']['x'], this['center']['parent']['y']);
            this['context']['scale'](this['scale'], 0x1);
            this['context']['translate'](this['translate']['icon']['x'], this['translate']['icon']['y']);
            this['context']['drawImage'](this['icon']['image']['data'], this['center']['icon']['x'], this['center']['icon']['y']);
            this['context']['restore']();
        },
        'show': function() {
            this['visible'] = !0x0;
            this['zIndex'] = this['manager']['zIndex'] + 0x1;
            ig['game']['sortEntitiesDeferred']();
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
        },
        'hide': function() {
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                    this['zIndex'] = -0x1;
                    ig['game']['sortEntitiesDeferred']();
                }['bind'](this)
            })['start']();
        },
        'updateValue': function() {
            var _0x4eff5e = this['pointer']['pos']['x'] - this['slide']['min'];
            0x0 > _0x4eff5e ? _0x4eff5e = 0x0 : _0x4eff5e > this['slide']['length'] && (_0x4eff5e = this['slide']['length']);
            var _0x42fe1c = _0x4eff5e / this['slide']['length'];
            if (this['value'] !== _0x42fe1c && (this['value'] = _0x42fe1c, this['visible'])) this['manager']['onSliderChanged'](this['index'], this['value']);
            this['knob']['pos']['x'] = this['slide']['min'] + _0x4eff5e - this['knob']['image']['width'] / 0x2;
            this['fill']['size']['x'] = this['knob']['pos']['x'] - this['fill']['pos']['x'] + this['knob']['image']['width'] / 0x2;
            this['translate']['knob']['x'] = this['knob']['pos']['x'] - this['center']['parent']['x'] + this['knob']['image']['width'] / 0x2;
        },
        'released': function() {
            if (this['pressed'] && (this['pressed'] = !0x1, this['visible'])) this['manager']['onSliderReleased'](this['index'], this['value']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.others.screen-hover')['requires']('impact.entity')['defines'](function() {
    EntityScreenHover = ig['Entity']['extend']({
        'visible': !0x1,
        'type': ig['Entity']['TYPE']['A'],
        'ignorePause': !0x0,
        'visible': !0x1,
        'init': function(_0x28aaf4, _0x1bf1f9, _0x805c0d) {
            this['parent'](_0x28aaf4, _0x1bf1f9, _0x805c0d);
            this['size']['x'] = ig['system']['width'];
            this['size']['y'] = ig['system']['height'];
            this['context'] = ig['system']['context'];
            this['hide']();
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['visible'] && (this['parent'](), this['context']['save'](), this['context']['fillStyle'] = 'rgba(0,0,0,0.5)', this['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']), this['context']['restore']());
        },
        'show': function(_0x5c441f) {
            this['visible'] = !0x0;
            this['zIndex'] = _0x5c441f;
            ig['game']['sortEntitiesDeferred']();
        },
        'hide': function() {
            this['zIndex'] = -0x1;
            this['visible'] = !0x1;
            ig['game']['sortEntitiesDeferred']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.popup-paused')['requires']('impact.entity', 'game.entities.others.title', 'game.entities.ui.settings-slider', 'game.entities.buttons.button-hover-clicked', 'game.entities.others.screen-hover')['defines'](function() {
    EntityPopupPaused = ig['Entity']['extend']({
        'manager': null,
        'visible': !0x1,
        'scale': 0x0,
        'image': new ig['Image']('images/panel.png'),
        'sliders': {},
        'buttons': {},
        'align': 'TOP_LEFT',
        'oriPosTitle': {
            'x': 0x0,
            'y': 0x0
        },
        'screenHover': null,
        'init': function(_0x33fab0, _0x4cde3e, _0x2131ee) {
            this['parent'](_0x33fab0, _0x4cde3e, _0x2131ee);
            this['zIndex'] = 0x3e8;
            this['screenHover'] = ig['game']['spawnEntity'](EntityScreenHover, 0x0, 0x0);
            this['context'] = ig['system']['context'];
            this['size']['x'] = this['image']['width'];
            this['size']['y'] = this['image']['height'];
            this['setAlign']();
            this['spawnContent']();
        },
        'setAlign': function() {
            switch (this['align']) {
                case 'CENTER':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'TOP_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    break;
                case 'CENTER_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'CENTER_LEFT':
                    this['pos']['y'] -= this['image']['height'] / 0x2;
            }
        },
        'spawnContent': function() {
            var _0x2a6757 = this['pos']['x'] + this['size']['x'] / 0x2,
                _0x411024 = this['pos']['y'] + 0x3c;
            this['title'] = ig['game']['spawnEntity'](EntityTitle, _0x2a6757, _0x411024, {
                'manager': this,
                'imageName': 'text-paused',
                'align': 'TOP_MIDDLE',
                'autoShow': !0x1
            });
            _0x411024 += this['title']['size']['y'] + 0xf;
            this['sliders']['music'] = ig['game']['spawnEntity'](EntitySettingsSlider, _0x2a6757, _0x411024, {
                'manager': this,
                'iconName': 'music-icon',
                'index': 'music',
                'align': 'center top',
                'pointer': this['manager']['pointer'],
                'value': ig['game']['sessionData']['music'],
                'ignorePause': !0x0,
                'autoShow': !0x1
            });
            _0x411024 += this['sliders']['music']['size']['y'] + 0x19;
            console['log']('-->paused sound ' + ig['game']['sessionData']['sound']);
            this['sliders']['sound'] = ig['game']['spawnEntity'](EntitySettingsSlider, _0x2a6757, _0x411024, {
                'manager': this,
                'iconName': 'sound-icon',
                'index': 'sound',
                'align': 'center top',
                'pointer': this['manager']['pointer'],
                'value': ig['game']['sessionData']['sound'],
                'ignorePause': !0x0,
                'autoShow': !0x1
            });
            _0x411024 += this['sliders']['sound']['size']['y'] + 0xf;
            this['buttons']['resume'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x2a6757, _0x411024, {
                'manager': this,
                'imageName': 'btn-resume',
                'btnId': 'resume',
                'align': 'TOP_MIDDLE',
                'autoShow': !0x1
            });
            _0x2a6757 -= 0x32;
            _0x411024 += 0x7;
            this['buttons']['home'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x2a6757, _0x411024, {
                'manager': this,
                'imageName': 'btn-home',
                'btnId': 'home',
                'align': 'TOP_RIGHT',
                'autoShow': !0x1
            });
            this['buttons']['retry'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x2a6757 + 0x64, _0x411024, {
                'manager': this,
                'imageName': 'btn-retry',
                'btnId': 'retry',
                'align': 'TOP_LEFT',
                'autoShow': !0x1
            });
        },
        'draw': function() {
            this['visible'] && (this['parent'](), this['context']['save'](), this['context']['scale'](this['scale'], this['scale']), this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'], (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'], this['image']['width'], this['image']['height']), this['context']['restore']());
        },
        'hide': function(_0x462cda) {
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                    this['screenHover']['hide']();
                    _0x462cda && _0x462cda();
                }['bind'](this)
            })['start']();
            this['hideContents']();
        },
        'show': function() {
            this['screenHover']['show'](this['zIndex']);
            this['visible'] = !0x0;
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
            this['showContents']();
        },
        'showContents': function() {
            this['title']['show']();
            this['sliders']['music']['show']();
            this['sliders']['sound']['show']();
            for (var _0x292632 in this['buttons']) this['buttons']['hasOwnProperty'](_0x292632) && this['buttons'][_0x292632]['show']();
        },
        'hideContents': function() {
            this['title']['hide']();
            this['sliders']['music']['hide']();
            this['sliders']['sound']['hide']();
            for (var _0x3f4831 in this['buttons']) this['buttons']['hasOwnProperty'](_0x3f4831) && this['buttons'][_0x3f4831]['hide']();
        },
        'getCenter': function() {
            return {
                'x': this['pos']['x'] + this['size']['x'] / 0x2,
                'y': this['pos']['y'] + this['size']['y'] / 0x2
            };
        },
        'onSliderChanged': function(_0x41d733, _0x185746) {
            'sound' === _0x41d733 ? ig['soundHandler']['sfxPlayer']['volume'](_0x185746) : ig['soundHandler']['bgmPlayer']['volume'](_0x185746);
        },
        'onSliderReleased': function(_0x460ebf, _0x20da18) {
            'sound' === _0x460ebf ? ig['soundHandler']['sfxPlayer']['volume'](_0x20da18) : ig['soundHandler']['bgmPlayer']['volume'](_0x20da18);
            ig['game']['save'](_0x460ebf, Math['round'](0x64 * _0x20da18) / 0x64);
        },
        'onButtonReleased': function(_0x516948) {
            switch (_0x516948) {
                case 'resume':
					//gradle.event('btn_resumegame');
                    this['hide'](function() {
                        this['manager']['resumeGame']();
                    }['bind'](this));
                    break;
                case 'home':
					//gradle.event('btn_gotohome');
                    this['hide'](function() {
                        this['homeRun']();
                    }['bind'](this));
                    break;
                case 'retry':
					//gradle.event('btn_retry');
                    this['hide'](function() {
                        this['reloadRun']();
                    }['bind'](this));
            }
        },
        'homeRun': function() {
            this['homeGame']();
        },
        'homeGame': function() {
            ig['game']['director']['jumpTo'](LevelHome);
        },
        'reloadRun': function() {
            this['reloadGame']();
        },
        'reloadGame': function() {
            ig['game']['director']['reloadLevel']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.score-panel')['requires']('impact.entity')['defines'](function() {
    EntityScorePanel = ig['Entity']['extend']({
        'controller': null,
        'visible': !0x1,
        'context': null,
        'scale': 0x0,
        'init': function(_0xa56a94, _0x3247cd, _0x53a170) {
            this['parent'](_0xa56a94, _0x3247cd, _0x53a170);
            this['controller'] = _0x53a170['controller'];
            this['context'] = ig['system']['context'];
        },
        'draw': function() {
            if (this['visible']) {
                this['parent']();
                this['context']['save']();
                this['context']['scale'](this['scale'], this['scale']);
                this['context']['font'] = '48px fulboargenta, sans-serif';
                this['context']['textAlign'] = 'center';
                this['context']['fillStyle'] = 'rgba(18,58,56,255)';
                var _0x47c40a = this['pos']['x'] / this['scale'],
                    _0x40374d = this['pos']['y'] / this['scale'];
                this['context']['fillText'](this['controller']['score'], _0x47c40a, _0x40374d);
                this['context']['fillStyle'] = 'rgba(255,255,255,255)';
                _0x47c40a -= 0x2 / this['scale'];
                _0x40374d -= 0x2 / this['scale'];
                this['context']['fillText'](this['controller']['score'], _0x47c40a, _0x40374d);
                this['context']['restore']();
            }
        },
        'show': function() {
            this['visible'] = !0x0;
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
        },
        'hide': function() {
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                }['bind'](this)
            })['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.game-controller')['requires']('impact.entity', 'game.entities.backgrounds.bg', 'game.entities.games.player', 'game.entities.games.enemy', 'game.entities.games.fight', 'game.entities.pointer-selector', 'game.entities.controllers.platform-controller', 'game.entities.ui.popup-gameover', 'game.entities.buttons.button-hover-clicked', 'game.entities.ui.popup-paused', 'game.entities.ui.score-panel')['defines'](function() {
    EntityGameController = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'state': states['RUNNING'],
        'maxSpeed': 0x226,
        'speed': 0x190,
        'bgSpeed': 0x15e,
        'bg': null,
        'player': null,
        'enemy': null,
        'fightScene': null,
        'groundHeight': 0x40,
        'timer': new ig['Timer'](),
        'gameOverTimer': null,
        'pointer': null,
        'startMove': !0x1,
        'allowJump': !0x0,
        'playerFallCount': 0x0,
        'enemyStartX': 0x0,
        'enemyMoveLength': 0x0,
        'isEnemyApproaching': !0x1,
        'enemyApproachingTime': 0x0,
        'platformController': null,
        'popupGameOver': null,
        'buttons': {},
        'popups': {},
        'isPlayerPowerUpSpeed': !0x1,
        'playerAwayTime': 0x0,
        'playerEnteringPosX': 0x0,
        'enemyEnteringPosX': 0x0,
        'enteringScene': !0x0,
        'score': 0x0,
        'scorePanel': null,
        'travelLength': 0x0,
        'ppm': 0x64,
        'init': function(_0xd77623, _0x3cb761, _0x332f4) {
            this['parent'](_0xd77623, _0x3cb761, _0x332f4);
            ig['global']['wm'] || (this['pos']['x'] = 0x0, this['pos']['y'] = 0x0, this['size']['x'] = ig['system']['width'], this['size']['y'] = ig['system']['height'], this['zIndex'] = 0x2, this['pointer'] = ig['game']['spawnEntity'](EntityPointerSelector, ig['system']['width'], ig['system']['height']), this['initBG'](), this['initPlayer'](), this['initEnemy'](), this['enemyApproachingTime'] = this['player']['anims']['fall']['sequence']['length'] * this['player']['anims']['fall']['frameTime'], this['timer']['set'](0x2), this['timer']['pause'](), this['tween']({
                'playerEnteringPosX': ig['system']['width'] / 0x2,
                'enemyEnteringPosX': this['enemy']['size']['x'] / 0x2
            }, 0x2, {
                'onComplete': function() {
                    this['enteringScene'] = !0x1;
                    this['timer']['unpause']();
                    this['startMove'] = !0x0;
                    this['enemyMoveLength'] = (this['player']['pos']['x'] - this['enemy']['pos']['x']) / 0x4;
                }['bind'](this)
            })['start'](), this['platformController'] = ig['game']['spawnEntity'](EntityPlatformController, 0x0, 0x0, {
                'controller': this
            }), this['popupGameOver'] = ig['game']['spawnEntity'](EntityPopupGameover, 0x0, 0x0, {
                'manager': this
            }), this['buttons']['pause'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, ig['system']['width'] - 0x14, 0x14, {
                'manager': this,
                'imageName': 'btn-paused',
                'btnId': 'pause',
                'align': 'TOP_RIGHT'
            }), this['buttons']['pause']['zIndex'] = 0x3e8, this['buttons']['pause']['oldZIndex'] = 0x3e8, _0xd77623 = ig['system']['width'] / 0x2, _0x3cb761 = ig['system']['height'] / 0x2, this['popups']['paused'] = ig['game']['spawnEntity'](EntityPopupPaused, _0xd77623, _0x3cb761, {
                'manager': this,
                'align': 'CENTER'
            }), this['scorePanel'] = ig['game']['spawnEntity'](EntityScorePanel, ig['system']['width'] / 0x2, 0x3c, {
                'controller': this
            }), this['scorePanel']['zIndex'] = 0x3e8);
        },
        'initBG': function() {
            this['bg'] = ig['game']['spawnEntity'](EntityBg, 0x0, 0x0, {
                'controller': this
            });
        },
        'initPlayer': function() {
            this['player'] = ig['game']['spawnEntity'](EntityPlayer, 0x0, 0x0, {
                'controller': this
            });
            this['player']['pos']['x'] = -this['player']['size']['x'];
            this['player']['pos']['y'] = ig['system']['height'] - this['player']['size']['y'] - this['groundHeight'];
            this['playerEnteringPosX'] = -this['player']['size']['x'];
        },
        'initEnemy': function() {
            this['enemy'] = ig['game']['spawnEntity'](EntityEnemy, 0x0, 0x0, {
                'controller': this
            });
            this['enemy']['pos']['x'] = -(ig['system']['width'] / 0x2 - this['enemy']['size']['x'] / 0x2);
            this['enemy']['pos']['y'] = ig['system']['height'] - this['enemy']['size']['y'] - this['groundHeight'];
            this['enemyEnteringPosX'] = -(ig['system']['width'] / 0x2 - this['enemy']['size']['x'] / 0x2);
        },
        'moveToStartPosition': function() {
            this['enteringScene'] && (this['player']['pos']['x'] = this['playerEnteringPosX'], this['enemy']['pos']['x'] = this['enemyEnteringPosX']);
            null != this['timer'] && this['startMove'] && (0x0 < this['timer']['delta']() && (this['timer'] = null), this['enemy']['pos']['x'] -= this['enemy']['size']['x'] * ig['system']['tick'] / 0x2, this['player']['pos']['x'] -= this['player']['size']['x'] * ig['system']['tick'] / 0x2, this['enemy']['pos']['x'] < -this['enemy']['size']['x'] / 0x2 && (this['enemy']['pos']['x'] = -this['enemy']['size']['x'] / 0x2, this['enemyStartX'] = -this['enemy']['size']['x'] / 0x2), this['player']['pos']['x'] < ig['system']['width'] / 0x2 - this['player']['size']['x'] && (this['player']['pos']['x'] = ig['system']['width'] / 0x2 - this['player']['size']['x']));
        },
        'draw': function() {
            this['parent']();
        },
        'update': function() {
            null != this['gameOverTimer'] && 0x0 <= this['gameOverTimer']['delta']() && this['displayGameOverPopup']();
            this['state'] == states['RUNNING'] && (this['parent'](), this['moveToStartPosition'](), this['isEnemyApproaching'] ? (this['enemy']['pos']['x'] += this['enemyMoveLength'] * ig['system']['tick'] / this['enemyApproachingTime'], this['enemy']['pos']['x'] > this['enemyStartX'] + this['enemyMoveLength'] * this['playerFallCount'] && (this['enemy']['pos']['x'] = this['enemyStartX'] + this['enemyMoveLength'] * this['playerFallCount'], this['isEnemyApproaching'] = !0x1)) : this['isPlayerPowerUpSpeed'] && (this['enemy']['pos']['x'] -= this['enemyMoveLength'] * ig['system']['tick'] / this['playerAwayTime'], this['enemy']['pos']['x'] < this['enemyStartX'] + this['enemyMoveLength'] * (this['playerFallCount'] - 0x1) && (this['enemy']['pos']['x'] = this['enemyStartX'] + this['enemyMoveLength'] * (this['playerFallCount'] - 0x1), this['isPlayerPowerUpSpeed'] = !0x1)), ig['input']['pressed']('jump') && null != this['player'] && this['player']['doJump'](), null == this['timer'] && (this['scorePanel']['visible'] || this['scorePanel']['show'](), this['travelLength'] += ig['system']['tick'] * this['speed'], this['travelLength'] > this['ppm'] && (this['travelLength'] -= this['ppm'], this['score']++)));
        },
        'enemyApproaching': function() {
            this['playerFallCount']++;
            0x4 == this['playerFallCount'] ? this['gameOver']() : (ig['soundHandler']['sfxPlayer']['soundList']['bear']['_sounds'][0x0]['_ended'] && ig['game']['playSfx']('bear'), this['isEnemyApproaching'] = !0x0);
        },
        'gameOver': function() {
            this['buttons']['pause']['hide']();
            this['scorePanel']['hide']();
            this['state'] = states['GAME_OVER'];
            var _0x34f8d5 = function() {
                this['fightScene'] = ig['game']['spawnEntity'](EntityFight, 0x0, 0x0, {
                    'controller': this
                });
                this['fightScene']['pos']['x'] = this['player']['pos']['x'] + this['player']['size']['x'] / 0x2 - this['fightScene']['size']['x'] / 0x2;
                this['fightScene']['pos']['y'] = this['player']['pos']['y'] + this['player']['size']['y'] / 0x2 - this['fightScene']['size']['y'] / 0x2;
                this['player']['kill']();
                this['enemy']['kill']();
                this['gameOverTimer'] = new ig['Timer'](0x1);
                ig['game']['sortEntitiesDeferred']();
                ig['game']['playSfx']('fight');
            }['bind'](this);
            0x32 < Math['abs'](this['enemy']['pos']['y'] + this['enemy']['size']['y'] - (this['player']['pos']['y'] + this['player']['size']['y'])) ? this['enemy']['jump'](this['player']['pos']['x'], this['player']['pos']['y'] + this['player']['size']['y'] - this['enemy']['size']['y'], _0x34f8d5) : _0x34f8d5();
        },
        'displayGameOverPopup': function() {
            null == ig['game']['sessionData']['highScore'] && (ig['game']['sessionData']['highScore'] = 0x0);
            ig['game']['sessionData']['highScore'] < this['score'] && ig['game']['save']('highScore', this['score']);
            this['gameOverTimer'] = null;
            this['fightScene']['hide'](function() {
                ig['game']['stopSfx']('fight');
                this['popupGameOver']['show']();
                this['platformController']['clear']();
            }['bind'](this));
            this['buttons']['pause']['hide']();
        },
        'pauseGame': function() {
            this['state'] = states['PAUSED'];
            this['platformController']['stopPlatform']();
            this['buttons']['pause']['hide']();
            this['scorePanel']['hide']();
            this['popups']['paused']['show']();
            this['player']['pause']();
            null != this['timer'] && this['timer']['pause']();
            null != this['gameOverTimer'] && this['gameOverTimer']['pause']();
        },
        'resumeGame': function() {
            null != this['gameOverTimer'] ? (this['gameOverTimer']['unpause'](), this['gameOverTimer']['reset'](), this['state'] = states['GAME_OVER']) : (this['scorePanel']['show'](), this['state'] = states['RUNNING'], this['platformController']['resumePlatform'](), this['buttons']['pause']['show'](), this['player']['resume'](), null != this['timer'] && this['timer']['unpause']());
        },
        'onButtonReleased': function(_0x583afb) {
            switch (_0x583afb) {
                case 'pause':
                    this['pauseGame']();
            }
        },
        'clicked': function() {
            null != this['player'] && this['player']['doJump']();
        },
        'clicking': function() {},
        'released': function() {},
        'playerPowerUpSpeed': function() {
            -0x1 < this['playerFallCount'] && this['playerFallCount']--;
            this['isPlayerPowerUpSpeed'] = !0x0;
            this['playerAwayTime'] = 0x1;
            this['speed'] = 0x226;
            this['platformController']['changeSpeed']();
        },
        'playerPowerUpSpeedEnd': function() {
            this['speed'] = 0x190;
            this['platformController']['changeSpeed']();
        }
    });
});
var states = {
    'RUNNING': 0x1,
    'PAUSED': 0x2,
    'GAME_OVER': 0x3
};
ig['baked'] = !0x0;
ig['module']('game.levels.game')['requires']('impact.image', 'game.entities.controllers.game-controller')['defines'](function() {
    LevelGame = {
        'entities': [{
            'type': 'EntityGameController',
            'x': 0x348,
            'y': 0x84
        }],
        'layer': []
    };
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-hover-clicked-div')['requires']('game.entities.buttons.button-hover-clicked')['defines'](function() {
    EntityButtonHoverClickedDiv = EntityButtonHoverClicked['extend']({
        'div_layer_name': 'MoreGames',
        'clickableLayer': null,
        'link': '/',
        'newWindow': !0x1,
        'init': function(_0x5eceea, _0x37b721, _0x502eab) {
            this['parent'](_0x5eceea, _0x37b721, _0x502eab);
            _SETTINGS[this['div_layer_name']] && (_SETTINGS[this['div_layer_name']]['Link'] && (this['link'] = _SETTINGS[this['div_layer_name']]['Link']), _SETTINGS[this['div_layer_name']]['NewWindow'] && (this['newWindow'] = _SETTINGS[this['div_layer_name']]['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this));
        },
        'hide': function() {
            var _0x355fc1 = document['getElementById'](this['div_layer_name']);
            _0x355fc1 && (_0x355fc1['style']['display'] = 'none');
            this['parent']();
        },
        'show': function() {
            var _0x21c812 = document['getElementById'](this['div_layer_name']);
            _0x21c812 && (_0x21c812['style']['display'] = 'block');
            this['parent']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ui.popup-settings')['requires']('impact.entity', 'game.entities.others.title', 'game.entities.ui.settings-slider', 'game.entities.buttons.button-hover-clicked')['defines'](function() {
    EntityPopupSettings = ig['Entity']['extend']({
        'manager': null,
        'visible': !0x1,
        'scale': 0x0,
        'image': new ig['Image']('images/panel.png'),
        'sliders': {},
        'buttons': {},
        'align': 'TOP_LEFT',
        'oriPosTitle': {
            'x': 0x0,
            'y': 0x0
        },
        'init': function(_0x42e441, _0x68bc1d, _0x20843a) {
            this['parent'](_0x42e441, _0x68bc1d, _0x20843a);
            this['context'] = ig['system']['context'];
            this['size']['x'] = this['image']['width'];
            this['size']['y'] = this['image']['height'];
            this['zIndex'] = this['manager']['zIndex'] + 0x1;
            this['setAlign']();
            this['spawnContent']();
        },
        'setAlign': function() {
            switch (this['align']) {
                case 'CENTER':
                    this['pos']['x'] -= this['image']['width'] / 0x2;
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'TOP_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    break;
                case 'CENTER_RIGHT':
                    this['pos']['x'] -= this['image']['width'];
                    this['pos']['y'] -= this['image']['height'] / 0x2;
                    break;
                case 'CENTER_LEFT':
                    this['pos']['y'] -= this['image']['height'] / 0x2;
            }
        },
        'spawnContent': function() {
            var _0x5b4d31 = this['pos']['x'] + this['size']['x'] / 0x2,
                _0x21abd1 = this['pos']['y'] + 0x3c;
            this['title'] = ig['game']['spawnEntity'](EntityTitle, _0x5b4d31, _0x21abd1, {
                'manager': this,
                'imageName': 'text-settings',
                'align': 'TOP_MIDDLE',
                'autoShow': !0x1
            });
            _0x21abd1 += this['title']['size']['y'] + 0x19;
            this['sliders']['music'] = ig['game']['spawnEntity'](EntitySettingsSlider, _0x5b4d31, _0x21abd1, {
                'manager': this,
                'iconName': 'music-icon',
                'index': 'music',
                'align': 'center top',
                'pointer': this['manager']['pointer'],
                'value': ig['game']['sessionData']['music'],
                'ignorePause': !0x0,
                'autoShow': !0x1
            });
            _0x21abd1 += this['sliders']['music']['size']['y'] + 0x19;
            console['log']('-->setting sound ' + ig['game']['sessionData']['sound']);
            this['sliders']['sound'] = ig['game']['spawnEntity'](EntitySettingsSlider, _0x5b4d31, _0x21abd1, {
                'manager': this,
                'iconName': 'sound-icon',
                'index': 'sound',
                'align': 'center top',
                'pointer': this['manager']['pointer'],
                'value': ig['game']['sessionData']['sound'],
                'ignorePause': !0x0,
                'autoShow': !0x1
            });
            _0x21abd1 += this['sliders']['sound']['size']['y'] + 0x19;
            this['buttons']['ok'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x5b4d31, _0x21abd1, {
                'manager': this,
                'imageName': 'btn-ok',
                'btnId': 'ok',
                'align': 'TOP_MIDDLE',
                'autoShow': !0x1
            });
        },
        'draw': function() {
            this['visible'] && (this['parent'](), this['context']['save'](), this['context']['scale'](this['scale'], this['scale']), this['context']['drawImage'](this['image']['data'], 0x0, 0x0, this['image']['width'], this['image']['height'], (this['pos']['x'] + 0.5 * this['image']['width'] * (0x1 - this['scale'])) / this['scale'], (this['pos']['y'] + 0.5 * this['image']['height'] * (0x1 - this['scale'])) / this['scale'], this['image']['width'], this['image']['height']), this['context']['restore']());
        },
        'hide': function() {
            this['tween']({
                'scale': 0x0
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                'onComplete': function() {
                    this['visible'] = !0x1;
                }['bind'](this)
            })['start']();
            this['hideContents']();
        },
        'show': function() {
            this['visible'] = !0x0;
            this['tween']({
                'scale': 0x1
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Back']['EaseOut'],
                'onComplete': function() {}['bind'](this)
            })['start']();
            this['showContents']();
        },
        'showContents': function() {
            this['title']['show']();
            this['sliders']['music']['show']();
            this['sliders']['sound']['show']();
            this['buttons']['ok']['show']();
        },
        'hideContents': function() {
            this['title']['hide'](function() {
                this['manager']['onPopupSettingClosed']();
            }['bind'](this));
            this['sliders']['music']['hide']();
            this['sliders']['sound']['hide']();
            this['buttons']['ok']['hide']();
        },
        'getCenter': function() {
            return {
                'x': this['pos']['x'] + this['size']['x'] / 0x2,
                'y': this['pos']['y'] + this['size']['y'] / 0x2
            };
        },
        'onSliderChanged': function(_0x1dd23e, _0x2b4c91) {
            'sound' === _0x1dd23e ? ig['soundHandler']['sfxPlayer']['volume'](_0x2b4c91) : ig['soundHandler']['bgmPlayer']['volume'](_0x2b4c91);
        },
        'onSliderReleased': function(_0xf81cc2, _0x288ee7) {
            'sound' === _0xf81cc2 ? ig['soundHandler']['sfxPlayer']['volume'](_0x288ee7) : ig['soundHandler']['bgmPlayer']['volume'](_0x288ee7);
            ig['game']['save'](_0xf81cc2, Math['round'](0x64 * _0x288ee7) / 0x64);
        },
        'onButtonReleased': function() {
            this['hide']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.home-controller')['requires']('impact.entity', 'game.entities.pointer', 'game.entities.others.title', 'game.entities.buttons.button-hover-clicked', 'game.entities.buttons.button-hover-clicked-div', 'game.entities.ui.popup-settings')['defines'](function() {
    EntityHomeController = ig['Entity']['extend']({
        'background': new ig['Image']('images/bg.png'),
        'logo': null,
        'buttons': {},
        'popups': {},
        'zIndex': 0x2,
        'init': function(_0x3dafb5, _0x2ac82e, _0x152e87) {
            this['parent'](_0x3dafb5, _0x2ac82e, _0x152e87);
            ig['global']['wm'] || (this['context'] = ig['system']['context'], this['pointer'] = ig['game']['spawnEntity'](EntityPointer, ig['input']['mouse']['x'], ig['input']['mouse']['y'], {
                'manager': this
            }), this['spawnContent']());
        },
        'spawnContent': function() {
            var _0x4fc5cb = ig['system']['width'] / 0x2,
                _0x2e3f04;
            this['logo'] = ig['game']['spawnEntity'](EntityTitle, _0x4fc5cb, 0x0, {
                'manager': this,
                'imageName': 'logo'
            });
            _0x4fc5cb = (ig['system']['width'] - this['logo']['size']['x']) / 0x2;
            _0x2e3f04 = (ig['system']['height'] - this['logo']['size']['y']) / 0x2 - 0x46;
            this['logo']['pos']['x'] = _0x4fc5cb;
            this['logo']['pos']['y'] = _0x2e3f04;
            _0x4fc5cb = ig['system']['width'] / 0x2;
            _0x2e3f04 = (ig['system']['height'] + this['logo']['size']['y']) / 0x2 - 0x46 + 0x50;
            this['buttons']['play'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x4fc5cb, _0x2e3f04, {
                'manager': this,
                'imageName': 'btn-play',
                'btnId': 'play',
                'align': 'CENTER'
            });
            _SETTINGS['MoreGames']['Enabled'] ? (_0x4fc5cb = _0x4fc5cb + this['buttons']['play']['size']['x'] / 0x2 + 0x1e, this['buttons']['settings'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x4fc5cb, _0x2e3f04, {
                'manager': this,
                'imageName': 'btn-settings',
                'btnId': 'settings',
                'align': 'CENTER_LEFT'
            }), _0x4fc5cb = ig['system']['width'] / 0x2 - this['buttons']['play']['size']['x'] / 0x2 - 0x1e, this['buttons']['moreGames'] = ig['game']['spawnEntity'](EntityButtonHoverClickedDiv, _0x4fc5cb, _0x2e3f04, {
                'manager': this,
                'imageName': 'btn-moregames',
                'btnId': 'moregames',
                'align': 'CENTER_RIGHT',
                'div_layer_name': 'MoreGames'
            })) : (_0x4fc5cb = ig['system']['width'] - 0x1e, this['buttons']['settings'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, _0x4fc5cb, 0x1e, {
                'manager': this,
                'imageName': 'btn-settings',
                'btnId': 'settings',
                'align': 'TOP_RIGHT'
            }));
            this['buttons']['fullScreen'] = ig['game']['spawnEntity'](EntityButtonHoverClicked, 0x1e, 0x1e, {
                'manager': this,
                'imageName': 'btn-expand',
                'btnId': 'fullscreen',
                'align': 'TOP_LEFT'
            });
            _0x4fc5cb = ig['system']['width'] / 0x2;
            _0x2e3f04 = ig['system']['height'] / 0x2;
            this['popups']['settings'] = ig['game']['spawnEntity'](EntityPopupSettings, _0x4fc5cb, _0x2e3f04, {
                'manager': this,
                'align': 'CENTER'
            });
        },
        'draw': function() {
            this['parent']();
            this['drawBG']();
        },
        'drawBG': function() {
            this['background']['draw'](0x0, 0x0);
        },
        'showContents': function() {
            for (var _0x57ab83 in this['buttons']) this['buttons']['hasOwnProperty'](_0x57ab83) && this['buttons'][_0x57ab83]['show']();
            this['logo']['show']();
        },
        'hideContents': function(_0x859a0a) {
            for (var _0x28c856 in this['buttons']) this['buttons']['hasOwnProperty'](_0x28c856) && this['buttons'][_0x28c856]['hide']();
            this['logo']['hide'](function() {
                _0x859a0a && _0x859a0a();
            }['bind'](this));
        },
        'onButtonReleased': function(_0x47ed66) {
            switch (_0x47ed66) {
                case 'play':
					this['hideContents'](function() {
						gradle.event('btn_play');
                        ig['game']['director']['jumpTo'](LevelGame);
                    }['bind'](this));
                    break;
                case 'fullscreen':
                    this['toggleFullscreen']();
                    break;
                case 'settings':
                    this['hideContents'](function() {
						gradle.event('btn_settings');
                        this['popups']['settings']['show']();
                    }['bind'](this));
            }
        },
        'toggleFullscreen': function() {
            var _0x51f9a9 = 'btn-expand';
            ig['Fullscreen']['isFullscreen']() || (_0x51f9a9 = 'btn-shrink');
            this['buttons']['fullScreen']['setImage'](_0x51f9a9);
            ig['Fullscreen']['toggleFullscreen']();
        },
        'onPopupSettingClosed': function() {
            this['showContents']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.levels.home')['requires']('impact.image', 'game.entities.controllers.home-controller')['defines'](function() {
    LevelHome = {
        'entities': [{
            'type': 'EntityHomeController',
            'x': 0x2c8,
            'y': 0x100
        }],
        'layer': []
    };
});
ig['baked'] = !0x0;
ig['module']('game.main')['requires']('impact.game', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.patches.input-patch', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.user-agent-patch', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.opening-shield', 'game.entities.opening-miffi', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.levels.opening', 'game.levels.test-desktop', 'game.levels.test-mobile', 'game.levels.game', 'game.levels.home')['defines'](function() {
    this['FRAMEBREAKER'];
    MyGame = ig['Game']['extend']({
        'name': 'Gradle Code',
        'version': '2.0.0',
        'frameworkVersion': '2.0.0',
        'sessionData': {},
        'io': null,
        'paused': ![],
        'tweens': null,
        'init': function() {
            this['tweens'] = new ig['TweensHandler']();
            this['io'] = new IoManager();
            this['setupUrlParams'] = new ig['UrlParameters']();
            this['removeLoadingWheel']();
            this['setupStorageManager']();
            this['finalize']();
        },
        'initData': function() {
            return this['sessionData'] = {
                'sound': 0.7,
                'music': 0.3,
                'level': 0x1,
                'score': 0x0,
                'highScore': 0x0
            };
        },
        'setupStorageManager': function() {
            this['parent']();
            ig['soundHandler']['bgmPlayer']['volume'](this['sessionData']['music']);
            ig['soundHandler']['sfxPlayer']['volume'](this['sessionData']['sound']);
        },
        'finalize': function() {
            this['start']();
            ig['sizeHandler']['reorient']();
        },
        'removeLoadingWheel': function() {
            try {
                $('#ajaxbar')['css']('background', 'none');
            } catch (_0x495967) {
                console['log'](_0x495967);
            }
        },
        'showDebugMenu': function() {
            console['log']('showing debug menu ...');
            ig['Entity']['_debugShowBoxes'] = !![];
            $('.ig_debug')['show']();
        },
        'start': function() {
            this['resetPlayerStats']();
			
            this['director'] = new ig['Director'](this, [LevelOpening, LevelHome, LevelGame]);
            
            this['director']['loadLevel'](this['director']['currentLevel']);
            ig['soundHandler']['bgmPlayer']['play'](ig['soundHandler']['bgmPlayer']['soundList']['background']);
        },
        'fpsCount': function() {
            if (!this['fpsTimer']) {
                this['fpsTimer'] = new ig['Timer'](0x1);
            }
            if (this['fpsTimer'] && this['fpsTimer']['delta']() < 0x0) {
                if (this['fpsCounter'] != null) {
                    this['fpsCounter']++;
                } else {
                    this['fpsCounter'] = 0x0;
                }
            } else {
                ig['game']['fps'] = this['fpsCounter'];
                this['fpsCounter'] = 0x0;
                this['fpsTimer']['reset']();
            }
        },
        'endGame': function() {
            console['log']('End game');
            ig['soundHandler']['bgmPlayer']['stop']();
        },
        'resetPlayerStats': function() {
            ig['log']('resetting player stats ...');
            this['playerStats'] = {
                'id': this['playerStats'] ? this['playerStats']['id'] : null
            };
        },
        'pauseGame': function() {
            ig['system']['stopRunLoop']['call'](ig['system']);
            ig['game']['tweens']['onSystemPause']();
            console['log']('Game Paused');
        },
        'resumeGame': function() {
            ig['system']['startRunLoop']['call'](ig['system']);
            ig['game']['tweens']['onSystemResume']();
            console['log']('Game Resumed');
        },
        'showOverlay': function(_0x1ec69a) {
            for (i = 0x0; i < _0x1ec69a['length']; i++) {
                if ($('#' + _0x1ec69a[i])) $('#' + _0x1ec69a[i])['show']();
                if (document['getElementById'](_0x1ec69a[i])) document['getElementById'](_0x1ec69a[i])['style']['visibility'] = 'visible';
            }
        },
        'hideOverlay': function(_0x4548a1) {
            for (i = 0x0; i < _0x4548a1['length']; i++) {
                if ($('#' + _0x4548a1[i])) $('#' + _0x4548a1[i])['hide']();
                if (document['getElementById'](_0x4548a1[i])) document['getElementById'](_0x4548a1[i])['style']['visibility'] = 'hidden';
            }
        },
        'currentBGMVolume': 0x1,
        'addition': 0.1,
        'update': function() {
            if (this['paused']) {
                this['updateWhilePaused']();
                this['checkWhilePaused']();
            } else {
                this['parent']();
                this['tweens']['update'](this['tweens']['now']());
                if (ig['ua']['mobile'] && ig['soundHandler']) {
                    ig['soundHandler']['forceLoopBGM']();
                }
            }
        },
        'updateWhilePaused': function() {
            for (var _0x5e80b1 = 0x0; _0x5e80b1 < this['entities']['length']; _0x5e80b1++) {
                if (this['entities'][_0x5e80b1]['ignorePause']) {
                    this['entities'][_0x5e80b1]['update']();
                }
            }
        },
        'checkWhilePaused': function() {
            var _0x2c955e = {};
            for (var _0x3c3cf8 = 0x0; _0x3c3cf8 < this['entities']['length']; _0x3c3cf8++) {
                var _0x35059f = this['entities'][_0x3c3cf8];
                if (_0x35059f['ignorePause']) {
                    if (_0x35059f['type'] == ig['Entity']['TYPE']['NONE'] && _0x35059f['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x35059f['collides'] == ig['Entity']['COLLIDES']['NEVER']) {
                        continue;
                    }
                    var _0x417eb6 = {},
                        _0x3f3a7f = Math['floor'](_0x35059f['pos']['x'] / this['cellSize']),
                        _0x23f025 = Math['floor'](_0x35059f['pos']['y'] / this['cellSize']),
                        _0x562320 = Math['floor']((_0x35059f['pos']['x'] + _0x35059f['size']['x']) / this['cellSize']) + 0x1,
                        _0x95f9fc = Math['floor']((_0x35059f['pos']['y'] + _0x35059f['size']['y']) / this['cellSize']) + 0x1;
                    for (var _0x156fea = _0x3f3a7f; _0x156fea < _0x562320; _0x156fea++) {
                        for (var _0x48d67b = _0x23f025; _0x48d67b < _0x95f9fc; _0x48d67b++) {
                            if (!_0x2c955e[_0x156fea]) {
                                _0x2c955e[_0x156fea] = {};
                                _0x2c955e[_0x156fea][_0x48d67b] = [_0x35059f];
                            } else if (!_0x2c955e[_0x156fea][_0x48d67b]) {
                                _0x2c955e[_0x156fea][_0x48d67b] = [_0x35059f];
                            } else {
                                var _0x43c781 = _0x2c955e[_0x156fea][_0x48d67b];
                                for (var _0x39f835 = 0x0; _0x39f835 < _0x43c781['length']; _0x39f835++) {
                                    if (_0x35059f['touches'](_0x43c781[_0x39f835]) && !_0x417eb6[_0x43c781[_0x39f835]['id']]) {
                                        _0x417eb6[_0x43c781[_0x39f835]['id']] = !![];
                                        ig['Entity']['checkPair'](_0x35059f, _0x43c781[_0x39f835]);
                                    }
                                }
                                _0x43c781['push'](_0x35059f);
                            }
                        }
                    }
                }
            }
        },
        'draw': function() {
            this['parent']();
            this['dctf']();
        },
        'dctf': function() {
            this['COPYRIGHT'];
        },
        'clearCanvas': function(_0x558b6b, _0x3939b3, _0x48f6a0) {
            var _0x5a5494 = _0x558b6b['canvas'];
            _0x558b6b['clearRect'](0x0, 0x0, _0x3939b3, _0x48f6a0);
            _0x5a5494['style']['display'] = 'none';
            _0x5a5494['offsetHeight'];
            _0x5a5494['style']['display'] = 'inherit';
        },
        'drawDebug': function() {
            if (!ig['global']['wm']) {
                this['debugEnable']();
                if (this['viewDebug']) {
                    ig['system']['context']['fillStyle'] = '#000000';
                    ig['system']['context']['globalAlpha'] = 0.35;
                    ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'] / 0x4, ig['system']['height']);
                    ig['system']['context']['globalAlpha'] = 0x1;
                    if (this['debug'] && this['debug']['length'] > 0x0) {
                        for (i = 0x0; i < this['debug']['length']; i++) {
                            ig['system']['context']['font'] = '10px Arial';
                            ig['system']['context']['fillStyle'] = '#ffffff';
                            ig['system']['context']['fillText'](this['debugLine'] - this['debug']['length'] + i + ': ' + this['debug'][i], 0xa, 0x32 + 0xa * i);
                        }
                    }
                }
            }
        },
        'debugCL': function(_0x42a754) {
            if (!this['debug']) {
                this['debug'] = [];
                this['debugLine'] = 0x1;
                this['debug']['push'](_0x42a754);
            } else {
                if (this['debug']['length'] < 0x32) {
                    this['debug']['push'](_0x42a754);
                } else {
                    this['debug']['splice'](0x0, 0x1);
                    this['debug']['push'](_0x42a754);
                }
                this['debugLine']++;
            }
            console['log'](_0x42a754);
        },
        'debugEnable': function() {
            if (ig['input']['pressed']('click')) {
                this['debugEnableTimer'] = new ig['Timer'](0x2);
            }
            if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() < 0x0) {
                if (ig['input']['released']('click')) {
                    this['debugEnableTimer'] = null;
                }
            } else if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() > 0x0) {
                this['debugEnableTimer'] = null;
                if (this['viewDebug']) {
                    this['viewDebug'] = ![];
                } else {
                    this['viewDebug'] = !![];
                }
            }
        },
        'playSfx': function(_0x52b910) {
            ig['soundHandler']['sfxPlayer']['play'](_0x52b910);
        },
        'stopSfx': function(_0x5896ff) {
            ig['soundHandler']['sfxPlayer']['stop'](_0x5896ff);
        }
    });
    window['gameStart'] = function() {
        ig['domHandler'] = null;
        ig['domHandler'] = new ig['DomHandler']();
        ig['domHandler']['forcedDeviceDetection']();
        ig['domHandler']['forcedDeviceRotation']();
        ig['sizeHandler'] = new ig['SizeHandler'](ig['domHandler']);
        if (ig['ua']['mobile']) {
            ig['Sound']['enabled'] = true;
            ig['main']('#canvas', MyGame, 30, ig['sizeHandler']['mobile']['actualResolution']['x'], ig['sizeHandler']['mobile']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']);
            ig['sizeHandler']['resize']();
        } else {
            ig['main']('#canvas', MyGame, 30, ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']);
        }
        ig['visibilityHandler'] = new ig['VisibilityHandler']();
        ig['soundHandler'] = null;
        ig['soundHandler'] = new ig['SoundHandler']();
        ig['sizeHandler']['reorient']();
    };
    gameStart();
});
var Utility = {
    'correctFloat': function(_0x324e0c) {
        return parseInt(0x64 * _0x324e0c) / 0x64;
    }
};