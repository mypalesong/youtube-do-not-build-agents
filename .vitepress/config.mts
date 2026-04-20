import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '에이전트 말고, 스킬을 만들어라',
  description: "Don't Build Agents, Build Skills Instead - Barry Zhang & Mahesh Murag, Anthropic",
  lang: 'ko-KR',
  lastUpdated: true,
  base: '/youtube-do-not-build-agents/',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700;900&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '개요', link: '/overview/' },
      { text: '전문', link: '/transcript/' },
      { text: '주제별', link: '/topics/' },
      { text: '작업로그', link: '/worklog/' },
    ],

    sidebar: [
      {
        text: '개요 (Overview)',
        collapsed: false,
        items: [
          { text: '소개', link: '/overview/' },
          { text: '핵심 요약', link: '/overview/summary' },
          { text: '주요 인물', link: '/overview/people' },
        ],
      },
      {
        text: '전문 (Full Talk)',
        collapsed: false,
        items: [
          { text: '전체 발표 기록', link: '/transcript/' },
        ],
      },
      {
        text: '주제별 (By Topic)',
        collapsed: false,
        items: [
          { text: '주제 목록', link: '/topics/' },
          { text: '전문성의 공백', link: '/topics/expertise-gap' },
          { text: '스킬이란 무엇인가', link: '/topics/what-are-skills' },
          { text: '코드, 세계와의 인터페이스', link: '/topics/code-as-interface' },
          { text: '점진적 공개', link: '/topics/progressive-disclosure' },
          { text: '스킬 생태계', link: '/topics/ecosystem' },
          { text: '수렴하는 에이전트 아키텍처', link: '/topics/architecture' },
          { text: '지속 학습과 집단 지식', link: '/topics/continuous-learning' },
        ],
      },
      {
        text: '작업로그 (Work Log)',
        collapsed: false,
        items: [
          { text: '작업 기록', link: '/worklog/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/watch?v=CEvIs9y1uog' },
    ],

    outline: {
      label: '목차',
      level: [2, 3],
    },

    lastUpdated: {
      text: '최종 수정일',
    },

    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지',
    },

    footer: {
      message: 'YouTube 영상 기반으로 정리된 문서입니다.',
      copyright: 'AI-assisted documentation · Barry Zhang & Mahesh Murag, Anthropic',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '검색',
          },
          modal: {
            noResultsText: '결과를 찾을 수 없습니다',
            resetButtonTitle: '검색 초기화',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기',
            },
          },
        },
      },
    },
  },
})
