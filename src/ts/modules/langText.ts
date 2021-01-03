import Config from './Config'

// 储存下载器使用的多语言文本
// 在属性名前面加上下划线，和文本内容做出区别
// {} 是占位符
// <br> 是换行
type langTextKeys = keyof typeof langText

const langText = {
  "_只下载已收藏": [
      "只下载已收藏",
      "只下載已收藏",
      "Download only bookmarked works",
      "ブックマークのみをダウンロードする"
  ],
  "_下载作品类型": [
      "下载作品类型",
      "下載作品類型",
      "Download work type",
      "ダウンロード作品の種類"
  ],
  "_下载作品类型的提示": [
      "下载哪些类型的作品",
      "下載哪些類型的作品。",
      "Which types of works to download",
      "どの種類の作品をダウンロードしますか"
  ],
  "_多p下载前几张": [
      "设置作品张数",
      "設定作品張數",
      "Number of images downloaded per work",
      "作品ごとにダウンロード画像の数"
  ],
  "_多p下载前几张提示": [
      "下载每个作品的前几张图片。默认值 0 表示全部下载。",
      "下載每個作品的前幾張圖片。預設值 0 表示全部下載。",
      "Download the first few images of each piece. The default value of 0 means all downloads.",
      "各作品の画像が最初の何枚をダウンロードしますか？ デフォルト値の 0 は、すべてをダウンロードします。"
  ],
  "_不能含有tag": [
      "不能含有 tag&nbsp;",
      "不能含有 tag&nbsp;",
      "Exclude specified tag",
      "指定した tag を除外する"
  ],
  "_排除tag的提示文字": [
      "您可在下载前设置要排除的tag，这样在下载时将不会下载含有这些tag的作品。不区分大小写；如需排除多个tag，请使用英文逗号分隔。请注意要排除的tag的优先级大于要包含的tag的优先级。",
      "可在下載前設定要排除的 tag，下載時將排除含有這些 tag 的作品，不區分大小寫；如需排除多個 tag，請使用半形逗號（,）分隔。請注意，要排除的 tag 優先於要包含的 tag。",
      "Before downloading, you can set the tag you want to exclude. Not case sensitive; If you need to set multiple tags, you can use comma (,) separated. The excluded tag takes precedence over the included tag",
      "ダウンロード前に、除外する tag を設定できます。大文字と小文字を区別しない；複数の tag を設定する必要がある場合は、「,」で区切ってください。除外された tag は、必要な tag よりも優先されます"
  ],
  "_设置了排除tag之后的提示": [
      "排除 tag：",
      "排除 tag：",
      "Excludes tag: ",
      "以下の tag を除外："
  ],
  "_必须含有tag": [
      "必须含有 tag&nbsp;",
      "必須含有 tag&nbsp;",
      "Must contain tag",
      "必要な tag&nbsp;"
  ],
  "_必须tag的提示文字": [
      "您可在下载前设置作品里必须包含的tag，不区分大小写；如需包含多个tag，请使用英文逗号分隔。",
      "可在下載前設定作品裡必須包含的 tag，不區分大小寫；如需包含多個 tag，請使用半形逗號（,）分隔。",
      "Before downloading, you can set the tag that must be included. Not case sensitive; If you need to set multiple tags, you can use comma (,) separated. ",
      "ダウンロードする前に、必要な tag を設定することができます。大文字と小文字を区別しない；複数の tag を設定する必要がある場合は、「,」で区切ってください。"
  ],
  "_设置了必须tag之后的提示": [
      "包含 tag：",
      "包含 tag：",
      "Include tag: ",
      "以下の tag を含める："
  ],
  "_筛选宽高的按钮文字": [
      "设置宽高条件",
      "設定寬高條件",
      "Set the width and height",
      "幅と高さの条件を設定する"
  ],
  "_筛选宽高的按钮Title": [
      "在下载前，您可以设置要下载的图片的宽高条件。",
      "在下載前可以設定要下載的圖片的寬高條件。",
      "Before downloading, you can set the width and height conditions of the images you want to download.",
      "ダウンロードする前に、画像の幅と高さの条件を設定できます。"
  ],
  "_设置宽高比例": [
      "设置宽高比例",
      "設定寬高比例",
      "Set the aspect ratio",
      "縦横比を設定する"
  ],
  "_设置宽高比例Title": [
      "设置宽高比例，也可以手动输入宽高比",
      "設定寬高比，也可以手動輸入寬高比。",
      "Set the aspect ratio, or manually type the aspect ratio",
      "縦横比を設定する、手動で縦横比を入力することもできる"
  ],
  "_不限制": [
      "不限制",
      "不限制",
      "not limited",
      "無制限"
  ],
  "_横图": [
      "横图",
      "橫圖",
      "Horizontal",
      "横長"
  ],
  "_竖图": [
      "竖图",
      "豎圖",
      "Vertical",
      "縦長"
  ],
  "_正方形": [
      "正方形",
      "正方形",
      "Square",
      "正方形"
  ],
  "_输入宽高比": [
      "宽高比 >=",
      "寬高比 >=",
      "Aspect ratio >=",
      "縦横比 >="
  ],
  "_设置了宽高比之后的提示": [
      "宽高比：{}",
      "寬高比：{}",
      "Aspect ratio: {}",
      "縦横比：{}"
  ],
  "_宽高比必须是数字": [
      "宽高比必须是数字",
      "寬高比必須是數字",
      "The aspect ratio must be a number",
      "縦横比は数値でなければなりません"
  ],
  "_筛选宽高的提示文字": [
      "请输入最小宽度和最小高度，不会下载不符合要求的图片。",
      "請輸入最小寬度和最小高度，只會下載符合要求的圖片。",
      "Please type the minimum width and minimum height. Will not download images that do not meet the requirements",
      "最小幅と最小高さを入力してください。要件を満たしていない画像はダウンロードされません。"
  ],
  "_本次输入的数值无效": [
      "本次输入的数值无效",
      "本次輸入的數值無效",
      "Invalid input",
      "無効な入力"
  ],
  "_宽度": [
      "宽度",
      "寬度",
      "Width",
      "幅"
  ],
  "_或者": [
      " 或者 ",
      " 或是 ",
      " or ",
      " または "
  ],
  "_并且": [
      " 并且 ",
      " 並且 ",
      " and ",
      " そして "
  ],
  "_高度": [
      "高度",
      "高度",
      "height",
      "高さ"
  ],
  "_个数": [
      "设置作品数量",
      "設定作品數量",
      "Set the number of works",
      "作品数を設定する"
  ],
  "_页数": [
      "设置页面数量",
      "設定頁面數量",
      "Set the number of pages",
      "ページ数を設定する"
  ],
  "_筛选收藏数的按钮文字": [
      "设置收藏数量",
      "設定收藏數量",
      "Set the bookmarkCount conditions",
      "ブックマークされた数を設定する"
  ],
  "_筛选收藏数的按钮Title": [
      "在下载前，您可以设置对收藏数量的要求。",
      "下載前可以設定對收藏數量的要求。",
      "Before downloading, You can set the requirements for the number of bookmarks.",
      "ダウンロードする前に、ブックマークされた数の条件を設定することができます。"
  ],
  "_设置收藏数量": [
      "设置收藏数量",
      "設定收藏數量",
      "Set the number of bookmarks",
      "ブックマークされた数を設定する"
  ],
  "_设置收藏数量的提示": [
      "如果作品的收藏数小于设置的数字，作品不会被下载。",
      "只會下載設定收藏數範圍內的作品。",
      "If the number of bookmarks of the work is less than the set number, the work will not be downloaded.",
      "作品のブックマークされた数が設定された数字よりも少ない場合、作品はダウンロードされません。"
  ],
  "_筛选收藏数的提示文字": [
      "请输入一个数字，如果作品的收藏数小于这个数字，作品不会被下载。",
      "請輸入數字，只會下載設定收藏數範圍內的作品。",
      "Please type a number. If the number of bookmarks of the work is less than this number, the work will not be downloaded.",
      "数字を入力してください。 作品のブックマークされた数がこの数字より少ない場合、作品はダウンロードされません。"
  ],
  "_收藏数大于": [
      "收藏数 >= ",
      "收藏數 >= ",
      "Number of bookmarks >= ",
      "ブックマークの数 >= "
  ],
  "_收藏数小于": [
      "收藏数 <= ",
      "收藏數 <= ",
      "Number of bookmarks <= ",
      "ブックマークの数 <= "
  ],
  "_本次任务已全部完成": [
      "本次任务已全部完成。",
      "本次工作已全部完成",
      "This task has been completed.",
      "このタスクは完了しました。"
  ],
  "_本次任务条件": [
      "本次任务条件: ",
      "本次工作條件：",
      "This task condition: ",
      "このタスクの条件："
  ],
  "_参数不合法": [
      "参数不合法，本次操作已取消。",
      "參數不合法，本次動作已取消。",
      "Parameter is not legal, this operation has been canceled.",
      "パラメータは有効ではありません。この操作はキャンセルされました。"
  ],
  "_向下获取所有作品": [
      "向下获取所有作品",
      "向下取得所有作品",
      "download all the work from this page.",
      "このページからすべての作品をダウンロードする。"
  ],
  "_从本页开始下载提示": [
      "从本页开始下载<br>如果要限制下载的页数，请输入从1开始的数字，1为仅下载本页。",
      "從本頁開始下載。<br>如果要限制下載的頁數，請輸入從 1 開始的數字，1 為僅下載本頁。",
      "Download from this page<br>If you want to set the number of pages to download, type a number starting at 1. This page is 1.",
      "このページからダウンロードする<br>ダウンロードするページを設定する場合は、1から始まる数字を入力してください。 1は現在のページのみをダウンロードする。"
  ],
  "_下载所有页面": [
      "下载所有页面",
      "下載所有頁面",
      "download all pages",
      "すべてのページをダウンロードする"
  ],
  "_下载x个相关作品": [
      "下载 {} 个相关作品",
      "下載 {} 個相關作品",
      "download {} related works.",
      "関連作品 {} 枚をダウンロードする。"
  ],
  "_下载所有相关作品": [
      "下载所有相关作品",
      "下載所有相關作品",
      "download all related works.",
      "関連作品をすべてダウンロードする。"
  ],
  "_下载推荐作品": [
      "下载推荐作品",
      "下載推薦作品",
      "download recommend works",
      "お勧め作品をダウンロードする"
  ],
  "_下载排行榜前x个作品": [
      "下载排行榜前 {} 个作品",
      "下載排行榜前 {} 個作品",
      "download the top {} works in the ranking list",
      "ランク前 {} 位の作品をダウンロードする。"
  ],
  "_输入超过了最大值": [
      "您输入的数字超过了最大值",
      "輸入的數字超出最大值",
      "The number you set exceeds the maximum",
      "入力した番号が最大値を超えています"
  ],
  "_从本页开始下载x页": [
      "从本页开始下载 {} 页",
      "從本頁開始下載 {} 頁",
      "download {} pages from this page",
      "このページから {} ページをダウンロードする"
  ],
  "_从本页开始下载x个": [
      "从本页开始下载 {} 个作品",
      "從本頁開始下載 {} 個作品",
      "Download {} works from this page.",
      "このページから {} 枚の作品をダウンロード。"
  ],
  "_任务开始0": [
      "任务开始",
      "工作開始",
      "Task starts",
      "タスクが開始されます"
  ],
  "_排除作品类型": [
      "排除作品类型：",
      "排除作品類型：",
      "Excludes these types of works: ",
      "これらのタイプの作品を除外します："
  ],
  "_多图作品": [
      "多图作品",
      "多圖作品",
      "Multi-image works",
      "マルチイメージ作品"
  ],
  "_多图下载设置": [
      "多图下载设置",
      "多圖下載設定",
      "Download multi-image works",
      "マルチイメージ設定"
  ],
  "_下载前几张图片提示": [
      "下载前几张图片",
      "下載前幾張圖片",
      "First few images",
      "最初のいくつかの画像"
  ],
  "_不下载": [
      "不下载",
      "不下載",
      "No",
      "必要なし"
  ],
  "_全部下载": [
      "全部下载",
      "全部下載",
      "Yes",
      "全部ダウンロード"
  ],
  "_下载前几张图片": [
      "下载前几张图片：",
      "下載前幾張圖片：",
      "First few images:",
      "最初のいくつかの画像："
  ],
  "_不下载多图作品": [
      "不下载多图作品",
      "不下載多圖作品",
      "Do not download multi-image works",
      "マルチイメージ作品をダウンロードしない"
  ],
  "_多图作品下载前n张图片": [
      "多图作品下载前 {} 张图片",
      "多圖作品下載前 {} 張圖片",
      "Multi-image works download the first {} images",
      "マルチイメージ作品は、最初の {} イメージをダウンロードします"
  ],
  "_插画": [
      "插画 ",
      "插畫 ",
      "Illustrations",
      "イラスト"
  ],
  "_漫画": [
      "漫画 ",
      "漫畫 ",
      "Manga",
      "漫画"
  ],
  "_动图": [
      "动图 ",
      "動圖 ",
      "Ugoira",
      "うごイラ"
  ],
  "_动图保存格式": [
      "动图保存格式",
      "動圖儲存格式",
      "Save the ugoira work as",
      "うごイラの保存タイプ"
  ],
  "_动图保存格式title": [
      "下载动图时，可以把它转换成视频文件",
      "下載動圖時，可以將它轉換為影片檔案。",
      "When you download a ugoira work, you can convert it to a video file.",
      "うごイラをダウンロードするとき、動画に変換することができます。"
  ],
  "_webmVideo": [
      "WebM 视频",
      "影片（WebM）",
      "WebM video",
      "WebM ビデオ"
  ],
  "_gif": [
      "GIF 图片",
      "圖片（GIF）",
      "GIF picture",
      "GIF 画像"
  ],
  "_apng": [
      "APNG 图片",
      "圖片（APNG）",
      "APNG picture",
      "APNG 画像"
  ],
  "_zipFile": [
      "Zip 文件",
      "壓縮檔（Zip）",
      "Zip file",
      "ZIP ファイル"
  ],
  "_当前作品个数": [
      "当前有 {} 个作品 ",
      "目前有 {} 個作品 ",
      "There are now {} works ",
      "今は　{}　枚の作品があります "
  ],
  "_当前有x个用户": [
      "当前有 {} 个用户 ",
      "目前有 {} 個使用者 ",
      "There are currently {} users ",
      "現在 {} 人のユーザーがいます "
  ],
  "_排行榜进度": [
      "已抓取本页面第{}部分",
      "已擷取本頁面第 {} 部分",
      "Part {} of this page has been crawled",
      "このページの第　{}　部がクロールされました"
  ],
  "_新作品进度": [
      "已抓取本页面 {} 个作品",
      "已擷取本頁面 {} 個作品",
      "This page has been crawled {} works",
      "このページの {} つの作品をクロールしました"
  ],
  "_抓取多少个作品": [
      "抓取本页面 {} 个作品",
      "擷取本頁面 {} 個作品",
      "Crawl this page {} works",
      "このページの {} つの作品をクロールします"
  ],
  "_相关作品抓取完毕": [
      "相关作品抓取完毕。包含有{}个作品，开始获取作品信息。",
      "相關作品擷取完畢。包含有 {} 個作品，開始取得作品資訊。",
      "The related works have been crawled. Contains {} works and starts getting information about the work.",
      "関連作品はクロールされました。 {} 作品を含み、その作品に関する情報の取得を開始します。"
  ],
  "_排行榜任务完成": [
      "本页面抓取完毕。<br>当前有{}个作品，开始获取作品信息。",
      "本頁面擷取完畢。<br>目前有 {} 個作品，開始取得作品資訊。",
      "This page is crawled and now has {} works.<br> Start getting the works for more information.",
      "このページのクロール終了。<br>{}枚の作品があります。 作品情報の取得を開始します。"
  ],
  "_开始获取作品信息": [
      "开始获取作品信息",
      "開始取得作品資訊",
      "Start getting work data",
      "作品情報の取得を開始します"
  ],
  "_列表页抓取进度": [
      "已抓取列表页{}个页面",
      "已擷取清單頁 {} 個頁面",
      "Has acquired {} list pages",
      "{} のリストページを取得しました"
  ],
  "_列表页抓取完成": [
      "列表页面抓取完成",
      "清單頁面擷取完成",
      "The list page is crawled",
      "リストページがクロールされ"
  ],
  "_抓取结果为零": [
      "抓取完毕，但没有找到符合筛选条件的作品。",
      "擷取完畢，但沒有找到符合篩選條件的作品。",
      "Crawl finished but did not find works that match the filter criteria.",
      "クロールは終了しましたが、フィルタ条件に一致する作品が見つかりませんでした。"
  ],
  "_当前任务尚未完成": [
      "当前任务尚未完成",
      "目前工作尚未完成",
      "The current task has not yet been completed",
      "現在のタスクはまだ完了していません"
  ],
  "_当前任务尚未完成2": [
      "当前任务尚未完成，请等待完成后再下载。",
      "目前工作尚未完成，請等待完成後再下載。",
      "The current task has not yet been completed",
      "現在のタスクはまだ完了していません、完了するまでお待ちください"
  ],
  "_列表抓取完成开始获取作品页": [
      "当前列表中有{}张作品，开始获取作品信息",
      "目前清單中有 {} 張作品，開始取得作品資訊",
      "Now has {} works. Start getting the works for more information.",
      "{} 枚の作品があります。 作品情報の取得を開始します。"
  ],
  "_开始获取作品页面": [
      "开始获取作品页面",
      "開始取得作品頁面",
      "Start getting the works page",
      "作品ページの取得を開始する"
  ],
  "_无权访问": [
      "无权访问 {}，跳过该作品。",
      "沒有權限存取 {}，跳過該作品。",
      "No access {}, skip.",
      "{} のアクセス権限がありません、作品を無視する。"
  ],
  "_作品页状态码0": [
      "请求的url不可访问",
      "要求的 url 無法存取",
      "The requested url is not accessible",
      "要求された URL にアクセスできません"
  ],
  "_作品页状态码400": [
      "该作品已被删除",
      "該作品已被刪除",
      "The work has been deleted",
      "作品は削除されました"
  ],
  "_作品页状态码403": [
      "无权访问请求的url 403",
      "沒有權限存取要求的 url 403",
      "Have no access to the requested url 403",
      "リクエストされた url にアクセスできない 403"
  ],
  "_作品页状态码404": [
      "404 not found",
      "404 not found",
      "404 not found",
      "404 not found"
  ],
  "_正在抓取": [
      "正在抓取，请等待……",
      "擷取中，請稍後……",
      "Getting, please wait...",
      "クロール中、しばらくお待ちください..."
  ],
  "_获取全部书签作品": [
      "获取全部书签作品，时间可能比较长，请耐心等待。",
      "取得全部書籤作品，時間可能比較長，請耐心等待。",
      "Get all bookmarked works, the time may be longer, please wait.",
      "ブックマークしたすべての作品を取得すると、時間がかかることがあります。お待ちください。"
  ],
  "_抓取图片网址遇到中断": [
      "当前任务已中断!",
      "目前工作已中斷！",
      "The current task has been interrupted.",
      "現在のタスクが中断されました。"
  ],
  "_关闭": [
      "关闭",
      "關閉",
      "close",
      "クローズ"
  ],
  "_输出信息": [
      "输出信息",
      "輸出資訊",
      "Output information",
      "出力情報"
  ],
  "_复制": [
      "复制",
      "複製",
      "Copy",
      "コピー"
  ],
  "_已复制到剪贴板": [
      "已复制到剪贴板，可直接粘贴",
      "已複製至剪貼簿，可直接貼上",
      "Has been copied to the clipboard",
      "クリップボードにコピーされました"
  ],
  "_下载设置": [
      "下载设置",
      "下載設定",
      "Download settings",
      "ダウンロード設定"
  ],
  "_收起展开设置项": [
      "收起/展开设置项",
      "摺疊/展開設定項目",
      "Collapse/expand settings",
      "設定の折りたたみ/展開"
  ],
  "_github": [
      "Github 页面，欢迎 star",
      "Github 頁面，歡迎 star",
      "Github page, if you like, please star it",
      "Github のページ、star をクリックしてください"
  ],
  "_wiki": [
      "使用手册",
      "Wiki",
      "Wiki",
      "マニュアル"
  ],
  "_快捷键切换显示隐藏": [
      "使用 Alt + X，可以显示和隐藏下载面板",
      "Alt + X 可以顯示或隱藏下載面板。",
      "Use Alt + X to show and hide the download panel",
      "Alt + X てダウンロードパネルを表示および非表示にする"
  ],
  "_共抓取到n个文件": [
      "共抓取到 {} 个文件",
      "共擷取到 {} 個檔案",
      "Crawl a total of {} files",
      "合計 {} つのファイルがあります"
  ],
  "_共抓取到n个作品": [
      "共抓取到 {} 个作品",
      "共擷取到 {} 個作品",
      "Crawl a total of {} works",
      "合計 {} つの作品があります"
  ],
  "_命名规则": [
      "命名规则",
      "命名規則",
      "Naming rule",
      "命名規則"
  ],
  "_设置文件夹名的提示": [
      "可以使用 '/' 建立文件夹<br>示例：{user}/{id}",
      "可以使用斜線（/）建立資料夾。<br>範例：{user}/{id}",
      "You can create a directory with '/'<br>Example：{user}/{id}",
      "フォルダーは '/' で作成できます<br>例：{user}/{id}"
  ],
  "_添加命名标记前缀": [
      "添加命名标记前缀",
      "加入命名標記前綴",
      "Add named tag prefix",
      "前に tag の名前を追加"
  ],
  "_添加字段名称提示": [
      "例如，在用户名前面添加“user_”标记",
      "例如，在使用者名稱前面加入「user_」標記。",
      "For example, add the \"user_\" tag in front of the username",
      "たとえば、ユーザー名の前に 「user_」 tag を追加します。"
  ],
  "_查看标记的含义": [
      "查看标记的含义",
      "檢視標記的意義",
      "View the meaning of the tag",
      " tag の意味を表示する"
  ],
  "_命名标记id": [
      "默认文件名，如 44920385_p0",
      "預設檔案名稱，例如：44920385_p0。",
      "Default file name, for example 44920385_p0",
      "デフォルトのファイル名，例 44920385_p0"
  ],
  "_命名标记title": [
      "作品标题",
      "作品標題",
      "works title",
      "作品のタイトル"
  ],
  "_命名标记tags": [
      "作品的 tag 列表",
      "作品的 tag 清單",
      "The tags of the work",
      "作品の tags"
  ],
  "_命名标记user": [
      "画师名字",
      "畫師名稱",
      "Artist name",
      "アーティスト名"
  ],
  "_命名标记userid": [
      "画师 id",
      "畫師 id",
      "Artist id",
      "アーティスト ID"
  ],
  "_命名标记px": [
      "宽度和高度",
      "寬度和高度",
      "width and height",
      "幅と高さ"
  ],
  "_命名标记bmk": [
      "bookmark-count，作品的收藏数。把它放在最前面可以让文件按收藏数排序。",
      "bookmark-count，作品的收藏數。將它放在最前面可以讓檔案依收藏數排序。",
      "bookmark-count, bookmarks number of works.",
      "bookmark-count，作品のボックマークの数、前に追加することでボックマーク数で并べることができます。"
  ],
  "_命名标记id_num": [
      "数字 id，如 44920385",
      "數字 id，例如：44920385。",
      "Number id, for example 44920385",
      "44920385 などの番号 ID"
  ],
  "_命名标记p_num": [
      "图片在作品内的序号，如 0、1、2 …… 每个作品都会重新计数。",
      "圖片在作品內的序號，例如：0、1、2……每個作品都將重新計數。",
      "The serial number of the picture in the work, such as 0, 1, 2 ... Each work will be recounted.",
      "0、1、2 など、作品の画像のシリアル番号。各ピースは再集計されます。"
  ],
  "_命名标记tags_trans": [
      "作品的 tag 列表，附带翻译后的 tag（如果有）",
      "作品的 tag 清單，包含翻譯後的 tag（如果有的話）。",
      "The tags of the work, with the translated tag (if any)",
      "作品の tag リスト、翻訳付き tag (あれば)"
  ],
  "_命名标记tags_transl_only": [
      "翻译后的 tag 列表",
      "譯後的 tag 清單。",
      "Translated tags",
      "翻訳后の tag リスト"
  ],
  "_命名标记date": [
      "作品的创建时间。如 2019-08-29",
      "作品的建立時間。例如：2019-08-29。",
      "The time the creation of the work. Such as 2019-08-29",
      "作品の作成時間。例 2019-08-29"
  ],
  "_命名标记rank": [
      "作品在排行榜中的排名。如 #1、#2 …… 只能在排行榜页面中使用。",
      "作品在排行榜中的排名。例如：#1、#2……只能在排行榜頁面中使用。",
      "The ranking of the work in the ranking pages. Such as #1, #2 ... Can only be used in ranking pages.",
      "作品のランキング。例え　#1、#2 …… ランキングページのみで使用できます。"
  ],
  "_命名标记type": [
      "作品类型，分为 illustration、manga、ugoira、novel",
      "作品類型，分為 illustration、manga、ugoira、novel。",
      "The type of work, divided into illustration, manga, ugoira, novel",
      "作品分類は、illustration、manga、ugoira、novel"
  ],
  "_命名标记提醒": [
      "一定要包含 {id} 或者 {id_num}{p_num}。<br>您可以使用多个标记；建议在不同标记之间添加分割用的字符。示例：{id}-{userid}<br>* 在某些情况下，会有一些标记不可用。",
      "一定要包含 {id} 或者 {id_num}{p_num}。可以使用多個標記；建議在不同標記之間加入分隔用的字元。範例：{id}-{userid}<br><br>＊某些情況下有些標記無法使用。",
      "Be sure to include {id} or {id_num}{p_num}.<br>You can use multiple tags, and you can add a separate character between different tags. Example: {id}-{userid}<br>* In some cases, some tags will not be available.",
      "必ず{id}または{id_num}{p_num}を含めてください。<br>複数のタグを使用することができます；異なるタグ間の分割のために文字を追加することをお勧めします。例：{id}-{userid}<br>* 場合によっては、一部の tag が利用できず。"
  ],
  "_文件夹标记PTag": [
      "当前页面的 tag。当前页面没有 tag 时不可用。",
      "目前頁面的 tag。目前頁面沒有 tag 時無法使用。",
      "The tag of the current page. Not available if the current page has no tag.",
      "現在のページの tag。現在のページの tag がないときは使用できません。"
  ],
  "_命名标记seriesTitle": [
      "系列标题（可能为空）",
      "系列標題（可能為空）",
      "Series title (may be empty)",
      "シリーズタイトル（あれば）"
  ],
  "_命名标记seriesOrder": [
      "作品在系列中的序号，如 #1 #2",
      "作品在系列中的編號，如 #1 #2",
      "The number of the work in the series, such as #1 #2",
      "シリーズの中の作品の番号，例え #1 #2"
  ],
  "_文件夹标记PTitle": [
      "当前页面的标题",
      "目前頁面的標題",
      "The title of this page",
      "ページのタイトル"
  ],
  "_预览文件名": [
      "预览文件名",
      "預覽檔案名稱",
      "Preview file name",
      "ファイル名のプレビュー"
  ],
  "_设置下载线程": [
      "设置下载线程",
      "設定下載執行緒",
      "Set the download thread",
      "ダウンロードスレッドを設定する"
  ],
  "_线程数字": [
      `可以输入 1-${Config.downloadThreadMax} 之间的数字，设置同时下载的数量`,
      `可以輸入 1-${Config.downloadThreadMax} 之間的數字，設定同時下載的數量。`,
      `You can type a number between 1-${Config.downloadThreadMax} to set the number of concurrent downloads`,
      `同時ダウンロード数を設定、1-${Config.downloadThreadMax} の数値を入力してください`
  ],
  "_下载按钮1": [
      "开始下载",
      "開始下載",
      "start download",
      "ダウンロードを開始"
  ],
  "_下载按钮2": [
      "暂停下载",
      "暫停下載",
      "pause download",
      "ダウンロードを一時停止"
  ],
  "_下载按钮3": [
      "停止下载",
      "停止下載",
      "stop download",
      "ダウンロードを停止"
  ],
  "_复制url": [
      "复制 url",
      "複製下載網址",
      "copy urls",
      "URL をコピー"
  ],
  "_当前状态": [
      "当前状态 ",
      "目前狀態：",
      "State ",
      "現在の状態 "
  ],
  "_未开始下载": [
      "未开始下载",
      "未開始下載",
      "Not yet started downloading",
      "まだダウンロードを開始していません"
  ],
  "_下载进度": [
      "下载进度：",
      "下載進度：",
      "Total progress: ",
      "ダウンロードの進行状況："
  ],
  "_下载线程": [
      "下载线程：",
      "下載執行緒：",
      "Thread: ",
      "スレッド："
  ],
  "_常见问题": [
      "常见问题",
      "常見問題",
      "Help",
      "よくある質問"
  ],
  "_uuid": [
      "如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。",
      "如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。",
      "If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.",
      "ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。"
  ],
  "_下载说明": [
      "下载的文件保存在浏览器的下载目录里。<br>请不要在浏览器的下载选项里选中'总是询问每个文件的保存位置'。<br><b>如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。</b><br>如果你使用 ssr、v2ray 等代理软件，开启全局代理有助于提高下载速度。<br>QQ群：116015651",
      "下載的檔案儲存在瀏覽器的下載目錄裡。<br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><b>如果下載後的檔名異常，請停用其他有下載功能的瀏覽器擴充功能。</b>",
      "The downloaded file is saved in the browser`s download directory. <br><b>If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.</b>",
      "ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><b>ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。</b>"
  ],
  "_正在下载中": [
      "正在下载中",
      "正在下載",
      "Downloading",
      "ダウンロード中"
  ],
  "_下载完毕": [
      "✓ 下载完毕",
      "✓ 下載完畢",
      "✓ Download finished",
      "✓ ダウンロードが完了しました"
  ],
  "_已暂停": [
      "下载已暂停",
      "下載已暫停",
      "Download is paused",
      "ダウンロードは一時停止中です"
  ],
  "_已停止": [
      "下载已停止",
      "下載已停止",
      "Download stopped",
      "ダウンロードが停止しました"
  ],
  "_已下载": [
      "已下载",
      "已下載",
      "downloaded",
      "downloaded"
  ],
  "_抓取完毕": [
      "抓取完毕！",
      "擷取完畢！",
      "Crawl finished!",
      "クロールが終了しました！"
  ],
  "_快速下载本页": [
      "快速下载本页作品",
      "快速下載本頁作品",
      "Download this work quickly",
      "この作品をすばやくダウンロードする"
  ],
  "_从本页开始抓取new": [
      "从本页开始抓取新作品",
      "從本頁開始擷取新作品",
      "Crawl the new works from this page",
      "このページから新しい作品を入手する"
  ],
  "_从本页开始抓取old": [
      "从本页开始抓取旧作品",
      "從本頁開始擷取舊作品",
      "Crawl the old works from this page",
      "このページから古い作品を入手する"
  ],
  "_抓取推荐作品": [
      "抓取推荐作品",
      "擷取推薦作品",
      "Crawl the recommend works",
      "推奨作品をダウンロードする"
  ],
  "_抓取推荐作品Title": [
      "抓取页面底部的的推荐作品",
      "擷取頁面底部的推薦作品。",
      "Crawl the recommended works at the bottom of the page",
      "ページの下部で推奨作品をクロールします"
  ],
  "_抓取相关作品": [
      "抓取相关作品",
      "擷取相關作品",
      "Crawl the related works",
      "関連作品をダウンロードする"
  ],
  "_相关作品大于0": [
      " （下载相关作品必须大于 0）",
      " （下載相關作品必須大於 0）",
      "  (Download related works must be greater than 0)",
      " 「ダウンロードする関連作品の数は0より大きくなければならない」"
  ],
  "_默认下载多页": [
      ", 如有多页，默认会下载全部。",
      "，如有多頁，預設會下載全部。",
      ", If there are multiple pages, the default will be downloaded.",
      "、複数のページがある場合、デフォルトですべてをダウンロードされます。"
  ],
  "_调整完毕": [
      "调整完毕，当前有{}个作品。",
      "調整完畢，目前有 {} 個作品。",
      "The adjustment is complete and now has {} works.",
      "調整が完了し、今、{} の作品があります。"
  ],
  "_抓取当前作品": [
      "抓取当前作品",
      "擷取目前作品",
      "Crawl the current work",
      "現在の作品をクロールする"
  ],
  "_抓取当前作品Title": [
      "抓取当前列表里的所有作品",
      "擷取目前清單裡的所有作品",
      "Crawl all the works in the current list",
      "現在のリスト内のすべての作品をクロールする"
  ],
  "_清除多图作品": [
      "清除多图作品",
      "清除多圖作品",
      "Remove multi-drawing works",
      "複数の作品を削除する"
  ],
  "_清除多图作品Title": [
      "如果不需要可以清除多图作品",
      "如果不需要可以清除多圖作品。",
      "If you do not need it, you can delete multiple graphs",
      "必要がない場合は、複数のグラフを削除することができます"
  ],
  "_清除动图作品": [
      "清除动图作品",
      "清除動圖作品",
      "Remove ugoira work",
      "うごイラ作品を削除する"
  ],
  "_清除动图作品Title": [
      "如果不需要可以清除动图作品",
      "如果不需要可以清除動圖作品。",
      "If you do not need it, you can delete the ugoira work",
      "必要がない場合は、うごイラを削除することができます"
  ],
  "_手动删除作品": [
      "手动删除作品",
      "手動刪除作品",
      "Manually delete the work",
      "作品を手動で削除する"
  ],
  "_手动删除作品Title": [
      "可以在下载前手动删除不需要的作品",
      "可以在下載前手動刪除不需要的作品，點擊作品刪除。",
      "You can manually delete unwanted work before downloading",
      "ダウンロードする前に不要な作品を手動で削除することができます"
  ],
  "_退出手动删除": [
      "退出手动删除",
      "結束手動刪除",
      "Exit manually delete",
      "削除モードを終了する"
  ],
  "_抓取本页作品": [
      "抓取本页作品",
      "擷取本頁作品",
      "Crawl this page works",
      "このページをクロールする"
  ],
  "_抓取本页作品Title": [
      "抓取本页列表中的所有作品",
      "擷取本頁清單中的所有作品",
      "Crawl this page works",
      "このページの全ての作品をクロールする"
  ],
  "_抓取本排行榜作品": [
      "抓取本排行榜作品",
      "擷取本排行榜作品",
      "Crawl the works in this list",
      "このリストの作品をクロールする"
  ],
  "_抓取本排行榜作品Title": [
      "抓取本排行榜的所有作品，包括现在尚未加载出来的。",
      "擷取本排行榜的所有作品，包括現在尚未載入出來的。",
      "Crawl all of the works in this list, including those that are not yet loaded.",
      "まだ読み込まれていないものを含めて、このリストの作品をダウンロードする"
  ],
  "_抓取首次登场的作品": [
      "抓取首次登场作品",
      "擷取首次登場作品",
      "Crawl the debut works",
      "初登場作品をダウンロードする"
  ],
  "_抓取首次登场的作品Title": [
      "只下载首次登场的作品",
      "只下載首次登場的作品",
      "Download only debut works",
      "初登場作品のみダウンロードします"
  ],
  "_抓取该页面的图片": [
      "抓取该页面的图片",
      "擷取該頁面的圖片",
      "Crawl the picture of the page",
      "ページの画像をクロールする"
  ],
  "_抓取相似图片": [
      "抓取相似图片",
      "擷取相似圖片",
      "Crawl similar works",
      "類似の作品をクロールする"
  ],
  "_想要获取多少个作品": [
      "您想要获取多少个作品？",
      "想要取得多少個作品？",
      "How many works do you want to download?",
      "いくつの作品をダウンロードしたいですか？"
  ],
  "_数字提示1": [
      "-1, 或者大于 0",
      "-1 或是大於 0",
      "-1, or greater than 0",
      "-1、または 0 より大きい"
  ],
  "_下载大家的新作品": [
      "下载大家的新作品",
      "下載大家的新作品",
      "Download everyone`s new work",
      "みんなの新作をダウンロードする"
  ],
  "_屏蔽设定": [
      "屏蔽設定",
      "封鎖設定",
      "Mute settings",
      "ミュート設定"
  ],
  "_举报": [
      "举报",
      "回報",
      "Report",
      "報告"
  ],
  "_输入id进行抓取": [
      "输入id进行抓取",
      "輸入 id 進行擷取",
      "Type id to crawl",
      "idを入力してダウンロードする"
  ],
  "_输入id进行抓取的提示文字": [
      "请输入作品id。如果有多个id，则以换行分割（即每行一个id）",
      "請輸入作品 id。如果有多個 id，則以換行分隔（即每行一個 id）。",
      "Please type the illustration id. If there is more than one id, one id per line.",
      "イラストレーターIDを入力してください。 複数の id がある場合は、1 行に 1 つの id を付けます。"
  ],
  "_开始抓取": [
      "开始抓取",
      "開始擷取",
      "Start crawling",
      "クロールを開始する"
  ],
  "_给未分类作品添加添加tag": [
      "给未分类作品添加 tag",
      "幫未分類的作品加入 tag",
      "Add tag to unclassified work",
      "未分類の作品に tag を追加"
  ],
  "_id不合法": [
      "id不合法",
      "id 不合法",
      "id is illegal",
      "id が不正な"
  ],
  "_快速收藏": [
      "快速收藏",
      "快速收藏",
      "Quick bookmarks",
      "クイックブックマーク"
  ],
  "_启用": [
      "启用",
      "啟用",
      "Enable",
      "有効にする"
  ],
  "_自动开始下载": [
      "自动开始下载",
      "自動開始下載",
      "Download starts automatically",
      "ダウンロードは自動的に開始されます"
  ],
  "_快速下载的提示": [
      "当“开始下载”状态可用时，自动开始下载，不需要点击下载按钮。",
      "當可下載時自動開始下載，不需要點選下載按鈕。",
      "When the &quot;Start Downloa&quot; status is available, the download starts automatically and no need to click the download button.",
      "「ダウンロードを開始する」ステータスが利用可能になると、ダウンロードは自動的に開始され、ダウンロードボタンをクリックする必要はありません。"
  ],
  "_转换任务提示": [
      "正在转换 {} 个文件",
      "正在轉換 {} 個檔案",
      "Converting {} files",
      "{} ファイルの変換"
  ],
  "_最近更新": [
      "最近更新",
      "最近更新",
      "What`s new",
      "最近更新する"
  ],
  "_确定": [
      "确定",
      "確定",
      "Ok",
      "確定"
  ],
  "_file404": [
      "404 错误：文件 {} 不存在。",
      "404 錯誤：檔案 {} 不存在。",
      "404 error: File {} does not exist.",
      "404 エラー：ファイル {} は存在しません。"
  ],
  "_文件下载失败": [
      "文件 {} 下载失败",
      "檔案 {} 下載失敗",
      "File {} download failed",
      "ファイル {} のダウンロードを失敗しました"
  ],
  "_是否重置设置": [
      "是否重置设置？",
      "確定要重設設定嗎？",
      "Do you want to reset the settings?",
      "設定をリセットしますか？"
  ],
  "_newver": [
      "有新版本可用",
      "有新版本可更新",
      "A new version is available",
      "新しいバージョンがあります"
  ],
  "_快速下载建立文件夹": [
      "快速下载时，始终创建文件夹",
      "快速下載時，始終建立資料夾",
      "Always create directory when downloading quickly",
      "クイックダウンロード時、常にフォルダを作成します"
  ],
  "_快速下载建立文件夹提示": [
      "快速下载时，如果只有一张图片，也会建立文件夹",
      "快速下載時，若只有一張圖片，也會建立資料夾",
      "When downloading quickly, if there is only one picture, a directory is also created",
      "すばやくダウンロードとき、イラストが一枚だけでも、フォルダも作成されます"
  ],
  "_设置id范围": [
      "设置 id 范围",
      "設定 id 範圍",
      "Set id range",
      "id 範囲を設定"
  ],
  "_设置id范围提示": [
      "您可以输入一个作品 id，抓取比它新或者比它旧的作品",
      "可以輸入一個作品 id，擷取比它新或者比它舊的作品。",
      "You can type a work id and crawl works that are newer or older than it",
      "1 つの作品 id を入力することで、それより新しいあるいは古い作品をクロールことができます"
  ],
  "_大于": [
      "大于",
      "大於",
      "Bigger than",
      "より大きい"
  ],
  "_小于": [
      "小于",
      "小於",
      "Less than",
      "より小さい"
  ],
  "_设置投稿时间": [
      "设置投稿时间",
      "設定投稿時間",
      "Set posting date",
      "投稿日時を設定する"
  ],
  "_设置投稿时间提示": [
      "您可以下载指定时间内发布的作品",
      "可以下載指定時間內發布的作品。",
      "You can download works posted in a specified period of time",
      "指定された時間内に配信された作品をダウンロードすることができます"
  ],
  "_时间范围": [
      "时间范围",
      "時間範圍",
      "Time range",
      "時間範囲"
  ],
  "_必须大于0": [
      "必须大于 0",
      "必須大於 0",
      "must be greater than 0",
      "0 より大きくなければなりません"
  ],
  "_开始筛选": [
      "开始筛选",
      "開始篩選",
      "Start screening",
      "スクリーニング開始"
  ],
  "_开始筛选Title": [
      "按照设置来筛选当前 tag 里的作品。",
      "按照設定來篩選目前 tag 裡的作品。",
      "Screen the works in the current tag.",
      "現在の tag にある作品を設定によってスクリーニングする"
  ],
  "_在结果中筛选": [
      "在结果中筛选",
      "在結果中篩選",
      "Screen in results",
      "結果の中からスクリーニング"
  ],
  "_在结果中筛选Title": [
      "您可以改变设置，并在结果中再次筛选。",
      "可以變更設定，並在結果中再次篩選。",
      "You can change the settings and screen again in the results.",
      "設定を変えて、結果の中で再びスクリーニングすることができます。"
  ],
  "_抓取筛选结果": [
      "抓取筛选结果",
      "擷取篩選結果",
      "Crawl the screening results",
      "スクリーニングの結果をクロールする"
  ],
  "_尚未开始筛选": [
      "尚未开始筛选",
      "尚未開始篩選",
      "Screening has not started",
      "まだスクリーニングを開始していない"
  ],
  "_没有数据可供使用": [
      "没有数据可供使用",
      "沒有資料可供使用",
      "No data is available.",
      "使用可能なデータはない"
  ],
  "_预览搜索结果": [
      "预览搜索页面的筛选结果",
      "預覽搜尋頁面的篩選結果",
      "Preview filter results on search page",
      "検索ページのフィルタ結果をプレビューします"
  ],
  "_预览搜索结果说明": [
      "下载器可以把符合条件的作品显示在当前页面上。如果抓取结果太多导致页面崩溃，请关闭这个功能。<br>启用预览功能时，下载器不会自动开始下载。",
      "下載器可以將符合條件的作品顯示在目前頁面上。如果擷取結果太多導致頁面當掉，請關閉這個功能。<br>啟用預覽功能時，下載器不會自動開始下載。",
      "The downloader can display the qualified works on the current page. If too many crawling results cause the page to crash, turn off this feature.<br>When the preview feature is enabled, the downloader does not start downloading automatically.",
      "ローダは、該当する作品を現在のページに表示することができます。クロール結果が多すぎてページが崩れる場合は、この機能をオフにしてください。<br>プレビュー機能を有効にすると、ダウンロードは自動的に開始されません。"
  ],
  "_目录名使用": [
      "目录名使用：",
      "資料夾名稱使用：",
      "Folder name use: ",
      "ディレクトリ名の使用："
  ],
  "_启用快速收藏": [
      "启用快速收藏",
      "開啟快速收藏",
      "Enable quick bookmark",
      "クイックボックマークを有効にする"
  ],
  "_启用快速收藏说明": [
      "当你点击下载器添加的收藏按钮(☆)，把作品添加到书签时，自动添加这个作品的 tag。",
      "當點選下載器新增的收藏按鈕（☆），將作品加入書籤時，自動新增這個作品的 tag。",
      "When you click the favorite button (☆) added by the downloader to bookmark a work, the tag of the work is automatically added.",
      "ダウンローダーに追加されたボックマークボタン「☆」をクリックして、作品をブックマークに追加すると、自動的に作品の tag が追加されます。"
  ],
  "_新增设置项": [
      "新增设置项",
      "新增設定項目",
      "Added setting items",
      "新たな機能を追加されました。"
  ],
  "_抓取": [
      "抓取",
      "擷取",
      "Crawl",
      "クロール"
  ],
  "_下载": [
      "下载",
      "下載",
      "Download",
      "ダウンロード"
  ],
  "_其他": [
      "其他",
      "其他",
      "Other",
      "その他"
  ],
  "_第一张图不带序号": [
      "第一张图不带序号",
      "第一張圖片不包含序號",
      "The first picture without a serial number",
      "最初のイメージの番号を削除します"
  ],
  "_第一张图不带序号说明": [
      "去掉每个作品第一张图的序号。例如 80036479_p0 变成 80036479",
      "去掉每個作品第一張圖的序號。例如：80036479_p0 變成 80036479。",
      "Remove the serial number of the first picture of each work. For example 80036479_p0 becomes 80036479.",
      "作品ごとの最初のイメージの番号を削除します。例えば 80036479_p0 は 80036479 になります。"
  ],
  "_最小值": [
      "最小值",
      "最小值",
      "Minimum",
      "最小値"
  ],
  "_最大值": [
      "最大值",
      "最大值",
      "Maximum",
      "最大値"
  ],
  "_单图作品": [
      "单图作品",
      "單圖作品",
      "Single image works",
      "シングルイメージ作品"
  ],
  "_彩色图片": [
      "彩色图片",
      "彩色圖片",
      "Color picture",
      "カラーイメージ"
  ],
  "_黑白图片": [
      "黑白图片",
      "黑白圖片",
      "Black and white pictures",
      "白黒イメージ"
  ],
  "_不保存图片因为颜色": [
      "{} 没有被保存，因为它的颜色不符合设定。",
      "{} 並未儲存，因為它的色彩不符合設定。",
      "{} was not saved because its colors do not match the settings.",
      "{} は色が設定に合わないため、保存されていません。"
  ],
  "_同时转换多少个动图": [
      "同时转换多少个动图",
      "同時轉換多少個動圖",
      "How many animations are converted at the same time",
      "同時変換のうごイラの上限"
  ],
  "_同时转换多少个动图警告": [
      "同时转换多个动图会增加资源占用。<br>转换动图时，请保持该标签页激活，否则浏览器会降低转换速度。",
      "同時轉換多個動圖會增加資源占用。<br>轉換動圖時，請保持這個分頁啟動，否則瀏覽器會降低轉換速度。",
      "Converting multiple animations at the same time will increase resource consumption. <br> Please keep the tab active when converting animation, otherwise the browser will reduce the conversion speed.",
      "複数の動画を同時に変換すると、リソースの占有が増加します。<br>うごイラを変換するときは、このタブを有効にしてください。そうしないと、ブラウザは変換速度を下げます。"
  ],
  "_提示": [
      "提示",
      "提示",
      "tip",
      "ヒント"
  ],
  "_fanboxDownloader": [
      "Fanbox 下载器",
      "Fanbox 下載器",
      "Fanbox Downloader",
      "Fanbox ダウンロード"
  ],
  "_不保存图片因为体积": [
      "{} 没有被保存，因为它的体积不符合设定。",
      "{} 並未儲存，因為它的大小不符合設定。",
      "{} was not saved because its size do not match the settings.",
      "{} はファイルサイズが設定に合わないため、保存されていません。"
  ],
  "_文件体积限制": [
      "文件体积限制",
      "檔案體積限制",
      "File size limit",
      "ファイルサイズ制限"
  ],
  "_不符合要求的文件不会被保存": [
      "不符合要求的文件不会被保存。",
      "不符合要求的檔案不會被儲存。",
      "Files that do not meet the requirements will not be saved.",
      "設定 に合わないファイルは保存されません。"
  ],
  "_小说": [
      "小说",
      "小說",
      "Novel",
      "小説"
  ],
  "_抓取系列小说": [
      "抓取系列小说",
      "擷取系列小說",
      "Crawl series of novels",
      "小説のシリーズをクロールする"
  ],
  "_小说保存格式": [
      "小说保存格式",
      "小說儲存格式",
      "Save the novel as",
      "小説の保存形式"
  ],
  "_在小说里保存元数据": [
      "在小说里保存元数据",
      "將中繼資料（metadata）儲存在小說裡",
      "Save metadata in the novel",
      "小説の中にメタデータを保存する"
  ],
  "_在小说里保存元数据提示": [
      "把作者、网址等信息保存到小說里",
      "將作者、網址等訊息儲存到小說裡",
      "Save the author, url and other information in the file",
      "作者やURLなどの情報をファイルの中に保存します。"
  ],
  "_收藏本页面的所有作品": [
      "收藏本页面的所有作品",
      "收藏本頁面的所有作品",
      "Bookmark all works on this page",
      "この頁の全ての作品をブックマークに追加します"
  ],
  "_输出内容太多已经为你保存到文件": [
      "因为输出内容太多，已经为您保存到文件。",
      "因為輸出內容太多，已經為你保存到檔案。",
      "Because the output is too much, it has been saved to a file.",
      "出力内容が多いため、txt ファイルに保存しました。"
  ],
  "_不下载重复文件": [
      "不下载重复文件",
      "不下載重複檔案",
      "Don`t download duplicate files",
      "重複ファイルをダウンロードしない"
  ],
  "_不下载重复文件的提示": [
      "下载器会保存自己的下载记录，以避免下载重复的文件。",
      "下載器會儲存自己的下載記錄，以避免下載重複的檔案。",
      "The downloader will save its download record to avoid downloading duplicate files.",
      "ダウンローダーは独自のダウンロード履歴を保存して、重複ファイルのダウンロードを回避する。"
  ],
  "_策略": [
      "策略：",
      "策略：",
      "Strategy:",
      "フィルター："
  ],
  "_严格": [
      "严格",
      "嚴格",
      "Strict",
      "厳格"
  ],
  "_宽松": [
      "宽松",
      "寬鬆",
      "Loose",
      "緩い"
  ],
  "_严格模式说明": [
      "当文件的 id 和文件名都相同时，认为是重复文件",
      "當檔案 id 和檔名都相同時，認為是重複檔案",
      "When the file id and file name are the same, it is considered a duplicate file",
      "ファイルの ID とファイル名が同じ場合、重複ファイルとみなされます"
  ],
  "_宽松模式说明": [
      "只要文件的 id 相同，就认为是重复文件",
      "只要檔案 id 相同，就認為是重複檔案",
      "As long as the id of the file is the same, it is considered a duplicate file",
      "ファイルの ID が同じである限り、重複ファイルと見なされます"
  ],
  "_清除下载记录": [
      "清除下载记录",
      "清除下載記錄",
      "Clear download record",
      "履歴をクリア"
  ],
  "_下载记录已清除": [
      "下载记录已清除",
      "已清除下載記錄",
      "Download record has been cleared",
      "ダウンロード履歴がクリアされました"
  ],
  "_跳过下载因为重复文件": [
      "检测到文件 {} 已经下载过，跳过此次下载",
      "偵測到檔案 {} 已經下載過，跳過此次下載。",
      "Skip downloading duplicate files {}",
      "重複ファイル {} をスキップ"
  ],
  "_保存用户头像为图标": [
      "保存用户头像为图标",
      "將使用者頭像另存為圖示檔案",
      "Save user avatar as icon",
      "プロフィール画像をアイコンとして保存"
  ],
  "_保存用户头像为图标说明": [
      "把用户头像保存为 ico 文件，可以手动设置成文件夹的图标。",
      "將使用者頭像儲存為 ico 檔案，可以手動設定成資料夾圖示。",
      "Save user avatar as icon",
      "ユーザーのプロフィール画像を ico ファイルとして保存して、フォルダーアイコンとして設定できます。"
  ],
  "_正在保存抓取结果": [
      "正在保存抓取结果",
      "正在儲存擷取結果",
      "Saving crawl results",
      "クロール結果を保存しています"
  ],
  "_已保存抓取结果": [
      "已保存抓取结果",
      "已儲存擷取結果",
      "Crawl results saved",
      "クロール結果を保存しました"
  ],
  "_正在恢复抓取结果": [
      "正在恢复抓取结果",
      "正在還原擷取結果",
      "Restoring crawl results",
      "クロール結果を再開しています"
  ],
  "_已恢复抓取结果": [
      "已恢复抓取结果",
      "已還原擷取結果",
      "Crawl results resumed",
      "クロール結果を再開しました"
  ],
  "_清空已保存的抓取结果": [
      "清空已保存的抓取结果",
      "清除已儲存的擷取結果",
      "Clear saved crawl results",
      "セーブしたクロール結果をクリアします"
  ],
  "_数据清除完毕": [
      "数据清除完毕",
      "資料清除完畢",
      "Data cleared",
      "クリアされたデータ"
  ],
  "_已跳过n个文件": [
      "已跳过 {} 个文件",
      "已跳过 {} 个文件",
      "{} files skipped",
      "{} つのファイルをスキップしました"
  ],
  "_不保存图片因为宽高": [
      "{} 没有被保存，因为它的宽高不符合设定。",
      "{} 並未儲存，因為它的寬高不符合設定。",
      "{} was not saved because its width and height do not match the settings.",
      "{} は幅と高さが設定に合わないため、保存されていません。"
  ],
  "_显示下载面板": [
      "显示下载面板",
      "顯示下載面板",
      "Show download panel",
      "ダウンロードパネルを表示"
  ],
  "_保存": [
      "保存",
      "儲存",
      "Save",
      "保存"
  ],
  "_加载": [
      "加载",
      "載入",
      "Load",
      "ロード"
  ],
  "_保存命名规则提示": [
      "保存命名规则，最多 {} 个",
      "儲存命名規則，最多 {} 個",
      "Save naming rule, up to {}",
      "ネームルールを保存します。最大 {} 個まで"
  ],
  "_已保存命名规则": [
      "已保存命名规则",
      "已儲存命名規則",
      "Naming rule saved",
      "ネームルールを保存しました"
  ],
  "_无损": [
      "无损",
      "無損",
      "Lossless",
      "ロスレス"
  ],
  "_文件名长度限制": [
      "文件名长度限制",
      "檔案名稱長度限制",
      "File name length limit",
      "ファイル名の長さ制限"
  ],
  "_导出csv": [
      "导出 CSV 文件",
      "匯出 CSV 文檔",
      "Export CSV file",
      "CSV ファイルをエクスポート"
  ],
  "_导出抓取结果": [
      "导出抓取结果",
      "匯出擷取結果",
      "Export crawl results",
      "クロール結果をエクスポート"
  ],
  "_图片尺寸": [
      "图片尺寸",
      "圖片尺寸",
      "Image size",
      "画像サイズ"
  ],
  "_原图": [
      "原图",
      "原圖",
      "Original",
      "Original"
  ],
  "_普通": [
      "普通",
      "普通",
      "Regular",
      "Regular"
  ],
  "_小图": [
      "小图",
      "小圖",
      "Small",
      "Small"
  ],
  "_导出": [
      "导出",
      "匯出",
      "Export",
      "エクスポート"
  ],
  "_导入": [
      "导入",
      "匯入",
      "Import",
      "インポート"
  ],
  "_清除": [
      "清除",
      "清除",
      "Clear",
      "クリア"
  ],
  "_导入下载记录": [
      "导入下载记录",
      "匯入下載記錄",
      "Import download record",
      "ダウンロード記録をインポート"
  ],
  "_完成": [
      "完成",
      "完成",
      "Completed",
      "完了"
  ],
  "_日期格式": [
      "日期和时间格式",
      "日期和時間格式",
      "Date and time format",
      "日付と時刻の書式"
  ],
  "_日期格式提示": [
      "你可以使用以下标记来设置日期和时间格式。这会影响命名规则里的 {date} 和 {task_date}。<br>对于时间如 2021-04-30T06:40:08",
      "你可以使用以下標記來設定日期和時間格式。這會影響命名規則裡的 {date} 和 {task_date}。<br>對於資料如：2021-04-30T06:40:08。",
      "You can use the following notation to set the date and time format. This will affect {date} and {task_date} in the naming rules. <br>For time such as 2021-04-30T06:40:08",
      "以下のタグを使用して日時と時刻の書式を設定することができます。 これは命名規則の {date} と {task_date} に影響します。 <br> 例：2021-04-30T06:40:08"
  ],
  "_命名标记taskDate": [
      "本次任务抓取完成时的时间。例如：2020-10-21",
      "本次工作擷取完成時的時間。例如：2020-10-21。",
      "The time when the task was crawl completed. For example: 2020-10-21",
      "このタスクのクロールが完了した時刻です。 例：2020-10-21"
  ],
  "_自动检测": [
      "自动检测",
      "自動偵測",
      "Auto",
      "自動検出"
  ],
  "_变更语言后刷新页面的提示": [
      "更换语言后，请刷新页面。",
      "變更語言後，請重新整理頁面。",
      "Please refresh the page after changing the language.",
      "言語を変更した後は、ページを更新してください。"
  ],
  "_公开": [
      "公开",
      "公開",
      "Public",
      "公開"
  ],
  "_不公开": [
      "不公开",
      "非公開",
      "Private",
      "非公開"
  ],
  "_已收藏": [
      "已收藏",
      "已收藏",
      "Bookmarked",
      "ブックマーク"
  ],
  "_未收藏": [
      "未收藏",
      "未收藏",
      "Not bookmarked",
      "ブックマークされていない"
  ],
  "_下载之后收藏作品": [
      "下载之后收藏作品",
      "下載之後收藏作品",
      "Bookmark works after downloading",
      "ダウンロードした作品をブックマークする"
  ],
  "_下载之后收藏作品的提示": [
      "下载文件之后，自动收藏这个作品。",
      "下載檔案之後，自動收藏這個作品。",
      "After you download a file, the downloader will automatically bookmark the work.",
      "ダウンロード後、作品は自動的にブックマークされます。"
  ],
  "_收藏设置": [
      "收藏设置",
      "收藏設定",
      "Bookmark settings",
      "ブックマーク設定 "
  ],
  "_添加tag": [
      "添加 tag",
      "加入 tag",
      "Add tag",
      "tag を追加"
  ],
  "_不添加tag": [
      "不添加 tag",
      "不加入 tag",
      "Don't add tag",
      "tag なし"
  ],
  "_用户阻止名单": [
      "用户阻止名单",
      "使用者阻止名單",
      "User block list",
      "ユーザーブロックリスト"
  ],
  "_用户阻止名单的说明": [
      "不下载这些用户的作品。需要输入用户 id。如果有多个用户 id，使用英文逗号,分割。",
      "不下載這些使用者的作品。需要輸入使用者 id。若有多個使用者 id，使用英文逗號,分隔。",
      "The works of these users will not be downloaded. Need to type the user ID. If there are multiple user ID, use comma (,) separated.",
      "これらのユーザーの作品はダウンロードしません。ユーザー ID が必要です。複数のユーザ ID は \",\" で区切ってください。"
  ],
  "_全部": [
      "全部",
      "全部",
      "All",
      "全部"
  ],
  "_任一": [
      "任一",
      "任一",
      "One",
      "何れか"
  ],
  "_颜色主题": [
      "颜色主题",
      "色彩主題",
      "Color theme",
      "カラーテーマ"
  ],
  "_管理设置": [
      "管理设置",
      "管理設定",
      "Manage settings",
      "設定の管理"
  ],
  "_导出设置": [
      "导出设置",
      "匯出設定",
      "Export settings",
      "エクスポート設定"
  ],
  "_导入设置": [
      "导入设置",
      "匯入設定",
      "Import settings",
      "インポート設定"
  ],
  "_重置设置": [
      "重置设置",
      "重設設定",
      "Reset settings",
      "リセット設定"
  ],
  "_日均收藏数量": [
      "日均收藏数量",
      "日均收藏數量",
      "Average number of daily bookmarks",
      "1 日の平均ブックマーク数"
  ],
  "_日均收藏数量的提示": [
      "你可以设置作品的平均每日收藏数量。满足条件的作品会被下载。",
      "您可以設定作品的平均每日收藏數量。滿足條件的作品會被下載。",
      "You can set the average daily bookmarks number of works. Works that meet the conditions will be downloaded.",
      "作品の 1 日の平均ブックマーク数を設定することができます。条件を満した作品はダウンロードされます。"
  ],
  "_下载用户列表": [
      "下载用户列表",
      "下載使用者列表",
      "Download users list",
      "ユーザーリストのダウンロード"
  ],
  "_手动选择作品": [
      "手动选择作品",
      "手動選擇作品",
      "Manually select works",
      "手動で作品を選ぶ"
  ],
  "_抓取选择的作品": [
      "抓取选择的作品",
      "抓取選擇的作品",
      "Crawl selected works",
      "選ばれた作品をクロール"
  ],
  "_清空选择的作品": [
      "清空选择的作品",
      "清空選擇的作品",
      "Clear selected works",
      "選んだ作品をクリアします"
  ],
  "_暂停选择": [
      "暂停选择",
      "暫停選擇",
      "Pause select",
      "選択を一時停止"
  ],
  "_继续选择": [
      "继续选择",
      "繼續選擇",
      "Continue select",
      "選択を続ける"
  ],
  "_离开页面前提示选择的作品未抓取": [
      "选择的作品尚未抓取。现在离开此页面会导致你选择的作品被清空。",
      "選擇的作品尚未抓取。現在離開此頁面會導致您選擇的作品被清空。",
      "The selected work has not been crawled. Leaving this page now will cause your selected work to be cleared.",
      "選ばれた作品はまだクロールしていません。今このページを離れると、選ばれた作品がクリアされます。"
  ],
  "_图片数量大于": [
      "图片数量大于",
      "圖片数量大於",
      "Number of images >",
      "画像数 >"
  ],
  "_排除了所有作品类型": [
      "排除了所有作品类型",
      "排除了所有作品類型",
      "Excluded all work types",
      "すべての作品種類を除外しました"
  ],
  "_为作品创建单独的目录": [
      "为作品创建单独的目录",
      "為作品建立單獨的目錄",
      "Create a separate directory for the work",
      "作品に個別フォルダを作成"
  ],
  "_文件数量大于": [
      "文件数量大于",
      "檔案数量大於",
      "Number of files >",
      "ファイル数 >"
  ],
  "_xzNew870": [
      "设置项“多图建立目录”变成“为作品创建单独的目录”",
      "設定項目\"多圖建立目錄\"变为\"為作品建立單獨的目錄\"",
      "The setting item \"Create directory for multi-image works\" becomes \"Create a separate directory for the work\"",
      "設定項目「マルチイメージにフォルダを作成」は「作品に個別フォルダを作成」になります"
  ],
  "_保存用户头像": [
      "保存用户头像",
      "儲存使用者頭像",
      "Save user avatar",
      "ユーザーアイコンの保存"
  ],
  "_保存用户封面": [
      "保存用户封面",
      "儲存使用者封面",
      "Save user cover",
      "ユーザーカバーの保存"
  ],
  "_待处理": [
      "待处理",
      "待處理",
      "Pending",
      "処理待ち"
  ]
}

export { langText, langTextKeys }
