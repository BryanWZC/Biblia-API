// References for bible version, books and number of chapters per book

const versionDict = {
    NIV: '111',
    ESV: '59',
    KJV: '1',
    AMP: '1588',
    ASV: '12',
    NKJV: '114',
    NLT: '116',
    CSBS: '43',
    CSBT: '312',
    RCUV: '140',
    AB: '2040',
    KRV: '88',
    FRDBY: '64',
    TLAB: '177',
    DHH941: '52',
    DB1885: '54',

};

const versionLongDict = {
    NIV: 'New International Version',
    ESV: 'English Standard Version',
    KJV: 'King James Version',
    AMP: 'Amplified Bible',
    ASV: 'American Standard Version',
    NKJV: 'New King James Version',
    NLT: 'New Living Translation',
    CSBS: 'Chinese Standard Bible',
    CSBT: 'Chinese Standard Bible Traditional',
    RCUV: 'Revised Chinese Union Version',
    AB: 'ALIVE',
    KRV: 'Korean Revised Version',
    FRDBY: 'Bible Darby en français',
    TLAB: 'Ang Biblia',
    DHH941:'Biblia Dios Habla Hoy',
    DB1885: 'Diodati Bibbia 1885',

}

const books = ['GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL', 'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TH', '2TH', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'];

const bookNames = [
    'Genesis',         'Exodus',        'Leviticus',     'Numbers',
    'Deuteronomy',     'Joshua',        'Judges',        'Ruth',
    '1 Samuel',        '2 Samuel',      '1 Kings',       '2 Kings',
    '1 Chronicles',    '2 Chronicles',  'Ezra',          'Nehemiah',
    'Esther',          'Job',           'Psalms',        'Proverbs',
    'Ecclesiastes',    'Song of Songs', 'Isaiah',        'Jeremiah',
    'Lamentations',    'Ezekiel',       'Daniel',        'Hosea',
    'Joel',            'Amos',          'Obadiah',       'Jonah',
    'Micah',           'Nahum',         'Habakkuk',      'Zephaniah',
    'Haggai',          'Zechariah',     'Malachi',       'Matthew',
    'Mark',            'Luke',          'John',          'Acts',
    'Romans',          '1 Corinthians', '2 Corinthians', 'Galatians',
    'Ephesians',       'Philippians',   'Colossians',    '1 Thessalonians',
    '2 Thessalonians', '1 Timothy',     '2 Timothy',     'Titus',
    'Philemon',        'Hebrews',       'James',         '1 Peter',
    '2 Peter',         '1 John',        '2 John',        '3 John',
    'Jude',            'Revelation'
];

const booksChapters = [
    50, 40, 27, 36, 34, 24,  21,  4, 31, 24, 22, 25,
    29, 36, 10, 13, 10, 42, 150, 31, 12,  8, 66, 52,
    5, 48, 12, 14,  3,  9,   1,  4,  7,  3,  3,  3,
    2, 14,  4, 28, 16, 24,  21, 28, 16, 16, 13,  6,
    6,  4,  4,  5,  3,  6,   4,  3,  1, 13,  5,  5,
    3,  5,  1,  1,  1, 22
    ];

    module.exports = {
        versionDict,
        bookNames,
        books,
        booksChapters
    }