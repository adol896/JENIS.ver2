// data.js
const silencePhrases = {
    ja: [
        // 【1. デスクワーク・作業中】
        "（キーボードを叩きながら）……っと、ここをこう直して、と。意外と時間かかるなぁ",
        "（ペンをくるくる回しながら）うーん、このアイデアはちょっとボツかな。別の切り口で考え直そっと",
        "（資料のページをパラパラとめくりながら）必要なデータ、どこに挟んだっけ……あ、あったあった",
        "（パソコンの画面をじっと見つめながら）よし、このセクションの入力はここまで。順調順調",
        "（マウスをカチカチ動かしながら）レイアウト、もう少し余白があった方が見やすい……かな",
        "（ノートに文字を書き込んで）なるほどね、あとでここ掘り下げて調べておこ",
        "（ため息をつきつつ）あー、肩凝った。ちょっと姿勢正さなきゃ",
        "（スマホの画面をチラッと見て）あ、もうこんな時間。集中するとすぐ忘れちゃうな",

        // 【2. 家事・部屋での動き】
        "（コーヒーをマグカップに注ぎながら）ふぅ、やっぱり一息つかないと頭が回らないや",
        "（洗濯物を畳みながら）今日のうちにこれ片付けちゃえば、週末はゆっくりできるはず",
        "（掃除機のコードを巻き取りながら）よし、部屋の隅っこもきれいになった。スッキリ！",
        "（冷蔵庫を開けて中を覗き込みながら）……うーん、今日の夜ご飯は何にしようかなぁ",
        "（窓の外を眺めながら）あ、いい天気。ちょっと空気の入れ替えでもしようっと",
        "（お腹が鳴って、苦笑いしながら）……おっと、お腹空いた合図が出ちゃったな",
        "（マグカップを洗面台に持って行きつつ）あとでまとめて洗おうと思ってたのに、結局すぐやっちゃう性格だなぁ",

        // 【3. 休憩・リラックスタイム】
        "（大きく伸びをして）ふぁぁ……。椅子に座りっぱなしだったから、体がバキバキだ",
        "（冷めたお茶を飲み干して）あ、もうお冷なくなっちゃった。お代わり入れてこよ",
        "（カレンダーを眺めながら）来週の予定、そろそろちゃんと組んでおかないとやばいかも",
        "（部屋の明かりを少し落として）うん、これくらいの明るさの方が落ち着くんだよね",
        "（お気に入りのクッションを抱え直して）よし、少しだけぼーっとする時間にしよ",
        "（本棚の前で背伸びをしながら）読みかけの本、どこに置いたっけな……あ、ここにあった",
        "（音楽のプレイリストを選びながら）お部屋用のBGM、今日はこれにしよっと。落ち着いたやつがいいな",

        // 【4. 一日の終わり・夜のひとコマ】
        "（パソコンをスリープモードにしながら）今日のノルマはこれくらいで勘弁してあげよ",
        "（机の上のペンや小物を片付けながら）明日やること、付箋に書いて目立つところに貼っとこ",
        "（カーテンをシャッと閉めながら）すっかり暗くなったな。夜風がちょっと心地いいかも",
        "（鏡の前で髪を軽く結び直しながら）さて、お風呂の準備しよっか",
        "（温かいスープを一口飲んで）はぁ……染みる。今日一日よく頑張りました、私",
        "（スマホの画面をスクロールしながら）あ、これ気になってたレシピだ。今度作ってみよ",
        "（部屋の電気を消しながら）お疲れ様、自分。明日もマイペースでいこっと",
        "（ベッドにゴロンと横になりながら）ふかふか……。やっぱり自分の部屋が一番落ち着くや"
    ],
    en: [
        // Desk work
        "(Typing on the keyboard) ...Alright, let's fix this part here. It's taking more time than I thought.",
        "(Spinning a pen) Hmm, this idea might be a dud. Let's think about it from a different angle.",
        "(Flipping through pages) Where did I put that data... Ah, here it is.",
        "(Staring at the screen) Okay, that's it for this section. Everything is going smoothly.",
        "(Clicking the mouse) The layout might be easier to read with a bit more margin... maybe.",
        "(Writing in a notebook) I see, I should dig deeper into this later.",
        "(Sighing) Ah, my shoulders are stiff. I need to fix my posture.",
        "(Glancing at smartphone) Oh, it's already this late. I lose track of time when I concentrate.",

        // Housework
        "(Pouring coffee) Phew, my brain doesn't work without taking a breather.",
        "(Folding laundry) If I finish this today, I should be able to relax this weekend.",
        "(Winding the vacuum cord) Alright, the corners are clean too. So refreshing!",
        "(Looking inside the fridge) ...Hmm, what should I have for dinner today?",
        "(Looking out the window) Ah, the weather is nice. Let's let some fresh air in.",
        "(Stomach rumbles, smiling wryly) ...Oops, that's my cue that I'm hungry.",
        "(Carrying a mug to the sink) I thought I'd wash it later, but I end up doing it right away.",

        // Break time
        "(Stretching deeply) Yawn... My body is so stiff from sitting in this chair.",
        "(Drinking cold tea) Ah, I'm out of tea. Let me go get a refill.",
        "(Looking at the calendar) I probably need to properly schedule next week soon or I'm in trouble.",
        "(Dimming the lights) Yeah, this level of brightness is much more relaxing.",
        "(Hugging a favorite cushion) Alright, time to just space out for a bit.",
        "(Stretching in front of the bookshelf) Where did I put that book I was reading... Ah, here it is.",
        "(Choosing a playlist) Let's go with this for today's BGM. Something calm would be nice.",

        // End of the day
        "(Putting the PC to sleep) Let's call it a day with this much progress.",
        "(Tidying up the desk) I'll write tomorrow's tasks on a sticky note and put it where I can see it.",
        "(Closing the curtains) It's completely dark now. The night breeze feels kind of nice.",
        "(Tying hair in front of the mirror) Well then, let's get ready for a bath.",
        "(Sipping warm soup) Haa... that hits the spot. I did a great job today.",
        "(Scrolling on smartphone) Oh, this is the recipe I was curious about. I'll try making it sometime.",
        "(Turning off the lights) Good job today, me. Let's take it at my own pace tomorrow too.",
        "(Lying on the bed) So soft... My own room really is the most relaxing place."
    ]
};
