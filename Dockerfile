# base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
FROM node:22-alpine as build

# 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 컨테이너 내부로 패키지 관련 파일들  복사
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./

# monorepo workspace 전체 복사
COPY . .

# package.json 및 package-lock.json 파일에 명시된 의존성 패키지들을 설치
RUN npm install -g pnpm
RUN pnpm install

# 전체 빌드
RUN pnpm build

# npm build (메모리 제한을 늘려서 실행)
#RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# prod environment
FROM nginx:stable-alpine

# root 사용자로 전환
USER root

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
COPY --from=build /app/apps/client/dist /usr/share/nginx/html

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
RUN rm /etc/nginx/conf.d/default.conf

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY nginx.conf /etc/nginx/conf.d

# /docker-entrypoint.sh 파일에 실행 권한 부여
RUN chmod +x /docker-entrypoint.sh

# 컨테이너의 80번 포트를 열어준다.
EXPOSE 80

# nginx 서버를 실행하고 백그라운드로 동작하도록 한다.
CMD ["nginx", "-g", "daemon off;"]