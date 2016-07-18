(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
		//ENDOFLIST
{title:'God knows...',artist:'平野綾',album:'AYA MUSEUM',cover:'http://nyandn.b0.upaiyun.com/cover/God knows....jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/平野綾 - God knows....mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/平野綾 - God knows....mp3',},
{title:'恋するフォーチュンクッキー',artist:'AKB48',album:'恋するフォーチュンクッキー【劇場盤】',cover:'http://nyandn.b0.upaiyun.com/cover/恋するフォーチュンクッキー.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 恋するフォーチュンクッキー.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 恋するフォーチュンクッキー.mp3',},
{title:'365日の紙飛行機',artist:'AKB48',album:'唇にBe My Baby Type A',cover:'http://nyandn.b0.upaiyun.com/cover/365日の紙飛行機.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 365日の紙飛行機.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 365日の紙飛行機.mp3',},
{title:'ギガンティックO.T.N -Big Death Edition-',artist:'れをる',album:'No title−',cover:'http://nyandn.b0.upaiyun.com/cover/ギガンティックO.T.N -Big Death Edition-.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/れをる - ギガンティックO.T.N -Big Death Edition-.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/れをる - ギガンティックO.T.N -Big Death Edition-.mp3',},
{title:'神のまにまに',artist:'初音ミク & 鏡音リン & GUMI',album:'聖槍爆裂ボーイ',cover:'http://nyandn.b0.upaiyun.com/cover/神のまにまに.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク & 鏡音リン & GUMI - 神のまにまに.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク & 鏡音リン & GUMI - 神のまにまに.mp3',},
{title:'鏡花水月',artist:'そらる & まふまふ',album:'プレリズムアーチ',cover:'http://nyandn.b0.upaiyun.com/cover/鏡花水月.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/そらる & まふまふ - 鏡花水月.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/そらる & まふまふ - 鏡花水月.mp3',},
{title:'虎視眈々',artist:'梅とら & 野島健児',album:'EXIT TUNES PRESENTS ACTORS3(限定盤)',cover:'http://nyandn.b0.upaiyun.com/cover/虎視眈々.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/梅とら & 野島健児 - 虎視眈々.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/梅とら & 野島健児 - 虎視眈々.mp3',},
{title:'歌に形はないけれど',artist:'山根万理奈',album:'人のオンガクを笑うな!',cover:'http://nyandn.b0.upaiyun.com/cover/歌に形はないけれど.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/山根万理奈 - 歌に形はないけれど.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/山根万理奈 - 歌に形はないけれど.mp3',},
{title:'威風堂々',artist:'しゅーず',album:'EXIT TUNES PRESENTS 神曲を歌ってみた 7',cover:'http://nyandn.b0.upaiyun.com/cover/威風堂々.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/しゅーず - 威風堂々.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/しゅーず - 威風堂々.mp3',},
{title:'pastel',artist:'ClariS',album:'アネモネ',cover:'http://nyandn.b0.upaiyun.com/cover/pastel.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - pastel.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - pastel.mp3',},
{title:'今日の日はさようなら',artist:'arlie Ray',album:'降臨、ふたたび',cover:'http://nyandn.b0.upaiyun.com/cover/今日の日はさようなら.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 今日の日はさようなら.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 今日の日はさようなら.mp3',},
{title:'Prism',artist:'ClariS',album:'Prism',cover:'http://nyandn.b0.upaiyun.com/cover/Prism.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - Prism.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - Prism.mp3',},
{title:'夏祭り',artist:'Whiteberry',album:'夏祭り',cover:'http://nyandn.b0.upaiyun.com/cover/夏祭り.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Whiteberry - 夏祭り.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Whiteberry - 夏祭り.mp3',},
{title:'Rage Your Dream',artist:'Move',album:'Initial D Best Song Collection 1998-2004',cover:'http://nyandn.b0.upaiyun.com/cover/Rage Your Dream.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Move - Rage Your Dream.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Move - Rage Your Dream.mp3',},
{title:'secret base~君がくれたもの~',artist:'Silent Siren',album:'八月の夜',cover:'http://nyandn.b0.upaiyun.com/cover/secret base~君がくれたもの~.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Silent Siren - secret base~君がくれたもの~.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Silent Siren - secret base~君がくれたもの~.mp3',},
{title:'輝夜の城で踊りたい',artist:'ラブライブ！ School idol project',album:'きっと青春が聞こえる',cover:'http://nyandn.b0.upaiyun.com/cover/輝夜の城で踊りたい.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ラブライブ！ School idol project - 輝夜の城で踊りたい.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ラブライブ！ School idol project - 輝夜の城で踊りたい.mp3',},
{title:'あまねき祈り',artist:'花たん & 七月隆文',album:'昨日も、今日も、明日からも。',cover:'http://nyandn.b0.upaiyun.com/cover/あまねき祈り.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花たん & 七月隆文 - あまねき祈り.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花たん & 七月隆文 - あまねき祈り.mp3',},
{title:'花雪',artist:'smileY inc.',album:'花雪',cover:'http://nyandn.b0.upaiyun.com/cover/花雪.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/smileY inc. - 花雪.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/smileY inc. - 花雪.mp3',},
{title:'かまってウォーアイニー',artist:'花たん',album:'Flower Rail',cover:'http://nyandn.b0.upaiyun.com/cover/かまってウォーアイニー.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花たん - かまってウォーアイニー.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花たん - かまってウォーアイニー.mp3',},
{title:'恋色旋律-有你的幸福 - V家10人中日双语',artist:'初音ミク',album:'恋色旋律~有你的幸福',cover:'http://nyandn.b0.upaiyun.com/cover/恋色旋律-有你的幸福 - V家10人中日双语.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 恋色旋律-有你的幸福 - V家10人中日双语.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 恋色旋律-有你的幸福 - V家10人中日双语.mp3',},
{title:'S-P-B Ryu☆SPECIAL NON STOP MEGA-MIX - remix',artist:'EXIT TRANCE',album:'EXIT TUNES PRESENTS SUPER PRODUCERS BEAT MIXED BY Ryu☆ ジャケットイラストレーター 狮子猿',cover:'http://nyandn.b0.upaiyun.com/cover/S-P-B Ryu☆SPECIAL NON STOP MEGA-MIX - remix.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/EXIT TRANCE - S-P-B Ryu☆SPECIAL NON STOP MEGA-MIX - remix.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/EXIT TRANCE - S-P-B Ryu☆SPECIAL NON STOP MEGA-MIX - remix.mp3',},
{title:'クラウドライダー',artist:'V.A.',album:'IA/02 -COLOR-',cover:'http://nyandn.b0.upaiyun.com/cover/クラウドライダー.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/V.A. - クラウドライダー.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/V.A. - クラウドライダー.mp3',},
{title:'オレンジ',artist:'花たん',album:'Flower',cover:'http://nyandn.b0.upaiyun.com/cover/オレンジ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花たん - オレンジ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花たん - オレンジ.mp3',},
{title:'8月31日',artist:'DECO*27 & 初音ミク',album:'Conti New',cover:'http://nyandn.b0.upaiyun.com/cover/8月31日.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/DECO*27 & 初音ミク - 8月31日.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/DECO*27 & 初音ミク - 8月31日.mp3',},
{title:'HesitationSnow',artist:'水月陵',album:'はつゆきさくら 予约特典 スペシャルサウンドトラック',cover:'http://nyandn.b0.upaiyun.com/cover/HesitationSnow.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/水月陵 - HesitationSnow.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/水月陵 - HesitationSnow.mp3',},
{title:'memory of snow',artist:'fripSide',album:'LEVEL5-judgelight-',cover:'http://nyandn.b0.upaiyun.com/cover/memory of snow.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/fripSide - memory of snow.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/fripSide - memory of snow.mp3',},
{title:'プラスチックボイス',artist:'初音ミク',album:'EVERGREEN SONGS 2014',cover:'http://nyandn.b0.upaiyun.com/cover/プラスチックボイス.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - プラスチックボイス.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - プラスチックボイス.mp3',},
{title:'君だったら',artist:'HAPPY BIRTHDAY',album:'今夜きみが怖い夢を見ませんように',cover:'http://nyandn.b0.upaiyun.com/cover/君だったら.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/HAPPY BIRTHDAY - 君だったら.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/HAPPY BIRTHDAY - 君だったら.mp3',},
{title:'fortissimo-the ultimate crisis-',artist:'fripSide',album:'future gazer',cover:'http://nyandn.b0.upaiyun.com/cover/fortissimo-the ultimate crisis-.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/fripSide - fortissimo-the ultimate crisis-.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/fripSide - fortissimo-the ultimate crisis-.mp3',},
{title:'あの頃~ジンジンバオヂュオニー~',artist:'whiteeeen',album:'あの頃～ジンジンバオヂュオニー～',cover:'http://nyandn.b0.upaiyun.com/cover/あの頃~ジンジンバオヂュオニー~.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/whiteeeen - あの頃~ジンジンバオヂュオニー~.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/whiteeeen - あの頃~ジンジンバオヂュオニー~.mp3',},
{title:'おどるポンポコリン',artist:'E-Girls',album:'おどるポンポコリン',cover:'http://nyandn.b0.upaiyun.com/cover/おどるポンポコリン.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/E-Girls - おどるポンポコリン.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/E-Girls - おどるポンポコリン.mp3',},
		{title:'だんだん早くなる',artist:'初音ミク',album:'最新热歌慢摇100',cover:'http://nyandn.b0.upaiyun.com/cover/だんだん早くなる.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - だんだん早くなる.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - だんだん早くなる.mp3',},
		{title:'jewel',artist:'梅とら & ルカ & ミク & グミ',album:'jewel',cover:'http://nyandn.b0.upaiyun.com/cover/jewel.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/梅とら & ルカ & ミク & グミ - jewel.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/梅とら & ルカ & ミク & グミ - jewel.mp3',},
		{title:'虎視眈々',artist:'梅とら & 野岛健儿',album:'EXIT TUNES PRESENTS ACTORS3(限定盤)',cover:'http://nyandn.b0.upaiyun.com/cover/虎視眈々.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/梅とら & 野岛健儿 - 虎視眈々.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/梅とら & 野岛健儿 - 虎視眈々.mp3',},
		{title:'START:DASH!!',artist:'μ\'s',album:'ススメ→トゥモロウ/START:DASH!!',cover:'http://nyandn.b0.upaiyun.com/cover/START:DASH!!.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - START:DASH!!.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - START:DASH!!.mp3',},
		{title:'どんなときもずっと',artist:'μ\'s',album:'どんなときもずっと',cover:'http://nyandn.b0.upaiyun.com/cover/どんなときもずっと.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - どんなときもずっと.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - どんなときもずっと.mp3',},
		{title:'Dancing stars on me!',artist:'μ\'s',album:'Love wing bell☆Dancing stars on me!',cover:'http://nyandn.b0.upaiyun.com/cover/Dancing stars on me!.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - Dancing stars on me!.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - Dancing stars on me!.mp3',},
		{title:'それは僕たちの奇跡',artist:'μ\'s',album:'それは僕たちの奇跡',cover:'http://nyandn.b0.upaiyun.com/cover/それは僕たちの奇跡.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - それは僕たちの奇跡.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - それは僕たちの奇跡.mp3',},
		{title:'僕らは今のなかで',artist:'μ\'s',album:'僕らは今のなかで',cover:'http://nyandn.b0.upaiyun.com/cover/僕らは今のなかで.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - 僕らは今のなかで.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/μ\'s - 僕らは今のなかで.mp3',},
		{title:'LEVEL5 -judgelight-',artist:'fripSide',album:'TVアニメ“とある科学の超电磁炮”新OPテーマ::LEVEL5-judgelight-',cover:'http://nyandn.b0.upaiyun.com/cover/LEVEL5 -judgelight-.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/fripSide - LEVEL5 -judgelight-.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/fripSide - LEVEL5 -judgelight-.mp3',},
		{title:'爱される花 爱されぬ花',artist:'中島みゆき',album:'おとぎばなし-Fairy Ring',cover:'http://nyandn.b0.upaiyun.com/cover/爱される花 爱されぬ花.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/中島みゆき - 爱される花 爱されぬ花.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/中島みゆき - 爱される花 爱されぬ花.mp3',},
		{title:'おどるポンポコリン',artist:'事務員G & まらしぃ',album:'4D-PIANO ANIME Theater!',cover:'http://nyandn.b0.upaiyun.com/cover/おどるポンポコリン.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/事務員G & まらしぃ - おどるポンポコリン.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/事務員G & まらしぃ - おどるポンポコリン.mp3',},
		{title:'桜の花びらたち',artist:'AKB48',album:'桜の花びらたち',cover:'http://nyandn.b0.upaiyun.com/cover/桜の花びらたち.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 桜の花びらたち.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/AKB48 - 桜の花びらたち.mp3',},
		{title:'威风堂堂',artist:'祈Inory',album:'最新热歌慢摇13 ',cover:'http://nyandn.b0.upaiyun.com/cover/威风堂堂.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/祈Inory - 威风堂堂.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/祈Inory - 威风堂堂.mp3',},
		{title:'残酷な天使のテーゼ (Japanese Version)',artist:'arlie Ray',album:'覚醒、そして降临',cover:'http://nyandn.b0.upaiyun.com/cover/残酷な天使のテーゼ (Japanese Version).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 残酷な天使のテーゼ (Japanese Version).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 残酷な天使のテーゼ (Japanese Version).mp3',},
		{title:'残酷な天使のテーゼ (English Version)',artist:'arlie Ray',album:'覚醒、そして降临',cover:'http://nyandn.b0.upaiyun.com/cover/残酷な天使のテーゼ (English Version).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 残酷な天使のテーゼ (English Version).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/arlie Ray - 残酷な天使のテーゼ (English Version).mp3',},
		{title:'歌に形はないけれど',artist:'花たん',album:'Flower',cover:'http://nyandn.b0.upaiyun.com/cover/歌に形はないけれど.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花たん - 歌に形はないけれど.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花たん - 歌に形はないけれど.mp3',},
		{title:'歌に形はないけれど',artist:'doriko',album:'花束~the best of doriko feat.初音ミク~',cover:'http://nyandn.b0.upaiyun.com/cover/歌に形はないけれど.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/doriko - 歌に形はないけれど.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/doriko - 歌に形はないけれど.mp3',},
		{title:'翼をください',artist:'川澄綾子',album:'キャラクターソングアルバム オトギソングス BEST10',cover:'http://nyandn.b0.upaiyun.com/cover/翼をください.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/川澄綾子 - 翼をください.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/川澄綾子 - 翼をください.mp3',},
		{title:'何度目の青空か?',artist:'乃木坂46',album:'何度目の青空か?',cover:'http://nyandn.b0.upaiyun.com/cover/何度目の青空か?.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/乃木坂46 - 何度目の青空か?.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/乃木坂46 - 何度目の青空か?.mp3',},
		{title:'INNOCENCE',artist:'藍井エイル',album:'INNOCENCE',cover:'http://nyandn.b0.upaiyun.com/cover/INNOCENCE.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/藍井エイル - INNOCENCE.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/藍井エイル - INNOCENCE.mp3',},
		{title:'私へ',artist:'supercell',album:'Today Is A Beautiful Day',cover:'http://nyandn.b0.upaiyun.com/cover/私へ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/supercell - 私へ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/supercell - 私へ.mp3',},
		{title:'朧月',artist:'初音ミク',album:'magnet -favorites plus-',cover:'http://nyandn.b0.upaiyun.com/cover/朧月.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 朧月.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 朧月.mp3',},
		{title:'翼をください',artist:'林原めぐみ',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/翼をください.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ - 翼をください.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ - 翼をください.mp3',},
		{title:'翼をください-Tribute to “Sound of Music”',artist:'林原めぐみ & 杉並児童合唱団',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/翼をください-Tribute to “Sound of Music”.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ & 杉並児童合唱団 - 翼をください-Tribute to “Sound of Music”.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ & 杉並児童合唱団 - 翼をください-Tribute to “Sound of Music”.mp3',},
		{title:'今日の日はさようなら',artist:'林原めぐみ',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/今日の日はさようなら.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ - 今日の日はさようなら.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/林原めぐみ - 今日の日はさようなら.mp3',},
		{title:'太陽曰く燃えよカオス',artist:'H ZETT M & 事務員G & まらしぃ & 紅い流星',album:'4D-PIANO ANIME Theater!',cover:'http://nyandn.b0.upaiyun.com/cover/太陽曰く燃えよカオス.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/H ZETT M & 事務員G & まらしぃ & 紅い流星 - 太陽曰く燃えよカオス.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/H ZETT M & 事務員G & まらしぃ & 紅い流星 - 太陽曰く燃えよカオス.mp3',},
		{title:'愛唄~since 2007~',artist:'whiteeeen',album:'愛唄~since 2007~',cover:'http://nyandn.b0.upaiyun.com/cover/愛唄~since 2007~.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/whiteeeen - 愛唄~since 2007~.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/whiteeeen - 愛唄~since 2007~.mp3',},
		{title:'紅一葉',artist:'黒うさP',album:'5th Anniversary Best',cover:'http://nyandn.b0.upaiyun.com/cover/紅一葉.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/黒うさP - 紅一葉.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/黒うさP - 紅一葉.mp3',},
		{title:'優しい詩。',artist:'RSP',album:'優しい詩。',cover:'http://nyandn.b0.upaiyun.com/cover/優しい詩。.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/RSP - 優しい詩。.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/RSP - 優しい詩。.mp3',},
		{title:'Stigmata',artist:'Ceui',album:'イメージアルバム穢翼のユースティア 夢想曲(トロイメライ)~Seeking Asphodelus~',cover:'http://nyandn.b0.upaiyun.com/cover/Stigmata.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Ceui - Stigmata.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Ceui - Stigmata.mp3',},
		{title:'歌に形はないけれど',artist:'初音ミク',album:'初音ミクベスト ～memories～',cover:'http://nyandn.b0.upaiyun.com/cover/歌に形はないけれど.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 歌に形はないけれど.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 歌に形はないけれど.mp3',},
		{title:'愛言葉',artist:'初音ミク',album:'DECO*27 VOCALOID COLLECTION 2008～2012',cover:'http://nyandn.b0.upaiyun.com/cover/愛言葉.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 愛言葉.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - 愛言葉.mp3',},
		{title:'Spica.',artist:'StylipS',album:'純粋なフジュンブツ',cover:'http://nyandn.b0.upaiyun.com/cover/Spica..jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/StylipS - Spica..mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/StylipS - Spica..mp3',},
		{title:'Growing!',artist:'佐藤しずく',album:'Growing!',cover:'http://nyandn.b0.upaiyun.com/cover/Growing!.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/佐藤しずく - Growing!.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/佐藤しずく - Growing!.mp3',},
		{title:'桜咲く',artist:'ClariS',album:'STEP',cover:'http://nyandn.b0.upaiyun.com/cover/桜咲く.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - 桜咲く.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - 桜咲く.mp3',},
		{title:'永夜のパレード',artist:'Arte Refact',album:'幻想游园郷 -Fantastic Park-',cover:'http://nyandn.b0.upaiyun.com/cover/永夜のパレード.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Arte Refact - 永夜のパレード.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Arte Refact - 永夜のパレード.mp3',},
		{title:'翼をください',artist:'鷺巣詩郎',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/翼をください.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 - 翼をください.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 - 翼をください.mp3',},
		{title:'えれくとりっくえんじぇぅ 初音ミク',artist:'初音ミク',album:'初音ミク ミクの日大感謝祭 LIVE CD',cover:'http://nyandn.b0.upaiyun.com/cover/えれくとりっくえんじぇぅ 初音ミク.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - えれくとりっくえんじぇぅ 初音ミク.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - えれくとりっくえんじぇぅ 初音ミク.mp3',},
		{title:'大人ジェリービーンズ',artist:'渡辺麻友',album:'大人ジェリービーンズ',cover:'http://nyandn.b0.upaiyun.com/cover/大人ジェリービーンズ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/渡辺麻友 - 大人ジェリービーンズ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/渡辺麻友 - 大人ジェリービーンズ.mp3',},
		{title:'letter song',artist:'doriko',album:'花束~the best of doriko feat.初音ミク~',cover:'http://nyandn.b0.upaiyun.com/cover/letter song.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/doriko - letter song.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/doriko - letter song.mp3',},
		{title:'ロミオとシンデレラ',artist:'花たん',album:'Flower',cover:'http://nyandn.b0.upaiyun.com/cover/ロミオとシンデレラ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花たん - ロミオとシンデレラ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花たん - ロミオとシンデレラ.mp3',},
		{title:'Sweet Devil',artist:'八王子P',album:'Sweet Devil',cover:'http://nyandn.b0.upaiyun.com/cover/Sweet Devil.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/八王子P - Sweet Devil.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/八王子P - Sweet Devil.mp3',},
		{title:'BEST FRIENDS',artist:'Pile & 楠田亜衣奈',album:'あしたへ咲く花',cover:'http://nyandn.b0.upaiyun.com/cover/BEST FRIENDS.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Pile & 楠田亜衣奈 - BEST FRIENDS.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Pile & 楠田亜衣奈 - BEST FRIENDS.mp3',},
		{title:'梦と叶桜',artist:'青木月光 & 初音ミク',album:'V love 25~Aperios~',cover:'http://nyandn.b0.upaiyun.com/cover/梦と叶桜.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/青木月光 & 初音ミク - 梦と叶桜.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/青木月光 & 初音ミク - 梦と叶桜.mp3',},
		{title:'ただいま.',artist:'竹達彩奈',album:'俺の妹がこんなに可爱いわけがない 6',cover:'http://nyandn.b0.upaiyun.com/cover/ただいま..jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/竹達彩奈 - ただいま..mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/竹達彩奈 - ただいま..mp3',},
		{title:'DROP',artist:'ClariS',album:'Alice_Clara',cover:'http://nyandn.b0.upaiyun.com/cover/DROP.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - DROP.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - DROP.mp3',},
		{title:'Sister,Friend,Lover',artist:'RAMM',album:'TVアニメ「這いよれ！ ニャル子さんW」エンディングソングシリーズ2',cover:'http://nyandn.b0.upaiyun.com/cover/Sister,Friend,Lover.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/RAMM - Sister,Friend,Lover.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/RAMM - Sister,Friend,Lover.mp3',},
		{title:' 秋姉妹のなく頃に in the autumn sky',artist:'ばんばんしー',album:'秋満开の风に舞う',cover:'http://nyandn.b0.upaiyun.com/cover/ 秋姉妹のなく頃に in the autumn sky.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ばんばんしー -  秋姉妹のなく頃に in the autumn sky.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ばんばんしー -  秋姉妹のなく頃に in the autumn sky.mp3',},
		{title:'回レ！雪月花 (小紫Ver.)',artist:'小倉唯',album:'TVアニメ「機巧少女は傷つかない」Blu-ray第1巻特典CD スペシャルソング',cover:'http://nyandn.b0.upaiyun.com/cover/回レ！雪月花 (小紫Ver.).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/小倉唯 - 回レ！雪月花 (小紫Ver.).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/小倉唯 - 回レ！雪月花 (小紫Ver.).mp3',},
		{title:'小さな恋のうた',artist:'新垣結衣',album:'虹',cover:'http://nyandn.b0.upaiyun.com/cover/小さな恋のうた.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/新垣結衣 - 小さな恋のうた.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/新垣結衣 - 小さな恋のうた.mp3',},
		{title:'泡沫、哀のまほろば',artist:'senya',album:'幻-MABOROSHI- Singles Best Vol.2',cover:'http://nyandn.b0.upaiyun.com/cover/泡沫、哀のまほろば.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/senya - 泡沫、哀のまほろば.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/senya - 泡沫、哀のまほろば.mp3',},
		{title:'色は匂へど散りぬるを',artist:'senya',album:'さぁ、こごう',cover:'http://nyandn.b0.upaiyun.com/cover/色は匂へど散りぬるを.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/senya - 色は匂へど散りぬるを.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/senya - 色は匂へど散りぬるを.mp3',},
		{title:'大地に咲く旋律',artist:'幽閉サテライト',album:'濡れた髪に触れられた时',cover:'http://nyandn.b0.upaiyun.com/cover/大地に咲く旋律.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/幽閉サテライト - 大地に咲く旋律.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/幽閉サテライト - 大地に咲く旋律.mp3',},
		{title:'ニッポン笑顔百景',artist:'桃黒亭一門',album:'ニッポン笑顔百景',cover:'http://nyandn.b0.upaiyun.com/cover/ニッポン笑顔百景.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/桃黒亭一門 - ニッポン笑顔百景.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/桃黒亭一門 - ニッポン笑顔百景.mp3',},
		{title:'Rain',artist:'秦基博',album:'言ノ葉',cover:'http://nyandn.b0.upaiyun.com/cover/Rain.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/秦基博 - Rain.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/秦基博 - Rain.mp3',},
		{title:'美しきもの',artist:'Sound Horizon',album:'Roman',cover:'http://nyandn.b0.upaiyun.com/cover/美しきもの.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 美しきもの.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 美しきもの.mp3',},
		{title:' secret base ~君がくれたもの~ (10 years after Ver.)',artist:'茅野愛衣 & 戸松遥 & 早見沙織',album:'secret base  ～君がくれたもの～ 12 years after special package',cover:'http://nyandn.b0.upaiyun.com/cover/ secret base ~君がくれたもの~ (10 years after Ver.).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/茅野愛衣 & 戸松遥 & 早見沙織 -  secret base ~君がくれたもの~ (10 years after Ver.).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/茅野愛衣 & 戸松遥 & 早見沙織 -  secret base ~君がくれたもの~ (10 years after Ver.).mp3',},
		{title:'恋爱サーキュレーション',artist:'花澤香菜',album:'化物语音楽全集 Songs&Soundtracks',cover:'http://nyandn.b0.upaiyun.com/cover/恋爱サーキュレーション.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/花澤香菜 - 恋爱サーキュレーション.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/花澤香菜 - 恋爱サーキュレーション.mp3',},
		{title:'ワールズエンド・ダンスホール',artist:'wowaka',album:'SEVEN GIRLS\' DISCORD',cover:'http://nyandn.b0.upaiyun.com/cover/ワールズエンド・ダンスホール.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/wowaka - ワールズエンド・ダンスホール.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/wowaka - ワールズエンド・ダンスホール.mp3',},
		{title:'えれくとりっく・えんじぇぅ',artist:'ギガP & 鏡音リン & 鏡音レン',album:'ぎがばなな ざ べすと~USUSHIO味~',cover:'http://nyandn.b0.upaiyun.com/cover/えれくとりっく・えんじぇぅ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ギガP & 鏡音リン & 鏡音レン - えれくとりっく・えんじぇぅ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ギガP & 鏡音リン & 鏡音レン - えれくとりっく・えんじぇぅ.mp3',},
		{title:'オレンジ',artist:'内田彩',album:'アップルミント',cover:'http://nyandn.b0.upaiyun.com/cover/オレンジ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/内田彩 - オレンジ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/内田彩 - オレンジ.mp3',},
		{title:'翼をください-Tribute to “Sound of Music”',artist:'鷺巣詩郎 & 林原めぐみ',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/翼をください-Tribute to “Sound of Music”.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 & 林原めぐみ - 翼をください-Tribute to “Sound of Music”.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 & 林原めぐみ - 翼をください-Tribute to “Sound of Music”.mp3',},
		{title:'今日の日はさようなら',artist:'鷺巣詩郎',album:'ヱヴァンゲリヲン新剧场版:破 オリジナルサウンドトラック SPECIAL EDITION',cover:'http://nyandn.b0.upaiyun.com/cover/今日の日はさようなら.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 - 今日の日はさようなら.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/鷺巣詩郎 - 今日の日はさようなら.mp3',},
		{title:'朧月',artist:'minato',album:'magnet -favorites plus-',cover:'http://nyandn.b0.upaiyun.com/cover/朧月.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/minato - 朧月.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/minato - 朧月.mp3',},
		{title:'君の知らない物語',artist:'まらしぃ',album:'Anison Piano ~marasy animation songs cover on piano~',cover:'http://nyandn.b0.upaiyun.com/cover/君の知らない物語.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/まらしぃ - 君の知らない物語.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/まらしぃ - 君の知らない物語.mp3',},
		{title:'破月',artist:'ALiCE\'S EMOTiON',album:'RADIATA',cover:'http://nyandn.b0.upaiyun.com/cover/破月.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ALiCE\'S EMOTiON - 破月.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ALiCE\'S EMOTiON - 破月.mp3',},
		{title:'二言目',artist:'斎藤千和',album:'“伪物语”第二巻/かれんビー(中)【完全生産限定版】特典',cover:'http://nyandn.b0.upaiyun.com/cover/二言目.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/斎藤千和 - 二言目.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/斎藤千和 - 二言目.mp3',},
		{
          title:'白金ディスコ',
          artist:'阿良々木月火(CV：井口裕香), 神前 暁',
          album:'「偽物語」第四巻∕つきひフェニックス(上)[完全生産限定版BD特典CD]つきひフェニックス主題歌「白金ディスコ」&amp;「偽物語」劇伴音楽集 其ノ參',    
          cover:'http://nyandn.b0.upaiyun.com/cover/井口裕香 - 白金ディスコ.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/井口裕香 - 白金ディスコ.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/井口裕香 - 白金ディスコ.mp3',
		},
{title:'Prime number~君と出会える日~',artist:'大倉明日香',album:'Prime number ~ 君と出会える日 ~',cover:'http://nyandn.b0.upaiyun.com/cover/Prime number~君と出会える日~.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/大倉明日香 - Prime number~君と出会える日~.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/大倉明日香 - Prime number~君と出会える日~.mp3',},
{title:'I call your name again',artist:'中津真莉子 & 青山七海',album:'さくら荘のペットな彼女 Vol.3 スペシャルDisc Vol.3',cover:'http://nyandn.b0.upaiyun.com/cover/I call your name again.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/中津真莉子 & 青山七海 - I call your name again.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/中津真莉子 & 青山七海 - I call your name again.mp3',},
{title:'君が夢を連れてきた',artist:'ペットな彼女たち',album:'君が夢を連れてきた',cover:'http://nyandn.b0.upaiyun.com/cover/君が夢を連れてきた.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ペットな彼女たち - 君が夢を連れてきた.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ペットな彼女たち - 君が夢を連れてきた.mp3',},
{title:'Ievan Polkka (Replica ver.)',artist:'初音ミク',album:'初音ミクベスト ～impacts～',cover:'http://nyandn.b0.upaiyun.com/cover/Ievan Polkka (Replica ver.).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - Ievan Polkka (Replica ver.).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/初音ミク - Ievan Polkka (Replica ver.).mp3',},
{title:'Unfinished',artist:'Jordan Knight',album:'Unfinished',cover:'http://nyandn.b0.upaiyun.com/cover/Unfinished.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Jordan Knight - Unfinished.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Jordan Knight - Unfinished.mp3',},
{title:'sister\'s noise',artist:'fripSide',album:'sister\'s noise',cover:'http://nyandn.b0.upaiyun.com/cover/sister\'s noise.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/fripSide - sister\'s noise.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/fripSide - sister\'s noise.mp3',},
{title:'星色夜空 るざ×ゆき ver.',artist:'藤宮ゆき',album:'いえろ~ぜぶら ふぃな~れBOX SP',cover:'http://nyandn.b0.upaiyun.com/cover/星色夜空 るざ×ゆき ver..jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/藤宮ゆき - 星色夜空 るざ×ゆき ver..mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/藤宮ゆき - 星色夜空 るざ×ゆき ver..mp3',},
{title:'Bad Apple!! feat.nomico (ANIMELO SUMMER LIVE 2010 EDIT)',artist:'nomico',album:'POP | CULTURE',cover:'http://nyandn.b0.upaiyun.com/cover/Bad Apple!! feat.nomico (ANIMELO SUMMER LIVE 2010 EDIT).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/nomico - Bad Apple!! feat.nomico (ANIMELO SUMMER LIVE 2010 EDIT).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/nomico - Bad Apple!! feat.nomico (ANIMELO SUMMER LIVE 2010 EDIT).mp3',},
{title:'Fantastic future',artist:'田村ゆかり',album:'Fantastic future',cover:'http://nyandn.b0.upaiyun.com/cover/Fantastic future.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/田村ゆかり - Fantastic future.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/田村ゆかり - Fantastic future.mp3',},
{title:'涙のイエスタデー',artist:'GARNET CROW',album:'涙のイエスタデー',cover:'http://nyandn.b0.upaiyun.com/cover/涙のイエスタデー.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/GARNET CROW - 涙のイエスタデー.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/GARNET CROW - 涙のイエスタデー.mp3',},
{title:'夏を待つセイル(帆)のように',artist:'Zard',album:'星のかがやきよ/夏を待つセイル(帆)のように',cover:'http://nyandn.b0.upaiyun.com/cover/夏を待つセイル(帆)のように.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Zard - 夏を待つセイル(帆)のように.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Zard - 夏を待つセイル(帆)のように.mp3',},
{title:'キミがいれば',artist:'伊織',album:'キミがいれば',cover:'http://nyandn.b0.upaiyun.com/cover/キミがいれば.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/伊織 - キミがいれば.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/伊織 - キミがいれば.mp3',},
{title:'Time after time ~花舞う街で~ (theater version)',artist:'倉木麻衣',album:'ALL MY BEST',cover:'http://nyandn.b0.upaiyun.com/cover/Time after time ~花舞う街で~ (theater version).jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/倉木麻衣 - Time after time ~花舞う街で~ (theater version).mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/倉木麻衣 - Time after time ~花舞う街で~ (theater version).mp3',},
{title:'少女の顷に戻ったみたいに',artist:'Zard',album:'名探侦コナン テーマ曲集 ~THE BEST OF DETECTIVE CONAN~',cover:'http://nyandn.b0.upaiyun.com/cover/少女の顷に戻ったみたいに.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Zard - 少女の顷に戻ったみたいに.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Zard - 少女の顷に戻ったみたいに.mp3',},
{title:'忘れ咲き',artist:'GARNET CROW',album:'忘れ咲き',cover:'http://nyandn.b0.upaiyun.com/cover/忘れ咲き.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/GARNET CROW - 忘れ咲き.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/GARNET CROW - 忘れ咲き.mp3',},
{title:'东京テディベア',artist:'EXIT TUNES',album:'EXIT TUNES PRESENTS Vocalocluster feat.Hatsune Miku',cover:'http://nyandn.b0.upaiyun.com/cover/东京テディベア.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/EXIT TUNES - 东京テディベア.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/EXIT TUNES - 东京テディベア.mp3',},
{title:'炉心融解',artist:'VOCALOID',album:'初音ミク-Project DIVA- 2nd NONSTOP MIX COLLECTION',cover:'http://nyandn.b0.upaiyun.com/cover/炉心融解.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/VOCALOID - 炉心融解.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/VOCALOID - 炉心融解.mp3',},
{title:'虹色蝶々',artist:'黒うさP',album:'君のいる景色',cover:'http://nyandn.b0.upaiyun.com/cover/虹色蝶々.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/黒うさP - 虹色蝶々.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/黒うさP - 虹色蝶々.mp3',},
{title:'crossing field',artist:'LiSA',album:'crossing field',cover:'http://nyandn.b0.upaiyun.com/cover/crossing field.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/LiSA - crossing field.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/LiSA - crossing field.mp3',},
{title:'ルミナス',artist:'ClariS',album:'ルミナス',cover:'http://nyandn.b0.upaiyun.com/cover/ルミナス.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - ルミナス.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - ルミナス.mp3',},
{title:'コネクト',artist:'ClariS',album:'コネクト',cover:'http://nyandn.b0.upaiyun.com/cover/コネクト.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - コネクト.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - コネクト.mp3',},
{title:'reunion',artist:'ClariS',album:'reunion',cover:'http://nyandn.b0.upaiyun.com/cover/reunion.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - reunion.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - reunion.mp3',},
{title:'irony',artist:'ClariS',album:'irony',cover:'http://nyandn.b0.upaiyun.com/cover/irony.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ClariS - irony.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ClariS - irony.mp3',},
{title:'Endless Story',artist:'田村ゆかり',album:'Endless Story',cover:'http://nyandn.b0.upaiyun.com/cover/Endless Story.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/田村ゆかり - Endless Story.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/田村ゆかり - Endless Story.mp3',},
{title:'Sparkling Daydream',artist:'ZAQ',album:'Sparkling Daydream',cover:'http://nyandn.b0.upaiyun.com/cover/Sparkling Daydream.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ZAQ - Sparkling Daydream.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ZAQ - Sparkling Daydream.mp3',},
{title:'INSIDE IDENTITY',artist:'ZAQ',album:'Sparkling Daydream',cover:'http://nyandn.b0.upaiyun.com/cover/INSIDE IDENTITY.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/ZAQ - INSIDE IDENTITY.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/ZAQ - INSIDE IDENTITY.mp3',},
{title:'自由の翼',artist:'Sound Horizon',album:'自由への進撃',cover:'http://nyandn.b0.upaiyun.com/cover/自由の翼.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 自由の翼.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 自由の翼.mp3',},
{title:'红莲の弓矢',artist:'Sound Horizon',album:'自由への進撃',cover:'http://nyandn.b0.upaiyun.com/cover/红莲の弓矢.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 红莲の弓矢.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/Sound Horizon - 红莲の弓矢.mp3',},
{title:'名前のない怪物',artist:'EGOIST',album:'名前のない怪物',cover:'http://nyandn.b0.upaiyun.com/cover/名前のない怪物.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/EGOIST - 名前のない怪物.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/EGOIST - 名前のない怪物.mp3',},
{title:'Kiss(and)Love',artist:'戸松遥 & 井口裕香',album:'アニメ「桜Trick」OPテーマ『Won(*3*)Chu KissMe!』/EDテーマ『Kiss(and)Love』',cover:'http://nyandn.b0.upaiyun.com/cover/Kiss(and)Love.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/戸松遥 & 井口裕香 - Kiss(and)Love.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/戸松遥 & 井口裕香 - Kiss(and)Love.mp3',},
{title:'Won(*3*)Chu KissMe!',artist:'戸松遥 & 井口裕香 & 五十嵐裕美 & 相坂優歌 & 渕上舞 & 戸田めぐみ',album:'アニメ「桜Trick」OPテーマ『Won(*3*)Chu KissMe!』/EDテーマ『Kiss(and)Love』',cover:'http://nyandn.b0.upaiyun.com/cover/Won(*3*)Chu KissMe!.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/戸松遥 & 井口裕香 & 五十嵐裕美 & 相坂優歌 & 渕上舞 & 戸田めぐみ - Won(*3*)Chu KissMe!.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/戸松遥 & 井口裕香 & 五十嵐裕美 & 相坂優歌 & 渕上舞 & 戸田めぐみ - Won(*3*)Chu KissMe!.mp3',},
{title:'残酷な天使のテーゼ',artist:'高橋洋子',album:'残酷な天使のテーゼ/FLY ME TO THE MOON',cover:'http://nyandn.b0.upaiyun.com/cover/残酷な天使のテーゼ.jpg',mp3:'http://nyandn.b0.upaiyun.com/mp3/高橋洋子 - 残酷な天使のテーゼ.mp3',ogg:'http://nyandn.b0.upaiyun.com/mp3/高橋洋子 - 残酷な天使のテーゼ.mp3',},
		{
		title:'39',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/01 39.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/01 39.mp3',
		}, { title:'Tell Your World',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/01 Tell Your World.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/01 Tell Your World.mp3',
		}, { title:'39',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/02 39.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/02 39.mp3',
		}, { title:'みくみくにしてあげる?【してやんよ】',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/02 みくみくにしてあげる♪【してやんよ】.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/02 みくみくにしてあげる♪【してやんよ】.mp3',
		}, { title:'マトリョシカ',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/03 マトリョシカ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/03 マトリョシカ.mp3',
		}, { title:'メルト',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/03 メルト.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/03 メルト.mp3',
		}, { title:'FREELY TOMORROW',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/04 FREELY TOMORROW.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/04 FREELY TOMORROW.mp3',
		}, { title:'初音ミクの消失',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/04 初音ミクの消失.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/04 初音ミクの消失.mp3',
		}, { title:'カゲロウデイズ',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/05 カゲロウデイズ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/05 カゲロウデイズ.mp3',
		}, { title:'千本桜',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/05 千本桜.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/05 千本桜.mp3',
		}, { title:'ロミオとシンデレラ',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/06 ロミオとシンデレラ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/06 ロミオとシンデレラ.mp3',
		}, { title:'裏表ラバーズ',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/06 裏表ラバーズ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/06 裏表ラバーズ.mp3',
		}, { title:'エレクトリック?ラブ',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/07 エレクトリック・ラブ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/07 エレクトリック・ラブ.mp3',
		}, { title:'桜ノ雨',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/07 桜ノ雨.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/07 桜ノ雨.mp3',
		}, { title:'白い雪のプリンセスは',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/08 白い雪のプリンセスは.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/08 白い雪のプリンセスは.mp3',
		}, { title:'恋スルVOC@LOID',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/08 恋スルVOC@LOID.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/08 恋スルVOC@LOID.mp3',
		}, { title:'サンドリヨン(Cendrillon)',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/09 サンドリヨン(Cendrillon).mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/09 サンドリヨン(Cendrillon).mp3',
		}, { title:'よっこらせっくす',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/09 よっこらせっくす.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/09 よっこらせっくす.mp3',
		}, { title:'Nyanyanyanyanyanyanya!',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/10 Nyanyanyanyanyanyanya!.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/10 Nyanyanyanyanyanyanya!.mp3',
		}, { title:'深海少女',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/10 深海少女.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/10 深海少女.mp3',
		}, { title:'＊ハロー、プラネット。',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/11 ＊ハロー、プラネット。.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/11 ＊ハロー、プラネット。.mp3',
		}, { title:'トリノコシティ',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/11 トリノコシティ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/11 トリノコシティ.mp3',
		}, { title:'BadBye',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/12 BadBye.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/12 BadBye.mp3',
		}, { title:'エンヴィキャットウォーク',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/12 エンヴィキャットウォーク.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/12 エンヴィキャットウォーク.mp3',
		}, { title:'ネトゲ廃人シュプレヒコール',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/13 ネトゲ廃人シュプレヒコール.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/13 ネトゲ廃人シュプレヒコール.mp3',
		}, { title:'むかしむかしのきょうのぼく',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/13 むかしむかしのきょうのぼく.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/13 むかしむかしのきょうのぼく.mp3',
		}, { title:'腐れ外道とチョコレゐト',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/14 腐れ外道とチョコレゐト.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/14 腐れ外道とチョコレゐト.mp3',
		}, { title:'私の時間2012',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/14 私の時間2012.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/14 私の時間2012.mp3',
		}, { title:'二次元ドリームフィーバー',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/15 二次元ドリームフィーバー.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/15 二次元ドリームフィーバー.mp3',
		}, { title:'火葬曲',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/15 火葬曲.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/15 火葬曲.mp3',
		}, { title:'アカツキアライヴァル',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/16 アカツキアライヴァル.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/16 アカツキアライヴァル.mp3',
		}, { title:'サイハテ',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/16 サイハテ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/16 サイハテ.mp3',
		}, { title:'1925',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/17 1925.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/17 1925.mp3',
		}, { title:'はやぶさ',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/17 はやぶさ.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/17 はやぶさ.mp3',
		}, { title:'ハジメテノオト',
		artist:'初音ミク',
		album:'初音ミク 5th BIRTHDAY BEST MEMORIES',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/18 ハジメテノオト.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/18 ハジメテノオト.mp3',
		}, { title:'心拍数＃0822',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/18 心拍数＃0822.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/18 心拍数＃0822.mp3',
		}, { title:'Birthday Song for ミク',
		artist:'初音ミク',
		album:'初音ミク 5thバースデー ベスト ～impacts～',	
		cover:'http://nyandn.b0.upaiyun.com/cover/miku5th.png',
		mp3:'http://nyandn.b0.upaiyun.com/mp3/19 Birthday Song for ミク.mp3',
		ogg:'http://nyandn.b0.upaiyun.com/mp3/19 Birthday Song for ミク.mp3',
},
{
          title:'Redial',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/01 Redial.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/01 Redial.mp3',
},
{
          title:'Tell Your World',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/02 Tell Your World.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/02 Tell Your World.mp3',
},
{
          title:'Packaged',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/03 Packaged.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/03 Packaged.mp3',
},
{
          title:'ファインダー',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/04 ファインダー.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/04 ファインダー.mp3',
},
{
          title:'Light Song',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/05 Light Song.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/05 Light Song.mp3',
},
{
          title:'ストロボナイツ',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/06 ストロボナイツ.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/06 ストロボナイツ.mp3',
},
{
          title:'Yellow (Re:Dialed)',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/07 Yellow (Re_Dialed).mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/07 Yellow (Re_Dialed).mp3',
},
{
          title:'Magnetic',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/08 Magnetic.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/08 Magnetic.mp3',
},
{
          title:'Fly Out',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/09 Fly Out.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/09 Fly Out.mp3',
},
{
          title:'Weekender Girl',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/10 Weekender Girl.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/10 Weekender Girl.mp3',
},
{
          title:'Heart Beat',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/11 Heart Beat.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/11 Heart Beat.mp3',
},
{
          title:'D.E.N.P.A. (Re:edit)',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/12 D.E.N.P.A. (Re_edit).mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/12 D.E.N.P.A. (Re_edit).mp3',
},
{
          title:'our music (kzs The Beginning of The End remix)',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/13 our music (kzs The Beginning of The End remix).mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/13 our music (kzs The Beginning of The End remix).mp3',
},
{
          title:'Last Night, Good Night (Re:Dialed)',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/14 Last Night, Good Night (Re_Dialed).mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/14 Last Night, Good Night (Re_Dialed).mp3',
},
{
          title:'Tell Your World -English Version-',
          artist:'livetune feat.初音ミク',
          album:'「ReDial」',    
          cover:'http://nyandn.b0.upaiyun.com/cover/redial.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/15 Tell Your World -English Version-.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/15 Tell Your World -English Version-.mp3',
},
//===========================bk no2 ========================

//=========================bk no1===========================
{
          title:'恋は戦争',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(01) [Supercell feat. 初音ミク] 恋は戦争.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(01) [Supercell feat. 初音ミク] 恋は戦争.mp3',
},
{
          title:'ハートブレイカー',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(02) [Supercell feat. 初音ミク] ハートブレイカー.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(02) [Supercell feat. 初音ミク] ハートブレイカー.mp3',
},
{
          title:'メルト',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(03) [Supercell feat. 初音ミク] メルト.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(03) [Supercell feat. 初音ミク] メルト.mp3',
},
{
          title:'ブラック★ロックシューター',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(04) [Supercell feat. 初音ミク] ブラック★ロックシューター.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(04) [Supercell feat. 初音ミク] ブラック★ロックシューター.mp3',
},
{
          title:'くるくるまーくのすごいやつ',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(05) [Supercell feat. 初音ミク] くるくるまーくのすごいやつ.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(05) [Supercell feat. 初音ミク] くるくるまーくのすごいやつ.mp3',
},
{
          title:'ライン',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(06) [Supercell feat. 初音ミク] ライン.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(06) [Supercell feat. 初音ミク] ライン.mp3',
},
{
          title:'ワールドイズマイン',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(07) [Supercell feat. 初音ミク] ワールドイズマイン.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(07) [Supercell feat. 初音ミク] ワールドイズマイン.mp3',
},
{
          title:'初めての恋が终わる时',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(08) [Supercell feat. 初音ミク] 初めての恋が终わる时.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(08) [Supercell feat. 初音ミク] 初めての恋が终わる时.mp3',
},
{
          title:'嘘つきのパレード',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(09) [Supercell feat. 初音ミク] 嘘つきのパレード.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(09) [Supercell feat. 初音ミク] 嘘つきのパレード.mp3',
},
{
          title:'その一秒 スローモーション',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(10) [Supercell feat. 初音ミク] その一秒 スローモーション.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(10) [Supercell feat. 初音ミク] その一秒 スローモーション.mp3',
},
{
          title:'ひねくれ者',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(11) [Supercell feat. 初音ミク] ひねくれ者.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(11) [Supercell feat. 初音ミク] ひねくれ者.mp3',
},
{
          title:'またね',
          artist:'Supercell feat. 初音ミク',
          album:'Supercell feat. 初音ミク',    
          cover:'http://nyandn.b0.upaiyun.com/cover/supercell.jpg',
          mp3:'http://nyandn.b0.upaiyun.com/mp3/(12) [Supercell feat. 初音ミク] またね.mp3',
          ogg:'http://nyandn.b0.upaiyun.com/mp3/(12) [Supercell feat. 初音ミク] またね.mp3',
},
];

	if (!("Notification" in window)) {
		    //alert("This browser does not support desktop notification");
		  }
		  // Otherwise, we need to ask the user for permission
		  else if (Notification.permission !== 'denied') {
		    Notification.requestPermission(function (permission) {} );
		  }

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track

	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
		//browsernotification
		console.log(playlist[track].title);
		console.log(playlist[track].album);
		console.log(playlist[track].artist);
		notifyMe();
		document.title=playlist[track].title+' - '+playlist[track].artist
		//===================
		function notifyMe() {
			var noticontent = {
	  		body: playlist[track].artist,
	   		icon: playlist[track].cover
	  		}
		  // Let's check if the browser supports notifications
		  if (!("Notification" in window)) {
		    //alert("This browser does not support desktop notification");
		  }
		  // Let's check whether notification permissions have already been granted
		  else if (Notification.permission === "granted") {
		    // If it's okay let's create a notification
		    spawnnoti();
		  }

		  // Otherwise, we need to ask the user for permission
		  else if (Notification.permission !== 'denied') {
		    Notification.requestPermission(function (permission) {
		      // If the user accepts, let's create a notification
		      if (permission === "granted") {
		        spawnnoti();
		      }
		    });
		  }

		  // At last, if the user has denied notifications, and you 
		  // want to be respectful there is no need to bother them any more.
		  function spawnnoti()
		  {
		  	var notification = new Notification(playlist[track].title,noticontent);
		    setTimeout(notification.close.bind(notification), 20000);
		  }
		}





		//===================
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);