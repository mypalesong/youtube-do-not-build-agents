# 전체 발표 기록

Anthropic 엔지니어 Barry Zhang과 Mahesh Murag이 AI Engineer 컨퍼런스(Code Summit)에서 진행한 약 16분 분량의 발표 기록이다. 원본은 영어이며, 아래에는 각 섹션의 주요 발언을 시간 순으로 재구성하고 한국어 번역을 함께 수록했다.

::: warning 주의
본 기록은 영상의 공개된 요약, 타임스탬프, 그리고 발표자들의 후속 글에서 재구성한 편집본이다. 완전한 축자 녹취(verbatim transcript)가 아니며, 원문의 뉘앙스를 위해서는 [원본 영상](https://www.youtube.com/watch?v=CEvIs9y1uog)을 참고하길 권한다.
:::

---

## 오프닝과 문제 제기 [00:00 -- 02:56]

**Barry Zhang:** Agents are everywhere now, which is great. But when we actually put them in front of real work, something's still missing. They have intelligence, they have capabilities, but not always the expertise we need for real work.

<span class="ko-trans">**Barry Zhang:** 에이전트가 이제 어디에나 있습니다. 좋은 일이죠. 그런데 실제 업무 앞에 세워놓고 보면, 여전히 뭔가 빠져 있어요. 지능도 있고, 능력도 있습니다. 하지만 실무가 요구하는 **전문성(expertise)**은 항상 거기 있지는 않습니다.</span>

**Barry Zhang:** Let me give you an analogy. Imagine you're faced with 200 pages of tax code. You've got two people available. One is Mahesh -- a 300 IQ mathematical genius. The other is Barry -- an experienced tax professional. Which one would you pick?

<span class="ko-trans">**Barry Zhang:** 비유 하나 들어볼게요. 당신 앞에 세무 코드 200페이지가 놓여 있다고 상상해봅시다. 두 사람이 대기 중입니다. 한 명은 Mahesh -- 300 IQ의 수학 천재. 다른 한 명은 Barry -- 경력 있는 세무 전문가. 어느 쪽을 고르겠습니까?</span>

**Barry Zhang:** I would pick Barry every single time. Not because Barry is smarter. Because Barry has been there. He's seen the exceptions. He knows the patterns. That's what real work needs -- and that's what today's agents don't have out of the box.

<span class="ko-trans">**Barry Zhang:** 저는 매번 Barry를 택하겠습니다. Barry가 더 똑똑해서가 아닙니다. Barry는 현장에 있었고, 예외 상황을 겪었고, 패턴을 압니다. 그게 실무에 필요한 것이고 -- 오늘날의 에이전트가 기본 상태에서는 갖지 못한 것입니다.</span>

---

## 코드는 디지털 세계의 범용 인터페이스 [01:08 -- 02:15]

**Mahesh Murag:** When we built Claude Code, we started noticing something surprising. It wasn't a "coding tool." People were using it for financial reporting, data analysis, file reorganization, research. They were using code as the universal interface to the digital world.

<span class="ko-trans">**Mahesh Murag:** Claude Code를 만들면서 우리는 놀라운 걸 보기 시작했어요. 이건 "코딩 도구"가 아니었습니다. 사람들이 재무 리포트 작성에, 데이터 분석에, 파일 정리에, 연구에 쓰고 있었거든요. 그들은 **코드를 디지털 세계와 대화하는 보편 인터페이스**로 쓰고 있었습니다.</span>

**Mahesh Murag:** Code isn't just a use case. Code is the way a general-purpose agent interacts with digital stuff. That insight changed how we thought about everything that came next.

<span class="ko-trans">**Mahesh Murag:** 코드는 단순한 사용 사례가 아닙니다. 코드는 범용 에이전트가 디지털 산출물과 상호작용하는 방식입니다. 그 통찰이 그 이후 우리가 설계한 모든 것의 방향을 바꿨습니다.</span>

---

## 스킬의 정의 [02:56 -- 04:51]

**Barry Zhang:** So what are skills? Skills are organized collections of files that package composable procedural knowledge for agents. More simply: **they're folders.**

<span class="ko-trans">**Barry Zhang:** 그래서 스킬이 뭐냐. 스킬은 에이전트가 쓸 수 있는 **절차적 지식을 패키지로 묶은 파일 모음**입니다. 더 쉽게 말하면 -- **폴더입니다.**</span>

**Barry Zhang:** And we mean that literally. A skill is a folder. Put a `SKILL.md` inside with some markdown. That's it. You can version it with Git. Share it through Google Drive. Zip it and email it. No SDK, no new runtime, no new IDE.

<span class="ko-trans">**Barry Zhang:** 말 그대로 입니다. 스킬은 폴더예요. 그 안에 마크다운으로 작성된 `SKILL.md` 파일을 하나 넣으세요. 그게 전부입니다. Git으로 버전 관리할 수 있고, Google Drive로 공유할 수 있고, ZIP으로 묶어 이메일로 보낼 수 있습니다. SDK 필요 없고, 새 런타임 필요 없고, 전용 IDE 필요 없습니다.</span>

**Mahesh Murag:** Why scripts instead of traditional tools? Traditional tools are black boxes. The agent calls them with parameters, but can't see inside, can't modify them. Scripts are different. They're self-documenting. They can be read and edited on the fly. That matters when the agent needs to adapt.

<span class="ko-trans">**Mahesh Murag:** 왜 기존 도구 대신 스크립트일까요? 기존 도구는 블랙박스입니다. 에이전트가 파라미터로 호출할 수 있지만, 안을 들여다볼 수도, 수정할 수도 없어요. 스크립트는 다릅니다. **자기 문서화**되어 있고, **그 자리에서 읽고 고칠 수 있습니다.** 에이전트가 적응해야 할 때, 이 차이는 중요합니다.</span>

**Barry Zhang:** Here's a real example. Claude kept writing the same Python script over and over for slide styling. Same fonts, same margins, same layout rules. We turned it into a skill. Suddenly consistent output. Predictable. Tweak-once, apply-everywhere.

<span class="ko-trans">**Barry Zhang:** 실제 예를 하나 들어볼게요. Claude가 슬라이드 스타일링에 쓸 같은 파이썬 스크립트를 계속 반복해서 작성하고 있었어요. 같은 폰트, 같은 여백, 같은 레이아웃 규칙. 이걸 스킬로 바꿨습니다. 그 순간부터 출력이 일관되고, 예측 가능해졌고, 한 번 손보면 모든 곳에 적용됐습니다.</span>

---

## 점진적 공개 [04:29 -- 04:58]

**Mahesh Murag:** But how do you scale to hundreds or thousands of skills without blowing up the context window? The answer is **progressive disclosure**. Three levels.

<span class="ko-trans">**Mahesh Murag:** 그런데 수백, 수천 개의 스킬로 확장하면서 컨텍스트 윈도우를 날리지 않는 법이 뭘까요? 답은 **점진적 공개(progressive disclosure)**입니다. 세 단계로 말씀드리죠.</span>

**Mahesh Murag:** Level one: only the skill metadata -- name and description -- lives in the system prompt. Level two: when the agent decides a skill is relevant, it loads the full `SKILL.md`. Level three: scripts and referenced files are read only when actually needed. The context stays lean, while the knowledge library can be enormous.

<span class="ko-trans">**Mahesh Murag:** 레벨 1: **스킬의 메타데이터**(이름과 설명)만 시스템 프롬프트에 상주합니다. 레벨 2: 에이전트가 이 스킬이 지금 관련된다고 판단하면, `SKILL.md` 본문 전체를 로드합니다. 레벨 3: 스크립트와 참조 파일은 실제로 필요할 때만 읽어들입니다. 컨텍스트는 얇게 유지되고, 지식 라이브러리는 거대해질 수 있습니다.</span>

---

## 급성장하는 생태계 [04:59 -- 07:12]

**Barry Zhang:** We launched skills five weeks ago. In those five weeks, **thousands of skills** have been created. They fall into three buckets.

<span class="ko-trans">**Barry Zhang:** 5주 전에 스킬을 출시했습니다. 그 5주 동안 **수천 개의 스킬**이 만들어졌어요. 세 갈래로 나뉩니다.</span>

**Barry Zhang:** Foundational skills -- general or domain-wide. Our own document skills for professional office documents. Cadence built scientific research skills for EHR analysis and bioinformatics.

<span class="ko-trans">**Barry Zhang:** **기초 스킬(Foundational)** -- 범용이거나 도메인 전반에 쓰이는 것들. 우리가 만든 오피스 문서 작성 스킬, Cadence가 만든 EHR 분석과 바이오인포매틱스용 과학 연구 스킬 같은 것들이죠.</span>

**Mahesh Murag:** Third-party skills -- our partners bringing their products into the skill format. Browserbase published Stagehand skills for web navigation. Notion launched skills for workspace understanding and research.

<span class="ko-trans">**Mahesh Murag:** **서드파티 스킬** -- 파트너사들이 자사 제품을 스킬 포맷으로 가져온 것들. Browserbase가 웹 탐색용 Stagehand 스킬을 냈고, Notion이 워크스페이스 이해와 리서치용 스킬을 출시했습니다.</span>

**Mahesh Murag:** And enterprise skills. Fortune 100 companies are using skills to encode organizational best practices and the weird, unique ways they use their bespoke internal software. Developer productivity teams are building skills that teach code style and internal conventions to the agents serving thousands of their developers.

<span class="ko-trans">**Mahesh Murag:** 그리고 **엔터프라이즈 스킬**이 있습니다. Fortune 100 기업들이 조직의 모범 사례와 자사의 이상한 내부 소프트웨어 사용법을 스킬로 인코딩하고 있어요. 개발자 생산성 팀은 코드 스타일과 내부 컨벤션을 가르치는 스킬을 만들어 수천 명의 엔지니어를 지원하는 에이전트에 장착하고 있습니다.</span>

---

## 생태계의 패턴 [07:32 -- 09:07]

**Barry Zhang:** Skills are getting more complex over time. At first they're just markdown files. Then they include scripts, binaries, assets, references. Some skills now take weeks or months to build and maintain. That's fine. They've earned it.

<span class="ko-trans">**Barry Zhang:** 스킬은 시간이 지나면서 점점 복잡해지고 있어요. 처음엔 단순한 마크다운 파일이지만, 곧 스크립트, 바이너리, 자산, 참조 문서가 포함됩니다. 어떤 스킬은 이제 몇 주, 몇 달이 걸려 만들고 유지됩니다. 괜찮아요. 그만한 가치가 있으니까요.</span>

**Mahesh Murag:** MCP and skills aren't competitors. MCP is about **connection** to the outside world. Skills are about **expertise** -- what to do with those connections. Put them together and you have a complete system.

<span class="ko-trans">**Mahesh Murag:** MCP와 스킬은 경쟁자가 아닙니다. MCP는 외부 세계와의 **연결**입니다. 스킬은 그 연결을 가지고 **무엇을 할 것인가**에 관한 **전문성**입니다. 둘을 함께 두면 완전한 시스템이 됩니다.</span>

**Barry Zhang:** And -- and this is the part that really surprises us -- a lot of the people creating skills aren't developers. Finance folks, legal, accounting, recruiting. Skills help non-coders extend these general agents. That matters.

<span class="ko-trans">**Barry Zhang:** 그리고 -- 이게 정말 놀라운 부분입니다 -- 스킬을 만드는 사람들 중 상당수는 개발자가 아닙니다. 재무, 법무, 회계, 리크루팅. 스킬은 **코딩을 하지 않는 사람들이 이 범용 에이전트를 확장하게** 해줍니다. 이게 중요한 변화입니다.</span>

---

## 수렴하는 아키텍처 [09:13 -- 10:37]

**Mahesh Murag:** What we're seeing across the ecosystem is a converging architecture. Four components. An agent loop that manages context. A runtime with a file system and code execution. MCP servers for outside connections. And hundreds or thousands of skills loaded dynamically at runtime.

<span class="ko-trans">**Mahesh Murag:** 생태계 전반에서 우리가 보고 있는 것은 **수렴하는 아키텍처**입니다. 네 가지 구성 요소죠. 컨텍스트를 관리하는 **에이전트 루프**. 파일 시스템과 코드 실행 환경이 있는 **런타임**. 외부 연결을 위한 **MCP 서버들**. 그리고 런타임에 동적으로 로드되는 **수백 혹은 수천 개의 스킬**.</span>

**Mahesh Murag:** Once you have that, opening a new vertical is fast. The right MCP servers plus a curated skill library. We launched financial services and life sciences offerings this way -- not by building new agents, but by composing them.

<span class="ko-trans">**Mahesh Murag:** 이 구조를 갖추고 나면 새로운 수직 시장을 여는 일이 빨라집니다. 올바른 MCP 서버들 + 잘 큐레이션된 스킬 라이브러리. 우리는 금융 서비스와 생명과학 오퍼링을 이 방식으로 출시했어요. 새 에이전트를 만드는 게 아니라, **조합**해서요.</span>

---

## 스킬을 소프트웨어로 [10:37 -- 11:51]

**Barry Zhang:** As skills get bigger, we have to start treating them like software. Tests, evaluations, versioning, dependencies. We need tooling to know that a skill triggers correctly, loads in the right context, produces the right output.

<span class="ko-trans">**Barry Zhang:** 스킬이 커지면 이걸 **소프트웨어처럼 다루기** 시작해야 합니다. 테스트, 평가, 버전 관리, 의존성. 스킬이 올바르게 트리거되는지, 맞는 맥락에서 로드되는지, 정확한 출력을 내는지를 알려주는 툴링이 필요합니다.</span>

**Barry Zhang:** And versioning matters because the agent's behavior evolves with the skill. We need a clear lineage -- why does the agent behave this way now? Because this version of this skill was loaded.

<span class="ko-trans">**Barry Zhang:** 버전 관리가 중요한 이유는 에이전트의 행동이 스킬과 함께 진화하기 때문입니다. **분명한 계보(lineage)**가 필요해요 -- 왜 에이전트가 지금 이렇게 행동하지? 이 버전의 이 스킬이 로드됐기 때문이지.</span>

---

## 집단 지식과 지속 학습 [12:06 -- 14:22]

**Mahesh Murag:** The bigger vision is a collective, evolving knowledge base of capabilities. Curated by people and by agents, inside an organization. When someone new joins the team, the agent already knows what the team cares about, knows your day-to-day, applies the practices your team has built.

<span class="ko-trans">**Mahesh Murag:** 더 큰 비전은 **집단적이고 진화하는 능력의 지식 베이스**입니다. 조직 안에서 사람과 에이전트 양쪽이 함께 큐레이팅하는 것이죠. 새 팀원이 합류했을 때, 에이전트는 이미 이 팀이 무엇을 중시하는지, 당신의 일상이 어떻게 돌아가는지를 알고, 팀이 쌓아온 실무를 따릅니다.</span>

**Barry Zhang:** Skills are like memory, but focused on **procedural knowledge**. Not everything Claude has ever said -- just the **how-to** Claude can pull up for specific tasks. And because the format is standardized, anything Claude writes down can be used efficiently by a future version of itself.

<span class="ko-trans">**Barry Zhang:** 스킬은 일종의 기억과 비슷하지만, **절차적 지식**에 초점이 맞춰져 있어요. Claude가 했던 모든 말이 아니라 -- 특정 작업에 꺼낼 수 있는 **방법(how-to)**. 그리고 포맷이 표준화되어 있기 때문에, **Claude가 기록하는 것은 미래 버전의 자기 자신이 효율적으로 사용**할 수 있습니다.</span>

**Mahesh Murag:** Claude can create skills autonomously -- we have a skill creator skill. The goal is that Claude on day 30 is a lot better than Claude on day one. Same model weights. Richer skill library.

<span class="ko-trans">**Mahesh Murag:** Claude는 자율적으로 스킬을 만들 수 있습니다 -- **Skill Creator Skill**이라는 게 있죠. 목표는 30일 차의 Claude가 1일 차의 Claude보다 훨씬 낫게 되는 것입니다. 같은 모델 가중치, 더 풍부한 스킬 라이브러리.</span>

---

## 컴퓨팅 역사와의 비유 [14:33 -- 15:37]

**Barry Zhang:** Here's the analogy we keep coming back to. Think about computing. Processors -- massive investment, few makers, limited value alone. Operating systems -- orchestrate the resources above the processor. Applications -- **that's** where the real value explodes, where millions of developers and organizations created software that encoded domain expertise.

<span class="ko-trans">**Barry Zhang:** 우리가 계속 돌아오게 되는 비유가 있어요. 컴퓨팅을 생각해봅시다. 프로세서 -- 막대한 투자, 소수의 제조사, 단독으로는 가치가 제한적이죠. 운영체제 -- 프로세서 위의 자원을 조율합니다. 애플리케이션 -- **진짜 가치가 폭발하는 곳**은 바로 여기예요. 수백만 명의 개발자와 조직이 자기 도메인의 전문성을 소프트웨어에 인코딩한 층입니다.</span>

**Barry Zhang:** Map that to agents. **Models are processors.** Agent runtimes are **operating systems**. **Skills are the applications** -- where domain expertise and creative problem-solving live. That's the layer we're opening up.

<span class="ko-trans">**Barry Zhang:** 이걸 에이전트에 매핑해봅시다. **모델은 프로세서**입니다. 에이전트 런타임은 **운영체제**입니다. **스킬은 애플리케이션**이에요 -- 도메인 전문성과 창의적 문제 해결이 사는 곳. 우리가 열고 있는 것은 이 층입니다.</span>

---

## 클로징 [15:37 -- 16:05]

**Mahesh Murag:** For decades, millions of developers built software that encoded their domain expertise and their unique point of view. Now, with skills, **anyone** can do that -- by putting stuff in a folder. For themselves, for each other, for the world.

<span class="ko-trans">**Mahesh Murag:** 지난 수십 년간 수백만 명의 개발자가 자신의 도메인 전문성과 고유한 관점을 담은 소프트웨어를 만들었습니다. 이제 스킬과 함께라면, **누구든** 그것을 할 수 있습니다 -- 폴더에 뭘 좀 집어넣으면서요. 자기 자신을 위해, 서로를 위해, 세상을 위해.</span>

**Barry Zhang:** Agent architectures are converging. And there's a new paradigm in skills. So -- **stop rebuilding agents. Start building skills instead.** Thank you.

<span class="ko-trans">**Barry Zhang:** 에이전트 아키텍처는 수렴하고 있습니다. 그리고 스킬이라는 새로운 패러다임이 있어요. 그러니까 -- **에이전트를 다시 만드는 일은 멈추시고, 스킬을 만들기 시작하세요.** 감사합니다.</span>
