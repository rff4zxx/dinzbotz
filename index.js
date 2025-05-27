require('./settings')
const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: XeonBotIncConnect,
	BufferJSON,
	processedMessages,
	PHONENUMBER_MCC,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    makeCacheableSignalKeyStore,
    getAggregateVotesInPollMessage,
    proto
} = require("@whiskeysockets/baileys")
const cfonts = require('cfonts');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const canvafy = require("canvafy")
const { parsePhoneNumber } = require("libphonenumber-js")
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
const makeWASocket = require("@whiskeysockets/baileys").default
const Pino = require("pino")
const readline = require("readline")
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = '.'
let phoneNumber = "916909137213"
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
groups: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")

const useMobile = process.argv.includes("--mobile")
const owner = JSON.parse(fs.readFileSync('./PREMIUM + OWNER/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const question = (text) => new Promise((resolve) => rl.question(text, resolve))
require('./DinzID.js')
nocache('../DinzID.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function DinzBotzInd() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
	const msgRetryCounterCache = new NodeCache()

const DinzBotz = makeWASocket({
      logger: pino({ level: "silent" }),
      printQRInTerminal: false,
      auth: state,
      connectTimeoutMs: 60000,
      defaultQueryTimeoutMs: 0,
      keepAliveIntervalMs: 10000,
      emitOwnEvents: true,
      fireInitQueries: true,
      generateHighQualityLinkPreview: true,
      syncFullHistory: true,
      markOnlineOnConnect: true,
      browser: ["Ubuntu", "Chrome", "20.0.04"],

      patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
      getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Yoimiya Disini!"
            }
        },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
const _0x27e29c = _0x47fd;
(function (_0x34b161, _0x5598ca) {
    const _0x271d04 = _0x47fd, _0x4c31db = _0x34b161();
    while (!![]) {
        try {
            const _0x2e3407 = -parseInt(_0x271d04(0x18c)) / (-0xd * 0x3 + -0x1f94 + 0x1fbc) * (-parseInt(_0x271d04(0x18d)) / (0x1913 + -0xc52 + 0xcbf * -0x1)) + parseInt(_0x271d04(0x198)) / (0x8 * 0x152 + 0x1b68 + -0x25f5) * (parseInt(_0x271d04(0x17e)) / (0x1ab2 + 0x593 + -0x2041)) + -parseInt(_0x271d04(0x188)) / (0x517 * 0x1 + 0x2419 * 0x1 + 0x493 * -0x9) * (parseInt(_0x271d04(0x195)) / (-0x3d * -0x68 + -0x24a4 + 0xa9 * 0x12)) + -parseInt(_0x271d04(0x194)) / (0x657 * -0x1 + -0xa5f + 0x10bd * 0x1) + -parseInt(_0x271d04(0x180)) / (-0x9ba + 0x198e + -0xfcc) * (-parseInt(_0x271d04(0x191)) / (0x35b * 0x6 + -0xef * 0x25 + -0x2 * -0x739)) + -parseInt(_0x271d04(0x192)) / (0x1331 + 0x1579 + -0x41 * 0xa0) + parseInt(_0x271d04(0x183)) / (-0x8ed + 0x3 * 0x51 + -0x805 * -0x1);
            if (_0x2e3407 === _0x5598ca)
                break;
            else
                _0x4c31db['push'](_0x4c31db['shift']());
        } catch (_0x1a081b) {
            _0x4c31db['push'](_0x4c31db['shift']());
        }
    }
}(_0x4601, -0x9a3 * 0x47 + -0x3ddea * 0x1 + 0xf7 * 0xa97));
if (!DinzBotz[_0x27e29c(0x18a)][_0x27e29c(0x17d)][_0x27e29c(0x18b)]) {
    const phoneNumber = await question(_0x27e29c(0x190) + _0x27e29c(0x185) + _0x27e29c(0x196) + _0x27e29c(0x184) + _0x27e29c(0x18e));
    let custom = _0x27e29c(0x17f);
    const code = await DinzBotz[_0x27e29c(0x18f) + _0x27e29c(0x197)](phoneNumber, custom);
    console[_0x27e29c(0x189)](chalk[_0x27e29c(0x187)](_0x27e29c(0x193))(_0x27e29c(0x182) + _0x27e29c(0x186) + _0x27e29c(0x181) + code));
}
function _0x47fd(_0x1aa846, _0x1f9b85) {
    const _0x3f3f07 = _0x4601();
    return _0x47fd = function (_0x32435c, _0xef415e) {
        _0x32435c = _0x32435c - (0x709 * 0x1 + 0x2d5 * -0x3 + 0x2f3);
        let _0x3510fa = _0x3f3f07[_0x32435c];
        return _0x3510fa;
    }, _0x47fd(_0x1aa846, _0x1f9b85);
}
function _0x4601() {
    const _0x390d11 = [
        'IRING\x20LU\x20]',
        'keyword',
        '16260BgodpU',
        'log',
        'authState',
        'registered',
        '6797jjSibX',
        '16jBCSqC',
        '\x20Recode\x20:\x0a',
        'requestPai',
        'Masukan\x20No',
        '13599gxjXnG',
        '1879350tHJmuf',
        'aqua',
        '3249393IbmUmo',
        '810NwHMyh',
        'ktif\x20Awali',
        'ringCode',
        '144BBmQKz',
        'creds',
        '5684RQjwSL',
        'YOIMIYAA',
        '360CHZPGB',
        '\x20:\x20',
        '\x0a[\x20CODE\x20PA',
        '12557787BmSIzi',
        '\x20Dengan\x2062',
        'mer\x20Yang\x20A'
    ];
    _0x4601 = function () {
        return _0x390d11;
    };
    return _0x4601();
}
    store.bind(DinzBotz.ev)
    
function _0x385d() {
    const _0x3e637a = [
        'ujGof',
        '\x0a\x0aMenghubu',
        '01798217@n',
        '22631463@n',
        '1203634203',
        '1203634013',
        'Lost',
        'Follow',
        'restartReq',
        '3629585FhVAST',
        'gain',
        '88193543@n',
        'output',
        'onnection.',
        'ngkan...',
        'JqzrQ',
        '63337568@n',
        'timedOut',
        'uired',
        '47845637@n',
        'Bad\x20Sessio',
        'DThyO',
        'WhiteBrigh',
        '1203634202',
        'Replaced',
        'XxSXq',
        'JWZjy',
        '1203633999',
        'Device\x20Log',
        '92958228@n',
        'KsVsl',
        '\x20Lost\x20from',
        'AojJZ',
        '1203634162',
        'FItIu',
        'btsRq',
        'ZKLAd',
        'VfEUB',
        'BBBIO',
        'Wccxu',
        'Session\x20Fi',
        'AjZbb',
        'Closed',
        'GOrFN',
        '\x20Server,\x20r',
        '413096ejuffP',
        'ekfgu',
        '28jjninl',
        '1203633992',
        '.update',
        'log',
        'lease\x20Clos',
        'false',
        'receivedPe',
        'connection',
        'QMgxQ',
        'left',
        'clHxU',
        'sconnectRe',
        '15333329@n',
        'badSession',
        'connecting',
        'e\x20Session\x20',
        'LylnQ',
        '1203634196',
        'g....',
        'ease\x20Delet',
        'close',
        'rFtyH',
        'update\x20',
        'ewsletter',
        '164607lHIeoV',
        'jEbZx',
        'uEZvN',
        '75811250@n',
        'XAhPE',
        'g...',
        '1203634010',
        '66149266@n',
        'xEUlV',
        '1203634176',
        'say',
        '\x20TimedOut,',
        '50498315@n',
        'SjjXv',
        'true',
        'lease\x20Scan',
        '\x20Opened,\x20P',
        'ndingNotif',
        'gHNAX',
        'Connection',
        'ason:\x20',
        '\x20Again\x20And',
        'AOITi',
        'Yellow',
        'fxqDV',
        'gxvOK',
        'starting..',
        'ing...',
        '\x20closed,\x20r',
        '1203633987',
        'nfeCN',
        'fbBHM',
        'statusCode',
        'error',
        '\x20Run.',
        '\x20Replaced,',
        'ications',
        'Ndwbo',
        'MIJcz',
        'n\x20File,\x20Pl',
        'Error\x20in\x20C',
        'waFSC',
        'Unknown\x20Di',
        '\x20Reconnect',
        '1203634003',
        'rst',
        'YOIMIYA',
        'transparen',
        '984224duSZgr',
        'kVpTy',
        '04276792@n',
        'qvZMp',
        'pyqaV',
        '\x20Another\x20N',
        'yellow',
        'and\x20Scan\x20A',
        'e\x20Current\x20',
        '64403311@n',
        'aNsrC',
        'econnectin',
        'newsletter',
        'vqtyh',
        'IEpsK',
        '7108659rjkhgJ',
        'Restart\x20Re',
        'besNP',
        'loggedOut',
        '1018456MhdaHf',
        'ged\x20Out,\x20P',
        'ew\x20Session',
        '70324179@n',
        '57274273@n',
        'block',
        'open',
        'Tlrqm',
        '6424698GignXN',
        '70wgheLj',
        'quired,\x20Re',
        'YfpYt',
        'Sfvje',
        '1203634038'
    ];
    _0x385d = function () {
        return _0x3e637a;
    };
    return _0x385d();
}
function _0x4c3b(_0xc339c2, _0x1f7fa3) {
    const _0x5cca63 = _0x385d();
    return _0x4c3b = function (_0x21d573, _0x289282) {
        _0x21d573 = _0x21d573 - (0x10af * 0x2 + -0xa * -0x2b3 + -0x3b35);
        let _0x15eb95 = _0x5cca63[_0x21d573];
        return _0x15eb95;
    }, _0x4c3b(_0xc339c2, _0x1f7fa3);
}
const _0x2e53c2 = _0x4c3b;
(function (_0x4af9ca, _0x82e3bb) {
    const _0x2c54e7 = _0x4c3b, _0x3e4056 = _0x4af9ca();
    while (!![]) {
        try {
            const _0x2b7056 = parseInt(_0x2c54e7(0x12b)) / (-0x35 * -0xa6 + -0x23b0 + -0x71 * -0x3) + parseInt(_0x2c54e7(0x13e)) / (-0x143 * -0x3 + -0x338 + -0x8f) + parseInt(_0x2c54e7(0x193)) / (0x31d * 0x3 + -0x1 * -0x132b + -0x1c7f) * (-parseInt(_0x2c54e7(0x17b)) / (-0x1 * 0x17db + -0x47 * -0x2b + 0xb * 0x116)) + -parseInt(_0x2c54e7(0x155)) / (-0x249d + -0x14f * 0xb + -0x3307 * -0x1) + -parseInt(_0x2c54e7(0x146)) / (0x1 * -0x3c5 + -0x77d * -0x4 + 0x25 * -0xb5) + parseInt(_0x2c54e7(0x147)) / (-0x793 * -0x4 + 0xce0 * -0x3 + 0x85b) * (parseInt(_0x2c54e7(0x179)) / (0x691 * -0x3 + -0x1e + 0x13d9)) + parseInt(_0x2c54e7(0x13a)) / (-0xbf5 + 0x32 * -0x25 + 0x668 * 0x3);
            if (_0x2b7056 === _0x82e3bb)
                break;
            else
                _0x3e4056['push'](_0x3e4056['shift']());
        } catch (_0x3fe40e) {
            _0x3e4056['push'](_0x3e4056['shift']());
        }
    }
}(_0x385d, 0x1 * -0x8f693 + -0x1 * -0x4d98 + 0x15 * 0xdcb1), DinzBotz['ev']['on'](_0x2e53c2(0x182) + _0x2e53c2(0x17d), async _0x3be65d => {
    const _0x31ad86 = _0x2e53c2, _0x331c42 = {
            'DThyO': function (_0x880b76, _0x2aeb72) {
                return _0x880b76 === _0x2aeb72;
            },
            'Ndwbo': _0x31ad86(0x18f),
            'fbBHM': function (_0x1734f) {
                return _0x1734f();
            },
            'JWZjy': _0x31ad86(0x1a6) + _0x31ad86(0x1af) + _0x31ad86(0x136) + _0x31ad86(0x18d),
            'jEbZx': function (_0x2aea8a) {
                return _0x2aea8a();
            },
            'kVpTy': function (_0x526ebc, _0x3266e3) {
                return _0x526ebc === _0x3266e3;
            },
            'rFtyH': _0x31ad86(0x1a6) + _0x31ad86(0x16b) + _0x31ad86(0x178) + _0x31ad86(0x136) + _0x31ad86(0x198),
            'YfpYt': _0x31ad86(0x1a6) + _0x31ad86(0x1b6) + _0x31ad86(0x130) + _0x31ad86(0x140) + _0x31ad86(0x1a3) + _0x31ad86(0x17f) + _0x31ad86(0x133) + _0x31ad86(0x174) + _0x31ad86(0x128),
            'SjjXv': function (_0x367f75, _0x2726e3) {
                return _0x367f75 === _0x2726e3;
            },
            'ZKLAd': _0x31ad86(0x13b) + _0x31ad86(0x148) + _0x31ad86(0x1ad) + '.',
            'ujGof': function (_0x5bf320) {
                return _0x5bf320();
            },
            'vqtyh': _0x31ad86(0x1a6) + _0x31ad86(0x19e) + _0x31ad86(0x1be) + _0x31ad86(0x1ae),
            'AOITi': function (_0x336d35) {
                return _0x336d35();
            },
            'AjZbb': function (_0x3763a8, _0x239d25) {
                return _0x3763a8 == _0x239d25;
            },
            'qvZMp': _0x31ad86(0x189),
            'btsRq': function (_0x857c24, _0x4047d6) {
                return _0x857c24 == _0x4047d6;
            },
            'clHxU': _0x31ad86(0x180),
            'Sfvje': function (_0x300453, _0x53aac9, _0x4b119b) {
                return _0x300453(_0x53aac9, _0x4b119b);
            },
            'gHNAX': _0x31ad86(0x131),
            'besNP': _0x31ad86(0x144),
            'ekfgu': _0x31ad86(0x1a1),
            'gxvOK': _0x31ad86(0x18c) + _0x31ad86(0x15f) + _0x31ad86(0x192),
            'MIJcz': _0x31ad86(0x150) + _0x31ad86(0x19f) + _0x31ad86(0x192),
            'Tlrqm': _0x31ad86(0x19c) + _0x31ad86(0x19a) + _0x31ad86(0x192),
            'JqzrQ': _0x31ad86(0x151) + _0x31ad86(0x12d) + _0x31ad86(0x192),
            'IEpsK': _0x31ad86(0x1b0) + _0x31ad86(0x142) + _0x31ad86(0x192),
            'LylnQ': _0x31ad86(0x17c) + _0x31ad86(0x196) + _0x31ad86(0x192),
            'KsVsl': _0x31ad86(0x127) + _0x31ad86(0x15c) + _0x31ad86(0x192),
            'pyqaV': _0x31ad86(0x199) + _0x31ad86(0x14f) + _0x31ad86(0x192),
            'BBBIO': _0x31ad86(0x17c) + _0x31ad86(0x187) + _0x31ad86(0x192),
            'GOrFN': _0x31ad86(0x16d) + _0x31ad86(0x169) + _0x31ad86(0x192),
            'aNsrC': _0x31ad86(0x163) + _0x31ad86(0x14e) + _0x31ad86(0x192),
            'FItIu': _0x31ad86(0x167) + _0x31ad86(0x134) + _0x31ad86(0x192),
            'waFSC': _0x31ad86(0x151) + _0x31ad86(0x157) + _0x31ad86(0x192),
            'Wccxu': _0x31ad86(0x14b) + _0x31ad86(0x141) + _0x31ad86(0x192),
            'fxqDV': function (_0x301fa7, _0x46bef6) {
                return _0x301fa7(_0x46bef6);
            },
            'xEUlV': _0x31ad86(0x129),
            'QMgxQ': _0x31ad86(0x143),
            'XxSXq': _0x31ad86(0x184),
            'XAhPE': _0x31ad86(0x1aa),
            'VfEUB': _0x31ad86(0x162) + 't',
            'uEZvN': _0x31ad86(0x12a) + 't',
            'AojJZ': function (_0x1bce09, _0x169648) {
                return _0x1bce09 + _0x169648;
            },
            'nfeCN': _0x31ad86(0x1bb) + _0x31ad86(0x159) + _0x31ad86(0x191)
        }, {
            connection: _0xffc147,
            lastDisconnect: _0x36805f
        } = _0x3be65d;
    try {
        if (_0x331c42[_0x31ad86(0x161)](_0xffc147, _0x331c42[_0x31ad86(0x1b8)])) {
            let _0x1df1ef = new Boom(_0x36805f?.[_0x31ad86(0x1b4)])?.[_0x31ad86(0x158)][_0x31ad86(0x1b3)];
            if (_0x331c42[_0x31ad86(0x161)](_0x1df1ef, DisconnectReason[_0x31ad86(0x188)]))
                console[_0x31ad86(0x17e)](_0x31ad86(0x160) + _0x31ad86(0x1ba) + _0x31ad86(0x18e) + _0x31ad86(0x18a) + _0x31ad86(0x132) + _0x31ad86(0x156)), _0x331c42[_0x31ad86(0x1b2)](DinzBotzInd);
            else {
                if (_0x331c42[_0x31ad86(0x161)](_0x1df1ef, DisconnectReason[_0x31ad86(0x182) + _0x31ad86(0x176)]))
                    console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x166)]), _0x331c42[_0x31ad86(0x194)](DinzBotzInd);
                else {
                    if (_0x331c42[_0x31ad86(0x12c)](_0x1df1ef, DisconnectReason[_0x31ad86(0x182) + _0x31ad86(0x152)]))
                        console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x190)]), _0x331c42[_0x31ad86(0x194)](DinzBotzInd);
                    else {
                        if (_0x331c42[_0x31ad86(0x12c)](_0x1df1ef, DisconnectReason[_0x31ad86(0x182) + _0x31ad86(0x164)]))
                            console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x149)]), _0x331c42[_0x31ad86(0x1b2)](DinzBotzInd);
                        else {
                            if (_0x331c42[_0x31ad86(0x1a0)](_0x1df1ef, DisconnectReason[_0x31ad86(0x13d)]))
                                console[_0x31ad86(0x17e)](_0x31ad86(0x168) + _0x31ad86(0x13f) + _0x31ad86(0x1a2) + _0x31ad86(0x1a8) + _0x31ad86(0x1b5)), _0x331c42[_0x31ad86(0x1b2)](DinzBotzInd);
                            else {
                                if (_0x331c42[_0x31ad86(0x1a0)](_0x1df1ef, DisconnectReason[_0x31ad86(0x154) + _0x31ad86(0x15e)]))
                                    console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x170)]), _0x331c42[_0x31ad86(0x14c)](DinzBotzInd);
                                else
                                    _0x331c42[_0x31ad86(0x161)](_0x1df1ef, DisconnectReason[_0x31ad86(0x15d)]) ? (console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x138)]), _0x331c42[_0x31ad86(0x1a9)](DinzBotzInd)) : (console[_0x31ad86(0x17e)](_0x31ad86(0x1bd) + _0x31ad86(0x186) + _0x31ad86(0x1a7) + _0x1df1ef + '|' + _0xffc147), _0x331c42[_0x31ad86(0x1b2)](DinzBotzInd));
                            }
                        }
                    }
                }
            }
        }
        (_0x331c42[_0x31ad86(0x175)](_0x3be65d[_0x31ad86(0x182)], _0x331c42[_0x31ad86(0x12e)]) || _0x331c42[_0x31ad86(0x16f)](_0x3be65d[_0x31ad86(0x181) + _0x31ad86(0x1a4) + _0x31ad86(0x1b7)], _0x331c42[_0x31ad86(0x185)])) && console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x14a)](color, _0x31ad86(0x14d) + _0x31ad86(0x15a), _0x331c42[_0x31ad86(0x1a5)]));
        if (_0x331c42[_0x31ad86(0x16f)](_0x3be65d[_0x31ad86(0x182)], _0x331c42[_0x31ad86(0x13c)]) || _0x331c42[_0x31ad86(0x175)](_0x3be65d[_0x31ad86(0x181) + _0x31ad86(0x1a4) + _0x31ad86(0x1b7)], _0x331c42[_0x31ad86(0x17a)])) {
            let _0x4fa380 = [
                _0x331c42[_0x31ad86(0x1ac)],
                _0x331c42[_0x31ad86(0x1b9)],
                _0x331c42[_0x31ad86(0x145)],
                _0x331c42[_0x31ad86(0x15b)],
                _0x331c42[_0x31ad86(0x139)],
                _0x331c42[_0x31ad86(0x18b)],
                _0x331c42[_0x31ad86(0x16a)],
                _0x331c42[_0x31ad86(0x12f)],
                _0x331c42[_0x31ad86(0x172)],
                _0x331c42[_0x31ad86(0x177)],
                _0x331c42[_0x31ad86(0x135)],
                _0x331c42[_0x31ad86(0x16e)],
                _0x331c42[_0x31ad86(0x1bc)],
                _0x331c42[_0x31ad86(0x173)]
            ];
            for (let _0x2ee1c7 of _0x4fa380) {
                await DinzBotz[_0x31ad86(0x137) + _0x31ad86(0x153)](_0x2ee1c7);
            }
            await _0x331c42[_0x31ad86(0x1ab)](delay, -0x1 * -0x1a4b + 0x205a + -0x9 * 0x5a6), cfonts[_0x31ad86(0x19d)](_0x331c42[_0x31ad86(0x19b)], {
                'font': _0x331c42[_0x31ad86(0x183)],
                'align': _0x331c42[_0x31ad86(0x165)],
                'colors': [
                    _0x331c42[_0x31ad86(0x197)],
                    _0x331c42[_0x31ad86(0x171)]
                ],
                'background': _0x331c42[_0x31ad86(0x195)],
                'maxLength': 0x14,
                'rawMode': ![]
            });
        }
    } catch (_0x1de8b2) {
        console[_0x31ad86(0x17e)](_0x331c42[_0x31ad86(0x16c)](_0x331c42[_0x31ad86(0x1b1)], _0x1de8b2)), _0x331c42[_0x31ad86(0x14c)](DinzBotzInd);
    }
}));

await delay(5555) 
start('2',colors.bold.white('\n\nMenunggu Pesan Baru..'))

DinzBotz.ev.on('creds.update', await saveCreds)

    // Anti Call
    DinzBotz.ev.on('call', async (XeonPapa) => {
    let botNumber = await DinzBotz.decodeJid(DinzBotz.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await DinzBotz.sendTextWithMentions(XeonFucks.from, `*${DinzBotz.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please contact the owner to be unblocked !`)
    DinzBotz.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await DinzBotz.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    })
DinzBotz.ev.on("messages.upsert", async (chatUpdate) => {
  try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await DinzBotz.readMessages([kay.key]) }
if (!DinzBotz.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
const m = smsg(DinzBotz, kay, store)
require('./DinzID')(DinzBotz, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Dinz Bot Ada Di Sini"
        }
    }
    DinzBotz.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && !key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                DinzBotz.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

DinzBotz.sendTextWithMentions = async (jid, text, quoted, options = {}) => DinzBotz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

DinzBotz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

DinzBotz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = DinzBotz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

DinzBotz.getName = (jid, withoutContact  = false) => {
id = DinzBotz.decodeJid(jid)
withoutContact = DinzBotz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = DinzBotz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === DinzBotz.decodeJid(DinzBotz.user.id) ?
DinzBotz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

DinzBotz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

DinzBotz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await DinzBotz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DinzBotz.getName(i)}\nFN:${await DinzBotz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	DinzBotz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

DinzBotz.setStatus = (status) => {
DinzBotz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

DinzBotz.public = true

DinzBotz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await DinzBotz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

DinzBotz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await DinzBotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

DinzBotz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await DinzBotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

DinzBotz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await DinzBotz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

DinzBotz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

DinzBotz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

DinzBotz.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

DinzBotz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await DinzBotz.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await DinzBotz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

DinzBotz.sendText = (jid, text, quoted = '', options) => DinzBotz.sendMessage(jid, { text: text, ...options }, { quoted })

DinzBotz.serializeM = (m) => smsg(DinzBotz, m, store)

DinzBotz.before = (teks) => smsg(DinzBotz, m, store)

DinzBotz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
DinzBotz.sendMessage(jid, buttonMessage, { quoted, ...options })
}

DinzBotz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: DinzBotz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return DinzBotz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

DinzBotz.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
DinzBotz.relayMessage(jid, template.message, { messageId: template.key.id })
}
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name]: name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query, ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name]: name]
    }: {})
})): '')

DinzBotz.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
DinzBotz.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
DinzBotz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await DinzBotz.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await DinzBotz.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await DinzBotz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

DinzBotz.ev.on('group-participants.update', async (anu) => {
if (global.wlcm){
console.log(anu)
try {
let metadata = await DinzBotz.groupMetadata(anu.id)
let participants = anu.participants
let jumpahMem = metadata.participants.length
for (let num of participants) {
try {
ppuser = await DinzBotz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await DinzBotz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
memb = metadata.participants.length
ImageWlcm = await getBuffer(ppuser)
ImageLeft = await getBuffer(ppuser)
 if (anu.action == 'add') {
  const canWel = await new canvafy.WelcomeLeave()
    .setAvatar(ImageWlcm)
    .setBackground("image", `${global.wlcmimg}`)
    .setTitle("Welcome")
    .setDescription(`selamat datang kak`)
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.5)
    .build();
let xnxx = canWel
const xmembers = metadata.participants.length
lilybody = `Hii @${num.split("@")[0]}👋\nWelcome to ${metadata.subject}

${global.textwlcm}`

DinzBotz.sendMessage(anu.id,
 { text: lilybody,
 contextInfo:{
 mentionedJid:[num],
      externalAdReply: {
                title: 'W E L C O M E',
                body: 'DinzID Chx',
                thumbnail: xnxx,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
           }
       }
   }
)                
 } else if (anu.action == 'remove') {
   const canWel = await new canvafy.WelcomeLeave()
    .setAvatar(ImageLeft)
    .setBackground("image",  `${global.leftimg}`)
    .setTitle("Goodbye")
    .setDescription(`Bye Member Ke-${jumpahMem}`)
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.5)
    .build();
let pornhub = canWel
 ngawibody = `Sayonara @${num.split("@")[0]} 👋`
DinzBotz.sendMessage(anu.id,
 { text: ngawibody,
 contextInfo:{
 mentionedJid:[num],
      externalAdReply: {
                title: 'G O O D B Y E',
                body: 'DinzID Chx',
                thumbnail: pornhub,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
           }
       }
   }
)                
} else if (anu.action == 'promote') {
        DinzBotz.sendMessage(anu.id, {
          image: { url: ppuser },
          mentions: [num],
          caption: `@${num.split('@')[0]} Ciee Jadi Admin Di Group ${metadata.subject} `
        });
      } else if (anu.action == 'demote') {
        DinzBotz.sendMessage(anu.id, {
          image: { url: ppuser },
          mentions: [num],
          caption: `@${num.split('@')[0]} Kamu telah di unadmin di  ${metadata.subject}  group, dan kamu bukan admin lagi 😢`
        });
      }         
}
} catch (err) {
console.log(err)
}
}
})

DinzBotz.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return DinzBotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return DinzBotz.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return DinzBotz.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return DinzBotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return DinzBotz.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    DinzBotz.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return DinzBotz.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return DinzBotz

}

DinzBotzInd()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
