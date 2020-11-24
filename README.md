# Biblia API and PDF converter

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://biblia.bryanwong.tech)
&nbsp;

A bible API that returns search results of verses in JSON format based on search parameters given. Also, the results can be extracted onto a PDF, to be downloaded and saved.

## Example
[https://biblia-api-pdf.herokuapp.com/api?method=bible&version=NIV&book=GEN&cStart=1&cEnd=1&vStart=1&vEnd=1 ](https://biblia-api-pdf.herokuapp.com/api?method=bible&version=NIV&book=GEN&cStart=1&cEnd=1&vStart=1&vEnd=1)

### Output
```
{
  "book": "GEN",
  "start-chapter": "1",
  "end-chapter": "1",
  "content": [
    {
      "chapter": "1",
      "verses": {
        "v1": "In the beginning God created the heavens and the earth."
      }
    }
  ]
}
```

## Input Parameters

### `method` - Different query methods
| Method          |                              Description                               |                                     Parameters required                                     |
| :-------------- | :--------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| `bible`         |           Produces a JSON with results from a search query.            | Chapters and verses are filtered.	version, book, chapter(cStart, cEnd), verse(vStart, vEnd) |
| `bibleChapters` | Produces a JSON result of filtered chapters based on query parameters. |                            version, book, chapter(cStart, cEnd)                             |
| `biblePDF`      |   Downloads a bible search results and properly format it as a PDF.    |                 version, book-index(bkStart, bkEnd), chapter(cStart, cEnd)                  |

&nbsp;
### `version` - Bible version

| Version code |            Version name            |
| :----------: | :--------------------------------: |
|    ` NIV  `    |     New International Version      |
|    ` ESV  `    |      English Standard Version      |
|    ` KJV  `    |         King James Version         |
|    ` AMP  `    |          Amplified Bible           |
|    ` ASV  `    |     American Standard Version      |
|    ` NKJV `    |       New King James Version       |
|    ` NLT  `    |       New Living Translation       |
|    ` CSBS `    |       Chinese Standard Bible       |
|    ` CSBT `    | Chinese Standard Bible Traditional |
|    ` RCUV `    |   Revised Chinese Union Version    |
|    `  AB  `    |               ALIVE                |
|    ` KRV  `    |       Korean Revised Version       |
|    `FRDBY `    |      Bible Darby en français       |
|    ` TLAB `    |             Ang Biblia             |
|    `DHH941`    |       Biblia Dios Habla Hoy        |
|    `DB1885`    |        Diodati Bibbia 1885         |

&nbsp;

### `bkStart` - Starting bible book index
### `bkEnd` - Ending bible book index(inclusive)
### `book` - Bible book code
| Book index | Book code |    Book name    |
| :--------: | :-------: | :-------------: |
|     `0 `     |    `GEN`    |     Genesis     |
|     `1 `     |    `EXO`    |     Exodus      |
|     `2 `     |    `LEV`    |    Leviticus    |
|     `3 `     |    `NUM`    |     Numbers     |
|     `4 `     |    `DEU`    |   Deuteronomy   |
|     `5 `     |    `JOS`    |     Joshua      |
|     `6 `     |    `JDG`    |     Judges      |
|     `7 `     |    `RUT`    |      Ruth       |
|     `8 `     |    `1SA`    |    1 Samuel     |
|     `9 `     |    `2SA`    |    2 Samuel     |
|     `10`     |    `1KI`    |     1 Kings     |
|     `11`     |    `2KI`    |     2 Kings     |
|     `12`     |    `1CH`    |  1 Chronicles   |
|     `13`     |    `2CH`    |  2 Chronicles   |
|     `14`     |    `EZR`    |      Ezra       |
|     `15`     |    `NEH`    |    Nehemiah     |
|     `16`     |    `EST`    |     Esther      |
|     `17`     |    `JOB`    |       Job       |
|     `18`     |    `PSA`    |     Psalms      |
|     `19`     |    `PRO`    |    Proverbs     |
|     `20`     |    `ECC`    |  Ecclesiastes   |
|     `21`     |    `SNG`    |  Song of Songs  |
|     `22`     |    `ISA`    |     Isaiah      |
|     `23`     |    `JER`    |    Jeremiah     |
|     `24`     |    `LAM`    |  Lamentations   |
|     `25`     |    `EZK`    |     Ezekiel     |
|     `26`     |    `DAN`    |     Daniel      |
|     `27`     |    `HOS`    |      Hosea      |
|     `28`     |    `JOL`    |      Joel       |
|     `29`     |    `AMO`    |      Amos       |
|     `30`     |    `OBA`    |     Obadiah     |
|     `31`     |    `JON`    |      Jonah      |
|     `32`     |    `MIC`    |      Micah      |
|     `33`     |    `NAM`    |      Nahum      |
|     `34`     |    `HAB`    |    Habakkuk     |
|     `35`     |    `ZEP`    |    Zephaniah    |
|     `36`     |    `HAG`    |     Haggai      |
|     `37`     |    `ZEC`    |    Zechariah    |
|     `38`     |    `MAL`    |     Malachi     |
|     `39`     |    `MAT`    |     Matthew     |
|     `40`     |    `MRK`    |      Mark       |
|     `41`     |    `LUK`    |      Luke       |
|     `42`     |    `JHN`    |      John       |
|     `43`     |    `ACT`    |      Acts       |
|     `44`     |    `ROM`    |     Romans      |
|     `45`     |    `1CO`    |  1 Corinthians  |
|     `46`     |    `2CO`    |  2 Corinthians  |
|     `47`     |    `GAL`    |    Galatians    |
|     `48`     |    `EPH`    |    Ephesians    |
|     `49`     |    `PHP`    |   Philippians   |
|     `50`     |    `COL`    |   Colossians    |
|     `51`     |    `1TH`    | 1 Thessalonians |
|     `52`     |    `2TH`    | 2 Thessalonians |
|     `53`     |    `1TH`    |    1 Timothy    |
|     `54`     |    `2TH`    |    2 Timothy    |
|     `55`     |    `TIT`    |      Titus      |
|     `56`     |    `PHM`    |    Philemon     |
|     `57`     |    `HEB`    |     Hebrews     |
|     `58`     |    `JAS`    |      James      |
|     `59`     |    `1PE`    |     1 Peter     |
|     `60`     |    `2PE`    |     2 Peter     |
|     `61`     |    `1JN`    |     1 John      |
|     `62`     |    `2JN`    |     2 John      |
|     `63`     |    `3JN`    |     3 John      |
|     `64`     |    `JUD`    |      Jude       |
|     `65`     |    `REV`    |   Revelation    |

&nbsp;

### `cStart` - starting chapter
### `cEnd` - ending chapter(inclusive)
### `vStart` - starting verse
### `vEnd` - ending verse(inclusive)