// 選取所有的 video 元素
let videos = document.querySelectorAll('video');

// 對每一個 video 元素進行操作
videos.forEach(video => {
  // 將播放速度設定為 2 倍速
  video.playbackRate = 2.0;
});
