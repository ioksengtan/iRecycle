garbage_type = {
	'plastic':1,
	'plastic_bottle':2,
	'tin_aluminum_can':3,
	'trash':4,
	'food_waste':5,
	'second_hand':6,
	'paper_boxes':7,	
	'lunch_boxes':8,
	'retort_pouch':9,
	'paper':10,
	'styrofoam':11,
	'leaf':13,
	'glass':14,
}


garbage = {
	1: {
		'name': "一般塑膠",
		'type':garbage_type['trash'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	2: {
		'name': "塑膠盒",
		'type': garbage_type['plastic'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	3: {
		'name': "一般垃圾",
		'type': garbage_type['trash'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	4: {
		'name': "牛奶盒",
		'type': garbage_type['plastic'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	5: {
		'name': "一般垃圾2",
		'type': garbage_type['trash'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	/*
	6: {
		'name': "保特瓶",
		'type': garbage_type['plastic_bottle'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	*/
	7: {
		'name': "利樂包",
		'type': garbage_type['retort_pouch'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	8: {
		'name': "廚餘",
		'type': garbage_type['food_waste'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	9: {
		'name': "鐵鋁罐",
		'type': garbage_type['tin_aluminum_can'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},	
	10: {
		'name': "二手品",
		'type': garbage_type['second_hand'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	11: {
		'name': "紙箱",
		'type': garbage_type['paper_boxes'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	/*
	12: {
		'name': "保特瓶",
		'type': garbage_type['plastic_bottle'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	*/
	13: {
		'name': "餐盒",
		'type': garbage_type['paper_boxes'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	14: {
		'name': "書報",
		'type': garbage_type['paper'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	15: {
		'name': "保麗龍",
		'type': garbage_type['styrofoam'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
	16: {
		'name': "樹枝",
		'type': garbage_type['leaf'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},	
	17: {
		'name': "紙杯",
		'type': garbage_type['trash'],
		'correct_message':"<p>紙杯通常需具備防水與保溫的功能，所以會在內部增加一層由薄蠟或塑膠提煉的防水薄膜；而這樣的複合材質特性，也讓紙杯在回收處理上容易遇到不同的困難。在台灣，紙容器回收暫時仍是個難解的問題，需要政府、業者以及消費者多方共同努力才能突破困境。</p><p>以現階段來說，真的使用紙杯、紙餐盒等紙容器，最好還是盡量丟到<a href='#'>公家的「紙容器」回收系統</a>，較有機會透過專屬處理技術，分離紙與塑膠薄膜，達到「近 100% 再利用」。若找不到公家回收系統，或所處的公司或社區等民間回收系統中，也沒有「紙容器」的分類，那麼，將紙杯丟入「一般垃圾」可能是比較好的做法，避免紙杯繞了一大圈，最後還是成為垃圾，造成後端廢紙處理廠、以及環境更大的負擔。</p>",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},	
	18: {
		'name': "舊毛巾",
		'type': garbage_type['trash'],
		'correct_message':"<p>用了很久的毛巾、浴巾或床單，可能已經不再柔軟、或有難以清除的髒污，有些人可能會直接拿去舊衣回收處理。但事實上，這些用過的生活寢具用品，並不被歸在衣物回收範圍內；若需要丟棄，請記得丟在一般垃圾。</p></p>如果想再多加利用，也可以將舊的毛巾、浴巾、床單先稍做清洗、曬乾，再分別捐贈給願意接受這些資源的坊間流浪動物之家，讓流浪動物得以取得溫暖。<img src='https://c1.staticflickr.com/5/4258/35617671641_b41a41c9e4_c.jpg' /></p>",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},	
	19: {
		'name': "膠囊咖啡",
		'type': garbage_type['trash'],
		'correct_message':"<p>根據 2012 年的統計，全球一年就使用逾 270 億個咖啡膠囊，並衍生了 9 萬公噸垃圾。事實上，膠囊咖啡不環保已經是公開的秘密，因為膠囊的包裝除了有塑膠、錫製封膜，還含有具污染環境的鋁成分。這樣的混和性材質，不僅在回收上不易處理，也對生態環境造成很大的負擔。 </p><p>事實上，咖啡膠囊可以被回收，只是在回收前必須先將包裝拆開、清理殼內殘餘的咖啡渣，再依膠囊材料進行垃圾分類。以現有的程序和技術來說，考量到成本耗費高，願意花心力處理的業者並不多，換句話說，目前能真正被回收的膠囊咖啡其實少之又少，大多只能做為「一般垃圾」處理。而膠囊咖啡機的發明人希爾文（John Sylvan）很早就公開表示，他對這項發明感到十分懊悔，甚至呼籲拒買、拒喝膠囊咖啡。</p>",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
}


function get_message(curr_garbage_id, curr_garbage_type){
	if(curr_garbage_type == garbage[curr_garbage_id].type){
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].correct_message
	}else{
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].false_message
	}	
}