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


/* JAL�p�}�X�^�f�[�^ */
;(function(App, window, document, undefined) {

	App.jal = {
		ken: ''
	};

	/**
	 * �X���[�Y�X�N���[��
	 **/
		// �s�s���f�[�^(�S��)
	App.jal.ken = new Array(47);

	// �k�C��
	App.jal.ken[0] = new KenData("�k�C��","010000",
		new Array(
			new LrgData("�D�y","010200",new Array(new LrgData("�X�X�L�m�E���","010202"),new LrgData("�k��E�u��","010205"),new LrgData("�Վ��E�e�C�l","010208"),new LrgData("���ʁE���΁E�L��","010211"),new LrgData("�^���","010214")))
			,new LrgData("��R�k","010300",new Array(new LrgData("��R�k","010302")))
			,new LrgData("���M�E�L�����E�ϒO","010500",new Array(new LrgData("���M","010502"),new LrgData("�]�s�E�L����","010505"),new LrgData("�ϒO","010508")))
			,new LrgData("�j�Z�R�E���X�c","010800",new Array(new LrgData("�j�Z�R�E��m��","010802"),new LrgData("���X�c","010805")))
			,new LrgData("����E�o�ʁE�Ϗ��q","011100",new Array(new LrgData("�Ϗ��q","011102"),new LrgData("�o�ʁE����","011105"),new LrgData("����","011108")))
			,new LrgData("���فE����E���O","011400",new Array(new LrgData("���فE���̐�","011402"),new LrgData("����E�������E�]��","011405"),new LrgData("���O","011408"),new LrgData("���K","013508")))
			,new LrgData("�t���E���G","011700",new Array(new LrgData("�t��","011702"),new LrgData("�H�y","011705"),new LrgData("���G�E����","011708")))
			,new LrgData("����E�w�_��","012000",new Array(new LrgData("����","012002"),new LrgData("����","012005"),new LrgData("�w�_���E�V�l��","012011")))
			,new LrgData("�x�ǖ�E���l�E�g�}��","012100",new Array(new LrgData("���l","012102"),new LrgData("�x�ǖ�","012105"),new LrgData("�g�}��","012108")))
			,new LrgData("�ԑ��E�k���E�m��","012300",new Array(new LrgData("�T���}�E���","012302"),new LrgData("�ԑ��E�k��","012305"),new LrgData("�Η��E���P","012308")))
			,new LrgData("���H�E�����E�����E�쓒�E���ΘH","012600",new Array(new LrgData("���H�E����","012602"),new LrgData("�쓒�E���ΘH","012605"),new LrgData("����","012608")))
			,new LrgData("�Ύ�E��m�E���","012900",new Array(new LrgData("�[��E���","012902"),new LrgData("�Ύ�","012905"),new LrgData("�[���E�〈��","012908"),new LrgData("�x┌΁E���","012911")))
			,new LrgData("�эL�E�\��","013200",new Array(new LrgData("�эL�E�\����","013202"),new LrgData("�\���E�T�z��","013205")))
			,new LrgData("�����E�����","013300",new Array(new LrgData("�����E�����","013302")))
			,new LrgData("�����i���K�E�當�E�V���E�ĐK�j","013500",new Array(new LrgData("���K�E�當","013502"),new LrgData("�V���E�ĐK","013505")))
		)
	);

	// �X��
	App.jal.ken[1] = new KenData("�X��","020000",
		new Array(
			new LrgData("�X","020200",new Array(new LrgData("�X�E�󒎁E���b�c","020202")))
			,new LrgData("�O�O","020500",new Array(new LrgData("�O�O�E���_","020505"),new LrgData("��k�E�􃖊ցE����","020511")))
			,new LrgData("�\�a�c��","020800",new Array(new LrgData("�\�a�c��","020802")))
			,new LrgData("����","020900",new Array(new LrgData("����","020902")))
			,new LrgData("���k�E�O��","021100",new Array(new LrgData("�O��","021102"),new LrgData("��Ӓn","021105"),new LrgData("���k����","021108")))
			,new LrgData("�Ìy���C��","021400",new Array(new LrgData("�Ìy���C��","021402"),new LrgData("���Ìy","021405")))
			,new LrgData("�Ìy����","021700",new Array(new LrgData("�k�Ìy�E�܏��쌴","021702"),new LrgData("���Ìy","021705")))
		)
	);

	// ��茧
	App.jal.ken[2] = new KenData("��茧","030000",
		new Array(
			new LrgData("����","030100",new Array(new LrgData("���΁E��h","030102")))
			,new LrgData("����","030200",new Array(new LrgData("�����E�Ȃ�","030202")))
			,new LrgData("����E�������E���","030300",new Array(new LrgData("����E�������E���","030302")))
			,new LrgData("�Ԋ���k�㥉���","030500",new Array(new LrgData("�Ԋ��E�k��E���c","030502"),new LrgData("����","030505")))
			,new LrgData("�O���C��","030800",new Array(new LrgData("���΁E��D�n","030802"),new LrgData("�{��","030805"),new LrgData("�v��","030808")))
			,new LrgData("���B�E����E���","031100",new Array(new LrgData("����E���","031102"),new LrgData("���B�E����E�]�h","031105")))
		)
	);

	// �{�錧
	App.jal.ken[3] = new KenData("�{�錧","040000",
		new Array(
			new LrgData("���","040200",new Array(new LrgData("���","040202"),new LrgData("�H�ہE���","040205"),new LrgData("����E���","040208")))
			,new LrgData("�����E���}","040500",new Array(new LrgData("�����E���}","040502"),new LrgData("����","040505")))
			,new LrgData("�Ί��E�C���","040800",new Array(new LrgData("�C����E�{�g","040802"),new LrgData("�Ί��E����E����","040805")))
			,new LrgData("�q�E���","041100",new Array(new LrgData("�q�E���","041101")))
			,new LrgData("�I���E�o��","041200",new Array(new LrgData("�I���E�o��","041202")))
			,new LrgData("���΁E����","041400",new Array(new LrgData("���΁E�����E�����c","041402"),new LrgData("�p�c","041405")))
		)
	);

	// �H�c��
	App.jal.ken[4] = new KenData("�H�c��","050000",
		new Array(
			new LrgData("�H�c","050200",new Array(new LrgData("�H�c","050202")))
			,new LrgData("�c��΁E�p�فE���","050300",new Array(new LrgData("�c��΁E�p��","050302"),new LrgData("���E���","050305")))
			,new LrgData("�\�a�c�΁E��فE���p","050500",new Array(new LrgData("���","050502"),new LrgData("�������E�\�a�c��","050505")))
			,new LrgData("���_�E�j��","050800",new Array(new LrgData("���_�E�\��","050802"),new LrgData("�鑃�E���m�E�X�g","050803"),new LrgData("�j��","050805")))
			,new LrgData("����E���C","051100",new Array(new LrgData("����E����","051102"),new LrgData("���C�E�{���E�ۊ�","051105")))
		)
	);

	// �R�`��
	App.jal.ken[5] = new KenData("�R�`��","060000",
		new Array(
			new LrgData("�R�`�E�����E�V���E��R","060200",new Array(new LrgData("�R�`","060202"),new LrgData("����","060203"),new LrgData("�V��","060205"),new LrgData("��R","060208")))
			,new LrgData("���ԑ�E�V���E���R","060500",new Array(new LrgData("���ԑ�E��R","060502"),new LrgData("�V���E�ŏ�E�I��","060505"),new LrgData("�����E���R","060508")))
			,new LrgData("���͍]�E���R","060800",new Array(new LrgData("���͍]","060802"),new LrgData("���R�E����","060805")))
			,new LrgData("�đ�E�u��","061100",new Array(new LrgData("�đ�","061102"),new LrgData("��z�E�ԓ��E����","061105"),new LrgData("����E�u��","061108")))
			,new LrgData("��c�E�߉�","061400",new Array(new LrgData("��c�E�V��","061402"),new LrgData("�߉��E����l�E����","061405")))
		)
	);

	// ������
	App.jal.ken[6] = new KenData("������","070000",
		new Array(
			new LrgData("�����E��{��","070200",new Array(new LrgData("�����E�э�E�y���E����","070202"),new LrgData("��{���E�x�E���","070205")))
			,new LrgData("���n","071100",new Array(new LrgData("���n","071102"),new LrgData("�쑊�n�E����","071105")))
			,new LrgData("���֒�E�֒򍂌�","071500",new Array(new LrgData("���֒�E�ܐF���E�֒򍂌�","071502")))
			,new LrgData("���c��E�\�֒�","071600",new Array(new LrgData("���c��E�\�֒�","071602"),new LrgData("���c��i��Áj","071605")))
			,new LrgData("���","071700",new Array(new LrgData("�쑽���E�M���E�R�s","071705"),new LrgData("���ÁE�����","071708"),new LrgData("��Îᏼ�E���R�E���m�q","071712")))
			,new LrgData("����","072000",new Array(new LrgData("��Í����E�����E����","072005"),new LrgData("�O�}��E�����E�����","072008")))
			,new LrgData("�S�R","072500",new Array(new LrgData("�S�R�E�֒�M�C�E�{���","072502"),new LrgData("�c���E�O�t","072505")))
			,new LrgData("����","072800",new Array(new LrgData("���́E�H����","072802"),new LrgData("�I�q�E������","072805")))
			,new LrgData("���킫�E�o�t","073200",new Array(new LrgData("�o�t","073202"),new LrgData("���킫�E��","073205"),new LrgData("���킫�E���{","073208"),new LrgData("���킫�E�����l","073212")))
		)
	);

	// �Ȗ،�
	App.jal.ken[7] = new KenData("�Ȗ،�","080000",
		new Array(
			new LrgData("�F�s�{�E������","080200",new Array(new LrgData("�F�s�{","080202"),new LrgData("������","080204")))
			,new LrgData("�ߐ{�E��","080500",new Array(new LrgData("�ߐ{�E��","080502")))
			,new LrgData("�����E��E��c���E���ߐ{��","080600",new Array(new LrgData("����","080602"),new LrgData("��E��c��","080605")))
			,new LrgData("�����E���~�����E�������E���T���΁E���s","080800",new Array(new LrgData("�����E���~����","080802"),new LrgData("�������E���T����","080805"),new LrgData("���s","080811")))
			,new LrgData("�S�{��E�쎡�E������E�얓","080900",new Array(new LrgData("�S�{��E�쎡","080902"),new LrgData("������E�얓","080905")))
			,new LrgData("����E���R�E�����E����","081100",new Array(new LrgData("����E����","081102"),new LrgData("���R","081105"),new LrgData("�Ȗ�","081108"),new LrgData("�����E����","081111")))
			,new LrgData("�n���E�Ζ؁E�v�q�E�^��","081600",new Array(new LrgData("�n���E��ߐ{","081602"),new LrgData("�v�q�E�Ζ�","081605"),new LrgData("�^��","081608")))
		)
	);

	// �Q�n��
	App.jal.ken[8] = new KenData("�Q�n��","090000",
		new Array(
			new LrgData("�l���E��ȁE�쌴��","090100",new Array(new LrgData("�l���E��ȁE�쌴��","090102")))
			,new LrgData("���ÁE�K�āE�ԕ~","090200",new Array(new LrgData("���ÁE�K�āE�ԕ~","090205")))
			,new LrgData("�����E�ڗ��E�k�y���","090300",new Array(new LrgData("�����E�ڗ��E�k�y���","090302")))
			,new LrgData("����E�����E�������E�@�t","090400",new Array(new LrgData("����E�����E�������E�@�t","090402")))
			,new LrgData("���c�E�V�_�E����","090500",new Array(new LrgData("�ʌ��E���c�E�V�_","090505"),new LrgData("�����E�Еi","090508")))
			,new LrgData("�ԏ�E�ː��E�n�ǐ�","090800",new Array(new LrgData("�ԏ�","090802"),new LrgData("�ː��E�n�ǐ��E����","090805")))
			,new LrgData("�a��E�ɍ���","091100",new Array(new LrgData("�a��E�ɍ���","091102")))
			,new LrgData("�O���E����E�ɐ���E���c��Y��","091400",new Array(new LrgData("�ٗ�","091402"),new LrgData("���c","091405"),new LrgData("�ɐ���","091408"),new LrgData("�O��","091411"),new LrgData("���襐Y��","091414")))
			,new LrgData("�����E�O�X�E�镔�E���`","092000",new Array(new LrgData("�����E�x��","092002"),new LrgData("�O�X�E�镔","092008"),new LrgData("����","092011")))
		)
	);

	// ��錧
	App.jal.ken[9] = new KenData("��錧","100000",
		new Array(
			new LrgData("�k���E���v���E����","100200",new Array(new LrgData("�k���","100202"),new LrgData("����","100203"),new LrgData("�v���E�ܓc","100205")))
			,new LrgData("���ˁE�}��","100500",new Array(new LrgData("����","100502"),new LrgData("�}��","100508")))
			,new LrgData("�푍�E����E����","100600",new Array(new LrgData("���فE�^�ǁE����","100602"),new LrgData("����E�É�","100605")))
			,new LrgData("���΁E���v","100800",new Array(new LrgData("����","100802"),new LrgData("���v","100805")))
			,new LrgData("���P�Y�E�y�Y�E�����E����","101100",new Array(new LrgData("���P�Y�E�y�Y","101102"),new LrgData("����","101105"),new LrgData("����","101402")))
			,new LrgData("���E�Ђ����Ȃ�","101400",new Array(new LrgData("���E�Ђ����Ȃ�","101405"),new LrgData("�g�c��","101407")))
		)
	);

	// ��ʌ�
	App.jal.ken[10] = new KenData("��ʌ�","110000",
		new Array(
			new LrgData("��z�E��������","110200",new Array(new LrgData("��z�E����","110202"),new LrgData("��������","110205"),new LrgData("���","110208"),new LrgData("����E�˓c","110211")))
			,new LrgData("�����E����","110500",new Array(new LrgData("����","110502"),new LrgData("����","110505")))
			,new LrgData("�є\","110800",new Array(new LrgData("�є\","110802"),new LrgData("�����R�E�X�ь����E���쒬","110805")))
			,new LrgData("�v��E�s�c","111100",new Array(new LrgData("�v��","111102"),new LrgData("�s�c","111105")))
			,new LrgData("�{���E�F�J","111400",new Array(new LrgData("�{��","111402"),new LrgData("�F�J�E�[�J","111405")))
			,new LrgData("�z�J�E����","111700",new Array(new LrgData("����","111702"),new LrgData("�z�J","111705")))
		)
	);

	// ��t��
	App.jal.ken[11] = new KenData("��t��","120000",
		new Array(
			new LrgData("��t�E�s��","120200",new Array(new LrgData("��t","120202"),new LrgData("�s��","120205")))
			,new LrgData("���l�E�Y���E�D���E����","120500",new Array(new LrgData("����","120503"),new LrgData("�D��","120505"),new LrgData("���l�E�Y��","120508")))
			,new LrgData("���c","120800",new Array(new LrgData("���c","120802"),new LrgData("��","120805")))
			,new LrgData("���ˁE���E��c","121100",new Array(new LrgData("��c","121105"),new LrgData("���ˁE��","121108")))
			,new LrgData("���q�E���X","121400",new Array(new LrgData("���q","121402"),new LrgData("���X","121405")))
			,new LrgData("��\�㗢�E���q","121700",new Array(new LrgData("��\�㗢","121702"),new LrgData("���q","121705"),new LrgData("�Ό�","121708")))
			,new LrgData("�؍X�ÁE�N�ÁE�x��","122000",new Array(new LrgData("�؍X�ÁE�N��","122002"),new LrgData("�x�ÁE����","122005")))
			,new LrgData("���Y�E����","122300",new Array(new LrgData("���Y�E��h","122302"),new LrgData("����","122308")))
			,new LrgData("�َR�E��[��","122600",new Array(new LrgData("�x�Y�E���l�E��q","122602"),new LrgData("�َR","122605")))
		)
	);

	// �����s
	App.jal.ken[12] = new KenData("�����s","130000",
		new Array(
			new LrgData("����E���{���E�����w����","136200",new Array(new LrgData("����E���C�E�z�n","136202"),new LrgData("�����E�_�c�E���{��","136205")))
			,new LrgData("�����̐��E�����E��i�E��y��","136500",new Array(new LrgData("�����̐��E�����E�{��","136502"),new LrgData("��i�E�l�J�E��y������","136505"),new LrgData("��ˁE����","136508")))
			,new LrgData("�Z�{�؁E���z�E�ԍ�E�R","136800",new Array(new LrgData("�Z�{�؁E���z�E�Ճm��","136802"),new LrgData("�ԍ�E���r","136805"),new LrgData("�R","136808"),new LrgData("����","136812")))
			,new LrgData("�����E�����E�V���E�i��","137100",new Array(new LrgData("�����E�����E�|��","137102"),new LrgData("�i��E���ցE�V���F","137105"),new LrgData("�V���E��","137108")))
			,new LrgData("���E�󑐁E����","137400",new Array(new LrgData("���","137402"),new LrgData("��","137405"),new LrgData("�n�c�E����","137408"),new LrgData("�r��E����","137412")))
			,new LrgData("�r�܁E�ڔ��E���E�ԉH","137700",new Array(new LrgData("�r��","137702"),new LrgData("���E�ԉH","137705")))
			,new LrgData("�V�h�E����E�����E�g�ˎ�","138000",new Array(new LrgData("�V�h","138002"),new LrgData("����E����","138005"),new LrgData("�g�ˎ��E�O��E������","138008")))
			,new LrgData("�a�J�E�ڍ��E���c�J","138300",new Array(new LrgData("�a�J","138302"),new LrgData("�b����E�ڍ��E�ܔ��c","138305"),new LrgData("���c�J","138308")))
			,new LrgData("���c�E��X�E�H�c����","138600",new Array(new LrgData("���c�E��X�E�H�c����","138602")))
			,new LrgData("�����E�]�ː�E�]��","138900",new Array(new LrgData("�����E�]�ː�","138902"),new LrgData("�]��","138905")))
			,new LrgData("�����q�E����E���c�E�{���E���z","139200",new Array(new LrgData("���z�E�{��","138905"),new LrgData("����E�����q�E����","139205"),new LrgData("���c","139208"),new LrgData("�����E�����R�E������","139212")))
			,new LrgData("�~�E������","139500",new Array(new LrgData("�~","139502"),new LrgData("������","139505")))
			,new LrgData("�ɓ������E���}��","139800",new Array(new LrgData("�ɓ������E���}��","139802")))
		)
	);

	// �_�ސ쌧
	App.jal.ken[13] = new KenData("�_�ސ쌧","140000",
		new Array(
			new LrgData("���","140100",new Array(new LrgData("���","140102")))
			,new LrgData("���l","140200",new Array(new LrgData("���l�E�x�C�G���A","140202"),new LrgData("�˒ˁE�`��","140208"),new LrgData("�V���l�E�t","140211")))
			,new LrgData("���{��E�O�Y","140500",new Array(new LrgData("���{��","140502"),new LrgData("�O�Y","140505")))
			,new LrgData("�Ó�E���q","140800",new Array(new LrgData("���q","140802"),new LrgData("���q","140805"),new LrgData("����E������","140808"),new LrgData("���ˁE���","140811")))
			,new LrgData("���؁E�C�V��","141100",new Array(new LrgData("�C�V���E��a","141102"),new LrgData("���؁E�ɐ���","141105")))
			,new LrgData("���͌�","141400",new Array(new LrgData("���͌�","141402")))
			,new LrgData("����","141600",new Array(new LrgData("����","141602")))
			,new LrgData("���͌��E�^�߁E���c��","141700",new Array(new LrgData("���c��","141705"),new LrgData("���͌��E�^��","141708")))
			,new LrgData("����","142000",new Array(new LrgData("�`��","142002"),new LrgData("�쑫���E��S","142005"),new LrgData("�O��","142008")))
		)
	);

	// �R����
	App.jal.ken[14] = new KenData("�R����","150000",
		new Array(
			new LrgData("�b�{�E�����E���勬","150100",new Array(new LrgData("����","150102"),new LrgData("�b�{","150105")))
			,new LrgData("�Θa�E�����E���R","150200",new Array(new LrgData("�Θa�E�����E���R","150205")))
			,new LrgData("�匎�E�s��","150300",new Array(new LrgData("�匎�E�s��","150302")))
			,new LrgData("�R���΁E�E��","150500",new Array(new LrgData("�R���΁E�E��","150502")))
			,new LrgData("�͌��΁E���΁E�x�m�g�c�E���i�΁E�{����","150600",new Array(new LrgData("�͌��΁E���΁E�x�m�g�c","150602"),new LrgData("���i�΁E�{����","150605")))
			,new LrgData("�����E�g���E����","150800",new Array(new LrgData("�����E�g���E����","150802")))
			,new LrgData("��A���v�X","151100",new Array(new LrgData("��A���v�X�E�����E����","151102"),new LrgData("���B�E����","151105")))
			,new LrgData("�����x�E������E�����E���","151400",new Array(new LrgData("������","151402"),new LrgData("�����E���E�{��","151405"),new LrgData("�B��","151408")))
		)
	);

	// ���쌧
	App.jal.ken[15] = new KenData("���쌧","160000",
		new Array(
			new LrgData("����E�ˉB�E���z�{","160200",new Array(new LrgData("����E�эj�E�ˉB","160202"),new LrgData("���z�{","160208")))
			,new LrgData("��򉷐�E�ؓ����E�H�R��","160500",new Array(new LrgData("�H�R��","160502"),new LrgData("�ؓ���","160511"),new LrgData("��򉷐�","160514")))
			,new LrgData("�u��E�k�u��E���c���a","160600",new Array(new LrgData("�k�u��E�����E���u��","160602"),new LrgData("���c���E�a�E�u�ꍂ��","160605")))
			,new LrgData("��c�E�ʏ��E������","160800",new Array(new LrgData("��c�E�ʏ��E������","160802")))
			,new LrgData("�����E��̌�","160900",new Array(new LrgData("�{��E�����E��̌�","160902")))
			,new LrgData("�ˑq��R�c�E���","161100",new Array(new LrgData("�ˑq��R�c�E���","161102")))
			,new LrgData("�y���E���v�E����","161400",new Array(new LrgData("�y���","161402"),new LrgData("���v�E����","161405")))
			,new LrgData("�����x�E�x�m���E�����E��ӎR�E���C","161600",new Array(new LrgData("��ӎR�E���C","161602"),new LrgData("�����E�x�m��","161605")))
			,new LrgData("���ȁE�����΁E�ԎR�E���_�΁E�P�ؕ�","161800",new Array(new LrgData("���ȁE�����΁E�ԎR","161802"),new LrgData("���_�΁E�P�ؕ��E��������","161808")))
			,new LrgData("��z�K�E���z�K�E���J�E������E����������","161900",new Array(new LrgData("��z�K�E���z�K�E���J�E������E����������","161902")))
			,new LrgData("���n�E���J","162000",new Array(new LrgData("���n��","162002"),new LrgData("�̒r�E���J","162005")))
			,new LrgData("���{�s�i���{�w���ӁE��ԁE�������E���K�j","162200",new Array(new LrgData("���{�w����","162202"),new LrgData("��ԁE������","162205"),new LrgData("���K�E���̑�","162208")))
			,new LrgData("���{�s�i�㍂�n�E��ƁE�����E�씞���j","162300",new Array(new LrgData("�㍂�n","162302"),new LrgData("���","162303"),new LrgData("����","162305"),new LrgData("�씞��","162308")))
			,new LrgData("���ܖ�E�咬","162400",new Array(new LrgData("�咬","162402"),new LrgData("���ܖ�E�䍂","162405")))
			,new LrgData("�ɓ߁E����E�ѓc�E���_","162600",new Array(new LrgData("�����E�ɓ߁E�C��","162602"),new LrgData("���","162608"),new LrgData("�ѓc�E�V����","162612"),new LrgData("���q�E���_�E���ɓ�","162615")))
			,new LrgData("�ؑ]","163200",new Array(new LrgData("�ޗǈ�E����","163202"),new LrgData("�ؑ]�E��x","163205"),new LrgData("��ؑ]�E���āE�n�āi�ꕔ�򕌌��j","163208")))
			,new LrgData("�����E�юR�E�M�Z���E���P","163500",new Array(new LrgData("�����E�юR","163502"),new LrgData("�M�Z���E���P","163505")))
		)
	);

	// �V����
	App.jal.ken[16] = new KenData("�V����","170000",
		new Array(
			new LrgData("�V���E�����E������","170200",new Array(new LrgData("�V���w����","170208"),new LrgData("�����E������E�ܓ��E�i�َR","170212")))
			,new LrgData("���g�E����E��D","170500",new Array(new LrgData("���g�E����","170502"),new LrgData("��D�E�ٓ�","170505")))
			,new LrgData("���E�O���E�⎺�E��F","170600",new Array(new LrgData("���E�O���E�⎺�E��F","170602")))
			,new LrgData("����E�����E�����E�����i���V�J�j","171100",new Array(new LrgData("���������","171102"),new LrgData("����","171105"),new LrgData("�����i���V�J�E�������j","171108")))
			,new LrgData("�싛���E�\�����E�Ó�i�Z�����j","171300",new Array(new LrgData("�\�����E�Ó�E���V�R","171302"),new LrgData("�싛���i����E�Z�����j","171305")))
			,new LrgData("����E�c��","171400",new Array(new LrgData("����","171408"),new LrgData("�c��E������","171411")))
			,new LrgData("��z�E������E����","171700",new Array(new LrgData("��z�E�����E�L�̕l","171702"),new LrgData("������","171705")))
			,new LrgData("���n","172000",new Array(new LrgData("���n","172002")))
		)
	);

	// �x�R��
	App.jal.ken[17] = new KenData("�x�R��","180000",
		new Array(
			new LrgData("���R�E�����E�F�ތ�","180200",new Array(new LrgData("�F�ތ��E����","180202"),new LrgData("����E����","180205"),new LrgData("���R","180208")))
			,new LrgData("�x�R","180500",new Array(new LrgData("�x�R�E����","180502")))
			,new LrgData("�����E�X���E�v�g","180800",new Array(new LrgData("�X���E����","180802"),new LrgData("����E�v�g","180805")))
		)
	);

	// �ΐ쌧
	App.jal.ken[18] = new KenData("�ΐ쌧","190000",
		new Array(
			new LrgData("�֓��E�\�o","191100",new Array(new LrgData("�֓��E�\�o","191102")))
			,new LrgData("�a�q�E����","191400",new Array(new LrgData("�a�q�E����","191402")))
			,new LrgData("����E�H��","192000",new Array(new LrgData("�H��E���ق�","192001"),new LrgData("����E���O","192001")))
			,new LrgData("���R","192300",new Array(new LrgData("���R","192302")))
			,new LrgData("����E�����E�C��","192600",new Array(new LrgData("���ÁE�����E�C��","192602"),new LrgData("����","192605")))
		)
	);

	// ���䌧
	App.jal.ken[19] = new KenData("���䌧","200000",
		new Array(
			new LrgData("�O���E�����","200200",new Array(new LrgData("�����","200202"),new LrgData("�O��","200205")))
			,new LrgData("����E���z�O","200300",new Array(new LrgData("����E�I�]","200302"),new LrgData("���z�O�E�r�c","200305")))
			,new LrgData("�z�O","200400",new Array(new LrgData("�z�O","200402")))
			,new LrgData("�ዷ","200500",new Array(new LrgData("�։�E�ዷ","200502")))
		)
	);

	// �É���
	App.jal.ken[20] = new KenData("�É���","210000",
		new Array(
			new LrgData("�M�C","210200",new Array(new LrgData("�M�C","210202"),new LrgData("��M�C�E����E�ԑ�","210205")))
			,new LrgData("�ɓ��E�F�����E���","210400",new Array(new LrgData("�ɓ��E�F�����E���","210402")))
			,new LrgData("�ɓ�����","210500",new Array(new LrgData("�ɓ�����","210502")))
			,new LrgData("���ɓ�","210800",new Array(new LrgData("���E�k��E�M��","210802"),new LrgData("�А��E���c","210803"),new LrgData("���","210805"),new LrgData("�͒ÁE����l","210808")))
			,new LrgData("���c�E���l","211000",new Array(new LrgData("���c�E���l","211002")))
			,new LrgData("��ɓ�","211100",new Array(new LrgData("�|���l","211105"),new LrgData("�����","211108"),new LrgData("�ΘL��","211111"),new LrgData("�ȗǁE�ɕl","211114")))
			,new LrgData("���ɓ�","211400",new Array(new LrgData("�O�ÁE�吣","211401"),new LrgData("�˓c�E�y��","211402"),new LrgData("�������E�F�v�{","211405"),new LrgData("����E�_��","211408")))
			,new LrgData("���ɓ�","211700",new Array(new LrgData("�ɓ������E��m�E�B�R","211702"),new LrgData("�C�P���E�V�铒�����E���ɓ�","211705")))
			,new LrgData("���ÁE�O��","212000",new Array(new LrgData("����","212002"),new LrgData("�O��","212005")))
			,new LrgData("��a��E�x�m","212300",new Array(new LrgData("��a��","212302"),new LrgData("����","212305"),new LrgData("�x�m�E�x�m�{�E����","212308")))
			,new LrgData("�É��E����","212600",new Array(new LrgData("�É�","212602"),new LrgData("����","212605")))
			,new LrgData("�ĒÁE��O��","212900",new Array(new LrgData("�Ē�","212902"),new LrgData("��O��E�q�V��","212905"),new LrgData("���}","212908"),new LrgData("���c","212911")))
			,new LrgData("����E�������E�썪","213200",new Array(new LrgData("����E�������E�썪","213202")))
			,new LrgData("�l���E�l����","213500",new Array(new LrgData("�l����","213508"),new LrgData("�l���E�l�k","213509"),new LrgData("�V��","213511")))
			,new LrgData("�֓c�E�܈�E�|��","213700",new Array(new LrgData("�|��","212910"),new LrgData("�֓c�E�܈�","212912")))
		)
	);

	// �򕌌�
	App.jal.ken[21] = new KenData("�򕌌�","220000",
		new Array(
			new LrgData("��ˁE���R","220200",new Array(new LrgData("��ˌÐ�E����E����","220202"),new LrgData("��ˍ��R�E�O����","220205")))
			,new LrgData("�����","220300",new Array(new LrgData("�����","220302")))
			,new LrgData("���C�E����","220500",new Array(new LrgData("���C�E����","220502")))
			,new LrgData("�S��E���Z�E��","220600",new Array(new LrgData("�S�㔪���E�����E���h�E����","220602"),new LrgData("���Z�E��","220605")))
			,new LrgData("�b�߁E�������E���E����","220800",new Array(new LrgData("�b�߁E���Ð�E���Q","220802"),new LrgData("�������E�y��E���΁E��","220805")))
			,new LrgData("�򕌁E��_�E�{�V","221100",new Array(new LrgData("�򕌁E�H��","221102"),new LrgData("��_�E�{�V�E�K��","221105")))
			,new LrgData("���싽","221500",new Array(new LrgData("���싽","221502")))
		)
	);

	// ���m��
	App.jal.ken[22] = new KenData("���m��","230000",
		new Array(
			new LrgData("���É�","230200",new Array(new LrgData("���É��w�E���É������","230202"),new LrgData("�h�E�����E�ۂ̓��E�i�S���h�[������","230203"),new LrgData("���R�E��{�E�}���ȓ�","230204")))
			,new LrgData("�O��","230500",new Array(new LrgData("���O�́E�V��E���J","230502"),new LrgData("���O��","230505"),new LrgData("�L���E�L��","230508"),new LrgData("���������E�ɗǌ�","230511"),new LrgData("���S�E�g�ǁE����","230514")))
			,new LrgData("�����E���R�E���q","230800",new Array(new LrgData("���E�Ó�","230802"),new LrgData("���R�E���q�E��{","230805"),new LrgData("���ˁE���i","230808")))
			,new LrgData("�m��","231100",new Array(new LrgData("�m������","231102"),new LrgData("���ԉ꓇","231105"),new LrgData("��","231108")))
		)
	);

	// �O�d��
	App.jal.ken[23] = new KenData("�O�d��","240000",
		new Array(
			new LrgData("�K���E�����E�l���s�E���̎R�E�鎭","240200",new Array(new LrgData("�K���E�����E�l���s�E���̎R","240202"),new LrgData("�鎭�E�T�R","240208")))
			,new LrgData("�ɉ�E���E����","240500",new Array(new LrgData("���","240502"),new LrgData("���R�E�ɉ�","240505"),new LrgData("�����E�Ԗڎl�\����E�R","240508")))
			,new LrgData("�ÁE�v���E�����E����","240800",new Array(new LrgData("��","240802"),new LrgData("�v���E�匴","240805"),new LrgData("���R�E����","240808"),new LrgData("����","240811")))
			,new LrgData("�ɐ��E��","241000",new Array(new LrgData("�ɐ��E��","241002")))
			,new LrgData("���H","241100",new Array(new LrgData("���H","241105")))
			,new LrgData("�쒹�H","241300",new Array(new LrgData("�쒹�H","241302")))
			,new LrgData("�u��","241400",new Array(new LrgData("�u���i�l���E�����E�镔�j","241402"),new LrgData("�쐨","241405"),new LrgData("�u���i�u���E�剤�j","241408")))
			,new LrgData("���ɐ�","241700",new Array(new LrgData("���ɐ�","241705")))
			,new LrgData("���I�B","242000",new Array(new LrgData("�I�ɒ���","242002"),new LrgData("���h�E�F��","242005")))
		)
	);

	// ���ꌧ
	App.jal.ken[24] = new KenData("���ꌧ","250000",
		new Array(
			new LrgData("���","250200",new Array(new LrgData("���","250202")))
			,new LrgData("�F���E���l","250500",new Array(new LrgData("�F��","250502"),new LrgData("���l","250505")))
			,new LrgData("�b��E�M�y","250800",new Array(new LrgData("�b��E�M�y","250802")))
			,new LrgData("�ΐ�","251100",new Array(new LrgData("����","251102")))
			,new LrgData("���ÁE��R�E�ߍ]����","251400",new Array(new LrgData("���ÁE��R","251402"),new LrgData("�ߍ]����","251405")))
			,new LrgData("�Y�ՁE���c","251700",new Array(new LrgData("�Y�ՁE���c","251702")))
		)
	);

	// ���s�{
	App.jal.ken[25] = new KenData("���s�{","260000",
		new Array(
			new LrgData("�͌����E�G�ہE��{����","260200",new Array(new LrgData("�����E�䏊����","260202"),new LrgData("�͌�������","260205"),new LrgData("�G�ےʁE�l���","260208")))
			,new LrgData("���s�w����","260500",new Array(new LrgData("���s�w�O","260502"),new LrgData("���s�w�ߍx�E�R��","260505")))
			,new LrgData("�匴�E�Ɣn�E�M�D","261400",new Array(new LrgData("�匴�E�Ɣn�E�M�D","261405")))
			,new LrgData("�����E���R�E���Y","262000",new Array(new LrgData("�����E���R�E���Y","262002")))
			,new LrgData("�_���E���R�E�k�������","262300",new Array(new LrgData("�_���E���R","262302"),new LrgData("�k�R�E�󃖒r","262305"),new LrgData("����E�k����","262308")))
			,new LrgData("���s�암�i�F���E�������E�R��j","263300",new Array(new LrgData("�������E�R��","263302"),new LrgData("�F���E���c��","263306"),new LrgData("���y","263309")))
			,new LrgData("���̉ԁE�O�g�E���R","263900",new Array(new LrgData("�T���E���̉ԁE�O�g","263902"),new LrgData("���R","263905")))
			,new LrgData("�V�����E�{�ÁE����","264200",new Array(new LrgData("�V�����E�{��","264202"),new LrgData("����","264205")))
			,new LrgData("�O��E�v���l","264500",new Array(new LrgData("�O��","264505"),new LrgData("�v���l�E���V��","264508")))
			,new LrgData("�����E���m�R","264800",new Array(new LrgData("�����E���m�R","264802")))
		)
	);

	// ���{
	App.jal.ken[26] = new KenData("���{","270000",
		new Array(
			new LrgData("���k���i��؁E���΁E���ʁE�ɒO��`�j","271400",new Array(new LrgData("���c�E�L���E�ɒO��`����","271402"),new LrgData("�r�c�E���ʁE�\��","271405"),new LrgData("��؁E���΁E����","271408")))
			,new LrgData("�V���E�]��E�\�O�E�˖{","271700",new Array(new LrgData("�V���E�]��E�\�O�E�˖{","271702")))
			,new LrgData("���w�E�~�c�w�E�����E�������E�{��","272000",new Array(new LrgData("�~�c�E���V���E�����E�V��","272002"),new LrgData("�������E�k�l�E�{��","272005")))
			,new LrgData("���x�C�G���A","272300",new Array(new LrgData("���j�o�[�T���V�e�B","272302"),new LrgData("�V�ێR�E��`�E�Z�V�]","272305")))
			,new LrgData("����E�����E�s������","272600",new Array(new LrgData("�����E�ߌ��Βn","272602"),new LrgData("�J���E�������","272605")))
			,new LrgData("�S�֋��E�Ȃ�΁E�l�c��","272900",new Array(new LrgData("�S�֋��E�Ȃ�΁E�l�c��","272902")))
			,new LrgData("��{���E�V�����E�s���암","273200",new Array(new LrgData("��{���E�V�����E���{��","273202"),new LrgData("�ߋ��E����","273205"),new LrgData("�Z�g�E��������","273208")))
			,new LrgData("��㓌��(�Q����E����E��^�E�����)","273500",new Array(new LrgData("�����E����","273502"),new LrgData("�Q����E����E��^�E�l���","273505"),new LrgData("�����E���䎛","273508"),new LrgData("�x�c�сE�͓�����","273511")))
			,new LrgData("���암�i��E�ݘa�c�E�֐���`�j","273800",new Array(new LrgData("��E����","273802"),new LrgData("�ݘa�c�E�L��","273805"),new LrgData("�֋�E�򍲖�E��","273808")))
		)
	);

	// ���Ɍ�
	App.jal.ken[27] = new KenData("���Ɍ�","280000",
		new Array(
			new LrgData("�_�ˁE�L�n�E����","280200",new Array(new LrgData("�L�n","280201"),new LrgData("�Z�b�E�k�_","280202"),new LrgData("�Z�b�A�C�����h","280203"),new LrgData("�k��E�V�_��","280204"),new LrgData("�O�{�E�|�[�g�A�C�����h","280205"),new LrgData("�����E�����P���p�[�N","280208"),new LrgData("�n�[�o�[�����h�E�_�ˁE�V�J�n","280211"),new LrgData("�{���E���q�E����","280214")))
			,new LrgData("���E��ˁE�O�c�E�R","280500",new Array(new LrgData("���E���{�E��ˁE���c��","280502"),new LrgData("�O�c�E�R","280505")))
			,new LrgData("�P�H�E�ԕ�E�d��","280800",new Array(new LrgData("�P�H�E���Ð�","280802"),new LrgData("�ԕ�E�����E����","280803"),new LrgData("�O�؁E���e�E�����E���p�E���ɒ���","280805")))
			,new LrgData("���E�|��E�L��","281100",new Array(new LrgData("���","281102"),new LrgData("�|��","281105"),new LrgData("�L���E�o��","281108")))
			,new LrgData("���Z�E�l��E����","281200",new Array(new LrgData("���Z","281202"),new LrgData("�l��","281205"),new LrgData("����","281208")))
			,new LrgData("�_��E�����E�{���E�a�c�R","281400",new Array(new LrgData("�n�`�k�����E������","281405"),new LrgData("�_��E�]��","281408"),new LrgData("�n�`�����E�{���E�a�c�R","281411")))
			,new LrgData("�W�H��","281700",new Array(new LrgData("�W�H","281702"),new LrgData("�F�{","281704"),new LrgData("�삠�킶","281705")))
		)
	);

	// �ޗǌ�
	App.jal.ken[28] = new KenData("�ޗǌ�","290000",
		new Array(
			new LrgData("�ޗǁE�����E�V��","290200",new Array(new LrgData("�ޗǁE��a�S�R","290202"),new LrgData("�����E�V��","290205"),new LrgData("����E�M�M�R","290208")))
			,new LrgData("�򒹁E�����E�O��","290500",new Array(new LrgData("�򒹁E�����E�O��","290502"),new LrgData("�����E�F��","290505")))
			,new LrgData("�g��E���g��","290800",new Array(new LrgData("�g��E�V��E����","290802"),new LrgData("���g��E�\�Ð�","290805")))
		)
	);

	// �a�̎R��
	App.jal.ken[29] = new KenData("�a�̎R��","300000",
		new Array(
			new LrgData("�a�̎R�s�E�����E�a�̉Y","300200",new Array(new LrgData("�a�̎R�s�E�����E�a�̉Y","300202")))
			,new LrgData("����R","300300",new Array(new LrgData("����R�E���{","300302")))
			,new LrgData("�L�c�E��V�E����","300500",new Array(new LrgData("�L�c","300502"),new LrgData("��V�E����","300505")))
			,new LrgData("���l�E���_","300800",new Array(new LrgData("���_","300801"),new LrgData("���l�E�암�E�c��","300802")))
			,new LrgData("�{�{�E�V�{�E���ӘH","301000",new Array(new LrgData("���ӘH�E�哃","301002"),new LrgData("�{�{","301005"),new LrgData("�V�{","301008")))
			,new LrgData("���Y�E���{�E������","301100",new Array(new LrgData("���{�E������","301102"),new LrgData("�ߒq���Y�E���n","301105")))
		)
	);

	// ���挧
	App.jal.ken[30] = new KenData("���挧","310000",
		new Array(
			new LrgData("����E���","310200",new Array(new LrgData("����","310202"),new LrgData("���","310205"),new LrgData("����","310208"),new LrgData("�l���E����","310211")))
			,new LrgData("�q�g�E�O���E�����l","310500",new Array(new LrgData("�͂킢�E����","310502"),new LrgData("�O��","310505"),new LrgData("�q�g�E�֋�","310508")))
			,new LrgData("�Ďq�E�F���E��R","310800",new Array(new LrgData("�Ďq�E�F���E���`","310802"),new LrgData("��R","310805")))
		)
	);

	// ������
	App.jal.ken[31] = new KenData("������","320000",
		new Array(
			new LrgData("���]�E�����E�ʑ��E���o�_","320100",new Array(new LrgData("���]�E���ۊցE�ʑ�","320102"),new LrgData("����","320105"),new LrgData("���o�_�E�_��","320111")))
			,new LrgData("�o�_�E��c�E�Ό���R","320400",new Array(new LrgData("�o�_�E��ЁE���̐�","320408"),new LrgData("��c�E�����","320411")))
			,new LrgData("�v�c�E�l�c�E�Øa��","320500",new Array(new LrgData("�l�c�E�]�ÁE�L��","320505"),new LrgData("�Øa��E�v�c","320508")))
			,new LrgData("�B��","320800",new Array(new LrgData("���O","320802"),new LrgData("����","320805")))
		)
	);

	// ���R��
	App.jal.ken[32] = new KenData("���R��","330000",
		new Array(
			new LrgData("���R�E�ʖ�E����","330200",new Array(new LrgData("���R�E�ʖ�","330202"),new LrgData("�����E����","330205")))
			,new LrgData("�q�~�E���ЁE��}","330500",new Array(new LrgData("�q�~�E�����E�h�H�R","330502"),new LrgData("���ЁE�䌴�E�}��","330505")))
			,new LrgData("�ÎR�E����O���E�f�R","330800",new Array(new LrgData("�����E�f�R����","330802"),new LrgData("�ÎR�E����","330805"),new LrgData("����E����","330808")))
			,new LrgData("�����E�V���E�g������","331100",new Array(new LrgData("�����E���E���H","331102"),new LrgData("�V���E���N","331105")))
		)
	);

	// �L����
	App.jal.ken[33] = new KenData("�L����","340000",
		new Array(
			new LrgData("���R�E����","340300",new Array(new LrgData("���R�E�����E���܂Ȃ�","340302")))
			,new LrgData("�����E�O���E�|�k","340600",new Array(new LrgData("�����E��ߋ��E�_�΍���","340602"),new LrgData("�O��","340605"),new LrgData("�|�k","340608")))
			,new LrgData("�L���E�{��","340900",new Array(new LrgData("�L��","340902"),new LrgData("�{���E�����s","340905")))
			,new LrgData("�O���E�|���E���L���E��","341100",new Array(new LrgData("�O���E�|���E���L��","340305"),new LrgData("���E�]�c��","340308")))
		)
	);

	// �R����
	App.jal.ken[34] = new KenData("�R����","350000",
		new Array(
			new LrgData("�⍑�E����E����","350300",new Array(new LrgData("�⍑","350302"),new LrgData("����E���h�哇","350305"),new LrgData("����E����","350308")))
			,new LrgData("�R���E�H�F","350600",new Array(new LrgData("�R���E���c�E�h�{","350602"),new LrgData("�H�F","350605")))
			,new LrgData("���E����","351000",new Array(new LrgData("��","351002"),new LrgData("����","351005")))
			,new LrgData("���ցE�F��","351300",new Array(new LrgData("�F��","351302"),new LrgData("���ցE���{�E��I","351305")))
		)
	);

	// ������
	App.jal.ken[35] = new KenData("������","360000",
		new Array(
			new LrgData("�����E��","360200",new Array(new LrgData("����","360202"),new LrgData("��","360205")))
			,new LrgData("����E���a���E����","360500",new Array(new LrgData("����E���a��","360502"),new LrgData("����E�C��E����","360505")))
			,new LrgData("�����E�c�J�E���R","360800",new Array(new LrgData("�����E�c�J�E�r�c","360802"),new LrgData("�e���E���g�E���n","360805"),new LrgData("���R�E�߉�","360808")))
		)
	);

	// ���쌧
	App.jal.ken[36] = new KenData("���쌧","370000",
		new Array(
			new LrgData("�����E���]","370200",new Array(new LrgData("�����E����","370202"),new LrgData("���ʂ��s�E�Óc","370208"),new LrgData("���c�E��������","370211")))
			,new LrgData("�Օ��E�ۋT�E��o","370500",new Array(new LrgData("�Օ��E�P�ʎ�","370502"),new LrgData("�ω���","370505"),new LrgData("�ۋT","370507"),new LrgData("��o�E�F����","370508")))
			,new LrgData("������","370800",new Array(new LrgData("������","370802")))
		)
	);

	// ���Q��
	App.jal.ken[37] = new KenData("���Q��","380000",
		new Array(
			new LrgData("���R�E����","380200",new Array(new LrgData("���R","380202"),new LrgData("����","380205"),new LrgData("�ɗ\","380208")))
			,new LrgData("�����E���܂Ȃ݊C��","380500",new Array(new LrgData("����","380502"),new LrgData("���܂Ȃ݊C��","380505")))
			,new LrgData("��\�E�F�a��","380800",new Array(new LrgData("���q�E��F�E���c��","380802"),new LrgData("�F�a��","380805")))
			,new LrgData("�V���l�E���\","381100",new Array(new LrgData("�����E���\�E�ΒȎR","381102"),new LrgData("�V���l�E�ɗ\�O��","381105")))
		)
	);

	// ���m��
	App.jal.ken[38] = new KenData("���m��","390000",
		new Array(
			new LrgData("���m�E�{��E�썑","390200",new Array(new LrgData("���m�E�t��","390202"),new LrgData("���E����","390203"),new LrgData("�썑�E����","390205"),new LrgData("�{��E�y���E�m����","390208")))
			,new LrgData("���|�E����","390500",new Array(new LrgData("���|","390502"),new LrgData("����","390505")))
			,new LrgData("�����E�l���\","390800",new Array(new LrgData("�����E�l���\�E���","390802"),new LrgData("�����E�y�������E�h��","390805")))
		)
	);

	// ������
	App.jal.ken[39] = new KenData("������","400000",
		new Array(
			new LrgData("�����s�i�����w���ӁE�V�_���Ӂj","400100",new Array(new LrgData("�����s�i�����w���ӁE���ŁE�C�̒����j","400102"),new LrgData("�����s�i�V�_���ӁE�S���l�j","400105")))
			,new LrgData("���ɕ{�E�@��","400300",new Array(new LrgData("���ɕ{�E����s","400302"),new LrgData("�@���E���C","400305"),new LrgData("��{�E����E����","400308")))
			,new LrgData("�����E�O��","400400",new Array(new LrgData("�����E�O��","400402")))
			,new LrgData("�v���āE���߁E�}���","400500",new Array(new LrgData("�v����","400502"),new LrgData("���߁E�}���","400505")))
			,new LrgData("����E�����E�}��","400600",new Array(new LrgData("����E�����E�}��","400602")))
			,new LrgData("�k��B","400800",new Array(new LrgData("�k��B�s�i���q�E�����E��i�j","400802"),new LrgData("���c�E�s���E�L�O","400805"),new LrgData("�ђˁE�c��","400808")))
		)
	);

	// ���ꌧ
	App.jal.ken[40] = new KenData("���ꌧ","410000",
		new Array(
			new LrgData("����E�Ó��E�F�̐�","410200",new Array(new LrgData("����E�Ó��E�F�̐�","410202"),new LrgData("�����E�_��","410205")))
			,new LrgData("���E���Y","410500",new Array(new LrgData("���","410502"),new LrgData("���Y","410505")))
			,new LrgData("����","410800",new Array(new LrgData("����","410802")))
			,new LrgData("���ÁE�Ďq","411100",new Array(new LrgData("���ÁE�Ďq�E���C","411102")))
			,new LrgData("�ɖ����E�L�c","411300",new Array(new LrgData("�ɖ����E�L�c","411302")))
		)
	);

	// ���茧
	App.jal.ken[41] = new KenData("���茧","420000",
		new Array(
			new LrgData("����","420200",new Array(new LrgData("����","420202"),new LrgData("�|���E�呺","420205")))
			,new LrgData("���ˁE���Y�E�c��","420500",new Array(new LrgData("����","420505"),new LrgData("���Y�E�c��","420508")))
			,new LrgData("�����ہE�n�E�X�e���{�X","420600",new Array(new LrgData("������","420602"),new LrgData("�n�E�X�e���{�X","420603"),new LrgData("���C�E�哇","420605")))
			,new LrgData("�����E�_��E���l","420800",new Array(new LrgData("����","420802"),new LrgData("�_��E���l","420805")))
			,new LrgData("�ܓ���","421100",new Array(new LrgData("��ܓ�","421102"),new LrgData("���ܓ�","421105")))
			,new LrgData("���E�Δn","421400",new Array(new LrgData("���","421402"),new LrgData("�Δn","421405")))
		)
	);

	// �F�{��
	App.jal.ken[42] = new KenData("�F�{��","430000",
		new Array(
			new LrgData("�F�{","430200",new Array(new LrgData("�F�{","430202"),new LrgData("�F�y�E�v��","430214")))
			,new LrgData("�ʖ��E�R���E�e�r","430300",new Array(new LrgData("�R���E���R�E�A��","430302"),new LrgData("�r���E�ʖ�","430305"),new LrgData("�e�r","430308")))
			,new LrgData("����E��","430400",new Array(new LrgData("�񗧁E�킢��","430402"),new LrgData("����E���c�E�c�̌��E���莛","430405")))
			,new LrgData("���h","430500",new Array(new LrgData("�숢�h","430502"),new LrgData("���h�E���q","430505")))
			,new LrgData("����E�����E���̎�","430800",new Array(new LrgData("����E�����E���̎�","430802")))
			,new LrgData("�l�g�E����","430900",new Array(new LrgData("�l�g�E����","430902")))
			,new LrgData("�V��","431100",new Array(new LrgData("�V���㓇�E����","431102"),new LrgData("�V�������E���c","431105")))
		)
	);

	// �啪��
	App.jal.ken[43] = new KenData("�啪��","440000",
		new Array(
			new LrgData("�啪","440200",new Array(new LrgData("�啪","440202"),new LrgData("�P�n�E����","440205"),new LrgData("���","440208")))
			,new LrgData("�ʕ{","440500",new Array(new LrgData("�ʕ{","440502")))
			,new LrgData("���z�@","440600",new Array(new LrgData("���z�@�E����","440602")))
			,new LrgData("���ÁE����","440800",new Array(new LrgData("���ÁE��n�k�E�F��","440802"),new LrgData("�����E�n�z","440805")))
			,new LrgData("���c�E�V�����E��n�k","441100",new Array(new LrgData("���c�E�V����","441102")))
			,new LrgData("��d�E�v�Z�E�|�c�E����","441400",new Array(new LrgData("��d","441402"),new LrgData("�v�Z�E�����E�|�c","441405")))
		)
	);

	// �{�茧
	App.jal.ken[44] = new KenData("�{�茧","450000",
		new Array(
			new LrgData("�{��E���E����","450200",new Array(new LrgData("���s","450201"),new LrgData("�{��E���E�V�[�K�C�A","450202"),new LrgData("����C��","450205")))
			,new LrgData("���т́E�s��","450300",new Array(new LrgData("���т́E�s��","450302")))
			,new LrgData("�����E�����E�����","450500",new Array(new LrgData("����","450502"),new LrgData("�����","450505"),new LrgData("����","450508")))
		)
	);

	// ��������
	App.jal.ken[45] = new KenData("��������","460000",
		new Array(
			new LrgData("�������E����","460200",new Array(new LrgData("�������E����","460202")))
			,new LrgData("��F�E�w�h","460500",new Array(new LrgData("�ɏW�@�E���s���E����l","460502"),new LrgData("�w�h","460505"),new LrgData("�m���E�삳��","460508")))
			,new LrgData("�����E���","460800",new Array(new LrgData("�����E���","460802")))
			,new LrgData("����","461100",new Array(new LrgData("����","461102")))
			,new LrgData("�k�F�E���","461400",new Array(new LrgData("�o���E���v��","461402"),new LrgData("���","461405"),new LrgData("����E���������ؖ�","461408")))
			,new LrgData("����","461700",new Array(new LrgData("������","461702"),new LrgData("��q��","461705"),new LrgData("���v��","461708"),new LrgData("��G����","461711"),new LrgData("�f���h��","461714"),new LrgData("�����哇","461717"),new LrgData("��E���E���V���E���i�Ǖ���","461720"),new LrgData("�^�_��","461723")))
		)
	);

	// ���ꌧ
	App.jal.ken[46] = new KenData("���ꌧ","470000",
		new Array(
			new LrgData("�ߔe","470200",new Array(new LrgData("�ߔe","470202"),new LrgData("��","470205")))
			,new LrgData("����s�i�R�U�j�E�k�J�E�X��p","470500",new Array(new LrgData("����s�i�R�U�j","470502"),new LrgData("�k�J�E�Î�[","470503"),new LrgData("�X��p","470511")))
			,new LrgData("���C�݁E���C��","470800",new Array(new LrgData("���C��","470802"),new LrgData("���C��","470805")))
			,new LrgData("�암","471100",new Array(new LrgData("����","471102"),new LrgData("���K","471105")))
			,new LrgData("�{���E����E����","471400",new Array(new LrgData("�{���E�ɍ]���E���[��","471402"),new LrgData("����","471405"),new LrgData("����","471408")))
			,new LrgData("����","471700",new Array(new LrgData("�Ί_��","471702"),new LrgData("���\���E���l���E�|�x��","471705"),new LrgData("�{�Ó�","471708"),new LrgData("�^�ߍ���","471711"),new LrgData("�v�ē�","471714"),new LrgData("�ɕ������E�ɐ�����","471717"),new LrgData("�c�Ǌԏ���","471720"),new LrgData("�哌��","471723")))
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

/* ANA�p�}�X�^�f�[�^ */
;(function(App, window, document, undefined) {

	App.ana = {
		ken_ana : ''
	};

	/**
	 * �X���[�Y�X�N���[��
	 **/

		// �s�s���f�[�^
		// 13/12/22 01:10:52
	App.ana.ken_ana = new Array( 47);

	// �k�C��
	App.ana.ken_ana[0] = new KenData("�k�C��","010000",
		new Array(
			new LrgData("�D�y","010200",new Array(new LrgData("�X�X�L�m�E���","010202"),new LrgData("�k��E�u��","010205"),new LrgData("�Վ��E�e�C�l","010208"),new LrgData("���ʁE���΁E�L��","010211"),new LrgData("�^���","010214")))
			,new LrgData("��R�k","010300",new Array(new LrgData("��R�k","010302")))
			,new LrgData("���M�E�L�����E�ϒO","010500",new Array(new LrgData("���M","010502"),new LrgData("�]�s�E�L����","010505"),new LrgData("�ϒO","010508")))
			,new LrgData("�j�Z�R�E���X�c","010800",new Array(new LrgData("�j�Z�R�E��m��","010802"),new LrgData("���X�c","010805")))
			,new LrgData("����E�o�ʁE�Ϗ��q","011100",new Array(new LrgData("�Ϗ��q","011102"),new LrgData("�o�ʁE����","011105"),new LrgData("����","011108")))
			,new LrgData("���فE����E���O","011400",new Array(new LrgData("���فE���̐�","011402"),new LrgData("����E�������E�]��","011405"),new LrgData("���O","011408"),new LrgData("���K","013508")))
			,new LrgData("�t���E���G","011700",new Array(new LrgData("�t��","011702"),new LrgData("�H�y","011705"),new LrgData("���G�E����","011708")))
			,new LrgData("����E�w�_��","012000",new Array(new LrgData("����","012002"),new LrgData("����","012005"),new LrgData("�w�_���E�V�l��","012011")))
			,new LrgData("�x�ǖ�E���l�E�g�}��","012100",new Array(new LrgData("���l","012102"),new LrgData("�x�ǖ�","012105"),new LrgData("�g�}��","012108")))
			,new LrgData("�ԑ��E�k���E�m��","012300",new Array(new LrgData("�T���}�E���","012302"),new LrgData("�ԑ��E�k��","012305"),new LrgData("�Η��E���P","012308")))
			,new LrgData("���H�E�����E�����E�쓒�E���ΘH","012600",new Array(new LrgData("���H�E����","012602"),new LrgData("�쓒�E���ΘH","012605"),new LrgData("����","012608")))
			,new LrgData("�Ύ�E��m�E���","012900",new Array(new LrgData("�[��E���","012902"),new LrgData("�Ύ�","012905"),new LrgData("�[���E�〈��","012908"),new LrgData("�x┌΁E���","012911")))
			,new LrgData("�эL�E�\��","013200",new Array(new LrgData("�эL�E�\����","013202"),new LrgData("�\���E�T�z��","013205")))
			,new LrgData("�����E�����","013300",new Array(new LrgData("�����E�����","013302")))
			,new LrgData("�����i���K�E�當�E�V���E�ĐK�j","013500",new Array(new LrgData("���K�E�當","013502"),new LrgData("�V���E�ĐK","013505")))
		)
	);

	// �X��
	App.ana.ken_ana[1] = new KenData("�X��","020000",
		new Array(
			new LrgData("�X","020200",new Array(new LrgData("�X�E�󒎁E���b�c","020202")))
			,new LrgData("�O�O","020500",new Array(new LrgData("�O�O�E���_","020505"),new LrgData("��k�E�􃖊ցE����","020511")))
			,new LrgData("�\�a�c��","020800",new Array(new LrgData("�\�a�c��","020802")))
			,new LrgData("����","020900",new Array(new LrgData("����","020902")))
			,new LrgData("���k�E�O��","021100",new Array(new LrgData("�O��","021102"),new LrgData("��Ӓn","021105"),new LrgData("���k����","021108")))
			,new LrgData("�Ìy���C��","021400",new Array(new LrgData("�Ìy���C��","021402"),new LrgData("���Ìy","021405")))
			,new LrgData("�Ìy����","021700",new Array(new LrgData("�k�Ìy�E�܏��쌴","021702"),new LrgData("���Ìy","021705")))
		)
	);

	// ��茧
	App.ana.ken_ana[2] = new KenData("��茧","030000",
		new Array(
			new LrgData("����","030100",new Array(new LrgData("���΁E��h","030102")))
			,new LrgData("����","030200",new Array(new LrgData("�����E�Ȃ�","030202")))
			,new LrgData("����E�������E���","030300",new Array(new LrgData("����E�������E���","030302")))
			,new LrgData("�Ԋ���k�㥉���","030500",new Array(new LrgData("�Ԋ��E�k��E���c","030502"),new LrgData("����","030505")))
			,new LrgData("�O���C��","030800",new Array(new LrgData("���΁E��D�n","030802"),new LrgData("�{��","030805"),new LrgData("�v��","030808")))
			,new LrgData("���B�E����E���","031100",new Array(new LrgData("����E���","031102"),new LrgData("���B�E����E�]�h","031105")))
		)
	);

	// �{�錧
	App.ana.ken_ana[3] = new KenData("�{�錧","040000",
		new Array(
			new LrgData("���","040200",new Array(new LrgData("���","040202"),new LrgData("�H�ہE���","040205"),new LrgData("����E���","040208")))
			,new LrgData("�����E���}","040500",new Array(new LrgData("�����E���}","040502"),new LrgData("����","040505")))
			,new LrgData("�Ί��E�C���","040800",new Array(new LrgData("�C����E�{�g","040802"),new LrgData("�Ί��E����E����","040805")))
			,new LrgData("�q�E���","041100",new Array(new LrgData("�q�E���","041101")))
			,new LrgData("�I���E�o��","041200",new Array(new LrgData("�I���E�o��","041202")))
			,new LrgData("���΁E����","041400",new Array(new LrgData("���΁E�����E�����c","041402"),new LrgData("�p�c","041405")))
		)
	);

	// �H�c��
	App.ana.ken_ana[4] = new KenData("�H�c��","050000",
		new Array(
			new LrgData("�H�c","050200",new Array(new LrgData("�H�c","050202")))
			,new LrgData("�c��΁E�p�فE���","050300",new Array(new LrgData("�c��΁E�p��","050302"),new LrgData("���E���","050305")))
			,new LrgData("�\�a�c�΁E��فE���p","050500",new Array(new LrgData("���","050502"),new LrgData("�������E�\�a�c��","050505")))
			,new LrgData("���_�E�j��","050800",new Array(new LrgData("���_�E�\��","050802"),new LrgData("�鑃�E���m�E�X�g","050803"),new LrgData("�j��","050805")))
			,new LrgData("����E���C","051100",new Array(new LrgData("����E����","051102"),new LrgData("���C�E�{���E�ۊ�","051105")))
		)
	);

	// �R�`��
	App.ana.ken_ana[5] = new KenData("�R�`��","060000",
		new Array(
			new LrgData("�R�`�E�����E�V���E��R","060200",new Array(new LrgData("�R�`","060202"),new LrgData("����","060203"),new LrgData("�V��","060205"),new LrgData("��R","060208")))
			,new LrgData("���ԑ�E�V���E���R","060500",new Array(new LrgData("���ԑ�E��R","060502"),new LrgData("�V���E�ŏ�E�I��","060505"),new LrgData("�����E���R","060508")))
			,new LrgData("���͍]�E���R","060800",new Array(new LrgData("���͍]","060802"),new LrgData("���R�E����","060805")))
			,new LrgData("�đ�E�u��","061100",new Array(new LrgData("�đ�","061102"),new LrgData("��z�E�ԓ��E����","061105"),new LrgData("����E�u��","061108")))
			,new LrgData("��c�E�߉�","061400",new Array(new LrgData("��c�E�V��","061402"),new LrgData("�߉��E����l�E����","061405")))
		)
	);

	// ������
	App.ana.ken_ana[6] = new KenData("������","070000",
		new Array(
			new LrgData("�����E��{��","070200",new Array(new LrgData("�����E�э�E�y���E����","070202"),new LrgData("��{���E�x�E���","070205")))
			,new LrgData("���n","071100",new Array(new LrgData("���n","071102"),new LrgData("�쑊�n�E����","071105")))
			,new LrgData("���֒�E�֒򍂌�","071500",new Array(new LrgData("���֒�E�ܐF���E�֒򍂌�","071502")))
			,new LrgData("���c��E�\�֒�","071600",new Array(new LrgData("���c��E�\�֒�","071602"),new LrgData("���c��i��Áj","071605")))
			,new LrgData("���","071700",new Array(new LrgData("�쑽���E�M���E�R�s","071705"),new LrgData("���ÁE�����","071708"),new LrgData("��Îᏼ�E���R�E���m�q","071712")))
			,new LrgData("����","072000",new Array(new LrgData("��Í����E�����E����","072005"),new LrgData("�O�}��E�����E�����","072008")))
			,new LrgData("�S�R","072500",new Array(new LrgData("�S�R�E�֒�M�C�E�{���","072502"),new LrgData("�c���E�O�t","072505")))
			,new LrgData("����","072800",new Array(new LrgData("���́E�H����","072802"),new LrgData("�I�q�E������","072805")))
			,new LrgData("���킫�E�o�t","073200",new Array(new LrgData("�o�t","073202"),new LrgData("���킫�E��","073205"),new LrgData("���킫�E���{","073208"),new LrgData("���킫�E�����l","073212")))
		)
	);

	// �Ȗ،�
	App.ana.ken_ana[7] = new KenData("�Ȗ،�","080000",
		new Array(
			new LrgData("�F�s�{�E������","080200",new Array(new LrgData("�F�s�{","080202"),new LrgData("������","080204")))
			,new LrgData("�ߐ{�E��","080500",new Array(new LrgData("�ߐ{�E��","080502")))
			,new LrgData("�����E��E��c���E���ߐ{��","080600",new Array(new LrgData("����","080602"),new LrgData("��E��c��","080605")))
			,new LrgData("�����E���~�����E�������E���T���΁E���s","080800",new Array(new LrgData("�����E���~����","080802"),new LrgData("�������E���T����","080805"),new LrgData("���s","080811")))
			,new LrgData("�S�{��E�쎡�E������E�얓","080900",new Array(new LrgData("�S�{��E�쎡","080902"),new LrgData("������E�얓","080905")))
			,new LrgData("����E���R�E�����E����","081100",new Array(new LrgData("����E����","081102"),new LrgData("���R","081105"),new LrgData("�Ȗ�","081108"),new LrgData("�����E����","081111")))
			,new LrgData("�n���E�Ζ؁E�v�q�E�^��","081600",new Array(new LrgData("�n���E��ߐ{","081602"),new LrgData("�v�q�E�Ζ�","081605"),new LrgData("�^��","081608")))
		)
	);

	// �Q�n��
	App.ana.ken_ana[8] = new KenData("�Q�n��","090000",
		new Array(
			new LrgData("�l���E��ȁE�쌴��","090100",new Array(new LrgData("�l���E��ȁE�쌴��","090102")))
			,new LrgData("���ÁE�K�āE�ԕ~","090200",new Array(new LrgData("���ÁE�K�āE�ԕ~","090205")))
			,new LrgData("�����E�ڗ��E�k�y���","090300",new Array(new LrgData("�����E�ڗ��E�k�y���","090302")))
			,new LrgData("����E�����E�������E�@�t","090400",new Array(new LrgData("����E�����E�������E�@�t","090402")))
			,new LrgData("���c�E�V�_�E����","090500",new Array(new LrgData("�ʌ��E���c�E�V�_","090505"),new LrgData("�����E�Еi","090508")))
			,new LrgData("�ԏ�E�ː��E�n�ǐ�","090800",new Array(new LrgData("�ԏ�","090802"),new LrgData("�ː��E�n�ǐ��E����","090805")))
			,new LrgData("�a��E�ɍ���","091100",new Array(new LrgData("�a��E�ɍ���","091102")))
			,new LrgData("�O���E����E�ɐ���E���c��Y��","091400",new Array(new LrgData("�ٗ�","091402"),new LrgData("���c","091405"),new LrgData("�ɐ���","091408"),new LrgData("�O��","091411"),new LrgData("���襐Y��","091414")))
			,new LrgData("�����E�O�X�E�镔�E���`","092000",new Array(new LrgData("�����E�x��","092002"),new LrgData("�O�X�E�镔","092008"),new LrgData("����","092011")))
		)
	);

	// ��錧
	App.ana.ken_ana[9] = new KenData("��錧","100000",
		new Array(
			new LrgData("�k���E���v���E����","100200",new Array(new LrgData("�k���","100202"),new LrgData("����","100203"),new LrgData("�v���E�ܓc","100205")))
			,new LrgData("���ˁE�}��","100500",new Array(new LrgData("����","100502"),new LrgData("�}��","100508")))
			,new LrgData("�푍�E����E����","100600",new Array(new LrgData("���فE�^�ǁE����","100602"),new LrgData("����E�É�","100605")))
			,new LrgData("���΁E���v","100800",new Array(new LrgData("����","100802"),new LrgData("���v","100805")))
			,new LrgData("���P�Y�E�y�Y�E�����E����","101100",new Array(new LrgData("���P�Y�E�y�Y","101102"),new LrgData("����","101105"),new LrgData("����","101402")))
			,new LrgData("���E�Ђ����Ȃ�","101400",new Array(new LrgData("���E�Ђ����Ȃ�","101405"),new LrgData("�g�c��","101407")))
		)
	);

	// ��ʌ�
	App.ana.ken_ana[10] = new KenData("��ʌ�","110000",
		new Array(
			new LrgData("��z�E��������","110200",new Array(new LrgData("��z�E����","110202"),new LrgData("��������","110205"),new LrgData("���","110208"),new LrgData("����E�˓c","110211")))
			,new LrgData("�����E����","110500",new Array(new LrgData("����","110502"),new LrgData("����","110505")))
			,new LrgData("�є\","110800",new Array(new LrgData("�є\","110802"),new LrgData("�����R�E�X�ь����E���쒬","110805")))
			,new LrgData("�v��E�s�c","111100",new Array(new LrgData("�v��","111102"),new LrgData("�s�c","111105")))
			,new LrgData("�{���E�F�J","111400",new Array(new LrgData("�{��","111402"),new LrgData("�F�J�E�[�J","111405")))
			,new LrgData("�z�J�E����","111700",new Array(new LrgData("����","111702"),new LrgData("�z�J","111705")))
		)
	);

	// ��t��
	App.ana.ken_ana[11] = new KenData("��t��","120000",
		new Array(
			new LrgData("��t�E�s��","120200",new Array(new LrgData("��t","120202"),new LrgData("�s��","120205")))
			,new LrgData("���l�E�Y���E�D���E����","120500",new Array(new LrgData("����","120503"),new LrgData("�D��","120505"),new LrgData("���l�E�Y��","120508")))
			,new LrgData("���c","120800",new Array(new LrgData("���c","120802"),new LrgData("��","120805")))
			,new LrgData("���ˁE���E��c","121100",new Array(new LrgData("��c","121105"),new LrgData("���ˁE��","121108")))
			,new LrgData("���q�E���X","121400",new Array(new LrgData("���q","121402"),new LrgData("���X","121405")))
			,new LrgData("��\�㗢�E���q","121700",new Array(new LrgData("��\�㗢","121702"),new LrgData("���q","121705"),new LrgData("�Ό�","121708")))
			,new LrgData("�؍X�ÁE�N�ÁE�x��","122000",new Array(new LrgData("�؍X�ÁE�N��","122002"),new LrgData("�x�ÁE����","122005")))
			,new LrgData("���Y�E����","122300",new Array(new LrgData("���Y�E��h","122302"),new LrgData("����","122308")))
			,new LrgData("�َR�E��[��","122600",new Array(new LrgData("�x�Y�E���l�E��q","122602"),new LrgData("�َR","122605")))
		)
	);

	// �����s
	App.ana.ken_ana[12] = new KenData("�����s","130000",
		new Array(
			new LrgData("����E���{���E�����w����","136200",new Array(new LrgData("����E���C�E�z�n","136202"),new LrgData("�����E�_�c�E���{��","136205")))
			,new LrgData("�����̐��E�����E��i�E��y��","136500",new Array(new LrgData("�����̐��E�����E�{��","136502"),new LrgData("��i�E�l�J�E��y������","136505"),new LrgData("��ˁE����","136508")))
			,new LrgData("�Z�{�؁E���z�E�ԍ�E�R","136800",new Array(new LrgData("�Z�{�؁E���z�E�Ճm��","136802"),new LrgData("�ԍ�E���r","136805"),new LrgData("�R","136808"),new LrgData("����","136812")))
			,new LrgData("�����E�����E�V���E�i��","137100",new Array(new LrgData("�����E�����E�|��","137102"),new LrgData("�i��E���ցE�V���F","137105"),new LrgData("�V���E��","137108")))
			,new LrgData("���E�󑐁E����","137400",new Array(new LrgData("���","137402"),new LrgData("��","137405"),new LrgData("�n�c�E����","137408"),new LrgData("�r��E����","137412")))
			,new LrgData("�r�܁E�ڔ��E���E�ԉH","137700",new Array(new LrgData("�r��","137702"),new LrgData("���E�ԉH","137705")))
			,new LrgData("�V�h�E����E�����E�g�ˎ�","138000",new Array(new LrgData("�V�h","138002"),new LrgData("����E����","138005"),new LrgData("�g�ˎ��E�O��E������","138008")))
			,new LrgData("�a�J�E�ڍ��E���c�J","138300",new Array(new LrgData("�a�J","138302"),new LrgData("�b����E�ڍ��E�ܔ��c","138305"),new LrgData("���c�J","138308")))
			,new LrgData("���c�E��X�E�H�c����","138600",new Array(new LrgData("���c�E��X�E�H�c����","138602")))
			,new LrgData("�����E�]�ː�E�]��","138900",new Array(new LrgData("�����E�]�ː�","138902"),new LrgData("�]��","138905")))
			,new LrgData("�����q�E����E���c�E�{���E���z","139200",new Array(new LrgData("���z�E�{��","138905"),new LrgData("����E�����q�E����","139205"),new LrgData("���c","139208"),new LrgData("�����E�����R�E������","139212")))
			,new LrgData("�~�E������","139500",new Array(new LrgData("�~","139502"),new LrgData("������","139505")))
			,new LrgData("�ɓ������E���}��","139800",new Array(new LrgData("�ɓ������E���}��","139802")))
		)
	);

	// �_�ސ쌧
	App.ana.ken_ana[13] = new KenData("�_�ސ쌧","140000",
		new Array(
			new LrgData("���","140100",new Array(new LrgData("���","140102")))
			,new LrgData("���l","140200",new Array(new LrgData("���l�E�x�C�G���A","140202"),new LrgData("�˒ˁE�`��","140208"),new LrgData("�V���l�E�t","140211")))
			,new LrgData("���{��E�O�Y","140500",new Array(new LrgData("���{��","140502"),new LrgData("�O�Y","140505")))
			,new LrgData("�Ó�E���q","140800",new Array(new LrgData("���q","140802"),new LrgData("���q","140805"),new LrgData("����E������","140808"),new LrgData("���ˁE���","140811")))
			,new LrgData("���؁E�C�V��","141100",new Array(new LrgData("�C�V���E��a","141102"),new LrgData("���؁E�ɐ���","141105")))
			,new LrgData("���͌�","141400",new Array(new LrgData("���͌�","141402")))
			,new LrgData("����","141600",new Array(new LrgData("����","141602")))
			,new LrgData("���͌��E�^�߁E���c��","141700",new Array(new LrgData("���c��","141705"),new LrgData("���͌��E�^��","141708")))
			,new LrgData("����","142000",new Array(new LrgData("�`��","142002"),new LrgData("�쑫���E��S","142005"),new LrgData("�O��","142008")))
		)
	);

	// �R����
	App.ana.ken_ana[14] = new KenData("�R����","150000",
		new Array(
			new LrgData("�b�{�E�����E���勬","150100",new Array(new LrgData("����","150102"),new LrgData("�b�{","150105")))
			,new LrgData("�Θa�E�����E���R","150200",new Array(new LrgData("�Θa�E�����E���R","150205")))
			,new LrgData("�匎�E�s��","150300",new Array(new LrgData("�匎�E�s��","150302")))
			,new LrgData("�R���΁E�E��","150500",new Array(new LrgData("�R���΁E�E��","150502")))
			,new LrgData("�͌��΁E���΁E�x�m�g�c�E���i�΁E�{����","150600",new Array(new LrgData("�͌��΁E���΁E�x�m�g�c","150602"),new LrgData("���i�΁E�{����","150605")))
			,new LrgData("�����E�g���E����","150800",new Array(new LrgData("�����E�g���E����","150802")))
			,new LrgData("��A���v�X","151100",new Array(new LrgData("��A���v�X�E�����E����","151102"),new LrgData("���B�E����","151105")))
			,new LrgData("�����x�E������E�����E���","151400",new Array(new LrgData("������","151402"),new LrgData("�����E���E�{��","151405"),new LrgData("�B��","151408")))
		)
	);

	// ���쌧
	App.ana.ken_ana[15] = new KenData("���쌧","160000",
		new Array(
			new LrgData("����E�ˉB�E���z�{","160200",new Array(new LrgData("����E�эj�E�ˉB","160202"),new LrgData("���z�{","160208")))
			,new LrgData("��򉷐�E�ؓ����E�H�R��","160500",new Array(new LrgData("�H�R��","160502"),new LrgData("�ؓ���","160511"),new LrgData("��򉷐�","160514")))
			,new LrgData("�u��E�k�u��E���c���a","160600",new Array(new LrgData("�k�u��E�����E���u��","160602"),new LrgData("���c���E�a�E�u�ꍂ��","160605")))
			,new LrgData("��c�E�ʏ��E������","160800",new Array(new LrgData("��c�E�ʏ��E������","160802")))
			,new LrgData("�����E��̌�","160900",new Array(new LrgData("�{��E�����E��̌�","160902")))
			,new LrgData("�ˑq��R�c�E���","161100",new Array(new LrgData("�ˑq��R�c�E���","161102")))
			,new LrgData("�y���E���v�E����","161400",new Array(new LrgData("�y���","161402"),new LrgData("���v�E����","161405")))
			,new LrgData("�����x�E�x�m���E�����E��ӎR�E���C","161600",new Array(new LrgData("��ӎR�E���C","161602"),new LrgData("�����E�x�m��","161605")))
			,new LrgData("���ȁE�����΁E�ԎR�E���_�΁E�P�ؕ�","161800",new Array(new LrgData("���ȁE�����΁E�ԎR","161802"),new LrgData("���_�΁E�P�ؕ��E��������","161808")))
			,new LrgData("��z�K�E���z�K�E���J�E������E����������","161900",new Array(new LrgData("��z�K�E���z�K�E���J�E������E����������","161902")))
			,new LrgData("���n�E���J","162000",new Array(new LrgData("���n��","162002"),new LrgData("�̒r�E���J","162005")))
			,new LrgData("���{�s�i���{�w���ӁE��ԁE�������E���K�j","162200",new Array(new LrgData("���{�w����","162202"),new LrgData("��ԁE������","162205"),new LrgData("���K�E���̑�","162208")))
			,new LrgData("���{�s�i�㍂�n�E��ƁE�����E�씞���j","162300",new Array(new LrgData("�㍂�n","162302"),new LrgData("���","162303"),new LrgData("����","162305"),new LrgData("�씞��","162308")))
			,new LrgData("���ܖ�E�咬","162400",new Array(new LrgData("�咬","162402"),new LrgData("���ܖ�E�䍂","162405")))
			,new LrgData("�ɓ߁E����E�ѓc�E���_","162600",new Array(new LrgData("�����E�ɓ߁E�C��","162602"),new LrgData("���","162608"),new LrgData("�ѓc�E�V����","162612"),new LrgData("���q�E���_�E���ɓ�","162615")))
			,new LrgData("�ؑ]","163200",new Array(new LrgData("�ޗǈ�E����","163202"),new LrgData("�ؑ]�E��x","163205"),new LrgData("��ؑ]�E���āE�n�āi�ꕔ�򕌌��j","163208")))
			,new LrgData("�����E�юR�E�M�Z���E���P","163500",new Array(new LrgData("�����E�юR","163502"),new LrgData("�M�Z���E���P","163505")))
		)
	);

	// �V����
	App.ana.ken_ana[16] = new KenData("�V����","170000",
		new Array(
			new LrgData("�V���E�����E������","170200",new Array(new LrgData("�V���w����","170208"),new LrgData("�����E������E�ܓ��E�i�َR","170212")))
			,new LrgData("���g�E����E��D","170500",new Array(new LrgData("���g�E����","170502"),new LrgData("��D�E�ٓ�","170505")))
			,new LrgData("���E�O���E�⎺�E��F","170600",new Array(new LrgData("���E�O���E�⎺�E��F","170602")))
			,new LrgData("����E�����E�����E�����i���V�J�j","171100",new Array(new LrgData("���������","171102"),new LrgData("����","171105"),new LrgData("�����i���V�J�E�������j","171108")))
			,new LrgData("�싛���E�\�����E�Ó�i�Z�����j","171300",new Array(new LrgData("�\�����E�Ó�E���V�R","171302"),new LrgData("�싛���i����E�Z�����j","171305")))
			,new LrgData("����E�c��","171400",new Array(new LrgData("����","171408"),new LrgData("�c��E������","171411")))
			,new LrgData("��z�E������E����","171700",new Array(new LrgData("��z�E�����E�L�̕l","171702"),new LrgData("������","171705")))
			,new LrgData("���n","172000",new Array(new LrgData("���n","172002")))
		)
	);

	// �x�R��
	App.ana.ken_ana[17] = new KenData("�x�R��","180000",
		new Array(
			new LrgData("���R�E�����E�F�ތ�","180200",new Array(new LrgData("�F�ތ��E����","180202"),new LrgData("����E����","180205"),new LrgData("���R","180208")))
			,new LrgData("�x�R","180500",new Array(new LrgData("�x�R�E����","180502")))
			,new LrgData("�����E�X���E�v�g","180800",new Array(new LrgData("�X���E����","180802"),new LrgData("����E�v�g","180805")))
		)
	);

	// �ΐ쌧
	App.ana.ken_ana[18] = new KenData("�ΐ쌧","190000",
		new Array(
			new LrgData("�֓��E�\�o","191100",new Array(new LrgData("�֓��E�\�o","191102")))
			,new LrgData("�a�q�E����","191400",new Array(new LrgData("�a�q�E����","191402")))
			,new LrgData("����E�H��","192000",new Array(new LrgData("�H��E���ق�","192001"),new LrgData("����E���O","192001")))
			,new LrgData("���R","192300",new Array(new LrgData("���R","192302")))
			,new LrgData("����E�����E�C��","192600",new Array(new LrgData("���ÁE�����E�C��","192602"),new LrgData("����","192605")))
		)
	);

	// ���䌧
	App.ana.ken_ana[19] = new KenData("���䌧","200000",
		new Array(
			new LrgData("�O���E�����","200200",new Array(new LrgData("�����","200202"),new LrgData("�O��","200205")))
			,new LrgData("����E���z�O","200300",new Array(new LrgData("����E�I�]","200302"),new LrgData("���z�O�E�r�c","200305")))
			,new LrgData("�z�O","200400",new Array(new LrgData("�z�O","200402")))
			,new LrgData("�ዷ","200500",new Array(new LrgData("�։�E�ዷ","200502")))
		)
	);

	// �É���
	App.ana.ken_ana[20] = new KenData("�É���","210000",
		new Array(
			new LrgData("�M�C","210200",new Array(new LrgData("�M�C","210202"),new LrgData("��M�C�E����E�ԑ�","210205")))
			,new LrgData("�ɓ��E�F�����E���","210400",new Array(new LrgData("�ɓ��E�F�����E���","210402")))
			,new LrgData("�ɓ�����","210500",new Array(new LrgData("�ɓ�����","210502")))
			,new LrgData("���ɓ�","210800",new Array(new LrgData("���E�k��E�M��","210802"),new LrgData("�А��E���c","210803"),new LrgData("���","210805"),new LrgData("�͒ÁE����l","210808")))
			,new LrgData("���c�E���l","211000",new Array(new LrgData("���c�E���l","211002")))
			,new LrgData("��ɓ�","211100",new Array(new LrgData("�|���l","211105"),new LrgData("�����","211108"),new LrgData("�ΘL��","211111"),new LrgData("�ȗǁE�ɕl","211114")))
			,new LrgData("���ɓ�","211400",new Array(new LrgData("�O�ÁE�吣","211401"),new LrgData("�˓c�E�y��","211402"),new LrgData("�������E�F�v�{","211405"),new LrgData("����E�_��","211408")))
			,new LrgData("���ɓ�","211700",new Array(new LrgData("�ɓ������E��m�E�B�R","211702"),new LrgData("�C�P���E�V�铒�����E���ɓ�","211705")))
			,new LrgData("���ÁE�O��","212000",new Array(new LrgData("����","212002"),new LrgData("�O��","212005")))
			,new LrgData("��a��E�x�m","212300",new Array(new LrgData("��a��","212302"),new LrgData("����","212305"),new LrgData("�x�m�E�x�m�{�E����","212308")))
			,new LrgData("�É��E����","212600",new Array(new LrgData("�É�","212602"),new LrgData("����","212605")))
			,new LrgData("�ĒÁE��O��","212900",new Array(new LrgData("�Ē�","212902"),new LrgData("��O��E�q�V��","212905"),new LrgData("���}","212908"),new LrgData("���c","212911")))
			,new LrgData("����E�������E�썪","213200",new Array(new LrgData("����E�������E�썪","213202")))
			,new LrgData("�l���E�l����","213500",new Array(new LrgData("�l����","213508"),new LrgData("�l���E�l�k","213509"),new LrgData("�V��","213511")))
			,new LrgData("�֓c�E�܈�E�|��","213700",new Array(new LrgData("�|��","212910"),new LrgData("�֓c�E�܈�","212912")))
		)
	);

	// �򕌌�
	App.ana.ken_ana[21] = new KenData("�򕌌�","220000",
		new Array(
			new LrgData("��ˁE���R","220200",new Array(new LrgData("��ˌÐ�E����E����","220202"),new LrgData("��ˍ��R�E�O����","220205")))
			,new LrgData("�����","220300",new Array(new LrgData("�����","220302")))
			,new LrgData("���C�E����","220500",new Array(new LrgData("���C�E����","220502")))
			,new LrgData("�S��E���Z�E��","220600",new Array(new LrgData("�S�㔪���E�����E���h�E����","220602"),new LrgData("���Z�E��","220605")))
			,new LrgData("�b�߁E�������E���E����","220800",new Array(new LrgData("�b�߁E���Ð�E���Q","220802"),new LrgData("�������E�y��E���΁E��","220805")))
			,new LrgData("�򕌁E��_�E�{�V","221100",new Array(new LrgData("�򕌁E�H��","221102"),new LrgData("��_�E�{�V�E�K��","221105")))
			,new LrgData("���싽","221500",new Array(new LrgData("���싽","221502")))
		)
	);

	// ���m��
	App.ana.ken_ana[22] = new KenData("���m��","230000",
		new Array(
			new LrgData("���É�","230200",new Array(new LrgData("���É��w�E���É������","230202"),new LrgData("�h�E�����E�ۂ̓��E�i�S���h�[������","230203"),new LrgData("���R�E��{�E�}���ȓ�","230204")))
			,new LrgData("�O��","230500",new Array(new LrgData("���O�́E�V��E���J","230502"),new LrgData("���O��","230505"),new LrgData("�L���E�L��","230508"),new LrgData("���������E�ɗǌ�","230511"),new LrgData("���S�E�g�ǁE����","230514")))
			,new LrgData("�����E���R�E���q","230800",new Array(new LrgData("���E�Ó�","230802"),new LrgData("���R�E���q�E��{","230805"),new LrgData("���ˁE���i","230808")))
			,new LrgData("�m��","231100",new Array(new LrgData("�m������","231102"),new LrgData("���ԉ꓇","231105"),new LrgData("��","231108")))
		)
	);

	// �O�d��
	App.ana.ken_ana[23] = new KenData("�O�d��","240000",
		new Array(
			new LrgData("�K���E�����E�l���s�E���̎R�E�鎭","240200",new Array(new LrgData("�K���E�����E�l���s�E���̎R","240202"),new LrgData("�鎭�E�T�R","240208")))
			,new LrgData("�ɉ�E���E����","240500",new Array(new LrgData("���","240502"),new LrgData("���R�E�ɉ�","240505"),new LrgData("�����E�Ԗڎl�\����E�R","240508")))
			,new LrgData("�ÁE�v���E�����E����","240800",new Array(new LrgData("��","240802"),new LrgData("�v���E�匴","240805"),new LrgData("���R�E����","240808"),new LrgData("����","240811")))
			,new LrgData("�ɐ��E��","241000",new Array(new LrgData("�ɐ��E��","241002")))
			,new LrgData("���H","241100",new Array(new LrgData("���H","241105")))
			,new LrgData("�쒹�H","241300",new Array(new LrgData("�쒹�H","241302")))
			,new LrgData("�u��","241400",new Array(new LrgData("�u���i�l���E�����E�镔�j","241402"),new LrgData("�쐨","241405"),new LrgData("�u���i�u���E�剤�j","241408")))
			,new LrgData("���ɐ�","241700",new Array(new LrgData("���ɐ�","241705")))
			,new LrgData("���I�B","242000",new Array(new LrgData("�I�ɒ���","242002"),new LrgData("���h�E�F��","242005")))
		)
	);

	// ���ꌧ
	App.ana.ken_ana[24] = new KenData("���ꌧ","250000",
		new Array(
			new LrgData("���","250200",new Array(new LrgData("���","250202")))
			,new LrgData("�F���E���l","250500",new Array(new LrgData("�F��","250502"),new LrgData("���l","250505")))
			,new LrgData("�b��E�M�y","250800",new Array(new LrgData("�b��E�M�y","250802")))
			,new LrgData("�ΐ�","251100",new Array(new LrgData("����","251102")))
			,new LrgData("���ÁE��R�E�ߍ]����","251400",new Array(new LrgData("���ÁE��R","251402"),new LrgData("�ߍ]����","251405")))
			,new LrgData("�Y�ՁE���c","251700",new Array(new LrgData("�Y�ՁE���c","251702")))
		)
	);

	// ���s�{
	App.ana.ken_ana[25] = new KenData("���s�{","260000",
		new Array(
			new LrgData("�͌����E�G�ہE��{����","260200",new Array(new LrgData("�����E�䏊����","260202"),new LrgData("�͌�������","260205"),new LrgData("�G�ےʁE�l���","260208")))
			,new LrgData("���s�w����","260500",new Array(new LrgData("���s�w�O","260502"),new LrgData("���s�w�ߍx�E�R��","260505")))
			,new LrgData("�匴�E�Ɣn�E�M�D","261400",new Array(new LrgData("�匴�E�Ɣn�E�M�D","261405")))
			,new LrgData("�����E���R�E���Y","262000",new Array(new LrgData("�����E���R�E���Y","262002")))
			,new LrgData("�_���E���R�E�k�������","262300",new Array(new LrgData("�_���E���R","262302"),new LrgData("�k�R�E�󃖒r","262305"),new LrgData("����E�k����","262308")))
			,new LrgData("���s�암�i�F���E�������E�R��j","263300",new Array(new LrgData("�������E�R��","263302"),new LrgData("�F���E���c��","263306"),new LrgData("���y","263309")))
			,new LrgData("���̉ԁE�O�g�E���R","263900",new Array(new LrgData("�T���E���̉ԁE�O�g","263902"),new LrgData("���R","263905")))
			,new LrgData("�V�����E�{�ÁE����","264200",new Array(new LrgData("�V�����E�{��","264202"),new LrgData("����","264205")))
			,new LrgData("�O��E�v���l","264500",new Array(new LrgData("�O��","264505"),new LrgData("�v���l�E���V��","264508")))
			,new LrgData("�����E���m�R","264800",new Array(new LrgData("�����E���m�R","264802")))
		)
	);

	// ���{
	App.ana.ken_ana[26] = new KenData("���{","270000",
		new Array(
			new LrgData("���k���i��؁E���΁E���ʁE�ɒO��`�j","271400",new Array(new LrgData("���c�E�L���E�ɒO��`����","271402"),new LrgData("�r�c�E���ʁE�\��","271405"),new LrgData("��؁E���΁E����","271408")))
			,new LrgData("�V���E�]��E�\�O�E�˖{","271700",new Array(new LrgData("�V���E�]��E�\�O�E�˖{","271702")))
			,new LrgData("���w�E�~�c�w�E�����E�������E�{��","272000",new Array(new LrgData("�~�c�E���V���E�����E�V��","272002"),new LrgData("�������E�k�l�E�{��","272005")))
			,new LrgData("���x�C�G���A","272300",new Array(new LrgData("���j�o�[�T���V�e�B","272302"),new LrgData("�V�ێR�E��`�E�Z�V�]","272305")))
			,new LrgData("����E�����E�s������","272600",new Array(new LrgData("�����E�ߌ��Βn","272602"),new LrgData("�J���E�������","272605")))
			,new LrgData("�S�֋��E�Ȃ�΁E�l�c��","272900",new Array(new LrgData("�S�֋��E�Ȃ�΁E�l�c��","272902")))
			,new LrgData("��{���E�V�����E�s���암","273200",new Array(new LrgData("��{���E�V�����E���{��","273202"),new LrgData("�ߋ��E����","273205"),new LrgData("�Z�g�E��������","273208")))
			,new LrgData("��㓌��(�Q����E����E��^�E�����)","273500",new Array(new LrgData("�����E����","273502"),new LrgData("�Q����E����E��^�E�l���","273505"),new LrgData("�����E���䎛","273508"),new LrgData("�x�c�сE�͓�����","273511")))
			,new LrgData("���암�i��E�ݘa�c�E�֐���`�j","273800",new Array(new LrgData("��E����","273802"),new LrgData("�ݘa�c�E�L��","273805"),new LrgData("�֋�E�򍲖�E��","273808")))
		)
	);

	// ���Ɍ�
	App.ana.ken_ana[27] = new KenData("���Ɍ�","280000",
		new Array(
			new LrgData("�_�ˁE�L�n�E����","280200",new Array(new LrgData("�L�n","280201"),new LrgData("�Z�b�E�k�_","280202"),new LrgData("�Z�b�A�C�����h","280203"),new LrgData("�k��E�V�_��","280204"),new LrgData("�O�{�E�|�[�g�A�C�����h","280205"),new LrgData("�����E�����P���p�[�N","280208"),new LrgData("�n�[�o�[�����h�E�_�ˁE�V�J�n","280211"),new LrgData("�{���E���q�E����","280214")))
			,new LrgData("���E��ˁE�O�c�E�R","280500",new Array(new LrgData("���E���{�E��ˁE���c��","280502"),new LrgData("�O�c�E�R","280505")))
			,new LrgData("�P�H�E�ԕ�E�d��","280800",new Array(new LrgData("�P�H�E���Ð�","280802"),new LrgData("�ԕ�E�����E����","280803"),new LrgData("�O�؁E���e�E�����E���p�E���ɒ���","280805")))
			,new LrgData("���E�|��E�L��","281100",new Array(new LrgData("���","281102"),new LrgData("�|��","281105"),new LrgData("�L���E�o��","281108")))
			,new LrgData("���Z�E�l��E����","281200",new Array(new LrgData("���Z","281202"),new LrgData("�l��","281205"),new LrgData("����","281208")))
			,new LrgData("�_��E�����E�{���E�a�c�R","281400",new Array(new LrgData("�n�`�k�����E������","281405"),new LrgData("�_��E�]��","281408"),new LrgData("�n�`�����E�{���E�a�c�R","281411")))
			,new LrgData("�W�H��","281700",new Array(new LrgData("�W�H","281702"),new LrgData("�F�{","281704"),new LrgData("�삠�킶","281705")))
		)
	);

	// �ޗǌ�
	App.ana.ken_ana[28] = new KenData("�ޗǌ�","290000",
		new Array(
			new LrgData("�ޗǁE�����E�V��","290200",new Array(new LrgData("�ޗǁE��a�S�R","290202"),new LrgData("�����E�V��","290205"),new LrgData("����E�M�M�R","290208")))
			,new LrgData("�򒹁E�����E�O��","290500",new Array(new LrgData("�򒹁E�����E�O��","290502"),new LrgData("�����E�F��","290505")))
			,new LrgData("�g��E���g��","290800",new Array(new LrgData("�g��E�V��E����","290802"),new LrgData("���g��E�\�Ð�","290805")))
		)
	);

	// �a�̎R��
	App.ana.ken_ana[29] = new KenData("�a�̎R��","300000",
		new Array(
			new LrgData("�a�̎R�s�E�����E�a�̉Y","300200",new Array(new LrgData("�a�̎R�s�E�����E�a�̉Y","300202")))
			,new LrgData("����R","300300",new Array(new LrgData("����R�E���{","300302")))
			,new LrgData("�L�c�E��V�E����","300500",new Array(new LrgData("�L�c","300502"),new LrgData("��V�E����","300505")))
			,new LrgData("���l�E���_","300800",new Array(new LrgData("���_","300801"),new LrgData("���l�E�암�E�c��","300802")))
			,new LrgData("�{�{�E�V�{�E���ӘH","301000",new Array(new LrgData("���ӘH�E�哃","301002"),new LrgData("�{�{","301005"),new LrgData("�V�{","301008")))
			,new LrgData("���Y�E���{�E������","301100",new Array(new LrgData("���{�E������","301102"),new LrgData("�ߒq���Y�E���n","301105")))
		)
	);

	// ���挧
	App.ana.ken_ana[30] = new KenData("���挧","310000",
		new Array(
			new LrgData("����E���","310200",new Array(new LrgData("����","310202"),new LrgData("���","310205"),new LrgData("����","310208"),new LrgData("�l���E����","310211")))
			,new LrgData("�q�g�E�O���E�����l","310500",new Array(new LrgData("�͂킢�E����","310502"),new LrgData("�O��","310505"),new LrgData("�q�g�E�֋�","310508")))
			,new LrgData("�Ďq�E�F���E��R","310800",new Array(new LrgData("�Ďq�E�F���E���`","310802"),new LrgData("��R","310805")))
		)
	);

	// ������
	App.ana.ken_ana[31] = new KenData("������","320000",
		new Array(
			new LrgData("���]�E�����E�ʑ��E���o�_","320100",new Array(new LrgData("���]�E���ۊցE�ʑ�","320102"),new LrgData("����","320105"),new LrgData("���o�_�E�_��","320111")))
			,new LrgData("�o�_�E��c�E�Ό���R","320400",new Array(new LrgData("�o�_�E��ЁE���̐�","320408"),new LrgData("��c�E�����","320411")))
			,new LrgData("�v�c�E�l�c�E�Øa��","320500",new Array(new LrgData("�l�c�E�]�ÁE�L��","320505"),new LrgData("�Øa��E�v�c","320508")))
			,new LrgData("�B��","320800",new Array(new LrgData("���O","320802"),new LrgData("����","320805")))
		)
	);

	// ���R��
	App.ana.ken_ana[32] = new KenData("���R��","330000",
		new Array(
			new LrgData("���R�E�ʖ�E����","330200",new Array(new LrgData("���R�E�ʖ�","330202"),new LrgData("�����E����","330205")))
			,new LrgData("�q�~�E���ЁE��}","330500",new Array(new LrgData("�q�~�E�����E�h�H�R","330502"),new LrgData("���ЁE�䌴�E�}��","330505")))
			,new LrgData("�ÎR�E����O���E�f�R","330800",new Array(new LrgData("�����E�f�R����","330802"),new LrgData("�ÎR�E����","330805"),new LrgData("����E����","330808")))
			,new LrgData("�����E�V���E�g������","331100",new Array(new LrgData("�����E���E���H","331102"),new LrgData("�V���E���N","331105")))
		)
	);

	// �L����
	App.ana.ken_ana[33] = new KenData("�L����","340000",
		new Array(
			new LrgData("���R�E����","340300",new Array(new LrgData("���R�E�����E���܂Ȃ�","340302")))
			,new LrgData("�����E�O���E�|�k","340600",new Array(new LrgData("�����E��ߋ��E�_�΍���","340602"),new LrgData("�O��","340605"),new LrgData("�|�k","340608")))
			,new LrgData("�L���E�{��","340900",new Array(new LrgData("�L��","340902"),new LrgData("�{���E�����s","340905")))
			,new LrgData("�O���E�|���E���L���E��","341100",new Array(new LrgData("�O���E�|���E���L��","340305"),new LrgData("���E�]�c��","340308")))
		)
	);

	// �R����
	App.ana.ken_ana[34] = new KenData("�R����","350000",
		new Array(
			new LrgData("�⍑�E����E����","350300",new Array(new LrgData("�⍑","350302"),new LrgData("����E���h�哇","350305"),new LrgData("����E����","350308")))
			,new LrgData("�R���E�H�F","350600",new Array(new LrgData("�R���E���c�E�h�{","350602"),new LrgData("�H�F","350605")))
			,new LrgData("���E����","351000",new Array(new LrgData("��","351002"),new LrgData("����","351005")))
			,new LrgData("���ցE�F��","351300",new Array(new LrgData("�F��","351302"),new LrgData("���ցE���{�E��I","351305")))
		)
	);

	// ������
	App.ana.ken_ana[35] = new KenData("������","360000",
		new Array(
			new LrgData("�����E��","360200",new Array(new LrgData("����","360202"),new LrgData("��","360205")))
			,new LrgData("����E���a���E����","360500",new Array(new LrgData("����E���a��","360502"),new LrgData("����E�C��E����","360505")))
			,new LrgData("�����E�c�J�E���R","360800",new Array(new LrgData("�����E�c�J�E�r�c","360802"),new LrgData("�e���E���g�E���n","360805"),new LrgData("���R�E�߉�","360808")))
		)
	);

	// ���쌧
	App.ana.ken_ana[36] = new KenData("���쌧","370000",
		new Array(
			new LrgData("�����E���]","370200",new Array(new LrgData("�����E����","370202"),new LrgData("���ʂ��s�E�Óc","370208"),new LrgData("���c�E��������","370211")))
			,new LrgData("�Օ��E�ۋT�E��o","370500",new Array(new LrgData("�Օ��E�P�ʎ�","370502"),new LrgData("�ω���","370505"),new LrgData("�ۋT","370507"),new LrgData("��o�E�F����","370508")))
			,new LrgData("������","370800",new Array(new LrgData("������","370802")))
		)
	);

	// ���Q��
	App.ana.ken_ana[37] = new KenData("���Q��","380000",
		new Array(
			new LrgData("���R�E����","380200",new Array(new LrgData("���R","380202"),new LrgData("����","380205"),new LrgData("�ɗ\","380208")))
			,new LrgData("�����E���܂Ȃ݊C��","380500",new Array(new LrgData("����","380502"),new LrgData("���܂Ȃ݊C��","380505")))
			,new LrgData("��\�E�F�a��","380800",new Array(new LrgData("���q�E��F�E���c��","380802"),new LrgData("�F�a��","380805")))
			,new LrgData("�V���l�E���\","381100",new Array(new LrgData("�����E���\�E�ΒȎR","381102"),new LrgData("�V���l�E�ɗ\�O��","381105")))
		)
	);

	// ���m��
	App.ana.ken_ana[38] = new KenData("���m��","390000",
		new Array(
			new LrgData("���m�E�{��E�썑","390200",new Array(new LrgData("���m�E�t��","390202"),new LrgData("���E����","390203"),new LrgData("�썑�E����","390205"),new LrgData("�{��E�y���E�m����","390208")))
			,new LrgData("���|�E����","390500",new Array(new LrgData("���|","390502"),new LrgData("����","390505")))
			,new LrgData("�����E�l���\","390800",new Array(new LrgData("�����E�l���\�E���","390802"),new LrgData("�����E�y�������E�h��","390805")))
		)
	);

	// ������
	App.ana.ken_ana[39] = new KenData("������","400000",
		new Array(
			new LrgData("�����s�i�����w���ӁE�V�_���Ӂj","400100",new Array(new LrgData("�����s�i�����w���ӁE���ŁE�C�̒����j","400102"),new LrgData("�����s�i�V�_���ӁE�S���l�j","400105")))
			,new LrgData("���ɕ{�E�@��","400300",new Array(new LrgData("���ɕ{�E����s","400302"),new LrgData("�@���E���C","400305"),new LrgData("��{�E����E����","400308")))
			,new LrgData("�����E�O��","400400",new Array(new LrgData("�����E�O��","400402")))
			,new LrgData("�v���āE���߁E�}���","400500",new Array(new LrgData("�v����","400502"),new LrgData("���߁E�}���","400505")))
			,new LrgData("����E�����E�}��","400600",new Array(new LrgData("����E�����E�}��","400602")))
			,new LrgData("�k��B","400800",new Array(new LrgData("�k��B�s�i���q�E�����E��i�j","400802"),new LrgData("���c�E�s���E�L�O","400805"),new LrgData("�ђˁE�c��","400808")))
		)
	);

	// ���ꌧ
	App.ana.ken_ana[40] = new KenData("���ꌧ","410000",
		new Array(
			new LrgData("����E�Ó��E�F�̐�","410200",new Array(new LrgData("����E�Ó��E�F�̐�","410202"),new LrgData("�����E�_��","410205")))
			,new LrgData("���E���Y","410500",new Array(new LrgData("���","410502"),new LrgData("���Y","410505")))
			,new LrgData("����","410800",new Array(new LrgData("����","410802")))
			,new LrgData("���ÁE�Ďq","411100",new Array(new LrgData("���ÁE�Ďq�E���C","411102")))
			,new LrgData("�ɖ����E�L�c","411300",new Array(new LrgData("�ɖ����E�L�c","411302")))
		)
	);

	// ���茧
	App.ana.ken_ana[41] = new KenData("���茧","420000",
		new Array(
			new LrgData("����","420200",new Array(new LrgData("����","420202"),new LrgData("�|���E�呺","420205")))
			,new LrgData("���ˁE���Y�E�c��","420500",new Array(new LrgData("����","420505"),new LrgData("���Y�E�c��","420508")))
			,new LrgData("�����ہE�n�E�X�e���{�X","420600",new Array(new LrgData("������","420602"),new LrgData("�n�E�X�e���{�X","420603"),new LrgData("���C�E�哇","420605")))
			,new LrgData("�����E�_��E���l","420800",new Array(new LrgData("����","420802"),new LrgData("�_��E���l","420805")))
			,new LrgData("�ܓ���","421100",new Array(new LrgData("��ܓ�","421102"),new LrgData("���ܓ�","421105")))
			,new LrgData("���E�Δn","421400",new Array(new LrgData("���","421402"),new LrgData("�Δn","421405")))
		)
	);

	// �F�{��
	App.ana.ken_ana[42] = new KenData("�F�{��","430000",
		new Array(
			new LrgData("�F�{","430200",new Array(new LrgData("�F�{","430202"),new LrgData("�F�y�E�v��","430214")))
			,new LrgData("�ʖ��E�R���E�e�r","430300",new Array(new LrgData("�R���E���R�E�A��","430302"),new LrgData("�r���E�ʖ�","430305"),new LrgData("�e�r","430308")))
			,new LrgData("����E��","430400",new Array(new LrgData("�񗧁E�킢��","430402"),new LrgData("����E���c�E�c�̌��E���莛","430405")))
			,new LrgData("���h","430500",new Array(new LrgData("�숢�h","430502"),new LrgData("���h�E���q","430505")))
			,new LrgData("����E�����E���̎�","430800",new Array(new LrgData("����E�����E���̎�","430802")))
			,new LrgData("�l�g�E����","430900",new Array(new LrgData("�l�g�E����","430902")))
			,new LrgData("�V��","431100",new Array(new LrgData("�V���㓇�E����","431102"),new LrgData("�V�������E���c","431105")))
		)
	);

	// �啪��
	App.ana.ken_ana[43] = new KenData("�啪��","440000",
		new Array(
			new LrgData("�啪","440200",new Array(new LrgData("�啪","440202"),new LrgData("�P�n�E����","440205"),new LrgData("���","440208")))
			,new LrgData("�ʕ{","440500",new Array(new LrgData("�ʕ{","440502")))
			,new LrgData("���z�@","440600",new Array(new LrgData("���z�@�E����","440602")))
			,new LrgData("���ÁE����","440800",new Array(new LrgData("���ÁE��n�k�E�F��","440802"),new LrgData("�����E�n�z","440805")))
			,new LrgData("���c�E�V�����E��n�k","441100",new Array(new LrgData("���c�E�V����","441102")))
			,new LrgData("��d�E�v�Z�E�|�c�E����","441400",new Array(new LrgData("��d","441402"),new LrgData("�v�Z�E�����E�|�c","441405")))
		)
	);

	// �{�茧
	App.ana.ken_ana[44] = new KenData("�{�茧","450000",
		new Array(
			new LrgData("�{��E���E����","450200",new Array(new LrgData("���s","450201"),new LrgData("�{��E���E�V�[�K�C�A","450202"),new LrgData("����C��","450205")))
			,new LrgData("���т́E�s��","450300",new Array(new LrgData("���т́E�s��","450302")))
			,new LrgData("�����E�����E�����","450500",new Array(new LrgData("����","450502"),new LrgData("�����","450505"),new LrgData("����","450508")))
		)
	);

	// ��������
	App.ana.ken_ana[45] = new KenData("��������","460000",
		new Array(
			new LrgData("�������E����","460200",new Array(new LrgData("�������E����","460202")))
			,new LrgData("��F�E�w�h","460500",new Array(new LrgData("�ɏW�@�E���s���E����l","460502"),new LrgData("�w�h","460505"),new LrgData("�m���E�삳��","460508")))
			,new LrgData("�����E���","460800",new Array(new LrgData("�����E���","460802")))
			,new LrgData("����","461100",new Array(new LrgData("����","461102")))
			,new LrgData("�k�F�E���","461400",new Array(new LrgData("�o���E���v��","461402"),new LrgData("���","461405"),new LrgData("����E���������ؖ�","461408")))
			,new LrgData("����","461700",new Array(new LrgData("������","461702"),new LrgData("��q��","461705"),new LrgData("���v��","461708"),new LrgData("��G����","461711"),new LrgData("�f���h��","461714"),new LrgData("�����哇","461717"),new LrgData("��E���E���V���E���i�Ǖ���","461720"),new LrgData("�^�_��","461723")))
		)
	);

	// ���ꌧ
	App.ana.ken_ana[46] = new KenData("���ꌧ","470000",
		new Array(
			new LrgData("�ߔe","470200",new Array(new LrgData("�ߔe","470202"),new LrgData("��","470205")))
			,new LrgData("����s�i�R�U�j�E�k�J�E�X��p","470500",new Array(new LrgData("����s�i�R�U�j","470502"),new LrgData("�k�J�E�Î�[","470503"),new LrgData("�X��p","470511")))
			,new LrgData("���C�݁E���C��","470800",new Array(new LrgData("���C��","470802"),new LrgData("���C��","470805")))
			,new LrgData("�암","471100",new Array(new LrgData("����","471102"),new LrgData("���K","471105")))
			,new LrgData("�{���E����E����","471400",new Array(new LrgData("�{���E�ɍ]���E���[��","471402"),new LrgData("����","471405"),new LrgData("����","471408")))
			,new LrgData("����","471700",new Array(new LrgData("�Ί_��","471702"),new LrgData("���\���E���l���E�|�x��","471705"),new LrgData("�{�Ó�","471708"),new LrgData("�^�ߍ���","471711"),new LrgData("�v�ē�","471714"),new LrgData("�ɕ������E�ɐ�����","471717"),new LrgData("�c�Ǌԏ���","471720"),new LrgData("�哌��","471723")))
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


/* JR�p�}�X�^�f�[�^ */
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
	 * �X���[�Y�X�N���[��
	 **/

	App.jr.mst2 = new Array(
		new arrData("�k�C��","01")
		,new arrData("���k","02")
		,new arrData("�֓�","03")
		,new arrData("�b�M�z","04")
		,new arrData("���C","05")
		,new arrData("�k��","06")
		,new arrData("�ߋE","07")
		,new arrData("����","08")
		,new arrData("�l��","09")
		,new arrData("��B","10")
	);


	// �o���n�f�[�^
	App.jr.arr = new Array(9);

	// �k�C��
	App.jr.arr[0] = new makeArr("�k�C��","01",
		new Array(
			new depData("�k�C��","1")
			,new depData("���k","11")
			,new depData("��s��","31")
			,new depData("�֐�","56")
		)
	);

	// ���k
	App.jr.arr[1] = new makeArr("���k","02",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
		)
	);

	// �֓�
	App.jr.arr[2] = new makeArr("�֓�","03",
		new Array(
			new depData("���k","11")
			,new depData("�b�M�z","26")
			,new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	// �b�M�z
	App.jr.arr[3] = new makeArr("�b�M�z","04",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	// ���C
	App.jr.arr[4] = new makeArr("���C","05",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	// �k��
	App.jr.arr[5] = new makeArr("�k��","06",
		new Array(
			new depData("��s��","31")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("��B","81")
		)
	);

	// �ߋE
	App.jr.arr[6] = new makeArr("�ߋE","07",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	// ����
	App.jr.arr[7] = new makeArr("����","08",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	// �l��
	App.jr.arr[8] = new makeArr("�l��","09",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("��B","81")
		)
	);

	// ��B
	App.jr.arr[9] = new makeArr("��B","10",
		new Array(
			new depData("��s��","31")
			,new depData("�k��","46")
			,new depData("����","41")
			,new depData("�֐�","56")
			,new depData("����","61")
			,new depData("�l��","71")
			,new depData("��B","81")
		)
	);

	App.jr.mst = new Array(
		new depData("�k�C��","1")
		,new depData("���k","11")
		,new depData("��s��","31")
		,new depData("�b�M�z","26")
		,new depData("�k��","46")
		,new depData("����","41")
		,new depData("�֐�","56")
		,new depData("����","61")
		,new depData("�l��","71")
		,new depData("��B","81")
	);


	// �o���n�f�[�^
	App.jr.dep = new Array(10);

	// �k�C��
	App.jr.dep[0] = new makeDep("�k�C��","1",
		new Array(
			new dstData("�k�C��","01")
		)
	);

	// ���k
	App.jr.dep[1] = new makeDep("���k","11",
		new Array(
			new dstData("�k�C��","01")
			,new dstData("�֓�","03")
		)
	);

	// ��s��
	App.jr.dep[2] = new makeDep("��s��","31",
		new Array(
			new dstData("�k�C��","01")
			,new dstData("���k","02")
			,new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("�k��","06")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// �b�M�z
	App.jr.dep[3] = new makeDep("�b�M�z","26",
		new Array(
			new dstData("�֓�","03")
		)
	);

	// �k��
	App.jr.dep[4] = new makeDep("�k��","46",
		new Array(
			new dstData("���k","02")
			,new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// ����
	App.jr.dep[5] = new makeDep("����","41",
		new Array(
			new dstData("���k","02")
			,new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("�k��","06")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// �֐�
	App.jr.dep[6] = new makeDep("�֐�","56",
		new Array(
			new dstData("�k�C��","01")
			,new dstData("���k","02")
			,new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("�k��","06")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// ����
	App.jr.dep[7] = new makeDep("����","61",
		new Array(
			new dstData("���k","02")
			,new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("�k��","06")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// �l��
	App.jr.dep[8] = new makeDep("�l��","71",
		new Array(
			new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			//			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);

	// ��B
	App.jr.dep[9] = new makeDep("��B","81",
		new Array(
			new dstData("�֓�","03")
			,new dstData("�b�M�z","04")
			,new dstData("�k��","06")
			,new dstData("���C","05")
			,new dstData("�ߋE","07")
			,new dstData("����","08")
			,new dstData("�l��","09")
			,new dstData("��B","10")
		)
	);


	// �����n�f�[�^
	App.jr.dst = new Array(10);

	// �k�C��
	App.jr.dst["01"] = new makeDst("�k�C��","01",
		new Array(
			new kenData("�k�C��","01")
		)
	);

	// ���k
	App.jr.dst["02"] = new makeDst("���k","02",
		new Array(
			new kenData("�X","02")
			,new kenData("���","03")
			,new kenData("�{��","04")
			,new kenData("�H�c","05")
			,new kenData("�R�`","06")
			,new kenData("����","07")
		)
	);

	// �֓�
	App.jr.dst["03"] = new makeDst("�֓�","03",
		new Array(
			new kenData("���","08")
			,new kenData("�Ȗ�","09")
			,new kenData("�Q�n","10")
			,new kenData("���","11")
			,new kenData("��t","12")
			,new kenData("����","13")
			,new kenData("�_�ސ�","14")
		)
	);

	// �b�M�z
	App.jr.dst["04"] = new makeDst("�b�M�z","04",
		new Array(
			new kenData("�V��","15")
			,new kenData("�R��","19")
			,new kenData("����","20")
		)
	);

	// �k��
	App.jr.dst["06"] = new makeDst("�k��","06",
		new Array(
			new kenData("�x�R","16")
			,new kenData("�ΐ�","17")
			,new kenData("����","18")
		)
	);

	// ���C
	App.jr.dst["05"] = new makeDst("���C","05",
		new Array(
			new kenData("��","21")
			,new kenData("�É�","22")
			,new kenData("���m","23")
			,new kenData("�O�d","24")
		)
	);

	// �ߋE
	App.jr.dst["07"] = new makeDst("�ߋE","07",
		new Array(
			new kenData("����","25")
			,new kenData("���s","26")
			,new kenData("���","27")
			,new kenData("����","28")
			,new kenData("�ޗ�","29")
			,new kenData("�a�̎R","30")
		)
	);

	// ����
	App.jr.dst["08"] = new makeDst("����","08",
		new Array(
			new kenData("����","31")
			,new kenData("����","32")
			,new kenData("���R","33")
			,new kenData("�L��","34")
			,new kenData("�R��","35")
		)
	);

	// �l��
	App.jr.dst["09"] = new makeDst("�l��","09",
		new Array(
			new kenData("����","36")
			,new kenData("����","37")
			,new kenData("���Q","38")
			,new kenData("���m","39")
		)
	);

	// ��B
	App.jr.dst["10"] = new makeDst("��B","10",
		new Array(
			new kenData("����","40")
			,new kenData("����","41")
			,new kenData("����","42")
			,new kenData("�F�{","43")
			,new kenData("�啪","44")
			,new kenData("�{��","45")
			,new kenData("������","46")
		)
	);



	App.jr.kenjr = new Array(47);

	// �k�C��
	App.jr.kenjr["01"] = new makeKen("�k�C��","01",
		new Array(
			new areaData("�D�y�E��R�k","110")
			,new areaData("���M�E�L����","111")
			,new areaData("�j�Z�R�E���X�c","109")
			,new areaData("���فE���̐�E����E���O","108")
			,new areaData("�эL�E�\���E�ݏ֖�","104")
			,new areaData("����E�w�_��","105")
			,new areaData("�x�ǖ�E�T�z���E�g�}��","106")
			,new areaData("���H�E�����E���ΘH�E�쓒","103")
			,new areaData("�ԑ��E�m���E���C��","102")
			,new areaData("����΁E�o�ʁE�Ϗ��q�E���","107")
			,new areaData("�t���E���K�E�當","101")
		)
	);

	// �X��
	App.jr.kenjr["02"] = new makeKen("�X��","02",
		new Array(
			new areaData("�X�E��","117")
			,new areaData("�\�a�c��","114")
			,new areaData("����","113")
			,new areaData("�Ìy�����E���C��","115")
			,new areaData("�O�O�E��k","116")
			,new areaData("�ނE��Ӓn�E�O��","112")
		)
	);

	// ��茧
	App.jr.kenjr["03"] = new makeKen("��茧","03",
		new Array(
			new areaData("�����E��h�E�Ȃ�","126")
			,new areaData("�O���C��","123")
			,new areaData("����E���","124")
			,new areaData("�Ԋ�����","125")
			,new areaData("����E������","127")
		)
	);

	// �{�錧
	App.jr.kenjr["04"] = new makeKen("�{�錧","04",
		new Array(
			new areaData("���","135")
			,new areaData("�Ί��E�C���","133")
			,new areaData("�����E����","134")
			,new areaData("����E����","136")
			,new areaData("�H�ہE���","137")
			,new areaData("�q","138")
		)
	);

	// �H�c��
	App.jr.kenjr["05"] = new makeKen("�H�c��","05",
		new Array(
			new areaData("�H�c","121")
			,new areaData("�哒�E�����E���","118")
			,new areaData("�c���","119")
			,new areaData("����","120")
			,new areaData("�j��","122")
		)
	);

	// �R�`��
	App.jr.kenjr["06"] = new makeKen("�R�`��","06",
		new Array(
			new areaData("�R�`","129")
			,new areaData("��c�E�߉��E���C","132")
			,new areaData("�đ�","131")
			,new areaData("�V���E����","128")
			,new areaData("��̎R�E����","130")
		)
	);

	// ������
	App.jr.kenjr["07"] = new makeKen("������","07",
		new Array(
			new areaData("�����E�э�","139")
			,new areaData("�S�R�E�x�E�֒�M�C","140")
			,new areaData("���́E���킫","141")
			,new areaData("���m�q�E��Í���","142")
			,new areaData("���c��E���֒�E���R","143")
		)
	);

	// ��錧
	App.jr.kenjr["08"] = new makeKen("��錧","08",
		new Array(
			new areaData("�����E�ܓc�E�܉Y","173")
			,new areaData("���ˁE���","174")
			,new areaData("�����E����","175")
			,new areaData("���΁E�y�Y","176")
		)
	);

	// �Ȗ،�
	App.jr.kenjr["09"] = new makeKen("�Ȗ،�","09",
		new Array(
			new areaData("�F�s�{","158")
			,new areaData("�ߐ{�E����","157")
			,new areaData("���R�E����","159")
			,new areaData("����","160")
			,new areaData("�S�{��E�쎡�E������","161")
		)
	);

	// �Q�n��
	App.jr.kenjr["10"] = new makeKen("�Q�n��","10",
		new Array(
			new areaData("�O���E����","167")
			,new areaData("�ɍ���","165")
			,new areaData("����E�����E�V�_","162")
			,new areaData("�l���E���P��","163")
			,new areaData("���ÁE����","164")
			,new areaData("�镔�E���`","166")
			,new areaData("�y���","168")
		)
	);

	// ��ʌ�
	App.jr.kenjr["11"] = new makeKen("��ʌ�","11",
		new Array(
			new areaData("��������","170")
			,new areaData("�F�J�E��z�E����","171")
			,new areaData("�����E�z�J","169")
			,new areaData("�����E����","172")
		)
	);

	// ��t��
	App.jr.kenjr["12"] = new makeKen("��t��","12",
		new Array(
			new areaData("���l�E�Y��","180")
			,new areaData("���E���ˁE��c","177")
			,new areaData("���c","178")
			,new areaData("�����E�Óc���E�D��","179")
			,new areaData("�َR�E���l�E��q�E�؍X��","181")
			,new areaData("���Y�E�����E����","182")
			,new areaData("���i��E��\�㗢","183")
			,new areaData("��t�E�s��","184")
		)
	);

	// �����s
	App.jr.kenjr["13"] = new makeKen("�����s","13",
		new Array(
			new areaData("�����E���","188")
			,new areaData("�i��E��X�E���c�E�H�c","190")
			,new areaData("�����E�����E�ԍ�E�Z�{��","189")
			,new areaData("�V�h�E�a�J","191")
			,new areaData("�r�܁E���","185")
			,new areaData("���E�󑐁E�����m��","186")
			,new areaData("�������J�E����","192")
			,new areaData("�����E�����E�ю���","187")
			,new areaData("�g�ˎ��E����E�����q�E����","193")
			,new areaData("�ɓ������E���}��","194")
		)
	);

	// �_�ސ쌧
	App.jr.kenjr["14"] = new makeKen("�_�ސ쌧","14",
		new Array(
			new areaData("���l�E�V���l","196")
			,new areaData("���{��E�郖���E�O�Y","197")
			,new areaData("���q�E�Ó�","198")
			,new areaData("���c���E���͌�","199")
			,new areaData("���؁E�юR����","200")
			,new areaData("����","201")
			,new areaData("���E�ߌ�","195")
		)
	);

	// �V����
	App.jr.kenjr["15"] = new makeKen("�V����","15",
		new Array(
			new areaData("�V���E�⎺�E��F","144")
			,new areaData("���g�E����","145")
			,new areaData("����E�z�㓒��E�Z����","146")
			,new areaData("���]�ÁE�����E�ԑq","147")
			,new areaData("���n","148")
		)
	);

	// �x�R��
	App.jr.kenjr["16"] = new makeKen("�x�R��","16",
		new Array(
			new areaData("�x�R","232")
			,new areaData("���R�E�����E�F�ތ�","231")
			,new areaData("�����E�X���E�v�g","233")
		)
	);

	// �ΐ쌧
	App.jr.kenjr["17"] = new makeKen("�ΐ쌧","17",
		new Array(
			new areaData("����","235")
			,new areaData("�a�q�E�֓��E�H��","234")
			,new areaData("���ꉷ��","236")
		)
	);

	// ���䌧
	App.jr.kenjr["18"] = new makeKen("���䌧","18",
		new Array(
			new areaData("�ዷ�E�։�","239")
			,new areaData("����E�z�O","238")
			,new areaData("�����E���R�E���q�V","237")
		)
	);

	// �R����
	App.jr.kenjr["19"] = new makeKen("�R����","19",
		new Array(
			new areaData("�Θa�E�R���s","204")
			,new areaData("�b�{�E����","203")
			,new areaData("�����E�����򥔪���x","202")
			,new areaData("�����E���R","205")
			,new areaData("�͌��΁E�x�m�܌�","206")
		)
	);

	// ���쌧
	App.jr.kenjr["20"] = new makeKen("���쌧","20",
		new Array(
			new areaData("����","151")
			,new areaData("���{�E�㍂�n�E�����E���","155")
			,new areaData("��򉷐�E����","149")
			,new areaData("�u�ꍂ���E���c���E�a","150")
			,new areaData("��c�E�ˑq��R�c�E�y���","152")
			,new areaData("�z�K�E���ȁE������","153")
			,new areaData("�ؑ]�E�ѓc�E���_","154")
			,new areaData("�咬�E���n","156")
		)
	);

	// �򕌌�
	App.jr.kenjr["21"] = new makeKen("�򕌌�","21",
		new Array(
			new areaData("��ˁE���R","218")
			,new areaData("���C�E�S��","219")
			,new areaData("�b�߁E���Ð�","220")
			,new areaData("�򕌁E��_","221")
		)
	);

	// �É���
	App.jr.kenjr["22"] = new makeKen("�É���","22",
		new Array(
			new areaData("�É��E����","207")
			,new areaData("�ĒÁE�|��E��O��","216")
			,new areaData("�M�C�E�ɓ��R","209")
			,new areaData("�ɓ�","210")
			,new areaData("�������E�y��E���ɓ�","215")
			,new areaData("�l���E�ڎR��","217")
			,new areaData("�����E�C�P���E���ɓ�","211")
			,new areaData("�郖��E�ɓ�����","212")
			,new areaData("�M��E���E���ɓ�","213")
			,new areaData("���c�E��ɓ�","214")
			,new areaData("�x�m�E���ÁE�O��","208")
		)
	);

	// ���m��
	App.jr.kenjr["23"] = new makeKen("���m��","23",
		new Array(
			new areaData("���É��s��","223")
			,new areaData("���Y�E���S�E�L��","225")
			,new areaData("�m��","224")
			,new areaData("���R�E��{","222")
		)
	);

	// �O�d��
	App.jr.kenjr["24"] = new makeKen("�O�d��","24",
		new Array(
			new areaData("�ɐ��E���H�E����","228")
			,new areaData("�����E�u���E�����̋�","229")
			,new areaData("�����E�l���s�E�鎭","226")
			,new areaData("�ÁE����E�R����","227")
			,new areaData("�I�ɒ���","230")
		)
	);

	// ���ꌧ
	App.jr.kenjr["25"] = new makeKen("���ꌧ","25",
		new Array(
			new areaData("��ÁE������","243")
			,new areaData("���ÁE�ߍ]����","242")
			,new areaData("���l�E�F��","241")
			,new areaData("�ߍ]���ÁE�}�L�m","240")
		)
	);

	// ���s�{
	App.jr.kenjr["26"] = new makeKen("���s�{","26",
		new Array(
			new areaData("���s�w����","249")
			,new areaData("���s�s���S��","248")
			,new areaData("�_���E���R","250")
			,new areaData("���R","251")
			,new areaData("�����E�R��","252")
			,new areaData("�F��","253")
			,new areaData("�O��","244")
			,new areaData("�V�����E����","245")
			,new areaData("�T���E���m�R�E���̉�","246")
			,new areaData("���Y�E�Ɣn�E�匴","247")
		)
	);

	// ���{
	App.jr.kenjr["27"] = new makeKen("���{","27",
		new Array(
			new areaData("���L�^","264")
			,new areaData("�V���","263")
			,new areaData("���k��","262")
			,new areaData("���~�i�~","265")
			,new areaData("����","266")
			,new areaData("�V�����E��{��","267")
			,new areaData("��`�E���j�o�[�T���V�e�B","268")
			,new areaData("��㓌��","269")
			,new areaData("���암","270")
		)
	);

	// ���Ɍ�
	App.jr.kenjr["28"] = new makeKen("���Ɍ�","28",
		new Array(
			new areaData("�_�ˁE�O�{","276")
			,new areaData("���΁E���e","278")
			,new areaData("�P�H�E�ԕ�","279")
			,new areaData("�L�n","275")
			,new areaData("���E�O�c�E���","274")
			,new areaData("���_�E�{��","277")
			,new areaData("���E�|��","272")
			,new areaData("������","273")
			,new areaData("�W�H��","280")
			,new areaData("���Z�E�����E�_��","271")
		)
	);

	// �ޗǌ�
	App.jr.kenjr["29"] = new makeKen("�ޗǌ�","29",
		new Array(
			new areaData("�ޗǁE����","254")
			,new areaData("���J���E����","255")
			,new areaData("�g��E�\�Ð�","256")
		)
	);

	// �a�̎R��
	App.jr.kenjr["30"] = new makeKen("�a�̎R��","30",
		new Array(
			new areaData("���l�E�c��","260")
			,new areaData("�a�̎R","257")
			,new areaData("����R","258")
			,new areaData("�L�c�E��V","259")
			,new areaData("���{�E���Y","261")
		)
	);

	// ���挧
	App.jr.kenjr["31"] = new makeKen("���挧","31",
		new Array(
			new areaData("����","283")
			,new areaData("�O���E�͂킢�E����","282")
			,new areaData("�F���E�Ďq�E��R","281")
		)
	);

	// ������
	App.jr.kenjr["32"] = new makeKen("������","32",
		new Array(
			new areaData("�B��","287")
			,new areaData("���]�E�ʑ��E�o�_","288")
			,new areaData("�Øa��E�L��","289")
		)
	);

	// ���R��
	App.jr.kenjr["33"] = new makeKen("���R��","33",
		new Array(
			new areaData("���R�E�ʖ�E����","285")
			,new areaData("�q�~�E���ЁE�}��","286")
			,new areaData("�����E���ÁE����","284")
		)
	);

	// �L����
	App.jr.kenjr["34"] = new makeKen("�L����","34",
		new Array(
			new areaData("�L���E�{��","291")
			,new areaData("�O���E��ߋ�","290")
			,new areaData("���R�E�����E���E�ۂ̉Y","292")
		)
	);

	// �R����
	App.jr.kenjr["35"] = new makeKen("�R����","35",
		new Array(
			new areaData("���ցE�F��","294")
			,new areaData("�R���E�h�{�E�H�g��E���c","295")
			,new areaData("�⍑�E���R","296")
			,new areaData("���E����","293")
		)
	);

	// ������
	App.jr.kenjr["36"] = new makeKen("������","36",
		new Array(
			new areaData("��E����","300")
			,new areaData("�c�J�E�����","301")
		)
	);

	// ���쌧
	App.jr.kenjr["37"] = new makeKen("���쌧","37",
		new Array(
			new areaData("����","297")
			,new areaData("�ۋT�E�Օ�","298")
			,new areaData("������","299")
		)
	);

	// ���Q��
	App.jr.kenjr["38"] = new makeKen("���Q��","38",
		new Array(
			new areaData("���R�E����","305")
			,new areaData("�����E�V���l","306")
			,new areaData("�F�a���E�����l","307")
		)
	);

	// ���m��
	App.jr.kenjr["39"] = new makeKen("���m��","39",
		new Array(
			new areaData("���m","302")
			,new areaData("���ˁE���|","303")
			,new areaData("�����E�l���\","304")
		)
	);

	// ������
	App.jr.kenjr["40"] = new makeKen("������","40",
		new Array(
			new areaData("�����w�O","309")
			,new areaData("���B�E�V�_�E����","308")
			,new areaData("��i�E���q","310")
			,new areaData("�v���āE����","311")
		)
	);

	// ���ꌧ
	App.jr.kenjr["41"] = new makeKen("���ꌧ","41",
		new Array(
			new areaData("����E����","325")
			,new areaData("���ÁE�ɖ����E�Ďq","326")
			,new areaData("���E���Y�E����","327")
		)
	);

	// ���茧
	App.jr.kenjr["42"] = new makeKen("���茧","42",
		new Array(
			new areaData("����E��R","328")
			,new areaData("�����ہE���ˁE�n�E�X�e���{�X","329")
			,new areaData("�����E�_��","330")
			,new areaData("���E�Δn�E�ܓ�","331")
		)
	);

	// �F�{��
	App.jr.kenjr["43"] = new makeKen("�F�{��","43",
		new Array(
			new areaData("�F�{","320")
			,new areaData("�e�r�E�R��","321")
			,new areaData("�V��","323")
			,new areaData("���h�E����E��","322")
			,new areaData("����E�l�g","324")
		)
	);

	// �啪��
	App.jr.kenjr["44"] = new makeKen("�啪��","44",
		new Array(
			new areaData("�ʕ{�E�S��","316")
			,new areaData("���z�@","315")
			,new areaData("�啪","312")
			,new areaData("���c�E�V�����E��d","314")
			,new areaData("���ÁE�n�z�E����","313")
		)
	);

	// �{�茧
	App.jr.kenjr["45"] = new makeKen("�{�茧","45",
		new Array(
			new areaData("�{��E����E��","317")
			,new areaData("�����E�����E����","318")
			,new areaData("�s��E���т�","319")
		)
	);

	// ��������
	App.jr.kenjr["46"] = new makeKen("��������","46",
		new Array(
			new areaData("�������E����","332")
			,new areaData("����","334")
			,new areaData("�o���E�s���","333")
			,new areaData("�w�h�E�J��","335")
			,new areaData("����","336")
			,new areaData("���v���E��q���E�����哇�E�^�_��","337")
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
			// �h�̂݌����̏ꍇ�́A�S�s���{��(����ȊO)���v���_�E���ɃZ�b�g����
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
