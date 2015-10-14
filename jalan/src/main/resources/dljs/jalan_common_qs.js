;(function(window, undefined) {

	/* Define objects */
	var App = {
		global : {},
		jal  : {},
		ana  : {},
		jr  : {}
	};

	/* Global */
	App.global = {
	};

	window.JALAN_DP_QS = App;

})(window);


/* JAL用マスタデータ */
;(function(App, window, document, undefined) {

	App.jal = {
		ken: ''
	};

	/**
	 * スムーズスクロール
	 **/
		// 都市情報データ(全国)
	App.jal.ken = new Array(47);

	// 北海道
	App.jal.ken[0] = new KenData("北海道","010000",
		new Array(
			new LrgData("札幌","010200",new Array(new LrgData("ススキノ・大通","010202"),new LrgData("北大・丘珠","010205"),new LrgData("琴似・テイネ","010208"),new LrgData("厚別・白石・豊平","010211"),new LrgData("真駒内","010214")))
			,new LrgData("定山渓","010300",new Array(new LrgData("定山渓","010302")))
			,new LrgData("小樽・キロロ・積丹","010500",new Array(new LrgData("小樽","010502"),new LrgData("余市・キロロ","010505"),new LrgData("積丹","010508")))
			,new LrgData("ニセコ・ルスツ","010800",new Array(new LrgData("ニセコ・倶知安","010802"),new LrgData("ルスツ","010805")))
			,new LrgData("洞爺・登別・苫小牧","011100",new Array(new LrgData("苫小牧","011102"),new LrgData("登別・室蘭","011105"),new LrgData("洞爺","011108")))
			,new LrgData("函館・大沼・松前","011400",new Array(new LrgData("函館・湯の川","011402"),new LrgData("大沼・長万部・江差","011405"),new LrgData("松前","011408"),new LrgData("奥尻","013508")))
			,new LrgData("稚内・留萌","011700",new Array(new LrgData("稚内","011702"),new LrgData("羽幌","011705"),new LrgData("留萌・増毛","011708")))
			,new LrgData("旭川・層雲峡","012000",new Array(new LrgData("名寄","012002"),new LrgData("旭川","012005"),new LrgData("層雲峡・天人峡","012011")))
			,new LrgData("富良野・美瑛・トマム","012100",new Array(new LrgData("美瑛","012102"),new LrgData("富良野","012105"),new LrgData("トマム","012108")))
			,new LrgData("網走・北見・知床","012300",new Array(new LrgData("サロマ・紋別","012302"),new LrgData("網走・北見","012305"),new LrgData("斜里・羅臼","012308")))
			,new LrgData("釧路・阿寒・根室・川湯・屈斜路","012600",new Array(new LrgData("釧路・阿寒","012602"),new LrgData("川湯・屈斜路","012605"),new LrgData("根室","012608")))
			,new LrgData("石狩・空知・千歳","012900",new Array(new LrgData("深川・滝川","012902"),new LrgData("石狩","012905"),new LrgData("夕張・岩見沢","012908"),new LrgData("支笏湖・千歳","012911")))
			,new LrgData("帯広・十勝","013200",new Array(new LrgData("帯広・十勝川","013202"),new LrgData("十勝・サホロ","013205")))
			,new LrgData("日高・えりも","013300",new Array(new LrgData("日高・えりも","013302")))
			,new LrgData("離島（利尻・礼文・天売・焼尻）","013500",new Array(new LrgData("利尻・礼文","013502"),new LrgData("天売・焼尻","013505")))
		)
	);

	// 青森県
	App.jal.ken[1] = new KenData("青森県","020000",
		new Array(
			new LrgData("青森","020200",new Array(new LrgData("青森・浅虫・八甲田","020202")))
			,new LrgData("弘前","020500",new Array(new LrgData("弘前・白神","020505"),new LrgData("大鰐・碇ヶ関・黒石","020511")))
			,new LrgData("十和田湖","020800",new Array(new LrgData("十和田湖","020802")))
			,new LrgData("八戸","020900",new Array(new LrgData("八戸","020902")))
			,new LrgData("下北・三沢","021100",new Array(new LrgData("三沢","021102"),new LrgData("野辺地","021105"),new LrgData("下北半島","021108")))
			,new LrgData("津軽西海岸","021400",new Array(new LrgData("津軽西海岸","021402"),new LrgData("西津軽","021405")))
			,new LrgData("津軽半島","021700",new Array(new LrgData("北津軽・五所川原","021702"),new LrgData("東津軽","021705")))
		)
	);

	// 岩手県
	App.jal.ken[2] = new KenData("岩手県","030000",
		new Array(
			new LrgData("雫石","030100",new Array(new LrgData("雫石・鶯宿","030102")))
			,new LrgData("盛岡","030200",new Array(new LrgData("盛岡・つなぎ","030202")))
			,new LrgData("安比・八幡平・二戸","030300",new Array(new LrgData("安比・八幡平・二戸","030302")))
			,new LrgData("花巻･北上･遠野","030500",new Array(new LrgData("花巻・北上・湯田","030502"),new LrgData("遠野","030505")))
			,new LrgData("三陸海岸","030800",new Array(new LrgData("釜石・大船渡","030802"),new LrgData("宮古","030805"),new LrgData("久慈","030808")))
			,new LrgData("奥州・平泉・一関","031100",new Array(new LrgData("平泉・一関","031102"),new LrgData("奥州・水沢・江刺","031105")))
		)
	);

	// 宮城県
	App.jal.ken[3] = new KenData("宮城県","040000",
		new Array(
			new LrgData("仙台","040200",new Array(new LrgData("仙台","040202"),new LrgData("秋保・作並","040205"),new LrgData("名取・岩沼","040208")))
			,new LrgData("松島・塩竈","040500",new Array(new LrgData("松島・塩竈","040502"),new LrgData("黒川","040505")))
			,new LrgData("石巻・気仙沼","040800",new Array(new LrgData("気仙沼・本吉","040802"),new LrgData("石巻・女川・牡鹿","040805")))
			,new LrgData("鳴子・大崎","041100",new Array(new LrgData("鳴子・大崎","041101")))
			,new LrgData("栗原・登米","041200",new Array(new LrgData("栗原・登米","041202")))
			,new LrgData("白石・蔵王","041400",new Array(new LrgData("白石・蔵王・遠刈田","041402"),new LrgData("角田","041405")))
		)
	);

	// 秋田県
	App.jal.ken[4] = new KenData("秋田県","050000",
		new Array(
			new LrgData("秋田","050200",new Array(new LrgData("秋田","050202")))
			,new LrgData("田沢湖・角館・大曲","050300",new Array(new LrgData("田沢湖・角館","050302"),new LrgData("大仙・大曲","050305")))
			,new LrgData("十和田湖・大館・鹿角","050500",new Array(new LrgData("大館","050502"),new LrgData("八幡平・十和田湖","050505")))
			,new LrgData("白神・男鹿","050800",new Array(new LrgData("白神・能代","050802"),new LrgData("鷹巣・阿仁・森吉","050803"),new LrgData("男鹿","050805")))
			,new LrgData("横手・鳥海","051100",new Array(new LrgData("横手・湯沢","051102"),new LrgData("鳥海・本荘・象潟","051105")))
		)
	);

	// 山形県
	App.jal.ken[5] = new KenData("山形県","060000",
		new Array(
			new LrgData("山形・蔵王・天童・上山","060200",new Array(new LrgData("山形","060202"),new LrgData("蔵王","060203"),new LrgData("天童","060205"),new LrgData("上山","060208")))
			,new LrgData("尾花沢・新庄・村山","060500",new Array(new LrgData("尾花沢・銀山","060502"),new LrgData("新庄・最上・肘折","060505"),new LrgData("東根・村山","060508")))
			,new LrgData("寒河江・月山","060800",new Array(new LrgData("寒河江","060802"),new LrgData("月山・朝日","060805")))
			,new LrgData("米沢・置賜","061100",new Array(new LrgData("米沢","061102"),new LrgData("南陽・赤湯・高畠","061105"),new LrgData("長井・置賜","061108")))
			,new LrgData("酒田・鶴岡","061400",new Array(new LrgData("酒田・遊佐","061402"),new LrgData("鶴岡・湯野浜・あつみ","061405")))
		)
	);

	// 福島県
	App.jal.ken[6] = new KenData("福島県","070000",
		new Array(
			new LrgData("福島・二本松","070200",new Array(new LrgData("福島・飯坂・土湯・高湯","070202"),new LrgData("二本松・岳・大玉","070205")))
			,new LrgData("相馬","071100",new Array(new LrgData("相馬","071102"),new LrgData("南相馬・原町","071105")))
			,new LrgData("裏磐梯・磐梯高原","071500",new Array(new LrgData("裏磐梯・五色沼・磐梯高原","071502")))
			,new LrgData("猪苗代・表磐梯","071600",new Array(new LrgData("猪苗代・表磐梯","071602"),new LrgData("猪苗代（会津）","071605")))
			,new LrgData("会津","071700",new Array(new LrgData("喜多方・熱塩・山都","071705"),new LrgData("柳津・西会津","071708"),new LrgData("会津若松・東山・芦ノ牧","071712")))
			,new LrgData("南会津","072000",new Array(new LrgData("会津高原・湯野上・南会津","072005"),new LrgData("桧枝岐・尾瀬・奥会津","072008")))
			,new LrgData("郡山","072500",new Array(new LrgData("郡山・磐梯熱海・須賀川","072502"),new LrgData("田村・三春","072505")))
			,new LrgData("白河","072800",new Array(new LrgData("白河・羽鳥湖","072802"),new LrgData("棚倉・東白川","072805")))
			,new LrgData("いわき・双葉","073200",new Array(new LrgData("双葉","073202"),new LrgData("いわき・平","073205"),new LrgData("いわき・湯本","073208"),new LrgData("いわき・小名浜","073212")))
		)
	);

	// 栃木県
	App.jal.ken[7] = new KenData("栃木県","080000",
		new Array(
			new LrgData("宇都宮・さくら","080200",new Array(new LrgData("宇都宮","080202"),new LrgData("さくら","080204")))
			,new LrgData("那須・板室","080500",new Array(new LrgData("那須・板室","080502")))
			,new LrgData("塩原・矢板・大田原・西那須野","080600",new Array(new LrgData("塩原","080602"),new LrgData("矢板・大田原","080605")))
			,new LrgData("日光・霧降高原・奥日光・中禅寺湖・今市","080800",new Array(new LrgData("日光・霧降高原","080802"),new LrgData("奥日光・中禅寺湖","080805"),new LrgData("今市","080811")))
			,new LrgData("鬼怒川・川治・湯西川・川俣","080900",new Array(new LrgData("鬼怒川・川治","080902"),new LrgData("湯西川・川俣","080905")))
			,new LrgData("佐野・小山・足利・鹿沼","081100",new Array(new LrgData("佐野・足利","081102"),new LrgData("小山","081105"),new LrgData("栃木","081108"),new LrgData("鹿沼・足尾","081111")))
			,new LrgData("馬頭・茂木・益子・真岡","081600",new Array(new LrgData("馬頭・南那須","081602"),new LrgData("益子・茂木","081605"),new LrgData("真岡","081608")))
		)
	);

	// 群馬県
	App.jal.ken[8] = new KenData("群馬県","090000",
		new Array(
			new LrgData("四万・吾妻・川原湯","090100",new Array(new LrgData("四万・吾妻・川原湯","090102")))
			,new LrgData("草津・尻焼・花敷","090200",new Array(new LrgData("草津・尻焼・花敷","090205")))
			,new LrgData("万座・嬬恋・北軽井沢","090300",new Array(new LrgData("万座・嬬恋・北軽井沢","090302")))
			,new LrgData("水上・月夜野・猿ヶ京・法師","090400",new Array(new LrgData("水上・月夜野・猿ヶ京・法師","090402")))
			,new LrgData("沼田・老神・尾瀬","090500",new Array(new LrgData("玉原・沼田・老神","090505"),new LrgData("尾瀬・片品","090508")))
			,new LrgData("赤城・桐生・渡良瀬","090800",new Array(new LrgData("赤城","090802"),new LrgData("桐生・渡良瀬・梨木","090805")))
			,new LrgData("渋川・伊香保","091100",new Array(new LrgData("渋川・伊香保","091102")))
			,new LrgData("前橋・高崎・伊勢崎・太田･榛名","091400",new Array(new LrgData("館林","091402"),new LrgData("太田","091405"),new LrgData("伊勢崎","091408"),new LrgData("前橋","091411"),new LrgData("高崎･榛名","091414")))
			,new LrgData("藤岡・碓氷・磯部・妙義","092000",new Array(new LrgData("藤岡・富岡","092002"),new LrgData("碓氷・磯部","092008"),new LrgData("多野","092011")))
		)
	);

	// 茨城県
	App.jal.ken[9] = new KenData("茨城県","100000",
		new Array(
			new LrgData("北茨城・奥久慈・日立","100200",new Array(new LrgData("北茨城","100202"),new LrgData("日立","100203"),new LrgData("久慈・袋田","100205")))
			,new LrgData("水戸・笠間","100500",new Array(new LrgData("水戸","100502"),new LrgData("笠間","100508")))
			,new LrgData("常総・結城・桜川","100600",new Array(new LrgData("下館・真壁・桜川","100602"),new LrgData("結城・古河","100605")))
			,new LrgData("つくば・牛久","100800",new Array(new LrgData("つくば","100802"),new LrgData("牛久","100805")))
			,new LrgData("霞ケ浦・土浦・鹿島・潮来","101100",new Array(new LrgData("霞ケ浦・土浦","101102"),new LrgData("潮来","101105"),new LrgData("鹿島","101402")))
			,new LrgData("大洗・ひたちなか","101400",new Array(new LrgData("大洗・ひたちなか","101405"),new LrgData("鉾田氏","101407")))
		)
	);

	// 埼玉県
	App.jal.ken[10] = new KenData("埼玉県","110000",
		new Array(
			new LrgData("川越・さいたま","110200",new Array(new LrgData("川越・所沢","110202"),new LrgData("さいたま","110205"),new LrgData("上尾","110208"),new LrgData("川口・戸田","110211")))
			,new LrgData("秩父・長瀞","110500",new Array(new LrgData("秩父","110502"),new LrgData("長瀞","110505")))
			,new LrgData("飯能","110800",new Array(new LrgData("飯能","110802"),new LrgData("東松山・森林公園・小川町","110805")))
			,new LrgData("久喜・行田","111100",new Array(new LrgData("久喜","111102"),new LrgData("行田","111105")))
			,new LrgData("本庄・熊谷","111400",new Array(new LrgData("本庄","111402"),new LrgData("熊谷・深谷","111405")))
			,new LrgData("越谷・草加","111700",new Array(new LrgData("草加","111702"),new LrgData("越谷","111705")))
		)
	);

	// 千葉県
	App.jal.ken[11] = new KenData("千葉県","120000",
		new Array(
			new LrgData("千葉・市原","120200",new Array(new LrgData("千葉","120202"),new LrgData("市原","120205")))
			,new LrgData("舞浜・浦安・船橋・幕張","120500",new Array(new LrgData("幕張","120503"),new LrgData("船橋","120505"),new LrgData("舞浜・浦安","120508")))
			,new LrgData("成田","120800",new Array(new LrgData("成田","120802"),new LrgData("印西","120805")))
			,new LrgData("松戸・柏・野田","121100",new Array(new LrgData("野田","121105"),new LrgData("松戸・柏","121108")))
			,new LrgData("佐倉・八街","121400",new Array(new LrgData("佐倉","121402"),new LrgData("八街","121405")))
			,new LrgData("九十九里・銚子","121700",new Array(new LrgData("九十九里","121702"),new LrgData("銚子","121705"),new LrgData("茂原","121708")))
			,new LrgData("木更津・君津・富津","122000",new Array(new LrgData("木更津・君津","122002"),new LrgData("富津・鋸南","122005")))
			,new LrgData("勝浦・鴨川","122300",new Array(new LrgData("勝浦・御宿","122302"),new LrgData("鴨川","122308")))
			,new LrgData("館山・南房総","122600",new Array(new LrgData("富浦・白浜・千倉","122602"),new LrgData("館山","122605")))
		)
	);

	// 東京都
	App.jal.ken[12] = new KenData("東京都","130000",
		new Array(
			new LrgData("銀座・日本橋・東京駅周辺","136200",new Array(new LrgData("銀座・晴海・築地","136202"),new LrgData("東京・神田・日本橋","136205")))
			,new LrgData("お茶の水・湯島・九段・後楽園","136500",new Array(new LrgData("お茶の水・湯島・本郷","136502"),new LrgData("九段・四谷・後楽園周辺","136505"),new LrgData("大塚・文京","136508")))
			,new LrgData("六本木・麻布・赤坂・青山","136800",new Array(new LrgData("六本木・麻布・虎ノ門","136802"),new LrgData("赤坂・溜池","136805"),new LrgData("青山","136808"),new LrgData("白金","136812")))
			,new LrgData("お台場・汐留・新橋・品川","137100",new Array(new LrgData("お台場・汐留・竹芝","137102"),new LrgData("品川・高輪・天王洲","137105"),new LrgData("新橋・芝","137108")))
			,new LrgData("上野・浅草・両国","137400",new Array(new LrgData("上野","137402"),new LrgData("浅草","137405"),new LrgData("墨田・両国","137408"),new LrgData("荒川・足立","137412")))
			,new LrgData("池袋・目白・板橋・赤羽","137700",new Array(new LrgData("池袋","137702"),new LrgData("板橋・赤羽","137705")))
			,new LrgData("新宿・中野・杉並・吉祥寺","138000",new Array(new LrgData("新宿","138002"),new LrgData("中野・杉並","138005"),new LrgData("吉祥寺・三鷹・武蔵野","138008")))
			,new LrgData("渋谷・目黒・世田谷","138300",new Array(new LrgData("渋谷","138302"),new LrgData("恵比寿・目黒・五反田","138305"),new LrgData("世田谷","138308")))
			,new LrgData("蒲田・大森・羽田周辺","138600",new Array(new LrgData("蒲田・大森・羽田周辺","138602")))
			,new LrgData("葛飾・江戸川・江東","138900",new Array(new LrgData("葛飾・江戸川","138902"),new LrgData("江東","138905")))
			,new LrgData("八王子・立川・町田・府中・調布","139200",new Array(new LrgData("調布・府中","138905"),new LrgData("立川・八王子・多摩","139205"),new LrgData("町田","139208"),new LrgData("福生・東村山・小金井","139212")))
			,new LrgData("青梅・奥多摩","139500",new Array(new LrgData("青梅","139502"),new LrgData("奥多摩","139505")))
			,new LrgData("伊豆七島・小笠原","139800",new Array(new LrgData("伊豆七島・小笠原","139802")))
		)
	);

	// 神奈川県
	App.jal.ken[13] = new KenData("神奈川県","140000",
		new Array(
			new LrgData("川崎","140100",new Array(new LrgData("川崎","140102")))
			,new LrgData("横浜","140200",new Array(new LrgData("横浜・ベイエリア","140202"),new LrgData("戸塚・港南","140208"),new LrgData("新横浜・青葉","140211")))
			,new LrgData("横須賀・三浦","140500",new Array(new LrgData("横須賀","140502"),new LrgData("三浦","140505")))
			,new LrgData("湘南・鎌倉","140800",new Array(new LrgData("逗子","140802"),new LrgData("鎌倉","140805"),new LrgData("藤沢・茅ヶ崎","140808"),new LrgData("平塚・大磯","140811")))
			,new LrgData("厚木・海老名","141100",new Array(new LrgData("海老名・大和","141102"),new LrgData("厚木・伊勢原","141105")))
			,new LrgData("相模原","141400",new Array(new LrgData("相模原","141402")))
			,new LrgData("箱根","141600",new Array(new LrgData("箱根","141602")))
			,new LrgData("湯河原・真鶴・小田原","141700",new Array(new LrgData("小田原","141705"),new LrgData("湯河原・真鶴","141708")))
			,new LrgData("足柄","142000",new Array(new LrgData("秦野","142002"),new LrgData("南足柄・上郡","142005"),new LrgData("丹沢","142008")))
		)
	);

	// 山梨県
	App.jal.ken[14] = new KenData("山梨県","150000",
		new Array(
			new LrgData("甲府・湯村・昇仙峡","150100",new Array(new LrgData("湯村","150102"),new LrgData("甲府","150105")))
			,new LrgData("石和・勝沼・塩山","150200",new Array(new LrgData("石和・勝沼・塩山","150205")))
			,new LrgData("大月・都留","150300",new Array(new LrgData("大月・都留","150302")))
			,new LrgData("山中湖・忍野","150500",new Array(new LrgData("山中湖・忍野","150502")))
			,new LrgData("河口湖・西湖・富士吉田・精進湖・本栖湖","150600",new Array(new LrgData("河口湖・西湖・富士吉田","150602"),new LrgData("精進湖・本栖湖","150605")))
			,new LrgData("下部・身延・早川","150800",new Array(new LrgData("下部・身延・早川","150802")))
			,new LrgData("南アルプス","151100",new Array(new LrgData("南アルプス・芦安・白根","151102"),new LrgData("白州・武川","151105")))
			,new LrgData("八ヶ岳・小淵沢・清里・大泉","151400",new Array(new LrgData("小淵沢","151402"),new LrgData("清里・大泉・須玉","151405"),new LrgData("韮崎","151408")))
		)
	);

	// 長野県
	App.jal.ken[15] = new KenData("長野県","160000",
		new Array(
			new LrgData("長野・戸隠・小布施","160200",new Array(new LrgData("長野・飯綱・戸隠","160202"),new LrgData("小布施","160208")))
			,new LrgData("野沢温泉・木島平・秋山郷","160500",new Array(new LrgData("秋山郷","160502"),new LrgData("木島平","160511"),new LrgData("野沢温泉","160514")))
			,new LrgData("志賀・北志賀・湯田中渋","160600",new Array(new LrgData("北志賀・竜王・奥志賀","160602"),new LrgData("湯田中・渋・志賀高原","160605")))
			,new LrgData("上田・別所・鹿教湯","160800",new Array(new LrgData("上田・別所・鹿教湯","160802")))
			,new LrgData("菅平・峰の原","160900",new Array(new LrgData("須坂・菅平・峰の原","160902")))
			,new LrgData("戸倉上山田・千曲","161100",new Array(new LrgData("戸倉上山田・千曲","161102")))
			,new LrgData("軽井沢・佐久・小諸","161400",new Array(new LrgData("軽井沢","161402"),new LrgData("佐久・小諸","161405")))
			,new LrgData("八ヶ岳・富士見・原村・野辺山・小海","161600",new Array(new LrgData("野辺山・小海","161602"),new LrgData("原村・富士見","161605")))
			,new LrgData("蓼科・白樺湖・車山・女神湖・姫木平","161800",new Array(new LrgData("蓼科・白樺湖・車山","161802"),new LrgData("女神湖・姫木平・東白樺湖","161808")))
			,new LrgData("上諏訪・下諏訪・岡谷・霧ヶ峰・美ヶ原高原","161900",new Array(new LrgData("上諏訪・下諏訪・岡谷・霧ヶ峰・美ヶ原高原","161902")))
			,new LrgData("白馬・小谷","162000",new Array(new LrgData("白馬村","162002"),new LrgData("栂池・小谷","162005")))
			,new LrgData("松本市（松本駅周辺・浅間・美ヶ原・塩尻）","162200",new Array(new LrgData("松本駅周辺","162202"),new LrgData("浅間・美ヶ原","162205"),new LrgData("塩尻・その他","162208")))
			,new LrgData("松本市（上高地・乗鞍・白骨・野麦峠）","162300",new Array(new LrgData("上高地","162302"),new LrgData("乗鞍","162303"),new LrgData("白骨","162305"),new LrgData("野麦峠","162308")))
			,new LrgData("安曇野・大町","162400",new Array(new LrgData("大町","162402"),new LrgData("安曇野・穂高","162405")))
			,new LrgData("伊那・駒ヶ根・飯田・昼神","162600",new Array(new LrgData("高遠・伊那・辰野","162602"),new LrgData("駒ヶ根","162608"),new LrgData("飯田・天竜峡","162612"),new LrgData("阿智・昼神・下伊那","162615")))
			,new LrgData("木曽","163200",new Array(new LrgData("奈良井・薮原","163202"),new LrgData("木曽・御岳","163205"),new LrgData("南木曽・妻籠・馬籠（一部岐阜県）","163208")))
			,new LrgData("斑尾・飯山・信濃町・黒姫","163500",new Array(new LrgData("斑尾・飯山","163502"),new LrgData("信濃町・黒姫","163505")))
		)
	);

	// 新潟県
	App.jal.ken[16] = new KenData("新潟県","170000",
		new Array(
			new LrgData("新潟・月岡・阿賀野川","170200",new Array(new LrgData("新潟駅周辺","170208"),new LrgData("月岡・阿賀野川・五頭・麒麟山","170212")))
			,new LrgData("瀬波・村上・岩船","170500",new Array(new LrgData("瀬波・村上","170502"),new LrgData("岩船・胎内","170505")))
			,new LrgData("燕・三条・岩室・弥彦","170600",new Array(new LrgData("燕・三条・岩室・弥彦","170602")))
			,new LrgData("柏崎・寺泊・長岡・魚沼（湯之谷）","171100",new Array(new LrgData("長岡･寺泊","171102"),new LrgData("柏崎","171105"),new LrgData("魚沼（湯之谷・奥只見）","171108")))
			,new LrgData("南魚沼・十日町・津南（六日町）","171300",new Array(new LrgData("十日町・津南・松之山","171302"),new LrgData("南魚沼（塩沢・六日町）","171305")))
			,new LrgData("湯沢・苗場","171400",new Array(new LrgData("湯沢","171408"),new LrgData("苗場・かぐら","171411")))
			,new LrgData("上越・糸魚川・妙高","171700",new Array(new LrgData("上越・妙高・鵜の浜","171702"),new LrgData("糸魚川","171705")))
			,new LrgData("佐渡","172000",new Array(new LrgData("佐渡","172002")))
		)
	);

	// 富山県
	App.jal.ken[17] = new KenData("富山県","180000",
		new Array(
			new LrgData("立山・黒部・宇奈月","180200",new Array(new LrgData("宇奈月・黒部","180202"),new LrgData("滑川・魚津","180205"),new LrgData("立山","180208")))
			,new LrgData("富山","180500",new Array(new LrgData("富山・八尾","180502")))
			,new LrgData("高岡・氷見・砺波","180800",new Array(new LrgData("氷見・高岡","180802"),new LrgData("小矢部・砺波","180805")))
		)
	);

	// 石川県
	App.jal.ken[18] = new KenData("石川県","190000",
		new Array(
			new LrgData("輪島・能登","191100",new Array(new LrgData("輪島・能登","191102")))
			,new LrgData("和倉・七尾","191400",new Array(new LrgData("和倉・七尾","191402")))
			,new LrgData("金沢・羽咋","192000",new Array(new LrgData("羽咋・かほく","192001"),new LrgData("金沢・湯涌","192001")))
			,new LrgData("白山","192300",new Array(new LrgData("白山","192302")))
			,new LrgData("加賀・小松・辰口","192600",new Array(new LrgData("粟津・小松・辰口","192602"),new LrgData("加賀","192605")))
		)
	);

	// 福井県
	App.jal.ken[19] = new KenData("福井県","200000",
		new Array(
			new LrgData("三国・あわら","200200",new Array(new LrgData("あわら","200202"),new LrgData("三国","200205")))
			,new LrgData("福井・奥越前","200300",new Array(new LrgData("福井・鯖江","200302"),new LrgData("奥越前・池田","200305")))
			,new LrgData("越前","200400",new Array(new LrgData("越前","200402")))
			,new LrgData("若狭","200500",new Array(new LrgData("敦賀・若狭","200502")))
		)
	);

	// 静岡県
	App.jal.ken[20] = new KenData("静岡県","210000",
		new Array(
			new LrgData("熱海","210200",new Array(new LrgData("熱海","210202"),new LrgData("南熱海・多賀・網代","210205")))
			,new LrgData("伊東・宇佐美・川奈","210400",new Array(new LrgData("伊東・宇佐美・川奈","210402")))
			,new LrgData("伊豆高原","210500",new Array(new LrgData("伊豆高原","210502")))
			,new LrgData("東伊豆","210800",new Array(new LrgData("大川・北川・熱川","210802"),new LrgData("片瀬・白田","210803"),new LrgData("稲取","210805"),new LrgData("河津・今井浜","210808")))
			,new LrgData("下田・白浜","211000",new Array(new LrgData("下田・白浜","211002")))
			,new LrgData("南伊豆","211100",new Array(new LrgData("弓ヶ浜","211105"),new LrgData("下賀茂","211108"),new LrgData("石廊崎","211111"),new LrgData("妻良・伊浜","211114")))
			,new LrgData("西伊豆","211400",new Array(new LrgData("三津・大瀬","211401"),new LrgData("戸田・土肥","211402"),new LrgData("堂ヶ島・宇久須","211405"),new LrgData("松崎・雲見","211408")))
			,new LrgData("中伊豆","211700",new Array(new LrgData("伊豆長岡・大仁・韮山","211702"),new LrgData("修善寺・天城湯ヶ島・中伊豆","211705")))
			,new LrgData("沼津・三島","212000",new Array(new LrgData("沼津","212002"),new LrgData("三島","212005")))
			,new LrgData("御殿場・富士","212300",new Array(new LrgData("御殿場","212302"),new LrgData("裾野","212305"),new LrgData("富士・富士宮・朝霧","212308")))
			,new LrgData("静岡・清水","212600",new Array(new LrgData("静岡","212602"),new LrgData("清水","212605")))
			,new LrgData("焼津・御前崎","212900",new Array(new LrgData("焼津","212902"),new LrgData("御前崎・牧之原","212905"),new LrgData("藤枝","212908"),new LrgData("島田","212911")))
			,new LrgData("大井川・寸又峡・川根","213200",new Array(new LrgData("大井川・寸又峡・川根","213202")))
			,new LrgData("浜松・浜名湖","213500",new Array(new LrgData("浜名湖","213508"),new LrgData("浜松・浜北","213509"),new LrgData("天竜","213511")))
			,new LrgData("磐田・袋井・掛川","213700",new Array(new LrgData("掛川","212910"),new LrgData("磐田・袋井","212912")))
		)
	);

	// 岐阜県
	App.jal.ken[21] = new KenData("岐阜県","220000",
		new Array(
			new LrgData("飛騨・高山","220200",new Array(new LrgData("飛騨古川・荘川・清見","220202"),new LrgData("飛騨高山・丹生川","220205")))
			,new LrgData("奥飛騨","220300",new Array(new LrgData("奥飛騨","220302")))
			,new LrgData("下呂・南飛騨","220500",new Array(new LrgData("下呂・南飛騨","220502")))
			,new LrgData("郡上・美濃・関","220600",new Array(new LrgData("郡上八幡・白鳥・高鷲・明宝","220602"),new LrgData("美濃・関","220605")))
			,new LrgData("恵那・多治見・可児・加茂","220800",new Array(new LrgData("恵那・中津川・瑞浪","220802"),new LrgData("多治見・土岐・加茂・可児","220805")))
			,new LrgData("岐阜・大垣・養老","221100",new Array(new LrgData("岐阜・羽島","221102"),new LrgData("大垣・養老・揖斐","221105")))
			,new LrgData("白川郷","221500",new Array(new LrgData("白川郷","221502")))
		)
	);

	// 愛知県
	App.jal.ken[22] = new KenData("愛知県","230000",
		new Array(
			new LrgData("名古屋","230200",new Array(new LrgData("名古屋駅・名古屋城周辺","230202"),new LrgData("栄・伏見・丸の内・ナゴヤドーム周辺","230203"),new LrgData("金山・大須・笠寺以南","230204")))
			,new LrgData("三河","230500",new Array(new LrgData("奥三河・新城・湯谷","230502"),new LrgData("西三河","230505"),new LrgData("豊橋・豊川","230508"),new LrgData("渥美半島・伊良湖","230511"),new LrgData("蒲郡・吉良・幡豆","230514")))
			,new LrgData("尾張・犬山・小牧","230800",new Array(new LrgData("稲沢・津島","230802"),new LrgData("犬山・小牧・一宮","230805"),new LrgData("瀬戸・日進","230808")))
			,new LrgData("知多","231100",new Array(new LrgData("知多半島","231102"),new LrgData("日間賀島","231105"),new LrgData("篠島","231108")))
		)
	);

	// 三重県
	App.jal.ken[23] = new KenData("三重県","240000",
		new Array(
			new LrgData("桑名・長島・四日市・湯の山・鈴鹿","240200",new Array(new LrgData("桑名・長島・四日市・湯の山","240202"),new LrgData("鈴鹿・亀山","240208")))
			,new LrgData("伊賀・上野・名張","240500",new Array(new LrgData("上野","240502"),new LrgData("阿山・伊賀","240505"),new LrgData("名張・赤目四十八滝・青山","240508")))
			,new LrgData("津・久居・美杉・松阪","240800",new Array(new LrgData("津","240802"),new LrgData("久居・榊原","240805"),new LrgData("白山・美杉","240808"),new LrgData("松阪","240811")))
			,new LrgData("伊勢・二見","241000",new Array(new LrgData("伊勢・二見","241002")))
			,new LrgData("鳥羽","241100",new Array(new LrgData("鳥羽","241105")))
			,new LrgData("南鳥羽","241300",new Array(new LrgData("南鳥羽","241302")))
			,new LrgData("志摩","241400",new Array(new LrgData("志摩（浜島・阿児・磯部）","241402"),new LrgData("南勢","241405"),new LrgData("志摩（志摩・大王）","241408")))
			,new LrgData("奥伊勢","241700",new Array(new LrgData("奥伊勢","241705")))
			,new LrgData("東紀州","242000",new Array(new LrgData("紀伊長島","242002"),new LrgData("尾鷲・熊野","242005")))
		)
	);

	// 滋賀県
	App.jal.ken[24] = new KenData("滋賀県","250000",
		new Array(
			new LrgData("大津","250200",new Array(new LrgData("大津","250202")))
			,new LrgData("彦根・長浜","250500",new Array(new LrgData("彦根","250502"),new LrgData("長浜","250505")))
			,new LrgData("甲賀・信楽","250800",new Array(new LrgData("甲賀・信楽","250802")))
			,new LrgData("湖西","251100",new Array(new LrgData("高島","251102")))
			,new LrgData("草津・守山・近江八幡","251400",new Array(new LrgData("草津・守山","251402"),new LrgData("近江八幡","251405")))
			,new LrgData("雄琴・堅田","251700",new Array(new LrgData("雄琴・堅田","251702")))
		)
	);

	// 京都府
	App.jal.ken[25] = new KenData("京都府","260000",
		new Array(
			new LrgData("河原町・烏丸・大宮周辺","260200",new Array(new LrgData("二条城・御所周辺","260202"),new LrgData("河原町周辺","260205"),new LrgData("烏丸通・四条通","260208")))
			,new LrgData("京都駅周辺","260500",new Array(new LrgData("京都駅前","260502"),new LrgData("京都駅近郊・山科","260505")))
			,new LrgData("大原・鞍馬・貴船","261400",new Array(new LrgData("大原・鞍馬・貴船","261405")))
			,new LrgData("嵯峨野・嵐山・高雄","262000",new Array(new LrgData("嵯峨野・嵐山・高雄","262002")))
			,new LrgData("祇園・東山・北白川周辺","262300",new Array(new LrgData("祇園・東山","262302"),new LrgData("北山・宝ヶ池","262305"),new LrgData("岡崎・北白川","262308")))
			,new LrgData("京都南部（宇治・長岡京・山崎）","263300",new Array(new LrgData("長岡京・山崎","263302"),new LrgData("宇治・京田辺","263306"),new LrgData("相楽","263309")))
			,new LrgData("湯の花・丹波・美山","263900",new Array(new LrgData("亀岡・湯の花・丹波","263902"),new LrgData("美山","263905")))
			,new LrgData("天橋立・宮津・舞鶴","264200",new Array(new LrgData("天橋立・宮津","264202"),new LrgData("舞鶴","264205")))
			,new LrgData("丹後・久美浜","264500",new Array(new LrgData("丹後","264505"),new LrgData("久美浜・小天橋","264508")))
			,new LrgData("綾部・福知山","264800",new Array(new LrgData("綾部・福知山","264802")))
		)
	);

	// 大阪府
	App.jal.ken[26] = new KenData("大阪府","270000",
		new Array(
			new LrgData("大阪北部（茨木・高槻・箕面・伊丹空港）","271400",new Array(new LrgData("吹田・豊中・伊丹空港周辺","271402"),new LrgData("池田・箕面・能勢","271405"),new LrgData("茨木・高槻・枚方","271408")))
			,new LrgData("新大阪・江坂・十三・塚本","271700",new Array(new LrgData("新大阪・江坂・十三・塚本","271702")))
			,new LrgData("大阪駅・梅田駅・福島・淀屋橋・本町","272000",new Array(new LrgData("梅田・中之島・福島・天満","272002"),new LrgData("淀屋橋・北浜・本町","272005")))
			,new LrgData("大阪ベイエリア","272300",new Array(new LrgData("ユニバーサルシティ","272302"),new LrgData("天保山・南港・住之江","272305")))
			,new LrgData("大阪城・京橋・市内東部","272600",new Array(new LrgData("京橋・鶴見緑地","272602"),new LrgData("谷町・大阪城公園","272605")))
			,new LrgData("心斎橋・なんば・四ツ橋","272900",new Array(new LrgData("心斎橋・なんば・四ツ橋","272902")))
			,new LrgData("上本町・天王寺・市内南部","273200",new Array(new LrgData("上本町・天王寺・阿倍野","273202"),new LrgData("鶴橋・平野","273205"),new LrgData("住吉・長居公園","273208")))
			,new LrgData("大阪東部(寝屋川・守口・門真・東大阪)","273500",new Array(new LrgData("東大阪・八尾","273502"),new LrgData("寝屋川・守口・門真・四条畷","273505"),new LrgData("松原・藤井寺","273508"),new LrgData("富田林・河内長野","273511")))
			,new LrgData("大阪南部（堺・岸和田・関西空港）","273800",new Array(new LrgData("堺・泉大津","273802"),new LrgData("岸和田・貝塚","273805"),new LrgData("関空・泉佐野・岬","273808")))
		)
	);

	// 兵庫県
	App.jal.ken[27] = new KenData("兵庫県","280000",
		new Array(
			new LrgData("神戸・有馬・明石","280200",new Array(new LrgData("有馬","280201"),new LrgData("六甲・北神","280202"),new LrgData("六甲アイランド","280203"),new LrgData("北野・新神戸","280204"),new LrgData("三宮・ポートアイランド","280205"),new LrgData("元町・メリケンパーク","280208"),new LrgData("ハーバーランド・神戸・新開地","280211"),new LrgData("須磨・舞子・明石","280214")))
			,new LrgData("尼崎・宝塚・三田・篠山","280500",new Array(new LrgData("尼崎・西宮・宝塚・武田尾","280502"),new LrgData("三田・篠山","280505")))
			,new LrgData("姫路・赤穂・播磨","280800",new Array(new LrgData("姫路・加古川","280802"),new LrgData("赤穂・相生・たつの","280803"),new LrgData("三木・西脇・宍粟・佐用・兵庫中部","280805")))
			,new LrgData("城崎・竹野・豊岡","281100",new Array(new LrgData("城崎","281102"),new LrgData("竹野","281105"),new LrgData("豊岡・出石","281108")))
			,new LrgData("香住・浜坂・湯村","281200",new Array(new LrgData("香住","281202"),new LrgData("浜坂","281205"),new LrgData("湯村","281208")))
			,new LrgData("神鍋・鉢伏・養父・和田山","281400",new Array(new LrgData("ハチ北高原・おじろ","281405"),new LrgData("神鍋・江原","281408"),new LrgData("ハチ高原・養父・和田山","281411")))
			,new LrgData("淡路島","281700",new Array(new LrgData("淡路","281702"),new LrgData("洲本","281704"),new LrgData("南あわじ","281705")))
		)
	);

	// 奈良県
	App.jal.ken[28] = new KenData("奈良県","290000",
		new Array(
			new LrgData("奈良・斑鳩・天理","290200",new Array(new LrgData("奈良・大和郡山","290202"),new LrgData("斑鳩・天理","290205"),new LrgData("生駒・信貴山","290208")))
			,new LrgData("飛鳥・橿原・三輪","290500",new Array(new LrgData("飛鳥・橿原・三輪","290502"),new LrgData("室生・宇陀","290505")))
			,new LrgData("吉野・奥吉野","290800",new Array(new LrgData("吉野・天川・洞川","290802"),new LrgData("奥吉野・十津川","290805")))
		)
	);

	// 和歌山県
	App.jal.ken[29] = new KenData("和歌山県","300000",
		new Array(
			new LrgData("和歌山市・加太・和歌浦","300200",new Array(new LrgData("和歌山市・加太・和歌浦","300202")))
			,new LrgData("高野山","300300",new Array(new LrgData("高野山・橋本","300302")))
			,new LrgData("有田・御坊・日高","300500",new Array(new LrgData("有田","300502"),new LrgData("御坊・日高","300505")))
			,new LrgData("白浜・龍神","300800",new Array(new LrgData("龍神","300801"),new LrgData("白浜・南部・田辺","300802")))
			,new LrgData("本宮・新宮・中辺路","301000",new Array(new LrgData("中辺路・大塔","301002"),new LrgData("本宮","301005"),new LrgData("新宮","301008")))
			,new LrgData("勝浦・串本・すさみ","301100",new Array(new LrgData("串本・すさみ","301102"),new LrgData("那智勝浦・太地","301105")))
		)
	);

	// 鳥取県
	App.jal.ken[30] = new KenData("鳥取県","310000",
		new Array(
			new LrgData("鳥取・岩美","310200",new Array(new LrgData("鳥取","310202"),new LrgData("岩美","310205"),new LrgData("八頭","310208"),new LrgData("浜村・鹿野","310211")))
			,new LrgData("倉吉・三朝・湯梨浜","310500",new Array(new LrgData("はわい・東郷","310502"),new LrgData("三朝","310505"),new LrgData("倉吉・関金","310508")))
			,new LrgData("米子・皆生・大山","310800",new Array(new LrgData("米子・皆生・境港","310802"),new LrgData("大山","310805")))
		)
	);

	// 島根県
	App.jal.ken[31] = new KenData("島根県","320000",
		new Array(
			new LrgData("松江・安来・玉造・奥出雲","320100",new Array(new LrgData("松江・美保関・玉造","320102"),new LrgData("安来","320105"),new LrgData("奥出雲・雲南","320111")))
			,new LrgData("出雲・大田・石見銀山","320400",new Array(new LrgData("出雲・大社・湯の川","320408"),new LrgData("大田・温泉津","320411")))
			,new LrgData("益田・浜田・津和野","320500",new Array(new LrgData("浜田・江津・有福","320505"),new LrgData("津和野・益田","320508")))
			,new LrgData("隠岐島","320800",new Array(new LrgData("島前","320802"),new LrgData("島後","320805")))
		)
	);

	// 岡山県
	App.jal.ken[32] = new KenData("岡山県","330000",
		new Array(
			new LrgData("岡山・玉野・牛窓","330200",new Array(new LrgData("岡山・玉野","330202"),new LrgData("牛窓・日生","330205")))
			,new LrgData("倉敷・総社・井笠","330500",new Array(new LrgData("倉敷・児島・鷲羽山","330502"),new LrgData("総社・井原・笠岡","330505")))
			,new LrgData("津山・美作三湯・蒜山","330800",new Array(new LrgData("湯原・蒜山高原","330802"),new LrgData("津山・奥津","330805"),new LrgData("美作・湯郷","330808")))
			,new LrgData("高梁・新見・吉備高原","331100",new Array(new LrgData("高梁・川上・成羽","331102"),new LrgData("新見・阿哲","331105")))
		)
	);

	// 広島県
	App.jal.ken[33] = new KenData("広島県","340000",
		new Array(
			new LrgData("福山・尾道","340300",new Array(new LrgData("福山・尾道・しまなみ","340302")))
			,new LrgData("庄原・三次・芸北","340600",new Array(new LrgData("庄原・帝釈峡・神石高原","340602"),new LrgData("三次","340605"),new LrgData("芸北","340608")))
			,new LrgData("広島・宮島","340900",new Array(new LrgData("広島","340902"),new LrgData("宮島・廿日市","340905")))
			,new LrgData("三原・竹原・東広島・呉","341100",new Array(new LrgData("三原・竹原・東広島","340305"),new LrgData("呉・江田島","340308")))
		)
	);

	// 山口県
	App.jal.ken[34] = new KenData("山口県","350000",
		new Array(
			new LrgData("岩国・柳井・周南","350300",new Array(new LrgData("岩国","350302"),new LrgData("柳井・周防大島","350305"),new LrgData("周南・湯野","350308")))
			,new LrgData("山口・秋芳","350600",new Array(new LrgData("山口・湯田・防府","350602"),new LrgData("秋芳","350605")))
			,new LrgData("萩・長門","351000",new Array(new LrgData("萩","351002"),new LrgData("長門","351005")))
			,new LrgData("下関・宇部","351300",new Array(new LrgData("宇部","351302"),new LrgData("下関・長府・川棚","351305")))
		)
	);

	// 徳島県
	App.jal.ken[35] = new KenData("徳島県","360000",
		new Array(
			new LrgData("徳島・鳴門","360200",new Array(new LrgData("徳島","360202"),new LrgData("鳴門","360205")))
			,new LrgData("阿南・日和佐・宍喰","360500",new Array(new LrgData("阿南・日和佐","360502"),new LrgData("宍喰・海南・牟岐","360505")))
			,new LrgData("大歩危・祖谷・剣山","360800",new Array(new LrgData("大歩危・祖谷・池田","360802"),new LrgData("脇町・阿波・美馬","360805"),new LrgData("剣山・那賀","360808")))
		)
	);

	// 香川県
	App.jal.ken[36] = new KenData("香川県","370000",
		new Array(
			new LrgData("高松・東讃","370200",new Array(new LrgData("高松・屋島","370202"),new LrgData("さぬき市・津田","370208"),new LrgData("引田・東かがわ","370211")))
			,new LrgData("琴平・丸亀・坂出","370500",new Array(new LrgData("琴平・善通寺","370502"),new LrgData("観音寺","370505"),new LrgData("丸亀","370507"),new LrgData("坂出・宇多津","370508")))
			,new LrgData("小豆島","370800",new Array(new LrgData("小豆島","370802")))
		)
	);

	// 愛媛県
	App.jal.ken[37] = new KenData("愛媛県","380000",
		new Array(
			new LrgData("松山・道後","380200",new Array(new LrgData("松山","380202"),new LrgData("道後","380205"),new LrgData("伊予","380208")))
			,new LrgData("今治・しまなみ海道","380500",new Array(new LrgData("今治","380502"),new LrgData("しまなみ海道","380505")))
			,new LrgData("南予・宇和島","380800",new Array(new LrgData("内子・大洲・佐田岬","380802"),new LrgData("宇和島","380805")))
			,new LrgData("新居浜・東予","381100",new Array(new LrgData("西条・東予・石鎚山","381102"),new LrgData("新居浜・伊予三島","381105")))
		)
	);

	// 高知県
	App.jal.ken[38] = new KenData("高知県","390000",
		new Array(
			new LrgData("高知・須崎・南国","390200",new Array(new LrgData("高知・春野","390202"),new LrgData("吾川・いの","390203"),new LrgData("南国・香美","390205"),new LrgData("須崎・土佐・仁淀川","390208")))
			,new LrgData("安芸・室戸","390500",new Array(new LrgData("安芸","390502"),new LrgData("室戸","390505")))
			,new LrgData("足摺・四万十","390800",new Array(new LrgData("中村・四万十・大方","390802"),new LrgData("足摺・土佐清水・宿毛","390805")))
		)
	);

	// 福岡県
	App.jal.ken[39] = new KenData("福岡県","400000",
		new Array(
			new LrgData("福岡市（博多駅周辺・天神周辺）","400100",new Array(new LrgData("福岡市（博多駅周辺・香椎・海の中道）","400102"),new LrgData("福岡市（天神周辺・百道浜）","400105")))
			,new LrgData("太宰府・宗像","400300",new Array(new LrgData("太宰府・二日市","400302"),new LrgData("宗像・玄海","400305"),new LrgData("若宮・遠賀・直方","400308")))
			,new LrgData("糸島・前原","400400",new Array(new LrgData("糸島・前原","400402")))
			,new LrgData("久留米・原鶴・筑後川","400500",new Array(new LrgData("久留米","400502"),new LrgData("原鶴・筑後川","400505")))
			,new LrgData("柳川・八女・筑後","400600",new Array(new LrgData("柳川・八女・筑後","400602")))
			,new LrgData("北九州","400800",new Array(new LrgData("北九州市（小倉・八幡・門司）","400802"),new LrgData("苅田・行橋・豊前","400805"),new LrgData("飯塚・田川","400808")))
		)
	);

	// 佐賀県
	App.jal.ken[40] = new KenData("佐賀県","410000",
		new Array(
			new LrgData("佐賀・古湯・熊の川","410200",new Array(new LrgData("佐賀・古湯・熊の川","410202"),new LrgData("鳥栖・神埼","410205")))
			,new LrgData("嬉野・武雄","410500",new Array(new LrgData("嬉野","410502"),new LrgData("武雄","410505")))
			,new LrgData("太良","410800",new Array(new LrgData("太良","410802")))
			,new LrgData("唐津・呼子","411100",new Array(new LrgData("唐津・呼子・玄海","411102")))
			,new LrgData("伊万里・有田","411300",new Array(new LrgData("伊万里・有田","411302")))
		)
	);

	// 長崎県
	App.jal.ken[41] = new KenData("長崎県","420000",
		new Array(
			new LrgData("長崎","420200",new Array(new LrgData("長崎","420202"),new LrgData("諫早・大村","420205")))
			,new LrgData("平戸・松浦・田平","420500",new Array(new LrgData("平戸","420505"),new LrgData("松浦・田平","420508")))
			,new LrgData("佐世保・ハウステンボス","420600",new Array(new LrgData("佐世保","420602"),new LrgData("ハウステンボス","420603"),new LrgData("西海・大島","420605")))
			,new LrgData("島原・雲仙・小浜","420800",new Array(new LrgData("島原","420802"),new LrgData("雲仙・小浜","420805")))
			,new LrgData("五島列島","421100",new Array(new LrgData("上五島","421102"),new LrgData("下五島","421105")))
			,new LrgData("壱岐・対馬","421400",new Array(new LrgData("壱岐","421402"),new LrgData("対馬","421405")))
		)
	);

	// 熊本県
	App.jal.ken[42] = new KenData("熊本県","430000",
		new Array(
			new LrgData("熊本","430200",new Array(new LrgData("熊本","430202"),new LrgData("宇土・益城","430214")))
			,new LrgData("玉名・山鹿・菊池","430300",new Array(new LrgData("山鹿・平山・植木","430302"),new LrgData("荒尾・玉名","430305"),new LrgData("菊池","430308")))
			,new LrgData("黒川・杖立","430400",new Array(new LrgData("杖立・わいた","430402"),new LrgData("黒川・小田・田の原・満願寺","430405")))
			,new LrgData("阿蘇","430500",new Array(new LrgData("南阿蘇","430502"),new LrgData("阿蘇・内牧","430505")))
			,new LrgData("八代・水俣・湯の児","430800",new Array(new LrgData("八代・水俣・湯の児","430802")))
			,new LrgData("人吉・球磨","430900",new Array(new LrgData("人吉・球磨","430902")))
			,new LrgData("天草","431100",new Array(new LrgData("天草上島・松島","431102"),new LrgData("天草下島・下田","431105")))
		)
	);

	// 大分県
	App.jal.ken[43] = new KenData("大分県","440000",
		new Array(
			new LrgData("大分","440200",new Array(new LrgData("大分","440202"),new LrgData("臼杵・佐伯","440205"),new LrgData("大野","440208")))
			,new LrgData("別府","440500",new Array(new LrgData("別府","440502")))
			,new LrgData("湯布院","440600",new Array(new LrgData("湯布院・湯平","440602")))
			,new LrgData("中津・国東","440800",new Array(new LrgData("中津・耶馬渓・宇佐","440802"),new LrgData("国東・杵築","440805")))
			,new LrgData("日田・天ヶ瀬・耶馬渓","441100",new Array(new LrgData("日田・天ヶ瀬","441102")))
			,new LrgData("九重・久住・竹田・長湯","441400",new Array(new LrgData("九重","441402"),new LrgData("久住・長湯・竹田","441405")))
		)
	);

	// 宮崎県
	App.jal.ken[44] = new KenData("宮崎県","450000",
		new Array(
			new LrgData("宮崎・青島・日南","450200",new Array(new LrgData("西都","450201"),new LrgData("宮崎・青島・シーガイア","450202"),new LrgData("日南海岸","450205")))
			,new LrgData("えびの・都城","450300",new Array(new LrgData("えびの・都城","450302")))
			,new LrgData("日向・延岡・高千穂","450500",new Array(new LrgData("日向","450502"),new LrgData("高千穂","450505"),new LrgData("延岡","450508")))
		)
	);

	// 鹿児島県
	App.jal.ken[45] = new KenData("鹿児島県","460000",
		new Array(
			new LrgData("鹿児島・桜島","460200",new Array(new LrgData("鹿児島・桜島","460202")))
			,new LrgData("南薩・指宿","460500",new Array(new LrgData("伊集院・東市来・吹上浜","460502"),new LrgData("指宿","460505"),new LrgData("知覧・南さつま","460508")))
			,new LrgData("垂水・大隅","460800",new Array(new LrgData("垂水・大隅","460802")))
			,new LrgData("霧島","461100",new Array(new LrgData("霧島","461102")))
			,new LrgData("北薩・川内","461400",new Array(new LrgData("出水・阿久根","461402"),new LrgData("大口","461405"),new LrgData("川内・いちき串木野","461408")))
			,new LrgData("離島","461700",new Array(new LrgData("甑島列島","461702"),new LrgData("種子島","461705"),new LrgData("屋久島","461708"),new LrgData("大隈諸島","461711"),new LrgData("吐喝喇列島","461714"),new LrgData("奄美大島","461717"),new LrgData("喜界島・徳之島・沖永良部島","461720"),new LrgData("与論島","461723")))
		)
	);

	// 沖縄県
	App.jal.ken[46] = new KenData("沖縄県","470000",
		new Array(
			new LrgData("那覇","470200",new Array(new LrgData("那覇","470202"),new LrgData("首里","470205")))
			,new LrgData("沖縄市（コザ）・北谷・宜野湾","470500",new Array(new LrgData("沖縄市（コザ）","470502"),new LrgData("北谷・嘉手納","470503"),new LrgData("宜野湾","470511")))
			,new LrgData("西海岸・東海岸","470800",new Array(new LrgData("西海岸","470802"),new LrgData("東海岸","470805")))
			,new LrgData("南部","471100",new Array(new LrgData("糸満","471102"),new LrgData("島尻","471105")))
			,new LrgData("本部・名護・国頭","471400",new Array(new LrgData("本部・伊江島・水納島","471402"),new LrgData("名護","471405"),new LrgData("国頭","471408")))
			,new LrgData("離島","471700",new Array(new LrgData("石垣島","471702"),new LrgData("西表島・小浜島・竹富島","471705"),new LrgData("宮古島","471708"),new LrgData("与那国島","471711"),new LrgData("久米島","471714"),new LrgData("伊平屋島・伊是名島","471717"),new LrgData("慶良間諸島","471720"),new LrgData("大東島","471723")))
		)
	);

	function KenData(name, code, lrg){
		this.name = name;
		this.code = code;
		this.lrg = lrg;
	}

	function LrgData(name, code,child){
		this.name = name;
		this.code = code;
		this.child = child;

	}

})(JALAN_DP_QS, window, document);

/* ANA用マスタデータ */
;(function(App, window, document, undefined) {

	App.ana = {
		ken_ana : ''
	};

	/**
	 * スムーズスクロール
	 **/

		// 都市情報データ
		// 13/12/22 01:10:52
	App.ana.ken_ana = new Array( 47);

	// 北海道
	App.ana.ken_ana[0] = new KenData("北海道","010000",
		new Array(
			new LrgData("札幌","010200",new Array(new LrgData("ススキノ・大通","010202"),new LrgData("北大・丘珠","010205"),new LrgData("琴似・テイネ","010208"),new LrgData("厚別・白石・豊平","010211"),new LrgData("真駒内","010214")))
			,new LrgData("定山渓","010300",new Array(new LrgData("定山渓","010302")))
			,new LrgData("小樽・キロロ・積丹","010500",new Array(new LrgData("小樽","010502"),new LrgData("余市・キロロ","010505"),new LrgData("積丹","010508")))
			,new LrgData("ニセコ・ルスツ","010800",new Array(new LrgData("ニセコ・倶知安","010802"),new LrgData("ルスツ","010805")))
			,new LrgData("洞爺・登別・苫小牧","011100",new Array(new LrgData("苫小牧","011102"),new LrgData("登別・室蘭","011105"),new LrgData("洞爺","011108")))
			,new LrgData("函館・大沼・松前","011400",new Array(new LrgData("函館・湯の川","011402"),new LrgData("大沼・長万部・江差","011405"),new LrgData("松前","011408"),new LrgData("奥尻","013508")))
			,new LrgData("稚内・留萌","011700",new Array(new LrgData("稚内","011702"),new LrgData("羽幌","011705"),new LrgData("留萌・増毛","011708")))
			,new LrgData("旭川・層雲峡","012000",new Array(new LrgData("名寄","012002"),new LrgData("旭川","012005"),new LrgData("層雲峡・天人峡","012011")))
			,new LrgData("富良野・美瑛・トマム","012100",new Array(new LrgData("美瑛","012102"),new LrgData("富良野","012105"),new LrgData("トマム","012108")))
			,new LrgData("網走・北見・知床","012300",new Array(new LrgData("サロマ・紋別","012302"),new LrgData("網走・北見","012305"),new LrgData("斜里・羅臼","012308")))
			,new LrgData("釧路・阿寒・根室・川湯・屈斜路","012600",new Array(new LrgData("釧路・阿寒","012602"),new LrgData("川湯・屈斜路","012605"),new LrgData("根室","012608")))
			,new LrgData("石狩・空知・千歳","012900",new Array(new LrgData("深川・滝川","012902"),new LrgData("石狩","012905"),new LrgData("夕張・岩見沢","012908"),new LrgData("支笏湖・千歳","012911")))
			,new LrgData("帯広・十勝","013200",new Array(new LrgData("帯広・十勝川","013202"),new LrgData("十勝・サホロ","013205")))
			,new LrgData("日高・えりも","013300",new Array(new LrgData("日高・えりも","013302")))
			,new LrgData("離島（利尻・礼文・天売・焼尻）","013500",new Array(new LrgData("利尻・礼文","013502"),new LrgData("天売・焼尻","013505")))
		)
	);

	// 青森県
	App.ana.ken_ana[1] = new KenData("青森県","020000",
		new Array(
			new LrgData("青森","020200",new Array(new LrgData("青森・浅虫・八甲田","020202")))
			,new LrgData("弘前","020500",new Array(new LrgData("弘前・白神","020505"),new LrgData("大鰐・碇ヶ関・黒石","020511")))
			,new LrgData("十和田湖","020800",new Array(new LrgData("十和田湖","020802")))
			,new LrgData("八戸","020900",new Array(new LrgData("八戸","020902")))
			,new LrgData("下北・三沢","021100",new Array(new LrgData("三沢","021102"),new LrgData("野辺地","021105"),new LrgData("下北半島","021108")))
			,new LrgData("津軽西海岸","021400",new Array(new LrgData("津軽西海岸","021402"),new LrgData("西津軽","021405")))
			,new LrgData("津軽半島","021700",new Array(new LrgData("北津軽・五所川原","021702"),new LrgData("東津軽","021705")))
		)
	);

	// 岩手県
	App.ana.ken_ana[2] = new KenData("岩手県","030000",
		new Array(
			new LrgData("雫石","030100",new Array(new LrgData("雫石・鶯宿","030102")))
			,new LrgData("盛岡","030200",new Array(new LrgData("盛岡・つなぎ","030202")))
			,new LrgData("安比・八幡平・二戸","030300",new Array(new LrgData("安比・八幡平・二戸","030302")))
			,new LrgData("花巻･北上･遠野","030500",new Array(new LrgData("花巻・北上・湯田","030502"),new LrgData("遠野","030505")))
			,new LrgData("三陸海岸","030800",new Array(new LrgData("釜石・大船渡","030802"),new LrgData("宮古","030805"),new LrgData("久慈","030808")))
			,new LrgData("奥州・平泉・一関","031100",new Array(new LrgData("平泉・一関","031102"),new LrgData("奥州・水沢・江刺","031105")))
		)
	);

	// 宮城県
	App.ana.ken_ana[3] = new KenData("宮城県","040000",
		new Array(
			new LrgData("仙台","040200",new Array(new LrgData("仙台","040202"),new LrgData("秋保・作並","040205"),new LrgData("名取・岩沼","040208")))
			,new LrgData("松島・塩竈","040500",new Array(new LrgData("松島・塩竈","040502"),new LrgData("黒川","040505")))
			,new LrgData("石巻・気仙沼","040800",new Array(new LrgData("気仙沼・本吉","040802"),new LrgData("石巻・女川・牡鹿","040805")))
			,new LrgData("鳴子・大崎","041100",new Array(new LrgData("鳴子・大崎","041101")))
			,new LrgData("栗原・登米","041200",new Array(new LrgData("栗原・登米","041202")))
			,new LrgData("白石・蔵王","041400",new Array(new LrgData("白石・蔵王・遠刈田","041402"),new LrgData("角田","041405")))
		)
	);

	// 秋田県
	App.ana.ken_ana[4] = new KenData("秋田県","050000",
		new Array(
			new LrgData("秋田","050200",new Array(new LrgData("秋田","050202")))
			,new LrgData("田沢湖・角館・大曲","050300",new Array(new LrgData("田沢湖・角館","050302"),new LrgData("大仙・大曲","050305")))
			,new LrgData("十和田湖・大館・鹿角","050500",new Array(new LrgData("大館","050502"),new LrgData("八幡平・十和田湖","050505")))
			,new LrgData("白神・男鹿","050800",new Array(new LrgData("白神・能代","050802"),new LrgData("鷹巣・阿仁・森吉","050803"),new LrgData("男鹿","050805")))
			,new LrgData("横手・鳥海","051100",new Array(new LrgData("横手・湯沢","051102"),new LrgData("鳥海・本荘・象潟","051105")))
		)
	);

	// 山形県
	App.ana.ken_ana[5] = new KenData("山形県","060000",
		new Array(
			new LrgData("山形・蔵王・天童・上山","060200",new Array(new LrgData("山形","060202"),new LrgData("蔵王","060203"),new LrgData("天童","060205"),new LrgData("上山","060208")))
			,new LrgData("尾花沢・新庄・村山","060500",new Array(new LrgData("尾花沢・銀山","060502"),new LrgData("新庄・最上・肘折","060505"),new LrgData("東根・村山","060508")))
			,new LrgData("寒河江・月山","060800",new Array(new LrgData("寒河江","060802"),new LrgData("月山・朝日","060805")))
			,new LrgData("米沢・置賜","061100",new Array(new LrgData("米沢","061102"),new LrgData("南陽・赤湯・高畠","061105"),new LrgData("長井・置賜","061108")))
			,new LrgData("酒田・鶴岡","061400",new Array(new LrgData("酒田・遊佐","061402"),new LrgData("鶴岡・湯野浜・あつみ","061405")))
		)
	);

	// 福島県
	App.ana.ken_ana[6] = new KenData("福島県","070000",
		new Array(
			new LrgData("福島・二本松","070200",new Array(new LrgData("福島・飯坂・土湯・高湯","070202"),new LrgData("二本松・岳・大玉","070205")))
			,new LrgData("相馬","071100",new Array(new LrgData("相馬","071102"),new LrgData("南相馬・原町","071105")))
			,new LrgData("裏磐梯・磐梯高原","071500",new Array(new LrgData("裏磐梯・五色沼・磐梯高原","071502")))
			,new LrgData("猪苗代・表磐梯","071600",new Array(new LrgData("猪苗代・表磐梯","071602"),new LrgData("猪苗代（会津）","071605")))
			,new LrgData("会津","071700",new Array(new LrgData("喜多方・熱塩・山都","071705"),new LrgData("柳津・西会津","071708"),new LrgData("会津若松・東山・芦ノ牧","071712")))
			,new LrgData("南会津","072000",new Array(new LrgData("会津高原・湯野上・南会津","072005"),new LrgData("桧枝岐・尾瀬・奥会津","072008")))
			,new LrgData("郡山","072500",new Array(new LrgData("郡山・磐梯熱海・須賀川","072502"),new LrgData("田村・三春","072505")))
			,new LrgData("白河","072800",new Array(new LrgData("白河・羽鳥湖","072802"),new LrgData("棚倉・東白川","072805")))
			,new LrgData("いわき・双葉","073200",new Array(new LrgData("双葉","073202"),new LrgData("いわき・平","073205"),new LrgData("いわき・湯本","073208"),new LrgData("いわき・小名浜","073212")))
		)
	);

	// 栃木県
	App.ana.ken_ana[7] = new KenData("栃木県","080000",
		new Array(
			new LrgData("宇都宮・さくら","080200",new Array(new LrgData("宇都宮","080202"),new LrgData("さくら","080204")))
			,new LrgData("那須・板室","080500",new Array(new LrgData("那須・板室","080502")))
			,new LrgData("塩原・矢板・大田原・西那須野","080600",new Array(new LrgData("塩原","080602"),new LrgData("矢板・大田原","080605")))
			,new LrgData("日光・霧降高原・奥日光・中禅寺湖・今市","080800",new Array(new LrgData("日光・霧降高原","080802"),new LrgData("奥日光・中禅寺湖","080805"),new LrgData("今市","080811")))
			,new LrgData("鬼怒川・川治・湯西川・川俣","080900",new Array(new LrgData("鬼怒川・川治","080902"),new LrgData("湯西川・川俣","080905")))
			,new LrgData("佐野・小山・足利・鹿沼","081100",new Array(new LrgData("佐野・足利","081102"),new LrgData("小山","081105"),new LrgData("栃木","081108"),new LrgData("鹿沼・足尾","081111")))
			,new LrgData("馬頭・茂木・益子・真岡","081600",new Array(new LrgData("馬頭・南那須","081602"),new LrgData("益子・茂木","081605"),new LrgData("真岡","081608")))
		)
	);

	// 群馬県
	App.ana.ken_ana[8] = new KenData("群馬県","090000",
		new Array(
			new LrgData("四万・吾妻・川原湯","090100",new Array(new LrgData("四万・吾妻・川原湯","090102")))
			,new LrgData("草津・尻焼・花敷","090200",new Array(new LrgData("草津・尻焼・花敷","090205")))
			,new LrgData("万座・嬬恋・北軽井沢","090300",new Array(new LrgData("万座・嬬恋・北軽井沢","090302")))
			,new LrgData("水上・月夜野・猿ヶ京・法師","090400",new Array(new LrgData("水上・月夜野・猿ヶ京・法師","090402")))
			,new LrgData("沼田・老神・尾瀬","090500",new Array(new LrgData("玉原・沼田・老神","090505"),new LrgData("尾瀬・片品","090508")))
			,new LrgData("赤城・桐生・渡良瀬","090800",new Array(new LrgData("赤城","090802"),new LrgData("桐生・渡良瀬・梨木","090805")))
			,new LrgData("渋川・伊香保","091100",new Array(new LrgData("渋川・伊香保","091102")))
			,new LrgData("前橋・高崎・伊勢崎・太田･榛名","091400",new Array(new LrgData("館林","091402"),new LrgData("太田","091405"),new LrgData("伊勢崎","091408"),new LrgData("前橋","091411"),new LrgData("高崎･榛名","091414")))
			,new LrgData("藤岡・碓氷・磯部・妙義","092000",new Array(new LrgData("藤岡・富岡","092002"),new LrgData("碓氷・磯部","092008"),new LrgData("多野","092011")))
		)
	);

	// 茨城県
	App.ana.ken_ana[9] = new KenData("茨城県","100000",
		new Array(
			new LrgData("北茨城・奥久慈・日立","100200",new Array(new LrgData("北茨城","100202"),new LrgData("日立","100203"),new LrgData("久慈・袋田","100205")))
			,new LrgData("水戸・笠間","100500",new Array(new LrgData("水戸","100502"),new LrgData("笠間","100508")))
			,new LrgData("常総・結城・桜川","100600",new Array(new LrgData("下館・真壁・桜川","100602"),new LrgData("結城・古河","100605")))
			,new LrgData("つくば・牛久","100800",new Array(new LrgData("つくば","100802"),new LrgData("牛久","100805")))
			,new LrgData("霞ケ浦・土浦・鹿島・潮来","101100",new Array(new LrgData("霞ケ浦・土浦","101102"),new LrgData("潮来","101105"),new LrgData("鹿島","101402")))
			,new LrgData("大洗・ひたちなか","101400",new Array(new LrgData("大洗・ひたちなか","101405"),new LrgData("鉾田氏","101407")))
		)
	);

	// 埼玉県
	App.ana.ken_ana[10] = new KenData("埼玉県","110000",
		new Array(
			new LrgData("川越・さいたま","110200",new Array(new LrgData("川越・所沢","110202"),new LrgData("さいたま","110205"),new LrgData("上尾","110208"),new LrgData("川口・戸田","110211")))
			,new LrgData("秩父・長瀞","110500",new Array(new LrgData("秩父","110502"),new LrgData("長瀞","110505")))
			,new LrgData("飯能","110800",new Array(new LrgData("飯能","110802"),new LrgData("東松山・森林公園・小川町","110805")))
			,new LrgData("久喜・行田","111100",new Array(new LrgData("久喜","111102"),new LrgData("行田","111105")))
			,new LrgData("本庄・熊谷","111400",new Array(new LrgData("本庄","111402"),new LrgData("熊谷・深谷","111405")))
			,new LrgData("越谷・草加","111700",new Array(new LrgData("草加","111702"),new LrgData("越谷","111705")))
		)
	);

	// 千葉県
	App.ana.ken_ana[11] = new KenData("千葉県","120000",
		new Array(
			new LrgData("千葉・市原","120200",new Array(new LrgData("千葉","120202"),new LrgData("市原","120205")))
			,new LrgData("舞浜・浦安・船橋・幕張","120500",new Array(new LrgData("幕張","120503"),new LrgData("船橋","120505"),new LrgData("舞浜・浦安","120508")))
			,new LrgData("成田","120800",new Array(new LrgData("成田","120802"),new LrgData("印西","120805")))
			,new LrgData("松戸・柏・野田","121100",new Array(new LrgData("野田","121105"),new LrgData("松戸・柏","121108")))
			,new LrgData("佐倉・八街","121400",new Array(new LrgData("佐倉","121402"),new LrgData("八街","121405")))
			,new LrgData("九十九里・銚子","121700",new Array(new LrgData("九十九里","121702"),new LrgData("銚子","121705"),new LrgData("茂原","121708")))
			,new LrgData("木更津・君津・富津","122000",new Array(new LrgData("木更津・君津","122002"),new LrgData("富津・鋸南","122005")))
			,new LrgData("勝浦・鴨川","122300",new Array(new LrgData("勝浦・御宿","122302"),new LrgData("鴨川","122308")))
			,new LrgData("館山・南房総","122600",new Array(new LrgData("富浦・白浜・千倉","122602"),new LrgData("館山","122605")))
		)
	);

	// 東京都
	App.ana.ken_ana[12] = new KenData("東京都","130000",
		new Array(
			new LrgData("銀座・日本橋・東京駅周辺","136200",new Array(new LrgData("銀座・晴海・築地","136202"),new LrgData("東京・神田・日本橋","136205")))
			,new LrgData("お茶の水・湯島・九段・後楽園","136500",new Array(new LrgData("お茶の水・湯島・本郷","136502"),new LrgData("九段・四谷・後楽園周辺","136505"),new LrgData("大塚・文京","136508")))
			,new LrgData("六本木・麻布・赤坂・青山","136800",new Array(new LrgData("六本木・麻布・虎ノ門","136802"),new LrgData("赤坂・溜池","136805"),new LrgData("青山","136808"),new LrgData("白金","136812")))
			,new LrgData("お台場・汐留・新橋・品川","137100",new Array(new LrgData("お台場・汐留・竹芝","137102"),new LrgData("品川・高輪・天王洲","137105"),new LrgData("新橋・芝","137108")))
			,new LrgData("上野・浅草・両国","137400",new Array(new LrgData("上野","137402"),new LrgData("浅草","137405"),new LrgData("墨田・両国","137408"),new LrgData("荒川・足立","137412")))
			,new LrgData("池袋・目白・板橋・赤羽","137700",new Array(new LrgData("池袋","137702"),new LrgData("板橋・赤羽","137705")))
			,new LrgData("新宿・中野・杉並・吉祥寺","138000",new Array(new LrgData("新宿","138002"),new LrgData("中野・杉並","138005"),new LrgData("吉祥寺・三鷹・武蔵野","138008")))
			,new LrgData("渋谷・目黒・世田谷","138300",new Array(new LrgData("渋谷","138302"),new LrgData("恵比寿・目黒・五反田","138305"),new LrgData("世田谷","138308")))
			,new LrgData("蒲田・大森・羽田周辺","138600",new Array(new LrgData("蒲田・大森・羽田周辺","138602")))
			,new LrgData("葛飾・江戸川・江東","138900",new Array(new LrgData("葛飾・江戸川","138902"),new LrgData("江東","138905")))
			,new LrgData("八王子・立川・町田・府中・調布","139200",new Array(new LrgData("調布・府中","138905"),new LrgData("立川・八王子・多摩","139205"),new LrgData("町田","139208"),new LrgData("福生・東村山・小金井","139212")))
			,new LrgData("青梅・奥多摩","139500",new Array(new LrgData("青梅","139502"),new LrgData("奥多摩","139505")))
			,new LrgData("伊豆七島・小笠原","139800",new Array(new LrgData("伊豆七島・小笠原","139802")))
		)
	);

	// 神奈川県
	App.ana.ken_ana[13] = new KenData("神奈川県","140000",
		new Array(
			new LrgData("川崎","140100",new Array(new LrgData("川崎","140102")))
			,new LrgData("横浜","140200",new Array(new LrgData("横浜・ベイエリア","140202"),new LrgData("戸塚・港南","140208"),new LrgData("新横浜・青葉","140211")))
			,new LrgData("横須賀・三浦","140500",new Array(new LrgData("横須賀","140502"),new LrgData("三浦","140505")))
			,new LrgData("湘南・鎌倉","140800",new Array(new LrgData("逗子","140802"),new LrgData("鎌倉","140805"),new LrgData("藤沢・茅ヶ崎","140808"),new LrgData("平塚・大磯","140811")))
			,new LrgData("厚木・海老名","141100",new Array(new LrgData("海老名・大和","141102"),new LrgData("厚木・伊勢原","141105")))
			,new LrgData("相模原","141400",new Array(new LrgData("相模原","141402")))
			,new LrgData("箱根","141600",new Array(new LrgData("箱根","141602")))
			,new LrgData("湯河原・真鶴・小田原","141700",new Array(new LrgData("小田原","141705"),new LrgData("湯河原・真鶴","141708")))
			,new LrgData("足柄","142000",new Array(new LrgData("秦野","142002"),new LrgData("南足柄・上郡","142005"),new LrgData("丹沢","142008")))
		)
	);

	// 山梨県
	App.ana.ken_ana[14] = new KenData("山梨県","150000",
		new Array(
			new LrgData("甲府・湯村・昇仙峡","150100",new Array(new LrgData("湯村","150102"),new LrgData("甲府","150105")))
			,new LrgData("石和・勝沼・塩山","150200",new Array(new LrgData("石和・勝沼・塩山","150205")))
			,new LrgData("大月・都留","150300",new Array(new LrgData("大月・都留","150302")))
			,new LrgData("山中湖・忍野","150500",new Array(new LrgData("山中湖・忍野","150502")))
			,new LrgData("河口湖・西湖・富士吉田・精進湖・本栖湖","150600",new Array(new LrgData("河口湖・西湖・富士吉田","150602"),new LrgData("精進湖・本栖湖","150605")))
			,new LrgData("下部・身延・早川","150800",new Array(new LrgData("下部・身延・早川","150802")))
			,new LrgData("南アルプス","151100",new Array(new LrgData("南アルプス・芦安・白根","151102"),new LrgData("白州・武川","151105")))
			,new LrgData("八ヶ岳・小淵沢・清里・大泉","151400",new Array(new LrgData("小淵沢","151402"),new LrgData("清里・大泉・須玉","151405"),new LrgData("韮崎","151408")))
		)
	);

	// 長野県
	App.ana.ken_ana[15] = new KenData("長野県","160000",
		new Array(
			new LrgData("長野・戸隠・小布施","160200",new Array(new LrgData("長野・飯綱・戸隠","160202"),new LrgData("小布施","160208")))
			,new LrgData("野沢温泉・木島平・秋山郷","160500",new Array(new LrgData("秋山郷","160502"),new LrgData("木島平","160511"),new LrgData("野沢温泉","160514")))
			,new LrgData("志賀・北志賀・湯田中渋","160600",new Array(new LrgData("北志賀・竜王・奥志賀","160602"),new LrgData("湯田中・渋・志賀高原","160605")))
			,new LrgData("上田・別所・鹿教湯","160800",new Array(new LrgData("上田・別所・鹿教湯","160802")))
			,new LrgData("菅平・峰の原","160900",new Array(new LrgData("須坂・菅平・峰の原","160902")))
			,new LrgData("戸倉上山田・千曲","161100",new Array(new LrgData("戸倉上山田・千曲","161102")))
			,new LrgData("軽井沢・佐久・小諸","161400",new Array(new LrgData("軽井沢","161402"),new LrgData("佐久・小諸","161405")))
			,new LrgData("八ヶ岳・富士見・原村・野辺山・小海","161600",new Array(new LrgData("野辺山・小海","161602"),new LrgData("原村・富士見","161605")))
			,new LrgData("蓼科・白樺湖・車山・女神湖・姫木平","161800",new Array(new LrgData("蓼科・白樺湖・車山","161802"),new LrgData("女神湖・姫木平・東白樺湖","161808")))
			,new LrgData("上諏訪・下諏訪・岡谷・霧ヶ峰・美ヶ原高原","161900",new Array(new LrgData("上諏訪・下諏訪・岡谷・霧ヶ峰・美ヶ原高原","161902")))
			,new LrgData("白馬・小谷","162000",new Array(new LrgData("白馬村","162002"),new LrgData("栂池・小谷","162005")))
			,new LrgData("松本市（松本駅周辺・浅間・美ヶ原・塩尻）","162200",new Array(new LrgData("松本駅周辺","162202"),new LrgData("浅間・美ヶ原","162205"),new LrgData("塩尻・その他","162208")))
			,new LrgData("松本市（上高地・乗鞍・白骨・野麦峠）","162300",new Array(new LrgData("上高地","162302"),new LrgData("乗鞍","162303"),new LrgData("白骨","162305"),new LrgData("野麦峠","162308")))
			,new LrgData("安曇野・大町","162400",new Array(new LrgData("大町","162402"),new LrgData("安曇野・穂高","162405")))
			,new LrgData("伊那・駒ヶ根・飯田・昼神","162600",new Array(new LrgData("高遠・伊那・辰野","162602"),new LrgData("駒ヶ根","162608"),new LrgData("飯田・天竜峡","162612"),new LrgData("阿智・昼神・下伊那","162615")))
			,new LrgData("木曽","163200",new Array(new LrgData("奈良井・薮原","163202"),new LrgData("木曽・御岳","163205"),new LrgData("南木曽・妻籠・馬籠（一部岐阜県）","163208")))
			,new LrgData("斑尾・飯山・信濃町・黒姫","163500",new Array(new LrgData("斑尾・飯山","163502"),new LrgData("信濃町・黒姫","163505")))
		)
	);

	// 新潟県
	App.ana.ken_ana[16] = new KenData("新潟県","170000",
		new Array(
			new LrgData("新潟・月岡・阿賀野川","170200",new Array(new LrgData("新潟駅周辺","170208"),new LrgData("月岡・阿賀野川・五頭・麒麟山","170212")))
			,new LrgData("瀬波・村上・岩船","170500",new Array(new LrgData("瀬波・村上","170502"),new LrgData("岩船・胎内","170505")))
			,new LrgData("燕・三条・岩室・弥彦","170600",new Array(new LrgData("燕・三条・岩室・弥彦","170602")))
			,new LrgData("柏崎・寺泊・長岡・魚沼（湯之谷）","171100",new Array(new LrgData("長岡･寺泊","171102"),new LrgData("柏崎","171105"),new LrgData("魚沼（湯之谷・奥只見）","171108")))
			,new LrgData("南魚沼・十日町・津南（六日町）","171300",new Array(new LrgData("十日町・津南・松之山","171302"),new LrgData("南魚沼（塩沢・六日町）","171305")))
			,new LrgData("湯沢・苗場","171400",new Array(new LrgData("湯沢","171408"),new LrgData("苗場・かぐら","171411")))
			,new LrgData("上越・糸魚川・妙高","171700",new Array(new LrgData("上越・妙高・鵜の浜","171702"),new LrgData("糸魚川","171705")))
			,new LrgData("佐渡","172000",new Array(new LrgData("佐渡","172002")))
		)
	);

	// 富山県
	App.ana.ken_ana[17] = new KenData("富山県","180000",
		new Array(
			new LrgData("立山・黒部・宇奈月","180200",new Array(new LrgData("宇奈月・黒部","180202"),new LrgData("滑川・魚津","180205"),new LrgData("立山","180208")))
			,new LrgData("富山","180500",new Array(new LrgData("富山・八尾","180502")))
			,new LrgData("高岡・氷見・砺波","180800",new Array(new LrgData("氷見・高岡","180802"),new LrgData("小矢部・砺波","180805")))
		)
	);

	// 石川県
	App.ana.ken_ana[18] = new KenData("石川県","190000",
		new Array(
			new LrgData("輪島・能登","191100",new Array(new LrgData("輪島・能登","191102")))
			,new LrgData("和倉・七尾","191400",new Array(new LrgData("和倉・七尾","191402")))
			,new LrgData("金沢・羽咋","192000",new Array(new LrgData("羽咋・かほく","192001"),new LrgData("金沢・湯涌","192001")))
			,new LrgData("白山","192300",new Array(new LrgData("白山","192302")))
			,new LrgData("加賀・小松・辰口","192600",new Array(new LrgData("粟津・小松・辰口","192602"),new LrgData("加賀","192605")))
		)
	);

	// 福井県
	App.ana.ken_ana[19] = new KenData("福井県","200000",
		new Array(
			new LrgData("三国・あわら","200200",new Array(new LrgData("あわら","200202"),new LrgData("三国","200205")))
			,new LrgData("福井・奥越前","200300",new Array(new LrgData("福井・鯖江","200302"),new LrgData("奥越前・池田","200305")))
			,new LrgData("越前","200400",new Array(new LrgData("越前","200402")))
			,new LrgData("若狭","200500",new Array(new LrgData("敦賀・若狭","200502")))
		)
	);

	// 静岡県
	App.ana.ken_ana[20] = new KenData("静岡県","210000",
		new Array(
			new LrgData("熱海","210200",new Array(new LrgData("熱海","210202"),new LrgData("南熱海・多賀・網代","210205")))
			,new LrgData("伊東・宇佐美・川奈","210400",new Array(new LrgData("伊東・宇佐美・川奈","210402")))
			,new LrgData("伊豆高原","210500",new Array(new LrgData("伊豆高原","210502")))
			,new LrgData("東伊豆","210800",new Array(new LrgData("大川・北川・熱川","210802"),new LrgData("片瀬・白田","210803"),new LrgData("稲取","210805"),new LrgData("河津・今井浜","210808")))
			,new LrgData("下田・白浜","211000",new Array(new LrgData("下田・白浜","211002")))
			,new LrgData("南伊豆","211100",new Array(new LrgData("弓ヶ浜","211105"),new LrgData("下賀茂","211108"),new LrgData("石廊崎","211111"),new LrgData("妻良・伊浜","211114")))
			,new LrgData("西伊豆","211400",new Array(new LrgData("三津・大瀬","211401"),new LrgData("戸田・土肥","211402"),new LrgData("堂ヶ島・宇久須","211405"),new LrgData("松崎・雲見","211408")))
			,new LrgData("中伊豆","211700",new Array(new LrgData("伊豆長岡・大仁・韮山","211702"),new LrgData("修善寺・天城湯ヶ島・中伊豆","211705")))
			,new LrgData("沼津・三島","212000",new Array(new LrgData("沼津","212002"),new LrgData("三島","212005")))
			,new LrgData("御殿場・富士","212300",new Array(new LrgData("御殿場","212302"),new LrgData("裾野","212305"),new LrgData("富士・富士宮・朝霧","212308")))
			,new LrgData("静岡・清水","212600",new Array(new LrgData("静岡","212602"),new LrgData("清水","212605")))
			,new LrgData("焼津・御前崎","212900",new Array(new LrgData("焼津","212902"),new LrgData("御前崎・牧之原","212905"),new LrgData("藤枝","212908"),new LrgData("島田","212911")))
			,new LrgData("大井川・寸又峡・川根","213200",new Array(new LrgData("大井川・寸又峡・川根","213202")))
			,new LrgData("浜松・浜名湖","213500",new Array(new LrgData("浜名湖","213508"),new LrgData("浜松・浜北","213509"),new LrgData("天竜","213511")))
			,new LrgData("磐田・袋井・掛川","213700",new Array(new LrgData("掛川","212910"),new LrgData("磐田・袋井","212912")))
		)
	);

	// 岐阜県
	App.ana.ken_ana[21] = new KenData("岐阜県","220000",
		new Array(
			new LrgData("飛騨・高山","220200",new Array(new LrgData("飛騨古川・荘川・清見","220202"),new LrgData("飛騨高山・丹生川","220205")))
			,new LrgData("奥飛騨","220300",new Array(new LrgData("奥飛騨","220302")))
			,new LrgData("下呂・南飛騨","220500",new Array(new LrgData("下呂・南飛騨","220502")))
			,new LrgData("郡上・美濃・関","220600",new Array(new LrgData("郡上八幡・白鳥・高鷲・明宝","220602"),new LrgData("美濃・関","220605")))
			,new LrgData("恵那・多治見・可児・加茂","220800",new Array(new LrgData("恵那・中津川・瑞浪","220802"),new LrgData("多治見・土岐・加茂・可児","220805")))
			,new LrgData("岐阜・大垣・養老","221100",new Array(new LrgData("岐阜・羽島","221102"),new LrgData("大垣・養老・揖斐","221105")))
			,new LrgData("白川郷","221500",new Array(new LrgData("白川郷","221502")))
		)
	);

	// 愛知県
	App.ana.ken_ana[22] = new KenData("愛知県","230000",
		new Array(
			new LrgData("名古屋","230200",new Array(new LrgData("名古屋駅・名古屋城周辺","230202"),new LrgData("栄・伏見・丸の内・ナゴヤドーム周辺","230203"),new LrgData("金山・大須・笠寺以南","230204")))
			,new LrgData("三河","230500",new Array(new LrgData("奥三河・新城・湯谷","230502"),new LrgData("西三河","230505"),new LrgData("豊橋・豊川","230508"),new LrgData("渥美半島・伊良湖","230511"),new LrgData("蒲郡・吉良・幡豆","230514")))
			,new LrgData("尾張・犬山・小牧","230800",new Array(new LrgData("稲沢・津島","230802"),new LrgData("犬山・小牧・一宮","230805"),new LrgData("瀬戸・日進","230808")))
			,new LrgData("知多","231100",new Array(new LrgData("知多半島","231102"),new LrgData("日間賀島","231105"),new LrgData("篠島","231108")))
		)
	);

	// 三重県
	App.ana.ken_ana[23] = new KenData("三重県","240000",
		new Array(
			new LrgData("桑名・長島・四日市・湯の山・鈴鹿","240200",new Array(new LrgData("桑名・長島・四日市・湯の山","240202"),new LrgData("鈴鹿・亀山","240208")))
			,new LrgData("伊賀・上野・名張","240500",new Array(new LrgData("上野","240502"),new LrgData("阿山・伊賀","240505"),new LrgData("名張・赤目四十八滝・青山","240508")))
			,new LrgData("津・久居・美杉・松阪","240800",new Array(new LrgData("津","240802"),new LrgData("久居・榊原","240805"),new LrgData("白山・美杉","240808"),new LrgData("松阪","240811")))
			,new LrgData("伊勢・二見","241000",new Array(new LrgData("伊勢・二見","241002")))
			,new LrgData("鳥羽","241100",new Array(new LrgData("鳥羽","241105")))
			,new LrgData("南鳥羽","241300",new Array(new LrgData("南鳥羽","241302")))
			,new LrgData("志摩","241400",new Array(new LrgData("志摩（浜島・阿児・磯部）","241402"),new LrgData("南勢","241405"),new LrgData("志摩（志摩・大王）","241408")))
			,new LrgData("奥伊勢","241700",new Array(new LrgData("奥伊勢","241705")))
			,new LrgData("東紀州","242000",new Array(new LrgData("紀伊長島","242002"),new LrgData("尾鷲・熊野","242005")))
		)
	);

	// 滋賀県
	App.ana.ken_ana[24] = new KenData("滋賀県","250000",
		new Array(
			new LrgData("大津","250200",new Array(new LrgData("大津","250202")))
			,new LrgData("彦根・長浜","250500",new Array(new LrgData("彦根","250502"),new LrgData("長浜","250505")))
			,new LrgData("甲賀・信楽","250800",new Array(new LrgData("甲賀・信楽","250802")))
			,new LrgData("湖西","251100",new Array(new LrgData("高島","251102")))
			,new LrgData("草津・守山・近江八幡","251400",new Array(new LrgData("草津・守山","251402"),new LrgData("近江八幡","251405")))
			,new LrgData("雄琴・堅田","251700",new Array(new LrgData("雄琴・堅田","251702")))
		)
	);

	// 京都府
	App.ana.ken_ana[25] = new KenData("京都府","260000",
		new Array(
			new LrgData("河原町・烏丸・大宮周辺","260200",new Array(new LrgData("二条城・御所周辺","260202"),new LrgData("河原町周辺","260205"),new LrgData("烏丸通・四条通","260208")))
			,new LrgData("京都駅周辺","260500",new Array(new LrgData("京都駅前","260502"),new LrgData("京都駅近郊・山科","260505")))
			,new LrgData("大原・鞍馬・貴船","261400",new Array(new LrgData("大原・鞍馬・貴船","261405")))
			,new LrgData("嵯峨野・嵐山・高雄","262000",new Array(new LrgData("嵯峨野・嵐山・高雄","262002")))
			,new LrgData("祇園・東山・北白川周辺","262300",new Array(new LrgData("祇園・東山","262302"),new LrgData("北山・宝ヶ池","262305"),new LrgData("岡崎・北白川","262308")))
			,new LrgData("京都南部（宇治・長岡京・山崎）","263300",new Array(new LrgData("長岡京・山崎","263302"),new LrgData("宇治・京田辺","263306"),new LrgData("相楽","263309")))
			,new LrgData("湯の花・丹波・美山","263900",new Array(new LrgData("亀岡・湯の花・丹波","263902"),new LrgData("美山","263905")))
			,new LrgData("天橋立・宮津・舞鶴","264200",new Array(new LrgData("天橋立・宮津","264202"),new LrgData("舞鶴","264205")))
			,new LrgData("丹後・久美浜","264500",new Array(new LrgData("丹後","264505"),new LrgData("久美浜・小天橋","264508")))
			,new LrgData("綾部・福知山","264800",new Array(new LrgData("綾部・福知山","264802")))
		)
	);

	// 大阪府
	App.ana.ken_ana[26] = new KenData("大阪府","270000",
		new Array(
			new LrgData("大阪北部（茨木・高槻・箕面・伊丹空港）","271400",new Array(new LrgData("吹田・豊中・伊丹空港周辺","271402"),new LrgData("池田・箕面・能勢","271405"),new LrgData("茨木・高槻・枚方","271408")))
			,new LrgData("新大阪・江坂・十三・塚本","271700",new Array(new LrgData("新大阪・江坂・十三・塚本","271702")))
			,new LrgData("大阪駅・梅田駅・福島・淀屋橋・本町","272000",new Array(new LrgData("梅田・中之島・福島・天満","272002"),new LrgData("淀屋橋・北浜・本町","272005")))
			,new LrgData("大阪ベイエリア","272300",new Array(new LrgData("ユニバーサルシティ","272302"),new LrgData("天保山・南港・住之江","272305")))
			,new LrgData("大阪城・京橋・市内東部","272600",new Array(new LrgData("京橋・鶴見緑地","272602"),new LrgData("谷町・大阪城公園","272605")))
			,new LrgData("心斎橋・なんば・四ツ橋","272900",new Array(new LrgData("心斎橋・なんば・四ツ橋","272902")))
			,new LrgData("上本町・天王寺・市内南部","273200",new Array(new LrgData("上本町・天王寺・阿倍野","273202"),new LrgData("鶴橋・平野","273205"),new LrgData("住吉・長居公園","273208")))
			,new LrgData("大阪東部(寝屋川・守口・門真・東大阪)","273500",new Array(new LrgData("東大阪・八尾","273502"),new LrgData("寝屋川・守口・門真・四条畷","273505"),new LrgData("松原・藤井寺","273508"),new LrgData("富田林・河内長野","273511")))
			,new LrgData("大阪南部（堺・岸和田・関西空港）","273800",new Array(new LrgData("堺・泉大津","273802"),new LrgData("岸和田・貝塚","273805"),new LrgData("関空・泉佐野・岬","273808")))
		)
	);

	// 兵庫県
	App.ana.ken_ana[27] = new KenData("兵庫県","280000",
		new Array(
			new LrgData("神戸・有馬・明石","280200",new Array(new LrgData("有馬","280201"),new LrgData("六甲・北神","280202"),new LrgData("六甲アイランド","280203"),new LrgData("北野・新神戸","280204"),new LrgData("三宮・ポートアイランド","280205"),new LrgData("元町・メリケンパーク","280208"),new LrgData("ハーバーランド・神戸・新開地","280211"),new LrgData("須磨・舞子・明石","280214")))
			,new LrgData("尼崎・宝塚・三田・篠山","280500",new Array(new LrgData("尼崎・西宮・宝塚・武田尾","280502"),new LrgData("三田・篠山","280505")))
			,new LrgData("姫路・赤穂・播磨","280800",new Array(new LrgData("姫路・加古川","280802"),new LrgData("赤穂・相生・たつの","280803"),new LrgData("三木・西脇・宍粟・佐用・兵庫中部","280805")))
			,new LrgData("城崎・竹野・豊岡","281100",new Array(new LrgData("城崎","281102"),new LrgData("竹野","281105"),new LrgData("豊岡・出石","281108")))
			,new LrgData("香住・浜坂・湯村","281200",new Array(new LrgData("香住","281202"),new LrgData("浜坂","281205"),new LrgData("湯村","281208")))
			,new LrgData("神鍋・鉢伏・養父・和田山","281400",new Array(new LrgData("ハチ北高原・おじろ","281405"),new LrgData("神鍋・江原","281408"),new LrgData("ハチ高原・養父・和田山","281411")))
			,new LrgData("淡路島","281700",new Array(new LrgData("淡路","281702"),new LrgData("洲本","281704"),new LrgData("南あわじ","281705")))
		)
	);

	// 奈良県
	App.ana.ken_ana[28] = new KenData("奈良県","290000",
		new Array(
			new LrgData("奈良・斑鳩・天理","290200",new Array(new LrgData("奈良・大和郡山","290202"),new LrgData("斑鳩・天理","290205"),new LrgData("生駒・信貴山","290208")))
			,new LrgData("飛鳥・橿原・三輪","290500",new Array(new LrgData("飛鳥・橿原・三輪","290502"),new LrgData("室生・宇陀","290505")))
			,new LrgData("吉野・奥吉野","290800",new Array(new LrgData("吉野・天川・洞川","290802"),new LrgData("奥吉野・十津川","290805")))
		)
	);

	// 和歌山県
	App.ana.ken_ana[29] = new KenData("和歌山県","300000",
		new Array(
			new LrgData("和歌山市・加太・和歌浦","300200",new Array(new LrgData("和歌山市・加太・和歌浦","300202")))
			,new LrgData("高野山","300300",new Array(new LrgData("高野山・橋本","300302")))
			,new LrgData("有田・御坊・日高","300500",new Array(new LrgData("有田","300502"),new LrgData("御坊・日高","300505")))
			,new LrgData("白浜・龍神","300800",new Array(new LrgData("龍神","300801"),new LrgData("白浜・南部・田辺","300802")))
			,new LrgData("本宮・新宮・中辺路","301000",new Array(new LrgData("中辺路・大塔","301002"),new LrgData("本宮","301005"),new LrgData("新宮","301008")))
			,new LrgData("勝浦・串本・すさみ","301100",new Array(new LrgData("串本・すさみ","301102"),new LrgData("那智勝浦・太地","301105")))
		)
	);

	// 鳥取県
	App.ana.ken_ana[30] = new KenData("鳥取県","310000",
		new Array(
			new LrgData("鳥取・岩美","310200",new Array(new LrgData("鳥取","310202"),new LrgData("岩美","310205"),new LrgData("八頭","310208"),new LrgData("浜村・鹿野","310211")))
			,new LrgData("倉吉・三朝・湯梨浜","310500",new Array(new LrgData("はわい・東郷","310502"),new LrgData("三朝","310505"),new LrgData("倉吉・関金","310508")))
			,new LrgData("米子・皆生・大山","310800",new Array(new LrgData("米子・皆生・境港","310802"),new LrgData("大山","310805")))
		)
	);

	// 島根県
	App.ana.ken_ana[31] = new KenData("島根県","320000",
		new Array(
			new LrgData("松江・安来・玉造・奥出雲","320100",new Array(new LrgData("松江・美保関・玉造","320102"),new LrgData("安来","320105"),new LrgData("奥出雲・雲南","320111")))
			,new LrgData("出雲・大田・石見銀山","320400",new Array(new LrgData("出雲・大社・湯の川","320408"),new LrgData("大田・温泉津","320411")))
			,new LrgData("益田・浜田・津和野","320500",new Array(new LrgData("浜田・江津・有福","320505"),new LrgData("津和野・益田","320508")))
			,new LrgData("隠岐島","320800",new Array(new LrgData("島前","320802"),new LrgData("島後","320805")))
		)
	);

	// 岡山県
	App.ana.ken_ana[32] = new KenData("岡山県","330000",
		new Array(
			new LrgData("岡山・玉野・牛窓","330200",new Array(new LrgData("岡山・玉野","330202"),new LrgData("牛窓・日生","330205")))
			,new LrgData("倉敷・総社・井笠","330500",new Array(new LrgData("倉敷・児島・鷲羽山","330502"),new LrgData("総社・井原・笠岡","330505")))
			,new LrgData("津山・美作三湯・蒜山","330800",new Array(new LrgData("湯原・蒜山高原","330802"),new LrgData("津山・奥津","330805"),new LrgData("美作・湯郷","330808")))
			,new LrgData("高梁・新見・吉備高原","331100",new Array(new LrgData("高梁・川上・成羽","331102"),new LrgData("新見・阿哲","331105")))
		)
	);

	// 広島県
	App.ana.ken_ana[33] = new KenData("広島県","340000",
		new Array(
			new LrgData("福山・尾道","340300",new Array(new LrgData("福山・尾道・しまなみ","340302")))
			,new LrgData("庄原・三次・芸北","340600",new Array(new LrgData("庄原・帝釈峡・神石高原","340602"),new LrgData("三次","340605"),new LrgData("芸北","340608")))
			,new LrgData("広島・宮島","340900",new Array(new LrgData("広島","340902"),new LrgData("宮島・廿日市","340905")))
			,new LrgData("三原・竹原・東広島・呉","341100",new Array(new LrgData("三原・竹原・東広島","340305"),new LrgData("呉・江田島","340308")))
		)
	);

	// 山口県
	App.ana.ken_ana[34] = new KenData("山口県","350000",
		new Array(
			new LrgData("岩国・柳井・周南","350300",new Array(new LrgData("岩国","350302"),new LrgData("柳井・周防大島","350305"),new LrgData("周南・湯野","350308")))
			,new LrgData("山口・秋芳","350600",new Array(new LrgData("山口・湯田・防府","350602"),new LrgData("秋芳","350605")))
			,new LrgData("萩・長門","351000",new Array(new LrgData("萩","351002"),new LrgData("長門","351005")))
			,new LrgData("下関・宇部","351300",new Array(new LrgData("宇部","351302"),new LrgData("下関・長府・川棚","351305")))
		)
	);

	// 徳島県
	App.ana.ken_ana[35] = new KenData("徳島県","360000",
		new Array(
			new LrgData("徳島・鳴門","360200",new Array(new LrgData("徳島","360202"),new LrgData("鳴門","360205")))
			,new LrgData("阿南・日和佐・宍喰","360500",new Array(new LrgData("阿南・日和佐","360502"),new LrgData("宍喰・海南・牟岐","360505")))
			,new LrgData("大歩危・祖谷・剣山","360800",new Array(new LrgData("大歩危・祖谷・池田","360802"),new LrgData("脇町・阿波・美馬","360805"),new LrgData("剣山・那賀","360808")))
		)
	);

	// 香川県
	App.ana.ken_ana[36] = new KenData("香川県","370000",
		new Array(
			new LrgData("高松・東讃","370200",new Array(new LrgData("高松・屋島","370202"),new LrgData("さぬき市・津田","370208"),new LrgData("引田・東かがわ","370211")))
			,new LrgData("琴平・丸亀・坂出","370500",new Array(new LrgData("琴平・善通寺","370502"),new LrgData("観音寺","370505"),new LrgData("丸亀","370507"),new LrgData("坂出・宇多津","370508")))
			,new LrgData("小豆島","370800",new Array(new LrgData("小豆島","370802")))
		)
	);

	// 愛媛県
	App.ana.ken_ana[37] = new KenData("愛媛県","380000",
		new Array(
			new LrgData("松山・道後","380200",new Array(new LrgData("松山","380202"),new LrgData("道後","380205"),new LrgData("伊予","380208")))
			,new LrgData("今治・しまなみ海道","380500",new Array(new LrgData("今治","380502"),new LrgData("しまなみ海道","380505")))
			,new LrgData("南予・宇和島","380800",new Array(new LrgData("内子・大洲・佐田岬","380802"),new LrgData("宇和島","380805")))
			,new LrgData("新居浜・東予","381100",new Array(new LrgData("西条・東予・石鎚山","381102"),new LrgData("新居浜・伊予三島","381105")))
		)
	);

	// 高知県
	App.ana.ken_ana[38] = new KenData("高知県","390000",
		new Array(
			new LrgData("高知・須崎・南国","390200",new Array(new LrgData("高知・春野","390202"),new LrgData("吾川・いの","390203"),new LrgData("南国・香美","390205"),new LrgData("須崎・土佐・仁淀川","390208")))
			,new LrgData("安芸・室戸","390500",new Array(new LrgData("安芸","390502"),new LrgData("室戸","390505")))
			,new LrgData("足摺・四万十","390800",new Array(new LrgData("中村・四万十・大方","390802"),new LrgData("足摺・土佐清水・宿毛","390805")))
		)
	);

	// 福岡県
	App.ana.ken_ana[39] = new KenData("福岡県","400000",
		new Array(
			new LrgData("福岡市（博多駅周辺・天神周辺）","400100",new Array(new LrgData("福岡市（博多駅周辺・香椎・海の中道）","400102"),new LrgData("福岡市（天神周辺・百道浜）","400105")))
			,new LrgData("太宰府・宗像","400300",new Array(new LrgData("太宰府・二日市","400302"),new LrgData("宗像・玄海","400305"),new LrgData("若宮・遠賀・直方","400308")))
			,new LrgData("糸島・前原","400400",new Array(new LrgData("糸島・前原","400402")))
			,new LrgData("久留米・原鶴・筑後川","400500",new Array(new LrgData("久留米","400502"),new LrgData("原鶴・筑後川","400505")))
			,new LrgData("柳川・八女・筑後","400600",new Array(new LrgData("柳川・八女・筑後","400602")))
			,new LrgData("北九州","400800",new Array(new LrgData("北九州市（小倉・八幡・門司）","400802"),new LrgData("苅田・行橋・豊前","400805"),new LrgData("飯塚・田川","400808")))
		)
	);

	// 佐賀県
	App.ana.ken_ana[40] = new KenData("佐賀県","410000",
		new Array(
			new LrgData("佐賀・古湯・熊の川","410200",new Array(new LrgData("佐賀・古湯・熊の川","410202"),new LrgData("鳥栖・神埼","410205")))
			,new LrgData("嬉野・武雄","410500",new Array(new LrgData("嬉野","410502"),new LrgData("武雄","410505")))
			,new LrgData("太良","410800",new Array(new LrgData("太良","410802")))
			,new LrgData("唐津・呼子","411100",new Array(new LrgData("唐津・呼子・玄海","411102")))
			,new LrgData("伊万里・有田","411300",new Array(new LrgData("伊万里・有田","411302")))
		)
	);

	// 長崎県
	App.ana.ken_ana[41] = new KenData("長崎県","420000",
		new Array(
			new LrgData("長崎","420200",new Array(new LrgData("長崎","420202"),new LrgData("諫早・大村","420205")))
			,new LrgData("平戸・松浦・田平","420500",new Array(new LrgData("平戸","420505"),new LrgData("松浦・田平","420508")))
			,new LrgData("佐世保・ハウステンボス","420600",new Array(new LrgData("佐世保","420602"),new LrgData("ハウステンボス","420603"),new LrgData("西海・大島","420605")))
			,new LrgData("島原・雲仙・小浜","420800",new Array(new LrgData("島原","420802"),new LrgData("雲仙・小浜","420805")))
			,new LrgData("五島列島","421100",new Array(new LrgData("上五島","421102"),new LrgData("下五島","421105")))
			,new LrgData("壱岐・対馬","421400",new Array(new LrgData("壱岐","421402"),new LrgData("対馬","421405")))
		)
	);

	// 熊本県
	App.ana.ken_ana[42] = new KenData("熊本県","430000",
		new Array(
			new LrgData("熊本","430200",new Array(new LrgData("熊本","430202"),new LrgData("宇土・益城","430214")))
			,new LrgData("玉名・山鹿・菊池","430300",new Array(new LrgData("山鹿・平山・植木","430302"),new LrgData("荒尾・玉名","430305"),new LrgData("菊池","430308")))
			,new LrgData("黒川・杖立","430400",new Array(new LrgData("杖立・わいた","430402"),new LrgData("黒川・小田・田の原・満願寺","430405")))
			,new LrgData("阿蘇","430500",new Array(new LrgData("南阿蘇","430502"),new LrgData("阿蘇・内牧","430505")))
			,new LrgData("八代・水俣・湯の児","430800",new Array(new LrgData("八代・水俣・湯の児","430802")))
			,new LrgData("人吉・球磨","430900",new Array(new LrgData("人吉・球磨","430902")))
			,new LrgData("天草","431100",new Array(new LrgData("天草上島・松島","431102"),new LrgData("天草下島・下田","431105")))
		)
	);

	// 大分県
	App.ana.ken_ana[43] = new KenData("大分県","440000",
		new Array(
			new LrgData("大分","440200",new Array(new LrgData("大分","440202"),new LrgData("臼杵・佐伯","440205"),new LrgData("大野","440208")))
			,new LrgData("別府","440500",new Array(new LrgData("別府","440502")))
			,new LrgData("湯布院","440600",new Array(new LrgData("湯布院・湯平","440602")))
			,new LrgData("中津・国東","440800",new Array(new LrgData("中津・耶馬渓・宇佐","440802"),new LrgData("国東・杵築","440805")))
			,new LrgData("日田・天ヶ瀬・耶馬渓","441100",new Array(new LrgData("日田・天ヶ瀬","441102")))
			,new LrgData("九重・久住・竹田・長湯","441400",new Array(new LrgData("九重","441402"),new LrgData("久住・長湯・竹田","441405")))
		)
	);

	// 宮崎県
	App.ana.ken_ana[44] = new KenData("宮崎県","450000",
		new Array(
			new LrgData("宮崎・青島・日南","450200",new Array(new LrgData("西都","450201"),new LrgData("宮崎・青島・シーガイア","450202"),new LrgData("日南海岸","450205")))
			,new LrgData("えびの・都城","450300",new Array(new LrgData("えびの・都城","450302")))
			,new LrgData("日向・延岡・高千穂","450500",new Array(new LrgData("日向","450502"),new LrgData("高千穂","450505"),new LrgData("延岡","450508")))
		)
	);

	// 鹿児島県
	App.ana.ken_ana[45] = new KenData("鹿児島県","460000",
		new Array(
			new LrgData("鹿児島・桜島","460200",new Array(new LrgData("鹿児島・桜島","460202")))
			,new LrgData("南薩・指宿","460500",new Array(new LrgData("伊集院・東市来・吹上浜","460502"),new LrgData("指宿","460505"),new LrgData("知覧・南さつま","460508")))
			,new LrgData("垂水・大隅","460800",new Array(new LrgData("垂水・大隅","460802")))
			,new LrgData("霧島","461100",new Array(new LrgData("霧島","461102")))
			,new LrgData("北薩・川内","461400",new Array(new LrgData("出水・阿久根","461402"),new LrgData("大口","461405"),new LrgData("川内・いちき串木野","461408")))
			,new LrgData("離島","461700",new Array(new LrgData("甑島列島","461702"),new LrgData("種子島","461705"),new LrgData("屋久島","461708"),new LrgData("大隈諸島","461711"),new LrgData("吐喝喇列島","461714"),new LrgData("奄美大島","461717"),new LrgData("喜界島・徳之島・沖永良部島","461720"),new LrgData("与論島","461723")))
		)
	);

	// 沖縄県
	App.ana.ken_ana[46] = new KenData("沖縄県","470000",
		new Array(
			new LrgData("那覇","470200",new Array(new LrgData("那覇","470202"),new LrgData("首里","470205")))
			,new LrgData("沖縄市（コザ）・北谷・宜野湾","470500",new Array(new LrgData("沖縄市（コザ）","470502"),new LrgData("北谷・嘉手納","470503"),new LrgData("宜野湾","470511")))
			,new LrgData("西海岸・東海岸","470800",new Array(new LrgData("西海岸","470802"),new LrgData("東海岸","470805")))
			,new LrgData("南部","471100",new Array(new LrgData("糸満","471102"),new LrgData("島尻","471105")))
			,new LrgData("本部・名護・国頭","471400",new Array(new LrgData("本部・伊江島・水納島","471402"),new LrgData("名護","471405"),new LrgData("国頭","471408")))
			,new LrgData("離島","471700",new Array(new LrgData("石垣島","471702"),new LrgData("西表島・小浜島・竹富島","471705"),new LrgData("宮古島","471708"),new LrgData("与那国島","471711"),new LrgData("久米島","471714"),new LrgData("伊平屋島・伊是名島","471717"),new LrgData("慶良間諸島","471720"),new LrgData("大東島","471723")))
		)
	);


	function KenData(name, code, lrg){
		this.name = name;
		this.code = code;
		this.lrg = lrg;
	}

	function LrgData(name, code,child){
		this.name = name;
		this.code = code;
		this.child = child;
	}

})(JALAN_DP_QS, window, document);


/* JR用マスタデータ */
;(function(App, window, document, undefined) {

	App.jr = {
		mst   : '',
		mst2  : '',
		arr   : '',
		dep   : '',
		dst   : '',
		kenjr : ''
	};

	/**
	 * スムーズスクロール
	 **/

	App.jr.mst2 = new Array(
		new arrData("北海道","01")
		,new arrData("東北","02")
		,new arrData("関東","03")
		,new arrData("甲信越","04")
		,new arrData("東海","05")
		,new arrData("北陸","06")
		,new arrData("近畿","07")
		,new arrData("中国","08")
		,new arrData("四国","09")
		,new arrData("九州","10")
	);


	// 出発地データ
	App.jr.arr = new Array(9);

	// 北海道
	App.jr.arr[0] = new makeArr("北海道","01",
		new Array(
			new depData("北海道","1")
			,new depData("東北","11")
			,new depData("首都圏","31")
			,new depData("関西","56")
		)
	);

	// 東北
	App.jr.arr[1] = new makeArr("東北","02",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
		)
	);

	// 関東
	App.jr.arr[2] = new makeArr("関東","03",
		new Array(
			new depData("東北","11")
			,new depData("甲信越","26")
			,new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	// 甲信越
	App.jr.arr[3] = new makeArr("甲信越","04",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	// 東海
	App.jr.arr[4] = new makeArr("東海","05",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	// 北陸
	App.jr.arr[5] = new makeArr("北陸","06",
		new Array(
			new depData("首都圏","31")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("九州","81")
		)
	);

	// 近畿
	App.jr.arr[6] = new makeArr("近畿","07",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	// 中国
	App.jr.arr[7] = new makeArr("中国","08",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	// 四国
	App.jr.arr[8] = new makeArr("四国","09",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("九州","81")
		)
	);

	// 九州
	App.jr.arr[9] = new makeArr("九州","10",
		new Array(
			new depData("首都圏","31")
			,new depData("北陸","46")
			,new depData("中部","41")
			,new depData("関西","56")
			,new depData("中国","61")
			,new depData("四国","71")
			,new depData("九州","81")
		)
	);

	App.jr.mst = new Array(
		new depData("北海道","1")
		,new depData("東北","11")
		,new depData("首都圏","31")
		,new depData("甲信越","26")
		,new depData("北陸","46")
		,new depData("中部","41")
		,new depData("関西","56")
		,new depData("中国","61")
		,new depData("四国","71")
		,new depData("九州","81")
	);


	// 出発地データ
	App.jr.dep = new Array(10);

	// 北海道
	App.jr.dep[0] = new makeDep("北海道","1",
		new Array(
			new dstData("北海道","01")
		)
	);

	// 東北
	App.jr.dep[1] = new makeDep("東北","11",
		new Array(
			new dstData("北海道","01")
			,new dstData("関東","03")
		)
	);

	// 首都圏
	App.jr.dep[2] = new makeDep("首都圏","31",
		new Array(
			new dstData("北海道","01")
			,new dstData("東北","02")
			,new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("北陸","06")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 甲信越
	App.jr.dep[3] = new makeDep("甲信越","26",
		new Array(
			new dstData("関東","03")
		)
	);

	// 北陸
	App.jr.dep[4] = new makeDep("北陸","46",
		new Array(
			new dstData("東北","02")
			,new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 中部
	App.jr.dep[5] = new makeDep("中部","41",
		new Array(
			new dstData("東北","02")
			,new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("北陸","06")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 関西
	App.jr.dep[6] = new makeDep("関西","56",
		new Array(
			new dstData("北海道","01")
			,new dstData("東北","02")
			,new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("北陸","06")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 中国
	App.jr.dep[7] = new makeDep("中国","61",
		new Array(
			new dstData("東北","02")
			,new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("北陸","06")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 四国
	App.jr.dep[8] = new makeDep("四国","71",
		new Array(
			new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			//			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);

	// 九州
	App.jr.dep[9] = new makeDep("九州","81",
		new Array(
			new dstData("関東","03")
			,new dstData("甲信越","04")
			,new dstData("北陸","06")
			,new dstData("東海","05")
			,new dstData("近畿","07")
			,new dstData("中国","08")
			,new dstData("四国","09")
			,new dstData("九州","10")
		)
	);


	// 到着地データ
	App.jr.dst = new Array(10);

	// 北海道
	App.jr.dst["01"] = new makeDst("北海道","01",
		new Array(
			new kenData("北海道","01")
		)
	);

	// 東北
	App.jr.dst["02"] = new makeDst("東北","02",
		new Array(
			new kenData("青森","02")
			,new kenData("岩手","03")
			,new kenData("宮城","04")
			,new kenData("秋田","05")
			,new kenData("山形","06")
			,new kenData("福島","07")
		)
	);

	// 関東
	App.jr.dst["03"] = new makeDst("関東","03",
		new Array(
			new kenData("茨城","08")
			,new kenData("栃木","09")
			,new kenData("群馬","10")
			,new kenData("埼玉","11")
			,new kenData("千葉","12")
			,new kenData("東京","13")
			,new kenData("神奈川","14")
		)
	);

	// 甲信越
	App.jr.dst["04"] = new makeDst("甲信越","04",
		new Array(
			new kenData("新潟","15")
			,new kenData("山梨","19")
			,new kenData("長野","20")
		)
	);

	// 北陸
	App.jr.dst["06"] = new makeDst("北陸","06",
		new Array(
			new kenData("富山","16")
			,new kenData("石川","17")
			,new kenData("福井","18")
		)
	);

	// 東海
	App.jr.dst["05"] = new makeDst("東海","05",
		new Array(
			new kenData("岐阜","21")
			,new kenData("静岡","22")
			,new kenData("愛知","23")
			,new kenData("三重","24")
		)
	);

	// 近畿
	App.jr.dst["07"] = new makeDst("近畿","07",
		new Array(
			new kenData("滋賀","25")
			,new kenData("京都","26")
			,new kenData("大阪","27")
			,new kenData("兵庫","28")
			,new kenData("奈良","29")
			,new kenData("和歌山","30")
		)
	);

	// 中国
	App.jr.dst["08"] = new makeDst("中国","08",
		new Array(
			new kenData("鳥取","31")
			,new kenData("島根","32")
			,new kenData("岡山","33")
			,new kenData("広島","34")
			,new kenData("山口","35")
		)
	);

	// 四国
	App.jr.dst["09"] = new makeDst("四国","09",
		new Array(
			new kenData("徳島","36")
			,new kenData("香川","37")
			,new kenData("愛媛","38")
			,new kenData("高知","39")
		)
	);

	// 九州
	App.jr.dst["10"] = new makeDst("九州","10",
		new Array(
			new kenData("福岡","40")
			,new kenData("佐賀","41")
			,new kenData("長崎","42")
			,new kenData("熊本","43")
			,new kenData("大分","44")
			,new kenData("宮崎","45")
			,new kenData("鹿児島","46")
		)
	);



	App.jr.kenjr = new Array(47);

	// 北海道
	App.jr.kenjr["01"] = new makeKen("北海道","01",
		new Array(
			new areaData("札幌・定山渓","110")
			,new areaData("小樽・キロロ","111")
			,new areaData("ニセコ・ルスツ","109")
			,new areaData("函館・湯の川・大沼・松前","108")
			,new areaData("帯広・十勝・襟裳岬","104")
			,new areaData("旭川・層雲峡","105")
			,new areaData("富良野・サホロ・トマム","106")
			,new areaData("釧路・阿寒・屈斜路・川湯","103")
			,new areaData("網走・知床・佐呂間","102")
			,new areaData("洞爺湖・登別・苫小牧・千歳","107")
			,new areaData("稚内・利尻・礼文","101")
		)
	);

	// 青森県
	App.jr.kenjr["02"] = new makeKen("青森県","02",
		new Array(
			new areaData("青森・浅虫","117")
			,new areaData("十和田湖","114")
			,new areaData("八戸","113")
			,new areaData("津軽半島・西海岸","115")
			,new areaData("弘前・大鰐","116")
			,new areaData("むつ・野辺地・三沢","112")
		)
	);

	// 岩手県
	App.jr.kenjr["03"] = new makeKen("岩手県","03",
		new Array(
			new areaData("盛岡・鶯宿・つなぎ","126")
			,new areaData("三陸海岸","123")
			,new areaData("平泉・一関","124")
			,new areaData("花巻温泉","125")
			,new areaData("安比・八幡平","127")
		)
	);

	// 宮城県
	App.jr.kenjr["04"] = new makeKen("宮城県","04",
		new Array(
			new areaData("仙台","135")
			,new areaData("石巻・気仙沼","133")
			,new areaData("松島・塩釜","134")
			,new areaData("鎌先・小原","136")
			,new areaData("秋保・作並","137")
			,new areaData("鳴子","138")
		)
	);

	// 秋田県
	App.jr.kenjr["05"] = new makeKen("秋田県","05",
		new Array(
			new areaData("秋田","121")
			,new areaData("大湯・湯瀬・大館","118")
			,new areaData("田沢湖","119")
			,new areaData("横手","120")
			,new areaData("男鹿","122")
		)
	);

	// 山形県
	App.jr.kenjr["06"] = new makeKen("山形県","06",
		new Array(
			new areaData("山形","129")
			,new areaData("酒田・鶴岡・温海","132")
			,new areaData("米沢","131")
			,new areaData("天童・東根","128")
			,new areaData("上の山・蔵王","130")
		)
	);

	// 福島県
	App.jr.kenjr["07"] = new makeKen("福島県","07",
		new Array(
			new areaData("福島・飯坂","139")
			,new areaData("郡山・岳・磐梯熱海","140")
			,new areaData("白河・いわき","141")
			,new areaData("芦ノ牧・会津高原","142")
			,new areaData("猪苗代・裏磐梯・東山","143")
		)
	);

	// 茨城県
	App.jr.kenjr["08"] = new makeKen("茨城県","08",
		new Array(
			new areaData("日立・袋田・五浦","173")
			,new areaData("水戸・大洗","174")
			,new areaData("鹿島・潮来","175")
			,new areaData("つくば・土浦","176")
		)
	);

	// 栃木県
	App.jr.kenjr["09"] = new makeKen("栃木県","09",
		new Array(
			new areaData("宇都宮","158")
			,new areaData("那須・塩原","157")
			,new areaData("小山・足利","159")
			,new areaData("日光","160")
			,new areaData("鬼怒川・川治・湯西川","161")
		)
	);

	// 群馬県
	App.jr.kenjr["10"] = new makeKen("群馬県","10",
		new Array(
			new areaData("前橋・高崎","167")
			,new areaData("伊香保","165")
			,new areaData("水上・尾瀬・老神","162")
			,new areaData("四万・猿ケ京","163")
			,new areaData("草津・万座","164")
			,new areaData("磯部・妙義","166")
			,new areaData("軽井沢","168")
		)
	);

	// 埼玉県
	App.jr.kenjr["11"] = new makeKen("埼玉県","11",
		new Array(
			new areaData("さいたま","170")
			,new areaData("熊谷・川越・所沢","171")
			,new areaData("草加・越谷","169")
			,new areaData("秩父・長瀞","172")
		)
	);

	// 千葉県
	App.jr.kenjr["12"] = new makeKen("千葉県","12",
		new Array(
			new areaData("舞浜・浦安","180")
			,new areaData("柏・松戸・野田","177")
			,new areaData("成田","178")
			,new areaData("幕張・津田沼・船橋","179")
			,new areaData("館山・白浜・千倉・木更津","181")
			,new areaData("勝浦・小湊・鴨川","182")
			,new areaData("犬吠埼・九十九里","183")
			,new areaData("千葉・市原","184")
		)
	);

	// 東京都
	App.jr.kenjr["13"] = new makeKen("東京都","13",
		new Array(
			new areaData("東京・銀座","188")
			,new areaData("品川・大森・蒲田・羽田","190")
			,new areaData("お台場・汐留・赤坂・六本木","189")
			,new areaData("新宿・渋谷","191")
			,new areaData("池袋・大塚","185")
			,new areaData("上野・浅草・お茶ノ水","186")
			,new areaData("阿佐ヶ谷・中野","192")
			,new areaData("両国・葛西・錦糸町","187")
			,new areaData("吉祥寺・立川・八王子・多摩","193")
			,new areaData("伊豆七島・小笠原","194")
		)
	);

	// 神奈川県
	App.jr.kenjr["14"] = new makeKen("神奈川県","14",
		new Array(
			new areaData("横浜・新横浜","196")
			,new areaData("横須賀・城ヶ島・三浦","197")
			,new areaData("鎌倉・湘南","198")
			,new areaData("小田原・湯河原","199")
			,new areaData("厚木・飯山温泉","200")
			,new areaData("箱根","201")
			,new areaData("川崎・鶴見","195")
		)
	);

	// 新潟県
	App.jr.kenjr["15"] = new makeKen("新潟県","15",
		new Array(
			new areaData("新潟・岩室・弥彦","144")
			,new areaData("瀬波・月岡","145")
			,new areaData("塩沢・越後湯沢・六日町","146")
			,new areaData("直江津・妙高・赤倉","147")
			,new areaData("佐渡","148")
		)
	);

	// 富山県
	App.jr.kenjr["16"] = new makeKen("富山県","16",
		new Array(
			new areaData("富山","232")
			,new areaData("立山・黒部・宇奈月","231")
			,new areaData("高岡・氷見・砺波","233")
		)
	);

	// 石川県
	App.jr.kenjr["17"] = new makeKen("石川県","17",
		new Array(
			new areaData("金沢","235")
			,new areaData("和倉・輪島・羽咋","234")
			,new areaData("加賀温泉","236")
		)
	);

	// 福井県
	App.jr.kenjr["18"] = new makeKen("福井県","18",
		new Array(
			new areaData("若狭・敦賀","239")
			,new areaData("福井・越前","238")
			,new areaData("あわら・勝山・東尋坊","237")
		)
	);

	// 山梨県
	App.jr.kenjr["19"] = new makeKen("山梨県","19",
		new Array(
			new areaData("石和・山梨市","204")
			,new areaData("甲府・湯村","203")
			,new areaData("清里・小淵沢･八ヶ岳","202")
			,new areaData("下部・西山","205")
			,new areaData("河口湖・富士五湖","206")
		)
	);

	// 長野県
	App.jr.kenjr["20"] = new makeKen("長野県","20",
		new Array(
			new areaData("長野","151")
			,new areaData("松本・上高地・白骨・浅間","155")
			,new areaData("野沢温泉・斑尾","149")
			,new areaData("志賀高原・湯田中・渋","150")
			,new areaData("上田・戸倉上山田・軽井沢","152")
			,new areaData("諏訪・蓼科・白樺湖","153")
			,new areaData("木曽・飯田・昼神","154")
			,new areaData("大町・白馬","156")
		)
	);

	// 岐阜県
	App.jr.kenjr["21"] = new makeKen("岐阜県","21",
		new Array(
			new areaData("飛騨・高山","218")
			,new areaData("下呂・郡上","219")
			,new areaData("恵那・中津川","220")
			,new areaData("岐阜・大垣","221")
		)
	);

	// 静岡県
	App.jr.kenjr["22"] = new makeKen("静岡県","22",
		new Array(
			new areaData("静岡・清水","207")
			,new areaData("焼津・掛川・御前崎","216")
			,new areaData("熱海・伊豆山","209")
			,new areaData("伊東","210")
			,new areaData("堂ヶ島・土肥・西伊豆","215")
			,new areaData("浜松・舘山寺","217")
			,new areaData("長岡・修善寺・中伊豆","211")
			,new areaData("城ヶ崎・伊豆高原","212")
			,new areaData("熱川・稲取・東伊豆","213")
			,new areaData("下田・南伊豆","214")
			,new areaData("富士・沼津・三島","208")
		)
	);

	// 愛知県
	App.jr.kenjr["23"] = new makeKen("愛知県","23",
		new Array(
			new areaData("名古屋市内","223")
			,new areaData("西浦・蒲郡・豊橋","225")
			,new areaData("知多","224")
			,new areaData("犬山・一宮","222")
		)
	);

	// 三重県
	App.jr.kenjr["24"] = new makeKen("三重県","24",
		new Array(
			new areaData("伊勢・鳥羽・相差","228")
			,new areaData("賢島・志摩・合歓の郷","229")
			,new areaData("長島・四日市・鈴鹿","226")
			,new areaData("津・松阪・青山高原","227")
			,new areaData("紀伊長島","230")
		)
	);

	// 滋賀県
	App.jr.kenjr["25"] = new makeKen("滋賀県","25",
		new Array(
			new areaData("大津・おごと","243")
			,new areaData("草津・近江八幡","242")
			,new areaData("長浜・彦根","241")
			,new areaData("近江今津・マキノ","240")
		)
	);

	// 京都府
	App.jr.kenjr["26"] = new makeKen("京都府","26",
		new Array(
			new areaData("京都駅周辺","249")
			,new areaData("京都市中心部","248")
			,new areaData("祇園・東山","250")
			,new areaData("嵐山","251")
			,new areaData("伏見・山科","252")
			,new areaData("宇治","253")
			,new areaData("丹後","244")
			,new areaData("天橋立・舞鶴","245")
			,new areaData("亀岡・福知山・湯の花","246")
			,new areaData("高雄・鞍馬・大原","247")
		)
	);

	// 大阪府
	App.jr.kenjr["27"] = new makeKen("大阪府","27",
		new Array(
			new areaData("大阪キタ","264")
			,new areaData("新大阪","263")
			,new areaData("大阪北部","262")
			,new areaData("大阪ミナミ","265")
			,new areaData("京橋","266")
			,new areaData("天王寺・上本町","267")
			,new areaData("南港・ユニバーサルシティ","268")
			,new areaData("大阪東部","269")
			,new areaData("大阪南部","270")
		)
	);

	// 兵庫県
	App.jr.kenjr["28"] = new makeKen("兵庫県","28",
		new Array(
			new areaData("神戸・三宮","276")
			,new areaData("明石・西脇","278")
			,new areaData("姫路・赤穂","279")
			,new areaData("有馬","275")
			,new areaData("尼崎・三田・宝塚","274")
			,new areaData("西神・須磨","277")
			,new areaData("城崎・竹野","272")
			,new areaData("鉢高原","273")
			,new areaData("淡路島","280")
			,new areaData("香住・湯村・神鍋","271")
		)
	);

	// 奈良県
	App.jr.kenjr["29"] = new makeKen("奈良県","29",
		new Array(
			new areaData("奈良・生駒","254")
			,new areaData("長谷寺・橿原","255")
			,new areaData("吉野・十津川","256")
		)
	);

	// 和歌山県
	App.jr.kenjr["30"] = new makeKen("和歌山県","30",
		new Array(
			new areaData("白浜・田辺","260")
			,new areaData("和歌山","257")
			,new areaData("高野山","258")
			,new areaData("有田・御坊","259")
			,new areaData("串本・勝浦","261")
		)
	);

	// 鳥取県
	App.jr.kenjr["31"] = new makeKen("鳥取県","31",
		new Array(
			new areaData("鳥取","283")
			,new areaData("三朝・はわい・東郷","282")
			,new areaData("皆生・米子・大山","281")
		)
	);

	// 島根県
	App.jr.kenjr["32"] = new makeKen("島根県","32",
		new Array(
			new areaData("隠岐","287")
			,new areaData("松江・玉造・出雲","288")
			,new areaData("津和野・有福","289")
		)
	);

	// 岡山県
	App.jr.kenjr["33"] = new makeKen("岡山県","33",
		new Array(
			new areaData("岡山・玉野・牛窓","285")
			,new areaData("倉敷・総社・笠岡","286")
			,new areaData("湯原・奥津・湯郷","284")
		)
	);

	// 広島県
	App.jr.kenjr["34"] = new makeKen("広島県","34",
		new Array(
			new areaData("広島・宮島","291")
			,new areaData("三次・帝釈峡","290")
			,new areaData("福山・尾道・呉・鞆の浦","292")
		)
	);

	// 山口県
	App.jr.kenjr["35"] = new makeKen("山口県","35",
		new Array(
			new areaData("下関・宇部","294")
			,new areaData("山口・防府・秋吉台・湯田","295")
			,new areaData("岩国・徳山","296")
			,new areaData("萩・長門","293")
		)
	);

	// 徳島県
	App.jr.kenjr["36"] = new makeKen("徳島県","36",
		new Array(
			new areaData("鳴門・徳島","300")
			,new areaData("祖谷・大歩危","301")
		)
	);

	// 香川県
	App.jr.kenjr["37"] = new makeKen("香川県","37",
		new Array(
			new areaData("高松","297")
			,new areaData("丸亀・琴平","298")
			,new areaData("小豆島","299")
		)
	);

	// 愛媛県
	App.jr.kenjr["38"] = new makeKen("愛媛県","38",
		new Array(
			new areaData("松山・道後","305")
			,new areaData("今治・新居浜","306")
			,new areaData("宇和島・八幡浜","307")
		)
	);

	// 高知県
	App.jr.kenjr["39"] = new makeKen("高知県","39",
		new Array(
			new areaData("高知","302")
			,new areaData("室戸・安芸","303")
			,new areaData("足摺・四万十","304")
		)
	);

	// 福岡県
	App.jr.kenjr["40"] = new makeKen("福岡県","40",
		new Array(
			new areaData("博多駅前","309")
			,new areaData("中州・天神・福岡","308")
			,new areaData("門司・小倉","310")
			,new areaData("久留米・原鶴","311")
		)
	);

	// 佐賀県
	App.jr.kenjr["41"] = new makeKen("佐賀県","41",
		new Array(
			new areaData("佐賀・鳥栖","325")
			,new areaData("唐津・伊万里・呼子","326")
			,new areaData("嬉野・武雄・太良","327")
		)
	);

	// 長崎県
	App.jr.kenjr["42"] = new makeKen("長崎県","42",
		new Array(
			new areaData("長崎・稲佐山","328")
			,new areaData("佐世保・平戸・ハウステンボス","329")
			,new areaData("島原・雲仙","330")
			,new areaData("壱岐・対馬・五島","331")
		)
	);

	// 熊本県
	App.jr.kenjr["43"] = new makeKen("熊本県","43",
		new Array(
			new areaData("熊本","320")
			,new areaData("菊池・山鹿","321")
			,new areaData("天草","323")
			,new areaData("阿蘇・黒川・杖立","322")
			,new areaData("八代・人吉","324")
		)
	);

	// 大分県
	App.jr.kenjr["44"] = new makeKen("大分県","44",
		new Array(
			new areaData("別府・鉄輪","316")
			,new areaData("湯布院","315")
			,new areaData("大分","312")
			,new areaData("日田・天ヶ瀬・九重","314")
			,new areaData("中津・杵築・国東","313")
		)
	);

	// 宮崎県
	App.jr.kenjr["45"] = new makeKen("宮崎県","45",
		new Array(
			new areaData("宮崎・日南・青島","317")
			,new areaData("高千穂・延岡・日向","318")
			,new areaData("都城・えびの","319")
		)
	);

	// 鹿児島県
	App.jr.kenjr["46"] = new makeKen("鹿児島県","46",
		new Array(
			new areaData("鹿児島・桜島","332")
			,new areaData("霧島","334")
			,new areaData("出水・市比野","333")
			,new areaData("指宿・開聞","335")
			,new areaData("鹿屋","336")
			,new areaData("屋久島・種子島・奄美大島・与論島","337")
		)
	);


	function arrData(name, code) {
		this.name = name;
		this.code = code;
	}

	function makeArr(name, code, dep) {
		this.name = name;
		this.code = code;
		this.dep = dep;
	}

	function depData(name, code) {
		this.name = name;
		this.code = code;
	}

	function makeDep(name, code, dst) {
		this.name = name;
		this.code = code;
		this.dst = dst;
	}

	function dstData(name, code) {
		this.name = name;
		this.code = code;
	}

	function makeDst(name, code, kenjr) {
		this.name = name;
		this.code = code;
		this.kenjr = kenjr;
	}

	function kenData(name, code) {
		this.name = name;
		this.code = code;
	}

	function makeKen(name, code, area) {
		this.name = name;
		this.code = code;
		this.area = area;
	}

	function areaData(name, code) {
		this.name = name;
		this.code = code;
	}


	App.jr.onLoadDep = function(fm, index) {
		listLen = App.jr.mst.length;
		fm.Departure.length = listLen + 1;
		for (var i = 0; i < listLen; i++) {
			fm.Departure.options[i + 1].text  = App.jr.mst[i].name;
			fm.Departure.options[i + 1].value = App.jr.mst[i].code;
		}
		fm.Departure.selectedIndex = index;
		App.jr.onChangeDep(fm);
	}
	App.jr.onChangeDep = function(fm) {
		var listLen = 0;
		var selectDep = fm.Departure.selectedIndex;

		if (selectDep != 0) {
			listLen = App.jr.dep[selectDep - 1].dst.length;

			var userAgent = window.navigator.userAgent.toLowerCase();
			if (userAgent.indexOf('msie 6') != -1 || userAgent.indexOf('msie 7') != -1 || userAgent.indexOf('msie 8') != -1
				|| userAgent.indexOf('msie 9') != -1 || userAgent.indexOf('msie 10') != -1) {
				var deptApJr = App.jr.getClassName("dept-ap_jr");
			}else{
				var deptApJr = document.getElementsByClassName("dept-ap_jr");
			}
			deptApJr[0].innerHTML = App.jr.mst[selectDep-1].name;

			fm.Direction.length = listLen + 1;
			for (var i = 0; i < listLen; i++) {
				fm.Direction.options[i + 1].text  = App.jr.dep[selectDep - 1].dst[i].name;
				fm.Direction.options[i + 1].value = App.jr.dep[selectDep - 1].dst[i].code;
			}
			fm.Direction.selectedIndex = 0;
			fm.Pref.selectedIndex = 0;
			fm.Area.selectedIndex = 0;
			App.jr.dstEnable(fm, true);
			App.jr.kenEnable(fm, false);
			App.jr.areaEnable(fm, false);
		} else {
			fm.Direction.length = 1;
			fm.Direction.selectedIndex = 0;
			fm.Pref.selectedIndex = 0;
			fm.Area.selectedIndex = 0;
			App.jr.dstEnable(fm, false);
			App.jr.kenEnable(fm, false);
			App.jr.areaEnable(fm, false);
		}
	}

	App.jr.dstEnable = function(fm, condi) {
		var Departure = fm.Departure.selectedIndex;

		if (condi == true) {
			fm.Direction.disabled = false;
		} else {
			if(Departure == "0" || Departure == ""){
				fm.Direction.disabled = true;
			}else{
				fm.Direction.disabled = false;
			}
		}
	}

	App.jr.onChangeDst = function(fm) {
		var listLen = 0;
		var selectDst = fm.Direction.value;

		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie 6') != -1 || userAgent.indexOf('msie 7') != -1 || userAgent.indexOf('msie 8') != -1
			|| userAgent.indexOf('msie 9') != -1 || userAgent.indexOf('msie 10') != -1) {
			var arrBapJr = App.jr.getClassName("arr_bap_jr");
		}else{
			var arrBapJr = document.getElementsByClassName("arr_bap_jr");
		}
//		arrBapJr[0].innerHTML = App.jr.dst[selectDst].name;

		if (selectDst != 0 && selectDst != "") {
			listLen = App.jr.dst[selectDst].kenjr.length;
			fm.Pref.length = listLen + 1;
			for (var i = 0; i < listLen; i++) {
				fm.Pref.options[i + 1].text  = App.jr.dst[selectDst].kenjr[i].name;
				fm.Pref.options[i + 1].value = App.jr.dst[selectDst].kenjr[i].code;
			}
			fm.Pref.selectedIndex = 0;
			fm.Area.selectedIndex = 0;
			App.jr.kenEnable(fm, true);
			App.jr.areaEnable(fm, false);
		} else {
			// 宿のみ検索の場合は、全都道府県(沖縄以外)をプルダウンにセットする
			fm.Pref.length = 47;

			for(var i=0; i<(App.jr.kenjr.length-1); i++) {
				fm.Pref.options[i + 1].text  = App.jr.kenjr[("0"+(i+1)).slice(-2)].name;
				fm.Pref.options[i + 1].value = App.jr.kenjr[("0"+(i+1)).slice(-2)].code;
			}
			fm.Pref.selectedIndex = 0;
			fm.Area.selectedIndex = 0;
			App.jr.kenEnable(fm, true);
			App.jr.areaEnable(fm, false);
		}
	}

	App.jr.kenEnable = function(fm, condi) {
		var Direction = fm.Direction.selectedIndex;

		if (condi == true) {
			fm.Pref.disabled = false;
		} else {
			if(Direction == "0" || Direction == ""){
				fm.Pref.disabled = true;
			}else{
				fm.Pref.disabled = false;
			}
		}
	}

	App.jr.onChangeKen = function(fm) {
		var listLen = 0;
		var selectKen = fm.Pref.value;

		if (selectKen != 0 && selectKen != "") {
			listLen = App.jr.
				kenjr[selectKen].area.length;
			fm.Area.length = listLen + 1;
			for (var i = 0; i < listLen; i++) {
				fm.Area.options[i + 1].text  = App.jr.kenjr[selectKen].area[i].name;
				fm.Area.options[i + 1].value = App.jr.kenjr[selectKen].area[i].code;
			}
			fm.Area.selectedIndex = 0;
			App.jr.areaEnable(fm, true);
		} else {
			fm.Area.length = 1;
			fm.Area.selectedIndex = 0;
			App.jr.areaEnable(fm, false);
		}
	}

	App.jr.areaEnable = function(fm, condi) {
		var Pref = fm.Pref.selectedIndex;

		if (condi == true) {
			fm.Area.disabled = false;
		} else {
			if(Pref == "0" || Pref == ""){
				fm.Area.disabled = true;
			}else{
				fm.Area.disabled = false;
			}
		}
	}

	App.jr.getClassName = function(targetClass){
		var foundElements = new Array();
		if (document.all){
			var allElements = document.all;
		}
		else {
			var allElements = document.getElementsByTagName("*");
		}
		for (i=0,j=0;i<allElements.length;i++) {
			if (allElements[i].className == targetClass) {
				foundElements[j] = allElements[i];
				j++;
			}
		}
		return foundElements;
	}

})(JALAN_DP_QS, window, document);
