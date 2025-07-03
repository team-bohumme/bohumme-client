## BOFIT?

---

## TEAM-BOFIT

<table>
  <tr>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/4ec0818a-af14-4f99-b375-c8f8b0010ffc" width="180"/><br/>
      <strong>지욱</strong>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/2a71e714-5c81-4006-920d-b0cd8e8e763e" width="180"/><br/>
      <strong>민정</strong>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/fd7af9db-28d2-47aa-b135-dbec20098802" width="180"/><br/>
      <strong>수정</strong>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/d1de16ad-fc75-42af-8018-a7ad3e46c17a" width="180"/><br/>
      <strong>혜린</strong>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/9fc08995-2cbc-42d3-98c5-6547a49aa883" width="180"/><br/>
      <strong>지우</strong>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://github.com/user-attachments/assets/fd685533-3eda-4f9a-b870-07d0a8238bba" width="180"/><br/>
      <strong>정훈</strong>
    </td>
  </tr>
</table>

## 🚀 BOFIT 팀 기술 스택

| 카테고리                    | 기술 스택                                                                                                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI Library**              | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)                                                                                                                                      |
| **Server State Management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=for-the-badge)                                                                                                             |
| **Language**                | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)                                                                                                                       |
| **Build Tool**              | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)                                                                                                                                         |
| **Styling**                 | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-DD8A42?style=for-the-badge)                                                                                                                                           |
| **Design System**           | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white&style=for-the-badge)                                                                                                                          |
| **Repository Management**   | ![Monorepo](https://img.shields.io/badge/Monorepo-000000?style=for-the-badge)                                                                                                                                                           |
| **Build System**            | ![Turborepo](https://img.shields.io/badge/Turborepo-EC4A3F?style=for-the-badge)                                                                                                                                                         |
| **Package Manager**         | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge)                                                                                                                                         |
| **CI/CD**                   | ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white&style=for-the-badge) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge) |
| **Web Server**              | ![NGINX](https://img.shields.io/badge/NGINX-009639?logo=nginx&logoColor=white&style=for-the-badge)                                                                                                                                      |
| **Containerization**        | ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)                                                                                                                                   |

## TEAM-BOFIT Convention

### 💻 코딩 컨벤션

<details>
<summary>✅ 컴포넌트</summary>

- `interface` 네이밍은 반드시 `Props` 접미사 사용 → `CardProps`, `ChipProps`
- 의미 없는 `<div>` 사용 지양, 컴포넌트 최상단은 `Fragment` (`<>...</>`) 사용

```tsx
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This is our new page, we're glad you're here!</p>
    </>
  );
};
```

- children이 불필요할 때는 self-closing `<Component />` 사용
- Headless UI 개념 명시 (디자인 시스템 컴포넌트는 비즈니스 로직 최소화)
- 특정 도메인에 의존된 컴포넌트는 디자인 시스템이 아닌 client 내부에 작성

</details>

<details>
<summary>📁 폴더명</summary>

- 무조건 소문자 시작
- 항상 복수형으로 s 붙이기
- 케밥 케이스(kebab-case) 사용 (예: components, user-pages)

</details>

<details>
<summary>📝 타입</summary>

- 웬만하면 interface 사용 권장 (병합 가능)
- type은 병합 불가능하므로 특별한 경우에만 사용
- 유니언, 튜플, 리터럴 타입 등 특수한 경우 type 사용

</details>

<details>
<summary>🔑 변수</summary>

- var 사용 금지
- const → let 순서로 위에서부터 선언
- 문자열 조합 시 + 금지, 템플릿 리터럴(`) 사용
- 상수는 대문자 스네이크 케이스 → API_KEY
- 의미가 명확한 변수명 사용 (길어도 괜찮음)
- boolean 변수에는 is 접두사 붙이기 → isActive
- key에 랜덤 값 사용 금지
- 정적 리스트에 한해 index 사용 가능
- 동적 리스트에서는 고유한 id를 key로 사용

</details>

<details>
<summary>⚙️ 함수</summary>

- 함수명은 동사+명사 형태 사용
- get: 값 반환
- create: 새 값 생성
- check: 로직 검증
- convert: 변환
- add, minus: 더하거나 빼기
- filter: 배열 필터링
- 이벤트 핸들러에는 handle 접두사 붙이기
  - 예: handleResetClick, handleSubmitClick
- 유틸 함수는 반환값 기준으로 네이밍 (ex. hasEmail)
- 중복 함수는 utils 폴더에 모아 재사용 (2개 이상 도메인에서 쓰일 때)
- 함수는 화살표 함수로 작성

</details>

<details>
<summary>🧩 메소드</summary>

- 배열 복사 시 스프레드 연산자 ... 사용

```tsx
const copies = [...originals];
```

- for 대신 forEach 또는 map 사용
- 구조 분해 할당 적극 활용

```tsx
interface VoteAllInfoProps {
  date: number;
}

interface UserDataProps {
  userName: string;
  userBirth: string;
}

const MonthVoting = ({ date, time }: VoteAllInfoProps) => {
  /* ... */
};

function checkIsUser({ userName, userBirth }: UserDataProps) {
  /* ... */
}
```

</details>

<details>
<summary>🎨 스타일</summary>

- 시맨틱 태그 적극 활용 (MDN 문서 참고)
- 의미 없는 `<div>` 사용 금지
- Wrapper가 필요하면 Container 네이밍 사용

</details>

<details>
<summary>📚 Storybook</summary>

- 컴포넌트 설명에 interface 설명 포함

예시:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Common/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    componentSubtitle: '박스 컴포넌트',
    docs: {
      description: {
        component: `
Box 컴포넌트는 제목과 버튼이 포함된 컨테이너입니다.

- \`title\`: 박스 상단 제목
- \`showMore\`: 버튼 노출 여부
- \`showMoreText\`: 버튼 텍스트
- \`path\`: 클릭 시 이동 경로
- \`children\`: 콘텐츠 영역
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '375px', border: '1px solid #ccc' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    title: '박스 제목',
    children: <p>콘텐츠 영역입니다.</p>,
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    title: '박스 제목',
    children: <p>콘텐츠 영역입니다.</p>,
  },
};

export const WithButtonLabel: Story = {
  name: '더보기 버튼',
  args: {
    showMore: true,
    showMoreText: '더보기',
    path: '/more',
    children: <p>더보기 버튼이 있는 콘텐츠</p>,
  },
};

export const WithAllButton: Story = {
  name: '전체보기 버튼',
  args: {
    showMore: true,
    showMoreText: '전체보기',
    path: '/all',
    children: <p>전체보기 콘텐츠</p>,
  },
};
```

</details>

<details>
<summary>⚛️ React</summary>

- 고차 컴포넌트는 with 접두사 사용 → withAuth
- Context는 Context 접미사 사용 → UserContext
- React 타입은 개별 import 사용 → ReactNode (권장) / React.ReactNode (비권장)

</details>

### 📏 그라운드 룰

### 🗂️ 폴더구조

```
└── src/
    ├── app/                    // route VIEW
    │   ├── index.html
    │   └── App.tsx
    ├── pages/                  // VIEW -> 화면의 구조를 파악
    │   ├── home/
    │   │   └── page.tsx
    │   ├── report/
    │   ├── landing/
    │   ├── onboarding/
    │   ├── mypage/
    │   └── community/
    │       ├── detail/
    │       │   └── page.tsx
    │       ├── write/
    │       │   └── page.tsx
    │       └── page.tsx
    ├── widgets/                // 뷰 내부 로직, 컴포넌트,... 의 기능
    │   ├── home/
    │   ├── report/
    │   │   ├── configs/        // 상수
    │   │   ├── components/     // 해당 도메인 내 components, section
    │   │   ├── hooks/
    │   │   └── utils/
    │   ├── landing/
    │   ├── onboarding/
    │   ├── mypage/
    │   └── community/
    └── shared/
        ├── configs/
        ├── components/
        ├── hooks/
        ├── api/
        │   ├── domain/
        │   │   ├── home/
        │   │   │   └── queries.ts
        │   │   ├── report/
        │   │   │   └── queries.ts
        │   │   ├── landing/
        │   │   ├── onboarding/
        │   │   ├── mypage/
        │   │   └── community/
        │   ├── query.keys.ts    // 모든 쿼리 키는 shared 에서 관리
        │   └── types.ts         // 모든 api type는 shared 에서 관리
        └── utils/
└── packages/
    ├── bds-ui/
    └── bds-icons/
```

---

### 🎱 [보핏 팀 컨벤션 모아보기]()

------------------단체사진자리------------------
