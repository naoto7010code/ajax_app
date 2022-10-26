function post (){
  // app/views/posts/index.html.erbのidを取得
  const submit = document.getElementById("submit");
  // 「投稿ボタンをクリックした」という現象を無効化
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // フォームの要素を取得
    const form = document.getElementById("form");
    const formData = new FormData(form);
    // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    // openメソッドを用いて、リクエスト内容を指定
    XHR.open("POST", "/posts", true);
    // データフォーマットを「JSON」に指定
    XHR.responseType = "json";
    // フォームに入力された内容をサーバー側に送信
    XHR.send(formData);
  });
 };
 
 window.addEventListener('load', post);