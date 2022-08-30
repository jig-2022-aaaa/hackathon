# hackathon
ハッカソン(2022/8/30-2022/8/31)

```Mermaid
stateDiagram
    スタート画面 --> タスク中
    タスク中-->スタート画面
     
    state タスク中{
        作業-->休憩
        休憩-->作業

        終了ボタンが押された-->escape
    }
```

## 音楽出典
[classix](https://classix.sitefactory.info/downmp3.html#a01)

あああ（すぐに消す）
