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

## BOFIT 팀 기술 스택

## TEAM-BOFIT Convention

### 💻 코딩 컨벤션

### 📏 그라운드 룰

### 🗂️ 폴더구조

```md
└── src/
├── app/ // route VIEW
│ ├── index.html
│ └── App.tsx
├── pages/ // VIEW -> 화면의 구조를 파악
│ ├── home/
│ │ └── page.tsx
│ ├── report/
│ ├── landing/
│ ├── onboarding/
│ ├── mypage/
│ └── community/
│ ├── detail/
│ │ └── page.tsx
│ ├── write/
│ │ └── page.tsx
│ └── page.tsx
├── widgets/ // 뷰 내부 로직, 컴포넌트,... 의 기능
│ ├── home/
│ ├── report/
│ │ ├── configs/ // 상수
│ │ ├── components/ // 해당 도메인 내 components, section
│ │ ├── hooks/
│ │ └── utils/
│ ├── landing/
│ ├── onboarding/
│ ├── mypage/
│ └── community/
└── shared/
├── configs/
├── components/
├── hooks/
├── api/  
 │ ├── domain/
│ │ ├── home/
│ │ │ └── queries.ts
│ │ ├── report/
│ │ │ └── queries.ts
│ │ ├── landing/
│ │ ├── onboarding/
│ │ ├── mypage/
│ │ └── community/
│ ├── query.keys.ts // 모든 쿼리 키는 shared 에서 관리
│ └── types.ts // 모든 api type는 shared 에서 관리
└── utils/
└── packages/
├── bds-ui/
└── bds-icons/
```

---

### 🎱 [보핏 팀 컨벤션 모아보기]()
