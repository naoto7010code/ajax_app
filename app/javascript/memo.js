const buildHTML = (XHR) => {
// レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    // onloadプロパティで、リクエストの送信に成功したときに行う処理を定義
    XHR.onload = () => {
      // 通信に何らかの問題があった場合の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      // 生成したHTMLを描画する処理を記述
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
 };
 
 window.addEventListener('load', post);