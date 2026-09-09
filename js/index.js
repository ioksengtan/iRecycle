var correct = 0
var warning = 0
var correctNumber = 10
var garbageNumber = 10
var allCorrectMessage = "<p>恭喜你，全部分類完成！</p> <button class='reload-button'>重新開始</button>"

// 設定回收區塊的圖片
function setGarbageBlockImage() {
  Object.keys(garbageBlock).forEach(function (key){
    var className = '.garbage-recycle-block__' + key
    var value = garbageBlock[key].type
    var imgHtml = '<img src="./assets/garbage-block/' + value + '.JPG" alt="' + value + '"/>'
    $(className).append(imgHtml)
  })
}

// 取得垃圾區塊的 html
function getRandomGarbage() {
  var keys = Object.keys(garbage)
  var randomGarbageList = []
  for(var i = 0; i < garbageNumber ; i++) {
    var max = keys.length
    var num = getRandomInt(max)
    var key = keys.splice(num, 1)
    randomGarbageList.push(createGarbage(key, garbage[key].type))
  }
  return randomGarbageList.join('');
}

function createGarbage(garbageId, garbageType) {
  var imgHtml = '<img src="./assets/garbage/garbage_' + garbageId + '.jpg" data-garbage-id="' + garbageId + '" alt="' + garbage[garbageId].name + '"/>'
  return '<div class="garbage-item" data-garbage-type-id="' + garbageType + '" data-garbage-id="' + garbageId + '">' + imgHtml + '</div>'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function init() {
  closePopup()
  $(".popup__close").click(closePopup)
  $(".garbage-group").html(getRandomGarbage())
  setGarbageBlockImage()
  $(document).keydown(function(event) {
    if ($(".popup").css('display') === 'none' ) return 
    if (event.keyCode == 27) {
      closePopup()
    }
  })
  
  $(".garbage-item")
    .draggable({ revert: true, })
    .click(function() {
      var garbageId = $(this).attr("data-garbage-id")
      garbageInfoPopup(garbageId)
    })

  $( ".garbage-recycle" )
    .droppable({
      hoverClass: "garbage-recycle--hover",
      drop: function( event, ui ) {
        var garbage = ui.draggable
        var garbageId = garbage.attr("data-garbage-id") // 垃圾的 ID
        var garbageTypeId = garbage.attr("data-garbage-type-id") // 垃圾對應的回收 ID
        var garbageRecycleId = $(this).attr("data-garbage-recycle-id") // 垃圾回收區塊的 ID

        if (String(garbageTypeId) === String(garbageRecycleId)) {
          garbage.hide()

          setCountText(true)
          setMessage(getClassificationMessage(garbageId, true))
          showPopup()
        } else {
          setCountText(false)
          setMessage(getClassificationMessage(garbageId,false))
          showPopup()
        }
        if(correct === correctNumber) {
          setMessage(allCorrectMessage)
          showPopup()
          $(".reload-button").click(function() {
            location.reload();
          })
        }
      }
    })
    .click(function() {
      var garbageRecycleId = $(this).attr("data-garbage-recycle-id")
      var garbageId = $(this).find("[data-garbage-id]").first().attr("data-garbage-id")
      
      if (garbageId) {
        garbageInfoPopup(garbageId)
      } else {
        garbageRecyclePopup(garbageRecycleId)
      }
    })
}

// 顯示彈框
function showPopup() {
  $('.popup').css('display', 'flex');
}

// 關閉彈框
function closePopup() {
  $(".popup").hide()
}

// 設定彈框的文字
function setMessage(node) {
  $(".popup__content").html(node)
}

// 取得分類訊息
function getClassificationMessage(curr_garbage_id, type){
	if(type){
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].correct_message
	}else{
		return garbage[curr_garbage_id].name +" " + garbage[curr_garbage_id].false_message
	}	
}

// 設定文字
function setCountText(type) {
  if(type) {
    correct++
    $(".correct-text").text("正確：" + correct)
  } else {
    warning++
    $(".warning-text").text("錯誤：" + warning)
  }
}

// 垃圾的彈框設定
function garbageInfoPopup(garbageId) {
  var garbageMessage = garbage[garbageId].description
  setMessage(garbageMessage)
  showPopup()
}

// 垃圾回收區塊的彈框設定
function garbageRecyclePopup(garbageRecycleId) {
  var garbageMessage = garbageBlock[garbageRecycleId].description
  setMessage(garbageMessage)
  showPopup()
}

$(document).ready(function() {
  init();
});
