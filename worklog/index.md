# 작업 기록

이 문서 사이트의 제작 과정과 결정 사항을 기록한다.

---

## 문서의 목적

2025년 12월 8일 AI Engineer 컨퍼런스에서 공개된 Anthropic의 **"Don't Build Agents, Build Skills Instead"** 발표를 한국어로 정리하고 분석하기 위해 만들어진 문서 사이트다. 발표자는 Anthropic의 엔지니어 Barry Zhang과 Mahesh Murag이며, 발표 길이는 약 16분이다.

발표는 짧지만 밀도가 높다. 에이전트 설계의 방향 전환, Agent Skills라는 새로운 개념, 점진적 공개의 엔지니어링 원리, 그리고 조직 지식의 물질화라는 비전까지 -- 한 편의 선언문이자 실무 가이드에 가깝다. 이 문서는 그 밀도를 풀어 주제별로 읽을 수 있게 재구성한 결과물이다.

## 소스

1. **원본 YouTube 영상** -- https://www.youtube.com/watch?v=CEvIs9y1uog
2. **공개된 요약과 타임스탬프** -- Lilys.ai, Video Highlight, YoutubeSummary 등의 요약 서비스
3. **Anthropic 공식 블로그** -- Agent Skills 발표 포스트 및 엔지니어링 글
4. **업계 논평** -- X(구 Twitter), OutcomeOps, BRGR 등의 글

## 구조

01-showcase-site의 구조를 그대로 따랐다.

- **홈(index.md)** -- hero + 영상 임베드 + 3개 feature 카드
- **개요(overview/)** -- 소개, 핵심 요약, 주요 인물
- **전문(transcript/)** -- 타임스탬프별 발언 기록과 한국어 번역
- **주제별(topics/)** -- 7개 핵심 주제의 심층 분석
- **작업로그(worklog/)** -- 본 문서

사이드바와 내비게이션은 기존 컬렉션(`60minutes-ai-safety`, `01-showcase-site`)과 일관된 한국어 라벨로 구성했다.

## 스타일

01-showcase-site의 `custom.css`를 그대로 복사해 사용했다. 핵심 특징은 다음과 같다.

- **Noto Serif KR** 기반 본문 타이포그래피
- 아이보리-브라운 계열 팔레트(`#fdfbf7` / `#4a3728`) -- 인쇄물의 종이 질감
- 본문 첫 단락의 **드롭캡(drop cap)** -- 매거진 스타일
- 블록인용의 이탤릭 + 좌측 브랜드 컬러 바 + 큰 따옴표 장식
- `<hr>`의 뉴스페이퍼 디바이더(❦ 기호)
- 다크 모드 대응

이 스타일은 "뉴스레터/매거진 풍"을 목표로 한다. 기술 문서지만 **읽는 즐거움**을 살리는 방향이다.

## VitePress 설정

- 패키지 이름: `anthropic-skills-talk-docs`
- 개발 포트: **4303** (기존 4101, 4202와 충돌하지 않도록)
- 언어: `ko-KR`
- 검색: local provider, 한국어 라벨
- 소셜 링크: YouTube 원본 영상

## 번역 원칙

- **원문 대 번역 병치** -- 발언은 영어 원문을 먼저 노출하고, `::: details` 블록에 한국어 번역을 넣었다. 이는 VitePress의 기본 컨테이너를 활용한 것으로, 클릭해서 펼쳐보는 방식이다.
- **의역 우선** -- 직역보다는 한국어 독자가 자연스럽게 읽을 수 있는 어조를 택했다.
- **고유명사 처리** -- Barry Zhang, Mahesh Murag, Claude, Anthropic 등은 로마자 원형을 유지하되, 본문에서 맥락상 필요한 곳에는 한글 표기를 병기했다.

## 한계와 주의

- **완전한 축자 녹취가 아님** -- 본 사이트의 전문(transcript)은 공개된 요약과 타임스탬프를 기반으로 재구성한 편집본이다. 발언의 정확한 표현은 원본 영상에서 확인해야 한다.
- **발표 이후의 업데이트는 반영되지 않음** -- 이 문서는 2025년 12월 발표 시점의 내용을 기준으로 하며, 그 이후 Anthropic이 발표한 Agent Skills 관련 추가 정책/기능은 포함되지 않는다.
- **주제별 분석의 해석** -- 7개 주제별 글에는 발표 내용을 바탕으로 한 해석과 배경 설명이 포함된다. 발표자들의 발언 자체와 구분해 읽을 필요가 있다.

## 실행 방법

```bash
cd D:/workspace/youtube-summary/collections/anthropic-skills-talk/docs-site
npm install
npm run dev
# http://localhost:4303
```

프로덕션 빌드는 `npm run build`로 수행하며, `docs-site/.vitepress/dist/`에 정적 파일이 생성된다.

## 참고한 기존 컬렉션

- `D:\workspace\youtube-summary\claude\01-showcase-site` -- 기본 구조와 스타일의 레퍼런스
- `D:\workspace\youtube-summary\collections\60minutes-ai-safety` -- 사이드바 구성과 포트 넘버링 관례
- `D:\workspace\youtube-summary\claude\03-webapp` -- 자막 추출 및 파이프라인 노하우의 참고
