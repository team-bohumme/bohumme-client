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

> 💡 **컴포넌트 작성 시 핵심 원칙**
> 재사용 가능하고 명확한 구조로 설계하며, 비즈니스 로직과 디자인 시스템을 분리합니다.

#### 📋 네이밍 규칙

- **Interface**: 반드시 `Props` 접미사 사용
  - ✅ `CardProps`, `ChipProps`
  - ❌ `Card`, `ChipInterface`

#### 🏗️ 구조화 원칙

- **Fragment 사용**: 의미 없는 `<div>` 지양, 컴포넌트 최상단은 `Fragment` (`<>...</>`) 사용

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

- **Self-closing**: Children이 불필요할 때는 `<Component />` 사용
- **Headless UI**: 디자인 시스템 컴포넌트는 비즈니스 로직 최소화
- **도메인 분리**: 특정 도메인 의존 컴포넌트는 디자인 시스템이 아닌 client 내부에 작성

</details>

<details>
<summary>📁 폴더명</summary>

> 🎯 **일관된 폴더 구조로 프로젝트 관리**

| 규칙            | 설명                        | 예시                      |
| --------------- | --------------------------- | ------------------------- |
| **소문자 시작** | 모든 폴더명은 소문자로 시작 | `components`, `utils`     |
| **복수형**      | 항상 복수형으로 s 붙이기    | `pages`, `hooks`          |
| **케밥 케이스** | 단어 연결 시 하이픈 사용    | `user-pages`, `api-utils` |

</details>

<details>
<summary>📝 타입</summary>

> 🔧 **TypeScript 타입 정의 가이드**

#### 🎯 선택 기준

| 타입          | 사용 시기   | 특징                      |
| ------------- | ----------- | ------------------------- |
| **interface** | 기본 권장   | 병합 가능, 확장성 좋음    |
| **type**      | 특수한 경우 | 유니언, 튜플, 리터럴 타입 |

```tsx
// ✅ 권장: interface 사용
interface UserProps {
  name: string;
  age: number;
}

// ✅ 특수한 경우: type 사용
type Status = 'loading' | 'success' | 'error';
type Position = [number, number];
```

</details>

<details>
<summary>🔑 변수</summary>

> 📌 **명확하고 일관된 변수 선언**

#### 🚫 금지 사항

- **var 사용 금지**: `const` → `let` 순서로 선언
- **문자열 연결 금지**: `+` 대신 템플릿 리터럴 사용

#### ✅ 네이밍 규칙

| 타입          | 규칙                         | 예시                    |
| ------------- | ---------------------------- | ----------------------- |
| **상수**      | 대문자 스네이크 케이스       | `API_KEY`, `MAX_COUNT`  |
| **Boolean**   | `is` 접두사                  | `isActive`, `isLoading` |
| **일반 변수** | 의미 명확한 이름 (길어도 OK) | `userProfileData`       |

#### 🔑 Key 사용 규칙

- **정적 리스트**: index 사용 가능
- **동적 리스트**: 고유한 id 사용 필수
- **랜덤 값**: key로 사용 금지

</details>

<details>
<summary>⚙️ 함수</summary>

> 🎯 **명확한 함수 네이밍과 구조**

#### 📋 네이밍 패턴

| 접두사        | 용도          | 예시                      |
| ------------- | ------------- | ------------------------- |
| **get**       | 값 반환       | `getUserData`             |
| **create**    | 새 값 생성    | `createUser`              |
| **check**     | 로직 검증     | `checkValidation`         |
| **convert**   | 변환          | `convertToString`         |
| **add/minus** | 연산          | `addToCart`, `minusCount` |
| **filter**    | 배열 필터링   | `filterActiveUsers`       |
| **handle**    | 이벤트 핸들러 | `handleSubmitClick`       |

#### 🏗️ 구조 규칙

- **함수 형태**: 동사+명사 조합
- **이벤트 핸들러**: `handle` 접두사 필수
  - 예: `handleResetClick`, `handleSubmitClick`
- **유틸 함수**: 반환값 기준 네이밍 (ex. `hasEmail`)
- **재사용**: 2개 이상 도메인에서 사용 시 utils 폴더로 이동
- **선언 방식**: 화살표 함수 사용

</details>

<details>
<summary>🧩 메소드</summary>

> 🔄 **효율적인 데이터 처리 방법**

#### 📊 배열 처리

```tsx
// ✅ 스프레드 연산자 사용
const copies = [...originals];

// ✅ 함수형 메소드 사용 (for 대신)
items.forEach((item) => processItem(item));
items.map((item) => transformItem(item));
```

#### 🎯 구조 분해 할당 적극 활용

```tsx
interface VoteAllInfoProps {
  date: number;
  time: string;
}

interface UserDataProps {
  userName: string;
  userBirth: string;
}

// Props 구조 분해
const MonthVoting = ({ date, time }: VoteAllInfoProps) => {
  // 컴포넌트 로직
};

// 함수 매개변수 구조 분해
function checkIsUser({ userName, userBirth }: UserDataProps) {
  // 검증 로직
}
```

</details>

<details>
<summary>🎨 스타일</summary>

> 🏗️ **의미 있는 HTML 구조**

#### 📋 핵심 원칙

| 원칙                 | 설명                        | 예시                               |
| -------------------- | --------------------------- | ---------------------------------- |
| **시맨틱 태그**      | 의미에 맞는 태그 사용       | `<header>`, `<nav>`, `<main>`      |
| **div 지양**         | 의미 없는 div 사용 금지     | `<section>`, `<article>` 활용      |
| **Container 네이밍** | Wrapper 필요 시 명확한 이름 | `UserContainer`, `LayoutContainer` |

📖 **참고 자료**: [MDN HTML 시맨틱 태그 가이드](https://developer.mozilla.org/ko/docs/Web/HTML/Element)

</details>

<details>
<summary>📚 Storybook</summary>

> 📖 **컴포넌트 문서화 가이드**

#### 🎯 문서화 원칙

- **Interface 설명**: 모든 Props에 대한 명확한 설명 포함
- **사용 예시**: 다양한 시나리오별 Story 작성
- **시각적 테스트**: 컴포넌트의 모든 상태 검증

#### 📋 Story 구조 예시

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Common/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    componentSubtitle: '📦 박스 컴포넌트',
    docs: {
      description: {
        component: `
Box 컴포넌트는 제목과 버튼이 포함된 컨테이너입니다.

**Props 설명:**
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
};

export default meta;
type Story = StoryObj<typeof Box>;

// 🎯 기본 사용 예시
export const Default: Story = {
  args: {
    title: '박스 제목',
    children: <p>콘텐츠 영역입니다.</p>,
  },
};

// 🔗 더보기 버튼 예시
export const WithButtonLabel: Story = {
  name: '더보기 버튼',
  args: {
    showMore: true,
    showMoreText: '더보기',
    path: '/more',
    children: <p>더보기 버튼이 있는 콘텐츠</p>,
  },
};

// 📋 전체보기 버튼 예시
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

> 🏗️ **React 패턴 및 네이밍 규칙**

#### 📋 컴포넌트 패턴

| 패턴              | 규칙             | 예시                          |
| ----------------- | ---------------- | ----------------------------- |
| **고차 컴포넌트** | `with` 접두사    | `withAuth`, `withLoading`     |
| **Context**       | `Context` 접미사 | `UserContext`, `ThemeContext` |
| **Custom Hook**   | `use` 접두사     | `useAuth`, `useLocalStorage`  |

#### 🎯 타입 Import 규칙

```tsx
// ✅ 권장: 개별 import
import { ReactNode, FC } from 'react';

// ❌ 비권장: 네임스페이스 import
import React from 'react';
const node: React.ReactNode = <div />;
```

#### 🔧 컴포넌트 선언 방식

```tsx
// ✅ 권장: 화살표 함수 + 타입 정의
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

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
