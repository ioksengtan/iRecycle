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
	6: {
		'name': "保特瓶",
		'type': garbage_type['plastic_bottle'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
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
	12: {
		'name': "保特瓶",
		'type': garbage_type['plastic_bottle'],
		'correct_message':"<p>分類正確 bla bla bla</p><img src=\"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png\" />",
		'false_message':"<p>分類錯誤 bla bla bla</p><img src=\"https://png.pngtree.com/png-clipart/20190924/original/pngtree-false-free-png-png-image_4863857.jpg\" />",
	},
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
}


function get_message(curr_garbage_id, curr_garbage_type){
	if(curr_garbage_type == garbage[curr_garbage_id].type){
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].correct_message
	}else{
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].false_message
	}	
}