// References for bible version, books and number of chapters per book

const versionDict = {
    NIV: '111',
};
const books = ['GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL', 'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TH', '2TH', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'];

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
        books,
        booksChapters
    }