/* Agentforce サクセスナビ データ (出典: successjp.salesforce.com / 全文転載せず要点＋公式リンク) */
window.SN_DATA = {
  product: "Agentforce",
  tagline: "AIエージェントの 計画→準備→構築→テスト→公開→拡張 を公式サクセスナビ記事で伴走",
  navi: {
    intro: "契約直後にやること・活用のヒント・懸念対応を Salesforce 公式サクセスナビ(successjp) から整理。要点のみ・詳細は各公式ページへ。",
    guideTitle: "はじめてガイド（6フェーズ）",
    steps: [
      {title:"1. 計画", desc:"活用業務の選定・推進体制構築・ユースケース/データ選定・導入計画策定", url:"https://successjp.salesforce.com/article/NAI-001223"},
      {title:"2. 準備", desc:"Agentforce 利用開始に必要な初期設定（環境構築）", url:"https://successjp.salesforce.com/article/NAI-001213"},
      {title:"3. 構築", desc:"AIエージェントが動く仕組みを理解し、作成して動作確認", url:"https://successjp.salesforce.com/article/NAI-001234"},
      {title:"4. テスト", desc:"テスト観点と評価基準を整理し、結果をもとに対応精度を改善", url:"https://successjp.salesforce.com/article/NAI-001228"},
      {title:"5. 公開", desc:"公開初日の現場サポートで定着を促し、ログと現場の声で育てる", url:"https://successjp.salesforce.com/article/NAI-001230"},
      {title:"6. 拡張", desc:"PoCの成果を可視化し、活用を広げるロードマップを描く", url:"https://successjp.salesforce.com/article/NAI-001232"}
    ],
    popular: [
      {title:"AI機能による自動化とAIとの協業（議事録・要約の作成）", cat:"活用", updated:"2026-09-03", url:"https://successjp.salesforce.com/article/NAI-001238",
       summary:"文字起こし→プロンプトテンプレートで構造化→Employee Agentへ協業依頼、の流れで議事録・要約を効率化。属人化防止と構造化データ蓄積が利点。"},
      {title:"AI利用時のよくある懸念事項と対応策", cat:"懸念対応", updated:"2026-09-03", url:"https://successjp.salesforce.com/article/NAI-001327",
       summary:"懸念は情報漏洩とハルシネーション。前者はAI Trust Layer(ゼロデータ保持)＋最小権限、後者は文脈付加・引用元表示・継続モニタリング。日々の改善が肝。"},
      {title:"Agentforce Coworker 利用ガイド", cat:"活用", updated:"2026-08-24", url:"https://successjp.salesforce.com/article/NAI-001320",
       summary:"CRM/社内データを理解し対話で要約・分析・次アクション提案。訪問前準備や商談優先度判定に。設定は数分、外部ソースはData 360等で追加接続可。"}
    ],
    articles: [
      {title:"プロンプト作成（プロンプトビルダーの機能と書き方）", cat:"活用", url:"https://successjp.salesforce.com/article/NAI-001276"},
      {title:"メール作成（パーソナライズメール）", cat:"活用", url:"https://successjp.salesforce.com/article/NAI-001304"},
      {title:"類似検索（FAQ対応・類似データ検索）", cat:"活用", url:"https://successjp.salesforce.com/article/NAI-001309"},
      {title:"Agentforce Service Agent を触ってみよう", cat:"設定", url:"https://successjp.salesforce.com/article/NAI-001198"},
      {title:"Agentforce Employee Agent を触ってみよう", cat:"設定", url:"https://successjp.salesforce.com/article/NAI-001202"},
      {title:"Agentforce Sales - Engagement を触ってみよう", cat:"設定", url:"https://successjp.salesforce.com/article/NAI-001208"},
      {title:"AI 導入時のステップと重要なポイント", cat:"基礎", url:"https://successjp.salesforce.com/article/NAI-000892"},
      {title:"SalesforceでどのようにAI活用を実現していくのか", cat:"基礎", url:"https://successjp.salesforce.com/article/NAI-000891"},
      {title:"AI 活用の価値と課題", cat:"基礎", url:"https://successjp.salesforce.com/article/NAI-000890"}
    ],
    featured: [
      {title:"Agentforce はじめてガイド", cat:"特設", url:"https://successjp.salesforce.com/ai-solution/agentforce"},
      {title:"Agentforce 簡易設定ガイド", cat:"特設", url:"https://successjp.salesforce.com/ai-solution/quicksetupguide"},
      {title:"今すぐ使える Salesforce の AI 機能", cat:"特設", url:"https://successjp.salesforce.com/ai-solution/salesforceai"},
      {title:"Agentforce 記事一覧", cat:"特設", url:"https://successjp.salesforce.com/ai-solution/articles"}
    ]
  },
  help: {
    intro: "製品仕様のリファレンス。サクセスナビ(活用)と対で参照。",
    links: [
      {title:"Salesforce AI / Agentforce / Einstein ヘルプ", cat:"公式ヘルプ", url:"../agentforce/index.html", summary:"エージェントビルダー・アクション・プロンプトビルダー・Trust Layer まで全1104記事の和訳リファレンス。"},
      {title:"Agentforce IT Service ヘルプ", cat:"公式ヘルプ", url:"https://tttttkaku.github.io/agentforce-it-service-help/", summary:"ITSM 向け Agentforce。インシデント/問題/変更/リリース・CMDB・エージェント。"}
    ]
  },
  blog: {
    intro: "自分用の裏メニュー（顧客モードでは非表示）。公式ブログ等を随時追加。",
    links: [
      {title:"Salesforce 公式ブログ（日本）", cat:"ブログ", url:"https://www.salesforce.com/jp/blog/"}
    ]
  }
};
