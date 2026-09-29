# 数据规范：plan_data.json 与 questions.json

两个结构化文件是网页构建的唯一数据源，先落盘、程序化校验、再交给 app_builder。

## plan_data.json（计划数据）

```json
{
  "meta": { "title": "...", "subtitle": "考试日期+备考天数+每日时长+合格线", "exam_date": "YYYY-MM-DD", "today": "YYYY-MM-DD", "prep_days": 18, "data_version": "v1" },
  "exam_info": {
    "name": "考试全称",
    "official_structure": [ { "part": "I", "name": "模块名", "questions": "20题", "score": "20分", "minutes": 20, "note": "考法说明" } ],
    "total": "共X题、满分X分、考试时长X分钟",
    "requirement_summary": "官方能力要求摘要",
    "format_change_note": "新旧题型对比说明（如有改版必写）",
    "pass_line": "合格线（标注来源：用户确认/官方/待确认）"
  },
  "assumptions": [ { "label": "[用户陈述]|[已核验事实]|[计划假设]|[待确认]", "text": "..." } ],
  "time_budget": { "nominal_hours": 51, "realistic_hours": "按85%执行率估算", "breakdown": "逐日时长拆解", "note": "调休补班日说明" },
  "strategy": {
    "fastest_scoring_order": [ { "rank": 1, "module": "模块名（分值）", "reason": "为什么最快提分" } ],
    "protected_priority": "时间再紧也不砍的保底任务",
    "cut_first": "超载时先砍什么"
  },
  "materials": [ { "name": "...", "file": "...", "usage": "..." } ],
  "phases": [ { "id": 0, "name": "阶段名", "dates": "9/29-10/1", "goal": "..." } ],
  "daily_schedule": [
    {
      "date": "YYYY-MM-DD", "weekday": "周二", "day_type": "工作日|假期|补班工作日|休息日|考试日", "phase": "阶段名",
      "available": "约X小时", "theme": "当日主题",
      "tasks": [ { "name": "任务名", "minutes": 40, "material": "具体材料（篇目级）", "acceptance": "完成标准" } ],
      "review_fields": ["复盘字段1", "复盘字段2"]
    }
  ],
  "thresholds": [ { "checkpoint": "10/1 全真摸底", "excellent": "≥X分：...", "pass": "X-X分：...", "warn": "<X分：走保底分支..." } ],
  "adjustment_rules": [ { "trigger": "触发条件", "action": "调整动作" } ],
  "exam_day_strategy": { "time_allocation": "各模块分钟分配", "tips": ["逐模块应试提示"] },
  "page_features": ["页面功能要求清单，app_builder 按此实现"]
}
```

要点：

- 每日任务总量 ≤ 当日 `available`；改每日时长后必须重算所有天。
- 任务 `material` 写到篇目/章节级，不写"旧卷阅读一篇"这种模糊指向。
- 检测阈值至少 3 个节点：首次全真摸底、中期检测、考前整卷二刷，每档给 excellent/pass/warn 三分支及对应动作。
- `adjustment_rules` 覆盖：时间被占用、分数不涨、主观题无起色、心态疲劳、考前发现短板。

## questions.json（题库数据）

```json
{
  "meta": { "version": "v1", "total_choice": 88, "total_translation": 5, "source_note": "来源与自拟标注说明" },
  "sets": [
    {
      "id": "s2026", "title": "套卷名", "note": "套卷说明（改版/去重结论写这里）",
      "sections": [
        { "id": "v2026", "name": "模块名", "type": "choice",
          "questions": [ { "id": "v26-01", "stem": "题干", "options": ["A内容","B内容","C内容","D内容"], "answer": "C", "tag": "考点标签", "source": "2026样卷·词汇和语法 第1题" } ] },
        { "id": "c2026", "name": "完形填空", "type": "cloze", "passage": "带①~⑳标记的原文",
          "questions": [ { "id": "c26-01", "stem": "第1空（见上文标记处）", "options": [...], "answer": "A", "tag": "考点", "source": "..." } ] },
        { "id": "r2026", "name": "阅读理解", "type": "reading",
          "passages": [ { "id": "r26p1", "title": "篇目标题", "text": "原文",
            "questions": [ { "id": "r26-1-1", "stem": "...", "options": [...], "answer": "D", "tag": "细节题|推断题|主旨题|词义题", "source": "..." } ] } ] },
        { "id": "t2026", "name": "句子汉译英", "type": "translation",
          "note": "自评三档说明",
          "questions": [ { "id": "t26-1", "stem": "中文原句", "reference": "参考译文（自拟需标注）", "tag": "句型考点", "source": "..." } ] }
      ]
    }
  ]
}
```

要点：

- `options` 数组顺序即 A/B/C/D；完形可为三项（A/B/C）。`answer` 存字母。
- `tag` 必填——它是错题分析的分组键，按知识点粒度标注（语法点/题型/句型），不要写"英语"这种粗标签。
- 解析旧 .doc 用 antiword，.docx 用 python-docx，PDF 按 doubao-pdf 流程。
- 解析后校验：题目总数 vs 原卷、答案字母在选项范围内、抽查 3-5 题与原文逐字比对。

## 网页构建调用要点

- `arch_type=jspage`；references 同时传 `plan/plan_data.json` 和 `plan/questions.json`。
- instruction 只写用户原话 + 两个文件的 path/purpose，数据细节让 app_builder 自己读文件。
- 更新时必须传 `target_app_id` + `target_app_token` 原地更新，保留用户打卡数据；任务追加式修改（不改已有任务 ID），避免丢历史勾选。
