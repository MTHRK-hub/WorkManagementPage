// RPG風メニュー データ
window.QUEST_DATA = [
  // ------------------------------------------------------------
  // 1. 自己管理
  // ------------------------------------------------------------
  {
    id: 1,
    icon: "⚔",
    name: "じこかんり",
    title: "自己管理",
    subtitle: "Self Management",
    color: "#dc143c",
    border: "#7a0014",
    glyph: "S",
    desc: "じぶんのからだとおかねをととのえる",
    items: [
      {
        name: "マイドライブ",
        url: "https://drive.google.com/drive/my-drive",
        type: "宝箱"
      },
      {
        name: "セルフチェックリスト",
        url: "https://docs.google.com/spreadsheets/d/1L7ztEM3AZoOeW87taYQBvHjwc_LSkGBjav_zp0pqGsY/edit?usp=drivesd",
        type: "巻物"
      },
      {
        name: "Zaim",
        url: "https://play.google.com/store/apps/details?id=net.zaim.android",
        type: "魔導書"
      },
      {
        name: "キャッシュフロー",
        url: "https://docs.google.com/spreadsheets/d/1Bp4dvFajcnMUcyhbR618TauQCx09ZV_KOjcdBeYZalk/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "生活習慣マニュアル",
        url: "https://docs.google.com/spreadsheets/d/1fqvbx0jEUSyjI2ziYMphkVollzZhhIokLDf5unN4Nfs/edit?usp=drivesdk",
        type: "巻物"
      },
    ],
  },
  // ------------------------------------------------------------
  // 2. ピロきょん周り
  // ------------------------------------------------------------
  {
    id: 2,
    icon: "♛",
    name: "ピロさん",
    title: "ピロさん周り",
    subtitle: "Piro Realm",
    color: "#3956d8",
    border: "#1a2a85",
    glyph: "P",
    desc: "なかまとともにあゆむクエスト",
    items: [
      {
        name: "先行投資予約",
        url: "https://docs.google.com/spreadsheets/d/1uZI96a2gi-7IVjx6NIznIYqfN2L9lKS3D3vvgHmyJcE/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "グランドデザイン",
        url: "https://docs.google.com/spreadsheets/d/1-lZz9AtqslRSp1wlEB9mvtPyxdpgZZYzUHb4h2LXsTk/edit?usp=drivesdk", type: "巻物"
      },

      {
        name: "品川飲み会",
        url: "https://docs.google.com/spreadsheets/d/15SkJ-LR28mYYumOci99zOb8Q37EaF1TE27BSqFsZVAc/edit",
        type: "巻物"
      },
      {
        name: "SOHO清掃チェックリスト",
        url: "https://docs.google.com/spreadsheets/d/1MqDRe7ESXj77ei1qfgR-_CJNdlDNojteem4Zh42KIc8/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "SOHO style予約",
        url: "https://docs.google.com/spreadsheets/d/1Vkhp3IT4xuWtroza4i6dfZgrT6nLAqruqpZHEBYCqhY/edit?usp=drivesdk", type: "巻物"
      },
      {
        name: "読書状況",
        url: "https://docs.google.com/spreadsheets/d/1kb1V3HqryG2IshnOZjsRhJqeo0lUXPPkTJhKw9qsO08/edit?usp=drivesdk",
        type: "巻物"
      },
    ],
  },
  // ------------------------------------------------------------
  // 3. 現場関連
  // ------------------------------------------------------------
  {
    id: 3,
    icon: "✦",
    name: "げんば",
    title: "現場関連",
    subtitle: "Field Quest",
    color: "#a8a30b",
    border: "#5e5b04",
    glyph: "G",
    desc: "せかいをかけめぐる いくさのきろく",
    items: [
      {
        name: "原稿作成用",
        url: "https://drive.google.com/drive/folders/1iR551lpG4Y59mOoQSxAyD0xfItiEXYgz",
        type: "宝箱"
      },
      {
        name: "アプリデータ",
        url: "https://drive.google.com/drive/folders/1m-4xyQKJ0PRixZ2dc6gkaopdlgBrZWGN",
        type: "巻物"
      },
      {
        name: "現場関連まとめ",
        url: "https://docs.google.com/spreadsheets/d/1NsoCzaMaT5qo7ZwU2-A85lASQWbdTPrxoeF31c94V0E/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "イベント一覧",
        url: "https://docs.google.com/spreadsheets/d/1dlEkWu87n5RJxrujOrMhz8EWCH0jl5P8tYzkNkbOI5o/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "1:1提案リスト",
        url: "https://docs.google.com/spreadsheets/d/19a71ARGKFoiUuEryILEe3Kf-jFVk7h5k17ExnWj2d0c/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "友達リスト",
        url: "https://docs.google.com/spreadsheets/d/1zZawNk1mPUO2phUBiAH3pOQUDhxHrL1R2ZH6IHwF22M/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "こくちーず",
        url: "https://www.kokuchpro.com/mypage/",
        type: "魔導書"
      },
      {
        name: "machicon japan",
        url: "https://machicon.jp/areas/tokyo/",
        type: "魔導書"
      },
    ],
  },
  // ------------------------------------------------------------
  // 4. 学びメモ
  // ------------------------------------------------------------
  {
    id: 4,
    icon: "✎",
    name: "まなび",
    title: "学びメモ",
    subtitle: "Wisdom Notes",
    color: "#d433a0",
    border: "#7a1c5b",
    glyph: "M",
    desc: "ちのかけらを かきとめたメモ",
    items: [
      {
        name: "セミナーメモ",
        url: "https://drive.google.com/drive/folders/1ml36rQYxN_4Fg24aNVpNMKegYmhR-nK3",
        type: "宝箱"
      },
      {
        name: "読書気づきメモ",
        url: "https://drive.google.com/drive/folders/11jpLRoiriQ8aOWmMA1x-0LUal3LI2sW_",
        type: "宝箱"
      },
      {
        name: "セミナースタッフ振返りメモ",
        url: "https://drive.google.com/drive/folders/11lKwJ29eIbmcIhIR4MvuBYO0zVhhimsn",
        type: "宝箱"
      },
      {
        name: "電話報連相メモ",
        url: "https://drive.google.com/drive/folders/1ko2VL2MRFnnUInnn4Dxi864fPGb0Ieji",
        type: "宝箱"
      },
    ],
  },
  // ------------------------------------------------------------
  // 5. 学習動画
  // ------------------------------------------------------------
  {
    id: 5,
    icon: "▶",
    name: "どうが",
    title: "学習動画",
    subtitle: "Vision Crystal",
    color: "#e0560f",
    border: "#7a2d05",
    glyph: "D",
    desc: "うつしだされる がくしゅうのえいぞう",
    items: [
      {
        name: "ASK動画",
        url: "https://ch.nicovideo.jp/ask-gc",
        type: "魔導書"
      },
      {
        name: "LIFE THEATER",
        url: "https://life-theater.jp/",
        type: "魔導書"
      },
    ],
  },
  // ------------------------------------------------------------
  // 6. 自己成長関連
  // ------------------------------------------------------------
  {
    id: 6,
    icon: "✿",
    name: "せいちょう",
    title: "自己成長関連",
    subtitle: "Growth Garden",
    color: "#2e8b2e",
    border: "#0f4a0f",
    glyph: "B",
    desc: "じぶんを きたえる しゅぎょうば",
    items: [
      {
        name: "ブランディング",
        url: "https://drive.google.com/drive/folders/1DzVZLk49RTNjPk3G9fH5hB6ux9n5AS36",
        type: "宝箱"
      },
      {
        name: "肉体改善記録",
        url: "https://drive.google.com/drive/folders/1bTR7PUHqUdZE2tVLOunM_U7eYdrd19Gx?usp=drive_link",
        type: "魔導書"
      }
    ],
  },
  // ------------------------------------------------------------
  // 7. tamayomo
  // ------------------------------------------------------------
  {
    id: 7,
    icon: "♘",
    name: "tamayomo",
    title: "tamayomo",
    subtitle: "Tamayomo Guild",
    color: "#a0522d",
    border: "#5a2c14",
    glyph: "T",
    desc: "ギルドのなかまと きょうりょくする",
    items: [
      {
        name: "全体",
        url: "https://drive.google.com/drive/folders/0ADjfnh2v2S-nUk9PVA",
        type: "宝箱"
      },
      {
        name: "タスク管理表",
        url: "https://docs.google.com/spreadsheets/d/1QH04_3vLtpthoxl1u8q_EBCdkMHGxfm0FdiffZ0FB-s/edit?usp=drivesdk",
        type: "巻物"
      },
      {
        name: "広報用フォルダ",
        url: "https://drive.google.com/drive/folders/1U-2qOutTsqjKNkB05lIx8ncRmRGJHGF1?usp=drive_link",
        type: "宝箱"
      },
      {
        name: "Instagramまとめ",
        url: "https://docs.google.com/spreadsheets/d/1C_8R9g1SpvBi6d_dbfN9qdu5Dxmk7H-hgqOtE8JHXec/edit?usp=drive_link",
        type: "宝箱"
      },
    ],
  },
  // ------------------------------------------------------------
  // 8. 音響関連
  // ------------------------------------------------------------
  {
    id: 8,
    icon: "♪",
    name: "おんきょう",
    title: "音響関連",
    subtitle: "Sound Sanctum",
    color: "#9932cc",
    border: "#4d1869",
    glyph: "O",
    desc: "ね と おとを あやつる いんぼうかい",
    items: [
      {
        name: "音響用フォルダ",
        url: "https://drive.google.com/drive/folders/11SjlaIJXP06umZlNCS-3tYcCzkk_iHPE?usp=drive_link",
        type: "宝箱"
      },
      {
        name: "PJ定例資料",
        url: "https://drive.google.com/drive/folders/12Exm2nAVOJ0M95_fvEE2CNexAMyY-f8S",
        type: "宝箱"
      },
    ],
  },
];
